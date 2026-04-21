import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

const WEB3FORMS_ACCESS_KEY = 'f1a1a5da-0e7d-4812-bde5-3819861a05c2';

const ContactForm = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === 'true') {
      setSubmitted(true);
      window.history.replaceState({}, '', window.location.pathname + '#contact-section');
      window.scrollTo(0, document.getElementById('contact-section')?.offsetTop || 0);
      // Volver al formulario después de 4 segundos
      setTimeout(() => setSubmitted(false), 4000);
    }
  }, []);

  return (
    <section id="contact-section" className="bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold sm:text-5xl" style={{color: '#b0b0b0'}}>
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {t('contact.subtitle')}
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-800 p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2" style={{color: '#b0b0b0'}}>
                {t('contact.successTitle')}
              </h3>
              <p className="text-gray-400">
                {t('contact.successMessage')}
              </p>
            </div>
          ) : (
            <form 
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="Nuevo contacto - SarauProject" />
              <input type="hidden" name="from_name" value="SarauProject Web" />
              <input type="hidden" name="redirect" value={window.location.origin + "/?sent=true"} />
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.fullName')} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-black border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                    placeholder={t('contact.fullName')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.email')} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-black border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tipo_evento" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.eventType')}
                </label>
                <Input
                  id="tipo_evento"
                  name="tipo_evento"
                  type="text"
                  className="bg-black border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                  placeholder={t('contact.eventTypePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.message')} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="bg-black border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              {/* Honeypot anti-spam */}
              <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-red-600 py-6 text-base font-semibold uppercase tracking-wider text-white transition-all hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/50"
              >
                <Send className="mr-2 h-5 w-5" />
                {t('contact.submit')}
              </Button>

              <p className="text-center text-sm text-gray-500">
                <Mail className="inline h-4 w-4 mr-1" />
                {t('contact.directEmail')}{' '}
                <a 
                  href="mailto:sarauproject@gmail.com"
                  className="text-gray-300 hover:text-white underline"
                >
                  sarauproject@gmail.com
                </a>
              </p>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
