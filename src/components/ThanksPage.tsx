import { useEffect } from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Post-submit confirmation page. Reached via a redirect from the amoCRM form
// (configured in amoCRM, not in code). The URL contains "thanks" so the Meta Ads
// custom conversion fires on /thanks, /en/thanks and /es/thanks alike.
export default function ThanksPage() {
  const { t, localePath } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fire the Meta Pixel "Lead" conversion for the submitted amoCRM form.
    // The form is a cross-origin iframe we can't hook directly, so amoCRM
    // redirects here on success and we track the lead from this page.
    const w = window as unknown as {
      loadAnalytics?: () => void;
      fbq?: (...args: unknown[]) => void;
    };

    try {
      if (sessionStorage.getItem('lead_tracked')) return; // avoid refresh double-count
    } catch {
      /* ignore */
    }

    // Load analytics now instead of waiting for the 3s landing-page delay.
    try {
      w.loadAnalytics?.();
    } catch {
      /* ignore */
    }

    let done = false;
    const fire = () => {
      if (done || typeof w.fbq !== 'function') return;
      w.fbq('track', 'Lead');
      done = true;
      try {
        sessionStorage.setItem('lead_tracked', '1');
      } catch {
        /* ignore */
      }
    };
    fire();
    if (done) return;
    // fbq stub may not be ready yet — poll briefly until it is.
    const id = window.setInterval(fire, 150);
    const stop = window.setTimeout(() => window.clearInterval(id), 6000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(stop);
    };
  }, []);

  return (
    <div className="bg-[#050505] text-slate-300 min-h-screen pt-28 pb-24">
      <div className="max-w-xl mx-auto px-6 lg:px-8 min-h-[70vh] flex flex-col items-center justify-center text-center">
        {/* Success icon with the same emerald glow used across the landing */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" />
          <div className="relative w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {t(
            'Спасибо! Ваша заявка принята',
            'Thank you! Your request has been received',
            '¡Gracias! Hemos recibido tu solicitud',
          )}
        </h1>
        <p className="text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-md">
          {t(
            'Наш менеджер свяжется с вами в течение рабочего дня.',
            'Our manager will contact you within one business day.',
            'Nuestro gerente se pondrá en contacto contigo en un día hábil.',
          )}
        </p>

        <a
          href={localePath('/')}
          className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-7 rounded-full flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('Вернуться на главную', 'Back to home', 'Volver al inicio')}
        </a>
      </div>
    </div>
  );
}
