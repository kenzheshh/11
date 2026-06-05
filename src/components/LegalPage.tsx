import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type Section = { h: string; p: string };

// Draft scaffolds — section structure + neutral placeholders. The real legal
// text is the client's to provide; pages are noindex until finalised.
const PRIVACY: Section[] = [
  { h: '1. Общие положения', p: 'Настоящая Политика описывает, как WaBase («мы») обрабатывает персональные данные пользователей сайта wabase.ai и сервиса подключения WhatsApp Business API. [Уточните юридическое лицо и реквизиты оператора.]' },
  { h: '2. Какие данные мы собираем', p: 'Контактные данные из формы заявки (имя, телефон, email), метаданные диалогов WhatsApp при использовании сервиса, технические данные (IP-адрес, cookies, данные аналитики). [Уточните полный перечень.]' },
  { h: '3. Цели обработки', p: 'Связь по заявкам, заключение договора и оказание услуг WABA, поддержка пользователей, аналитика и улучшение сервиса.' },
  { h: '4. Передача третьим лицам', p: 'Данные могут передаваться: Meta Platforms (WhatsApp Business API), системам CRM при интеграции (например, AmoCRM), сервисам аналитики (Google Analytics, Yandex Metrica, Meta Pixel). [Уточните перечень и правовые основания.]' },
  { h: '5. Cookies и аналитика', p: 'Сайт использует cookies и счётчики аналитики для измерения трафика и улучшения сервиса. [Опишите состав cookies и способы управления ими.]' },
  { h: '6. Хранение и защита', p: 'Данные хранятся в течение срока, необходимого для целей обработки, с применением организационных и технических мер защиты. [Уточните сроки хранения.]' },
  { h: '7. Права пользователя', p: 'Вы можете запросить доступ, исправление или удаление своих данных, а также отозвать согласие на обработку. [Уточните порядок обращения.]' },
  { h: '8. Контакты', p: 'По вопросам обработки персональных данных свяжитесь с нами: [укажите email/контакт оператора].' },
];

const TERMS: Section[] = [
  { h: '1. Общие условия', p: 'Используя сайт wabase.ai и сервис WaBase, вы соглашаетесь с настоящими Условиями использования. [Уточните юридическое лицо.]' },
  { h: '2. Описание услуг', p: 'WaBase предоставляет подключение и платформу для работы с официальным WhatsApp Business API: массовые рассылки, чат-боты, интеграция с CRM.' },
  { h: '3. Доступ и учётная запись', p: 'Для использования сервиса требуется регистрация и верификация бизнеса в соответствии с правилами Meta.' },
  { h: '4. Оплата и тарифы', p: 'Стоимость платформы определяется выбранным тарифом; плата за диалоги взимается по тарифам Meta. [Уточните условия оплаты и возвратов.]' },
  { h: '5. Допустимое использование', p: 'Запрещены спам, рассылки без согласия получателей и нарушение политик Meta/WhatsApp. Нарушение может привести к ограничению или блокировке доступа.' },
  { h: '6. Ответственность', p: 'Сервис предоставляется «как есть». [Уточните ограничения ответственности.]' },
  { h: '7. Изменение условий', p: 'Мы можем обновлять настоящие Условия; актуальная версия всегда публикуется на этой странице.' },
  { h: '8. Контакты', p: 'По вопросам, связанным с Условиями: [укажите контакт].' },
];

export default function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isPrivacy = kind === 'privacy';
  const title = isPrivacy
    ? t('Политика конфиденциальности', 'Privacy Policy')
    : t('Условия использования', 'Terms of Use');
  const sections = isPrivacy ? PRIVACY : TERMS;

  return (
    <div className="bg-[#050505] text-slate-300 min-h-screen pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
          ← {t('На главную', 'Home')}
        </a>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">{title}</h1>
        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm rounded-xl px-4 py-3 mb-10">
          {t(
            '⚠️ Черновик. Текст требует проверки юристом перед публикацией.',
            '⚠️ Draft. This text must be reviewed by a lawyer before publishing.',
          )}
        </div>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-white mb-2">{s.h}</h2>
              <p className="text-slate-400 font-light leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
