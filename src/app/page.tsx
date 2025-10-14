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
    <div className="bg-black overflow-hidden">
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
                transition={{ delay: 0.3 + index * 0.1 }}
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

      {/* Revolutionary Hero Section */}
      <motion.section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden bg-black pt-20 pb-12"
        style={{ opacity: heroOpacity }}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#008080 1px, transparent 1px), linear-gradient(90deg, #008080 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Gradient Orb */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-accent/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>

        <div className="container-fluid relative z-10 flex flex-col items-center justify-center min-h-screen">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="px-4 py-2 bg-teal-accent/10 border border-teal-accent/30 rounded-full text-teal-accent text-sm font-semibold">
              Full-Stack Development • Kerala, India → Worldwide
            </span>
          </motion.div>

          {/* Revolutionary Headline */}
          <motion.div
            className="text-center mb-12 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-white font-bold mb-6" style={{
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              lineHeight: '0.95',
              letterSpacing: '-0.04em',
              textTransform: 'uppercase'
            }}>
              Build Apps<br />
              <span className="text-teal-accent">Launch Fast</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              From concept to production in 30 days. Mobile apps, web platforms, and desktop solutions.
              <span className="text-white font-semibold"> 100K+ active users trust our code.</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="px-10 py-5 bg-teal-accent text-black text-lg font-bold rounded-lg hover:bg-teal-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-accent/50"
            >
              Start Your Project →
            </a>
            <a
              href="#work"
              className="px-10 py-5 border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              View Portfolio
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { value: '50+', label: 'Projects Delivered', icon: '✓' },
              { value: '100K+', label: 'Active Users', icon: '👥' },
              { value: '₹2Cr+', label: 'Revenue Generated', icon: '💰' },
              { value: '24hrs', label: 'Response Time', icon: '⚡' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-teal-accent mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Design Showcase */}
          <motion.div
            className="relative max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Website Preview - Clean Browser Mockup */}
              <div className="lg:col-span-7">
                <motion.div
                  className="relative group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Browser Window */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 mx-4 bg-white rounded px-3 py-1.5 text-xs text-gray-500 border border-gray-200">
                        https://yourwebsite.com
                      </div>
                    </div>

                    {/* Website Content */}
                    <div className="bg-white p-8">
                      {/* Navigation */}
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                        <div className="text-xl font-bold text-gray-900">Brand</div>
                        <div className="flex gap-6 text-sm text-gray-600">
                          <span>Home</span>
                          <span>Services</span>
                          <span>About</span>
                          <span>Contact</span>
                        </div>
                      </div>

                      {/* Hero Content */}
                      <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                          Elevate Your Business
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-lg">
                          Premium solutions designed to help your business grow and succeed in the digital world
                        </p>
                        <div className="flex gap-3">
                          <button className="px-5 py-2.5 bg-black text-white text-sm font-medium rounded-lg">
                            Get Started
                          </button>
                          <button className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg">
                            Learn More
                          </button>
                        </div>
                      </div>

                      {/* Feature Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { icon: '⚡', title: 'Fast', desc: 'Lightning speed' },
                          { icon: '🎯', title: 'Focused', desc: 'User-centered' },
                          { icon: '🔒', title: 'Secure', desc: 'Protected data' }
                        ].map((item, idx) => (
                          <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <div className="text-sm font-semibold text-gray-900 mb-1">{item.title}</div>
                            <div className="text-xs text-gray-500">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-sm text-white/50">Responsive Web Design</span>
                  </div>
                </motion.div>
              </div>

              {/* Mobile App Previews */}
              <div className="lg:col-span-5 flex justify-center gap-6">
                {/* App 1 - Dashboard */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="w-[170px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                    {/* Screen */}
                    <div className="bg-white rounded-[1.8rem] overflow-hidden h-[360px]">
                      <div className="p-5 h-full flex flex-col bg-gradient-to-br from-gray-50 to-white">
                        {/* Status Bar */}
                        <div className="flex justify-between text-xs text-gray-900 mb-6 pt-2">
                          <span className="font-semibold">9:41</span>
                          <span>100%</span>
                        </div>

                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">Dashboard</h3>
                          <p className="text-xs text-gray-500">Welcome back!</p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {[
                            { label: 'Revenue', value: '$12.5K', trend: '+12%' },
                            { label: 'Orders', value: '234', trend: '+8%' }
                          ].map((stat, idx) => (
                            <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                              <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                              <div className="text-base font-bold text-gray-900">{stat.value}</div>
                              <div className="text-xs text-green-600">{stat.trend}</div>
                            </div>
                          ))}
                        </div>

                        {/* Chart Area */}
                        <div className="flex-1 bg-white rounded-xl border border-gray-200 p-3 flex items-end gap-1">
                          {[40, 70, 50, 80, 60, 90, 75].map((h, i) => (
                            <div key={i} className="flex-1 bg-gray-900 rounded-sm" style={{ height: `${h}%` }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* App 2 - Profile */}
                <motion.div
                  className="relative mt-12"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="w-[170px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                    {/* Screen */}
                    <div className="bg-gray-900 rounded-[1.8rem] overflow-hidden h-[360px]">
                      <div className="p-5 h-full flex flex-col">
                        {/* Status Bar */}
                        <div className="flex justify-between text-xs text-white/60 mb-8 pt-2">
                          <span>9:41</span>
                          <span>100%</span>
                        </div>

                        {/* Profile Header */}
                        <div className="text-center mb-8">
                          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3"></div>
                          <div className="text-white font-bold text-sm mb-1">Alex Johnson</div>
                          <div className="text-white/50 text-xs">alex@email.com</div>
                        </div>

                        {/* Menu Items */}
                        <div className="space-y-2 flex-1">
                          {[
                            { icon: '👤', label: 'Profile Settings' },
                            { icon: '🔔', label: 'Notifications' },
                            { icon: '🎨', label: 'Appearance' },
                            { icon: '🔐', label: 'Privacy' }
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                              <span className="text-lg">{item.icon}</span>
                              <span className="text-white text-xs font-medium">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-12 text-center mt-4">
                <span className="text-sm text-white/50">Native Mobile Applications</span>
              </div>
            </div>
          </motion.div>

          {/* Simple Stats */}
          <motion.div
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { value: '50+', label: 'Projects' },
              { value: '100%', label: 'Satisfaction' },
              { value: '24/7', label: 'Support' },
              { value: '5.0', label: 'Rating' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section - Minimal & Bold */}
      <section id="services" className="py-32 bg-black border-t border-gray-800">
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
      <section id="work" className="py-32 bg-black border-t border-gray-800">
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

      {/* About + Currently Building Section */}
      <section id="about" className="py-32 bg-gray-900 border-t border-gray-800">
        <div className="container-fluid max-w-6xl mx-auto">
          {/* About WUSLA */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase" style={{ letterSpacing: '-0.03em' }}>
              About WUSLA
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-2xl text-white font-semibold">
                  Combining youthful energy with cutting-edge technical expertise, WUSLA delivers mobile apps and web solutions for ambitious brands.
                </p>
                <p>
                  Founded by a passionate developer specializing in React Native and full-stack development, WUSLA has delivered modern apps for startups and organizations across Kerala and beyond.
                </p>
                <p>
                  <span className="text-white font-semibold">50+ projects launched.</span> From food delivery apps with 50K+ downloads to hospital systems managing 50K+ patient records. Every project built with clean code and scalable architecture.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-3">Our Approach</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-accent mt-1">→</span>
                      <span>Ship fast: MVP in 2-3 weeks, full production in 30 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-accent mt-1">→</span>
                      <span>Quality code: TypeScript, comprehensive testing, CI/CD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-accent mt-1">→</span>
                      <span>Results-driven: Focus on user growth and business metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-accent mt-1">→</span>
                      <span>24/7 support: Quick responses, continuous improvement</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-white font-bold text-xl mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'Next.js', 'Node.js', 'Electron', 'TypeScript', 'PostgreSQL', 'Firebase', 'AWS', 'Redis', 'Docker'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs font-semibold text-white">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Currently Building */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase" style={{ letterSpacing: '-0.03em' }}>
              Currently Building
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  project: 'Hostel Management App',
                  status: 'In Development',
                  eta: 'Dec 2024',
                  features: ['QR attendance system', 'Complaint tracking', 'Mess menu management'],
                  tech: 'React Native • Firebase'
                },
                {
                  project: 'E-Learning Platform',
                  status: 'Beta Testing',
                  eta: 'Nov 2024',
                  features: ['Live classes', 'Assignment tracking', 'Student analytics'],
                  tech: 'Next.js • WebRTC'
                },
                {
                  project: 'Inventory System',
                  status: 'Deployment Phase',
                  eta: 'Ready',
                  features: ['Real-time stock updates', 'Multi-location support', 'Auto-reorder alerts'],
                  tech: 'React • Node.js'
                }
              ].map((item, i) => (
                <div key={i} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-teal-accent transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{item.project}</h3>
                    <span className="px-2 py-1 bg-teal-accent/20 text-teal-accent text-xs font-bold rounded">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">ETA: {item.eta}</p>
                  <ul className="space-y-2 mb-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-teal-accent">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-mono text-gray-500">{item.tech}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Activity */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="https://github.com/arsh-wusla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg hover:border-teal-accent transition-all"
            >
              <span>🔗</span>
              <span className="font-semibold">View GitHub Activity</span>
              <span className="text-teal-accent">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Bold CTA */}
      <section id="contact" className="py-32 bg-black border-t border-gray-800">
        <div className="container-fluid">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 uppercase" style={{ letterSpacing: '-0.04em' }}>
                Let&apos;s Build<br />
                <span className="text-teal-accent">Something Great</span>
              </h2>
              <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Got an app idea? Need a React Native expert? Let&apos;s talk about turning your vision into reality.
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                  href="mailto:wuslateam@gmail.com"
                  className="px-12 py-6 bg-teal-accent text-black text-xl font-bold rounded-lg hover:bg-teal-accent/90 transform hover:scale-105 transition-all duration-300"
                >
                  Email Me →
                </a>
                <a
                  href="https://wa.me/918921581089?text=Hi!%20I%20want%20to%20discuss%20my%20project."
                  className="px-12 py-6 border-2 border-white text-white text-xl font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  WhatsApp Chat
                </a>
              </div>

              {/* Contact Details */}
              <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-800">
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Email</div>
                  <a href="mailto:wuslateam@gmail.com" className="text-white text-lg font-semibold hover:text-teal-accent">
                    wuslateam@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Location</div>
                  <p className="text-white text-lg font-semibold">Kerala, India</p>
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Response Time</div>
                  <p className="text-white text-lg font-semibold">Within 24 hours</p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">WUSLA</h3>
                <p className="text-gray-400 mb-4">
                  Building exceptional digital experiences for businesses worldwide.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['Services', 'Work', 'About', 'Contact'].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-teal-accent transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>wuslateam@gmail.com</li>
                  <li>Kerala, India</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2024 WUSLA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}