// Spanish translations keyed by the Russian source string. Used as a fallback
// inside t(ru, en, es?) when no explicit `es` argument is given, so most strings
// can be localized here without editing every call site.
//
// ⚠️ Machine-translated — have a native Spanish speaker review before relying on
// this for production. Strings without an entry fall back to the English text.
export const ES: Record<string, string> = {
  // V2Transformation
  'Здравствуйте! Как подключить WABA?': '¡Hola! ¿Cómo conecto WABA?',
  'Привет! Мы поможем вам с регистрацией. Это займет всего 15 минут.':
    '¡Hola! Te ayudamos con el registro. Solo toma 15 minutos.',
  'А мой номер не заблокируют?': '¿No bloquearán mi número?',
  'Нет! WABA — это официальный канал. Блокировки исключены.':
    '¡No! WABA es el canal oficial. Los bloqueos quedan descartados.',
  'Почему бизнес выбирает': 'Por qué las empresas eligen',
  'Забудьте о постоянных блокировках и потере клиентской базы. Официальный WhatsApp Business API — это стабильность и доверие клиентов.':
    'Olvídate de los bloqueos constantes y de perder tu base de clientes. La API oficial de WhatsApp Business significa estabilidad y confianza de los clientes.',
  'Никаких блокировок': 'Sin bloqueos',
  'Мгновенная доставка': 'Entrega instantánea',
  'Массовые рассылки': 'Envíos masivos',
  'Верификация в Meta': 'Verificación en Meta',
  'Узнать больше': 'Saber más',

  // V2Process
  'Заявка и аудит': 'Solicitud y auditoría',
  'Оставляете заявку. Мы анализируем ваши текущие процессы и подбираем оптимальный тариф.':
    'Dejas tu solicitud. Analizamos tus procesos actuales y elegimos el plan óptimo.',
  'Верификация Meta': 'Verificación de Meta',
  'Помогаем пройти проверку бизнеса в Facebook Business Manager и получить зеленую галочку.':
    'Te ayudamos a pasar la verificación del negocio en Facebook Business Manager y a obtener la insignia verde.',
  'Интеграция': 'Integración',
  'Подключаем номер к WhatsApp Business API и настраиваем интеграцию с вашей CRM.':
    'Conectamos el número a la API de WhatsApp Business y configuramos la integración con tu CRM.',
  'Обучение и запуск': 'Formación y lanzamiento',
  'Проводим онбординг для вашей команды. Вы начинаете делать рассылки и общаться с клиентами без риска блокировок.':
    'Hacemos el onboarding de tu equipo. Empiezas a enviar campañas y a comunicarte con los clientes sin riesgo de bloqueos.',
  'Как подключить': 'Cómo conectar',
  'через WABase': 'con WaBase',
  'Прозрачный процесс от заявки до первых сообщений вашим клиентам. Мы берем всю техническую часть на себя.':
    'Un proceso transparente desde la solicitud hasta los primeros mensajes a tus clientes. Nos encargamos de toda la parte técnica.',
  'Оставить заявку на подключение': 'Enviar solicitud de conexión',

  // V2Coexistence
  'Один номер.': 'Un número.',
  'Два интерфейса.': 'Dos interfaces.',
  'Официальная функция Meta, позволяющая использовать один и тот же номер телефона одновременно в приложении WhatsApp Business и через Cloud API (WABA).':
    'La función oficial de Meta que permite usar el mismo número de teléfono a la vez en la app de WhatsApp Business y a través de la Cloud API (WABA).',
  'Гибридный режим': 'Modo híbrido',
  'Продолжайте вести личные диалоги через телефон, в то время как боты или CRM обрабатывают автоматические запросы.':
    'Sigue con tus chats personales desde el teléfono mientras los bots o el CRM gestionan las solicitudes automáticas.',
  'Единая история': 'Historial unificado',
  'Переписки в мобильном приложении и через API полностью синхронизируются. Вы не потеряете ни одного сообщения.':
    'Los chats en la app móvil y a través de la API se sincronizan por completo. No perderás ni un solo mensaje.',
  'Безопасность и экономия': 'Seguridad y ahorro',
  'Снижается риск блокировки номера при автоматизации. Идеально для компаний, которые хотят внедрять WABA, но не готовы отказываться от приложения.':
    'Se reduce el riesgo de bloqueo del número al automatizar. Ideal para empresas que quieren implementar WABA sin renunciar a la app.',
  'Узнать подробнее о Coexistence': 'Más información sobre Coexistence',

  // V2Testimonials
  'Руководитель отдела продаж, AutoDealer': 'Director de ventas, AutoDealer',
  'Переход на официальный API спас наш отдел продаж. Раньше номера блокировали каждую неделю, мы теряли базу. Сейчас мы делаем рассылки на 10 000 контактов и конверсия выросла на 35% благодаря ИИ-ассистенту.':
    'Pasar a la API oficial salvó a nuestro equipo de ventas. Antes bloqueaban los números cada semana y perdíamos la base. Ahora hacemos envíos a 10 000 contactos y la conversión subió un 35 % gracias al asistente de IA.',
  'Основатель, EdTech Platform': 'Fundador, EdTech Platform',
  'Очень удобное диалоговое окно! Все сообщения из Инсты, Телеграма и Ватсапа падают в одно место. Менеджеры больше не путаются, а я вижу всю аналитику. Подключение заняло реально пару часов.':
    '¡Una bandeja muy cómoda! Todos los mensajes de Instagram, Telegram y WhatsApp llegan a un solo lugar. Los agentes ya no se confunden y yo veo toda la analítica. La conexión tardó realmente un par de horas.',
  'Долго сомневались из-за цены за диалоги в WABA, но ребята из WaBase настроили нам правильную маршрутизацию и шаблоны. В итоге стоимость лида упала, а доходимость на вебинары выросла в 2 раза.':
    'Dudamos mucho por el precio de las conversaciones en WABA, pero el equipo de WaBase nos configuró el enrutamiento y las plantillas correctas. Al final, el coste por lead bajó y la asistencia a los webinars se duplicó.',
  'Кейсы': 'Casos',
  'клиентов': 'de clientes',
  'Компании, которые уже масштабировали свои продажи с помощью официального WhatsApp Business API.':
    'Empresas que ya escalaron sus ventas con la API oficial de WhatsApp Business.',

  // V2FeaturesCarousel
  'Все чаты в одном окне': 'Todos los chats en una ventana',
  'WhatsApp, Telegram, Instagram и другие источники в едином интерфейсе. Менеджерам больше не нужно переключаться между вкладками.':
    'WhatsApp, Telegram, Instagram y otras fuentes en una sola interfaz. Los agentes ya no necesitan cambiar de pestaña.',
  'Передача ответственного': 'Transferencia de responsable',
  'Мгновенно переводите диалог на нужного менеджера или отдел. Вся история переписки сохраняется при передаче.':
    'Transfiere al instante el chat al agente o departamento adecuado. Todo el historial se conserva en la transferencia.',
  'Карточка клиента': 'Ficha del cliente',
  'Вся информация о клиенте, история покупок и теги из CRM отображаются прямо в окне диалога.':
    'Toda la información del cliente, el historial de compras y las etiquetas del CRM se muestran en la ventana del chat.',
  'Возможности': 'Funciones',
  'Удобное диалоговое окно, которое объединяет все каналы связи, данные из CRM и инструменты командной работы.':
    'Una bandeja cómoda que reúne todos los canales de comunicación, los datos del CRM y las herramientas de trabajo en equipo.',
  'Поиск...': 'Buscar...',
  'Отлично, давайте презентацию!': '¡Genial, veamos la presentación!',
  'Вчера': 'Ayer',
  'Подскажите статус заказа?': '¿Me dices el estado del pedido?',
  'Сколько стоит доставка?': '¿Cuánto cuesta el envío?',
  'Нажмите для инфо': 'Toca para ver info',

  // V2Pricing
  'Тарифы': 'Precios',
  'Выберите план, который подходит вашему бизнесу. Никаких скрытых платежей.':
    'Elige el plan que se adapte a tu negocio. Sin cargos ocultos.',
  ' ₸/мес': ' ₸/mes',
  'Базовый тариф с подписью сервиса': 'Plan básico con firma de servicio',
  'Веб-Чат': 'Chat web',
  'Рекламная подпись WABase': 'Firma publicitaria de WaBase',
  'Интеграция с CRM': 'Integración con CRM',
  'Выбрать тариф': 'Elegir plan',
  'Для постоянной коммуникации с клиентами': 'Para una comunicación continua con los clientes',
  'Приоритетная поддержка': 'Soporte prioritario',
  'Индивидуально': 'A medida',
  'Для крупных отделов продаж': 'Para grandes equipos de ventas',
  'Безлимитные номера': 'Números ilimitados',
  'Безлимитные операторы': 'Operadores ilimitados',
  'Выделенный менеджер': 'Gerente dedicado',
  'Связаться с нами': 'Contáctanos',
  'Оплата за диалоги Meta': 'Precios por conversación de Meta',
  'Помимо абонентской платы за платформу, Meta (WhatsApp) взимает плату за каждый начатый диалог (сессию 24 часа). Стоимость зависит от страны получателя. Входящие сообщения от клиентов (Service) — бесплатны.':
    'Además de la cuota de la plataforma, Meta (WhatsApp) cobra por cada conversación iniciada (sesión de 24 horas). El coste depende del país del destinatario. Los mensajes entrantes de los clientes (Service) son gratis.',
  'Выберите страну получателя': 'Elige el país del destinatario',
  'Обновлено:': 'Actualizado:',
  'Обновить курсы валют': 'Actualizar tipos de cambio',
  'Рекламные рассылки, акции, спецпредложения': 'Campañas promocionales, ofertas y descuentos',
  'Уведомления о заказах, статусы доставки': 'Notificaciones de pedidos y estados de entrega',
  'Коды подтверждения (OTP), пароли': 'Códigos de confirmación (OTP), contraseñas',
  '* Цены указаны в локальной валюте': '* Los precios se muestran en moneda local',
  'за один диалог (24-часовое окно).': 'por conversación (ventana de 24 horas).',
  'Готовы работать с': '¿Listo para trabajar con',
  'Оставьте заявку прямо сейчас и подключите официальный WhatsApp для вашего бизнеса.':
    'Deja tu solicitud ahora y conecta el WhatsApp oficial para tu negocio.',
  'Подключить WABA': 'Conectar WABA',
};
