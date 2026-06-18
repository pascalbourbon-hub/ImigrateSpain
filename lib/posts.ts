export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export interface Post {
  slug: string;
  titleEN: string;
  titleES: string;
  excerptEN: string;
  excerptES: string;
  dateISO: string;
  readTimeMin: number;
  categoryEN: string;
  categoryES: string;
  /** Slug of the related service for the closing CTA. */
  serviceSlug: string;
  bodyEN: ContentBlock[];
  bodyES: ContentBlock[];
}

export const posts: Post[] = [
  {
    slug: "spain-digital-nomad-visa-2026-guide",
    titleEN: "How to Get the Spain Digital Nomad Visa in 2026: Complete Guide",
    titleES: "Cómo Conseguir la Visa Nómada Digital de España en 2026: Guía Completa",
    excerptEN:
      "Everything remote workers and freelancers need to know about the Spain Digital Nomad Visa in 2026: requirements, income thresholds, the 24% Beckham Law tax rate, and the step-by-step application process.",
    excerptES:
      "Todo lo que los trabajadores remotos y freelancers necesitan saber sobre la Visa Nómada Digital de España en 2026: requisitos, umbrales de ingresos, el tipo fijo del 24% de la Ley Beckham y el proceso de solicitud paso a paso.",
    dateISO: "2026-01-15",
    readTimeMin: 8,
    categoryEN: "Visas",
    categoryES: "Visados",
    serviceSlug: "digital-nomad-visa",
    bodyEN: [
      {
        type: "p",
        text: "Spain's Digital Nomad Visa (officially the Visa para Teletrabajadores de Carácter Internacional) was introduced under the 2023 Startups Law and has quickly become one of the most attractive options for remote workers, freelancers, and entrepreneurs who want to live in Spain while working for companies or clients based abroad. In 2026 the route remains fully open, and demand is higher than ever. This guide walks you through exactly who qualifies, what you need, and how the process works.",
      },
      { type: "h2", text: "Who Qualifies for the Spain Digital Nomad Visa?" },
      {
        type: "p",
        text: "The visa is designed for non-EU/EEA nationals who can perform their work remotely. You generally fit into one of two categories: an employee working remotely for a company located outside Spain, or a self-employed professional (freelancer) whose clients are mostly outside Spain. If you are self-employed, you may work with Spanish clients, but they cannot represent more than 20% of your total professional activity.",
      },
      {
        type: "p",
        text: "Beyond the remote-work requirement, applicants must meet several key conditions:",
      },
      {
        type: "ul",
        items: [
          "Proof of at least three months of work with your current employer or clients, and a company that has been operating for at least one year.",
          "A university degree, professional qualification, or at least three years of relevant work experience.",
          "Sufficient income — in 2026 this is roughly 200% of the Spanish minimum wage (SMI), which works out to around €2,760 per month, with higher thresholds if you bring family members.",
          "A clean criminal record certificate from any country you have lived in over the past five years, apostilled and translated.",
          "Private or public health insurance with full coverage in Spain.",
        ],
      },
      { type: "h2", text: "The Beckham Law: A 24% Flat Tax Rate" },
      {
        type: "p",
        text: "One of the biggest advantages of the Digital Nomad Visa is access to the special expat tax regime known as the Beckham Law. Under this regime, qualifying applicants are taxed at a flat rate of 24% on Spanish-source employment income up to €600,000 per year, instead of Spain's progressive scale which can climb close to 47%. The regime applies for the year you become a tax resident plus the following five years — six years in total.",
      },
      {
        type: "p",
        text: "Importantly, the Beckham Law generally exempts your foreign-source income from Spanish taxation during this period, which can result in significant savings. You must apply for the regime within six months of registering with Spanish Social Security, so timing and coordination with your visa application matter a great deal.",
      },
      { type: "h2", text: "Applying From Abroad vs. From Inside Spain" },
      {
        type: "p",
        text: "You have two routes. You can apply for the visa at a Spanish consulate in your home country, which grants an initial one-year visa. Alternatively, if you are already legally in Spain (for example, as a tourist within the 90-day Schengen window), you can apply directly to the UGE (Unidad de Grandes Empresas) for a three-year residence authorisation. The in-country route is popular because it grants a longer initial period and is processed relatively quickly — the UGE is legally required to resolve applications within 20 working days, with positive silence applying if they do not.",
      },
      { type: "h2", text: "Step-by-Step Application Process" },
      {
        type: "ul",
        items: [
          "Gather and legalise your documents — employment contracts or client agreements, proof of income, qualifications, criminal record certificate (apostilled), and health insurance.",
          "Obtain a NIE if applying from within Spain, or prepare to receive one as part of the consular process.",
          "Submit the application — either at the consulate or online through the UGE electronic portal.",
          "Receive your resolution. If approved abroad, collect your visa and travel to Spain; if approved in-country, you proceed to obtain your TIE card.",
          "Register with Spanish Social Security and, if applicable, apply for the Beckham Law regime within the six-month window.",
          "Apply for your TIE (residence card) within 30 days of entry or approval, and register on the padrón at your local town hall.",
        ],
      },
      { type: "h2", text: "Common Mistakes to Avoid" },
      {
        type: "p",
        text: "The most frequent reasons for delay or rejection are incomplete income documentation, criminal record certificates that are not properly apostilled or translated by a sworn translator, and confusion about the 20% Spanish-client limit for freelancers. Missing the six-month Beckham Law deadline is another costly error, as it cannot be recovered once the window closes.",
      },
      {
        type: "p",
        text: "If you want to relocate to Spain with confidence and secure the tax advantages from day one, our immigration lawyers handle the entire Digital Nomad Visa process — from eligibility assessment to your TIE and Beckham Law registration. Explore our Digital Nomad Visa service to get started.",
      },
    ],
    bodyES: [
      {
        type: "p",
        text: "La Visa de Nómada Digital de España (oficialmente la Visa para Teletrabajadores de Carácter Internacional) se introdujo con la Ley de Startups de 2023 y rápidamente se ha convertido en una de las opciones más atractivas para trabajadores remotos, freelancers y emprendedores que quieren vivir en España mientras trabajan para empresas o clientes en el extranjero. En 2026 esta vía sigue plenamente abierta y la demanda es mayor que nunca. Esta guía te explica exactamente quién puede acceder, qué necesitas y cómo funciona el proceso.",
      },
      { type: "h2", text: "¿Quién Puede Solicitar la Visa Nómada Digital?" },
      {
        type: "p",
        text: "La visa está diseñada para ciudadanos de fuera de la UE/EEE que puedan realizar su trabajo de forma remota. Generalmente encajas en una de dos categorías: empleado que trabaja en remoto para una empresa situada fuera de España, o profesional autónomo (freelancer) cuyos clientes están mayoritariamente fuera de España. Si eres autónomo, puedes trabajar con clientes españoles, pero estos no pueden representar más del 20% de tu actividad profesional total.",
      },
      {
        type: "p",
        text: "Además del requisito de trabajo remoto, los solicitantes deben cumplir varias condiciones clave:",
      },
      {
        type: "ul",
        items: [
          "Prueba de al menos tres meses de trabajo con tu empleador o clientes actuales, y una empresa que lleve operando al menos un año.",
          "Una titulación universitaria, cualificación profesional o al menos tres años de experiencia laboral relevante.",
          "Ingresos suficientes — en 2026 esto equivale aproximadamente al 200% del Salario Mínimo Interprofesional (SMI), unos 2.760 € al mes, con umbrales más altos si traes familiares.",
          "Un certificado de antecedentes penales sin cargos de cualquier país donde hayas vivido en los últimos cinco años, apostillado y traducido.",
          "Seguro médico privado o público con cobertura completa en España.",
        ],
      },
      { type: "h2", text: "La Ley Beckham: Un Tipo Fijo del 24%" },
      {
        type: "p",
        text: "Una de las mayores ventajas de la Visa Nómada Digital es el acceso al régimen fiscal especial para expatriados conocido como Ley Beckham. Bajo este régimen, los solicitantes que cumplen los requisitos tributan a un tipo fijo del 24% sobre los rendimientos del trabajo de fuente española hasta 600.000 € anuales, en lugar de la escala progresiva española que puede acercarse al 47%. El régimen se aplica durante el año en que pasas a ser residente fiscal más los cinco años siguientes — seis años en total.",
      },
      {
        type: "p",
        text: "Es importante destacar que la Ley Beckham generalmente exime tus ingresos de fuente extranjera de tributación en España durante este periodo, lo que puede suponer un ahorro significativo. Debes solicitar el régimen dentro de los seis meses posteriores a tu alta en la Seguridad Social española, por lo que la sincronización con tu solicitud de visa es muy importante.",
      },
      { type: "h2", text: "Solicitar Desde el Extranjero o Desde España" },
      {
        type: "p",
        text: "Tienes dos vías. Puedes solicitar la visa en un consulado español en tu país de origen, lo que concede una visa inicial de un año. Alternativamente, si ya te encuentras legalmente en España (por ejemplo, como turista dentro de la ventana de 90 días de Schengen), puedes solicitar directamente a la UGE (Unidad de Grandes Empresas) una autorización de residencia de tres años. La vía desde España es popular porque concede un periodo inicial más largo y se tramita con relativa rapidez — la UGE está legalmente obligada a resolver en 20 días hábiles, aplicándose el silencio positivo si no lo hace.",
      },
      { type: "h2", text: "Proceso de Solicitud Paso a Paso" },
      {
        type: "ul",
        items: [
          "Reúne y legaliza tus documentos — contratos de trabajo o acuerdos con clientes, prueba de ingresos, titulaciones, certificado de antecedentes penales (apostillado) y seguro médico.",
          "Obtén un NIE si solicitas desde España, o prepárate para recibirlo como parte del proceso consular.",
          "Presenta la solicitud — en el consulado o en línea a través del portal electrónico de la UGE.",
          "Recibe tu resolución. Si te aprueban en el extranjero, recoge tu visa y viaja a España; si te aprueban desde España, procedes a obtener tu tarjeta TIE.",
          "Date de alta en la Seguridad Social española y, si procede, solicita el régimen de la Ley Beckham dentro de la ventana de seis meses.",
          "Solicita tu TIE (tarjeta de residencia) dentro de los 30 días desde la entrada o aprobación, y empadrónate en tu ayuntamiento local.",
        ],
      },
      { type: "h2", text: "Errores Comunes que Debes Evitar" },
      {
        type: "p",
        text: "Las razones más frecuentes de retraso o denegación son la documentación de ingresos incompleta, los certificados de antecedentes penales que no están correctamente apostillados o traducidos por un traductor jurado, y la confusión sobre el límite del 20% de clientes españoles para autónomos. No cumplir el plazo de seis meses de la Ley Beckham es otro error costoso, ya que no se puede recuperar una vez cerrada la ventana.",
      },
      {
        type: "p",
        text: "Si quieres mudarte a España con confianza y asegurar las ventajas fiscales desde el primer día, nuestros abogados de inmigración gestionan todo el proceso de la Visa Nómada Digital — desde la evaluación de elegibilidad hasta tu TIE y el alta en la Ley Beckham. Descubre nuestro servicio de Visa Nómada Digital para empezar.",
      },
    ],
  },
  {
    slug: "nie-number-spain-what-it-is-how-to-get-one",
    titleEN: "NIE Number in Spain: What It Is and How to Get One",
    titleES: "Número NIE en España: Qué Es y Cómo Obtenerlo",
    excerptEN:
      "The NIE number is the foreign identification number you need for almost everything in Spain. Learn what the NIE is, who needs it, the EX-15 form, and the fastest way to get yours.",
    excerptES:
      "El número NIE es el número de identificación de extranjero que necesitas para casi todo en España. Descubre qué es el NIE, quién lo necesita, el formulario EX-15 y la forma más rápida de conseguirlo.",
    dateISO: "2026-02-03",
    readTimeMin: 6,
    categoryEN: "Documentation",
    categoryES: "Documentación",
    serviceSlug: "nie-certificate",
    bodyEN: [
      {
        type: "p",
        text: "If you plan to do almost anything official in Spain — buy property, open a bank account, sign a work contract, start a business, or even buy a car — you will need a NIE number. It is the single most important identifier for foreigners in the Spanish system, and getting it right from the start saves a great deal of frustration. Here is everything you need to know.",
      },
      { type: "h2", text: "What Is the NIE Number?" },
      {
        type: "p",
        text: "NIE stands for Número de Identificación de Extranjero — the Foreigner Identification Number. It is a unique tax and identification number assigned by the Spanish authorities to any non-Spanish national who has financial, professional, or legal dealings in Spain. The number itself begins with a letter (X, Y, or Z), followed by seven digits and a final check letter, for example Y1234567X.",
      },
      {
        type: "p",
        text: "It is important to understand that the NIE is a number, not a residence permit. Having a NIE does not, by itself, give you the right to live in Spain. If you are a resident, the NIE will appear on your TIE (Tarjeta de Identidad de Extranjero) card; if you are a non-resident, you simply receive a certificate showing the number.",
      },
      { type: "h2", text: "Who Needs a NIE?" },
      {
        type: "p",
        text: "You need a NIE if you fall into any of these common situations:",
      },
      {
        type: "ul",
        items: [
          "Buying or selling property in Spain.",
          "Opening a Spanish bank account or taking out a mortgage.",
          "Starting a job or signing an employment contract.",
          "Registering as self-employed (autónomo) or setting up a company.",
          "Buying and registering a vehicle.",
          "Inheriting assets located in Spain.",
          "Applying for residency, a visa, or Spanish nationality.",
        ],
      },
      { type: "h2", text: "The EX-15 Form" },
      {
        type: "p",
        text: "The official application for a NIE is made using Form EX-15 (Solicitud de Número de Identidad de Extranjero). On this form you must state the reason (motivo) for which you are requesting the number — for example, economic, professional, or social reasons. The motivo you provide must be genuine and, in many cases, supported by evidence such as a property purchase contract or a job offer. Alongside the EX-15, you will also pay the administrative fee using Form 790 Código 012.",
      },
      { type: "h2", text: "How to Get Your NIE: The Three Routes" },
      {
        type: "p",
        text: "There are three main ways to obtain a NIE, and choosing the right one depends on where you are and how quickly you need it:",
      },
      {
        type: "ul",
        items: [
          "At a Spanish consulate abroad — ideal if you are not yet in Spain. You apply in your home country and avoid the competitive in-country appointment system.",
          "In person in Spain — at a National Police station (Comisaría) or Oficina de Extranjería with a Foreigners' Office department. This requires a prior appointment (cita previa), which can be hard to secure in busy cities.",
          "Through a legal representative with power of attorney — a lawyer can obtain the NIE on your behalf, which is often the fastest and least stressful option, especially if you are abroad or have a tight timeline.",
        ],
      },
      { type: "h2", text: "Documents You Will Typically Need" },
      {
        type: "ul",
        items: [
          "A completed and signed EX-15 form.",
          "Your valid passport plus a photocopy of the main pages.",
          "Proof of the reason for the request (e.g. a property deposit contract, job offer, or notary appointment).",
          "Proof of payment of the Form 790-012 fee.",
          "If using a representative, a signed power of attorney (poder).",
        ],
      },
      { type: "h2", text: "How Long Does It Take?" },
      {
        type: "p",
        text: "Timelines vary enormously by region and method. A consulate application can take several weeks depending on the country. An in-person appointment in Spain can sometimes be resolved the same day, but the difficulty lies in obtaining the appointment itself, which in cities like Barcelona and Madrid can be the main bottleneck. Using a lawyer with power of attorney typically delivers your NIE within two to four weeks without you needing to attend in person.",
      },
      {
        type: "p",
        text: "Our team handles the full NIE process for you — completing the EX-15, booking appointments, and even applying on your behalf with power of attorney so you never have to chase a cita previa. Take a look at our NIE Certificate service to get your number quickly and correctly.",
      },
    ],
    bodyES: [
      {
        type: "p",
        text: "Si planeas hacer casi cualquier trámite oficial en España — comprar una propiedad, abrir una cuenta bancaria, firmar un contrato de trabajo, montar un negocio o incluso comprar un coche — necesitarás un número NIE. Es el identificador más importante para los extranjeros en el sistema español, y hacerlo bien desde el principio te ahorra muchísimas complicaciones. Aquí tienes todo lo que necesitas saber.",
      },
      { type: "h2", text: "¿Qué Es el Número NIE?" },
      {
        type: "p",
        text: "NIE significa Número de Identificación de Extranjero. Es un número único de identificación fiscal asignado por las autoridades españolas a cualquier ciudadano no español que tenga relaciones económicas, profesionales o jurídicas en España. El número en sí empieza por una letra (X, Y o Z), seguida de siete dígitos y una letra de control final, por ejemplo Y1234567X.",
      },
      {
        type: "p",
        text: "Es importante entender que el NIE es un número, no un permiso de residencia. Tener un NIE no te da por sí solo el derecho a vivir en España. Si eres residente, el NIE aparecerá en tu tarjeta TIE (Tarjeta de Identidad de Extranjero); si eres no residente, simplemente recibes un certificado que muestra el número.",
      },
      { type: "h2", text: "¿Quién Necesita un NIE?" },
      {
        type: "p",
        text: "Necesitas un NIE si te encuentras en alguna de estas situaciones habituales:",
      },
      {
        type: "ul",
        items: [
          "Comprar o vender una propiedad en España.",
          "Abrir una cuenta bancaria española o contratar una hipoteca.",
          "Empezar un trabajo o firmar un contrato laboral.",
          "Darte de alta como autónomo o constituir una empresa.",
          "Comprar y matricular un vehículo.",
          "Heredar bienes situados en España.",
          "Solicitar la residencia, un visado o la nacionalidad española.",
        ],
      },
      { type: "h2", text: "El Formulario EX-15" },
      {
        type: "p",
        text: "La solicitud oficial de un NIE se realiza mediante el Formulario EX-15 (Solicitud de Número de Identidad de Extranjero). En este formulario debes indicar el motivo por el que solicitas el número — por ejemplo, motivos económicos, profesionales o sociales. El motivo que indiques debe ser real y, en muchos casos, estar respaldado por pruebas como un contrato de compraventa de una propiedad o una oferta de empleo. Junto con el EX-15, también pagarás la tasa administrativa con el Modelo 790 Código 012.",
      },
      { type: "h2", text: "Cómo Obtener tu NIE: Las Tres Vías" },
      {
        type: "p",
        text: "Hay tres formas principales de obtener un NIE, y elegir la correcta depende de dónde estés y de la rapidez con la que lo necesites:",
      },
      {
        type: "ul",
        items: [
          "En un consulado español en el extranjero — ideal si todavía no estás en España. Solicitas en tu país de origen y evitas el competitivo sistema de citas dentro de España.",
          "En persona en España — en una comisaría de la Policía Nacional o en una Oficina de Extranjería. Esto requiere una cita previa, que puede ser difícil de conseguir en ciudades concurridas.",
          "A través de un representante legal con poder notarial — un abogado puede obtener el NIE en tu nombre, lo que suele ser la opción más rápida y menos estresante, especialmente si estás en el extranjero o tienes un plazo ajustado.",
        ],
      },
      { type: "h2", text: "Documentos que Normalmente Necesitarás" },
      {
        type: "ul",
        items: [
          "Un formulario EX-15 cumplimentado y firmado.",
          "Tu pasaporte válido más una fotocopia de las páginas principales.",
          "Prueba del motivo de la solicitud (p. ej. un contrato de arras, una oferta de empleo o una cita notarial).",
          "Justificante de pago de la tasa del Modelo 790-012.",
          "Si usas un representante, un poder notarial firmado.",
        ],
      },
      { type: "h2", text: "¿Cuánto Tarda?" },
      {
        type: "p",
        text: "Los plazos varían enormemente según la región y el método. Una solicitud en el consulado puede tardar varias semanas según el país. Una cita presencial en España a veces puede resolverse el mismo día, pero la dificultad está en conseguir la cita en sí, que en ciudades como Barcelona y Madrid puede ser el principal cuello de botella. Recurrir a un abogado con poder notarial suele entregar tu NIE en dos a cuatro semanas sin que tengas que acudir en persona.",
      },
      {
        type: "p",
        text: "Nuestro equipo gestiona todo el proceso del NIE por ti — cumplimentando el EX-15, reservando citas e incluso solicitando en tu nombre con poder notarial para que nunca tengas que perseguir una cita previa. Echa un vistazo a nuestro servicio de Certificado NIE para conseguir tu número de forma rápida y correcta.",
      },
    ],
  },
  {
    slug: "spanish-nationality-by-residency-requirements-timeline",
    titleEN: "Spanish Nationality by Residency: Requirements & Timeline",
    titleES: "Nacionalidad Española por Residencia: Requisitos y Plazos",
    excerptEN:
      "How to become a Spanish citizen through residency: the 10-year general rule, the 2-year Ibero-American route, the DELE A2 and CCSE exams, and a realistic timeline for the whole process.",
    excerptES:
      "Cómo convertirse en ciudadano español por residencia: la regla general de 10 años, la vía de 2 años para iberoamericanos, los exámenes DELE A2 y CCSE, y un plazo realista de todo el proceso.",
    dateISO: "2026-03-12",
    readTimeMin: 9,
    categoryEN: "Nationality",
    categoryES: "Nacionalidad",
    serviceSlug: "spanish-nationality",
    bodyEN: [
      {
        type: "p",
        text: "Obtaining Spanish nationality by residency (nacionalidad por residencia) is the most common path to a Spanish — and therefore EU — passport for foreigners who have built their life in Spain. It grants the right to live and work across the European Union, vote in Spanish elections, and pass citizenship to your children. But the requirements are strict and the timeline is long, so it pays to understand exactly what is involved.",
      },
      { type: "h2", text: "How Many Years of Residency Do You Need?" },
      {
        type: "p",
        text: "The required period of legal, continuous residency depends on your circumstances. The general rule is ten years, but Spanish law provides several significantly shorter routes:",
      },
      {
        type: "ul",
        items: [
          "10 years — the general requirement for most nationalities.",
          "5 years — for those who have been granted refugee status.",
          "2 years — for nationals of Ibero-American countries, Andorra, the Philippines, Equatorial Guinea, Portugal, and people of Sephardic origin.",
          "1 year — for several specific cases, including being born in Spain, being married to a Spanish citizen, or being the child or grandchild of someone who was originally Spanish.",
        ],
      },
      {
        type: "p",
        text: "The residency must be legal, continuous, and immediately prior to your application. This means holding valid residence permits throughout the period — gaps or periods of irregular stay can reset or interrupt the count.",
      },
      { type: "h2", text: "The Two Mandatory Exams: DELE A2 and CCSE" },
      {
        type: "p",
        text: "Unless you are a national of a Spanish-speaking country, you must pass two exams administered by the Instituto Cervantes before your application can succeed:",
      },
      {
        type: "ul",
        items: [
          "DELE A2 — a Spanish language exam at the A2 level of the Common European Framework, testing basic reading, writing, listening, and speaking. Nationals of Spanish-speaking countries are exempt.",
          "CCSE — the Conocimientos Constitucionales y Socioculturales de España test, a 25-question exam on the Spanish constitution, institutions, geography, history, and culture. You need to answer at least 15 questions correctly to pass.",
        ],
      },
      {
        type: "p",
        text: "Both exams should be passed before submitting your nationality application, as the certificates are required documents. The CCSE is offered on set dates each month, and the DELE has a more limited annual calendar, so planning ahead is essential.",
      },
      { type: "h2", text: "Other Core Requirements" },
      {
        type: "ul",
        items: [
          "Good civic conduct (buena conducta cívica), demonstrated through criminal record certificates from Spain and from your countries of origin and residence over the relevant period.",
          "Sufficient integration into Spanish society, partly evidenced by the exams.",
          "Up-to-date registration (empadronamiento) and valid residency throughout the qualifying period.",
        ],
      },
      { type: "h2", text: "The Application Process and the MJUS Platform" },
      {
        type: "p",
        text: "Applications are submitted electronically through the Ministry of Justice's online platform (commonly accessed via the MJUS / Sede Electrónica system). You upload your full file — passport, residence card, birth certificate, criminal record certificates, exam certificates, and proof of payment of the fee. After submission, the file is reviewed, and you may be asked for additional documentation.",
      },
      { type: "h2", text: "A Realistic Timeline" },
      {
        type: "p",
        text: "The legal target for resolving nationality applications is one year from the moment the file is complete, but in practice many applications take longer. From the day you submit, you should realistically expect the resolution phase alone to take roughly 12 to 24 months, depending on the workload of the Ministry. If you add the time needed to prepare documents, pass the exams, and gather apostilled certificates, the full journey often spans well over a year.",
      },
      {
        type: "p",
        text: "Once your nationality is approved, there is a final and crucial step: within 180 days you must swear allegiance to the King and the Constitution before the Civil Registry, register the new citizenship, and then you can apply for your Spanish ID (DNI) and passport.",
      },
      { type: "h2", text: "Do You Have to Give Up Your Current Nationality?" },
      {
        type: "p",
        text: "Spain generally does not recognise dual nationality except with Ibero-American countries, Andorra, the Philippines, Equatorial Guinea, and Portugal. Other applicants are formally required to renounce their previous nationality during the oath. In practice, however, whether your original country actually strips your citizenship depends on that country's own laws — many people retain both in practice. This is an area where personalised legal advice is especially valuable.",
      },
      {
        type: "p",
        text: "Securing Spanish nationality is a marathon, not a sprint, and a single missing certificate can cost months. Our nationality specialists review your eligibility, prepare your exam strategy, gather and apostille every document, and file and track your application through to the oath. Discover our Spanish Nationality service to begin your path to an EU passport.",
      },
    ],
    bodyES: [
      {
        type: "p",
        text: "Obtener la nacionalidad española por residencia es la vía más común hacia un pasaporte español —y por tanto de la UE— para los extranjeros que han construido su vida en España. Otorga el derecho a vivir y trabajar en toda la Unión Europea, votar en las elecciones españolas y transmitir la ciudadanía a tus hijos. Pero los requisitos son estrictos y el plazo es largo, así que conviene entender exactamente qué implica.",
      },
      { type: "h2", text: "¿Cuántos Años de Residencia Necesitas?" },
      {
        type: "p",
        text: "El periodo requerido de residencia legal y continuada depende de tus circunstancias. La regla general es de diez años, pero la ley española prevé varias vías considerablemente más cortas:",
      },
      {
        type: "ul",
        items: [
          "10 años — el requisito general para la mayoría de nacionalidades.",
          "5 años — para quienes han obtenido el estatuto de refugiado.",
          "2 años — para nacionales de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial, Portugal y personas de origen sefardí.",
          "1 año — para varios casos específicos, incluyendo haber nacido en España, estar casado con un ciudadano español, o ser hijo o nieto de alguien que fue originariamente español.",
        ],
      },
      {
        type: "p",
        text: "La residencia debe ser legal, continuada e inmediatamente anterior a tu solicitud. Esto significa mantener permisos de residencia válidos durante todo el periodo — los vacíos o periodos de estancia irregular pueden reiniciar o interrumpir el cómputo.",
      },
      { type: "h2", text: "Los Dos Exámenes Obligatorios: DELE A2 y CCSE" },
      {
        type: "p",
        text: "Salvo que seas nacional de un país hispanohablante, debes aprobar dos exámenes administrados por el Instituto Cervantes antes de que tu solicitud pueda prosperar:",
      },
      {
        type: "ul",
        items: [
          "DELE A2 — un examen de lengua española de nivel A2 del Marco Común Europeo, que evalúa comprensión lectora, escritura, comprensión auditiva y expresión oral básicas. Los nacionales de países hispanohablantes están exentos.",
          "CCSE — la prueba de Conocimientos Constitucionales y Socioculturales de España, un examen de 25 preguntas sobre la constitución española, las instituciones, la geografía, la historia y la cultura. Necesitas acertar al menos 15 preguntas para aprobar.",
        ],
      },
      {
        type: "p",
        text: "Ambos exámenes deben aprobarse antes de presentar la solicitud de nacionalidad, ya que los certificados son documentos obligatorios. El CCSE se ofrece en fechas fijas cada mes, y el DELE tiene un calendario anual más limitado, por lo que planificar con antelación es esencial.",
      },
      { type: "h2", text: "Otros Requisitos Fundamentales" },
      {
        type: "ul",
        items: [
          "Buena conducta cívica, acreditada mediante certificados de antecedentes penales de España y de tus países de origen y residencia durante el periodo correspondiente.",
          "Suficiente integración en la sociedad española, en parte evidenciada por los exámenes.",
          "Empadronamiento actualizado y residencia válida durante todo el periodo exigido.",
        ],
      },
      { type: "h2", text: "El Proceso de Solicitud y la Plataforma MJUS" },
      {
        type: "p",
        text: "Las solicitudes se presentan electrónicamente a través de la plataforma en línea del Ministerio de Justicia (a la que se suele acceder mediante el sistema MJUS / Sede Electrónica). Subes tu expediente completo — pasaporte, tarjeta de residencia, certificado de nacimiento, certificados de antecedentes penales, certificados de los exámenes y justificante de pago de la tasa. Tras la presentación, el expediente se revisa y es posible que te pidan documentación adicional.",
      },
      { type: "h2", text: "Un Plazo Realista" },
      {
        type: "p",
        text: "El objetivo legal para resolver las solicitudes de nacionalidad es de un año desde que el expediente está completo, pero en la práctica muchas solicitudes tardan más. Desde el día en que presentas, deberías esperar de forma realista que solo la fase de resolución dure aproximadamente entre 12 y 24 meses, según la carga de trabajo del Ministerio. Si añades el tiempo necesario para preparar documentos, aprobar los exámenes y reunir certificados apostillados, el recorrido completo suele superar con creces el año.",
      },
      {
        type: "p",
        text: "Una vez aprobada tu nacionalidad, hay un paso final y crucial: en un plazo de 180 días debes jurar o prometer fidelidad al Rey y a la Constitución ante el Registro Civil, inscribir la nueva ciudadanía y, después, ya puedes solicitar tu DNI y pasaporte españoles.",
      },
      { type: "h2", text: "¿Tienes que Renunciar a tu Nacionalidad Actual?" },
      {
        type: "p",
        text: "España generalmente no reconoce la doble nacionalidad salvo con los países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial y Portugal. A los demás solicitantes se les exige formalmente renunciar a su nacionalidad anterior durante el juramento. Sin embargo, en la práctica, que tu país de origen te retire realmente la ciudadanía depende de las leyes de ese país — muchas personas conservan ambas en la práctica. Esta es un área donde el asesoramiento legal personalizado resulta especialmente valioso.",
      },
      {
        type: "p",
        text: "Conseguir la nacionalidad española es una maratón, no un sprint, y un solo certificado que falte puede costar meses. Nuestros especialistas en nacionalidad revisan tu elegibilidad, preparan tu estrategia para los exámenes, reúnen y apostillan cada documento, y presentan y hacen seguimiento de tu solicitud hasta el juramento. Descubre nuestro servicio de Nacionalidad Española para comenzar tu camino hacia un pasaporte de la UE.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
