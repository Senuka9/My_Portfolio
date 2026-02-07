import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const repos = await response.json();
    
    // Filter out forks if desired, and sort by updated date
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
    
    // Return top 3 languages by bytes
    return languageArray.slice(0, 3);
  } catch (error) {
    return repo.language ? [repo.language] : [];
  }
}

const getLanguageColor = (language: string | null): string => {
  const colors: { [key: string]: string } = {
    'JavaScript': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'TypeScript': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Python': 'bg-blue-600/20 text-blue-300 border-blue-600/30',
    'React': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    'Next.js': 'bg-slate-700/20 text-slate-200 border-slate-700/30',
    'HTML': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'CSS': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    'Java': 'bg-orange-600/20 text-orange-300 border-orange-600/30',
    'Rust': 'bg-orange-700/20 text-orange-300 border-orange-700/30',
    'Go': 'bg-cyan-600/20 text-cyan-300 border-cyan-600/30',
    'Ruby': 'bg-red-500/20 text-red-300 border-red-500/30',
    'PHP': 'bg-purple-600/20 text-purple-300 border-purple-600/30',
    'Swift': 'bg-orange-400/20 text-orange-300 border-orange-400/30',
    'Kotlin': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'C++': 'bg-blue-700/20 text-blue-300 border-blue-700/30',
    'C#': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'Vue': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Angular': 'bg-red-600/20 text-red-300 border-red-600/30',
  };
  
  return colors[language || ''] || 'bg-slate-700/20 text-slate-300 border-slate-700/30';
};

export default async function ProjectsPage() {
  const repositories = await getRepositories();
  
  // Fetch languages for each repository
  const reposWithLanguages = await Promise.all(
    repositories.map(async (repo) => ({
      ...repo,
      languages: await getRepositoryLanguages(repo)
    }))
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navbar />
      
      <section className="relative py-24 px-6 pt-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Page Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span className="text-sm font-semibold text-cyan-400">MY WORK</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">My Recent</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              A collection of my latest work and experiments. All repositories are live-synced from my GitHub.
            </p>
          </div>

          {/* Projects Grid */}
          {reposWithLanguages.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {reposWithLanguages.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-all duration-300 bg-slate-900/30 hover:bg-slate-900/50 flex flex-col justify-between overflow-hidden"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Header */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex-1">
                        {repo.name}
                      </h3>
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-all duration-300 flex-shrink-0 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                      {repo.description || 'No description provided'}
                    </p>
                  </div>

                  {/* Languages Section */}
                  <div className="relative z-10 mb-4 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {repo.languages.length > 0 ? (
                        repo.languages.map((lang) => (
                          <span
                            key={lang}
                            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 ${getLanguageColor(lang)} group-hover:scale-105`}
                          >
                            {lang}
                          </span>
                        ))
                      ) : repo.language ? (
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLanguageColor(repo.language)}`}>
                          {repo.language}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-800/50">
                    <div className="flex items-center gap-3">
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1 text-sm text-slate-400 group-hover:text-yellow-400 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                          </svg>
                          {repo.stargazers_count}
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400">No repositories found. Check back soon!</p>
            </div>
          )}

          {/* View on GitHub CTA */}
          <div className="flex justify-center mt-16 pt-8 border-t border-slate-800/50">
            <a
              href="https://github.com/Senuka9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:translate-y-[-2px]"
            >
              View More on GitHub
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
