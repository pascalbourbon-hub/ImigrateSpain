export interface Service {
  slug: string;
  nameEN: string;
  nameES: string;
  descriptionEN: string;
  descriptionES: string;
  longDescriptionEN: string;
  longDescriptionES: string;
  price: number;
  duration: string;
  featuresEN: string[];
  featuresES: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "nie-certificate",
    nameEN: "NIE Certificate",
    nameES: "Certificado NIE",
    descriptionEN: "Get your Número de Identificación de Extranjero — the essential ID number for living, working, and conducting any legal activity in Spain.",
    descriptionES: "Obtén tu Número de Identificación de Extranjero — el número de identificación esencial para vivir, trabajar y realizar cualquier actividad legal en España.",
    longDescriptionEN: `The NIE (Número de Identificación de Extranjero) is Spain's foreign identification number — a mandatory requirement for virtually every legal and financial activity in the country. Whether you're buying property, opening a bank account, signing an employment contract, or registering a vehicle, you will need your NIE.

Our experienced lawyers handle every step of the process: gathering the required documentation, completing official forms, booking appointments at the Comisaría or Consulate, and accompanying you through the application. We ensure your application is complete and compliant from day one, avoiding costly rejections.`,
    longDescriptionES: `El NIE (Número de Identificación de Extranjero) es el número de identificación extranjero de España, un requisito obligatorio para prácticamente cualquier actividad legal y financiera en el país. Ya sea que compres una propiedad, abras una cuenta bancaria, firmes un contrato de empleo o registres un vehículo, necesitarás tu NIE.

Nuestros abogados con experiencia se encargan de cada paso del proceso: reunir la documentación requerida, completar los formularios oficiales, reservar citas en la Comisaría o el Consulado y acompañarte durante la solicitud.`,
    price: 149,
    duration: "2–4 weeks",
    featuresEN: [
      "Full documentation review and preparation",
      "Appointment booking at the police station or consulate",
      "Lawyer accompaniment on the day",
      "EX-15 form completion",
      "Post-submission follow-up",
      "Digital copy of your NIE delivered by email",
    ],
    featuresES: [
      "Revisión y preparación completa de documentación",
      "Reserva de cita en comisaría o consulado",
      "Acompañamiento de abogado el día de la cita",
      "Cumplimentación del formulario EX-15",
      "Seguimiento post-presentación",
      "Copia digital de tu NIE enviada por email",
    ],
    icon: "🪪",
  },
  {
    slug: "work-permit",
    nameEN: "Work Permit",
    nameES: "Permiso de Trabajo",
    descriptionEN: "Obtain legal authorization to work in Spain. We handle work permits for employees and self-employed foreigners from all nationalities.",
    descriptionES: "Obtén la autorización legal para trabajar en España. Gestionamos permisos de trabajo para empleados y autónomos extranjeros de todas las nacionalidades.",
    longDescriptionEN: `A Spanish Work Permit (Autorización de Trabajo) grants non-EU nationals the legal right to work in Spain either as an employee or as a self-employed professional. Without it, working in Spain is illegal and can result in serious penalties for both you and your employer.

Our team of immigration lawyers specializes in initial work permit applications, renewals, modifications (change of employer or activity), and appeals against denials. We analyze your specific situation — your nationality, job offer, and employer — to identify the best permit category and build the strongest possible application file.`,
    longDescriptionES: `Un permiso de trabajo español otorga a los ciudadanos no comunitarios el derecho legal a trabajar en España como empleado o profesional autónomo. Sin él, trabajar en España es ilegal y puede resultar en sanciones graves tanto para ti como para tu empleador.

Nuestro equipo de abogados de inmigración está especializado en solicitudes de permisos de trabajo iniciales, renovaciones, modificaciones y recursos contra denegaciones.`,
    price: 599,
    duration: "2–4 months",
    featuresEN: [
      "Initial consultation and permit category assessment",
      "Full documentation checklist and preparation",
      "Employer coordination and support",
      "Application filing with the immigration office",
      "Resolution tracking and follow-up",
      "Renewal alert and assistance service",
    ],
    featuresES: [
      "Consulta inicial y evaluación de categoría de permiso",
      "Lista completa de documentación y preparación",
      "Coordinación y apoyo al empleador",
      "Presentación de solicitud ante la oficina de extranjería",
      "Seguimiento y control de la resolución",
      "Servicio de alerta y asistencia para renovaciones",
    ],
    icon: "💼",
  },
  {
    slug: "residence-permit",
    nameEN: "Residence Permit",
    nameES: "Permiso de Residencia",
    descriptionEN: "Secure your legal right to live in Spain long-term. We manage TIE applications, family reunification, and residence renewals.",
    descriptionES: "Asegura tu derecho legal a residir en España a largo plazo. Gestionamos solicitudes de TIE, reagrupación familiar y renovaciones de residencia.",
    longDescriptionEN: `A Spanish Residence Permit (Autorización de Residencia) is your gateway to building a life in Spain. It allows non-EU nationals to legally reside in Spain for more than 90 days and is the foundation for accessing public services, healthcare, education, and — eventually — permanent residency and nationality.

We guide you through every type of residence permit: non-lucrative residence (for those with passive income), family reunification, long-term EU residency, and the TIE (Tarjeta de Identidad de Extranjero). Our lawyers assess your situation and recommend the most efficient route, then manage the entire process from start to finish.`,
    longDescriptionES: `Un permiso de residencia español es tu puerta de entrada para construir una vida en España. Permite a los ciudadanos no comunitarios residir legalmente en España durante más de 90 días y es la base para acceder a los servicios públicos, la sanidad, la educación y, eventualmente, la residencia permanente y la nacionalidad.

Te guiamos en cada tipo de permiso de residencia: residencia no lucrativa, reagrupación familiar, residencia de larga duración UE y la TIE.`,
    price: 499,
    duration: "1–3 months",
    featuresEN: [
      "Residence category analysis and recommendation",
      "TIE application management",
      "Family reunification support",
      "Padrón municipal registration assistance",
      "Social Security number registration",
      "Renewal planning and reminders",
    ],
    featuresES: [
      "Análisis y recomendación de categoría de residencia",
      "Gestión de solicitud de TIE",
      "Apoyo en reagrupación familiar",
      "Asistencia en el empadronamiento municipal",
      "Registro del número de Seguridad Social",
      "Planificación y recordatorios de renovación",
    ],
    icon: "🏠",
  },
  {
    slug: "digital-nomad-visa",
    nameEN: "Digital Nomad Visa",
    nameES: "Visa Nómada Digital",
    descriptionEN: "Spain's official Digital Nomad Visa lets remote workers and freelancers live and work legally from Spain with attractive tax benefits.",
    descriptionES: "La Visa de Nómada Digital oficial de España permite a trabajadores remotos y freelancers vivir y trabajar legalmente desde España con atractivas ventajas fiscales.",
    longDescriptionEN: `Spain's Digital Nomad Visa (Visa para Teletrabajadores de Carácter Internacional), introduced under the Startups Law, is specifically designed for remote workers, freelancers, and entrepreneurs who work for foreign companies or clients. It offers an initial 1-year stay, extendable up to 5 years, and uniquely allows access to the Beckham Law tax regime — a flat 24% income tax rate for the first 6 years.

This visa is increasingly popular among American, British, and international professionals who want to enjoy Spain's quality of life while continuing to work with their existing clients and employers abroad. Our lawyers handle the complex documentation, financial proof requirements, and consular appointments.`,
    longDescriptionES: `La Visa de Nómada Digital de España, introducida por la Ley de Startups, está diseñada específicamente para trabajadores remotos, freelancers y emprendedores que trabajan para empresas o clientes extranjeros. Ofrece una estancia inicial de 1 año, ampliable hasta 5 años, y permite acceder al régimen fiscal de la Ley Beckham — un tipo fijo del 24% de IRPF durante los primeros 6 años.`,
    price: 799,
    duration: "6–10 weeks",
    featuresEN: [
      "Eligibility assessment for you and your dependants",
      "Income and employment documentation preparation",
      "Consular appointment booking and preparation",
      "Beckham Law (IRPF) tax regime application support",
      "Self-employment (autónomo) registration if needed",
      "Post-arrival residency card (TIE) application",
    ],
    featuresES: [
      "Evaluación de elegibilidad para ti y tus dependientes",
      "Preparación de documentación de ingresos y empleo",
      "Reserva y preparación de cita consular",
      "Apoyo en la solicitud del régimen fiscal de la Ley Beckham",
      "Alta como autónomo si es necesario",
      "Solicitud de tarjeta de residencia (TIE) tras la llegada",
    ],
    icon: "💻",
  },
  {
    slug: "spanish-nationality",
    nameEN: "Spanish Nationality",
    nameES: "Nacionalidad Española",
    descriptionEN: "Achieve Spanish citizenship and an EU passport. We guide you through the residency-based, Sephardic, and iberoamerican nationality routes.",
    descriptionES: "Consigue la ciudadanía española y un pasaporte de la UE. Te guiamos en las vías de nacionalidad por residencia, sefardí e iberoamericana.",
    longDescriptionEN: `Acquiring Spanish nationality is one of the most valuable life decisions you can make — granting you an EU passport, the right to live and work across 27 European countries, and access to world-class education and healthcare. Spain offers several routes to citizenship: by residency (10 years general, 2 years for Ibero-Americans and Sephardic Jews), by origin, and by marriage.

Our nationality specialists have helped thousands of clients obtain Spanish citizenship. We prepare a comprehensive application — DELE A2 language exam preparation, CCSE civics exam guidance, criminal record apostilles, civil registry documents — and file your Solicitud de Nacionalidad Española por Residencia through the MJUS electronic platform, tracking it until final approval.`,
    longDescriptionES: `Adquirir la nacionalidad española es una de las decisiones más valiosas de tu vida: te otorga un pasaporte de la UE, el derecho a vivir y trabajar en 27 países europeos y acceso a educación y sanidad de primer nivel. España ofrece varias vías: por residencia (10 años general, 2 años para iberoamericanos y judíos sefardíes), por origen y por matrimonio.

Nuestros especialistas en nacionalidad han ayudado a miles de clientes a obtener la ciudadanía española. Preparamos una solicitud completa y la tramitamos a través de la plataforma electrónica MJUS hasta la aprobación final.`,
    price: 999,
    duration: "12–18 months",
    featuresEN: [
      "Full residency history review and eligibility check",
      "DELE A2 and CCSE exam preparation materials",
      "Civil registry document collection and apostille",
      "Criminal record certificates from all countries",
      "MJUS online application filing",
      "Progress tracking until final nationality resolution",
    ],
    featuresES: [
      "Revisión completa del historial de residencia y verificación de elegibilidad",
      "Materiales de preparación para DELE A2 y CCSE",
      "Recopilación de documentos del registro civil y apostilla",
      "Certificados de antecedentes penales de todos los países",
      "Presentación de solicitud en plataforma MJUS",
      "Seguimiento del progreso hasta la resolución final",
    ],
    icon: "🇪🇸",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
