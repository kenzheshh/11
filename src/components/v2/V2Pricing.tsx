import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Shield, Info, ChevronDown, ChevronUp } from 'lucide-react';

const metaPricingData = [
  {"country": "Австралия", "marketing": "$0,1135", "utility": "$0,0212", "auth": "$0,0212"},
  {"country": "Австрия", "marketing": "$0,0921", "utility": "$0,0311", "auth": "$0,0311"},
  {"country": "Азербайджан", "marketing": "$0,1331", "utility": "$0,0382", "auth": "$0,0382"},
  {"country": "Аргентина", "marketing": "$0,0961", "utility": "$0,0464", "auth": "$0,0464"},
  {"country": "Армения", "marketing": "$0,1331", "utility": "$0,0382", "auth": "$0,0382"},
  {"country": "Бангладеш", "marketing": "$0,1135", "utility": "$0,0212", "auth": "$0,0212"},
  {"country": "Бельгия", "marketing": "$0,0921", "utility": "$0,0311", "auth": "$0,0311"},
  {"country": "Бразилия", "marketing": "$0,0972", "utility": "$0,0134", "auth": "$0,0134"},
  {"country": "Великобритания", "marketing": "$0,0825", "utility": "$0,0396", "auth": "$0,0396"},
  {"country": "Венгрия", "marketing": "$0,1331", "utility": "$0,0382", "auth": "$0,0382"},
  {"country": "Вьетнам", "marketing": "$0,1135", "utility": "$0,0212", "auth": "$0,0212"},
  {"country": "Германия", "marketing": "$0,2104", "utility": "$0,0963", "auth": "$0,0963"},
  {"country": "Греция", "marketing": "$0,1331", "utility": "$0,0382", "auth": "$0,0382"},
  {"country": "Грузия", "marketing": "$0,1331", "utility": "$0,0382", "auth": "$0,0382"},
  {"country": "Дания", "marketing": "$0,0921", "utility": "$0,0311", "auth": "$0,0311"},
  {"country": "Египет", "marketing": "$0,1001", "utility": "$0,0079", "auth": "$0,0079"},
  {"country": "Израиль", "marketing": "$0,0555", "utility": "$0,0108", "auth": "$0,0108"},
  {"country": "Индия", "marketing": "$0,0196", "utility": "$0,0041", "auth": "$0,0041"},
  {"country": "Индонезия", "marketing": "$0,0644", "utility": "$0,0447", "auth": "$0,0447"},
  {"country": "Испания", "marketing": "$0,0956", "utility": "$0,0361", "auth": "$0,0361"},
  {"country": "Италия", "marketing": "$0,1073", "utility": "$0,0533", "auth": "$0,0533"},
  {"country": "Казахстан", "marketing": "$0,0939", "utility": "$0,0150", "auth": "$0,0150", "highlight": true},
  {"country": "Канада", "marketing": "$0,0398", "utility": "$0,0076", "auth": "$0,0076"},
  {"country": "Колумбия", "marketing": "$0,0207", "utility": "$0,0031", "auth": "$0,0031"},
  {"country": "Малайзия", "marketing": "$0,1331", "utility": "$0,0258", "auth": "$0,0258"},
  {"country": "Мексика", "marketing": "$0,0482", "utility": "$0,0163", "auth": "$0,0163"},
  {"country": "Нигерия", "marketing": "$0,0805", "utility": "$0,0132", "auth": "$0,0132"},
  {"country": "Нидерланды", "marketing": "$0,2459", "utility": "$0,0877", "auth": "$0,0877"},
  {"country": "Норвегия", "marketing": "$0,0921", "utility": "$0,0311", "auth": "$0,0311"},
  {"country": "ОАЭ", "marketing": "$0,0779", "utility": "$0,0287", "auth": "$0,0287"},
  {"country": "Пакистан", "marketing": "$0,0739", "utility": "$0,0189", "auth": "$0,0189"},
  {"country": "Перу", "marketing": "$0,1091", "utility": "$0,0361", "auth": "$0,0361"},
  {"country": "Польша", "marketing": "$0,1331", "utility": "$0,0382", "auth": "$0,0382"},
  {"country": "Португалия", "marketing": "$0,0921", "utility": "$0,0311", "auth": "$0,0311"},
  {"country": "Россия", "marketing": "$0,1242", "utility": "$0,0705", "auth": "$0,0705"},
  {"country": "Румыния", "marketing": "$0,1331", "utility": "$0,0382", "auth": "$0,0382"},
  {"country": "США", "marketing": "$0,0398", "utility": "$0,0076", "auth": "$0,0076"},
  {"country": "Саудовская Аравия", "marketing": "$0,0782", "utility": "$0,0201", "auth": "$0,0201"},
  {"country": "Словакия", "marketing": "$0,1331", "utility": "$0,0382", "auth": "$0,0382"},
  {"country": "Таиланд", "marketing": "$0,1135", "utility": "$0,0212", "auth": "$0,0212"},
  {"country": "Турция", "marketing": "$0,0182", "utility": "$0,0033", "auth": "$0,0033"},
  {"country": "Узбекистан", "marketing": "$0,1135", "utility": "$0,0212", "auth": "$0,0212"},
  {"country": "Украина", "marketing": "$0,1331", "utility": "$0,0382", "auth": "$0,0382"},
  {"country": "Филиппины", "marketing": "$0,1135", "utility": "$0,0212", "auth": "$0,0212"},
  {"country": "Финляндия", "marketing": "$0,0921", "utility": "$0,0311", "auth": "$0,0311"},
  {"country": "Франция", "marketing": "$0,1330", "utility": "$0,0533", "auth": "$0,0533"},
  {"country": "Чехия", "marketing": "$0,1331", "utility": "$0,0382", "auth": "$0,0382"},
  {"country": "Чили", "marketing": "$0,1375", "utility": "$0,0361", "auth": "$0,0361"},
  {"country": "Швейцария", "marketing": "$0,0921", "utility": "$0,0311", "auth": "$0,0311"},
  {"country": "Швеция", "marketing": "$0,0921", "utility": "$0,0311", "auth": "$0,0311"},
  {"country": "Южная Африка", "marketing": "$0,0595", "utility": "$0,0148", "auth": "$0,0148"}
];

