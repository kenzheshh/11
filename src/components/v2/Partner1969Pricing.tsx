import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Info, ChevronDown, RefreshCw, Sparkles, MessageSquareCode, Gift } from 'lucide-react';
import { PRICES_USD, COUNTRY_TO_CURRENCY, CURRENCY_SYMBOLS, COUNTRY_CODE_TO_RU } from '../../lib/pricingData';
import { useLanguage } from '../../contexts/LanguageContext';
import { fetchGeoData } from '../../lib/geo';

interface PricingData {
  country: string;
  currency: string;
  symbol: string;
  timestamp: number | null;
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

const DEFAULT_COUNTRY = "Казахстан";
const DEFAULT_PRICING: PricingData = {
  country: DEFAULT_COUNTRY,
  currency: COUNTRY_TO_CURRENCY[DEFAULT_COUNTRY] || "USD",
  symbol: CURRENCY_SYMBOLS[COUNTRY_TO_CURRENCY[DEFAULT_COUNTRY] || "USD"] || (COUNTRY_TO_CURRENCY[DEFAULT_COUNTRY] || "USD"),
  timestamp: null,
  prices: {
    marketing: PRICES_USD[DEFAULT_COUNTRY]?.marketing || 0,
    utility: PRICES_USD[DEFAULT_COUNTRY]?.utility || 0,
    authentication: PRICES_USD[DEFAULT_COUNTRY]?.auth || 0,
    usd_marketing: PRICES_USD[DEFAULT_COUNTRY]?.marketing || 0,
    usd_utility: PRICES_USD[DEFAULT_COUNTRY]?.utility || 0,
    usd_authentication: PRICES_USD[DEFAULT_COUNTRY]?.auth || 0
  },
  availableCountries: Object.keys(PRICES_USD).sort()
};

export default function Partner1969Pricing() {
  const { t, lang } = useLanguage();
  const [pricingData, setPricingData] = useState<PricingData>(DEFAULT_PRICING);
  const [selectedCountry, setSelectedCountry] = useState<string>(DEFAULT_COUNTRY);
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);

  const waText = encodeURIComponent('Здравствуйте! Я от Бюро 1969, хочу подключить WhatsApp Business API.');
  const waLink = `https://wa.me/77017433301?text=${waText}`;

