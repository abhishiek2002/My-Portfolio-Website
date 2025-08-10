import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Expense Management App',
      description: 'A collaborative expense management application with real-time updates.',
      technologies: ['HTML', 'CSS', 'Vanilla JS', 'Node.js', 'Sequelize', 'MySQL'],
      image: '/Expense Tracker Ss.png',
      demoUrl: 'https://expense-tracker-full-fledged-web-ap.vercel.app/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides detailed weather forecasts, historical data, and interactive maps with beautiful visualizations.',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization, scheduling features, and performance tracking across platforms.',
      technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'A mobile-responsive recipe application with search functionality, favorite recipes, meal planning, and shopping list generation.',
      technologies: ['React', 'CSS3', 'Recipe API', 'Local Storage'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0');
            setTimeout(() => {
              setVisibleProjects(prev => new Set([...prev, projectId]));
            }, 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const isVisible = visibleProjects.has(project.id);
    
    return (
      <div
        data-project-id={project.id}
        className={`group relative bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
          true 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Overlay Buttons */}
          <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover text-white p-3 rounded-full transform hover:scale-110 transition-all duration-200"
              aria-label="View demo"
            >
              <Eye size={20} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface hover:bg-surface-hover text-text-primary p-3 rounded-full transform hover:scale-110 transition-all duration-200"
              aria-label="View source code"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-text-secondary mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex space-x-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors duration-200"
            >
              <ExternalLink size={16} />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Github size={16} />
              <span className="text-sm font-medium">Source Code</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-surface" ref={projectsRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in various technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
              View More Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;