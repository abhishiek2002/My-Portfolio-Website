import React, { useState } from 'react';
import { Palette, Sun, Moon, Zap, Heart, Waves } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeIcons = {
    light: <Sun size={20} />,
    dark: <Moon size={20} />,
    cyberpunk: <Zap size={20} />,
    pastel: <Heart size={20} />,
    ocean: <Waves size={20} />
  };

  const themeNames = {
    light: 'Light',
    dark: 'Dark',
    cyberpunk: 'Cyberpunk',
    pastel: 'Pastel',
    ocean: 'Ocean'
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        {/* Theme Options */}
        {isOpen && (
          <div className="absolute bottom-16 left-0 bg-surface border border-border rounded-2xl shadow-2xl p-2 min-w-[200px] animate-slideUp">
            <div className="space-y-1">
              {themes.map((themeName) => (
                <button
                  key={themeName}
                  onClick={() => {
                    setTheme(themeName);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    theme === themeName
                      ? 'bg-primary text-white'
                      : 'text-text-primary hover:bg-surface-hover'
                  }`}
                >
                  {themeIcons[themeName]}
                  <span className="font-medium">{themeNames[themeName]}</span>
                  {theme === themeName && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group transform hover:scale-110"
          aria-label="Toggle theme"
        >
          <Palette
            size={24}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:rotate-12'}`}
          />
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;