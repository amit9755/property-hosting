import { Check, Globe2, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguagePrompt() {
  const { language, t, chooseLanguage, showPrompt, setShowPrompt } = useLanguage();

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="bg-navy-900 px-6 pb-8 pt-7 text-center text-white">
          <button
            type="button"
            onClick={() => setShowPrompt(false)}
            className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="Close language selection"
          >
            <X size={18} />
          </button>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 text-navy-900 shadow-lg shadow-gold-500/20">
            <Globe2 size={28} />
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">{t.prompt.eyebrow}</p>
          <h2 className="font-heading text-3xl font-bold">{t.prompt.title}</h2>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/70">{t.prompt.subtitle}</p>
        </div>

        <div className="space-y-3 p-6">
          {[
            { value: 'en', label: t.prompt.english, native: 'English' },
            { value: 'hi', label: t.prompt.hindi, native: 'Hindi' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => chooseLanguage(option.value)}
              className={`flex w-full items-center justify-between rounded-2xl border-2 px-4 py-3 text-left transition-all ${
                language === option.value ? 'border-gold-500 bg-gold-50' : 'border-gray-100 hover:border-gold-300 hover:bg-gold-50/50'
              }`}
            >
              <span>
                <span className="block font-semibold text-navy-900">{option.label}</span>
                <span className="text-xs text-gray-400">{option.native}</span>
              </span>
              {language === option.value && <Check size={19} className="text-gold-600" />}
            </button>
          ))}
          <button type="button" onClick={() => setShowPrompt(false)} className="w-full pt-2 text-sm font-semibold text-navy-700 hover:text-gold-600">
            {t.prompt.continue}
          </button>
        </div>
      </div>
    </div>
  );
}