  const fetchExchangeRates = async () => {
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      if (res.ok) {
        const data = await res.json();
        setExchangeRates(data.rates);
        setLastFetchTime(Date.now());
        return data.rates;
      }
    } catch (error) {
      console.error("Failed to fetch exchange rates:", error);
    }
    return null;
  };

  const calculatePricing = (country: string, rates: Record<string, number>) => {
    const currencyCode = COUNTRY_TO_CURRENCY[country] || "USD";
    const symbol = CURRENCY_SYMBOLS[currencyCode] || currencyCode;
    const usdPrices = PRICES_USD[country] || PRICES_USD["США"];
    const rate = rates[currencyCode] || 1;

    return {
      country,
      currency: currencyCode,
      symbol,
      timestamp: Math.floor(Date.now() / 1000),
      prices: {
        marketing: Number((usdPrices.marketing * rate).toFixed(2)),
        utility: Number((usdPrices.utility * rate).toFixed(2)),
        authentication: Number((usdPrices.auth * rate).toFixed(2)),
        usd_marketing: usdPrices.marketing,
        usd_utility: usdPrices.utility,
        usd_authentication: usdPrices.auth
      },
      availableCountries: Object.keys(PRICES_USD).sort()
    };
  };

  const fetchPricing = async (country?: string) => {
    try {
      setLoading(true);
      setIsRefreshing(true);
      
      let rates = exchangeRates;
      if (Object.keys(rates).length === 0 || Date.now() - lastFetchTime > 3600000) {
        const newRates = await fetchExchangeRates();
        if (newRates) rates = newRates;
      }

      let targetCountry = country;
      if (!targetCountry) {
        const geoCountry = await fetchGeoData();
        if (geoCountry && PRICES_USD[geoCountry]) {
          targetCountry = geoCountry;
        } else {
          targetCountry = DEFAULT_COUNTRY;
        }
      }

      setSelectedCountry(targetCountry);
      const calculated = calculatePricing(targetCountry, rates);
      setPricingData(calculated);
    } catch (error) {
      console.error("Failed to fetch pricing:", error);
      const calculated = calculatePricing(country || DEFAULT_COUNTRY, exchangeRates);
      setPricingData(calculated);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    const calculated = calculatePricing(newCountry, exchangeRates);
    setPricingData(calculated);
  };

  const formatPrice = (price: number, symbol: string) => {
    return `${price.toLocaleString()} ${symbol}`;
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getTranslatedCountryName = useCallback((country: string) => {
    if (lang === 'en') {
      const code = Object.keys(COUNTRY_CODE_TO_RU).find(key => COUNTRY_CODE_TO_RU[key] === country);
      if (code) {
        try {
          const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
          return regionNames.of(code) || country;
        } catch {
          return country;
        }
      }
    }
    return country;
  }, [lang]);

  const sortedCountries = useMemo(() => {
    if (!pricingData?.availableCountries) return [];
    return [...pricingData.availableCountries].sort((a, b) => {
      const nameA = getTranslatedCountryName(a);
      const nameB = getTranslatedCountryName(b);
      return nameA.localeCompare(nameB);
    });
  }, [pricingData?.availableCountries, getTranslatedCountryName]);

  const plans = [
    {
      name: "WABA Pro",
      price: "39 990",
      currency: t(" ₸/мес", " ₸/mo"),
      desc: t("Для постоянной коммуникации с клиентами", "For continuous customer communication"),
      popular: true,
      features: [
        t("Веб-Чат", "Web Chat"),
        t("Массовые рассылки", "Bulk messaging"),
        t("Интеграция с CRM", "CRM integration"),
        t("Приоритетная поддержка", "Priority support"),
        t("Бонус: Бесплатное подключение и верификация Meta (0 ₸)", "Bonus: Free setup and Meta verification (0 ₸)")
      ],
      buttonText: t("Выбрать тариф", "Select plan")
    },
    {
      name: "Enterprise",
      price: t("Индивидуально", "Custom pricing"),
      currency: "",
      desc: t("Для крупных отделов продаж", "For large sales departments"),
      features: [
        t("Безлимитные номера", "Unlimited numbers"),
        t("Безлимитные операторы", "Unlimited operators"),
        t("Выделенный менеджер", "Dedicated manager"),
        "SLA 99.9%",
        t("Бонус: Индивидуальный онбординг и аудит", "Bonus: Custom onboarding and audit")
      ],
      buttonText: t("Связаться с нами", "Contact us")
    }
  ];

  return (
    <div className="bg-[#050505] text-slate-300 py-32 relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-900/10 blur-[60px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10" id="pricing">
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Partner Highlight Banner */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(16,185,129,0.2)]">
            <Gift className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-300">
              {t('Партнёрские условия для клиентов Бюро 1969', 'Partner conditions for Bureau 1969 clients')}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            {t('Тарифы', 'Pricing')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WABA</span>
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-4">
            {t('Официальные фиксированные цены платформы. Для клиентов Бюро 1969 — бесплатное подключение и помощь с верификацией в подарок.', 'Official fixed platform rates. For Bureau 1969 clients: free onboarding and Meta verification as a gift.')}
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-emerald-300/80 bg-emerald-950/40 border border-emerald-500/20 px-4 py-1.5 rounded-xl">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('Специальные условия уже активированы при переходе по этой ссылке', 'Special terms are already active via this link')}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${plan.popular ? 'bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)]' : 'bg-white/5 border border-white/10 backdrop-blur-xl'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                  {t('Выбор клиентов Бюро 1969', 'Bureau 1969 Popular')}
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-slate-400 mb-8 font-light">{plan.desc}</p>
              <div className="mb-8">
                <span className={`font-bold tracking-tight text-white ${plan.price === t('Индивидуально', 'Custom pricing') ? 'text-3xl' : 'text-5xl'}`}>{plan.price}</span>
                <span className="text-slate-400 ml-1">{plan.currency}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feat, j) => {
                  const isBonus = feat.includes('Бонус') || feat.includes('Bonus');
                  return (
                    <li key={j} className={`flex items-start gap-3 text-sm font-light ${isBonus ? 'text-emerald-300 font-medium' : 'text-slate-300'}`}>
                      {isBonus ? (
                        <Sparkles className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                      ) : (
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-emerald-400' : 'text-slate-400'}`} />
                      )}
                      <span>{feat}</span>
                    </li>
                  );
                })}
              </ul>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} 
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all mt-auto cursor-pointer ${plan.popular ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5' : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'}`}
              >
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
                <h3 className="text-2xl font-bold text-white">{t('Оплата за диалоги Meta', 'Meta Conversation Pricing')}</h3>
              </div>
              <p className="text-slate-400 font-light max-w-2xl leading-relaxed">
                {t('Помимо абонентской платы за платформу, Meta (WhatsApp) взимает плату за каждый начатый диалог (сессию 24 часа). Стоимость зависит от страны получателя. Входящие сообщения от клиентов (Service) — бесплатны.', 'In addition to the platform subscription fee, Meta (WhatsApp) charges for each initiated conversation (24-hour session). The cost depends on the recipient\'s country. Incoming messages from customers (Service) are free.')}
              </p>
            </div>
            <div className="w-full md:w-72 shrink-0">
              <div className="flex justify-between items-end mb-2">
                <label className="block text-sm font-medium text-slate-400">{t('Выберите страну получателя', 'Select recipient country')}</label>
                <div className="flex items-center gap-2">
                  {pricingData?.timestamp && (
                    <span className="text-xs text-slate-400">
                      {t('Обновлено:', 'Updated:')} {formatTime(pricingData.timestamp)}
                    </span>
                  )}
                  <button 
                    onClick={() => fetchPricing(selectedCountry)}
                    disabled={isRefreshing}
                    className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors disabled:opacity-50"
                    title={t('Обновить курсы валют', 'Refresh exchange rates')}
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
                  aria-label={t('Выберите страну получателя', 'Select recipient country')}
                  className="w-full appearance-none bg-[#0a0a0a] border border-white/10 text-white py-3.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer disabled:opacity-50"
                >
                  {sortedCountries.map(country => (
                    <option key={country} value={country}>{getTranslatedCountryName(country)}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-sm text-slate-400 mb-2">Marketing</div>
              <div className="text-4xl font-bold text-white mb-1">
                {pricingData ? formatPrice(pricingData.prices.marketing, pricingData.symbol) : "..."}
              </div>
              {pricingData && (
                <div className="text-xs text-slate-400 mb-3">≈ ${pricingData.prices.usd_marketing} USD</div>
              )}
              <div className="text-xs text-slate-400">{t('Рекламные рассылки, акции, спецпредложения', 'Promotional mailings, promotions, special offers')}</div>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-sm text-slate-400 mb-2">Utility</div>
              <div className="text-4xl font-bold text-white mb-1">
                {pricingData ? formatPrice(pricingData.prices.utility, pricingData.symbol) : "..."}
              </div>
              {pricingData && (
                <div className="text-xs text-slate-400 mb-3">≈ ${pricingData.prices.usd_utility} USD</div>
              )}
              <div className="text-xs text-slate-400">{t('Уведомления о заказах, статусы доставки', 'Order notifications, delivery statuses')}</div>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-sm text-slate-400 mb-2">Authentication</div>
              <div className="text-4xl font-bold text-white mb-1">
                {pricingData ? formatPrice(pricingData.prices.authentication, pricingData.symbol) : "..."}
              </div>
              {pricingData && (
                <div className="text-xs text-slate-400 mb-3">≈ ${pricingData.prices.usd_authentication} USD</div>
              )}
              <div className="text-xs text-slate-400">{t('Коды подтверждения (OTP), пароли', 'Confirmation codes (OTP), passwords')}</div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-6 text-center">
            {t('* Цены указаны в локальной валюте', '* Prices are shown in local currency')} ({pricingData?.currency || "USD"}) {t('за один диалог (24-часовое окно).', 'per conversation (24-hour window).')}
          </p>
        </div>
      </div>

      {/* Final Partner CTA */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-emerald-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.2)_0%,_transparent_70%)]" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6 text-xs uppercase tracking-wider text-emerald-300 font-semibold">
              {t('WaBase × Бюро 1969', 'WaBase × Bureau 1969')}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {t('Подключите WhatsApp Business API', 'Connect WhatsApp Business API')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {t('на особых условиях', 'on special terms')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
              {t('Оставьте заявку на платформе или свяжитесь с персональным менеджером в WhatsApp — мы поможем запустить рассылки в день обращения.', 'Leave a request on the platform or contact your dedicated manager on WhatsApp — we will help launch messaging today.')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} 
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] flex items-center justify-center gap-3 cursor-pointer hover:-translate-y-0.5"
              >
                <span>{t('Подключить WABA', 'Connect WABA')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-5 rounded-full font-medium text-lg border border-white/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5 backdrop-blur-md"
              >
                <MessageSquareCode className="w-5 h-5 text-emerald-400" />
                <span>{t('Написать в WhatsApp', 'Message on WhatsApp')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