const EXCHANGE_RATE = 480;

const formatToKZT = (usdPrice?: string) => {
  if (!usdPrice) return "";
  const num = parseFloat(usdPrice.replace('$', '').replace(',', '.'));
  return `~${(num * EXCHANGE_RATE).toFixed(1).replace('.', ',')} ₸`;
};

export default function V2Pricing() {
  const [selectedCountry, setSelectedCountry] = useState("Казахстан");
  const currentMetaPrice = metaPricingData.find(d => d.country === selectedCountry) || metaPricingData.find(d => d.country === "Казахстан");

  return (
    <div className="bg-[#050505] text-slate-300 py-32 relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Screen 5: Pricing */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10" id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Тарифы <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WABA</span></h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">Выберите план, который подходит вашему бизнесу. Никаких скрытых платежей.</p>
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
              <label className="block text-sm font-medium text-slate-400 mb-2">Выберите страну получателя</label>
              <div className="relative">
                <select 
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full appearance-none bg-[#0a0a0a] border border-white/10 text-white py-3.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
                >
                  {metaPricingData.map(d => (
                    <option key={d.country} value={d.country}>{d.country}</option>
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
              <div className="text-4xl font-bold text-white mb-2">{formatToKZT(currentMetaPrice?.marketing)}</div>
              <div className="text-xs text-slate-500">Рекламные рассылки, акции, спецпредложения</div>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-sm text-slate-400 mb-2">Utility</div>
              <div className="text-4xl font-bold text-white mb-2">{formatToKZT(currentMetaPrice?.utility)}</div>
              <div className="text-xs text-slate-500">Уведомления о заказах, статусы доставки</div>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-sm text-slate-400 mb-2">Authentication</div>
              <div className="text-4xl font-bold text-white mb-2">{formatToKZT(currentMetaPrice?.auth)}</div>
              <div className="text-xs text-slate-500">Коды подтверждения (OTP), пароли</div>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-6 text-center">
            * Цены указаны в тенге (₸) за один диалог (24-часовое окно).
          </p>
        </div>
      </div>

      {/* Screen 6: Final CTA */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.15)_0%,_transparent_70%)]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Готовы работать с <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WABA?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
              Оставьте заявку прямо сейчас и подключите официальный WhatsApp для вашего бизнеса.
            </p>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] flex items-center gap-3 mx-auto group hover:-translate-y-1">
              Подключить WABA
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
