"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  videoUrl?: string;
  featured: boolean;
  completedDate: string;
  client: string;
  testimonial: string;
  status?: string;
  scope?: string;
}

interface PortfolioData {
  projects: Project[];
  categories: string[];
  capabilities: {
    totalTechnologies: string;
    focusAreas: string;
    approachType: string;
    clientBase: string;
  };
}

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const response = await fetch('/data/portfolio.json');
        const data: PortfolioData = await response.json();
        setPortfolioData(data);
        setFilteredProjects(data.projects);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    }

    fetchPortfolio();
  }, []);

  useEffect(() => {
    if (portfolioData) {
      if (selectedCategory === 'All') {
        setFilteredProjects(portfolioData.projects);
      } else {
        setFilteredProjects(
          portfolioData.projects.filter(project => project.category === selectedCategory)
        );
      }
    }
  }, [selectedCategory, portfolioData]);

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
        staggerChildren: 0.1
      }
    }
  };

  if (!portfolioData) {
    return (
      <div className="bg-white-pure min-h-screen flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-8 h-8 border-2 border-teal-accent border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-gray-600">Loading work...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white-pure min-h-screen">
      {/* Navigation */}
      <motion.nav
        className="nav-minimal nav-scrolled"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-fluid flex items-center justify-between">
          <Link href="/" className="text-gray-900 font-bold text-2xl tracking-wide">
            WUSLA
          </Link>
          <div className="hidden lg:flex space-x-12">
            <Link href="/#work" className="link-minimal link-underline">Work</Link>
            <Link href="/portfolio" className="text-teal-accent font-medium">Portfolio</Link>
            <Link href="/#about" className="link-minimal link-underline">About</Link>
            <Link href="/#contact" className="link-minimal link-underline">Contact</Link>
          </div>
        </div>
      </motion.nav>

      {/* Header */}
      <section className="section-spacing-lg">
        <div className="container-fluid">
          <motion.div
            className="center-content mb-24"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1
              className="text-hero mb-8"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Our Work
            </motion.h1>
            <motion.p
              className="text-subheading max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Selected projects that showcase our approach to creative technology solutions
            </motion.p>
          </motion.div>

          {/* Capabilities Overview */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { value: portfolioData.capabilities.totalTechnologies, label: "Technologies" },
              { value: portfolioData.capabilities.focusAreas, label: "Focus Areas" },
              { value: portfolioData.capabilities.approachType, label: "Approach" },
              { value: portfolioData.capabilities.clientBase, label: "Client Range" }
            ].map((item) => (
              <motion.div
                key={item.label}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-display text-gray-900 mb-2">{item.value}</div>
                <div className="text-caption">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-16">
        <div className="container-fluid">
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {portfolioData.categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-caption font-medium transition-all duration-500 pb-2 relative ${
                  selectedCategory === category
                    ? 'text-teal-accent'
                    : 'text-gray-600 hover:text-teal-accent'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {category}
                {selectedCategory === category && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-accent"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-spacing">
        <div className="container-fluid">
          <motion.div
            className="space-y-32"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="grid-asymmetric project-card"
                variants={fadeInUp}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div>
                  <motion.p
                    className="text-caption mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.category}
                  </motion.p>
                  <motion.h3
                    className="text-heading mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-body mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="space-y-3 text-caption mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div>
                      <span className="text-gray-500">Client:</span> {project.client}
                    </div>
                    {project.scope && (
                      <div>
                        <span className="text-gray-500">Scope:</span> {project.scope}
                      </div>
                    )}
                    {project.status && (
                      <div>
                        <span className="text-gray-500">Status:</span> <span className="text-teal-accent font-medium">{project.status}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-gray-500">Timeline:</span> {new Date(project.completedDate).toLocaleDateString()}
                    </div>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="text-caption text-gray-500 mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="text-caption px-3 py-1 bg-gray-100 text-gray-800"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Links */}
                  {(project.liveUrl || project.githubUrl || project.playStoreUrl || project.videoUrl) && (
                    <motion.div
                      className="flex gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-minimal"
                          whileHover={{ scale: 1.02 }}
                        >
                          View Live
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-minimal"
                          whileHover={{ scale: 1.02 }}
                        >
                          View Code
                        </motion.a>
                      )}
                      {project.playStoreUrl && (
                        <motion.a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-minimal"
                          whileHover={{ scale: 1.02 }}
                        >
                          Play Store
                        </motion.a>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Project Visual */}
                <motion.div
                  className="bg-beige-soft h-96 flex items-center justify-center rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-center text-gray-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="text-4xl mb-4">
                      {project.category === 'Mobile Development' ? '📱' :
                       project.category === 'Cloud Solutions' ? '☁️' :
                       project.category === 'AI Integration' ? '🤖' : '💻'}
                    </div>
                    <div className="text-caption">{project.category}</div>
                  </motion.div>
                </motion.div>

                {/* Testimonial */}
                {project.testimonial && (
                  <motion.div
                    className="col-span-2 mt-12 max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <blockquote className="text-body text-gray-600 italic">
                      &ldquo;{project.testimonial}&rdquo;
                    </blockquote>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="center-content py-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-body">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="container-fluid">
          <motion.div
            className="center-content space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-caption">© 2024 WUSLA. Creative Technology Solutions.</p>
            <p className="text-caption">Based in India, serving global clients</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}