import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/assets/logo.jpg" 
              alt="SarauProject Logo" 
              className="h-16 w-auto cursor-pointer"
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            />
            <p className="text-sm text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              {t('footer.links')}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => goToSection('videos-section')}
                  className="text-gray-300 transition-colors hover:text-white text-sm"
                >
                  {t('nav.performances')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToSection('about-section')}
                  className="text-gray-300 transition-colors hover:text-white text-sm"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToSection('contact-section')}
                  className="text-gray-300 transition-colors hover:text-white text-sm"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              {t('footer.contactTitle')}
            </h4>
            <div className="space-y-3">
              <a
                href="https://mail.google.com/mail/?view=cm&to=sarauproject@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                <span>sarauproject@gmail.com</span>
              </a>
              
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.youtube.com/channel/UCYscA1Zq76c_acISztA9ARA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-red-600 p-2 text-white transition-all hover:bg-red-700"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-900 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} SarauProject.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
