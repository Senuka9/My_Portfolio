import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectsGrid from '@/components/projects-grid';

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
      
      <section className="relative py-24 px-6 pt-32 overflow-hidden min-h-[80vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Page Header */}
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-cyan-500/50"></div>
              <span className="text-sm font-bold tracking-widest text-cyan-400 uppercase">My Work</span>
              <div className="w-12 h-px bg-cyan-500/50"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="text-white">Featured </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              A curated collection of my latest work and technical experiments. All repositories are dynamically fetched and updated continuously from my GitHub.
            </p>
          </div>

          {/* Projects Grid Client Component */}
          <ProjectsGrid projects={reposWithLanguagesAndReadme} />

          {/* View on GitHub CTA */}
          <div className="flex justify-center mt-24 pt-12 border-t border-white/5">
            <a
              href="https://github.com/Senuka9"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-cyan-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-3"
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
