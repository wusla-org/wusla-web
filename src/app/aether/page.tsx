"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AetherPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual waitlist logic
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  const features = [
    {
      title: "Smart Notes & Diary",
      description: "Capture thoughts, ideas, and daily reflections with rich text formatting. Separate notes from diary entries with smart categorization.",
      image: "/assets/aether/e9b3c78c-90ed-4b4d-af6b-11fc903664d0.jpeg",
      icon: "📝"
    },
    {
      title: "Intelligent Task Management",
      description: "Daily task calendar with priority levels. See your to-dos organized by day with visual completion tracking.",
      image: "/assets/aether/77996529-74b3-4c67-a264-7099e2ba32b8.jpeg",
      icon: "✅"
    },
    {
      title: "Universal Search",
      description: "Find anything instantly with AI-powered search. Ask Aether in natural language and get relevant results across notes, tasks, and diary entries.",
      image: "/assets/aether/0c444f24-fa45-40af-86fc-1d07451e3959.jpeg",
      icon: "🔍"
    },
    {
      title: "Quick Actions",
      description: "Create notes, add tasks, or schedule events from anywhere in the app. Everything is just one tap away.",
      image: "/assets/aether/a2fe88ca-b535-45d4-b7ac-2a297499f0e2.jpeg",
      icon: "⚡"
    }
  ];

  const stats = [
    { value: "4-in-1", label: "Notes, Tasks, Diary, Calendar" },
    { value: "100%", label: "Offline Capable" },
    { value: "0KB", label: "Data Collected" },
    { value: "Free", label: "Forever" }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container-fluid flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/aether/icon.png"
              alt="Aether"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="font-bold text-xl text-white">Aether</span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
              Features
            </a>
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
              By WUSLA
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* App Icon */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/assets/aether/icon.png"
                alt="Aether App Icon"
                width={160}
                height={160}
                className="rounded-[2.5rem] shadow-2xl"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-semibold">
                Coming Soon to Play Store
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Life,<br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Organized
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Notes, tasks, diary, and calendar—all in one beautiful app.
              <span className="text-white font-semibold"> 100% private, 100% offline, 100% free.</span>
            </p>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#waitlist"
                className="px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Join Waitlist →
              </a>
              <a
                href="#features"
                className="px-10 py-5 border-2 border-gray-700 text-white text-lg font-bold rounded-xl hover:bg-gray-900 transition-all duration-300"
              >
                See Features
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stop Juggling Apps
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Tired of switching between note apps, to-do lists, journals, and calendars?
              <span className="text-white font-semibold"> Aether brings everything together</span> in one seamless, beautiful experience.
            </p>
          </motion.div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">😵</div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">Before Aether</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>5+ apps to manage daily tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Scattered information everywhere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Your data sold to advertisers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Monthly subscriptions add up</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">With Aether</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">✓</span>
                  <span>One app for everything you need</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">✓</span>
                  <span>All your data in one searchable place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">✓</span>
                  <span>100% private, stored locally on device</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">✓</span>
                  <span>Completely free, forever</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powerful features wrapped in a beautiful, intuitive interface
            </p>
          </motion.div>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <motion.div
                    className="relative max-w-[300px] mx-auto"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={300}
                      height={650}
                      className="rounded-[2.5rem] shadow-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beautiful. Simple. Powerful.
            </h2>
            <p className="text-xl text-gray-400">
              Designed for modern productivity
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "/assets/aether/49057e24-6afb-4117-bcf5-0799abc38a18.jpeg",
              "/assets/aether/e9b3c78c-90ed-4b4d-af6b-11fc903664d0.jpeg",
              "/assets/aether/05ad46c3-b407-4e1e-bd58-c0a226efdfc7.jpeg",
              "/assets/aether/77996529-74b3-4c67-a264-7099e2ba32b8.jpeg",
              "/assets/aether/0c444f24-fa45-40af-86fc-1d07451e3959.jpeg",
              "/assets/aether/81ab35ab-1217-49e1-878d-e9cee8e7e61d.jpeg"
            ].map((img, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={img}
                  alt={`Aether Screenshot ${i + 1}`}
                  width={250}
                  height={540}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-20 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🔒</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Privacy, Protected
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Unlike other productivity apps, Aether stores everything locally on your device.
              <span className="text-white font-semibold"> Zero tracking. Zero cloud uploads. Zero compromises.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  icon: "📱",
                  title: "Local Storage",
                  desc: "All data stored on your device using secure SQLite database"
                },
                {
                  icon: "🚫",
                  title: "No Tracking",
                  desc: "Zero analytics, no ads, no data collection of any kind"
                },
                {
                  icon: "✈️",
                  title: "Offline First",
                  desc: "Works perfectly without internet. Your data stays with you"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="/privacy/aether"
                className="text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                Read Full Privacy Policy →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 border-t border-gray-800 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-2xl px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be the First to Know
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Aether launches soon on Play Store. Join the waitlist to get notified!
            </p>

            {!subscribed ? (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <motion.div
                className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 max-w-xl mx-auto"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <p className="text-green-400 font-semibold text-lg">
                  ✓ Thank you! We&apos;ll notify you when Aether launches.
                </p>
              </motion.div>
            )}

            <p className="text-sm text-gray-500 mt-6">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-black">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/assets/aether/icon.png"
                  alt="Aether"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <span className="font-bold text-xl text-white">Aether</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your life, organized. Notes, tasks, diary, and calendar in one beautiful app.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/privacy/aether" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">WUSLA</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><a href="https://github.com/arsh-wusla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Aether by WUSLA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
