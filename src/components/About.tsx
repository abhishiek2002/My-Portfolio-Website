import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const About: React.FC = () => {
  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/abhishek-kuntal/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Github size={24} />,
      url: 'https://github.com/abhishiek2002',
      label: 'GitHub',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: <Code size={24} />,
      url: 'https://leetcode.com/u/Abhishe79043360/',
      label: 'LeetCode',
      color: 'hover:text-orange-500'
    },
    {
      icon: <Mail size={24} />,
      url: 'mailto:kuntalabishek2002@email.com',
      label: 'Email',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://avatars.githubusercontent.com/u/128124180?s=400&u=1f50a80ffde14a461eace017ee1f3c60757bc6c3&v=4"
                    alt="Abhishek Kuntal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-pulse">
                  <Code size={32} className="text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-4">
                    Hi, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent" 
                    >
                      Abhishek Kuntal
                    </span>
                  </h1>
                  <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                    A passionate <span className="text-primary font-semibold">backend developer</span> and{' '}
                    <span className="text-accent font-semibold">software developer</span> who loves creating
                    efficient, scalable solutions and bringing ideas to life through code.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-surface hover:bg-surface-hover transition-all duration-300 transform hover:scale-110 ${link.color}`}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                  <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;