export interface Lawyer {
  /** Anchor id on the About page (/about#id) and author key for blog posts. */
  id: string;
  name: string;
  roleEN: string;
  roleES: string;
  bioEN: string;
  bioES: string;
  specialtyEN: string;
  specialtyES: string;
  languages: string;
  photo: string;
  emoji: string;
}

export const lawyers: Lawyer[] = [
  {
    id: "alejandro-esquerra",
    name: "Alejandro Esquerra Castellet",
    roleEN: "Senior Immigration Lawyer",
    roleES: "Abogado Principal de Inmigración",
    bioEN: "Alejandro has over 11 years of experience in Spanish immigration and foreign nationals law (Derecho de Extranjería). A graduate of Universitat Pompeu Fabra, he has guided hundreds of international clients through complex visa, residency, and work permit procedures.",
    bioES: "Alejandro cuenta con más de 11 años de experiencia en derecho de extranjería e inmigración española. Licenciado por la Universitat Pompeu Fabra, ha guiado a cientos de clientes internacionales a través de complejos procedimientos de visado, residencia y permiso de trabajo.",
    specialtyEN: "Immigration & Foreign Nationals Law",
    specialtyES: "Derecho de Extranjería e Inmigración",
    languages: "Spanish, Catalan, English",
    photo: "/team/alejandro-esquerra.jpg",
    emoji: "👨‍⚖️",
  },
  {
    id: "marina-cortasa",
    name: "Marina Cortasa Cachero",
    roleEN: "Immigration & Human Rights Lawyer",
    roleES: "Abogada de Inmigración y Derechos Humanos",
    bioEN: "Marina holds a Law degree from UIC Barcelona and a Master's in Effective Judicial Protection. Her background in international law, fundamental rights, and human rights within UN systems gives her clients a uniquely thorough legal perspective.",
    bioES: "Marina es licenciada en Derecho por la UIC Barcelona y tiene un Máster en Tutela Judicial Efectiva. Su formación en derecho internacional, derechos fundamentales y protección de los derechos humanos en el sistema de la ONU ofrece a sus clientes una perspectiva jurídica excepcionalmente completa.",
    specialtyEN: "Residency, Nationality & Human Rights",
    specialtyES: "Residencia, Nacionalidad y Derechos Humanos",
    languages: "Spanish, Catalan, English",
    photo: "/team/marina-cortasa.jpg",
    emoji: "👩‍⚖️",
  },
  {
    id: "martina-albero",
    name: "Martina Albero Pes",
    roleEN: "Immigration & International Law Specialist",
    roleES: "Especialista en Inmigración y Derecho Internacional",
    bioEN: "Martina holds a Law degree from the Autonomous University of Barcelona with further specialisation in European and public international law at Université Toulouse Capitole. She advises international professionals on residence permits and Digital Nomad visas, combining rigorous legal training with a French-speaking capability that serves clients across Europe.",
    bioES: "Martina es licenciada en Derecho por la Universidad Autónoma de Barcelona, con especialización adicional en derecho europeo e internacional público en la Université Toulouse Capitole. Asesora a profesionales internacionales en permisos de residencia y visados de nómada digital, combinando una rigurosa formación jurídica con el dominio del francés para atender a clientes en toda Europa.",
    specialtyEN: "Residence Permits & Digital Nomad Visa",
    specialtyES: "Permisos de Residencia y Visa Nómada Digital",
    languages: "Spanish, Catalan, French, English",
    photo: "/team/martina-albero.jpg",
    emoji: "👩‍⚖️",
  },
  {
    id: "claudia-gibernau",
    name: "Claudia Gibernau Garcia",
    roleEN: "Immigration Lawyer & Global Mobility Specialist",
    roleES: "Abogada de Inmigración y Especialista en Movilidad Global",
    bioEN: "Claudia brings a dual academic foundation — a Law degree from the University of Barcelona and a degree in Political and Administration Science from Universitat Pompeu Fabra, complemented by a Master for Access to the Legal Profession. With an international background including an Erasmus programme in Italy, she advises clients on work authorisations, NIE, and global mobility with precision and a genuinely international outlook.",
    bioES: "Claudia aporta una doble formación académica —licenciada en Derecho por la Universidad de Barcelona y en Ciencias Políticas y de la Administración por la Universitat Pompeu Fabra, complementada con un Máster de Acceso a la Abogacía. Con un perfil internacional que incluye un programa Erasmus en Italia, asesora a clientes en autorizaciones de trabajo, NIE y movilidad global con precisión y una visión auténticamente internacional.",
    specialtyEN: "Work Permits, NIE & Global Mobility",
    specialtyES: "Permisos de Trabajo, NIE y Movilidad Global",
    languages: "Spanish, Catalan, English, Italian",
    photo: "/team/claudia-gibernau.jpg",
    emoji: "👩‍⚖️",
  },
  {
    id: "greta-berger",
    name: "Greta Berger",
    roleEN: "Immigration Specialist — French-Speaking Clients",
    roleES: "Especialista en Inmigración — Clientes Francófonos",
    bioEN: "Trained in law at Universitat Pompeu Fabra with international legal experience at firms in Barcelona, Greta is the team's dedicated point of contact for French-speaking clients. A native French speaker, she guides individuals and families from France and francophone countries through residency, NIE, and visa procedures with warmth and precision.",
    bioES: "Formada en Derecho por la Universitat Pompeu Fabra y con experiencia jurídica internacional en despachos de Barcelona, Greta es el punto de contacto dedicado del equipo para los clientes francófonos. Francófona nativa, acompaña a particulares y familias de Francia y países francófonos en procedimientos de residencia, NIE y visados con cercanía y precisión.",
    specialtyEN: "Residency & NIE for Francophone Clients",
    specialtyES: "Residencia y NIE para Clientes Francófonos",
    languages: "French, Spanish, Catalan",
    photo: "/team/greta-berger.jpg",
    emoji: "👩‍⚖️",
  },
  {
    id: "cristina-cirillo",
    name: "Cristina Cirillo",
    roleEN: "Global Mobility & Immigration Lawyer",
    roleES: "Abogada de Movilidad Global e Inmigración",
    bioEN: "A licensed attorney with the Barcelona Bar Association, Cristina specialises in global mobility and immigration — covering migration, labour, tax, and international social security matters. Fluent in Italian, she is the go-to expert for Italy's growing expat community in Spain and for international talent relocating across borders.",
    bioES: "Colegiada en el Ilustre Colegio de la Abogacía de Barcelona, Cristina está especializada en movilidad global e inmigración, abarcando cuestiones de migración, derecho laboral, fiscalidad y seguridad social internacional. Con dominio del italiano, es la experta de referencia para la creciente comunidad de expatriados italianos en España y para el talento internacional que se traslada entre países.",
    specialtyEN: "Global Mobility & International Relocation",
    specialtyES: "Movilidad Global y Reubicación Internacional",
    languages: "Spanish, Italian, English",
    photo: "/team/cristina-cirillo.jpg",
    emoji: "👩‍⚖️",
  },
];

export function getLawyerById(id: string): Lawyer | undefined {
  return lawyers.find((l) => l.id === id);
}
