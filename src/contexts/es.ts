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

  // Deep pages: IntegrationPage / ComparisonPage configs + PartnershipPage.
  // (Some keys — «Массовые рассылки», «Интеграция» — are defined above already.)
  '1С': '1C',
  'API и готовые интерфейсы': 'API e interfaces listas para usar',
  'CRM, ERP, отраслевые SaaS': 'CRM, ERP, SaaS sectoriales',
  'CRM-системы': 'Sistemas CRM',
  'Green API подключает обычный WhatsApp через шлюз, WaBase — официальный WhatsApp Business API от Meta. Это ключевая разница в надёжности и риске блокировок.':
    'Green API conecta un WhatsApp normal a través de una pasarela; WaBase es la WhatsApp Business API oficial de Meta. Esa es la diferencia clave en fiabilidad y riesgo de bloqueos.',
  'REST API + webhooks, готовый виджет веб-чата для встраивания, SDK для популярных стеков. Sandbox для тестирования.':
    'REST API + webhooks, un widget de chat web listo para incrustar y SDK para los stacks más populares. Sandbox para pruebas.',
  'Radist и WaBase — официальные провайдеры WhatsApp Business API. Различия — в локальной поддержке и документах для бизнеса в Казахстане.':
    'Radist y WaBase son proveedores oficiales de WhatsApp Business API. Las diferencias están en el soporte local y los documentos para empresas en Kazajistán.',
  'WaBase или Green API — официальный WABA против шлюза':
    'WaBase o Green API — WABA oficial frente a una pasarela',
  'WaBase или Radist — сравнение для Казахстана':
    'WaBase o Radist — comparación para Kazajistán',
  'WaBase или Wappi — сравнение провайдеров WhatsApp':
    'WaBase o Wappi — comparación de proveedores de WhatsApp',
  'WaBase или Wazzup — сравнение для Казахстана':
    'WaBase o Wazzup — comparación para Kazajistán',
  'WaBase — официальный WhatsApp Business API (Meta Cloud API). Green API подключает обычный WhatsApp через шлюз. Официальный канал не блокируется за рассылки по согласованным шаблонам.':
    'WaBase es la WhatsApp Business API oficial (Meta Cloud API). Green API conecta un WhatsApp normal a través de una pasarela. El canal oficial no se bloquea por envíos con plantillas aprobadas.',
  'Wabase в цифрах': 'WaBase en cifras',
  'Wazzup и WaBase — оба работают через официальный WhatsApp Business API. Главные различия — локальная поддержка и закрывающие документы для Казахстана.':
    'Wazzup y WaBase funcionan a través de la WhatsApp Business API oficial. Las principales diferencias son el soporte local y los documentos contables para Kazajistán.',
  'WhatsApp в открытых линиях Битрикс24: все чаты в одном окне.':
    'WhatsApp en los canales abiertos de Bitrix24: todos los chats en una sola ventana.',
  'WhatsApp работает в открытых линиях Битрикс24?':
    '¿WhatsApp funciona en los canales abiertos de Bitrix24?',
  'amoCRM, Bitrix24, Мегаплан, Planfix и собственные CRM. Клиенты получают встроенный канал в карточках сделок.':
    'amoCRM, Bitrix24, Megaplan, Planfix y CRM propios. Los clientes obtienen un canal integrado en las tarjetas de los tratos.',
  'amoCRM, Битрикс24, API': 'amoCRM, Bitrix24, API',
  'Автоуведомления о заказах, оплатах и статусах доставки из 1С.':
    'Notificaciones automáticas de pedidos, pagos y estados de entrega desde 1C.',
  'Бухгалтерия будет в восторге': 'Tu contabilidad lo agradecerá',
  'В чём разница между WaBase и Green API?':
    '¿Cuál es la diferencia entre WaBase y Green API?',
  'Ваш разработчик встраивает WABase в продукт. Менеджер сопровождает.':
    'Tu desarrollador integra WaBase en el producto. El gerente te acompaña.',
  'Ваши клиенты пишут в нашу поддержку — мы разбираемся с вопросами по интеграции, рассылкам, шаблонам Meta.':
    'Tus clientes escriben a nuestro soporte: resolvemos las dudas sobre integración, envíos y plantillas de Meta.',
  'Готовые интерфейсы, понятные API и документация:':
    'Interfaces listas, API claras y documentación:',
  'Готовые интерфейсы, понятный API и документация. Подключите WABase своим клиентам за несколько дней — без блокировок, с поддержкой и закрывающими документами для бухгалтерии РК.':
    'Interfaces listas, una API clara y documentación. Conecta WaBase a tus clientes en unos días: sin bloqueos, con soporte y documentos contables para la contabilidad de Kazajistán.',
  'Да': 'Sí',
  'Да — массовые рассылки по согласованным шаблонам Meta прямо из amoCRM, без риска блокировки номера.':
    'Sí: envíos masivos con plantillas de Meta aprobadas directamente desde amoCRM, sin riesgo de bloqueo del número.',
  'Да — массовые рассылки по согласованным шаблонам Meta через официальный WhatsApp Business API, без риска блокировки.':
    'Sí: envíos masivos con plantillas de Meta aprobadas a través de la WhatsApp Business API oficial, sin riesgo de bloqueo.',
  'Да, вся переписка, теги и история диалога привязаны к карточке клиента в amoCRM.':
    'Sí, toda la conversación, las etiquetas y el historial quedan vinculados a la tarjeta del cliente en amoCRM.',
  'Да, локально': 'Sí, local',
  'Да, по шаблонам': 'Sí, con plantillas',
  'Да, по шаблонам Meta': 'Sí, con plantillas de Meta',
  'Да. Поможем перенести номер WABA и заново настроить интеграцию с вашей CRM.':
    'Sí. Te ayudamos a migrar el número WABA y a reconfigurar la integración con tu CRM.',
  'Да. Поможем перенести номер WABA и заново подключить ваши интеграции.':
    'Sí. Te ayudamos a migrar el número WABA y a reconectar tus integraciones.',
  'Да. Сообщения WhatsApp приходят в открытые линии и распределяются между менеджерами по правилам Битрикс24.':
    'Sí. Los mensajes de WhatsApp llegan a los canales abiertos y se reparten entre los agentes según las reglas de Bitrix24.',
  'Диалоги в карточке сделки — вся переписка, история и теги привязаны к клиенту.':
    'Conversaciones en la tarjeta del trato: toda la conversación, el historial y las etiquetas quedan vinculados al cliente.',
  'Для официальных рассылок без риска блокировок и с закрывающими документами в Казахстане подойдёт WaBase на официальном WhatsApp Business API.':
    'Para envíos oficiales sin riesgo de bloqueos y con documentos contables en Kazajistán, WaBase sobre la WhatsApp Business API oficial es la opción adecuada.',
  'Для технических партнёров WhatsApp': 'Para socios técnicos de WhatsApp',
  'До 50% вознаграждения': 'Hasta el 50 % de comisión',
  'Договор': 'Contrato',
  'Договор, акты, счёт-фактуры, ЭСФ. Оплата в тенге. Закрывающие документы каждый месяц без напоминаний.':
    'Contrato, actas, facturas y facturas electrónicas (ESF). Pago en tenge. Documentos contables cada mes sin recordatorios.',
  'Договоры, акты и счета — на нас.': 'Contratos, actas y facturas: corren de nuestra cuenta.',
  'Документы для РК': 'Documentos para Kazajistán',
  'Документы для РК (тенге, ЭСФ)': 'Documentos para Kazajistán (tenge, facturas electrónicas ESF)',
  'Документы для РК (тенге, ЭСФ, закрывающие)':
    'Documentos para Kazajistán (tenge, facturas electrónicas ESF, contables)',
  'Документы и поддержка в РК': 'Documentos y soporte en Kazajistán',
  'Если вы выбираете провайдера для WhatsApp, главное — официальный канал Meta и локальная поддержка. Ниже честное сравнение WaBase и Wappi.':
    'Si estás eligiendo un proveedor de WhatsApp, lo principal es el canal oficial de Meta y el soporte local. A continuación, una comparación honesta de WaBase y Wappi.',
  'Есть': 'Sí',
  'Заблокируют ли номер при отправке из 1С?':
    '¿Bloquearán el número al enviar desde 1C?',
  'Заблокируют ли номер при рассылке через amoCRM?':
    '¿Bloquearán el número al hacer envíos desde amoCRM?',
  'Зависит от способа': 'Depende del método',
  'Зависит от тарифа': 'Depende del plan',
  'Запуск': 'Lanzamiento',
  'Заявка': 'Solicitud',
  'Идеально подходит партнёрам': 'Ideal para socios',
  'Интеграции amoCRM и Битрикс24': 'Integraciones con amoCRM y Bitrix24',
  'Интеграции с CRM': 'Integraciones con CRM',
  'Интеграция WhatsApp с 1С': 'Integración de WhatsApp con 1C',
  'Интеграция WhatsApp с amoCRM': 'Integración de WhatsApp con amoCRM',
  'Интеграция WhatsApp с Битрикс24': 'Integración de WhatsApp con Bitrix24',
  'Интеграция не найдена.': 'Integración no encontrada.',
  'Как стать партнёром': 'Cómo ser socio',
  'Какие уведомления можно отправлять из 1С?':
    '¿Qué notificaciones se pueden enviar desde 1C?',
  'Кому WABase даёт': 'A quién aporta WaBase',
  'Конструкторы ботов, AI-сервисы для автоматизации продаж и поддержки. WABase как бэкенд для WhatsApp.':
    'Constructores de bots y servicios de IA para automatizar ventas y soporte. WaBase como backend de WhatsApp.',
  'Личный онбординг и поддержка 24/7': 'Onboarding personalizado y soporte 24/7',
  'Массовые рассылки по шаблонам Meta прямо из amoCRM — без риска бана.':
    'Envíos masivos con plantillas de Meta directamente desde amoCRM, sin riesgo de bloqueo.',
  'Массовые рассылки по шаблонам Meta — без риска бана.':
    'Envíos masivos con plantillas de Meta, sin riesgo de bloqueo.',
  'Могут ли заблокировать номер на шлюзе?':
    '¿Pueden bloquear el número en una pasarela?',
  'Можно ли делать рассылки из Битрикс24?':
    '¿Se pueden hacer envíos masivos desde Bitrix24?',
  'Можно ли отправлять рассылки из amoCRM?':
    '¿Se pueden enviar campañas masivas desde amoCRM?',
  'Можно ли перейти с Wazzup на WaBase?':
    '¿Puedo migrar de Wazzup a WaBase?',
  'Написать в WhatsApp': 'Escribir por WhatsApp',
  'Настраиваем обмен 1С с WaBase через API.':
    'Configuramos el intercambio entre 1C y WaBase a través de la API.',
  'Несколько менеджеров на одном номере: распределение чатов и контроль.':
    'Varios agentes en un mismo número: reparto de chats y control.',
  'Нет (шаблоны Meta)': 'No (plantillas de Meta)',
  'Нет, через шлюз': 'No, a través de una pasarela',
  'Нет. WaBase работает через официальный WhatsApp Business API: рассылки по шаблонам не приводят к блокировкам, в отличие от «серых» решений.':
    'No. WaBase funciona con la WhatsApp Business API oficial: los envíos con plantillas no provocan bloqueos, a diferencia de las soluciones no oficiales.',
  'Нет: отправка идёт через официальный WhatsApp Business API по согласованным шаблонам Meta.':
    'No: el envío se realiza a través de la WhatsApp Business API oficial con plantillas de Meta aprobadas.',
  'Оба используют официальный WhatsApp Business API. WaBase добавляет личный онбординг, интеграции с amoCRM и Битрикс24 и партнёрскую программу.':
    'Ambos usan la WhatsApp Business API oficial. WaBase añade onboarding personalizado, integraciones con amoCRM y Bitrix24 y un programa de socios.',
  'Оба используют официальный WhatsApp Business API. WaBase ориентирован на Казахстан: договоры и закрывающие документы в тенге, локальная поддержка и партнёрская программа.':
    'Ambos usan la WhatsApp Business API oficial. WaBase está orientado a Kazajistán: contratos y documentos contables en tenge, soporte local y programa de socios.',
  'Оба — официальные провайдеры WhatsApp Business API. WaBase ориентирован на Казахстан: документы в тенге, локальная поддержка и партнёрская программа.':
    'Ambos son proveedores oficiales de WhatsApp Business API. WaBase está orientado a Kazajistán: documentos en tenge, soporte local y programa de socios.',
  'Обычно от 5 минут до пары часов: подключаем номер к WABA и настраиваем открытые линии.':
    'Normalmente de 5 minutos a un par de horas: conectamos el número a WABA y configuramos los canales abiertos.',
  'Обычно от 5 минут до пары часов: подключаем номер к WABA, ставим виджет и привязываем воронки.':
    'Normalmente de 5 minutos a un par de horas: conectamos el número a WABA, instalamos el widget y vinculamos los embudos.',
  'Ориентация на РФ': 'Orientado a Rusia',
  'Отправляйте клиентам уведомления из 1С в WhatsApp через официальный API: статусы заказов, оплаты, напоминания — автоматически.':
    'Envía a tus clientes notificaciones desde 1C a WhatsApp mediante la API oficial: estados de pedidos, pagos y recordatorios, de forma automática.',
  'Отраслевые SaaS': 'SaaS sectoriales',
  'Официальный WhatsApp Business API': 'WhatsApp Business API oficial',
  'Официальный WhatsApp Business API — сообщения доходят, номер не блокируется.':
    'WhatsApp Business API oficial: los mensajes llegan y el número no se bloquea.',
  'Официальный канал Meta (Cloud API)': 'Canal oficial de Meta (Cloud API)',
  'Параметр': 'Característica',
  'Партнёрская программа': 'Programa de socios',
  'Партнёрский менеджер': 'Gerente de socios',
  'Партнёрское вознаграждение': 'Comisión de socio',
  'Перейти на WaBase': 'Cambiar a WaBase',
  'Переписка и история привязаны к лиду и сделке.':
    'La conversación y el historial quedan vinculados al lead y al trato.',
  'Персональный менеджер': 'Gerente personal',
  'Персональный менеджер проведёт за руку': 'Un gerente personal te guiará paso a paso',
  'Пишете и отвечаете клиентам в WhatsApp прямо из сделок.':
    'Escribe y respondes a los clientes por WhatsApp directamente desde los tratos.',
  'Пишете клиентам в WhatsApp прямо из лидов и сделок.':
    'Escribe a los clientes por WhatsApp directamente desde los leads y los tratos.',
  'Пишете нам, обсуждаем ваш продукт и аудиторию. 30 минут разговора.':
    'Nos escribes y hablamos de tu producto y tu audiencia. 30 minutos de conversación.',
  'Платформы для салонов, клиник, образования, авто и e-commerce. WhatsApp как нативная часть продукта.':
    'Plataformas para salones, clínicas, educación, automoción y e-commerce. WhatsApp como parte nativa del producto.',
  'Поддержка 24/7': 'Soporte 24/7',
  'Поддержка 24/7 разберётся с вопросами': 'El soporte 24/7 resolverá las dudas',
  'Подключаем WaBase к открытым линиям Битрикс24.':
    'Conectamos WaBase a los canales abiertos de Bitrix24.',
  'Подключаем ваш номер к WhatsApp Business API (WABA) — от 5 минут.':
    'Conectamos tu número a la WhatsApp Business API (WABA): desde 5 minutos.',
  'Подключаем ваш номер к WhatsApp Business API (WABA).':
    'Conectamos tu número a la WhatsApp Business API (WABA).',
  'Подключаете первых клиентов. Получаете партнёрские выплаты ежемесячно.':
    'Conectas a tus primeros clientes. Recibes los pagos de socio cada mes.',
  'Подключение через REST API и webhooks к вашей конфигурации 1С.':
    'Conexión mediante REST API y webhooks a tu configuración de 1C.',
  'Подключим WhatsApp к': 'Conectaremos WhatsApp a',
  'Подключим официальный WhatsApp Business API за 5 минут':
    'Conectaremos la WhatsApp Business API oficial en 5 minutos',
  'Подключите официальный WhatsApp Business API к Битрикс24. Диалоги — в карточках лидов и сделок, через открытые линии, без блокировок.':
    'Conecta la WhatsApp Business API oficial a Bitrix24. Las conversaciones, en las tarjetas de leads y tratos, mediante canales abiertos y sin bloqueos.',
  'Подключите официальный WhatsApp Business API прямо в amoCRM. Все диалоги — в карточках сделок, без блокировок и «серых» решений.':
    'Conecta la WhatsApp Business API oficial directamente en amoCRM. Todas las conversaciones, en las tarjetas de los tratos, sin bloqueos ni soluciones no oficiales.',
  'Подключить WhatsApp к 1С': 'Conectar WhatsApp a 1C',
  'Подключить WhatsApp к amoCRM': 'Conectar WhatsApp a amoCRM',
  'Подключить WhatsApp к Битрикс24': 'Conectar WhatsApp a Bitrix24',
  'Подключить официальный WABA': 'Conectar la WABA oficial',
  'Подписываем партнёрское соглашение. Доступ к sandbox API и документации.':
    'Firmamos el acuerdo de socios. Acceso al sandbox de la API y a la documentación.',
  'При массовых рассылках через неофициальный шлюз риск блокировки выше. Официальный WhatsApp Business API в WaBase такого риска по шаблонам не несёт.':
    'En los envíos masivos a través de una pasarela no oficial el riesgo de bloqueo es mayor. La WhatsApp Business API oficial de WaBase no conlleva ese riesgo con plantillas.',
  'Расскажу, как интегрироваться и запустить первых клиентов. Подготовлю договор и дам доступ к sandbox в день обращения.':
    'Te explico cómo integrarte y lanzar a tus primeros clientes. Preparo el contrato y te doy acceso al sandbox el mismo día.',
  'Рассылки без риска блокировок': 'Envíos sin riesgo de bloqueos',
  'Риск блокировки за рассылки': 'Riesgo de bloqueo por envíos',
  'С ограничениями': 'Con limitaciones',
  'Самый простой способ интегрировать': 'La forma más sencilla de integrar',
  'Сколько занимает подключение к amoCRM?':
    '¿Cuánto tarda la conexión con amoCRM?',
  'Сколько занимает подключение?': '¿Cuánto tarda la conexión?',
  'Сопровождение интеграции от первого вызова API до продакшена. Помощь с онбордингом ваших первых клиентов.':
    'Acompañamiento de la integración desde la primera llamada a la API hasta producción. Ayuda con el onboarding de tus primeros clientes.',
  'Сохраняется ли история переписки в карточке сделки?':
    '¿Se guarda el historial de la conversación en la tarjeta del trato?',
  'Сравнение не найдено.': 'Comparación no encontrada.',
  'Ставим виджет WaBase в amoCRM и привязываем воронки.':
    'Instalamos el widget de WaBase en amoCRM y vinculamos los embudos.',
  'Статусы заказов, подтверждения и напоминания об оплате, статусы доставки, сервисные сообщения — по событиям в вашей 1С.':
    'Estados de pedidos, confirmaciones y recordatorios de pago, estados de entrega y mensajes de servicio, según los eventos de tu 1C.',
  'Уведомления уходят клиентам в WhatsApp автоматически по событиям 1С.':
    'Las notificaciones se envían a los clientes por WhatsApp de forma automática según los eventos de 1C.',
  'Условия партнёрства': 'Condiciones de la colaboración',
  'Уточняйте': 'Consulta',
  'Уточняйте тариф': 'Consulta el plan',
  'Уточняйте у провайдера': 'Consulta con el proveedor',
  'Чат-боты и AI-агенты': 'Chatbots y agentes de IA',
  'Чат-боты и автоворонки: автоответы, квалификация лидов, напоминания.':
    'Chatbots y embudos automáticos: respuestas automáticas, calificación de leads y recordatorios.',
  'Чат-боты и роботы Битрикс24 работают с WhatsApp.':
    'Los chatbots y robots de Bitrix24 funcionan con WhatsApp.',
  'Чем WaBase отличается от Radist?':
    '¿En qué se diferencia WaBase de Radist?',
  'Чем WaBase отличается от Wazzup?':
    '¿En qué se diferencia WaBase de Wazzup?',
  'Через REST API и webhooks WaBase. Подключаем к вашей конфигурации; типовые и доработанные конфигурации поддерживаются.':
    'A través de la REST API y los webhooks de WaBase. Nos conectamos a tu configuración; se admiten configuraciones estándar y personalizadas.',
  'Через что идёт интеграция с 1С?': '¿Cómo se realiza la integración con 1C?',
  'Что выбрать — WaBase или Wappi?': '¿Qué elegir: WaBase o Wappi?',
  'Что получает технический партнёр': 'Qué recibe el socio técnico',
  'Шаблоны сообщений и логирование отправок.':
    'Plantillas de mensajes y registro de envíos.',
  'больше всего': 'más valor',
  'в Казахстане и СНГ': 'en Kazajistán y la CEI',
  'в ваш SaaS-сервис': 'en tu servicio SaaS',
  'ваших клиентов про интеграцию': 'de tus clientes sobre la integración',
  'до': 'hasta',
  'за 5 минут': 'en 5 minutos',
  'и': 'y',
  'интеграцию сделает даже один разработчик': 'la integración la hace incluso un solo desarrollador',
  'компаний используют WABase': 'empresas usan WaBase',
  'мин': 'min',
  'от «куда жать» до «всё работает»': 'desde «dónde hacer clic» hasta «todo funciona»',
  'официальный канал Meta, без блокировок': 'canal oficial de Meta, sin bloqueos',
  'первого клиента': 'el primer cliente',
  'подключение под ключ': 'conexión llave en mano',
  'после подключения 1 пользователя': 'tras conectar 1 usuario',
  'постоянный доход — пока клиент пользуется WABase':
    'ingresos recurrentes mientras el cliente use WaBase',
  'с каждой оплаты': 'de cada pago',
  'с каждой оплаты шаблона WABA': 'de cada pago de plantilla WABA',
  'технических партнёров': 'socios técnicos',
  'шага до': 'pasos hasta',

  // Deep-page shared chrome (FAQ heading, nav, section labels).
  'Частые вопросы': 'Preguntas frecuentes',
  'На главную': 'Inicio',
  'Сравнение': 'Comparación',
};
