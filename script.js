// Menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Dicionários de tradução
const translations = {
    pt: {
        // Menu
        home: "Início",
        services: "Serviços",
        information: "Informações",
        resources: "Recursos",
        contact: "Contato",
        
        // Hero section
        welcome: "Bem-vindo ao IMDH",
        heroText: "Centralizamos informações essenciais para imigrantes, refugiados e voluntários. Encontre cursos, eventos, documentos e muito mais em um só lugar.",
        exploreResources: "Explorar Recursos",
        
        // Seções
        ourServices: "Nossos Serviços",
        centralizedInfo: "Informações Centralizadas",
        platformsTools: "Plataformas e Ferramentas",
        contactInfo: "Contato e Informações",
        
        // Cards de serviços
        coursesEvents: "Cursos e Eventos",
        coursesEventsDesc: "Encontre oportunidades de capacitação, workshops e eventos culturais para imigrantes e refugiados.",
        course1: "Cursos de português",
        course2: "Capacitações profissionais",
        course3: "Eventos culturais",
        course4: "Oficinas temáticas",
        
        documentation: "Documentação e Regularização",
        documentationDesc: "Orientações sobre processos migratórios, documentação necessária e regularização no Brasil.",
        doc1: "Documentos necessários",
        doc2: "Processos de regularização",
        doc3: "Atualizações normativas",
        doc4: "Acesso a políticas públicas",
        
        volunteering: "Voluntariado e Apoio",
        volunteeringDesc: "Recursos e informações para voluntários e organizações que apoiam a população migrante.",
        vol1: "Manuais para voluntários",
        vol2: "Recursos de apoio",
        vol3: "Campanhas sociais",
        vol4: "Rede de proteção",
        
        // Informações centralizadas
        infoText: "Reunimos em um único lugar todas as informações essenciais para imigrantes, refugiados e voluntários, conforme solicitado no documento.",
        
        institutionalInfo: "Informações Institucionais",
        institutionalDesc: "Conheça o IMDH, nossas frentes de atuação e nossa missão no apoio à população migrante.",
        
        servicesOffered: "Serviços Oferecidos",
        servicesOfferedDesc: "Descrição clara dos serviços e orientações passo a passo sobre como acessá-los.",
        
        informativeMaterials: "Materiais Informativos",
        informativeMaterialsDesc: "Documentação, direitos, políticas públicas e temas relacionados à migração em diversos idiomas.",
        
        activitySchedule: "Agenda de Atividades",
        activityScheduleDesc: "Cursos, oficinas, capacitações e eventos atualizados regularmente.",
        
        multimediaContent: "Conteúdo Multimídia",
        multimediaContentDesc: "Vídeos, cartilhas, infográficos e outros materiais em diversos idiomas.",
        
        volunteerSpace: "Espaço para Voluntários",
        volunteerSpaceDesc: "Recursos, manuais e documentos de apoio específicos para voluntários.",
        
        // Plataformas
        platformsText: "Utilizamos e recomendamos estas plataformas para facilitar o acesso à informação e otimizar nossos processos.",
        
        helpPlatform: "Plataforma HELP - ACNUR",
        helpPlatformDesc: "Conteúdos fundamentais em diversas línguas para população migrante e refugiada.",
        accessPlatform: "Acessar Plataforma",
        
        whatsappChannels: "Canais no WhatsApp",
        whatsappChannelsDesc: "Divulgação de oportunidades em tempo real através de grupos e listas de transmissão.",
        joinGroups: "Participar dos Grupos",
        
        cloudStorage: "Armazenamento em Nuvem",
        cloudStorageDesc: "Formulários digitais, banco de dados e documentos acessíveis de qualquer lugar.",
        accessDocuments: "Acessar Documentos",
        
        // Alerta
        highlight: "Destaque:",
        alertText: "Valorizamos ferramentas que funcionem bem em celulares, considerando que a maioria do público utiliza WhatsApp e dispositivos móveis como principal meio de comunicação.",
        
        // Contato
        contactUs: "Entre em Contato",
        contactText: "Para mais informações sobre nossos serviços, cursos, eventos ou para se voluntariar:",
        email: "E-mail",
        phone: "Telefone",
        address: "Endereço",
        addressText: "Brasília - DF, Brasil",
        
        // Footer
        aboutText: "Instituto Migrações e Direitos Humanos. Trabalhamos para facilitar a integração de imigrantes e refugiados no Brasil.",
        quickLinks: "Links Rápidos",
        usefulResources: "Recursos Úteis",
        connect: "Conecte-se",
        copyright: "© 2023 IMDH - Instituto Migrações e Direitos Humanos. Todos os direitos reservados.",
        developed: "Desenvolvido com base nas necessidades expressas no documento de Bruno Tomazzini.",
        
        // Botão WhatsApp
        whatsappMessage: "Olá, gostaria de mais informações sobre os serviços do IMDH"
    },
    
    es: {
        // Menu
        home: "Inicio",
        services: "Servicios",
        information: "Información",
        resources: "Recursos",
        contact: "Contacto",
        
        // Hero section
        welcome: "Bienvenido al IMDH",
        heroText: "Centralizamos información esencial para inmigrantes, refugiados y voluntarios. Encuentre cursos, eventos, documentos y más en un solo lugar.",
        exploreResources: "Explorar Recursos",
        
        // Secciones
        ourServices: "Nuestros Servicios",
        centralizedInfo: "Información Centralizada",
        platformsTools: "Plataformas y Herramientas",
        contactInfo: "Contacto e Información",
        
        // Cards de servicios
        coursesEvents: "Cursos y Eventos",
        coursesEventsDesc: "Encuentre oportunidades de capacitación, talleres y eventos culturales para inmigrantes y refugiados.",
        course1: "Cursos de portugués",
        course2: "Capacitaciones profesionales",
        course3: "Eventos culturales",
        course4: "Talleres temáticos",
        
        documentation: "Documentación y Regularización",
        documentationDesc: "Orientación sobre procesos migratorios, documentación necesaria y regularización en Brasil.",
        doc1: "Documentos necesarios",
        doc2: "Procesos de regularización",
        doc3: "Actualizaciones normativas",
        doc4: "Acceso a políticas públicas",
        
        volunteering: "Voluntariado y Apoyo",
        volunteeringDesc: "Recursos e información para voluntarios y organizaciones que apoyan a la población migrante.",
        vol1: "Manuales para voluntarios",
        vol2: "Recursos de apoyo",
        vol3: "Campañas sociales",
        vol4: "Red de protección",
        
        // Información centralizada
        infoText: "Reunimos en un solo lugar toda la información esencial para inmigrantes, refugiados y voluntarios, según lo solicitado en el documento.",
        
        institutionalInfo: "Información Institucional",
        institutionalDesc: "Conozca el IMDH, nuestros frentes de actuación y nuestra misión en el apoyo a la población migrante.",
        
        servicesOffered: "Servicios Ofrecidos",
        servicesOfferedDesc: "Descripción clara de los servicios y orientaciones paso a paso sobre cómo acceder a ellos.",
        
        informativeMaterials: "Materiales Informativos",
        informativeMaterialsDesc: "Documentación, derechos, políticas públicas y temas relacionados con la migración en varios idiomas.",
        
        activitySchedule: "Agenda de Actividades",
        activityScheduleDesc: "Cursos, talleres, capacitaciones y eventos actualizados regularmente.",
        
        multimediaContent: "Contenido Multimedia",
        multimediaContentDesc: "Videos, folletos, infografías y otros materiales en varios idiomas.",
        
        volunteerSpace: "Espacio para Voluntarios",
        volunteerSpaceDesc: "Recursos, manuales y documentos de apoyo específicos para voluntarios.",
        
        // Plataformas
        platformsText: "Utilizamos y recomendamos estas plataformas para facilitar el acceso a la información y optimizar nuestros procesos.",
        
        helpPlatform: "Plataforma HELP - ACNUR",
        helpPlatformDesc: "Contenidos fundamentales en varios idiomas para población migrante y refugiada.",
        accessPlatform: "Acceder a la Plataforma",
        
        whatsappChannels: "Canales en WhatsApp",
        whatsappChannelsDesc: "Divulgación de oportunidades en tiempo real a través de grupos y listas de transmisión.",
        joinGroups: "Participar en los Grupos",
        
        cloudStorage: "Almacenamiento en la Nube",
        cloudStorageDesc: "Formularios digitales, base de datos y documentos accesibles desde cualquier lugar.",
        accessDocuments: "Acceder a Documentos",
        
        // Alerta
        highlight: "Destacado:",
        alertText: "Valoramos herramientas que funcionen bien en celulares, considerando que la mayoría del público utiliza WhatsApp y dispositivos móviles como principal medio de comunicación.",
        
        // Contacto
        contactUs: "Contáctenos",
        contactText: "Para más información sobre nuestros servicios, cursos, eventos o para ser voluntario:",
        email: "Correo electrónico",
        phone: "Teléfono",
        address: "Dirección",
        addressText: "Brasilia - DF, Brasil",
        
        // Footer
        aboutText: "Instituto Migraciones y Derechos Humanos. Trabajamos para facilitar la integración de inmigrantes y refugiados en Brasil.",
        quickLinks: "Enlaces Rápidos",
        usefulResources: "Recursos Útiles",
        connect: "Conéctese",
        copyright: "© 2023 IMDH - Instituto Migraciones y Derechos Humanos. Todos los derechos reservados.",
        developed: "Desarrollado con base en las necesidades expresadas en el documento de Bruno Tomazzini.",
        
        // Botón WhatsApp
        whatsappMessage: "Hola, me gustaría más información sobre los servicios del IMDH"
    },
    
    en: {
        // Menu
        home: "Home",
        services: "Services",
        information: "Information",
        resources: "Resources",
        contact: "Contact",
        
        // Hero section
        welcome: "Welcome to IMDH",
        heroText: "We centralize essential information for immigrants, refugees and volunteers. Find courses, events, documents and more in one place.",
        exploreResources: "Explore Resources",
        
        // Sections
        ourServices: "Our Services",
        centralizedInfo: "Centralized Information",
        platformsTools: "Platforms and Tools",
        contactInfo: "Contact and Information",
        
        // Service cards
        coursesEvents: "Courses and Events",
        coursesEventsDesc: "Find training opportunities, workshops and cultural events for immigrants and refugees.",
        course1: "Portuguese courses",
        course2: "Professional training",
        course3: "Cultural events",
        course4: "Thematic workshops",
        
        documentation: "Documentation and Regularization",
        documentationDesc: "Guidance on migration processes, required documentation and regularization in Brazil.",
        doc1: "Required documents",
        doc2: "Regularization processes",
        doc3: "Regulatory updates",
        doc4: "Access to public policies",
        
        volunteering: "Volunteering and Support",
        volunteeringDesc: "Resources and information for volunteers and organizations supporting the migrant population.",
        vol1: "Manuals for volunteers",
        vol2: "Support resources",
        vol3: "Social campaigns",
        vol4: "Protection network",
        
        // Centralized information
        infoText: "We gather in one place all essential information for immigrants, refugees and volunteers, as requested in the document.",
        
        institutionalInfo: "Institutional Information",
        institutionalDesc: "Learn about IMDH, our areas of operation and our mission in supporting the migrant population.",
        
        servicesOffered: "Services Offered",
        servicesOfferedDesc: "Clear description of services and step-by-step guidance on how to access them.",
        
        informativeMaterials: "Informative Materials",
        informativeMaterialsDesc: "Documentation, rights, public policies and migration-related topics in various languages.",
        
        activitySchedule: "Activity Schedule",
        activityScheduleDesc: "Courses, workshops, training and events updated regularly.",
        
        multimediaContent: "Multimedia Content",
        multimediaContentDesc: "Videos, booklets, infographics and other materials in various languages.",
        
        volunteerSpace: "Volunteer Space",
        volunteerSpaceDesc: "Resources, manuals and support documents specifically for volunteers.",
        
        // Platforms
        platformsText: "We use and recommend these platforms to facilitate access to information and optimize our processes.",
        
        helpPlatform: "HELP Platform - UNHCR",
        helpPlatformDesc: "Essential content in various languages for migrant and refugee population.",
        accessPlatform: "Access Platform",
        
        whatsappChannels: "WhatsApp Channels",
        whatsappChannelsDesc: "Real-time dissemination of opportunities through groups and broadcast lists.",
        joinGroups: "Join Groups",
        
        cloudStorage: "Cloud Storage",
        cloudStorageDesc: "Digital forms, database and documents accessible from anywhere.",
        accessDocuments: "Access Documents",
        
        // Alert
        highlight: "Highlight:",
        alertText: "We value tools that work well on mobile phones, considering that most of the public uses WhatsApp and mobile devices as their main means of communication.",
        
        // Contact
        contactUs: "Contact Us",
        contactText: "For more information about our services, courses, events or to volunteer:",
        email: "Email",
        phone: "Phone",
        address: "Address",
        addressText: "Brasília - DF, Brazil",
        
        // Footer
        aboutText: "Institute of Migration and Human Rights. We work to facilitate the integration of immigrants and refugees in Brazil.",
        quickLinks: "Quick Links",
        usefulResources: "Useful Resources",
        connect: "Connect",
        copyright: "© 2023 IMDH - Institute of Migration and Human Rights. All rights reserved.",
        developed: "Developed based on the needs expressed in Bruno Tomazzini's document.",
        
        // WhatsApp button
        whatsappMessage: "Hello, I would like more information about IMDH services"
    },
    
    fr: {
        // Menu
        home: "Accueil",
        services: "Services",
        information: "Informations",
        resources: "Ressources",
        contact: "Contact",
        
        // Hero section
        welcome: "Bienvenue à l'IMDH",
        heroText: "Nous centralisons les informations essentielles pour les immigrants, les réfugiés et les volontaires. Trouvez des cours, des événements, des documents et plus encore en un seul endroit.",
        exploreResources: "Explorer les Ressources",
        
        // Sections
        ourServices: "Nos Services",
        centralizedInfo: "Informations Centralisées",
        platformsTools: "Plateformes et Outils",
        contactInfo: "Contact et Informations",
        
        // Cartes de services
        coursesEvents: "Cours et Événements",
        coursesEventsDesc: "Trouvez des opportunités de formation, des ateliers et des événements culturels pour les immigrants et les réfugiés.",
        course1: "Cours de portugais",
        course2: "Formations professionnelles",
        course3: "Événements culturels",
        course4: "Ateliers thématiques",
        
        documentation: "Documentation et Régularisation",
        documentationDesc: "Conseils sur les processus migratoires, la documentation requise et la régularisation au Brésil.",
        doc1: "Documents nécessaires",
        doc2: "Processus de régularisation",
        doc3: "Mises à jour réglementaires",
        doc4: "Accès aux politiques publiques",
        
        volunteering: "Bénévolat et Soutien",
        volunteeringDesc: "Ressources et informations pour les bénévoles et les organisations qui soutiennent la population migrante.",
        vol1: "Manuels pour bénévoles",
        vol2: "Ressources de soutien",
        vol3: "Campagnes sociales",
        vol4: "Réseau de protection",
        
        // Informations centralisées
        infoText: "Nous rassemblons en un seul endroit toutes les informations essentielles pour les immigrants, les réfugiés et les volontaires, comme demandé dans le document.",
        
        institutionalInfo: "Informations Institutionnelles",
        institutionalDesc: "Découvrez l'IMDH, nos domaines d'action et notre mission de soutien à la population migrante.",
        
        servicesOffered: "Services Offerts",
        servicesOfferedDesc: "Description claire des services et instructions étape par étape pour y accéder.",
        
        informativeMaterials: "Matériels Informatifs",
        informativeMaterialsDesc: "Documentation, droits, politiques publiques et sujets liés à la migration en plusieurs langues.",
        
        activitySchedule: "Calendrier des Activités",
        activityScheduleDesc: "Cours, ateliers, formations et événements mis à jour régulièrement.",
        
        multimediaContent: "Contenu Multimédia",
        multimediaContentDesc: "Vidéos, brochures, infographies et autres matériels en plusieurs langues.",
        
        volunteerSpace: "Espace Bénévoles",
        volunteerSpaceDesc: "Ressources, manuels et documents de soutien spécifiques aux bénévoles.",
        
        // Plateformes
        platformsText: "Nous utilisons et recommandons ces plateformes pour faciliter l'accès à l'information et optimiser nos processus.",
        
        helpPlatform: "Plateforme HELP - HCR",
        helpPlatformDesc: "Contenu essentiel en plusieurs langues pour la population migrante et réfugiée.",
        accessPlatform: "Accéder à la Plateforme",
        
        whatsappChannels: "Chaînes WhatsApp",
        whatsappChannelsDesc: "Diffusion d'opportunités en temps réel via des groupes et des listes de diffusion.",
        joinGroups: "Rejoindre les Groupes",
        
        cloudStorage: "Stockage en Cloud",
        cloudStorageDesc: "Formulaires numériques, base de données et documents accessibles de n'importe où.",
        accessDocuments: "Accéder aux Documents",
        
        // Alerte
        highlight: "Point Fort:",
        alertText: "Nous valorisons les outils qui fonctionnent bien sur les téléphones mobiles, étant donné que la plupart du public utilise WhatsApp et les appareils mobiles comme principal moyen de communication.",
        
        // Contact
        contactUs: "Contactez-nous",
        contactText: "Pour plus d'informations sur nos services, cours, événements ou pour devenir bénévole:",
        email: "E-mail",
        phone: "Téléphone",
        address: "Adresse",
        addressText: "Brasilia - DF, Brésil",
        
        // Footer
        aboutText: "Institut des Migrations et des Droits Humains. Nous travaillons à faciliter l'intégration des immigrants et des réfugiés au Brésil.",
        quickLinks: "Liens Rapides",
        usefulResources: "Ressources Utiles",
        connect: "Connectez-vous",
        copyright: "© 2023 IMDH - Institut des Migrations et des Droits Humains. Tous droits réservés.",
        developed: "Développé sur la base des besoins exprimés dans le document de Bruno Tomazzini.",
        
        // Bouton WhatsApp
        whatsappMessage: "Bonjour, je voudrais plus d'informations sur les services de l'IMDH"
    },
    
    ar: {
        // Menu
        home: "الرئيسية",
        services: "الخدمات",
        information: "المعلومات",
        resources: "الموارد",
        contact: "اتصل بنا",
        
        // Hero section
        welcome: "مرحبًا بكم في IMDH",
        heroText: "نحن نركز المعلومات الأساسية للمهاجرين واللاجئين والمتطوعين. ابحث عن الدورات والفعاليات والمستندات والمزيد في مكان واحد.",
        exploreResources: "استكشاف الموارد",
        
        // Sections
        ourServices: "خدماتنا",
        centralizedInfo: "معلومات مركزية",
        platformsTools: "المنصات والأدوات",
        contactInfo: "معلومات الاتصال",
        
        // Service cards
        coursesEvents: "الدورات والفعاليات",
        coursesEventsDesc: "ابحث عن فرص التدريب وورش العمل والفعاليات الثقافية للمهاجرين واللاجئين.",
        course1: "دورات اللغة البرتغالية",
        course2: "تدريبات مهنية",
        course3: "فعاليات ثقافية",
        course4: "ورش عمل موضوعية",
        
        documentation: "التوثيق والتقنين",
        documentationDesc: "توجيهات حول عمليات الهجرة والمستندات المطلوبة والتقنين في البرازيل.",
        doc1: "المستندات المطلوبة",
        doc2: "عمليات التقنين",
        doc3: "التحديثات التنظيمية",
        doc4: "الوصول إلى السياسات العامة",
        
        volunteering: "التطوع والدعم",
        volunteeringDesc: "الموارد والمعلومات للمتطوعين والمنظمات التي تدعم السكان المهاجرين.",
        vol1: "كتيبات للمتطوعين",
        vol2: "موارد الدعم",
        vol3: "الحملات الاجتماعية",
        vol4: "شبكة الحماية",
        
        // Centralized information
        infoText: "نجمع في مكان واحد جميع المعلومات الأساسية للمهاجرين واللاجئين والمتطوعين، كما هو مطلوب في الوثيقة.",
        
        institutionalInfo: "معلومات مؤسسية",
        institutionalDesc: "تعرف على IMDH ومجالات عملنا ومهمتنا في دعم السكان المهاجرين.",
        
        servicesOffered: "الخدمات المقدمة",
        servicesOfferedDesc: "وصف واضح للخدمات وتوجيهات خطوة بخطوة حول كيفية الوصول إليها.",
        
        informativeMaterials: "مواد إعلامية",
        informativeMaterialsDesc: "الوثائق والحقوق والسياسات العامة والمواضيع المتعلقة بالهجرة بلغات مختلفة.",
        
        activitySchedule: "جدول الأنشطة",
        activityScheduleDesc: "الدورات وورش العمل والتدريبات والفعاليات المحدثة بانتظام.",
        
        multimediaContent: "محتويات الوسائط المتعددة",
        multimediaContentDesc: "مقاطع فيديو ونشرات ورسوم بيانية ومواد أخرى بلغات مختلفة.",
        
        volunteerSpace: "مساحة للمتطوعين",
        volunteerSpaceDesc: "الموارد والكتيبات ومستندات الدعم المخصصة للمتطوعين.",
        
        // Platforms
        platformsText: "نستخدم ونوصي بهذه المنصات لتسهيل الوصول إلى المعلومات وتحسين عملياتنا.",
        
        helpPlatform: "منصة HELP - المفوضية السامية للأمم المتحدة لشؤون اللاجئين",
        helpPlatformDesc: "محتويات أساسية بلغات مختلفة للسكان المهاجرين واللاجئين.",
        accessPlatform: "الوصول إلى المنصة",
        
        whatsappChannels: "قنوات الواتساب",
        whatsappChannelsDesc: "نشر الفرص في الوقت الفعلي من خلال المجموعات وقوائم البث.",
        joinGroups: "انضم إلى المجموعات",
        
        cloudStorage: "التخزين السحابي",
        cloudStorageDesc: "نماذج رقمية وقاعدة بيانات ومستندات يمكن الوصول إليها من أي مكان.",
        accessDocuments: "الوصول إلى المستندات",
        
        // Alert
        highlight: "تسليط الضوء:",
        alertText: "نقدر الأدوات التي تعمل بشكل جيد على الهواتف المحمولة، مع الأخذ في الاعتبار أن معظم الجمهور يستخدم الواتساب والأجهزة المحمولة كوسيلة رئيسية للتواصل.",
        
        // Contact
        contactUs: "اتصل بنا",
        contactText: "لمزيد من المعلومات حول خدماتنا ودوراتنا وفعالياتنا أو للتطوع:",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        address: "العنوان",
        addressText: "برازيليا - دي أف، البرازيل",
        
        // Footer
        aboutText: "معهد الهجرة وحقوق الإنسان. نعمل على تسهيل اندماج المهاجرين واللاجئين في البرازيل.",
        quickLinks: "روابط سريعة",
        usefulResources: "موارد مفيدة",
        connect: "اتصل بنا",
        copyright: "© 2023 IMDH - معهد الهجرة وحقوق الإنسان. جميع الحقوق محفوظة.",
        developed: "تم التطوير بناءً على الاحتياجات المعبر عنها في وثيقة برونو تومازيني.",
        
        // WhatsApp button
        whatsappMessage: "مرحبًا، أود الحصول على مزيد من المعلومات حول خدمات IMDH"
    }
};

