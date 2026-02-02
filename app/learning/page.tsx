import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function LearningPage() {
  const currentlyLearning = [
    {
      title: 'Advanced React',
      icon: '⚛',
      topics: [
        'Component architecture',
        'Performance optimization',
        'State management patterns'
      ]
    },
    {
      title: 'Backend Architecture',
      icon: '🧠',
      topics: [
        'Layered architecture',
        'Separation of concerns',
        'Scalable backend design'
      ]
    },
    {
      title: 'REST API Development',
      icon: '🔌',
      topics: [
        'API structure',
        'Authentication basics',
        'Request/response handling'
      ]
    },
    {
      title: 'Database Design',
      icon: '🗄',
      topics: [
        'Normalization',
        'Relationships',
        'Query optimization'
      ]
    }
  ];

  const exploring = [
    {
      title: 'AI Integration in Applications',
      description: 'Using AI features in web systems and understanding how to integrate AI capabilities.'
    },
    {
      title: 'Cloud Concepts',
      description: 'Deployment basics, hosting, environments, and cloud-native architecture.'
    },
    {
      title: 'System Design Fundamentals',
      description: 'Understanding how large systems are structured and scale.'
    }
  ];

  const practices = [
    'Building small feature-based projects',
    'Improving code structure and refactoring',
    'Refactoring old projects for better practices',
    'Reading documentation and technical blogs',
    'Exploring GitHub repositories for learning patterns'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-sm text-cyan-400">Growth Mindset</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Learning Journey</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I don&apos;t believe in staying at beginner level. I focus on understanding deeper software concepts, architecture, and building systems that scale.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Currently Learning */}
          <div className="mb-32">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Currently Learning</h2>
              <p className="text-slate-300 text-lg">
                These are the areas I&apos;m actively focused on right now. I dive deep into understanding the principles and patterns that make systems scalable and maintainable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {currentlyLearning.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-xl p-8 hover:border-cyan-500/30 transition">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="text-2xl font-bold text-cyan-400">{item.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="text-cyan-400 font-bold mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Exploring Next */}
          <div className="mb-32">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Exploring Next</h2>
              <p className="text-slate-300 text-lg">
                These are the areas I&apos;m preparing to explore. I believe in having a clear learning roadmap for continuous growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {exploring.map((item, index) => (
                <div key={index} className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-8 hover:border-cyan-500/30 transition">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What I Practice Regularly */}
          <div className="mb-32">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">What I Practice Regularly</h2>
              <p className="text-slate-300 text-lg">
                Learning is active, not passive. Here&apos;s how I stay engaged and continuously improve.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-xl p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {practices.map((practice, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-200 text-lg">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">My Learning Philosophy</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              I believe learning in software engineering never stops. I focus on understanding how systems work internally rather than only learning surface-level tools. My goal is to build software that is reliable, scalable, and maintainable. This journey from student to builder to engineer in progress is powered by curiosity and a commitment to mastery.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
