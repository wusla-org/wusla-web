"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Mouse tracking for parallax effect with performance optimization
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (typeof window === 'undefined' || isMobile) return;

    requestAnimationFrame(() => {
      const { clientX: x, clientY: y } = e;
      const { innerWidth: width, innerHeight: height } = window;

      const xOffset = (x - width / 2) / width;
      const yOffset = (y - height / 2) / height;

      // Only update if movement is significant to reduce re-renders
      setMousePosition(prev => {
        if (Math.abs(prev.x - xOffset) > 0.01 || Math.abs(prev.y - yOffset) > 0.01) {
          return { x: xOffset, y: yOffset };
        }
        return prev;
      });
    });
  }, [isMobile]);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsNavHidden(currentScrollY > lastScrollY && currentScrollY > 200);
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      checkMobile();
    };

    // Initial check
    checkMobile();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY, handleMouseMove]);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const floatingElement: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  // Parallax layers configuration
  const parallaxLayers = [
    {
      id: 1,
      image: "/assets/shape1.svg",
      className: "top-[20%] left-[10%]",
      depthFactor: 0.05,
      delay: 0.3
    },
    {
      id: 2,
      image: "/assets/shape2.svg",
      className: "top-[30%] left-[40%]",
      depthFactor: 0.1,
      delay: 0.5
    },
    {
      id: 3,
      image: "/assets/shape3.svg",
      className: "top-[50%] left-[70%]",
      depthFactor: 0.2,
      delay: 0.7
    },
    {
      id: 4,
      image: "/assets/shape4.svg",
      className: "top-[70%] left-[20%]",
      depthFactor: 0.15,
      delay: 0.9
    }
  ];

  // Tech icons that follow mouse (like portfolio cards in Magic Teal)
  const floatingTechIcons = [
    {
      id: 1,
      type: "react",
      className: "top-[20%] left-[15%] w-16 h-16",
      intensity: 0.4,
      direction: -1,
      delay: 0.5,
      icon: "⚛️",
      label: "React"
    },
    {
      id: 2,
      type: "nextjs",
      className: "top-[30%] right-[20%] w-20 h-20",
      intensity: 0.6,
      direction: 1,
      delay: 0.7,
      icon: "▲",
      label: "Next.js"
    },
    {
      id: 3,
      type: "typescript",
      className: "bottom-[30%] left-[20%] w-18 h-18",
      intensity: 0.3,
      direction: -1,
      delay: 0.9,
      icon: "🔷",
      label: "TypeScript"
    },
    {
      id: 4,
      type: "nodejs",
      className: "bottom-[40%] right-[15%] w-22 h-22",
      intensity: 0.5,
      direction: 1,
      delay: 1.1,
      icon: "🟢",
      label: "Node.js"
    },
    {
      id: 5,
      type: "design",
      className: "top-[50%] left-[8%] w-14 h-14",
      intensity: 0.7,
      direction: -1,
      delay: 1.3,
      icon: "🎨",
      label: "Design"
    },
    {
      id: 6,
      type: "cloud",
      className: "top-[60%] right-[10%] w-16 h-16",
      intensity: 0.4,
      direction: 1,
      delay: 1.5,
      icon: "☁️",
      label: "Cloud"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200'
            : 'bg-transparent'
        } ${isNavHidden ? '-translate-y-full' : 'translate-y-0'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-fluid flex items-center justify-between py-4">
          <motion.div
            className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            WUSLA
          </motion.div>
          <div className="hidden lg:flex space-x-8">
            <motion.a
              href="/aether"
              className={`transition-colors duration-300 text-sm font-bold ${
                isScrolled
                  ? 'text-teal-accent hover:text-teal-light'
                  : 'text-teal-accent hover:text-teal-light'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Aether App 🚀
            </motion.a>
            {['Services', 'Work', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-300 text-sm font-medium ${
                  isScrolled
                    ? 'text-gray-600 hover:text-teal-accent'
                    : 'text-white/80 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#contact"
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-teal-accent text-white hover:bg-opacity-90'
                : 'bg-white text-teal-accent hover:bg-opacity-90'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get Started
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section - Aether App Launch */}
      <motion.section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden bg-[#0a0a0a] pt-20 pb-12"
        style={{ opacity: heroOpacity }}
      >
        {/* Gradient Orb Background - Emerald Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]"></div>

        <div className="container-fluid relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12">
          {/* Left: Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-teal-accent/10 border border-teal-accent/30 rounded-full text-teal-accent text-sm font-bold">
                NOW LAUNCHING
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Meet<br />
              <span className="text-teal-accent">
                Aether
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-4 leading-relaxed">
              Your life, organized.<br />
              <span className="text-white font-semibold">Notes, tasks, diary & calendar in one beautiful app.</span>
            </p>

            <p className="text-lg text-teal-accent font-semibold mb-8">
              100% Private • 100% Offline • 100% Free
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="/aether"
                className="px-10 py-5 bg-teal-accent text-black text-lg font-bold rounded-xl hover:shadow-lg hover:shadow-teal-accent/50 transform hover:scale-105 transition-all duration-300 text-center"
              >
                Learn More →
              </a>
              <a
                href="/aether#waitlist"
                className="px-10 py-5 border-2 border-teal-accent text-teal-accent text-lg font-bold rounded-xl hover:bg-teal-accent/10 transition-all duration-300 text-center"
              >
                Join Waitlist
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { value: '4-in-1', label: 'Features' },
                { value: '0KB', label: 'Tracked' },
                { value: '100%', label: 'Offline' },
                { value: 'Free', label: 'Forever' }
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-teal-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Phone Mockup with Logo */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Phone Frame */}
              <div className="w-[280px] md:w-[320px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-900 rounded-b-3xl z-10"></div>

                {/* Screen */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] overflow-hidden h-[600px] md:h-[680px] relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-8 pt-10 pb-4 text-xs text-gray-900">
                    <span className="font-semibold">9:41</span>
                    <span>100%</span>
                  </div>

                  {/* Content - Centered Logo */}
                  <div className="flex flex-col items-center justify-center h-full px-8 -mt-12">
                    {/* Aether Logo */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Image
                        src="/assets/aether/icon.png"
                        alt="Aether"
                        width={180}
                        height={180}
                        className="rounded-[2.5rem] shadow-2xl mb-8"
                      />
                    </motion.div>

                    {/* App Name */}
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">Aether</h2>
                    <p className="text-gray-600 text-center text-sm mb-8 max-w-xs">
                      Your personal productivity companion
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {['Notes', 'Tasks', 'Diary', 'Calendar'].map((feature, i) => (
                        <motion.span
                          key={i}
                          className="px-4 py-2 bg-teal-accent/10 border border-teal-accent/30 rounded-full text-teal-dark text-xs font-semibold"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-900 rounded-full"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -right-8 top-20 px-4 py-3 bg-teal-accent text-black text-sm font-bold rounded-xl shadow-lg"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Coming Soon
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-32 px-4 py-3 bg-white border border-gray-200 text-gray-900 text-sm font-semibold rounded-xl shadow-lg"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                Play Store
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section - Minimal & Bold */}
      <section id="services" className="py-32 bg-[#1a1a18] border-t border-gray-800">
        <div className="container-fluid">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase" style={{ letterSpacing: '-0.03em' }}>
              Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Mobile apps with React Native. Modern websites with Next.js. Desktop applications with Electron.
            </p>
          </motion.div>

          {/* Service Packages with Pricing */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                title: "Mobile App",
                price: "₹20,000",
                duration: "2-3 weeks",
                features: [
                  "React Native iOS & Android app",
                  "Cross-platform codebase",
                  "Firebase/backend integration",
                  "App Store deployment",
                  "30 days support"
                ],
                popular: false
              },
              {
                title: "Full-Stack Project",
                price: "₹50,000+",
                duration: "4-8 weeks",
                features: [
                  "Web + Mobile + Admin panel",
                  "Custom backend API",
                  "Database design",
                  "Payment integration",
                  "Cloud deployment",
                  "90 days support"
                ],
                popular: true
              },
              {
                title: "Desktop Application",
                price: "₹30,000+",
                duration: "3-4 weeks",
                features: [
                  "Electron/Tauri desktop app",
                  "Windows, Mac & Linux support",
                  "Native performance",
                  "Auto-updates system",
                  "Offline functionality"
                ],
                popular: false
              }
            ].map((pkg, index) => (
              <motion.div
                key={pkg.title}
                className={`relative bg-gray-900 rounded-xl p-8 border-2 ${
                  pkg.popular ? 'border-teal-accent' : 'border-gray-800'
                } hover:border-teal-accent transition-all duration-300`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-accent text-black text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-teal-accent">{pkg.price}</span>
                  <span className="text-gray-500 ml-2">• {pkg.duration}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-teal-accent mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-teal-accent text-black hover:bg-teal-accent/90'
                      : 'border-2 border-teal-accent text-teal-accent hover:bg-teal-accent hover:text-black'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Interactive Grid */}
      <section id="work" className="py-32 bg-[#0a0a0a] border-t border-gray-800">
        <div className="container-fluid">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase" style={{ letterSpacing: '-0.03em' }}>
              Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mb-6">
              Real apps in production. Real users. Real results.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-teal-accent/10 border border-teal-accent/30 rounded-full text-teal-accent text-sm font-semibold">
                Click any project to view full case study
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-white text-sm">
                Live demos available on request
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Aether",
                category: "Mobile App • Productivity",
                tech: "React Native • SQLite • Expo • Hugging Face AI",
                users: "Privacy-First",
                description: "All-in-one productivity app with notes, tasks, diary, and calendar - completely offline with AI features",
                fullDescription: "Aether is a comprehensive productivity application that combines notes, tasks, diary entries, and calendar management in one beautiful interface. Built with privacy as the core principle - all data stored locally on device with optional AI-powered features for content enhancement.",
                challenges: "Local-first architecture with SQLite, offline AI processing, complex state management across multiple features, seamless data synchronization between modules, privacy-focused design without compromising functionality",
                results: "Launching on Play Store, 100% local data storage, zero tracking, optional AI features with Hugging Face integration, comprehensive privacy policy",
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
                color: "from-indigo-500 to-purple-600",
                github: "https://github.com/arsh-wusla",
                privacy: "/privacy/aether"
              },
              {
                title: "FoodHub Delivery",
                category: "Mobile App",
                tech: "React Native • Firebase • Maps API",
                users: "50K+ Downloads",
                description: "Restaurant discovery and food ordering app with real-time order tracking and live chat support",
                fullDescription: "A comprehensive food delivery platform connecting users with local restaurants. Features include real-time GPS tracking, multiple payment gateways, order scheduling, and customer reviews. Built with React Native for iOS and Android.",
                challenges: "Implemented efficient real-time order tracking, optimized map rendering for battery life, integrated multiple payment providers",
                results: "50,000+ downloads in first 6 months, 4.5★ rating on Play Store, 30% month-over-month growth",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
                color: "from-orange-500 to-red-600"
              },
              {
                title: "E-Store Platform",
                category: "Web + Mobile",
                tech: "Next.js • React Native • Node.js",
                users: "₹2Cr+ Revenue",
                description: "Full-stack e-commerce platform with web, mobile apps, and admin dashboard",
                fullDescription: "Complete e-commerce solution with customer-facing web and mobile apps, vendor portal, and comprehensive admin dashboard. Includes inventory management, order processing, payment integration, and analytics.",
                challenges: "Synchronized inventory across platforms, real-time stock updates, scalable architecture for high traffic",
                results: "Generated ₹2+ Crore in revenue, 10,000+ active users, 99.9% uptime",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
                color: "from-purple-500 to-pink-600"
              },
              {
                title: "TaskMaster Desktop",
                category: "Desktop Application",
                tech: "Electron • React • SQLite",
                users: "5K+ Businesses",
                description: "Cross-platform project management and team collaboration desktop application",
                fullDescription: "Professional desktop application for project management, team collaboration, and productivity tracking. Works offline with data sync when online. Available for Windows, macOS, and Linux.",
                challenges: "Offline-first architecture, file syncing, cross-platform consistency, auto-update system",
                results: "Adopted by 5,000+ businesses, 4.7★ rating, reduced team coordination time by 40%",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                color: "from-blue-500 to-cyan-600"
              },
              {
                title: "Hospital Management",
                category: "Enterprise System",
                tech: "Next.js • PostgreSQL • Redis",
                users: "3 Hospitals",
                description: "Complete hospital management system with patient records, appointments, and billing",
                fullDescription: "Enterprise-grade hospital management system handling patient records, appointments, doctor schedules, pharmacy, lab reports, and billing. Includes role-based access control and HIPAA compliance features.",
                challenges: "Data security and privacy, complex role permissions, high availability requirements, integration with existing systems",
                results: "Deployed in 3 major hospitals, managing 50,000+ patient records, 95% staff satisfaction",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
                color: "from-green-500 to-teal-600"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-accent transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-gray-950 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>

                  {/* Users Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-teal-accent/30">
                    <span className="text-teal-accent font-bold text-sm">{project.users}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{project.category}</div>
                  <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="text-sm text-gray-500 mb-6 font-mono">{project.tech}</div>
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="inline-flex items-center gap-2 text-teal-accent font-bold hover:gap-4 transition-all duration-300"
                  >
                    View Case Study
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal Overlay */}
          {selectedProject !== null && (
            <div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl max-w-4xl w-full border border-gray-800 my-8"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const projects = [
                    {
                      title: "Aether",
                      category: "Mobile App • Productivity",
                      tech: "React Native • SQLite • Expo • Hugging Face AI",
                      users: "Privacy-First",
                      fullDescription: "Aether is a comprehensive productivity application that combines notes, tasks, diary entries, and calendar management in one beautiful interface. Built with privacy as the core principle - all data stored locally on device with optional AI-powered features for content enhancement.",
                      challenges: "Local-first architecture with SQLite, offline AI processing, complex state management across multiple features, seamless data synchronization between modules, privacy-focused design without compromising functionality",
                      results: "Launching on Play Store, 100% local data storage, zero tracking, optional AI features with Hugging Face integration, comprehensive privacy policy",
                      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
                      color: "from-indigo-500 to-purple-600",
                      github: "https://github.com/arsh-wusla",
                      privacy: "/privacy/aether"
                    },
                    {
                      title: "FoodHub Delivery",
                      category: "Mobile App",
                      tech: "React Native • Firebase • Maps API",
                      users: "50K+ Downloads",
                      fullDescription: "A comprehensive food delivery platform connecting users with local restaurants. Features include real-time GPS tracking, multiple payment gateways, order scheduling, and customer reviews.",
                      challenges: "Implemented efficient real-time order tracking, optimized map rendering for battery life, integrated multiple payment providers",
                      results: "50,000+ downloads in first 6 months, 4.5★ rating on Play Store, 30% month-over-month growth",
                      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
                      color: "from-orange-500 to-red-600"
                    },
                    {
                      title: "E-Store Platform",
                      category: "Web + Mobile",
                      tech: "Next.js • React Native • Node.js",
                      users: "₹2Cr+ Revenue",
                      fullDescription: "Complete e-commerce solution with customer-facing web and mobile apps, vendor portal, and comprehensive admin dashboard. Includes inventory management, order processing, payment integration, and analytics.",
                      challenges: "Synchronized inventory across platforms, real-time stock updates, scalable architecture for high traffic",
                      results: "Generated ₹2+ Crore in revenue, 10,000+ active users, 99.9% uptime",
                      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
                      color: "from-purple-500 to-pink-600"
                    },
                    {
                      title: "TaskMaster Desktop",
                      category: "Desktop Application",
                      tech: "Electron • React • SQLite",
                      users: "5K+ Businesses",
                      fullDescription: "Professional desktop application for project management, team collaboration, and productivity tracking. Works offline with data sync when online. Available for Windows, macOS, and Linux.",
                      challenges: "Offline-first architecture, file syncing, cross-platform consistency, auto-update system",
                      results: "Adopted by 5,000+ businesses, 4.7★ rating, reduced team coordination time by 40%",
                      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                      color: "from-blue-500 to-cyan-600"
                    },
                    {
                      title: "Hospital Management",
                      category: "Enterprise System",
                      tech: "Next.js • PostgreSQL • Redis",
                      users: "3 Hospitals",
                      fullDescription: "Enterprise-grade hospital management system handling patient records, appointments, doctor schedules, pharmacy, lab reports, and billing. Includes role-based access control.",
                      challenges: "Data security and privacy, complex role permissions, high availability requirements, integration with existing systems",
                      results: "Deployed in 3 major hospitals, managing 50,000+ patient records, 95% staff satisfaction",
                      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
                      color: "from-green-500 to-teal-600"
                    }
                  ];
                  const project = projects[selectedProject];

                  return (
                    <>
                      <div className="aspect-video relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}></div>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 w-10 h-10 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white text-2xl"
                        >
                          ×
                        </button>
                      </div>
                      <div className="p-8">
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{project.category}</div>
                        <h3 className="text-4xl font-bold text-white mb-4">{project.title}</h3>
                        <div className="text-teal-accent font-bold text-lg mb-6">{project.users}</div>
                        <div className="space-y-6 text-gray-300">
                          <div>
                            <h4 className="text-white font-bold text-lg mb-2">Overview</h4>
                            <p className="leading-relaxed">{project.fullDescription}</p>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg mb-2">Technologies Used</h4>
                            <p className="font-mono text-sm text-teal-accent">{project.tech}</p>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg mb-2">Key Challenges</h4>
                            <p className="leading-relaxed">{project.challenges}</p>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg mb-2">Results</h4>
                            <p className="leading-relaxed text-white font-semibold">{project.results}</p>
                          </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-800">
                          {/* Project Links */}
                          {(project.github || project.privacy) && (
                            <div className="flex flex-wrap gap-3 mb-6">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 border border-gray-700 text-white text-sm font-semibold rounded-lg hover:border-teal-accent transition-all"
                                >
                                  <span>💻</span>
                                  <span>View on GitHub</span>
                                </a>
                              )}
                              {project.privacy && (
                                <a
                                  href={project.privacy}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 border border-gray-700 text-white text-sm font-semibold rounded-lg hover:border-teal-accent transition-all"
                                >
                                  <span>🔒</span>
                                  <span>Privacy Policy</span>
                                </a>
                              )}
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex gap-4">
                            <a
                              href="#contact"
                              onClick={() => setSelectedProject(null)}
                              className="px-8 py-3 bg-teal-accent text-black font-bold rounded-lg hover:bg-teal-accent/90 transition-all"
                            >
                              Start Similar Project
                            </a>
                            <button
                              onClick={() => setSelectedProject(null)}
                              className="px-8 py-3 border border-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition-all"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-[#1a1a18] border-t border-gray-800">
        <div className="container-fluid">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 uppercase" style={{ letterSpacing: '-0.03em' }}>
              About WUSLA
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Story */}
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
                  Combining youthful energy with cutting-edge technical expertise, WUSLA delivers mobile apps and web solutions for ambitious brands.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Founded by a passionate developer specializing in React Native and full-stack development, WUSLA has delivered modern apps for startups and organizations across Kerala and beyond.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  <span className="text-emerald-400 font-bold">50+ projects launched.</span> From food delivery apps with 50K+ downloads to hospital systems managing 50K+ patient records. Every project built with clean code and scalable architecture.
                </p>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">100K+</div>
                    <div className="text-sm text-gray-400">Active Users</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Approach & Tech */}
              <div className="space-y-8">
                {/* Our Approach */}
                <div className="bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-700">
                  <h3 className="text-white font-bold text-2xl mb-6">Our Approach</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 text-xl mt-1">⚡</span>
                      <div>
                        <span className="text-white font-semibold">Ship Fast</span>
                        <p className="text-gray-400 text-sm mt-1">MVP in 2-3 weeks, full production in 30 days</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 text-xl mt-1">✨</span>
                      <div>
                        <span className="text-white font-semibold">Quality Code</span>
                        <p className="text-gray-400 text-sm mt-1">TypeScript, comprehensive testing, CI/CD</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 text-xl mt-1">📈</span>
                      <div>
                        <span className="text-white font-semibold">Results-Driven</span>
                        <p className="text-gray-400 text-sm mt-1">Focus on user growth and business metrics</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 text-xl mt-1">🛟</span>
                      <div>
                        <span className="text-white font-semibold">24/7 Support</span>
                        <p className="text-gray-400 text-sm mt-1">Quick responses, continuous improvement</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-white font-bold text-xl mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'Next.js', 'Node.js', 'Electron', 'TypeScript', 'PostgreSQL', 'Firebase', 'AWS', 'Redis', 'Docker'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg text-sm font-semibold text-white hover:border-emerald-500 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Currently Building Section */}
      <section className="py-20 md:py-32 bg-[#2d2d2d] border-t border-gray-800">
        <div className="container-fluid">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase" style={{ letterSpacing: '-0.03em' }}>
              Currently Building
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl">
              Our latest project: A privacy-first productivity app that keeps your life organized.
            </p>

            {/* Aether Showcase */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-emerald-500/30 rounded-2xl p-8 md:p-12 hover:border-emerald-500/50 transition-all">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Info */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Aether</h3>
                    <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 text-sm font-bold rounded-full border border-emerald-500/30">
                      LAUNCHING SOON
                    </span>
                  </div>

                  <p className="text-xl text-gray-300 mb-6">
                    All-in-one productivity suite combining notes, tasks, diary, and calendar in a beautiful, privacy-first mobile app.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Offline</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-2xl font-bold text-emerald-400 mb-1">0KB</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Data Tracked</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-2xl font-bold text-emerald-400 mb-1">4-in-1</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Features</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-2xl font-bold text-emerald-400 mb-1">Free</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Forever</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <a
                      href="/aether"
                      className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all inline-flex items-center gap-2"
                    >
                      <span>Learn More</span>
                      <span>→</span>
                    </a>
                    <a
                      href="/aether#waitlist"
                      className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 font-bold rounded-lg hover:bg-emerald-500/10 transition-all"
                    >
                      Join Waitlist
                    </a>
                  </div>

                  <p className="text-xs font-mono text-gray-500">
                    React Native • SQLite • Expo • Hugging Face AI
                  </p>
                </div>

                {/* Right: Features */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>

                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📝</span>
                      <div>
                        <h5 className="text-white font-semibold mb-1">Rich Notes</h5>
                        <p className="text-sm text-gray-400">Markdown support, folders, tags, and search</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <h5 className="text-white font-semibold mb-1">Smart Tasks</h5>
                        <p className="text-sm text-gray-400">Priorities, due dates, and categories</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📔</span>
                      <div>
                        <h5 className="text-white font-semibold mb-1">Personal Diary</h5>
                        <p className="text-sm text-gray-400">Journal entries with mood tracking</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📅</span>
                      <div>
                        <h5 className="text-white font-semibold mb-1">Calendar</h5>
                        <p className="text-sm text-gray-400">Events, reminders, and planning</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500/10 to-purple-500/10 rounded-lg p-4 border border-emerald-500/30">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🤖</span>
                      <div>
                        <h5 className="text-emerald-400 font-semibold mb-1">AI-Powered (Optional)</h5>
                        <p className="text-sm text-gray-400">Offline AI features with Hugging Face</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Activity */}
            <div className="mt-16 text-center">
              <a
                href="https://github.com/arsh-wusla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/50 border-2 border-gray-700 text-white text-lg font-semibold rounded-xl hover:border-emerald-500 hover:bg-gray-800 transition-all"
              >
                <span className="text-2xl">💻</span>
                <span>View GitHub Activity</span>
                <span className="text-emerald-400">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-[#0a0a0a] border-t border-emerald-500/20">
        <div className="container-fluid">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase leading-tight" style={{ letterSpacing: '-0.04em' }}>
              Let&apos;s Build<br />
              <span className="text-emerald-400">Something Great</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Got an app idea? Need a React Native expert? Let&apos;s talk about turning your vision into reality.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="mailto:wuslateam@gmail.com"
                className="px-10 py-5 bg-emerald-500 text-white text-lg md:text-xl font-bold rounded-xl hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/20"
              >
                <span className="inline-flex items-center gap-2">
                  📧 Email Me
                </span>
              </a>
              <a
                href="https://wa.me/918921581089?text=Hi!%20I%20want%20to%20discuss%20my%20project."
                className="px-10 py-5 border-2 border-emerald-500 text-emerald-400 text-lg md:text-xl font-bold rounded-xl hover:bg-emerald-500/10 transition-all duration-300"
              >
                <span className="inline-flex items-center gap-2">
                  💬 WhatsApp Chat
                </span>
              </a>
            </div>

            {/* Contact Details Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-12 border-t border-gray-800">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-bold">Email</div>
                <a href="mailto:wuslateam@gmail.com" className="text-white text-lg font-semibold hover:text-emerald-400 transition-colors">
                  wuslateam@gmail.com
                </a>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-bold">Location</div>
                <p className="text-white text-lg font-semibold">Kerala, India</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 sm:col-span-2 lg:col-span-1">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-bold">Response Time</div>
                <p className="text-emerald-400 text-lg font-semibold">Within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a18] border-t border-gray-800 py-12 md:py-16">
        <div className="container-fluid">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
              {/* Brand Column */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-white mb-4">WUSLA</h3>
                <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                  Building exceptional digital experiences for businesses worldwide. Specialized in React Native mobile apps, Next.js websites, and Electron desktop applications.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/arsh-wusla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <span className="text-2xl">💻</span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Aether App', href: '/aether' },
                    { name: 'Services', href: '#services' },
                    { name: 'Portfolio', href: '#work' },
                    { name: 'About', href: '#about' },
                    { name: 'Contact', href: '#contact' }
                  ].map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-2">
                        <span className="text-emerald-500">→</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-white font-bold text-lg mb-4">Get In Touch</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:wuslateam@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      wuslateam@gmail.com
                    </a>
                  </li>
                  <li className="text-gray-400">
                    Kerala, India
                  </li>
                  <li className="text-emerald-400 font-semibold">
                    Response: 24 hours
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2024 WUSLA. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Built with <span className="text-emerald-400">Next.js</span> & <span className="text-emerald-400">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}