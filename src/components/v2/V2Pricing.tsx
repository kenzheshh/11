import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Shield, Info, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface PricingData {
  country: string;
  currency: string;
  symbol: string;
  timestamp: number;
  prices: {
    marketing: number;
    utility: number;
    authentication: number;
    usd_marketing: number;
    usd_utility: number;
    usd_authentication: number;
  };
  availableCountries: string[];
}

export default function V2Pricing() {
  const { t, language } = useLanguage();
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchPricing = async (country?: string) => {
    try {
      setIsRefreshing(true);
      const url = country ? `/api/pricing?country=${encodeURIComponent(country)}` : '/api/pricing';
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setPricingData(data);
        if (!country) {
          setSelectedCountry(data.country);
        }
      }
    } catch (error) {
      console.error("Failed to fetch pricing:", error);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPricing();
    const interval = setInterval(() => {
      fetchPricing(selectedCountry || undefined);
    }, 5 * 60 * 1000); // Auto-refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    fetchPricing(newCountry);
  };

  const formatPrice = (price: number, symbol: string) => {
    return `${symbol}${price.toFixed(2)}`;
  };

  const formatTime = (timestamp: number) => {
    if (!timestamp) return "";
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };


  return (
    <div className="bg-[#050505] text-slate-300 py-32 relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Screen 5: Pricing */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10" id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">{t.pricing.title}</h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "WABA Pro",
              price: "39 990",
              currency: " ₸/мес",
              desc: "Для постоянной коммуникации с клиентами",
              popular: true,
              features: ["Веб-Чат", "Массовые рассылки", "Интеграция с CRM", "Приоритетная поддержка"],
              buttonText: "Выбрать тариф"
            },
            {
              name: "Enterprise",
              price: "Индивидуально",
              currency: "",
              desc: "Для крупных отделов продаж",
              features: ["Безлимитные номера", "Безлимитные операторы", "Выделенный менеджер", "SLA 99.9%"],
              buttonText: "Связаться с нами"
            }
          ].map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${plan.popular ? 'bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]' : 'bg-white/5 border border-white/10 backdrop-blur-xl'}`}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-slate-400 mb-8 font-light">{plan.desc}</p>
              <div className="mb-8">
                <span className={`font-bold tracking-tight text-white ${plan.price === 'Индивидуально' ? 'text-3xl' : 'text-5xl'}`}>{plan.price}</span>
                <span className="text-slate-400 ml-1">{plan.currency}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-300 font-light">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-emerald-400' : 'text-slate-500'}`} />
                    {feat}
                  </li>
                ))}
              </ul>
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className={`w-full py-4 rounded-xl font-bold text-lg transition-all mt-auto ${plan.popular ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1' : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'}`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Meta Pricing Information */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-32 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Info className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Оплата за диалоги Meta</h3>
              </div>
              <p className="text-slate-400 font-light max-w-2xl leading-relaxed">
                Помимо абонентской платы за платформу, Meta (WhatsApp) взимает плату за каждый начатый диалог (сессию 24 часа). Стоимость зависит от страны получателя. Входящие сообщения от клиентов (Service) — бесплатны.
              </p>
            </div>
            <div className="w-full md:w-72 shrink-0">
              <div className="flex justify-between items-end mb-2">
                <label className="block text-sm font-medium text-slate-400">{t.pricing.selectCountry}</label>
                <div className="flex items-center gap-2">
                  {pricingData?.timestamp && (
                    <span className="text-xs text-slate-500">
                      {t.pricing.updated} {formatTime(pricingData.timestamp)}
                    </span>
                  )}
                  <button 
                    onClick={() => fetchPricing(selectedCountry)}
                    disabled={isRefreshing}
                    className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors disabled:opacity-50"
                    title="Обновить курсы валют"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>
              <div className="relative">
                <select 
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  disabled={loading}
                  className="w-full appearance-none bg-[#0a0a0a] border border-white/10 text-white py-3.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer disabled:opacity-50"
                >
                  {pricingData?.availableCountries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-sm text-slate-400 mb-2">{t.pricing.marketing}</div>
              <div className="text-4xl font-bold text-white mb-1">
                {pricingData ? formatPrice(pricingData.prices.marketing, pricingData.symbol) : "..."}
              </div>
              {pricingData && (
                <div className="text-xs text-slate-500 mb-3">≈ ${pricingData.prices.usd_marketing} USD</div>
              )}
              <div className="text-xs text-slate-500">{t.pricing.marketingDesc}</div>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-sm text-slate-400 mb-2">{t.pricing.utility}</div>
              <div className="text-4xl font-bold text-white mb-1">
                {pricingData ? formatPrice(pricingData.prices.utility, pricingData.symbol) : "..."}
              </div>
              {pricingData && (
                <div className="text-xs text-slate-500 mb-3">≈ ${pricingData.prices.usd_utility} USD</div>
              )}
              <div className="text-xs text-slate-500">{t.pricing.utilityDesc}</div>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-sm text-slate-400 mb-2">{t.pricing.auth}</div>
              <div className="text-4xl font-bold text-white mb-1">
                {pricingData ? formatPrice(pricingData.prices.authentication, pricingData.symbol) : "..."}
              </div>
              {pricingData && (
                <div className="text-xs text-slate-500 mb-3">≈ ${pricingData.prices.usd_authentication} USD</div>
              )}
              <div className="text-xs text-slate-500">{t.pricing.authDesc}</div>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-6 text-center">
            {t.pricing.disclaimer.replace('{currency}', pricingData?.currency || "USD")}
          </p>
        </div>
      </div>

      {/* Screen 6: Final CTA */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.15)_0%,_transparent_70%)]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {t.pricing.ready} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WABA?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
              {t.pricing.readySubtitle}
            </p>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] flex items-center gap-3 mx-auto group hover:-translate-y-1">
              {t.pricing.connect}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
