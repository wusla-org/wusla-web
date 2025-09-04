"use client";


export default function Home() {
  const handleTooltipPosition = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // For the technology section, if element is in the top half, show tooltip below
    // Otherwise show above
    if (rect.top < viewportHeight * 0.6) {
      element.classList.add('tooltip-top');
    } else {
      element.classList.remove('tooltip-top');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-50/70 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-3xl font-black text-wusla tracking-tight">WUSLA</div>
          <div className="hidden lg:flex space-x-10">
            <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-wusla transition-all duration-200 font-medium">Services</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-wusla transition-all duration-200 font-medium">Projects</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-wusla transition-all duration-200 font-medium">About</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-wusla transition-all duration-200 font-medium">Contact</a>
          </div>
          <button className="bg-wusla hover:bg-wusla-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative overflow-hidden">
        {/* Teal Blur Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-wusla/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-wusla-light/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-wusla/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Clean, Bold Typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Building Digital
            <br />
            <span className="text-wusla">Excellence</span>
          </h1>
          
          {/* Simple Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            We create powerful web applications, mobile apps, and cloud solutions that drive business growth.
          </p>
          
          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="bg-wusla hover:bg-wusla-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border-2 border-gray-200 dark:border-gray-500 hover:border-wusla text-gray-700 dark:text-gray-300 hover:text-wusla px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Our Work
            </button>
          </div>
          
          {/* Clean Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-wusla mb-1">50+</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-wusla mb-1">5+</div>
              <div className="text-sm text-gray-500">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-wusla mb-1">25+</div>
              <div className="text-sm text-gray-500">Clients</div>
            </div>
          </div>
        </div>
        
        {/* Simple Client Logos */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-8 text-sm text-gray-400">
            <span>TechCorp</span>
            <span>InnovateX</span>
            <span>CloudFlow</span>
            <span>DataSync</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-wusla">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We specialize in modern technology stacks to deliver robust, scalable solutions for businesses of all sizes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-wusla/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-wusla/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-wusla" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Full-stack web applications using modern frameworks like React, Next.js, Node.js, and Django.</p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-2">
                <li><strong>MERN Stack:</strong> MongoDB, Express, React, Node.js</li>
                <li><strong>Frontend:</strong> React, Next.js, Vue.js, TypeScript</li>
                <li><strong>Backend:</strong> Node.js, Python Django, Express</li>
                <li><strong>Database:</strong> PostgreSQL, MongoDB, MySQL</li>
                <li><strong>Deployment:</strong> AWS, Vercel, Digital Ocean</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-wusla/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-wusla/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-wusla" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mobile Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Cross-platform mobile applications with native performance and seamless user experiences.</p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-2">
                <li><strong>Cross-Platform:</strong> React Native, Flutter</li>
                <li><strong>Native:</strong> iOS (Swift), Android (Kotlin)</li>
                <li><strong>Features:</strong> Push notifications, offline support</li>
                <li><strong>Integration:</strong> REST APIs, GraphQL, Firebase</li>
                <li><strong>Publishing:</strong> App Store, Google Play Store</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-wusla/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-wusla/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-wusla" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cloud Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Scalable cloud infrastructure and deployment solutions for modern applications.</p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-2">
                <li><strong>Cloud Platforms:</strong> AWS, Google Cloud, Azure</li>
                <li><strong>Containers:</strong> Docker, Kubernetes, Docker Compose</li>
                <li><strong>CI/CD:</strong> GitHub Actions, Jenkins, GitLab</li>
                <li><strong>Databases:</strong> RDS, MongoDB Atlas, Redis</li>
                <li><strong>Monitoring:</strong> CloudWatch, Prometheus</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-wusla/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-wusla/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-wusla" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AI Integration</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Intelligent features powered by machine learning and artificial intelligence.</p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-2">
                <li><strong>AI APIs:</strong> OpenAI GPT, Claude, Google AI</li>
                <li><strong>ML Frameworks:</strong> TensorFlow, PyTorch</li>
                <li><strong>Data Processing:</strong> Python, Pandas, NumPy</li>
                <li><strong>Analytics:</strong> Real-time data processing</li>
                <li><strong>Automation:</strong> Workflow optimization</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-wusla/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-wusla/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-wusla" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Open Source</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Contributing to the community with open-source tools and libraries.</p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <li>• GitHub Contributions</li>
                <li>• Developer Tools</li>
                <li>• Community Support</li>
                <li>• Technical Documentation</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-wusla/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-wusla/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-wusla" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Consulting</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Strategic technology consulting and architecture planning for your business.</p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Technical Architecture</li>
                <li>• Code Reviews</li>
                <li>• Performance Optimization</li>
                <li>• Team Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration Showcase */}
      <section className="relative py-32 overflow-hidden bg-gray-900 dark:bg-black">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-wusla/10 via-transparent to-blue-600/10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-wusla/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-wusla/10 border border-wusla/20 rounded-full px-6 py-2 mb-6">
              <span className="w-2 h-2 bg-wusla rounded-full animate-pulse"></span>
              <span className="text-wusla text-sm font-medium">Our Tech Arsenal</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Technologies We
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wusla to-blue-400">Master</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Our expertise spans the entire technology ecosystem, from cutting-edge frontend frameworks to scalable cloud infrastructure.
            </p>
          </div>
          
          {/* Enhanced Animated Technology Grid */}
          <div className="relative scroll-fade scroll-fade-vertical scroll-fade-enhanced mb-16">
            {/* First Row - Moving Right Fast */}
            <div className="mb-8">
              <div className="scroll-container animate-scroll-right">
                <div className="flex space-x-8 whitespace-nowrap">
                  {[
                    { name: 'React', bg: 'bg-blue-500/30', glow: 'shadow-blue-500/20', svg: <svg className="w-8 h-8" fill="#61DAFB" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M12,1C18.5,1,24,4.58,24,9C24,13.42,18.5,17,12,17C5.5,17,0,13.42,0,9C0,4.58,5.5,1,12,1M12,23C5.5,23,0,19.42,0,15C0,10.58,5.5,7,12,7C18.5,7,24,10.58,24,15C24,19.42,18.5,23,12,23Z"/><path d="M12,1C18.5,1,24,4.58,24,9C24,13.42,18.5,17,12,17C5.5,17,0,13.42,0,9C0,4.58,5.5,1,12,1" transform="rotate(60 12 12)"/><path d="M12,1C18.5,1,24,4.58,24,9C24,13.42,18.5,17,12,17C5.5,17,0,13.42,0,9C0,4.58,5.5,1,12,1" transform="rotate(-60 12 12)"/></svg> },
                    { name: 'Node.js', bg: 'bg-green-500/30', glow: 'shadow-green-500/20', svg: <svg className="w-8 h-8" fill="#68A063" viewBox="0 0 24 24"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.244-.224-.33-.08-.38.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.238L11.13.584c-.081-.047-.189-.047-.271 0L2.063 6.68c-.085.049-.138.142-.138.242v10.162c0 .103.054.19.137.238l2.408 1.391c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.255-.253h1.114c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.226 18.665c-.57-.329-.922-.94-.922-1.597V6.921c0-.658.353-1.267.922-1.596L9.021.248C9.54-.083 10.460-.083 10.977.248l8.795 5.077c.57.329.922.938.922 1.596v10.147c0 .658-.353 1.268-.922 1.597l-8.795 5.077c-.282.165-.603.248-.979.248zm2.886-7.817c-3.85 0-4.651-1.767-4.651-3.248 0-.141.113-.254.255-.254h1.135c.127 0 .232.092.251.217.171 1.152.683 1.734 3.01 1.734 1.852 0 2.643-.42 2.643-1.405 0-.568-.224-.99-3.101-1.274-2.407-.238-3.895-.769-3.895-2.693 0-1.774 1.494-2.832 3.998-2.832 2.815 0 4.206.978 4.38 3.078.009.072-.018.142-.063.194-.046.051-.111.08-.179.08h-1.141c-.118 0-.221-.082-.248-.195-.276-1.225-.946-1.617-2.749-1.617-2.025 0-2.26.706-2.26 1.235 0 .64.278.825 3.007 1.184 2.706.357 3.99.862 3.99 2.77 0 1.92-1.6 3.017-4.394 3.017z"/></svg> },
                    { name: 'Python', bg: 'bg-yellow-500/30', glow: 'shadow-yellow-500/20', svg: <svg className="w-8 h-8" viewBox="0 0 24 24"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.01 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.762s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051-.578 0-1.046-.47-1.046-1.051 0-.582.468-1.052 1.046-1.052z" fill="#366994"/><path d="M12.087 24c6.094 0 5.714-2.656 5.714-2.656l-.01-2.752h-5.815v-.826H20.1s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.455s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24zm3.206-1.85c-.578 0-1.046-.47-1.046-1.052 0-.581.468-1.051 1.046-1.051.578 0 1.046.47 1.046 1.051 0 .582-.468 1.052-1.046 1.052z" fill="#ffd43b"/></svg> },
                    { name: 'MongoDB', bg: 'bg-green-400/30', glow: 'shadow-green-400/20', svg: <svg className="w-8 h-8" fill="#47A248" viewBox="0 0 24 24"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.017.869-9.058.585 3.041.755 6.026.869 9.058h.48a73.49 73.49 0 01.33-3.462l.07-.05c.618-.449 5.17-3.972 4.888-9.884-.302-6.338-4.017-9.454-4.74-10.02-.468-.499-.487-.689-.523-1.184-.205.486-.455 1.046-.735 1.44-.321.701-3.309 2.535-4.573 8.115z"/></svg> },
                    { name: 'AWS', bg: 'bg-orange-500/30', glow: 'shadow-orange-500/20', svg: <svg className="w-8 h-8" fill="#FF9900" viewBox="0 0 24 24"><path d="M6.76 10.04c0 .296.032.535.088.719.063.184.131.368.227.552.032.063.032.114.032.184 0 .063-.056.125-.125.184l-.411.271c-.063.032-.125.063-.184.063-.088 0-.184-.032-.271-.125-.48-.546-.51-.753-.51-1.072 0-.592.125-1.178.375-1.757s.674-1.417 1.266-2.29c.032-.063.088-.088.184-.088s.152.025.184.088l.871 2.047c.032.063.032.125 0 .184-.063.059-.156.122-.219.185zm14.928 6.693c-.296.375-.79.559-1.405.559H6.717c-.615 0-1.109-.184-1.405-.559-.696-.695-.696-1.07-.391-1.445l6.342-10.949c.296-.375.79-.559 1.405-.559.615 0 1.109.184 1.405.559l6.342 10.949c.305.375.305.75-.391 1.445z"/><path d="M18.576 20.17v1.389c0 .172-.139.295-.3.295H5.724c-.161 0-.3-.123-.3-.295V20.17c0-.171.139-.294.3-.294h12.552c.161 0 .3.123.3.294zm-7.256-7.653c-.18 0-.334-.154-.334-.334v-.5c0-.18.154-.334.334-.334h1.36c.18 0 .334.154.334.334v.5c0 .18-.154.334-.334.334h-1.36z"/></svg> },
                    { name: 'Docker', bg: 'bg-blue-400/30', glow: 'shadow-blue-400/20', svg: <svg className="w-8 h-8" fill="#2496ED" viewBox="0 0 24 24"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.187.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.187.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.187.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg> },
                    { name: 'Firebase', bg: 'bg-red-500/30', glow: 'shadow-red-500/20', svg: <svg className="w-8 h-8" fill="#FFCA28" viewBox="0 0 24 24"><path d="M5.803 21.59l2.756-16.544.991 1.883 8.467 14.661L5.803 21.59zM19.72 19.08L16.417 5.462c-.191-.702-.69-.702-.882 0L13.57 12.41 10.354 6.12c-.24-.468-.73-.468-.97 0L2.913 19.08c-.24.468-.043.85.438.85h15.93c.48 0 .677-.382.438-.85z"/><path fill="#FFA000" d="m13.535 12.41 2.882-7.948a.396.396 0 0 1 .747 0L19.72 19.08c.24.468.043.85-.438.85h-5.747l-.882-7.52z"/></svg> },
                    { name: 'GraphQL', bg: 'bg-pink-500/30', glow: 'shadow-pink-500/20', svg: <svg className="w-8 h-8" fill="#E10098" viewBox="0 0 24 24"><path d="M14.234 12.464L16.102 4.1a.546.546 0 01.684-.405c.285.067.457.361.384.653l-1.870 8.116h-.066zm-8.351-.231L4.005 4.207a.546.546 0 01.367-.684.553.553 0 01.653.385l1.858 8.325zm8.35.002c-.674.085-1.14.698-1.042 1.371.097.674.698 1.14 1.371 1.042a1.096 1.096 0 001.042-1.371 1.096 1.096 0 00-1.371-1.042zM12 3.273c-.678 0-1.227.55-1.227 1.228 0 .678.55 1.227 1.227 1.227.678 0 1.227-.549 1.227-1.227 0-.678-.55-1.228-1.227-1.228z"/><path d="M12 0l3.708 6.424-.571.99L12 5.196 8.863 7.414l-.571-.99L12 0zm0 24l-3.708-6.424.571-.99L12 18.804l3.137-2.218.571.99L12 24zm12-6l-6.424-3.708-.99.571L18.804 12l-2.218 3.137.99.571L24 12zm-24 0l6.424 3.708.99-.571L5.196 12l2.218-3.137-.99-.571L0 12z"/></svg> },
                    { name: 'TypeScript', bg: 'bg-blue-600/30', glow: 'shadow-blue-600/20', svg: <svg className="w-8 h-8" fill="#3178C6" viewBox="0 0 24 24"><rect width="24" height="24" rx="2" fill="#3178C6"/><path fill="white" d="M9.5 7h5v1.5H12V19h-1V8.5H9.5V7zm5.5 4.5V19h1v-5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V19h1v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5z"/></svg> },
                    { name: 'Next.js', bg: 'bg-gray-700/30', glow: 'shadow-gray-500/20', svg: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.025 11.9 11.9 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.683 4.106 20.056.748 15.11.091 14.63.033 14.2.011 13.617.005 13.514.002 13.334 0 13.138 0h-1.564z"/></svg> },
                    { name: 'Vue.js', bg: 'bg-green-600/30', glow: 'shadow-green-600/20', svg: <svg className="w-8 h-8" fill="#4FC08D" viewBox="0 0 24 24"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg> },
                    { name: 'Angular', bg: 'bg-red-600/30', glow: 'shadow-red-600/20', svg: <svg className="w-8 h-8" fill="#DD0031" viewBox="0 0 24 24"><path d="M12 2L2 6l1.5 15L12 24l8.5-3L22 6 12 2zm0 2.5l7.5 3.3-1.2 12.2L12 21.5 5.7 20 4.5 7.8 12 4.5z"/><path fill="white" d="M12 4.5L8.3 16.8h1.4l.7-2.4h3.2l.7 2.4h1.4L12 4.5zm0 3.6l1.1 3.5h-2.2L12 8.1z"/></svg> }
                  ].map((tech, index) => (
                    <div key={`row1-${index}`} className={`inline-flex flex-shrink-0 w-20 h-20 ${tech.bg} rounded-3xl border-2 border-white/20 backdrop-blur-xl items-center justify-center group hover:scale-125 hover:rotate-12 transition-all duration-500 cursor-pointer tech-tooltip animate-float-gentle shadow-2xl ${tech.glow}`} data-tooltip={tech.name} style={{animationDelay: `${index * 0.1}s`}} onMouseEnter={handleTooltipPosition}>
                      <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                        {tech.svg}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-8 whitespace-nowrap" aria-hidden="true">
                  {[
                    { name: 'React', bg: 'bg-blue-500/30', glow: 'shadow-blue-500/20', svg: <svg className="w-8 h-8" fill="#61DAFB" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M12,1C18.5,1 23.64,3.15 26.5,7.5C23.64,11.85 18.5,14 12,14C5.5,14 0.36,11.85 -2.5,7.5C0.36,3.15 5.5,1 12,1M12,22C5.5,22 0.36,19.85 -2.5,15.5C0.36,11.15 5.5,9 12,9C18.5,9 23.64,11.15 26.5,15.5C23.64,19.85 18.5,22 12,22Z"/></svg> },
                    { name: 'Node.js', bg: 'bg-green-500/30', glow: 'shadow-green-500/20', svg: <svg className="w-8 h-8" fill="#68A063" viewBox="0 0 24 24"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.244-.224-.33-.08-.38.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.238L11.13.584c-.081-.047-.189-.047-.271 0L2.063 6.68c-.085.049-.138.142-.138.242v10.162c0 .103.054.19.137.238l2.408 1.391c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.255-.253h1.114c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.226 18.665c-.57-.329-.922-.94-.922-1.597V6.921c0-.658.353-1.267.922-1.596L9.021.248C9.54-.083 10.460-.083 10.977.248l8.795 5.077c.57.329.922.938.922 1.596v10.147c0 .658-.353 1.268-.922 1.597l-8.795 5.077c-.282.165-.603.248-.979.248zm2.886-7.817c-3.85 0-4.651-1.767-4.651-3.248 0-.141.113-.254.255-.254h1.135c.127 0 .232.092.251.217.171 1.152.683 1.734 3.01 1.734 1.852 0 2.643-.42 2.643-1.405 0-.568-.224-.99-3.101-1.274-2.407-.238-3.895-.769-3.895-2.693 0-1.774 1.494-2.832 3.998-2.832 2.815 0 4.206.978 4.38 3.078.009.072-.018.142-.063.194-.046.051-.111.08-.179.08h-1.141c-.118 0-.221-.082-.248-.195-.276-1.225-.946-1.617-2.749-1.617-2.025 0-2.26.706-2.26 1.235 0 .64.278.825 3.007 1.184 2.706.357 3.99.862 3.99 2.77 0 1.92-1.6 3.017-4.394 3.017z"/></svg> },
                    { name: 'Python', bg: 'bg-yellow-500/30', glow: 'shadow-yellow-500/20', svg: <svg className="w-8 h-8" viewBox="0 0 24 24"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.01 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.762s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051-.578 0-1.046-.47-1.046-1.051 0-.582.468-1.052 1.046-1.052z" fill="#366994"/><path d="M12.087 24c6.094 0 5.714-2.656 5.714-2.656l-.01-2.752h-5.815v-.826H20.1s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.455s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24zm3.206-1.85c-.578 0-1.046-.47-1.046-1.052 0-.581.468-1.051 1.046-1.051.578 0 1.046.47 1.046 1.051 0 .582-.468 1.052-1.046 1.052z" fill="#ffd43b"/></svg> },
                    { name: 'MongoDB', bg: 'bg-green-400/30', glow: 'shadow-green-400/20', svg: <svg className="w-8 h-8" fill="#47A248" viewBox="0 0 24 24"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.017.869-9.058.585 3.041.755 6.026.869 9.058h.48a73.49 73.49 0 01.33-3.462l.07-.05c.618-.449 5.17-3.972 4.888-9.884-.302-6.338-4.017-9.454-4.74-10.02-.468-.499-.487-.689-.523-1.184-.205.486-.455 1.046-.735 1.44-.321.701-3.309 2.535-4.573 8.115z"/></svg> },
                    { name: 'AWS', bg: 'bg-orange-500/30', glow: 'shadow-orange-500/20', svg: <svg className="w-8 h-8" fill="#FF9900" viewBox="0 0 24 24"><path d="M6.76 10.04c0 .296.032.535.088.719.063.184.131.368.227.552.032.063.032.114.032.184 0 .063-.056.125-.125.184l-.411.271c-.063.032-.125.063-.184.063-.088 0-.184-.032-.271-.125-.48-.546-.51-.753-.51-1.072 0-.592.125-1.178.375-1.757s.674-1.417 1.266-2.29c.032-.063.088-.088.184-.088s.152.025.184.088l.871 2.047c.032.063.032.125 0 .184-.063.059-.156.122-.219.185zm14.928 6.693c-.296.375-.79.559-1.405.559H6.717c-.615 0-1.109-.184-1.405-.559-.696-.695-.696-1.07-.391-1.445l6.342-10.949c.296-.375.79-.559 1.405-.559.615 0 1.109.184 1.405.559l6.342 10.949c.305.375.305.75-.391 1.445z"/><path d="M18.576 20.17v1.389c0 .172-.139.295-.3.295H5.724c-.161 0-.3-.123-.3-.295V20.17c0-.171.139-.294.3-.294h12.552c.161 0 .3.123.3.294zm-7.256-7.653c-.18 0-.334-.154-.334-.334v-.5c0-.18.154-.334.334-.334h1.36c.18 0 .334.154.334.334v.5c0 .18-.154.334-.334.334h-1.36z"/></svg> },
                    { name: 'Docker', bg: 'bg-blue-400/30', glow: 'shadow-blue-400/20', svg: <svg className="w-8 h-8" fill="#2496ED" viewBox="0 0 24 24"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.187.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.187.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.187.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg> },
                    { name: 'Firebase', bg: 'bg-red-500/30', glow: 'shadow-red-500/20', svg: <svg className="w-8 h-8" fill="#FFCA28" viewBox="0 0 24 24"><path d="M5.803 21.59l2.756-16.544.991 1.883 8.467 14.661L5.803 21.59zM19.72 19.08L16.417 5.462c-.191-.702-.69-.702-.882 0L13.57 12.41 10.354 6.12c-.24-.468-.73-.468-.97 0L2.913 19.08c-.24.468-.043.85.438.85h15.93c.48 0 .677-.382.438-.85z"/><path fill="#FFA000" d="m13.535 12.41 2.882-7.948a.396.396 0 0 1 .747 0L19.72 19.08c.24.468.043.85-.438.85h-5.747l-.882-7.52z"/></svg> },
                    { name: 'GraphQL', bg: 'bg-pink-500/30', glow: 'shadow-pink-500/20', svg: <svg className="w-8 h-8" fill="#E10098" viewBox="0 0 24 24"><path d="M14.234 12.464L16.102 4.1a.546.546 0 01.684-.405c.285.067.457.361.384.653l-1.870 8.116h-.066zm-8.351-.231L4.005 4.207a.546.546 0 01.367-.684.553.553 0 01.653.385l1.858 8.325zm8.35.002c-.674.085-1.14.698-1.042 1.371.097.674.698 1.14 1.371 1.042a1.096 1.096 0 001.042-1.371 1.096 1.096 0 00-1.371-1.042zM12 3.273c-.678 0-1.227.55-1.227 1.228 0 .678.55 1.227 1.227 1.227.678 0 1.227-.549 1.227-1.227 0-.678-.55-1.228-1.227-1.228z"/><path d="M12 0l3.708 6.424-.571.99L12 5.196 8.863 7.414l-.571-.99L12 0zm0 24l-3.708-6.424.571-.99L12 18.804l3.137-2.218.571.99L12 24zm12-6l-6.424-3.708-.99.571L18.804 12l-2.218 3.137.99.571L24 12zm-24 0l6.424 3.708.99-.571L5.196 12l2.218-3.137-.99-.571L0 12z"/></svg> },
                    { name: 'TypeScript', bg: 'bg-blue-600/30', glow: 'shadow-blue-600/20', svg: <svg className="w-8 h-8" fill="#3178C6" viewBox="0 0 24 24"><rect width="24" height="24" rx="2" fill="#3178C6"/><path fill="white" d="M9.5 7h5v1.5H12V19h-1V8.5H9.5V7zm5.5 4.5V19h1v-5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V19h1v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5z"/></svg> },
                    { name: 'Next.js', bg: 'bg-gray-700/30', glow: 'shadow-gray-500/20', svg: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.025 11.9 11.9 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.683 4.106 20.056.748 15.11.091 14.63.033 14.2.011 13.617.005 13.514.002 13.334 0 13.138 0h-1.564z"/></svg> },
                    { name: 'Vue.js', bg: 'bg-green-600/30', glow: 'shadow-green-600/20', svg: <svg className="w-8 h-8" fill="#4FC08D" viewBox="0 0 24 24"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg> },
                    { name: 'Angular', bg: 'bg-red-600/30', glow: 'shadow-red-600/20', svg: <svg className="w-8 h-8" fill="#DD0031" viewBox="0 0 24 24"><path d="M12 2L2 6l1.5 15L12 24l8.5-3L22 6 12 2zm0 2.5l7.5 3.3-1.2 12.2L12 21.5 5.7 20 4.5 7.8 12 4.5z"/><path fill="white" d="M12 4.5L8.3 16.8h1.4l.7-2.4h3.2l.7 2.4h1.4L12 4.5zm0 3.6l1.1 3.5h-2.2L12 8.1z"/></svg> }
                  ].map((tech, index) => (
                    <div key={`row1-dup-${index}`} className={`inline-flex flex-shrink-0 w-20 h-20 ${tech.bg} rounded-3xl border-2 border-white/20 backdrop-blur-xl items-center justify-center group hover:scale-125 hover:rotate-12 transition-all duration-500 cursor-pointer tech-tooltip animate-float-gentle shadow-2xl ${tech.glow}`} data-tooltip={tech.name} style={{animationDelay: `${index * 0.1}s`}} onMouseEnter={handleTooltipPosition}>
                      <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                        {tech.svg}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Second Row - Moving Left */}
            <div className="mb-8">
              <div className="scroll-container animate-scroll-left">
                <div className="flex space-x-8 whitespace-nowrap">
                  {[
                    { name: 'React Native', bg: 'bg-purple-500/30', glow: 'shadow-purple-500/20', svg: <svg className="w-8 h-8" viewBox="0 0 24 24"><rect width="16" height="22" x="4" y="1" fill="#61DAFB" rx="2" ry="2"/><circle cx="12" cy="12" r="1.5" fill="white"/><circle cx="12" cy="12" r="7" fill="none" stroke="white" strokeWidth="1"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(60 12 12)"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(-60 12 12)"/></svg> },
                    { name: 'Flutter', bg: 'bg-cyan-500/30', glow: 'shadow-cyan-500/20', svg: <svg className="w-8 h-8" viewBox="0 0 24 24"><path fill="#42A5F5" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.007 11.105L7.531 18h7.378l-.007-.007L21.684 11.1 15.93 5.347l-1.609 1.608z"/><path fill="#1976D2" d="m7.531 18 3.078-3.078.007.007L14.321 18H7.53z"/><path fill="#42A5F5" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37z" opacity=".85"/></svg> },
                    { name: 'Swift', bg: 'bg-orange-600/30', glow: 'shadow-orange-600/20', svg: <svg className="w-8 h-8" fill="#FA7343" viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573.05-.849.152C5.16.51 3.764 1.353 2.698 2.568 1.645 3.791.954 5.35.778 7.002c-.177 1.652.19 3.312.995 4.703C2.58 13.094 3.634 14.185 4.92 14.848c1.285.663 2.749.896 4.163.658 1.414-.237 2.722-.934 3.716-1.985 1.001-1.058 1.666-2.44 1.9-3.928.233-1.488-.019-3.016-.717-4.34C13.28 3.927 12.314 2.85 11.114 2.092 9.914 1.335 8.525.9 7.124.832c-.123-.006-.246-.008-.37-.008zm8.684 6.14c-.588.014-1.167.128-1.707.339-.54.211-1.027.516-1.435.896-.409.38-.73.833-.946 1.334-.216.5-.321 1.037-.31 1.578.012.54.136 1.072.364 1.559.228.487.557.92.968 1.274.41.354.893.624 1.421.794.528.17 1.086.237 1.641.197.555-.04 1.095-.202 1.587-.476.492-.274.925-.658 1.271-1.133.346-.474.598-1.024.742-1.618.143-.594.175-1.214.092-1.824-.083-.61-.292-1.199-.612-1.733-.32-.534-.742-.999-1.242-1.368-.5-.369-1.068-.634-1.671-.758-.301-.062-.607-.077-.916-.061z"/></svg> },
                    { name: 'Kotlin', icon: '🤖', bg: 'bg-orange-600/30', glow: 'shadow-orange-600/20' },
                    { name: 'PostgreSQL', bg: 'bg-blue-700/30', glow: 'shadow-blue-700/20', svg: <svg className="w-8 h-8" fill="#336791" viewBox="0 0 24 24"><path d="M17.128 0C15.624 0 14.248.363 13.14 1.008c-1.747.9-2.99 2.48-3.717 4.496l-.243-.068C8.512 5.25 7.674 5.164 6.858 5.164c-2.573 0-4.596 1.06-5.751 3.012C.425 9.25.058 10.748.058 12.37c0 1.837.41 3.61 1.18 5.192.77 1.582 1.867 2.91 3.217 3.89 1.35.98 2.917 1.548 4.588 1.548 1.32 0 2.576-.283 3.713-.822 1.137-.54 2.127-1.307 2.883-2.24.756-.93 1.274-2 1.535-3.116.26-1.113.26-2.246 0-3.36-.26-1.115-.78-2.186-1.535-3.116-.756-.933-1.746-1.7-2.883-2.24C11.618.283 10.363 0 9.043 0c-.648 0-1.276.055-1.875.164l.243.068c-.727-2.016-1.97-3.596-3.717-4.496C2.586.363 1.21 0-.294 0c-1.504 0-2.88.363-3.988 1.008C-5.725 1.65-6.79 2.64-7.552 3.86c-.762 1.22-1.2 2.627-1.2 4.088 0 1.46.438 2.867 1.2 4.087.762 1.22 1.827 2.21 3.27 2.852C-3.04 15.53-1.664 15.893-.16 15.893c1.504 0 2.88-.363 3.988-1.008 1.443-.642 2.508-1.632 3.27-2.852.762-1.22 1.2-2.627 1.2-4.087 0-1.46-.438-2.867-1.2-4.088C6.336 2.64 5.27 1.65 3.828 1.008 2.72.363 1.344 0-.16 0z"/></svg> },
                    { name: 'MySQL', icon: '🐬', bg: 'bg-orange-400/30', glow: 'shadow-orange-400/20' },
                    { name: 'Redis', bg: 'bg-red-600/30', glow: 'shadow-red-600/20', svg: <svg className="w-8 h-8" fill="#DC382D" viewBox="0 0 24 24"><path d="M22.394 12.428c-1.037.55-5.87 2.67-6.932 3.2-.62.31-1.285.54-1.958.745-.71.217-1.437.408-2.176.567v.68c0 .157-.127.284-.284.284H8.958c-.157 0-.284-.127-.284-.284v-.68c-.74-.16-1.466-.35-2.176-.567-.673-.205-1.338-.434-1.958-.745C3.476 15.098-.357 12.978-1.394 12.428c-1.037-.55-1.037-1.444 0-1.994 1.037-.55 5.87-2.67 6.932-3.2.62-.31 1.285-.54 1.958-.745.71-.217 1.437-.408 2.176-.567v-.68c0-.157.127-.284.284-.284h2.086c.157 0 .284.127.284.284v.68c.74.16 1.466.35 2.176.567.673.205 1.338.434 1.958.745 1.062.53 5.895 2.65 6.932 3.2 1.037.55 1.037 1.444 0 1.994z"/></svg> },
                    { name: 'Kubernetes', bg: 'bg-blue-600/30', glow: 'shadow-blue-600/20', svg: <svg className="w-8 h-8" fill="#326CE5" viewBox="0 0 24 24"><path d="M12.875 2.982c-.158-.065-.315-.128-.491-.159A1.026 1.026 0 0012 2.87a1.026 1.026 0 00-.384-.047c-.176.031-.333.094-.491.159L5.74 5.42a1.006 1.006 0 00-.491.824v5.512c0 .37.198.711.491.824l5.385 2.438c.158.065.315.128.491.159.118.031.266.047.384.047s.266-.016.384-.047c.176-.031.333-.094.491-.159l5.385-2.438a1.006 1.006 0 00.491-.824V6.244a1.006 1.006 0 00-.491-.824L12.875 2.982zm.125 1.23l4.937 2.233-1.789.811L12 5.555 7.852 7.256l-1.789-.811L12 4.212zm0 2.84l3.789 1.716v3.464L12 13.948 7.211 12.232V8.768L12 7.052z"/></svg> },
                    { name: 'Jenkins', icon: '👷', bg: 'bg-blue-800/30', glow: 'shadow-blue-800/20' },
                    { name: 'GitHub', bg: 'bg-gray-800/30', glow: 'shadow-gray-600/20', svg: <svg className="w-8 h-8" fill="#fff" viewBox="0 0 24 24"><path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"/></svg> },
                    { name: 'Stripe', icon: '💳', bg: 'bg-purple-600/30', glow: 'shadow-purple-600/20' },
                    { name: 'Vercel', icon: '🚀', bg: 'bg-black/30', glow: 'shadow-white/10' }
                  ].map((tech, index) => (
                    <div key={`row2-${index}`} className={`inline-flex flex-shrink-0 w-20 h-20 ${tech.bg} rounded-3xl border-2 border-white/20 backdrop-blur-xl items-center justify-center group hover:scale-125 hover:rotate-12 transition-all duration-500 cursor-pointer tech-tooltip animate-float-gentle shadow-2xl ${tech.glow}`} data-tooltip={tech.name} style={{animationDelay: `${index * 0.15}s`}}>
                      <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"><span className="text-3xl">{tech.icon}</span></div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-8 whitespace-nowrap" aria-hidden="true">
                  {[
                    { name: 'React Native', bg: 'bg-purple-500/30', glow: 'shadow-purple-500/20', svg: <svg className="w-8 h-8" viewBox="0 0 24 24"><rect width="16" height="22" x="4" y="1" fill="#61DAFB" rx="2" ry="2"/><circle cx="12" cy="12" r="1.5" fill="white"/><circle cx="12" cy="12" r="7" fill="none" stroke="white" strokeWidth="1"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(60 12 12)"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(-60 12 12)"/></svg> },
                    { name: 'Flutter', bg: 'bg-cyan-500/30', glow: 'shadow-cyan-500/20', svg: <svg className="w-8 h-8" viewBox="0 0 24 24"><path fill="#42A5F5" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.007 11.105L7.531 18h7.378l-.007-.007L21.684 11.1 15.93 5.347l-1.609 1.608z"/><path fill="#1976D2" d="m7.531 18 3.078-3.078.007.007L14.321 18H7.53z"/><path fill="#42A5F5" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37z" opacity=".85"/></svg> },
                    { name: 'Swift', bg: 'bg-orange-600/30', glow: 'shadow-orange-600/20', svg: <svg className="w-8 h-8" fill="#FA7343" viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573.05-.849.152C5.16.51 3.764 1.353 2.698 2.568 1.645 3.791.954 5.35.778 7.002c-.177 1.652.19 3.312.995 4.703C2.58 13.094 3.634 14.185 4.92 14.848c1.285.663 2.749.896 4.163.658 1.414-.237 2.722-.934 3.716-1.985 1.001-1.058 1.666-2.44 1.9-3.928.233-1.488-.019-3.016-.717-4.34C13.28 3.927 12.314 2.85 11.114 2.092 9.914 1.335 8.525.9 7.124.832c-.123-.006-.246-.008-.37-.008zm8.684 6.14c-.588.014-1.167.128-1.707.339-.54.211-1.027.516-1.435.896-.409.38-.73.833-.946 1.334-.216.5-.321 1.037-.31 1.578.012.54.136 1.072.364 1.559.228.487.557.92.968 1.274.41.354.893.624 1.421.794.528.17 1.086.237 1.641.197.555-.04 1.095-.202 1.587-.476.492-.274.925-.658 1.271-1.133.346-.474.598-1.024.742-1.618.143-.594.175-1.214.092-1.824-.083-.61-.292-1.199-.612-1.733-.32-.534-.742-.999-1.242-1.368-.5-.369-1.068-.634-1.671-.758-.301-.062-.607-.077-.916-.061z"/></svg> },
                    { name: 'Kotlin', icon: '🤖', bg: 'bg-orange-600/30', glow: 'shadow-orange-600/20' },
                    { name: 'PostgreSQL', bg: 'bg-blue-700/30', glow: 'shadow-blue-700/20', svg: <svg className="w-8 h-8" fill="#336791" viewBox="0 0 24 24"><path d="M17.128 0C15.624 0 14.248.363 13.14 1.008c-1.747.9-2.99 2.48-3.717 4.496l-.243-.068C8.512 5.25 7.674 5.164 6.858 5.164c-2.573 0-4.596 1.06-5.751 3.012C.425 9.25.058 10.748.058 12.37c0 1.837.41 3.61 1.18 5.192.77 1.582 1.867 2.91 3.217 3.89 1.35.98 2.917 1.548 4.588 1.548 1.32 0 2.576-.283 3.713-.822 1.137-.54 2.127-1.307 2.883-2.24.756-.93 1.274-2 1.535-3.116.26-1.113.26-2.246 0-3.36-.26-1.115-.78-2.186-1.535-3.116-.756-.933-1.746-1.7-2.883-2.24C11.618.283 10.363 0 9.043 0c-.648 0-1.276.055-1.875.164l.243.068c-.727-2.016-1.97-3.596-3.717-4.496C2.586.363 1.21 0-.294 0c-1.504 0-2.88.363-3.988 1.008C-5.725 1.65-6.79 2.64-7.552 3.86c-.762 1.22-1.2 2.627-1.2 4.088 0 1.46.438 2.867 1.2 4.087.762 1.22 1.827 2.21 3.27 2.852C-3.04 15.53-1.664 15.893-.16 15.893c1.504 0 2.88-.363 3.988-1.008 1.443-.642 2.508-1.632 3.27-2.852.762-1.22 1.2-2.627 1.2-4.087 0-1.46-.438-2.867-1.2-4.088C6.336 2.64 5.27 1.65 3.828 1.008 2.72.363 1.344 0-.16 0z"/></svg> },
                    { name: 'MySQL', icon: '🐬', bg: 'bg-orange-400/30', glow: 'shadow-orange-400/20' },
                    { name: 'Redis', bg: 'bg-red-600/30', glow: 'shadow-red-600/20', svg: <svg className="w-8 h-8" fill="#DC382D" viewBox="0 0 24 24"><path d="M22.394 12.428c-1.037.55-5.87 2.67-6.932 3.2-.62.31-1.285.54-1.958.745-.71.217-1.437.408-2.176.567v.68c0 .157-.127.284-.284.284H8.958c-.157 0-.284-.127-.284-.284v-.68c-.74-.16-1.466-.35-2.176-.567-.673-.205-1.338-.434-1.958-.745C3.476 15.098-.357 12.978-1.394 12.428c-1.037-.55-1.037-1.444 0-1.994 1.037-.55 5.87-2.67 6.932-3.2.62-.31 1.285-.54 1.958-.745.71-.217 1.437-.408 2.176-.567v-.68c0-.157.127-.284.284-.284h2.086c.157 0 .284.127.284.284v.68c.74.16 1.466.35 2.176.567.673.205 1.338.434 1.958.745 1.062.53 5.895 2.65 6.932 3.2 1.037.55 1.037 1.444 0 1.994z"/></svg> },
                    { name: 'Kubernetes', bg: 'bg-blue-600/30', glow: 'shadow-blue-600/20', svg: <svg className="w-8 h-8" fill="#326CE5" viewBox="0 0 24 24"><path d="M12.875 2.982c-.158-.065-.315-.128-.491-.159A1.026 1.026 0 0012 2.87a1.026 1.026 0 00-.384-.047c-.176.031-.333.094-.491.159L5.74 5.42a1.006 1.006 0 00-.491.824v5.512c0 .37.198.711.491.824l5.385 2.438c.158.065.315.128.491.159.118.031.266.047.384.047s.266-.016.384-.047c.176-.031.333-.094.491-.159l5.385-2.438a1.006 1.006 0 00.491-.824V6.244a1.006 1.006 0 00-.491-.824L12.875 2.982zm.125 1.23l4.937 2.233-1.789.811L12 5.555 7.852 7.256l-1.789-.811L12 4.212zm0 2.84l3.789 1.716v3.464L12 13.948 7.211 12.232V8.768L12 7.052z"/></svg> },
                    { name: 'Jenkins', icon: '👷', bg: 'bg-blue-800/30', glow: 'shadow-blue-800/20' },
                    { name: 'GitHub', bg: 'bg-gray-800/30', glow: 'shadow-gray-600/20', svg: <svg className="w-8 h-8" fill="#fff" viewBox="0 0 24 24"><path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"/></svg> },
                    { name: 'Stripe', icon: '💳', bg: 'bg-purple-600/30', glow: 'shadow-purple-600/20' },
                    { name: 'Vercel', icon: '🚀', bg: 'bg-black/30', glow: 'shadow-white/10' }
                  ].map((tech, index) => (
                    <div key={`row2-dup-${index}`} className={`inline-flex flex-shrink-0 w-20 h-20 ${tech.bg} rounded-3xl border-2 border-white/20 backdrop-blur-xl items-center justify-center group hover:scale-125 hover:rotate-12 transition-all duration-500 cursor-pointer tech-tooltip animate-float-gentle shadow-2xl ${tech.glow}`} data-tooltip={tech.name} style={{animationDelay: `${index * 0.15}s`}}>
                      <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"><span className="text-3xl">{tech.icon}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Third Row - Moving Right Slow */}
            <div>
              <div className="scroll-container animate-scroll-right-slow">
                <div className="flex space-x-8 whitespace-nowrap">
                  {[
                    { name: 'TensorFlow', icon: '🧠', bg: 'bg-orange-500/30', glow: 'shadow-orange-500/20' },
                    { name: 'PyTorch', icon: '🔥', bg: 'bg-red-700/30', glow: 'shadow-red-700/20' },
                    { name: 'OpenAI', icon: '🤖', bg: 'bg-green-800/30', glow: 'shadow-green-800/20' },
                    { name: 'Supabase', icon: '⚡', bg: 'bg-green-500/30', glow: 'shadow-green-500/20' },
                    { name: 'Prisma', icon: '🔷', bg: 'bg-blue-800/30', glow: 'shadow-blue-800/20' },
                    { name: 'Tailwind', icon: '🎨', bg: 'bg-cyan-600/30', glow: 'shadow-cyan-600/20' },
                    { name: 'Figma', icon: '🎯', bg: 'bg-purple-500/30', glow: 'shadow-purple-500/20' },
                    { name: 'Framer', icon: '📐', bg: 'bg-blue-500/30', glow: 'shadow-blue-500/20' },
                    { name: 'Notion', icon: '📝', bg: 'bg-gray-700/30', glow: 'shadow-gray-500/20' },
                    { name: 'Slack', icon: '💬', bg: 'bg-purple-700/30', glow: 'shadow-purple-700/20' },
                    { name: 'Discord', icon: '🎮', bg: 'bg-indigo-600/30', glow: 'shadow-indigo-600/20' },
                    { name: 'Shopify', icon: '🛒', bg: 'bg-green-600/30', glow: 'shadow-green-600/20' }
                  ].map((tech, index) => (
                    <div key={`row3-${index}`} className={`inline-flex flex-shrink-0 w-20 h-20 ${tech.bg} rounded-3xl border-2 border-white/20 backdrop-blur-xl items-center justify-center group hover:scale-125 hover:rotate-12 transition-all duration-500 cursor-pointer tech-tooltip animate-float-gentle shadow-2xl ${tech.glow}`} data-tooltip={tech.name} style={{animationDelay: `${index * 0.2}s`}}>
                      <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"><span className="text-3xl">{tech.icon}</span></div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-8 whitespace-nowrap" aria-hidden="true">
                  {[
                    { name: 'TensorFlow', icon: '🧠', bg: 'bg-orange-500/30', glow: 'shadow-orange-500/20' },
                    { name: 'PyTorch', icon: '🔥', bg: 'bg-red-700/30', glow: 'shadow-red-700/20' },
                    { name: 'OpenAI', icon: '🤖', bg: 'bg-green-800/30', glow: 'shadow-green-800/20' },
                    { name: 'Supabase', icon: '⚡', bg: 'bg-green-500/30', glow: 'shadow-green-500/20' },
                    { name: 'Prisma', icon: '🔷', bg: 'bg-blue-800/30', glow: 'shadow-blue-800/20' },
                    { name: 'Tailwind', icon: '🎨', bg: 'bg-cyan-600/30', glow: 'shadow-cyan-600/20' },
                    { name: 'Figma', icon: '🎯', bg: 'bg-purple-500/30', glow: 'shadow-purple-500/20' },
                    { name: 'Framer', icon: '📐', bg: 'bg-blue-500/30', glow: 'shadow-blue-500/20' },
                    { name: 'Notion', icon: '📝', bg: 'bg-gray-700/30', glow: 'shadow-gray-500/20' },
                    { name: 'Slack', icon: '💬', bg: 'bg-purple-700/30', glow: 'shadow-purple-700/20' },
                    { name: 'Discord', icon: '🎮', bg: 'bg-indigo-600/30', glow: 'shadow-indigo-600/20' },
                    { name: 'Shopify', icon: '🛒', bg: 'bg-green-600/30', glow: 'shadow-green-600/20' }
                  ].map((tech, index) => (
                    <div key={`row3-dup-${index}`} className={`inline-flex flex-shrink-0 w-20 h-20 ${tech.bg} rounded-3xl border-2 border-white/20 backdrop-blur-xl items-center justify-center group hover:scale-125 hover:rotate-12 transition-all duration-500 cursor-pointer tech-tooltip animate-float-gentle shadow-2xl ${tech.glow}`} data-tooltip={tech.name} style={{animationDelay: `${index * 0.2}s`}}>
                      <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"><span className="text-3xl">{tech.icon}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-wusla rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-lg">100+ Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                <span className="text-gray-300 text-lg">Expert Level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                <span className="text-gray-300 text-lg">Always Updated</span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 text-lg">Trusted by startups and enterprises worldwide</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-wusla to-blue-600 hover:from-wusla-dark hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-wusla/25 hover:scale-105">
                Explore Our Tech Stack
              </button>
              <button className="border-2 border-gray-400/30 hover:border-wusla/50 text-gray-300 hover:text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-wusla/10">
                View Our Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Why Choose <span className="text-wusla">WUSLA</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                We&apos;re a team of experienced developers who understand that great software is about more than just code — it&apos;s about solving real business problems.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-wusla rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Full-Stack Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-400">From database design to user interface, we handle every aspect of your application.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-wusla rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Modern Technology</h3>
                    <p className="text-gray-600 dark:text-gray-400">We use the latest frameworks and tools to ensure your project is future-proof.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-wusla rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Scalable Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-400">Built to grow with your business, from MVP to enterprise scale.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-wusla mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-wusla mb-2">100+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-wusla mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-wusla mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Happy Clients</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                <blockquote className="text-gray-600 dark:text-gray-400 italic mb-4">
                  &quot;WUSLA delivered exactly what we needed, on time and within budget. Their technical expertise is outstanding.&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-wusla/20 rounded-full flex items-center justify-center">
                    <span className="text-wusla font-semibold text-sm">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">John Doe</div>
                    <div className="text-gray-500 text-xs">CEO, TechStart Inc</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Let&apos;s Build Your Next <span className="text-wusla">Project</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-wusla/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-wusla" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a3 3 0 004.22 0L23 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-gray-600 dark:text-gray-400">hello@wusla.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-wusla/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-wusla" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Response Time</div>
                    <div className="text-gray-600 dark:text-gray-400">Within 24 hours</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-wusla/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-wusla" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                    <div className="text-gray-600 dark:text-gray-400">Remote & On-site</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wusla focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wusla focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wusla focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wusla focus:border-transparent">
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>API Development</option>
                    <option>Cloud Solution</option>
                    <option>AI Integration</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Project Description</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-wusla focus:border-transparent" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-wusla hover:bg-wusla-dark text-white py-4 rounded-lg font-semibold transition-colors duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="text-4xl font-black text-wusla mb-6">WUSLA</div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                Building the future of technology, one innovative project at a time. Let&apos;s create something extraordinary together.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-wusla hover:border-wusla/30 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-wusla hover:border-wusla/30 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-wusla hover:border-wusla/30 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-gray-900 dark:text-white text-lg">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors">AI Integration</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors">DevOps</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-gray-900 dark:text-white text-lg">Company</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors">About Us</a></li>
                <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors">Our Work</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors">Blog</a></li>
                <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400">© 2025 WUSLA. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-wusla transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
