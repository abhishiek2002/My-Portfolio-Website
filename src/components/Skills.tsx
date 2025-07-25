import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'C++', level: 85, icon: '⚡' },
        { name: 'JavaScript', level: 88, icon: '📜' },
        { name: 'SQL', level: 80, icon: '🗃️' },
        { name: 'NoSQL', level: 75, icon: '📊' },
        { name: 'HTML', level: 95, icon: '🌐' },
        { name: 'CSS', level: 90, icon: '🎨' },
      ]
    },
    {
      title: 'Technologies & Frameworks',
      skills: [
        { name: 'ReactJS', level: 85, icon: '⚛️' },
        { name: 'Redux', level: 80, icon: '🔄' },
        { name: 'NodeJS', level: 88, icon: '🟢' },
        { name: 'ExpressJS', level: 85, icon: '🚀' },
        { name: 'MongoDB', level: 82, icon: '🍃' },
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'GitHub', level: 88, icon: '🐙' },
      ]
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Postman', level: 85, icon: '📮' },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.getAttribute('data-category');
            if (category) {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, category]));
              }, 200);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const categoryElements = document.querySelectorAll('[data-category]');
    categoryElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const SkillBar: React.FC<{ skill: Skill; category: string; index: number }> = ({ skill, category, index }) => {
    const isAnimated = animatedSkills.has(category);
    
    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-semibold text-text-primary">{skill.name}</span>
          </div>
          <span className="text-sm text-text-secondary font-medium">{skill.level}%</span>
        </div>
        <div className="w-full bg-surface rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
            style={{
              width: isAnimated ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 100}ms`
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-surface" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                data-category={category.title}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      category={category.title}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;