import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectsGrid from '@/components/projects-grid';
import FeaturedProject from '@/components/featured-project';
import ProjectsHeader from '@/components/projects-header';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
  languages_url: string;
}

interface LanguageData {
  [key: string]: number;
}

async function getRepositories(): Promise<Repository[]> {
  try {
    const response = await fetch('https://api.github.com/users/Senuka9/repos?sort=updated&per_page=100', {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const repos = await response.json();
    return repos
      .filter((repo: Repository) => !repo.fork)
      .sort((a: Repository, b: Repository) => 
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}

async function getRepositoryLanguages(repo: Repository): Promise<string[]> {
  try {
    const response = await fetch(repo.languages_url, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      return repo.language ? [repo.language] : [];
    }
    
    const languages = await response.json() as LanguageData;
    const languageArray = Object.keys(languages);
    
    return languageArray.slice(0, 3);
  } catch (error) {
    return repo.language ? [repo.language] : [];
  }
}

async function getRepositoryReadme(repoName: string, defaultDesc: string | null): Promise<string> {
  try {
    let res = await fetch(`https://raw.githubusercontent.com/Senuka9/${repoName}/main/README.md`, { next: { revalidate: 3600 } });
    if (!res.ok) {
      res = await fetch(`https://raw.githubusercontent.com/Senuka9/${repoName}/master/README.md`, { next: { revalidate: 3600 } });
    }
    
    if (res.ok) {
      const text = await res.text();
      const lines = text.split('\n');
      let excerpt = '';
      for (const line of lines) {
        const cleanLine = line.trim();
        if (!cleanLine || cleanLine.startsWith('#') || cleanLine.startsWith('!') || cleanLine.startsWith('<') || cleanLine.startsWith('[')) continue;
        
        // Remove markdown formatting: >, **, *, _, ` and links
        let textLine = cleanLine
          .replace(/^[>-\s]+/, '') // Remove leading blockquotes or list dashes
          .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Extract text from links
          .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1') // Remove bold/italics
          .replace(/`([^`]+)`/g, '$1') // Remove inline code backticks
          .trim();
          
        if (!textLine) continue;
        
        excerpt += textLine + ' ';
        if (excerpt.length > 200) break;
      }
      
      const finalDesc = excerpt.trim().substring(0, 200);
      return finalDesc.length > 10 ? finalDesc + '...' : (defaultDesc || 'No description available.');
    }
    return defaultDesc || 'No description available.';
  } catch (error) {
    return defaultDesc || 'No description available.';
  }
}

export default async function ProjectsPage() {
  const repositories = await getRepositories();
  
  const reposWithLanguagesAndReadme = await Promise.all(
    repositories.map(async (repo) => {
      const languages = await getRepositoryLanguages(repo);
      const readmeExcerpt = await getRepositoryReadme(repo.name, repo.description);
      
      return {
        ...repo,
        languages,
        readmeExcerpt
      };
    })
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navbar />
      
      <section className="relative min-h-[80vh] overflow-hidden px-6 pb-24 pt-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-24 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
        </div>
        
        <div className="section-shell relative z-10">
          <ProjectsHeader />

          {/* Featured Project */}
          <div className="mt-16">
            <FeaturedProject />
          </div>

          {/* Projects Grid Client Component */}
          <div className="mt-8">
            <ProjectsGrid projects={reposWithLanguagesAndReadme} />
          </div>

          {/* View on GitHub CTA */}
          <div className="mt-24 flex justify-center border-t border-white/5 pt-12">
            <a
              href="https://github.com/Senuka9"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              View Complete Archive
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