// Função para aplicar tradução
function applyTranslation(lang) {
    const t = translations[lang];
    
    if (!t) return;
    
    // Atualizar navegação
    document.querySelectorAll('nav a')[0].textContent = t.home;
    document.querySelectorAll('nav a')[1].textContent = t.services;
    document.querySelectorAll('nav a')[2].textContent = t.information;
    document.querySelectorAll('nav a')[3].textContent = t.resources;
    document.querySelectorAll('nav a')[4].textContent = t.contact;
    
    // Atualizar seção hero
    document.querySelector('.hero h2').textContent = t.welcome;
    document.querySelector('.hero p').textContent = t.heroText;
    document.querySelector('.cta-button').textContent = t.exploreResources;
    
    // Atualizar títulos das seções
    document.querySelectorAll('.section-title')[0].textContent = t.ourServices;
    document.querySelectorAll('.section-title')[1].textContent = t.centralizedInfo;
    document.querySelectorAll('.section-title')[2].textContent = t.platformsTools;
    document.querySelectorAll('.section-title')[3].textContent = t.contactInfo;
    
    // Atualizar cards de serviços
    const serviceCards = document.querySelectorAll('.card');
    serviceCards[0].querySelector('.card-header h3').textContent = t.coursesEvents;
    serviceCards[0].querySelector('.card-body p').textContent = t.coursesEventsDesc;
    const courseItems = serviceCards[0].querySelectorAll('li');
    courseItems[0].textContent = t.course1;
    courseItems[1].textContent = t.course2;
    courseItems[2].textContent = t.course3;
    courseItems[3].textContent = t.course4;
    
    serviceCards[1].querySelector('.card-header h3').textContent = t.documentation;
    serviceCards[1].querySelector('.card-body p').textContent = t.documentationDesc;
    const docItems = serviceCards[1].querySelectorAll('li');
    docItems[0].textContent = t.doc1;
    docItems[1].textContent = t.doc2;
    docItems[2].textContent = t.doc3;
    docItems[3].textContent = t.doc4;
    
    serviceCards[2].querySelector('.card-header h3').textContent = t.volunteering;
    serviceCards[2].querySelector('.card-body p').textContent = t.volunteeringDesc;
    const volItems = serviceCards[2].querySelectorAll('li');
    volItems[0].textContent = t.vol1;
    volItems[1].textContent = t.vol2;
    volItems[2].textContent = t.vol3;
    volItems[3].textContent = t.vol4;
    
    // Atualizar texto de informações centralizadas
    document.querySelector('#information p').textContent = t.infoText;
    
    // Atualizar itens de recursos
    const resourceItems = document.querySelectorAll('.resource-item');
    resourceItems[0].querySelector('h3').textContent = t.institutionalInfo;
    resourceItems[0].querySelector('p').textContent = t.institutionalDesc;
    
    resourceItems[1].querySelector('h3').textContent = t.servicesOffered;
    resourceItems[1].querySelector('p').textContent = t.servicesOfferedDesc;
    
    resourceItems[2].querySelector('h3').textContent = t.informativeMaterials;
    resourceItems[2].querySelector('p').textContent = t.informativeMaterialsDesc;
    
    resourceItems[3].querySelector('h3').textContent = t.activitySchedule;
    resourceItems[3].querySelector('p').textContent = t.activityScheduleDesc;
    
    resourceItems[4].querySelector('h3').textContent = t.multimediaContent;
    resourceItems[4].querySelector('p').textContent = t.multimediaContentDesc;
    
    resourceItems[5].querySelector('h3').textContent = t.volunteerSpace;
    resourceItems[5].querySelector('p').textContent = t.volunteerSpaceDesc;
    
    // Atualizar texto de plataformas
    document.querySelector('#resources p').textContent = t.platformsText;
    
    // Atualizar cards de plataformas
    const platformCards = document.querySelectorAll('.platform-card');
    platformCards[0].querySelector('h3').textContent = t.helpPlatform;
    platformCards[0].querySelector('p').textContent = t.helpPlatformDesc;
    platformCards[0].querySelector('a').innerHTML = `${t.accessPlatform} <i class="fas fa-external-link-alt"></i>`;
    
    platformCards[1].querySelector('h3').textContent = t.whatsappChannels;
    platformCards[1].querySelector('p').textContent = t.whatsappChannelsDesc;
    platformCards[1].querySelector('a').textContent = t.joinGroups;
    
    platformCards[2].querySelector('h3').textContent = t.cloudStorage;
    platformCards[2].querySelector('p').textContent = t.cloudStorageDesc;
    platformCards[2].querySelector('a').textContent = t.accessDocuments;
    
    // Atualizar alerta
    const alertElement = document.querySelector('.alert p');
    alertElement.innerHTML = `<strong>${t.highlight}</strong> ${t.alertText}`;
    
    /* Atualizar seção de contato
    //const contactSection = document.querySelector('#contact > .container > div');
    //contactSection.querySelector('h3').textContent = t.contactUs;
    //contactSection.querySelector('p').textContent = t.contactText;
    
    //const contactItems = contactSection.querySelectorAll('h4');
    //contactItems[0].innerHTML = `<i class="fas fa-envelope"></i> ${t.email}`;
    contactItems[1].innerHTML = `<i class="fas fa-phone"></i> ${t.phone}`;
    contactItems[2].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.address}`;
    
    contactSection.querySelectorAll('p')[2].textContent = t.addressText;
    
    // Atualizar footer
    const footerColumns = document.querySelectorAll('.footer-column');
    footerColumns[0].querySelector('p').textContent = t.aboutText;
    footerColumns[1].querySelector('h3').textContent = t.quickLinks;
    footerColumns[2].querySelector('h3').textContent = t.usefulResources;
    footerColumns[3].querySelector('h3').textContent = t.connect;/*/

    
    // Atualizar link do WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-float');
    const encodedMessage = encodeURIComponent(t.whatsappMessage);
    whatsappButton.href = `https://wa.me/5511999999999?text=${encodedMessage}`;
    
    // Salvar preferência de idioma no localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Seleção de idioma
const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    applyTranslation(selectedLanguage);
});

