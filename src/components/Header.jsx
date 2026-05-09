import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import LanguageSelector from './LanguageSelector';

const Header = ({ onContactClick }) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#' + id;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              if (window.location.pathname !== '/') {
                window.location.href = '/';
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="transition-transform hover:scale-105"
          >
            <img 
              src="/assets/logo.jpg" 
              alt="SarauProject Logo" 
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            <button
              onClick={() => scrollToSection('videos-section')}
              className="text-sm font-medium uppercase tracking-wider transition-colors"
              style={{color: '#b0b0b0'}}
            >
              {t('nav.performances')}
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="text-sm font-medium uppercase tracking-wider transition-colors"
              style={{color: '#b0b0b0'}}
            >
              {t('nav.about')}
            </button>
            <a
              href="/blog"
              className="text-sm font-medium uppercase tracking-wider transition-colors"
              style={{color: '#b0b0b0'}}
              data-testid="nav-blog"
            >
              Blog
            </a>
            <Button
              onClick={() => {
                if (window.location.pathname !== '/') {
                  window.location.href = '/#contact-section';
                } else {
                  onContactClick();
                }
              }}
              className="rounded-full bg-red-600 px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50"
              style={{color: '#b0b0b0'}}
            >
              {t('nav.contact')}
            </Button>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black/95 backdrop-blur-sm">
            <div className="space-y-1 px-4 py-6">
              <button
                onClick={() => scrollToSection('videos-section')}
                className="block w-full py-3 text-left text-base font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-white"
              >
                {t('nav.performances')}
              </button>
              <button
                onClick={() => scrollToSection('about-section')}
                className="block w-full py-3 text-left text-base font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-white"
              >
                {t('nav.about')}
              </button>
              <a
                href="/blog"
                className="block w-full py-3 text-left text-base font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-white"
                data-testid="nav-blog-mobile"
              >
                Blog
              </a>
              <Button
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#contact-section';
                  } else {
                    onContactClick();
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 w-full rounded-full bg-red-600 py-3 text-sm font-semibold uppercase tracking-wider text-white"
              >
                {t('nav.contact')}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
