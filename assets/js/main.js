document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const observerTargets = document.querySelectorAll("section[id]");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinksContainer = document.querySelector(".nav-links");
  const mobileMedia = window.matchMedia("(max-width: 720px)");
  let navToggleLabels = {
    open: "Apri menu",
    close: "Chiudi menu",
  };

const translations = {
    it: {
      "nav.fleet": "Supercar",
      "nav.services": "Servizi",
      "nav.location": "Dove siamo",
      "nav.contact": "Contatti",
      "nav.toggle.open": "Apri menu",
      "nav.toggle.close": "Chiudi menu",
      "lang.toggle": "Cambia lingua",
      "hero.eyebrow": "Noleggio Supercar a Verona",
      "hero.heading": "Prestazioni estreme. Servizio impeccabile.",
      "hero.text": "Supreme Cars Verona mette a tua disposizione una flotta esclusiva di supercar, servizi garage custodito e trasferimenti Supreme Transport. Ogni esperienza è curata nei minimi dettagli.",
      "hero.ctaPrimary": "Richiedi disponibilità",
      "hero.ctaSecondary": "Scopri la flotta",
      "hero.badge1": "Disponibilità 24/7",
      "hero.badge2": "Consegna in tutta Italia 24/7",
      "hero.badge3": "Supporto dedicato",
      "fleet.eyebrow": "Flotta",
      "fleet.heading": "Supercar pronte a stupire",
      "fleet.text": "Ogni vettura viene sottoposta a controlli rigorosi e detailing professionale prima di ogni consegna. Contattaci per ottenere una proposta su misura per il tuo evento.",
      "fleet.cardCta": "Scheda dedicata",
      "fleet.pista.desc": "Un capolavoro di Maranello: leggera, reattiva e con una dinamica ineguagliabile.",
      "fleet.pista.aria": "Dettagli Ferrari 488 Pista",
      "fleet.huracan.desc": "Carattere feroce e trazione integrale per dominare ogni percorso con stile italiano.",
      "fleet.huracan.aria": "Dettagli Lamborghini Huracán Performante",
      "fleet.porsche.desc": "Comfort, tecnologia e accelerazione mozzafiato per viaggi premium senza compromessi.",
      "fleet.porsche.aria": "Dettagli Porsche 911 Turbo S",
      "fleet.mclaren.desc": "Leggerezza estrema e aerodinamica attiva per emozioni senza filtro, anche a cielo aperto.",
      "fleet.mclaren.aria": "Dettagli McLaren 720S Spider",
      "fleet.sf90.desc": "Ibrido plug-in ad alte prestazioni con modalità eDrive per accessi urbani senza rinunciare alla potenza.",
      "fleet.sf90.aria": "Dettagli Ferrari SF90 Stradale",
      "fleet.db11.desc": "Gran turismo britannica dal fascino senza tempo, perfetta per viaggi esclusivi e serate di gala.",
      "fleet.db11.aria": "Dettagli Aston Martin DB11 AMR",
      "fleet.bentley.desc": "Lusso artigianale e comfort assoluto con trazione integrale, ideale per trasferimenti di rappresentanza.",
      "fleet.bentley.aria": "Dettagli Bentley Continental GT",
      "fleet.r8.desc": "Trazione quattro e motore aspirato per un equilibrio perfetto tra grip e sound inconfondibile.",
      "fleet.r8.aria": "Dettagli Audi R8 Performance",
      "fleet.amg.desc": "Aerodinamica derivata dal GT3 e componenti racing per sessioni track-day dal carattere brutale.",
      "fleet.amg.aria": "Dettagli Mercedes-AMG GT Black Series",
      "services.eyebrow": "Servizi",
      "services.heading": "Soluzioni tailor-made per te",
      "services.text": "Dal noleggio breve termine a programmi esclusivi di custodia e trasporto, il nostro team garantisce discrezione e cura maniacale.",
      "services.card1.title": "Noleggio Supercar",
      "services.card1.text": "Esperienza di guida su misura per eventi, weekend o shooting con briefing dedicato e supporto personalizzato.",
      "services.card1.item1": "Consegna in hotel, aeroporto o location privata",
      "services.card1.item2": "Assicurazione premium e chilometraggio personalizzato",
      "services.card1.item3": "Driver professionisti disponibili su richiesta",
      "services.card2.title": "Garage Custodito",
      "services.card2.text": "Deposito climatizzato nel cuore di Verona con monitoraggio H24 e manutenzione programmata.",
      "services.card2.item1": "Spazi videosorvegliati e assicurati",
      "services.card2.item2": "Ricarica trickle e avviamento periodico",
      "services.card2.item3": "Servizio detailing e preparazione pre-uscita",
      "services.card3.title": "Supreme Transport",
      "services.card3.text": "Trasferimenti punto A - punto B in Italia ed Europa tramite bisarche chiuse con personale certificato.",
      "services.card3.item1": "Pickup programmato con tracking live",
      "services.card3.item2": "Copertura assicurativa totale",
      "services.card3.item3": "Report fotografico prima/dopo il viaggio",
      "testimonial.quote": "“Esperienza impeccabile da ogni punto di vista. Supercar consegnata in hotel come promesso, staff sempre reperibile e massima cura per ogni dettaglio.”",
      "testimonial.author": "Matteo R. — Cliente Supreme Experience",
      "location.eyebrow": "Dove Siamo",
      "location.heading": "Nel cuore di Verona, su appuntamento",
      "location.text": "Il nostro showroom boutique è in Via Flavio Gioia 9 (Borgo Roma). Riceviamo solo su appuntamento per garantirti privacy e un'accoglienza dedicata.",
      "contact.eyebrow": "Contattaci",
      "contact.heading": "Parla con il nostro team",
      "contact.text": "Richiedi disponibilità, pianifica un trasferimento Supreme Transport o prenota il garage custodito. Consegna in tutta Italia 24/7 con team reperibile in ogni momento.",
      "contact.whatsapp.title": "WhatsApp Team",
      "contact.whatsapp.text": "Rispondiamo in tempo reale per disponibilità vetture e supporto durante il noleggio.",
      "contact.whatsapp.cta": "Chatta ora",
      "contact.phone.title": "Telefono Diretto",
      "contact.phone.text": "Parla con il nostro team per definire briefing, consegna e servizi extra dedicati.",
      "contact.phone.cta": "Chiama ora",
      "contact.email.title": "Email dedicata",
      "contact.email.text": "Condividi programma eventi, richieste corporate e briefing dettagliati per offerte su misura.",
      "contact.email.cta": "Scrivi via email",
      "contact.instagram.title": "Instagram Stories",
      "contact.instagram.text": "Scopri anteprime della flotta, consegne speciali e gli eventi Supreme Experience.",
      "contact.instagram.cta": "Segui @supremecars.it",
      "footer.copy": "© 2024 Supreme Cars Verona. Tutti i diritti riservati.",
      "footer.home": "Home",
      "footer.fleet": "Supercar",
      "footer.services": "Servizi",
      "footer.contact": "Contatti",
      "footer.meta": "P.IVA 04512340234 · Via Flavio Gioia 9, Verona",
      "floatingWhatsapp": "Scrivici su WhatsApp",
      "car.back": "← Torna alla flotta",
      "car.eyebrow": "Supreme Fleet",
      "common.ctaWhatsapp": "Chatta via WhatsApp",
      "common.ctaTeam": "Contatta il team",
      "common.ctaRequest": "Richiedi disponibilità",
      "common.ctaEmail": "Scrivi al nostro team"
    },
    en: {
      "nav.fleet": "Supercars",
      "nav.services": "Services",
      "nav.location": "Where we are",
      "nav.contact": "Contact",
      "nav.toggle.open": "Open menu",
      "nav.toggle.close": "Close menu",
      "lang.toggle": "Change language",
      "hero.eyebrow": "Supercar rental in Verona",
      "hero.heading": "Extreme performance. Impeccable service.",
      "hero.text": "Supreme Cars Verona offers an exclusive fleet of supercars, a secured garage service and Supreme Transport transfers. Every experience is crafted down to the finest detail.",
      "hero.ctaPrimary": "Check availability",
      "hero.ctaSecondary": "Explore the fleet",
      "hero.badge1": "24/7 availability",
      "hero.badge2": "Nationwide delivery 24/7",
      "hero.badge3": "Dedicated support",
      "fleet.eyebrow": "Fleet",
      "fleet.heading": "Supercars that thrill",
      "fleet.text": "Each vehicle undergoes rigorous inspections and professional detailing before every delivery. Contact us for a bespoke proposal tailored to your event.",
      "fleet.cardCta": "View details",
      "fleet.pista.desc": "An icon from Maranello: lightweight, reactive and razor-sharp on every road.",
      "fleet.pista.aria": "View Ferrari 488 Pista details",
      "fleet.huracan.desc": "Aggressive design and all-wheel drive to dominate any route with Italian style.",
      "fleet.huracan.aria": "View Lamborghini Huracán Performante details",
      "fleet.porsche.desc": "Comfort, technology and breathtaking acceleration for premium journeys.",
      "fleet.porsche.aria": "View Porsche 911 Turbo S details",
      "fleet.mclaren.desc": "Extreme lightness and active aerodynamics for pure emotions, roof up or down.",
      "fleet.mclaren.aria": "View McLaren 720S Spider details",
      "fleet.sf90.desc": "High-performance plug-in hybrid with eDrive mode for city access without sacrificing power.",
      "fleet.sf90.aria": "View Ferrari SF90 Stradale details",
      "fleet.db11.desc": "Timeless British grand tourer, perfect for exclusive trips and gala evenings.",
      "fleet.db11.aria": "View Aston Martin DB11 AMR details",
      "fleet.bentley.desc": "Crafted luxury and total comfort with all-wheel drive, ideal for representation trips.",
      "fleet.bentley.aria": "View Bentley Continental GT details",
      "fleet.r8.desc": "quattro traction and a naturally aspirated engine for balanced grip and iconic sound.",
      "fleet.r8.aria": "View Audi R8 Performance details",
      "fleet.amg.desc": "GT3-inspired aerodynamics and racing components for brutal track-day sessions.",
      "fleet.amg.aria": "View Mercedes-AMG GT Black Series details",
      "services.eyebrow": "Services",
      "services.heading": "Tailor-made solutions for you",
      "services.text": "From short-term rental to exclusive storage and transport programs, our team guarantees discretion and meticulous care.",
      "services.card1.title": "Supercar rental",
      "services.card1.text": "Driving experiences tailored for events, weekends or shoots with dedicated briefing and personalised support.",
      "services.card1.item1": "Delivery to hotel, airport or private venue",
      "services.card1.item2": "Premium insurance and customised mileage",
      "services.card1.item3": "Professional drivers available on request",
      "services.card2.title": "Secured garage",
      "services.card2.text": "Climate-controlled storage in central Verona with 24/7 monitoring and scheduled maintenance.",
      "services.card2.item1": "Video-monitored and insured spaces",
      "services.card2.item2": "Trickle charging and periodic start-up",
      "services.card2.item3": "Detailing service and pre-departure prep",
      "services.card3.title": "Supreme Transport",
      "services.card3.text": "Point-to-point transfers in Italy and Europe on covered transporters with certified staff.",
      "services.card3.item1": "Scheduled pickup with live tracking",
      "services.card3.item2": "Full insurance coverage",
      "services.card3.item3": "Photo report before and after the journey",
      "testimonial.quote": "“Impeccable experience in every respect. Supercar delivered at the hotel as promised, staff always on call and meticulous attention to detail.”",
      "testimonial.author": "Matteo R. — Supreme Experience client",
      "location.eyebrow": "Where we are",
      "location.heading": "In the heart of Verona, by appointment",
      "location.text": "Our boutique showroom is at Via Flavio Gioia 9 (Borgo Roma, Verona). Visits are by appointment only to ensure privacy and exclusive attention.",
      "contact.eyebrow": "Contact us",
      "contact.heading": "Speak with our team",
      "contact.text": "Request availability, plan a Supreme Transport transfer or reserve our secured garage. Nationwide delivery 24/7 with a team on call at all times.",
      "contact.whatsapp.title": "WhatsApp Team",
      "contact.whatsapp.text": "Real-time answers for vehicle availability and on-road support.",
      "contact.whatsapp.cta": "Chat now",
      "contact.phone.title": "Direct phone",
      "contact.phone.text": "Speak with our team to arrange briefing, delivery and additional services.",
      "contact.phone.cta": "Call now",
      "contact.email.title": "Dedicated email",
      "contact.email.text": "Share event schedules, corporate requests and detailed briefings for a bespoke proposal.",
      "contact.email.cta": "Write us an email",
      "contact.instagram.title": "Instagram stories",
      "contact.instagram.text": "Discover fleet previews, special deliveries and Supreme Experience events.",
      "contact.instagram.cta": "Follow @supremecars.it",
      "footer.copy": "© 2024 Supreme Cars Verona. All rights reserved.",
      "footer.home": "Home",
      "footer.fleet": "Supercars",
      "footer.services": "Services",
      "footer.contact": "Contact",
      "footer.meta": "VAT 04512340234 · Via Flavio Gioia 9, Verona",
      "floatingWhatsapp": "Message us on WhatsApp",
      "car.back": "← Back to fleet",
      "car.eyebrow": "Supreme Fleet",
      "common.ctaWhatsapp": "Chat on WhatsApp",
      "common.ctaTeam": "Contact the team",
      "common.ctaRequest": "Check availability",
      "common.ctaEmail": "Email our team"
    },
    ru: {
      "nav.fleet": "Суперкары",
      "nav.services": "Услуги",
      "nav.location": "Где мы",
      "nav.contact": "Контакты",
      "nav.toggle.open": "Открыть меню",
      "nav.toggle.close": "Закрыть меню",
      "lang.toggle": "Сменить язык",
      "hero.eyebrow": "Аренда суперкаров в Вероне",
      "hero.heading": "Экстремальные эмоции. Безупречный сервис.",
      "hero.text": "Supreme Cars Verona предлагает эксклюзивный парк суперкаров, охраняемый гараж и транспорт Supreme Transport. Каждая деталь организована с максимальной тщательностью.",
      "hero.ctaPrimary": "Узнать доступность",
      "hero.ctaSecondary": "Посмотреть парк",
      "hero.badge1": "Работаем 24/7",
      "hero.badge2": "Доставка по всей Италии 24/7",
      "hero.badge3": "Персональная поддержка",
      "fleet.eyebrow": "Парк",
      "fleet.heading": "Суперкары, которые поражают",
      "fleet.text": "Каждый автомобиль проходит строгий контроль и профессиональный детайлинг перед каждой выдачей. Свяжитесь с нами, чтобы получить индивидуальное предложение для вашего события.",
      "fleet.cardCta": "Подробнее",
      "fleet.pista.desc": "Икона из Маранелло: легкая, отзывчивая и невероятно точная.",
      "fleet.pista.aria": "Подробнее о Ferrari 488 Pista",
      "fleet.huracan.desc": "Агрессивный дизайн и полный привод, чтобы покорять любые маршруты в итальянском стиле.",
      "fleet.huracan.aria": "Подробнее о Lamborghini Huracán Performante",
      "fleet.porsche.desc": "Комфорт, технологии и потрясающее ускорение для премиальных поездок.",
      "fleet.porsche.aria": "Подробнее о Porsche 911 Turbo S",
      "fleet.mclaren.desc": "Экстремальная легкость и активная аэродинамика для ярких эмоций с открытой крышей.",
      "fleet.mclaren.aria": "Подробнее о McLaren 720S Spider",
      "fleet.sf90.desc": "Гибридный суперкар с режимом eDrive для городских зон без потери мощности.",
      "fleet.sf90.aria": "Подробнее о Ferrari SF90 Stradale",
      "fleet.db11.desc": "Британское гран-туризмо вне времени, идеально для эксклюзивных поездок и гала-вечеров.",
      "fleet.db11.aria": "Подробнее об Aston Martin DB11 AMR",
      "fleet.bentley.desc": "Ручная роскошь и абсолютный комфорт с полным приводом — идеальный вариант для представительских поездок.",
      "fleet.bentley.aria": "Подробнее о Bentley Continental GT",
      "fleet.r8.desc": "Полный привод quattro и атмосферный V10 для идеального баланса сцепления и звучания.",
      "fleet.r8.aria": "Подробнее об Audi R8 Performance",
      "fleet.amg.desc": "Аэродинамика GT3 и гоночные компоненты для бескомпромиссных трек-дней.",
      "fleet.amg.aria": "Подробнее о Mercedes-AMG GT Black Series",
      "services.eyebrow": "Услуги",
      "services.heading": "Индивидуальные решения",
      "services.text": "От краткосрочного проката до эксклюзивного хранения и перевозки — наша команда гарантирует конфиденциальность и безупречный сервис.",
      "services.card1.title": "Прокат суперкаров",
      "services.card1.text": "Индивидуальные программы для мероприятий, выходных и съемок с персональным брифингом и поддержкой.",
      "services.card1.item1": "Доставка в отель, аэропорт или частную локацию",
      "services.card1.item2": "Премиальная страховка и индивидуальный пробег",
      "services.card1.item3": "Профессиональные водители по запросу",
      "services.card2.title": "Охраняемый гараж",
      "services.card2.text": "Климатизированное хранение в центре Вероны с круглосуточным мониторингом и плановым обслуживанием.",
      "services.card2.item1": "Охраняемые и застрахованные помещения",
      "services.card2.item2": "Поддержка зарядки и периодический прогрев",
      "services.card2.item3": "Детейлинг и подготовка перед выдачей",
      "services.card3.title": "Supreme Transport",
      "services.card3.text": "Перевозка автомобилей по Италии и Европе в закрытых автовозах с сертифицированной командой.",
      "services.card3.item1": "Забор по расписанию и онлайн-трекинг",
      "services.card3.item2": "Полное страховое покрытие",
      "services.card3.item3": "Фотоотчет до и после перевозки",
      "testimonial.quote": "«Безупречный опыт во всех отношениях. Суперкар доставили в отель точно в срок, персонал всегда на связи и внимателен к деталям.»",
      "testimonial.author": "Маттео Р. — клиент Supreme Experience",
      "location.eyebrow": "Где мы",
      "location.heading": "В самом центре Вероны, по записи",
      "location.text": "Наш бутик-шоурум расположен по адресу Via Flavio Gioia 9 (район Борго Рома, Верона). Мы принимаем только по предварительной записи, гарантируя приватность и эксклюзивный сервис.",
      "contact.eyebrow": "Свяжитесь с нами",
      "contact.heading": "Поговорите с нашей командой",
      "contact.text": "Запросите доступность, организуйте Supreme Transport или бронируйте охраняемый гараж. Доставка по всей Италии 24/7 и команда на связи круглосуточно.",
      "contact.whatsapp.title": "Команда WhatsApp",
      "contact.whatsapp.text": "Мгновенные ответы по доступности и сопровождению аренды.",
      "contact.whatsapp.cta": "Написать",
      "contact.phone.title": "Прямой телефон",
      "contact.phone.text": "Обсудим брифинг, доставку и дополнительные услуги.",
      "contact.phone.cta": "Позвонить",
      "contact.email.title": "Электронная почта",
      "contact.email.text": "Отправьте детали мероприятия, корпоративные запросы и брифы для персонального предложения.",
      "contact.email.cta": "Написать письмо",
      "contact.instagram.title": "Instagram Stories",
      "contact.instagram.text": "Смотрите превью автопарка, особые доставки и события Supreme Experience.",
      "contact.instagram.cta": "Подписаться @supremecars.it",
      "footer.copy": "© 2024 Supreme Cars Verona. Все права защищены.",
      "footer.home": "Главная",
      "footer.fleet": "Суперкары",
      "footer.services": "Услуги",
      "footer.contact": "Контакты",
      "footer.meta": "VAT 04512340234 · Via Flavio Gioia 9, Verona",
      "floatingWhatsapp": "Напишите нам в WhatsApp",
      "car.back": "← Назад к автопарку",
      "car.eyebrow": "Supreme Fleet",
      "common.ctaWhatsapp": "Чат в WhatsApp",
      "common.ctaTeam": "Связаться с командой",
      "common.ctaRequest": "Узнать доступность",
      "common.ctaEmail": "Написать нашей команде"
  },
  ar: {
      "nav.fleet": "السيارات الخارقة",
      "nav.services": "الخدمات",
      "nav.location": "موقعنا",
      "nav.contact": "تواصل معنا",
      "nav.toggle.open": "افتح القائمة",
      "nav.toggle.close": "أغلق القائمة",
      "lang.toggle": "تغيير اللغة",
      "hero.eyebrow": "تأجير سيارات خارقة في فيرونا",
      "hero.heading": "أداء متطرف. خدمة مثالية.",
      "hero.text": "Supreme Cars Verona توفر لك أسطولاً حصرياً من السيارات الخارقة وخدمة مرآب آمنة ونقل Supreme Transport. كل تجربة يتم إعدادها بعناية كاملة.",
      "hero.ctaPrimary": "اطلب التوفر",
      "hero.ctaSecondary": "استكشف الأسطول",
      "hero.badge1": "متاحون على مدار الساعة",
      "hero.badge2": "تسليم في جميع أنحاء إيطاليا على مدار الساعة",
      "hero.badge3": "دعم مخصص",
      "fleet.eyebrow": "الأسطول",
      "fleet.heading": "سيارات خارقة تبهر الأنظار",
      "fleet.text": "كل سيارة تخضع لفحوصات دقيقة وتفصيل احترافي قبل كل عملية تسليم. تواصل معنا للحصول على عرض مصمم حسب الحدث الخاص بك.",
      "fleet.cardCta": "عرض التفاصيل",
      "fleet.pista.desc": "تحفة من مارانيلو: خفيفة وسريعة الاستجابة وبدقة مذهلة.",
      "fleet.pista.aria": "تفاصيل Ferrari 488 Pista",
      "fleet.huracan.desc": "تصميم جريء ودفع رباعي للسيطرة على أي طريق بأسلوب إيطالي.",
      "fleet.huracan.aria": "تفاصيل Lamborghini Huracán Performante",
      "fleet.porsche.desc": "راحة وتقنية وتسارع مذهل لرحلات راقية.",
      "fleet.porsche.aria": "تفاصيل Porsche 911 Turbo S",
      "fleet.mclaren.desc": "وزن فائق الخفة وهواء ديناميكي نشط لمشاعر نقية مع سقف مفتوح.",
      "fleet.mclaren.aria": "تفاصيل McLaren 720S Spider",
      "fleet.sf90.desc": "هايبركار هجينة مع وضع eDrive لدخول المدن دون التنازل عن القوة.",
      "fleet.sf90.aria": "تفاصيل Ferrari SF90 Stradale",
      "fleet.db11.desc": "جراند تور بريطاني خالد، مثالي للرحلات الحصرية والأمسيات الراقية.",
      "fleet.db11.aria": "تفاصيل Aston Martin DB11 AMR",
      "fleet.bentley.desc": "فخامة مصنوعة يدوياً وراحة مطلقة مع دفع رباعي لرحلات التمثيل الرسمي.",
      "fleet.bentley.aria": "تفاصيل Bentley Continental GT",
      "fleet.r8.desc": "دفع quattro ومحرك V10 طبيعي للحصول على توازن رائع وصوت أيقوني.",
      "fleet.r8.aria": "تفاصيل Audi R8 Performance",
      "fleet.amg.desc": "ديناميكية هوائية مستوحاة من GT3 ومكونات سباق لأيام حلبة قوية.",
      "fleet.amg.aria": "تفاصيل Mercedes-AMG GT Black Series",
      "services.eyebrow": "الخدمات",
      "services.heading": "حلول مصممة خصيصاً",
      "services.text": "من التأجير قصير المدى إلى برامج الحفظ والنقل الحصرية، تضمن لك فرقنا الخصوصية والعناية الفائقة.",
      "services.card1.title": "تأجير السيارات الخارقة",
      "services.card1.text": "تجربة قيادة مخصصة للفعاليات وعطلات نهاية الأسبوع والتصوير مع إحاطة خاصة ودعم شخصي.",
      "services.card1.item1": "تسليم إلى الفندق أو المطار أو الموقع الخاص",
      "services.card1.item2": "تأمين مميز ومسافة قيادة مخصصة",
      "services.card1.item3": "سائقون محترفون عند الطلب",
      "services.card2.title": "مرآب آمن",
      "services.card2.text": "مستودع مكيّف في وسط فيرونا مع مراقبة على مدار الساعة وصيانة مجدولة.",
      "services.card2.item1": "مساحات مراقبة ومؤمنة",
      "services.card2.item2": "شحن بطارية وحركة دورية للمحرك",
      "services.card2.item3": "خدمة تلميع وتحضير قبل الخروج",
      "services.card3.title": "Supreme Transport",
      "services.card3.text": "نقل من نقطة إلى نقطة داخل إيطاليا وأوروبا عبر شاحنات مغلقة مع طاقم معتمد.",
      "services.card3.item1": "استلام مجدول مع تتبع مباشر",
      "services.card3.item2": "تغطية تأمينية شاملة",
      "services.card3.item3": "تقرير فوتوغرافي قبل وبعد الرحلة",
      "testimonial.quote": "\u201cتجربة مثالية من جميع الجوانب. تم تسليم السيارة الخارقة إلى الفندق كما وعدوا، الفريق متوفر دائماً والاهتمام بالتفاصيل مذهل.\u201d",
      "testimonial.author": "ماتيو ر. — عميل Supreme Experience",
      "location.eyebrow": "موقعنا",
      "location.heading": "في قلب فيرونا، بموعد مسبق",
      "location.text": "تقع صالة العرض البوتيكية في Via Flavio Gioia 9 (حي بورغو روما، فيرونا). نستقبل الزوار بالمواعيد فقط لضمان الخصوصية والخدمة المخصصة.",
      "contact.eyebrow": "تواصل معنا",
      "contact.heading": "تحدث مع فريقنا",
      "contact.text": "اطلب التوفر، خطط لنقل Supreme Transport أو احجز مرآبنا الآمن. تسليم في جميع أنحاء إيطاليا على مدار الساعة مع فريق جاهز دائماً.",
      "contact.whatsapp.title": "فريق WhatsApp",
      "contact.whatsapp.text": "ردود فورية حول توفر السيارات والدعم أثناء الإيجار.",
      "contact.whatsapp.cta": "ابدأ المحادثة",
      "contact.phone.title": "هاتف مباشر",
      "contact.phone.text": "تحدث مع فريقنا لتنظيم الإحاطة والتسليم والخدمات الإضافية.",
      "contact.phone.cta": "اتصل الآن",
      "contact.email.title": "بريد إلكتروني مخصص",
      "contact.email.text": "شارك برنامج الفعالية والطلبات المؤسسية والتفاصيل للحصول على عرض مخصص.",
      "contact.email.cta": "أرسل رسالة",
      "contact.instagram.title": "قصص إنستغرام",
      "contact.instagram.text": "اكتشف معاينات للأسطول وتسليمات خاصة وفعاليات Supreme Experience.",
      "contact.instagram.cta": "تابع @supremecars.it",
      "footer.copy": "© 2024 Supreme Cars Verona. جميع الحقوق محفوظة.",
      "footer.home": "الرئيسية",
      "footer.fleet": "السيارات الخارقة",
      "footer.services": "الخدمات",
      "footer.contact": "تواصل معنا",
      "footer.meta": "ضريبة القيمة المضافة 04512340234 · Via Flavio Gioia 9، فيرونا",
      "floatingWhatsapp": "راسلنا عبر واتساب",
      "car.back": "← العودة إلى الأسطول",
      "car.eyebrow": "Supreme Fleet",
      "common.ctaWhatsapp": "دردشة عبر واتساب",
      "common.ctaTeam": "تواصل مع الفريق",
      "common.ctaRequest": "اطلب التوفر",
      "common.ctaEmail": "أرسل رسالة إلى فريقنا"
    }
  };

  const testimonialsData = {
    it: [
      {
        quote: "“Esperienza impeccabile da ogni punto di vista. Supercar consegnata in hotel come promesso, staff sempre reperibile e massima cura per ogni dettaglio.”",
        author: "Matteo R. — Cliente Supreme Experience",
      },
      {
        quote: "“Servizio puntuale e raffinato: la Huracán è arrivata a Milano in tempo record per il nostro evento.”",
        author: "Giulia M. — Event Planner",
      },
      {
        quote: "“Garage custodito degno di una collezione: vetture sempre cariche, pulite e pronte all’uso.”",
        author: "Luca P. — Collezionista",
      },
    ],
    en: [
      {
        quote: "“Flawless from booking to drop-off. Their team stayed in touch 24/7 and handled every detail.”",
        author: "Matthew R. — Supreme Experience client",
      },
      {
        quote: "“The SF90 arrived detailed, charged and ready to shoot. Supreme Cars made our press day effortless.”",
        author: "Emma K. — Creative Director",
      },
      {
        quote: "“Storage service is outstanding: climate control, battery tenders and proactive status reports.”",
        author: "Victor L. — Collector",
      },
    ],
    ru: [
      {
        quote: "«Безупречный сервис: суперкар доставили к вилле точно в срок и в идеальном состоянии.»",
        author: "Алексей Н. — Клиент Supreme Experience",
      },
      {
        quote: "«Команда всегда на связи: WhatsApp помог решать вопросы во время трек-дня в Модене.»",
        author: "Ирина С. — Организатор мероприятий",
      },
      {
        quote: "«Гараж на высоте: поддерживают заряд, давление шин и присылают регулярные отчёты.»",
        author: "Максим К. — Коллекционер",
      },
    ],
    ar: [
      {
        quote: "”خدمة متكاملة من لحظة الحجز حتى استلام السيارة، الفريق متواجد دائماً للمتابعة.”",
        author: "سعيد م. — عميل Supreme Experience",
      },
      {
        quote: "”وصلت SF90 مفصلة وجاهزة للجلسة التصويرية قبل الموعد بساعتين.”",
        author: "ريم أ. — منسقة فعاليات",
      },
      {
        quote: "”خدمة المرآب ممتازة، مراقبة مستمرة وتحديثات دورية لحالة السيارة.”",
        author: "خالد ر. — جامع سيارات",
      },
    ],
  };

  const supportedLanguages = Object.keys(translations);
  const defaultLanguage = "it";

  const testimonialSection = document.querySelector("[data-testimonial-section]");
  const testimonialQuoteEl = testimonialSection?.querySelector("[data-testimonial-quote]");
  const testimonialAuthorEl = testimonialSection?.querySelector("[data-testimonial-author]");
  let testimonialTimer = null;
  let testimonialAnimationTimeout = null;

  const toggleHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  };

  toggleHeader();
  window.addEventListener("scroll", toggleHeader, { passive: true });

  // Highlight active section in navigation for better orientation.
  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isActive);
    });
  };

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0.1,
    }
  );

  observerTargets.forEach((section) => navObserver.observe(section));

  const setupTestimonial = (lang) => {
    if (!testimonialSection || !testimonialQuoteEl || !testimonialAuthorEl) {
      return;
    }

    const items = testimonialsData[lang] || testimonialsData[defaultLanguage];
    if (!items || items.length === 0) {
      return;
    }

    if (testimonialTimer) {
      window.clearInterval(testimonialTimer);
      testimonialTimer = null;
    }

    if (testimonialAnimationTimeout) {
      window.clearTimeout(testimonialAnimationTimeout);
      testimonialAnimationTimeout = null;
    }

    let index = 0;

    const updateContent = (item) => {
      testimonialQuoteEl.textContent = item.quote;
      testimonialAuthorEl.textContent = item.author;
    };

    const animateToCurrentItem = () => {
      testimonialSection.classList.add("is-fading");
      testimonialAnimationTimeout = window.setTimeout(() => {
        updateContent(items[index]);
        testimonialSection.classList.remove("is-fading");
        testimonialAnimationTimeout = null;
      }, 280);
    };

    updateContent(items[index]);
    testimonialSection.classList.remove("is-fading");

    if (items.length <= 1) {
      return;
    }

    testimonialTimer = window.setInterval(() => {
      index = (index + 1) % items.length;
      animateToCurrentItem();
    }, 6000);
  };

  const initMediaSliders = () => {
    document.querySelectorAll("[data-media-slider]").forEach((slider) => {
      if (slider.dataset.sliderInitialized === "true") return;

      const slides = Array.from(slider.querySelectorAll("[data-slide]"));
      if (!slides.length) return;

      if (!slides.some((slide) => slide.classList.contains("is-active"))) {
        slides[0].classList.add("is-active");
      }

      if (slides.length === 1) {
        slider.dataset.sliderInitialized = "true";
        return;
      }

      let index = slides.findIndex((slide) => slide.classList.contains("is-active"));
      if (index < 0) index = 0;
      const intervalMs = Number(slider.dataset.interval || 6500);

      const rotate = () => {
        slides[index].classList.remove("is-active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("is-active");
      };

      let timer = window.setInterval(rotate, intervalMs);

      slider.addEventListener("mouseenter", () => {
        window.clearInterval(timer);
      });

      slider.addEventListener("mouseleave", () => {
        timer = window.setInterval(rotate, intervalMs);
      });

      slider.dataset.sliderInitialized = "true";
    });
  };

  const initMediaLightbox = () => {
    if (!document.body.classList.contains("car-page")) return;

    const heroMedia = document.querySelector(".car-hero-media");
    if (!heroMedia) return;

    const ensureLightbox = () => {
      let lightbox = document.querySelector("[data-media-lightbox]");
      if (lightbox) return lightbox;
      lightbox = document.createElement("div");
      lightbox.className = "media-lightbox";
      lightbox.dataset.mediaLightbox = "true";
      lightbox.innerHTML = `
        <div class="media-lightbox__backdrop" data-lightbox-backdrop></div>
        <div class="media-lightbox__content" role="dialog" aria-modal="true" aria-label="Galleria multimediale">
          <button type="button" class="media-lightbox__close" data-lightbox-close aria-label="Chiudi galleria">&times;</button>
          <button type="button" class="media-lightbox__nav media-lightbox__nav--prev" data-lightbox-prev aria-label="Elemento precedente">‹</button>
          <div class="media-lightbox__stage" data-lightbox-stage></div>
          <button type="button" class="media-lightbox__nav media-lightbox__nav--next" data-lightbox-next aria-label="Elemento successivo">›</button>
        </div>
      `;
      document.body.appendChild(lightbox);
      return lightbox;
    };

    const lightbox = ensureLightbox();
    const stage = lightbox.querySelector("[data-lightbox-stage]");
    const closeBtn = lightbox.querySelector("[data-lightbox-close]");
    const prevBtn = lightbox.querySelector("[data-lightbox-prev]");
    const nextBtn = lightbox.querySelector("[data-lightbox-next]");
    const backdrop = lightbox.querySelector("[data-lightbox-backdrop]");
    const content = lightbox.querySelector(".media-lightbox__content");

    const state = {
      type: null,
      index: 0,
      slides: [],
    };

    const setAriaLabel = (label) => {
      if (content) {
        content.setAttribute("aria-label", label || "Galleria multimediale");
      }
    };

    const cleanupStage = () => {
      const video = stage.querySelector("video");
      if (video) {
        video.pause();
      }
      stage.innerHTML = "";
      stage.classList.remove("is-gallery", "is-video");
    };

    const updateNavVisibility = () => {
      const showNav = state.type === "gallery" && state.slides.length > 1;
      prevBtn.classList.toggle("is-hidden", !showNav);
      nextBtn.classList.toggle("is-hidden", !showNav);
    };

    const activateSlide = (targetIndex) => {
      if (state.type !== "gallery" || !state.slides.length) return;
      state.index = (targetIndex + state.slides.length) % state.slides.length;
      const slides = Array.from(stage.querySelectorAll(".media-lightbox__slide"));
      slides.forEach((slide, idx) => {
        slide.classList.toggle("is-active", idx === state.index);
      });
      setAriaLabel(state.slides[state.index]?.alt || "Galleria immagini veicolo");
    };

    const closeLightbox = () => {
      if (!lightbox.classList.contains("is-open")) return;
      cleanupStage();
      lightbox.classList.remove("is-open");
      document.body.classList.remove("lightbox-open");
      state.type = null;
      state.index = 0;
      state.slides = [];
      window.removeEventListener("keydown", handleKeydown);
    };

    const handleKeydown = (event) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (state.type === "gallery") {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          activateSlide(state.index + 1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          activateSlide(state.index - 1);
        }
      }
    };

    const openLightbox = () => {
      lightbox.classList.add("is-open");
      document.body.classList.add("lightbox-open");
      window.addEventListener("keydown", handleKeydown);
    };

    const openVideo = (videoEl) => {
      cleanupStage();
      state.type = "video";
      stage.classList.add("is-video");
      const clonedVideo = videoEl.cloneNode(true);
      clonedVideo.classList.add("media-lightbox__video");
      clonedVideo.controls = true;
      clonedVideo.autoplay = true;
      clonedVideo.muted = videoEl.muted;
      clonedVideo.loop = videoEl.loop;
      clonedVideo.playsInline = true;
      clonedVideo.setAttribute("playsinline", "");
      try {
        clonedVideo.currentTime = videoEl.currentTime;
      } catch (_) {
        /* no-op */
      }
      stage.appendChild(clonedVideo);
      const playPromise = clonedVideo.play?.();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
      setAriaLabel(videoEl.getAttribute("aria-label") || videoEl.getAttribute("alt") || "Video veicolo");
      updateNavVisibility();
      openLightbox();
    };

    const openGallery = (items, startIndex = 0) => {
      cleanupStage();
      state.type = "gallery";
      state.slides = items;
      state.index = startIndex >= 0 && startIndex < items.length ? startIndex : 0;
      stage.classList.add("is-gallery");
      items.forEach((item, idx) => {
        const figure = document.createElement("figure");
        figure.className = "media-lightbox__slide";
        if (idx === state.index) {
          figure.classList.add("is-active");
        }
        const img = document.createElement("img");
        img.src = item.src;
        if (item.alt) {
          img.alt = item.alt;
        }
        figure.appendChild(img);
        stage.appendChild(figure);
      });
      activateSlide(state.index);
      updateNavVisibility();
      openLightbox();
    };

    prevBtn.addEventListener("click", () => {
      activateSlide(state.index - 1);
    });

    nextBtn.addEventListener("click", () => {
      activateSlide(state.index + 1);
    });

    closeBtn.addEventListener("click", closeLightbox);
    backdrop.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    const sliderTargets = heroMedia.querySelectorAll(".car-media-slider");
    sliderTargets.forEach((slider) => {
      slider.classList.add("is-lightbox-target");
      slider.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const slideEls = Array.from(slider.querySelectorAll("[data-slide]"));
        if (!slideEls.length) return;
        const clickedSlide = event.target.closest("[data-slide]");
        let startIndex = slideEls.findIndex((slide) => slide.classList.contains("is-active"));
        if (clickedSlide) {
          const clickedIndex = slideEls.indexOf(clickedSlide);
          if (clickedIndex >= 0) {
            startIndex = clickedIndex;
          }
        }
        if (startIndex < 0) {
          startIndex = 0;
        }
        const items = slideEls
          .map((slide) => {
            const img = slide.querySelector("img");
            if (!img) return null;
            return {
              src: img.currentSrc || img.src,
              alt: img.alt || "",
            };
          })
          .filter(Boolean);
        if (!items.length) return;
        openGallery(items, startIndex);
      });
    });

    const videoTargets = heroMedia.querySelectorAll(".car-media-video");
    videoTargets.forEach((video) => {
      video.classList.add("is-lightbox-target");
      video.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        openVideo(video);
      });
    });
  };

  const closeNav = () => {
    if (!header) return;
    header.classList.remove("nav-open");
    document.body.classList.remove("nav-open");
    if (navLinksContainer) {
      if (mobileMedia.matches) {
        navLinksContainer.setAttribute("aria-hidden", "true");
      } else {
        navLinksContainer.removeAttribute("aria-hidden");
      }
    }
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", navToggleLabels.open);
    }
  };

  if (navToggle && navLinksContainer && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      document.body.classList.toggle("nav-open", isOpen);
      if (navLinksContainer) {
        navLinksContainer.setAttribute("aria-hidden", isOpen ? "false" : "true");
      }
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? navToggleLabels.close : navToggleLabels.open);
    });

    navLinksContainer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNav();
      }
    });

    const handleBreakpointChange = () => closeNav();
    if (typeof mobileMedia.addEventListener === "function") {
      mobileMedia.addEventListener("change", handleBreakpointChange);
    } else if (typeof mobileMedia.addListener === "function") {
      mobileMedia.addListener(handleBreakpointChange);
    }

    closeNav();
  }

  const applyTranslations = (lang) => {
    const activeTranslations = translations[lang] || translations[defaultLanguage];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", lang === "ar");

    navToggleLabels = {
      open:
        (activeTranslations["nav.toggle.open"] || translations[defaultLanguage]["nav.toggle.open"]) ?? "Apri menu",
      close:
        (activeTranslations["nav.toggle.close"] || translations[defaultLanguage]["nav.toggle.close"]) ?? "Chiudi menu",
    };

    if (navToggle) {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-label", isExpanded ? navToggleLabels.close : navToggleLabels.open);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const translation = activeTranslations[key];
      if (translation !== undefined) {
        if (el.dataset.i18nText !== "false") {
          if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
            el.placeholder = translation;
          } else {
            el.textContent = translation;
          }
        }

        if (el.dataset.i18nAttr) {
          el.dataset.i18nAttr.split(",").forEach((rawAttr) => {
            const attr = rawAttr.trim();
            if (!attr) return;
            if (attr === "placeholder" && (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) {
              el.placeholder = translation;
            } else {
              el.setAttribute(attr, translation);
            }
          });
        }
      }
    });

    document
      .querySelectorAll(".language-menu a[data-lang]")
      .forEach((link) => link.classList.toggle("active", link.dataset.lang === lang));

    localStorage.setItem("supremeCarsLang", lang);
    setupTestimonial(lang);
  };

  const resolveLanguage = () => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang && supportedLanguages.includes(urlLang)) {
      return urlLang;
    }
    const storedLang = localStorage.getItem("supremeCarsLang");
    if (storedLang && supportedLanguages.includes(storedLang)) {
      return storedLang;
    }
    return defaultLanguage;
  };

  const setLanguage = (lang) => {
    const targetLang = supportedLanguages.includes(lang) ? lang : defaultLanguage;
    applyTranslations(targetLang);
  };

  setLanguage(resolveLanguage());

  initMediaSliders();
  initMediaLightbox();

  const languageSwitcher = document.querySelector(".language-switcher");
  const languageToggle = document.querySelector(".language-toggle");

  if (languageSwitcher && languageToggle) {
    const menu = languageSwitcher.querySelector(".language-menu");

    const closeMenu = () => {
      languageSwitcher.classList.remove("open");
      languageToggle.setAttribute("aria-expanded", "false");
    };

    languageToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = languageSwitcher.classList.toggle("open");
      languageToggle.setAttribute("aria-expanded", String(isOpen));
      if (menu) {
        const firstLink = menu.querySelector("a");
        if (isOpen && firstLink) {
          firstLink.focus();
        }
      }
    });

    document.addEventListener("click", (event) => {
      if (!languageSwitcher.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  document.querySelectorAll(".language-menu a[data-lang]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const lang = link.dataset.lang;
      setLanguage(lang);
      if (languageSwitcher && languageToggle) {
        languageSwitcher.classList.remove("open");
        languageToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});