// Verificar idioma salvo ou preferência do navegador
function detectLanguage() {
    // Verificar se há idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        languageSelect.value = savedLanguage;
        applyTranslation(savedLanguage);
        return;
    }
    
    // Detectar idioma do navegador
    const browserLang = navigator.language || navigator.userLanguage;
    let langCode = browserLang.split('-')[0];
    
    // Verificar se temos tradução para o idioma do navegador
    if (translations[langCode]) {
        languageSelect.value = langCode;
        applyTranslation(langCode);
    } else {
        // Usar português como padrão
        languageSelect.value = 'pt';
        applyTranslation('pt');
    }
}

// Inicializar com idioma detectado
document.addEventListener('DOMContentLoaded', function() {
    detectLanguage();
});

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Link do WhatsApp (para grupos)
document.getElementById('whatsappLink').addEventListener('click', function(e) {
    e.preventDefault();
    const currentLang = languageSelect.value;
    const t = translations[currentLang];
    
    if (t) {
        alert(`${t.whatsappChannels}: ${t.whatsappChannelsDesc}`);
    } else {
        alert("Em uma versão completa, este link direcionaria para grupos de WhatsApp ou lista de transmissão para divulgação de oportunidades em tempo real, conforme sugerido no documento.");
    }
});

// Ativar link ativo na navegação baseado na rolagem
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Carregar conteúdo dinâmico (exemplo simulado)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site IMDH carregado com sucesso!');
    
    // Exemplo de carregamento dinâmico de eventos
    const eventos = [
        {titulo: "Curso de Português Básico", data: "15/10/2023", local: "Online"},
        {titulo: "Workshop de Documentação", data: "20/10/2023", local: "Sede IMDH"},
        {titulo: "Evento Cultural: Diversidade", data: "25/10/2023", local: "Centro Cultural"}
    ];
    
   
});