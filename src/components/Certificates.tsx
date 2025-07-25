import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

const Certificates: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Tech Institute',
      date: 'December 2023',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive certification covering frontend and backend development'
    },
    {
      id: 2,
      title: 'Python Programming Expert',
      issuer: 'Python Institute',
      date: 'October 2023',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Advanced Python programming and data structures certification'
    },
    {
      id: 3,
      title: 'Database Management Systems',
      issuer: 'Database Academy',
      date: 'August 2023',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive database design and management certification'
    },
    {
      id: 4,
      title: 'React.js Development',
      issuer: 'React Masters',
      date: 'June 2023',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern React development with hooks and state management'
    },
    {
      id: 5,
      title: 'Node.js Backend Development',
      issuer: 'Backend Pro',
      date: 'April 2023',
      image: 'https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Server-side development with Node.js and Express'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, certificates.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              <Award className="inline-block mr-4 text-primary" size={48} />
              Certificates
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Professional certifications that showcase my continuous learning journey
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-surface">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {certificates.map((cert) => (
                  <div key={cert.id} className="w-full flex-shrink-0">
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                        <p className="text-lg mb-1">{cert.issuer}</p>
                        <p className="text-sm opacity-90 mb-3">{cert.date}</p>
                        <p className="text-sm opacity-80">{cert.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
                aria-label="Next certificate"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? 'bg-primary scale-125'
                      : 'bg-text-secondary hover:bg-text-secondary'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Certificate Counter */}
            <div className="text-center mt-6">
              <span className="text-text-secondary">
                {currentSlide + 1} of {certificates.length} certificates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;