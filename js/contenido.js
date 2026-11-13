// =====================================================================
//  CONTENIDO DEL CURSO · Misioneros del Inglés
//  12 unidades del ciclo escolar en 3 trimestres. Cada unidad indica en qué
//  páginas del Cuadernillo del alumno está su material y cada actividad.
//  Las unidades 2 a 12 se generan a partir de los mismos datos del cuadernillo.
// =====================================================================

export const CUADERNILLO = 'cuadernillo/cuadernillo-alumno.pdf';

export const TRIMESTRES = [
  {
    "n": 1,
    "nombre": "Primer trimestre",
    "fechas": "31 de agosto al 26 de noviembre de 2026",
    "evaluacion": "Semana de repaso y evaluación: 23 al 26 de noviembre de 2026"
  },
  {
    "n": 2,
    "nombre": "Segundo trimestre",
    "fechas": "30 de noviembre de 2026 al 19 de marzo de 2027",
    "evaluacion": "Semana de repaso y evaluación: 16 al 19 de marzo de 2027"
  },
  {
    "n": 3,
    "nombre": "Tercer trimestre",
    "fechas": "5 de abril al 6 de julio de 2027",
    "evaluacion": "Semana de repaso y evaluación: 28 de junio al 2 de julio de 2027"
  }
];

// Ilustraciones del vocabulario (las mismas del cuadernillo)
export const ILUSTRACIONES = { "hello! / goodbye": "👋", "good morning": "🌅", "good night": "🌙", "nice to meet you": "🤝", "cook": "🧑‍🍳", "mechanic": "🧑‍🔧", "nurse": "🧑‍⚕️", "teacher": "🧑‍🏫", "student": "🧑‍🎓", "taxi driver": "🚕", "fisherman": "🎣", "carpenter": "🪚", "hairdresser": "💇", "farmer": "🧑‍🌾", "i'm from mexico": "🇲🇽", "i live in rosarito": "🏖️", "i'm fine": "😊", "receptionist": "🧑‍💼", "one": "1️⃣", "two": "2️⃣", "three": "3️⃣", "four": "4️⃣", "five": "5️⃣", "ten": "🔟", "one hundred": "💯", "how old are you?": "🎂", "phone number": "📱", "email address": "📧", "address": "🏠", "alphabet": "🔤", "first name / last name": "🪪", "registration form": "📝", "numbers": "🔢", "count": "🧮", "spell": "✏️", "call": "📞", "mother": "👩", "father": "👨", "grandmother": "👵", "grandfather": "👴", "son": "👦", "daughter": "👧", "baby": "👶", "husband and wife": "💑", "family": "👨‍👩‍👧‍👦", "brother and sister": "👫", "young": "🧒", "old": "🧓", "curly hair": "👩‍🦱", "long hair": "👱‍♀️", "funny": "😄", "quiet": "🤫", "strong": "💪", "kind": "🥰", "wake up": "⏰", "take a shower": "🚿", "get dressed": "👔", "have breakfast": "🥣", "go to work": "🚌", "have lunch": "🍽️", "go home": "🏡", "cook dinner": "🍳", "watch tv": "📺", "study english": "📚", "go to bed": "🛏️", "seven o'clock": "🕖", "seven thirty": "🕢", "monday": "📅", "in the evening": "🌇", "at night": "🌃", "weekend": "🧺", "in the morning": "☀️", "bread": "🍞", "rice": "🍚", "beans": "🫘", "eggs": "🥚", "chicken": "🍗", "fish": "🐟", "shrimp": "🦐", "beef": "🥩", "tacos": "🌮", "soup": "🍲", "salad": "🥗", "cheese": "🧀", "apple": "🍎", "banana": "🍌", "orange": "🍊", "sandwich": "🥪", "coffee": "☕", "tea": "🍵", "juice": "🧃", "milk": "🥛", "soda": "🥤", "lemonade": "🍋", "the check": "🧾", "water": "💧", "bank": "🏦", "hospital": "🏥", "pharmacy": "💊", "supermarket": "🛒", "gas station": "⛽", "bus stop": "🚏", "church": "⛪", "park": "🌳", "school": "🏫", "beach": "🏖️", "hotel": "🏨", "post office": "🏤", "police station": "🚓", "restaurant": "🍴", "turn left": "⬅️", "turn right": "➡️", "go straight": "⬆️", "map": "🗺️", "office": "🏢", "factory": "🏭", "store": "🏪", "farm": "🚜", "bakery": "🥖", "beauty salon": "💈", "construction site": "🏗️", "fix cars": "🔧", "cut hair": "✂️", "serve food": "🍽️", "clean rooms": "🧹", "answer the phone": "☎️", "make furniture": "🪑", "build houses": "🧱", "help customers": "🛎️", "boss": "🧑‍💼", "uniform": "🦺", "schedule": "🗓️", "t-shirt": "👕", "shirt": "👔", "jeans": "👖", "dress": "👗", "shorts": "🩳", "jacket": "🧥", "sneakers": "👟", "shoes": "👞", "hat": "👒", "cap": "🧢", "socks": "🧦", "cash": "💵", "card": "💳", "price": "🏷️", "red": "🔴", "blue": "🔵", "green": "🟢", "yellow": "🟡", "black": "⚫", "white": "⚪", "brown": "🟤", "purple": "🟣", "shopping": "🛍️", "swim": "🏊", "dance": "💃", "sing": "🎤", "drive": "🚗", "play soccer": "⚽", "play the guitar": "🎸", "ride a bike": "🚲", "surf": "🏄", "sew": "🪡", "use a computer": "💻", "watch movies": "🎬", "read": "📖", "go fishing": "🎣", "listen to music": "🎧", "walk in the park": "🚶", "every day": "🔁", "always": "✅", "it's sunny": "☀️", "it's cloudy": "☁️", "it's windy": "🌬️", "it's raining": "🌧️", "it's foggy": "🌫️", "it's hot": "🥵", "it's cold": "🥶", "spring": "🌸", "summer": "🏖️", "fall": "🍂", "winter": "❄️", "talking on the phone": "📞", "sleeping": "😴", "eating": "🍴", "writing": "✍️", "degrees": "🌡️", "waiting for the bus": "🚌", "playing": "⚽", "last week": "🗓️", "bought": "🛍️", "ate": "🍽️", "cleaned": "🧹", "saw": "👀", "walked": "🚶", "traveled": "✈️", "watched": "🎥", "drank": "🥤", "stayed home": "🏠", "it was fun": "🎉", "i was tired": "😴", "went": "🚗", "cooked": "🍲", "visited": "👵", "studied": "📖", "got up": "⏰", "made": "🌮", "get a better job": "💼", "open a business": "🏪", "learn to drive": "🚗", "finish school": "🎓", "buy a house": "🏡", "travel": "✈️", "keep studying": "📚", "help tourists": "🤝", "my dream is…": "🌟", "next year": "🗓️", "this summer": "☀️", "good luck": "🍀", "goal": "🎯", "future": "🚀", "visit my family": "👨‍👩‍👧", "take a new course": "📝", "success": "🏆", "i can do it": "🙌", "goodbye / bye": "👋", "hello": "👋", "hi": "👋", "waiter / waitress": "🧑‍🍳", "mother / mom": "👩", "father / dad": "👨", "children / kids": "👧", "parents": "👫" };

// --- Unidad 1: material y práctica originales de la plataforma ---
const U1 = {
    id: 'u1',
    numero: 1,
    titulo: 'Greetings & Introductions',
    tituloEs: 'Saludos y presentaciones',
    material: [
      {
        tipo: 'intro',
        texto: 'En esta unidad vas a aprender a saludar, presentarte y despedirte en inglés. Son las primeras frases que usarás con cualquier turista o cliente. Toca el botón ▶ para escuchar cómo se pronuncia cada frase.'
      },
      {
        tipo: 'vocab',
        titulo: 'Saludos y despedidas',
        items: [
          { en: 'Hello', es: 'Hola' },
          { en: 'Hi', es: 'Hola (más informal)' },
          { en: 'Good morning', es: 'Buenos días' },
          { en: 'Good afternoon', es: 'Buenas tardes' },
          { en: 'Good evening', es: 'Buenas noches (al llegar)' },
          { en: 'Good night', es: 'Buenas noches (al despedirse)' },
          { en: 'Goodbye', es: 'Adiós' },
          { en: 'See you later', es: 'Nos vemos luego' },
          { en: 'See you tomorrow', es: 'Nos vemos mañana' }
        ]
      },
      {
        tipo: 'tip',
        titulo: 'Good evening o Good night',
        texto: 'Las dos se traducen como "buenas noches", pero no son iguales. "Good evening" se usa para saludar cuando llegas por la tarde-noche. "Good night" solo se usa para despedirse o antes de dormir.'
      },
      {
        tipo: 'vocab',
        titulo: 'Para presentarte',
        items: [
          { en: "What's your name?", es: '¿Cómo te llamas?' },
          { en: 'My name is Laura.', es: 'Me llamo Laura.' },
          { en: 'Nice to meet you.', es: 'Mucho gusto.' },
          { en: 'Nice to meet you, too.', es: 'Igualmente.' },
          { en: 'How are you?', es: '¿Cómo estás?' },
          { en: "I'm fine, thank you.", es: 'Estoy bien, gracias.' },
          { en: 'And you?', es: '¿Y tú?' },
          { en: 'Where are you from?', es: '¿De dónde eres?' },
          { en: "I'm from Mexico.", es: 'Soy de México.' },
          { en: 'I live in Rosarito.', es: 'Vivo en Rosarito.' }
        ]
      },
      {
        tipo: 'gramatica',
        titulo: 'El verbo "to be" (ser / estar)',
        explicacion: 'En inglés, "ser" y "estar" son el mismo verbo: to be. Cambia según la persona. En la conversación casi siempre se usa la forma corta (contracción).',
        encabezados: ['Forma completa', 'Forma corta', 'Significado'],
        filas: [
          ['I am', "I'm", 'Yo soy / estoy'],
          ['You are', "You're", 'Tú eres / estás'],
          ['He is', "He's", 'Él es / está'],
          ['She is', "She's", 'Ella es / está'],
          ['It is', "It's", 'Es / está (cosa o animal)'],
          ['We are', "We're", 'Nosotros somos / estamos'],
          ['They are', "They're", 'Ellos son / están']
        ]
      },
      {
        tipo: 'dialogo',
        titulo: 'Diálogo: Ana conoce a John',
        contexto: 'Ana vive en Rosarito. En el malecón conoce a John, un turista.',
        lineas: [
          { quien: 'Ana', en: 'Good afternoon! Welcome to Rosarito.', es: '¡Buenas tardes! Bienvenido a Rosarito.' },
          { quien: 'John', en: 'Hi! Thank you.', es: '¡Hola! Gracias.' },
          { quien: 'Ana', en: "My name is Ana. What's your name?", es: 'Me llamo Ana. ¿Cómo te llamas?' },
          { quien: 'John', en: "I'm John. Nice to meet you, Ana.", es: 'Soy John. Mucho gusto, Ana.' },
          { quien: 'Ana', en: 'Nice to meet you, too. Where are you from?', es: 'Igualmente. ¿De dónde eres?' },
          { quien: 'John', en: "I'm from California. How are you today?", es: 'Soy de California. ¿Cómo estás hoy?' },
          { quien: 'Ana', en: "I'm fine, thank you. And you?", es: 'Estoy bien, gracias. ¿Y tú?' },
          { quien: 'John', en: "I'm great, thanks!", es: '¡Muy bien, gracias!' },
          { quien: 'Ana', en: 'See you later, John!', es: '¡Nos vemos luego, John!' },
          { quien: 'John', en: 'Goodbye, Ana!', es: '¡Adiós, Ana!' }
        ]
      },
      {
        tipo: 'tip',
        titulo: 'Consejo para practicar',
        texto: 'Escucha el diálogo varias veces y repítelo en voz alta. Después cambia los nombres y los lugares por los tuyos: así ya tienes tu propia presentación.'
      }
    ],
    actividades: [
      {
        id: 'a1',
        tipo: 'opcion',
        titulo: 'Elige la respuesta correcta',
        instrucciones: 'Lee cada situación y elige la mejor respuesta.',
        preguntas: [
          { p: 'Son las 9:00 de la mañana. ¿Cómo saludas?', opciones: ['Good night', 'Good morning', 'Good evening'], correcta: 1 },
          { p: 'Alguien te dice: "Nice to meet you." ¿Qué contestas?', opciones: ["I'm from Mexico.", 'Goodbye.', 'Nice to meet you, too.'], correcta: 2 },
          { p: 'Te preguntan: "What\'s your name?"', opciones: ['My name is Laura.', "I'm fine.", 'See you later.'], correcta: 0 },
          { p: 'Te preguntan: "How are you?"', opciones: ["I'm Carlos.", "I'm fine, thank you.", 'Good night.'], correcta: 1 },
          { p: 'She ___ from Rosarito.', opciones: ['am', 'are', 'is'], correcta: 2 },
          { p: 'They ___ my friends.', opciones: ['are', 'is', 'am'], correcta: 0 }
        ]
      },
      {
        id: 'a2',
        tipo: 'relacionar',
        titulo: 'Relaciona inglés y español',
        instrucciones: 'Elige el significado en español de cada frase.',
        pares: [
          ['Good afternoon', 'Buenas tardes'],
          ['See you later', 'Nos vemos luego'],
          ['Nice to meet you', 'Mucho gusto'],
          ['Where are you from?', '¿De dónde eres?'],
          ['Goodbye', 'Adiós'],
          ['I live in Rosarito', 'Vivo en Rosarito']
        ]
      },
      {
        id: 'a3',
        tipo: 'completar',
        titulo: 'Completa con am, is o are',
        instrucciones: 'Escribe la forma correcta del verbo "to be" en cada espacio.',
        preguntas: [
          { p: 'I ___ a student.', r: ['am'] },
          { p: 'You ___ my teacher.', r: ['are'] },
          { p: 'He ___ from Ensenada.', r: ['is'] },
          { p: 'We ___ friends.', r: ['are'] },
          { p: 'It ___ a beautiful day.', r: ['is'] },
          { p: 'My name ___ Sofía.', r: ['is'] }
        ]
      },
      {
        id: 'a4',
        tipo: 'ordenar',
        titulo: 'Ordena las palabras',
        instrucciones: 'Toca las palabras en el orden correcto para formar la oración. Si te equivocas, toca la palabra otra vez para regresarla.',
        preguntas: [
          { r: 'My name is Pedro' },
          { r: 'How are you' },
          { r: 'Where are you from' },
          { r: 'Nice to meet you' },
          { r: 'I live in Rosarito' }
        ]
      },
      {
        id: 'a5',
        tipo: 'escritura',
        titulo: 'Preséntate en inglés',
        instrucciones: 'Escribe de 4 a 6 oraciones: saluda, di tu nombre, de dónde eres, dónde vives y despídete. Tu maestro la revisará y te dejará observaciones.',
        ejemplo: "Hello! My name is Laura. I'm from Sinaloa. I live in Rosarito. I'm a student. See you later!"
      }
    ]
  };

// --- Contenido que estaba en la Unidad 1 y ahora pertenece a otras unidades ---
// Profesiones y oficios: Unidad 7 (At Work)
const OFICIOS_U7 = [
  {
    tipo: 'vocab',
    titulo: 'Profesiones y oficios en Rosarito',
    items: [
      { en: 'waiter / waitress', es: 'mesero / mesera' },
      { en: 'cook', es: 'cocinero / cocinera' },
      { en: 'bartender', es: 'cantinero / bartender' },
      { en: 'receptionist', es: 'recepcionista' },
      { en: 'housekeeper', es: 'camarista (en hotel)' },
      { en: 'tour guide', es: 'guía de turistas' },
      { en: 'salesperson', es: 'vendedor / vendedora' },
      { en: 'fisherman', es: 'pescador' },
      { en: 'taxi driver', es: 'taxista' },
      { en: 'security guard', es: 'guardia de seguridad' }
    ]
  },
  {
    tipo: 'vocab',
    titulo: 'Oficios de las Misiones Culturales',
    items: [
      { en: 'carpenter', es: 'carpintero / carpintera' },
      { en: 'welder', es: 'herrero / soldador' },
      { en: 'electrician', es: 'electricista' },
      { en: 'plumber', es: 'plomero / plomera' },
      { en: 'seamstress / tailor', es: 'costurera / sastre (corte y confección)' },
      { en: 'hairdresser', es: 'estilista (cultora de belleza)' },
      { en: 'baker', es: 'panadero / repostero' },
      { en: 'mechanic', es: 'mecánico / mecánica' },
      { en: 'nurse', es: 'enfermero / enfermera' },
      { en: 'musician', es: 'músico / música' }
    ]
  },
  {
    tipo: 'vocab',
    titulo: 'Para hablar de tu trabajo',
    items: [
      { en: 'What do you do?', es: '¿A qué te dedicas?' },
      { en: "I'm a waitress.", es: 'Soy mesera.' },
      { en: "I'm an electrician.", es: 'Soy electricista.' },
      { en: 'I work at a hotel.', es: 'Trabajo en un hotel.' },
      { en: "I'm a student at the Misión Cultural.", es: 'Soy estudiante en la Misión Cultural.' }
    ]
  },
  {
    tipo: 'tip',
    titulo: '¿A o An?',
    texto: 'En inglés, antes de una profesión siempre va "a" o "an" (en español no lo usamos: "soy mesera"). Usa "an" cuando la palabra empieza con sonido de vocal: an electrician. Usa "a" en los demás casos: a cook, a nurse, a mechanic.'
  }
];
const PRACTICA_OFICIOS_U7 = {
    id: 'a6',
    tipo: 'opcion',
    titulo: '¿A qué se dedica?',
    instrucciones: 'Lee la descripción y elige la profesión u oficio correcto. En las últimas preguntas elige entre "a" y "an".',
    preguntas: [
      { p: 'Trabaja en un restaurante y lleva la comida a las mesas.', opciones: ['plumber', 'waiter', 'nurse'], correcta: 1 },
      { p: 'Arregla la instalación eléctrica de las casas.', opciones: ['electrician', 'baker', 'tour guide'], correcta: 0 },
      { p: 'Corta y peina el cabello.', opciones: ['carpenter', 'fisherman', 'hairdresser'], correcta: 2 },
      { p: 'Hace muebles de madera.', opciones: ['carpenter', 'receptionist', 'mechanic'], correcta: 0 },
      { p: 'Recibe a los huéspedes en el hotel.', opciones: ['welder', 'receptionist', 'cook'], correcta: 1 },
      { p: 'Repara coches.', opciones: ['seamstress', 'bartender', 'mechanic'], correcta: 2 },
      { p: 'Hace pan y pasteles.', opciones: ['baker', 'taxi driver', 'security guard'], correcta: 0 },
      { p: 'Lleva a los turistas a conocer la ciudad.', opciones: ['nurse', 'tour guide', 'plumber'], correcta: 1 },
      { p: "I'm ___ electrician.", opciones: ['a', 'an'], correcta: 1 },
      { p: 'She is ___ nurse.', opciones: ['a', 'an'], correcta: 0 },
      { p: 'Te preguntan: "What do you do?"', opciones: ["I'm fine, thank you.", "I'm from Rosarito.", "I'm a cook."], correcta: 2 }
    ]
  };
// Diálogo del restaurante: Unidad 5 (Food & Restaurants)
const DIALOGO_RESTAURANTE_U5 = {
    tipo: 'dialogo',
    titulo: 'Diálogo: Bienvenida en un restaurante de Rosarito',
    contexto: 'Ana trabaja en un restaurante frente al mar. Llega un turista llamado John.',
    lineas: [
      { quien: 'Ana', en: 'Good afternoon! Welcome to Rosarito.', es: '¡Buenas tardes! Bienvenido a Rosarito.' },
      { quien: 'John', en: 'Hi! Thank you.', es: '¡Hola! Gracias.' },
      { quien: 'Ana', en: "My name is Ana. What's your name?", es: 'Me llamo Ana. ¿Cómo te llamas?' },
      { quien: 'John', en: "I'm John. Nice to meet you, Ana.", es: 'Soy John. Mucho gusto, Ana.' },
      { quien: 'Ana', en: 'Nice to meet you, too. Where are you from?', es: 'Igualmente. ¿De dónde eres?' },
      { quien: 'John', en: "I'm from California. How are you today?", es: 'Soy de California. ¿Cómo estás hoy?' },
      { quien: 'Ana', en: "I'm fine, thank you. And you?", es: 'Estoy bien, gracias. ¿Y tú?' },
      { quien: 'John', en: "I'm great, thanks! What do you do?", es: '¡Muy bien, gracias! ¿A qué te dedicas?' },
      { quien: 'Ana', en: "I'm a waitress. And you?", es: 'Soy mesera. ¿Y tú?' },
      { quien: 'John', en: "I'm a teacher.", es: 'Soy maestro.' }
    ]
  };

// Datos de la Unidad 1 que vienen del cuadernillo
const U1_CUADERNILLO = {
  "id": "u1",
  "numero": 1,
  "titulo": "Greetings & Introductions",
  "tituloEs": "Saludos y presentaciones",
  "trimestre": 1,
  "paginas": {
    "inicio": 5,
    "fin": 11,
    "vocab": 5,
    "gram": 6,
    "dial": 7,
    "auto": 11
  },
  "material": [
    {
      "tipo": "intro",
      "texto": "En esta unidad vas a aprender a saludar, presentarte y despedirte en inglés. Son las primeras frases que usarás con cualquier turista, cliente o compañero."
    },
    {
      "tipo": "metas",
      "titulo": "Al terminar esta unidad podrás:",
      "items": [
        "Saludar y despedirme según la hora del día.",
        "Presentarme: decir mi nombre, de dónde soy y dónde vivo.",
        "Usar el verbo to be (ser / estar) con I, you, he, she, we y they."
      ]
    },
    {
      "tipo": "vocab",
      "titulo": "Saludos y despedidas",
      "items": [
        {
          "en": "Hello",
          "es": "Hola"
        },
        {
          "en": "Hi",
          "es": "Hola (más informal)"
        },
        {
          "en": "Good morning",
          "es": "Buenos días"
        },
        {
          "en": "Good afternoon",
          "es": "Buenas tardes"
        },
        {
          "en": "Good evening",
          "es": "Buenas noches (al llegar)"
        },
        {
          "en": "Good night",
          "es": "Buenas noches (al despedirse)"
        },
        {
          "en": "Goodbye / Bye",
          "es": "Adiós"
        },
        {
          "en": "See you later",
          "es": "Nos vemos luego"
        },
        {
          "en": "See you tomorrow",
          "es": "Nos vemos mañana"
        }
      ],
      "pagina": 5
    },
    {
      "tipo": "vocab",
      "titulo": "Para presentarte",
      "items": [
        {
          "en": "What's your name?",
          "es": "¿Cómo te llamas?"
        },
        {
          "en": "My name is Laura.",
          "es": "Me llamo Laura."
        },
        {
          "en": "Nice to meet you.",
          "es": "Mucho gusto."
        },
        {
          "en": "Nice to meet you, too.",
          "es": "Igualmente."
        },
        {
          "en": "How are you?",
          "es": "¿Cómo estás?"
        },
        {
          "en": "I'm fine, thank you.",
          "es": "Estoy bien, gracias."
        },
        {
          "en": "And you?",
          "es": "¿Y tú?"
        },
        {
          "en": "Where are you from?",
          "es": "¿De dónde eres?"
        },
        {
          "en": "I'm from Mexico.",
          "es": "Soy de México."
        },
        {
          "en": "I live in Rosarito.",
          "es": "Vivo en Rosarito."
        },
        {
          "en": "What do you do?",
          "es": "¿A qué te dedicas?"
        },
        {
          "en": "I'm a waitress.",
          "es": "Soy mesera."
        }
      ]
    },
    {
      "tipo": "vocab",
      "titulo": "Profesiones y oficios",
      "items": [
        {
          "en": "waiter / waitress",
          "es": "mesero / mesera"
        },
        {
          "en": "cook",
          "es": "cocinero(a)"
        },
        {
          "en": "receptionist",
          "es": "recepcionista"
        },
        {
          "en": "tour guide",
          "es": "guía de turistas"
        },
        {
          "en": "salesperson",
          "es": "vendedor(a)"
        },
        {
          "en": "fisherman",
          "es": "pescador"
        },
        {
          "en": "taxi driver",
          "es": "taxista"
        },
        {
          "en": "carpenter",
          "es": "carpintero(a)"
        },
        {
          "en": "electrician",
          "es": "electricista"
        },
        {
          "en": "hairdresser",
          "es": "estilista"
        },
        {
          "en": "baker",
          "es": "panadero(a)"
        },
        {
          "en": "mechanic",
          "es": "mecánico(a)"
        },
        {
          "en": "nurse",
          "es": "enfermero(a)"
        },
        {
          "en": "teacher",
          "es": "maestro(a)"
        },
        {
          "en": "student",
          "es": "estudiante"
        },
        {
          "en": "housewife",
          "es": "ama de casa"
        }
      ]
    },
    {
      "tipo": "gramatica",
      "titulo": "El verbo to be (ser / estar)",
      "explicacion": "En inglés, ser y estar son el mismo verbo: to be. Cambia según la persona. En la conversación casi siempre se usa la forma corta (contracción).",
      "encabezados": [
        "Inglés",
        "Significado"
      ],
      "filas": [
        [
          "I am  →  I'm",
          "Yo soy / estoy"
        ],
        [
          "You are  →  You're",
          "Tú eres / estás"
        ],
        [
          "He is  →  He's",
          "Él es / está"
        ],
        [
          "She is  →  She's",
          "Ella es / está"
        ],
        [
          "It is  →  It's",
          "Eso es / está"
        ],
        [
          "We are  →  We're",
          "Nosotros somos / estamos"
        ],
        [
          "They are  →  They're",
          "Ellos son / están"
        ]
      ],
      "pagina": 6
    },
    {
      "tipo": "gramatica",
      "titulo": "Negativo y pregunta",
      "explicacion": "Para negar se agrega not. Para preguntar, el verbo va antes de la persona.",
      "encabezados": [
        "Inglés",
        "Significado"
      ],
      "filas": [
        [
          "I'm not a cook.",
          "No soy cocinero."
        ],
        [
          "She isn't from Tijuana.",
          "Ella no es de Tijuana."
        ],
        [
          "Are you a student?  –  Yes, I am.",
          "¿Eres estudiante? – Sí."
        ],
        [
          "Is he a mechanic?  –  No, he isn't.",
          "¿Él es mecánico? – No."
        ]
      ]
    },
    {
      "tipo": "tip",
      "titulo": "Good evening o Good night",
      "texto": "Las dos significan «buenas noches». Good evening se usa para saludar al llegar; Good night solo para despedirse o antes de dormir."
    },
    {
      "tipo": "tip",
      "titulo": "¿A o an?",
      "texto": "Antes de una profesión siempre va a o an: I'm a cook. Usa an si la palabra empieza con sonido de vocal: I'm an electrician."
    },
    {
      "tipo": "dialogo",
      "titulo": "Diálogo: En un restaurante de Rosarito",
      "contexto": "Ana trabaja en un restaurante frente al mar. Llega un turista llamado John.",
      "pagina": 7,
      "lineas": [
        {
          "quien": "Ana",
          "en": "Good afternoon! Welcome to Rosarito.",
          "es": "¡Buenas tardes! Bienvenido a Rosarito."
        },
        {
          "quien": "John",
          "en": "Hi! Thank you.",
          "es": "¡Hola! Gracias."
        },
        {
          "quien": "Ana",
          "en": "My name is Ana. What's your name?",
          "es": "Me llamo Ana. ¿Cómo te llamas?"
        },
        {
          "quien": "John",
          "en": "I'm John. Nice to meet you, Ana.",
          "es": "Soy John. Mucho gusto, Ana."
        },
        {
          "quien": "Ana",
          "en": "Nice to meet you, too. Where are you from?",
          "es": "Igualmente. ¿De dónde eres?"
        },
        {
          "quien": "John",
          "en": "I'm from California. How are you today?",
          "es": "Soy de California. ¿Cómo estás hoy?"
        },
        {
          "quien": "Ana",
          "en": "I'm fine, thank you. And you?",
          "es": "Estoy bien, gracias. ¿Y tú?"
        },
        {
          "quien": "John",
          "en": "I'm great, thanks! What do you do?",
          "es": "¡Muy bien, gracias! ¿A qué te dedicas?"
        },
        {
          "quien": "Ana",
          "en": "I'm a waitress. And you?",
          "es": "Soy mesera. ¿Y tú?"
        },
        {
          "quien": "John",
          "en": "I'm a teacher.",
          "es": "Soy maestro."
        }
      ]
    },
    {
      "tipo": "tip",
      "titulo": "Actividad oral en clase: Habla con tu compañero",
      "texto": "1) Lean el diálogo de la unidad en voz alta, cada quien con un personaje. 2) Repítanlo cambiando los nombres y el lugar por los suyos. 3) Presenta a tu compañero al grupo: «This is Juan. He is from Rosarito.»",
      "pagina": 11
    }
  ],
  "actividades": [
    {
      "id": "cA",
      "titulo": "Relaciona inglés y español",
      "cuadernillo": {
        "pagina": 8,
        "letra": "A"
      },
      "tipo": "relacionar",
      "instrucciones": "Elige la opción correcta para cada una.",
      "pares": [
        [
          "Good morning",
          "Buenos días"
        ],
        [
          "See you later",
          "Nos vemos luego"
        ],
        [
          "Nice to meet you",
          "Mucho gusto"
        ],
        [
          "Good night",
          "Buenas noches (al despedirse)"
        ],
        [
          "What's your name?",
          "¿Cómo te llamas?"
        ],
        [
          "Where are you from?",
          "¿De dónde eres?"
        ],
        [
          "Goodbye",
          "Adiós"
        ],
        [
          "I'm fine",
          "Estoy bien"
        ]
      ]
    },
    {
      "id": "cB",
      "titulo": "Completa con am, is o are",
      "cuadernillo": {
        "pagina": 8,
        "letra": "B"
      },
      "tipo": "completar",
      "instrucciones": "Escribe la forma correcta del verbo to be.",
      "preguntas": [
        {
          "p": "I ___ Ana.",
          "r": [
            "am"
          ]
        },
        {
          "p": "She ___ a nurse.",
          "r": [
            "is"
          ]
        },
        {
          "p": "You ___ a good student.",
          "r": [
            "are"
          ]
        },
        {
          "p": "We ___ from Rosarito.",
          "r": [
            "are"
          ]
        },
        {
          "p": "He ___ a taxi driver.",
          "r": [
            "is"
          ]
        },
        {
          "p": "They ___ waiters.",
          "r": [
            "are"
          ]
        },
        {
          "p": "It ___ a hotel.",
          "r": [
            "is"
          ]
        },
        {
          "p": "I ___ fine, thank you.",
          "r": [
            "am"
          ]
        }
      ],
      "banco": [
        "am",
        "is",
        "are"
      ]
    },
    {
      "id": "cC",
      "titulo": "Elige la respuesta correcta",
      "cuadernillo": {
        "pagina": 9,
        "letra": "C"
      },
      "tipo": "opcion",
      "instrucciones": "Elige la respuesta correcta.",
      "preguntas": [
        {
          "p": "You meet a tourist at 9:00 a.m. You say:",
          "opciones": [
            "Good night.",
            "Good morning.",
            "Good evening."
          ],
          "correcta": 1
        },
        {
          "p": "Someone says «Nice to meet you». You answer:",
          "opciones": [
            "Nice to meet you, too.",
            "I'm from Mexico.",
            "Goodbye."
          ],
          "correcta": 0
        },
        {
          "p": "«What do you do?»",
          "opciones": [
            "I'm Ana.",
            "I'm a cook.",
            "I'm fine."
          ],
          "correcta": 1
        },
        {
          "p": "«How are you?»",
          "opciones": [
            "I'm fine, thanks.",
            "I'm a nurse.",
            "I'm from Tijuana."
          ],
          "correcta": 0
        },
        {
          "p": "He is ___ electrician.",
          "opciones": [
            "a",
            "an",
            "the"
          ],
          "correcta": 1
        },
        {
          "p": "You leave a party at 11:00 p.m. You say:",
          "opciones": [
            "Good evening.",
            "Good afternoon.",
            "Good night."
          ],
          "correcta": 2
        }
      ]
    },
    {
      "id": "cD",
      "titulo": "Ordena las palabras",
      "cuadernillo": {
        "pagina": 10,
        "letra": "D"
      },
      "tipo": "ordenar",
      "instrucciones": "Toca las palabras en el orden correcto para formar la oración. Si te equivocas, toca la palabra otra vez para regresarla.",
      "preguntas": [
        {
          "r": "My name is Laura"
        },
        {
          "r": "Where are you from"
        },
        {
          "r": "I am a carpenter"
        },
        {
          "r": "She is from California"
        },
        {
          "r": "Nice to meet you, too"
        }
      ]
    },
    {
      "id": "cE",
      "titulo": "Preséntate en inglés",
      "cuadernillo": {
        "pagina": 10,
        "letra": "E"
      },
      "tipo": "escritura",
      "instrucciones": "Escribe tu presentación: saludo, nombre, de dónde eres, dónde vives y a qué te dedicas.",
      "ejemplo": "Hello! My name is ______. I'm from ______. I live in ______. I'm a ______."
    }
  ]
};

U1.trimestre = 1;
U1.paginas = U1_CUADERNILLO.paginas;
for (const b of U1.material) {
  if (b.tipo === 'vocab' && !U1.material.some(x => x.pagina === U1.paginas.vocab)) b.pagina = U1.paginas.vocab;
  if (b.tipo === 'gramatica' && !b.pagina) b.pagina = U1.paginas.gram;
  if (b.tipo === 'dialogo') b.pagina = U1.paginas.dial;
}
U1.material.splice(1, 0, U1_CUADERNILLO.material.find(b => b.tipo === 'metas'));
U1.material.push(...U1_CUADERNILLO.material.filter(b => b.tipo === 'tip' && b.pagina));
U1.actividades = [
  ...U1_CUADERNILLO.actividades,
  ...U1.actividades.map(a => ({ ...a, extra: true }))
];

export const UNIDADES = [
  U1,
  {
    "id": "u2",
    "numero": 2,
    "titulo": "Numbers & Age",
    "tituloEs": "Números y edad",
    "trimestre": 1,
    "paginas": {
      "inicio": 12,
      "fin": 17,
      "vocab": 12,
      "gram": 13,
      "dial": 14,
      "auto": 17
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "Los números están en todas partes: precios, teléfonos, direcciones y edades. En esta unidad aprenderás a contar, deletrear tu nombre y dar tus datos personales."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Contar del 0 al 100 y decir mi edad.",
          "Deletrear mi nombre y dar mi teléfono y mi correo electrónico.",
          "Pedir y dar datos personales para llenar una ficha."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Números del 0 al 20",
        "items": [
          {
            "en": "zero",
            "es": "0"
          },
          {
            "en": "one",
            "es": "1"
          },
          {
            "en": "two",
            "es": "2"
          },
          {
            "en": "three",
            "es": "3"
          },
          {
            "en": "four",
            "es": "4"
          },
          {
            "en": "five",
            "es": "5"
          },
          {
            "en": "six",
            "es": "6"
          },
          {
            "en": "seven",
            "es": "7"
          },
          {
            "en": "eight",
            "es": "8"
          },
          {
            "en": "nine",
            "es": "9"
          },
          {
            "en": "ten",
            "es": "10"
          },
          {
            "en": "eleven",
            "es": "11"
          },
          {
            "en": "twelve",
            "es": "12"
          },
          {
            "en": "thirteen",
            "es": "13"
          },
          {
            "en": "fourteen",
            "es": "14"
          },
          {
            "en": "fifteen",
            "es": "15"
          },
          {
            "en": "sixteen",
            "es": "16"
          },
          {
            "en": "seventeen",
            "es": "17"
          },
          {
            "en": "eighteen",
            "es": "18"
          },
          {
            "en": "nineteen",
            "es": "19"
          },
          {
            "en": "twenty",
            "es": "20"
          }
        ],
        "pagina": 12
      },
      {
        "tipo": "vocab",
        "titulo": "Decenas y otros números",
        "items": [
          {
            "en": "thirty",
            "es": "30"
          },
          {
            "en": "forty",
            "es": "40"
          },
          {
            "en": "fifty",
            "es": "50"
          },
          {
            "en": "sixty",
            "es": "60"
          },
          {
            "en": "seventy",
            "es": "70"
          },
          {
            "en": "eighty",
            "es": "80"
          },
          {
            "en": "ninety",
            "es": "90"
          },
          {
            "en": "one hundred",
            "es": "100"
          },
          {
            "en": "twenty-one",
            "es": "21"
          },
          {
            "en": "thirty-five",
            "es": "35"
          },
          {
            "en": "forty-eight",
            "es": "48"
          },
          {
            "en": "ninety-nine",
            "es": "99"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "El abecedario (cómo suena cada letra)",
        "items": [
          {
            "en": "A",
            "es": "suena «ei»"
          },
          {
            "en": "B",
            "es": "suena «bi»"
          },
          {
            "en": "C",
            "es": "suena «si»"
          },
          {
            "en": "D",
            "es": "suena «di»"
          },
          {
            "en": "E",
            "es": "suena «i»"
          },
          {
            "en": "F",
            "es": "suena «ef»"
          },
          {
            "en": "G",
            "es": "suena «yi»"
          },
          {
            "en": "H",
            "es": "suena «eich»"
          },
          {
            "en": "I",
            "es": "suena «ai»"
          },
          {
            "en": "J",
            "es": "suena «yei»"
          },
          {
            "en": "K",
            "es": "suena «kei»"
          },
          {
            "en": "L",
            "es": "suena «el»"
          },
          {
            "en": "M",
            "es": "suena «em»"
          },
          {
            "en": "N",
            "es": "suena «en»"
          },
          {
            "en": "O",
            "es": "suena «ou»"
          },
          {
            "en": "P",
            "es": "suena «pi»"
          },
          {
            "en": "Q",
            "es": "suena «kiu»"
          },
          {
            "en": "R",
            "es": "suena «ar»"
          },
          {
            "en": "S",
            "es": "suena «es»"
          },
          {
            "en": "T",
            "es": "suena «ti»"
          },
          {
            "en": "U",
            "es": "suena «iu»"
          },
          {
            "en": "V",
            "es": "suena «vi»"
          },
          {
            "en": "W",
            "es": "suena «dábel iu»"
          },
          {
            "en": "X",
            "es": "suena «eks»"
          },
          {
            "en": "Y",
            "es": "suena «uai»"
          },
          {
            "en": "Z",
            "es": "suena «zi»"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Datos personales",
        "items": [
          {
            "en": "first name",
            "es": "nombre"
          },
          {
            "en": "last name",
            "es": "apellido"
          },
          {
            "en": "age",
            "es": "edad"
          },
          {
            "en": "address",
            "es": "domicilio"
          },
          {
            "en": "phone number",
            "es": "número de teléfono"
          },
          {
            "en": "email address",
            "es": "correo electrónico"
          },
          {
            "en": "How old are you?",
            "es": "¿Cuántos años tienes?"
          },
          {
            "en": "I'm 25 (years old).",
            "es": "Tengo 25 años."
          },
          {
            "en": "How do you spell it?",
            "es": "¿Cómo se escribe?"
          },
          {
            "en": "What's your phone number?",
            "es": "¿Cuál es tu teléfono?"
          },
          {
            "en": "@  =  at",
            "es": "arroba"
          },
          {
            "en": ".  =  dot",
            "es": "punto"
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "La edad se dice con to be",
        "explicacion": "En español «tenemos» años, pero en inglés «somos» años: se usa el verbo to be, nunca have.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "How old are you?  –  I'm 34.",
            "¿Cuántos años tienes? – Tengo 34."
          ],
          [
            "How old is she?  –  She's 19.",
            "¿Cuántos años tiene ella? – 19."
          ],
          [
            "How old is he?  –  He's 50 years old.",
            "¿Cuántos años tiene él? – 50."
          ],
          [
            "How old are they?  –  They're 8 and 10.",
            "¿Cuántos años tienen? – 8 y 10."
          ],
          [
            "Is he 20?  –  No, he isn't. He's 21.",
            "¿Tiene 20? – No. Tiene 21."
          ]
        ],
        "pagina": 13
      },
      {
        "tipo": "gramatica",
        "titulo": "Teléfonos y correos",
        "explicacion": "Los teléfonos se dicen número por número; el 0 se dice «zero» u «oh».",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "661 123 4567",
            "six-six-one, one-two-three, four-five-six-seven"
          ],
          [
            "ana.ruiz@mail.com",
            "ana dot ruiz at mail dot com"
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "¿Thirteen o thirty?",
        "texto": "En los números terminados en -teen la fuerza de la voz va al final (thir-TEEN). En los terminados en -ty va al principio (THIR-ty)."
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: En la inscripción de la Misión Cultural",
        "contexto": "Pedro se inscribe al curso de inglés. La secretaria llena su ficha.",
        "pagina": 14,
        "lineas": [
          {
            "quien": "Secretary",
            "en": "Good morning. What's your name, please?",
            "es": "Buenos días. ¿Cómo se llama, por favor?"
          },
          {
            "quien": "Pedro",
            "en": "My name is Pedro Ramírez.",
            "es": "Me llamo Pedro Ramírez."
          },
          {
            "quien": "Secretary",
            "en": "How do you spell your last name?",
            "es": "¿Cómo se escribe su apellido?"
          },
          {
            "quien": "Pedro",
            "en": "R-A-M-I-R-E-Z.",
            "es": "R-A-M-I-R-E-Z."
          },
          {
            "quien": "Secretary",
            "en": "Thank you. How old are you?",
            "es": "Gracias. ¿Cuántos años tiene?"
          },
          {
            "quien": "Pedro",
            "en": "I'm thirty-two years old.",
            "es": "Tengo treinta y dos años."
          },
          {
            "quien": "Secretary",
            "en": "What's your phone number?",
            "es": "¿Cuál es su número de teléfono?"
          },
          {
            "quien": "Pedro",
            "en": "It's 661 123 4567.",
            "es": "Es el 661 123 4567."
          },
          {
            "quien": "Secretary",
            "en": "And your email address?",
            "es": "¿Y su correo electrónico?"
          },
          {
            "quien": "Pedro",
            "en": "It's pedro.ramirez@mail.com.",
            "es": "Es pedro.ramirez@mail.com."
          },
          {
            "quien": "Secretary",
            "en": "Perfect. Welcome to the English class!",
            "es": "Perfecto. ¡Bienvenido a la clase de inglés!"
          },
          {
            "quien": "Pedro",
            "en": "Thank you!",
            "es": "¡Gracias!"
          }
        ]
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "Relaciona la palabra con el número",
        "cuadernillo": {
          "pagina": 15,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "fifteen",
            "15"
          ],
          [
            "fifty",
            "50"
          ],
          [
            "thirteen",
            "13"
          ],
          [
            "thirty",
            "30"
          ],
          [
            "eighteen",
            "18"
          ],
          [
            "eighty",
            "80"
          ],
          [
            "twenty-seven",
            "27"
          ],
          [
            "ninety-nine",
            "99"
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Escucha y escribe",
        "cuadernillo": {
          "pagina": 15,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Toca ▶ para escuchar cada número y escríbelo con número (por ejemplo: 14).",
        "preguntas": [
          {
            "p": "___",
            "audio": "fourteen",
            "r": [
              "14"
            ]
          },
          {
            "p": "___",
            "audio": "forty",
            "r": [
              "40"
            ]
          },
          {
            "p": "___",
            "audio": "sixteen",
            "r": [
              "16"
            ]
          },
          {
            "p": "___",
            "audio": "sixty",
            "r": [
              "60"
            ]
          },
          {
            "p": "___",
            "audio": "twenty-three",
            "r": [
              "23"
            ]
          },
          {
            "p": "___",
            "audio": "seventy-seven",
            "r": [
              "77"
            ]
          },
          {
            "p": "___",
            "audio": "one hundred",
            "r": [
              "100"
            ]
          },
          {
            "p": "___",
            "audio": "fifty-eight",
            "r": [
              "58"
            ]
          }
        ]
      },
      {
        "id": "cC",
        "titulo": "Escribe el número con letra",
        "cuadernillo": {
          "pagina": 15,
          "letra": "C"
        },
        "tipo": "completar",
        "instrucciones": "Escribe en inglés el número que ves.",
        "preguntas": [
          {
            "p": "7 = ___",
            "r": [
              "seven"
            ]
          },
          {
            "p": "11 = ___",
            "r": [
              "eleven"
            ]
          },
          {
            "p": "20 = ___",
            "r": [
              "twenty"
            ]
          },
          {
            "p": "33 = ___",
            "r": [
              "thirty-three"
            ]
          },
          {
            "p": "45 = ___",
            "r": [
              "forty-five"
            ]
          },
          {
            "p": "68 = ___",
            "r": [
              "sixty-eight"
            ]
          },
          {
            "p": "90 = ___",
            "r": [
              "ninety"
            ]
          },
          {
            "p": "100 = ___",
            "r": [
              "one hundred"
            ]
          }
        ]
      },
      {
        "id": "cD",
        "titulo": "Elige la respuesta correcta",
        "cuadernillo": {
          "pagina": 16,
          "letra": "D"
        },
        "tipo": "opcion",
        "instrucciones": "Elige la respuesta correcta.",
        "preguntas": [
          {
            "p": "«How old are you?»",
            "opciones": [
              "I'm 25 years old.",
              "I have 25 years.",
              "I'm 25 years."
            ],
            "correcta": 0
          },
          {
            "p": "How old ___ your mother?",
            "opciones": [
              "are",
              "is",
              "am"
            ],
            "correcta": 1
          },
          {
            "p": "In an email, @ is:",
            "opciones": [
              "dot",
              "at",
              "and"
            ],
            "correcta": 1
          },
          {
            "p": "«How do you spell your name?»",
            "opciones": [
              "M-A-R-Í-A.",
              "I'm María.",
              "María is 20."
            ],
            "correcta": 0
          },
          {
            "p": "They ___ 18 years old.",
            "opciones": [
              "is",
              "am",
              "are"
            ],
            "correcta": 2
          },
          {
            "p": "«What's your phone number?»",
            "opciones": [
              "It's 664 555 0198.",
              "I'm from Tijuana.",
              "It's a phone."
            ],
            "correcta": 0
          }
        ]
      },
      {
        "id": "cE",
        "titulo": "Llena tu ficha de inscripción",
        "cuadernillo": {
          "pagina": 16,
          "letra": "E"
        },
        "tipo": "escritura",
        "instrucciones": "Escribe tus datos en inglés, uno por renglón, como en el ejemplo.",
        "ejemplo": "First name: María\nLast name: López\nAge: 30\nCity: Rosarito\nPhone number: 661 555 1234\nEmail address: maria.lopez@mail.com\nJob: I'm a cook."
      },
      {
        "id": "cF",
        "titulo": "Entrevista a tres compañeros",
        "cuadernillo": {
          "pagina": 17,
          "letra": "F"
        },
        "tipo": "escritura",
        "instrucciones": "Pregunta a tres compañeros y completa la tabla. Pídeles que deletreen su nombre: «How do you spell it?» En la plataforma, escribe tus resultados en el cuadro de texto.",
        "ejemplo": "1. Name: J-U-A-N (Juan) · Age: 25 · Phone number: 661 555 0101\n2. …\n3. …"
      }
    ]
  },
  {
    "id": "u3",
    "numero": 3,
    "titulo": "My Family",
    "tituloEs": "Mi familia",
    "trimestre": 1,
    "paginas": {
      "inicio": 18,
      "fin": 24,
      "vocab": 18,
      "gram": 19,
      "dial": 19,
      "auto": 23
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "Hablar de la familia es una de las conversaciones más comunes. En esta unidad aprenderás a presentar a tu familia y a describir a las personas."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Presentar a los miembros de mi familia.",
          "Usar my, your, his, her, our y their, y los verbos have / has.",
          "Describir a una persona: cómo es físicamente y cómo es su carácter."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "La familia",
        "items": [
          {
            "en": "mother / mom",
            "es": "mamá"
          },
          {
            "en": "father / dad",
            "es": "papá"
          },
          {
            "en": "parents",
            "es": "padres (papá y mamá)"
          },
          {
            "en": "husband",
            "es": "esposo"
          },
          {
            "en": "wife",
            "es": "esposa"
          },
          {
            "en": "son",
            "es": "hijo"
          },
          {
            "en": "daughter",
            "es": "hija"
          },
          {
            "en": "children / kids",
            "es": "hijos / niños"
          },
          {
            "en": "brother",
            "es": "hermano"
          },
          {
            "en": "sister",
            "es": "hermana"
          },
          {
            "en": "grandfather",
            "es": "abuelo"
          },
          {
            "en": "grandmother",
            "es": "abuela"
          },
          {
            "en": "uncle",
            "es": "tío"
          },
          {
            "en": "aunt",
            "es": "tía"
          },
          {
            "en": "cousin",
            "es": "primo(a)"
          },
          {
            "en": "grandchildren",
            "es": "nietos"
          }
        ],
        "pagina": 18
      },
      {
        "tipo": "vocab",
        "titulo": "Para describir a una persona",
        "items": [
          {
            "en": "tall",
            "es": "alto(a)"
          },
          {
            "en": "short",
            "es": "bajo(a)"
          },
          {
            "en": "young",
            "es": "joven"
          },
          {
            "en": "old",
            "es": "mayor / viejo"
          },
          {
            "en": "thin",
            "es": "delgado(a)"
          },
          {
            "en": "strong",
            "es": "fuerte"
          },
          {
            "en": "long hair",
            "es": "cabello largo"
          },
          {
            "en": "short hair",
            "es": "cabello corto"
          },
          {
            "en": "curly hair",
            "es": "cabello rizado"
          },
          {
            "en": "friendly",
            "es": "amigable"
          },
          {
            "en": "funny",
            "es": "chistoso(a)"
          },
          {
            "en": "kind",
            "es": "amable"
          },
          {
            "en": "hardworking",
            "es": "trabajador(a)"
          },
          {
            "en": "quiet",
            "es": "callado(a)"
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "Adjetivos posesivos",
        "explicacion": "En español decimos «su» para él, ella, usted y ellos. En inglés cada persona tiene su propia palabra.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I  →  my",
            "mi: my brother"
          ],
          [
            "you  →  your",
            "tu: your sister"
          ],
          [
            "he  →  his",
            "su (de él): his wife"
          ],
          [
            "she  →  her",
            "su (de ella): her husband"
          ],
          [
            "we  →  our",
            "nuestro: our teacher"
          ],
          [
            "they  →  their",
            "su (de ellos): their house"
          ]
        ],
        "pagina": 19
      },
      {
        "tipo": "gramatica",
        "titulo": "Have / has (tener)",
        "explicacion": "Con he, she e it se usa has. Con las demás personas se usa have.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I have two brothers.",
            "Tengo dos hermanos."
          ],
          [
            "She has a daughter.",
            "Ella tiene una hija."
          ],
          [
            "We have a big family.",
            "Tenemos una familia grande."
          ],
          [
            "He has short hair.",
            "Él tiene el cabello corto."
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "El apóstrofo de posesión",
        "texto": "Para decir «el hermano de Ana» se escribe Ana's brother: primero el dueño, luego 's y al final la cosa o persona."
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: Las fotos de Laura",
        "contexto": "Laura le enseña a su compañero Mike unas fotos de su familia.",
        "pagina": 19,
        "lineas": [
          {
            "quien": "Laura",
            "en": "Look, this is a photo of my family.",
            "es": "Mira, esta es una foto de mi familia."
          },
          {
            "quien": "Mike",
            "en": "Nice! Who is she?",
            "es": "¡Qué bonita! ¿Quién es ella?"
          },
          {
            "quien": "Laura",
            "en": "She's my mother. Her name is Rosa.",
            "es": "Es mi mamá. Se llama Rosa."
          },
          {
            "quien": "Mike",
            "en": "She's very young!",
            "es": "¡Se ve muy joven!"
          },
          {
            "quien": "Laura",
            "en": "Yes, she's 48. And this is my father, Luis. He's a fisherman.",
            "es": "Sí, tiene 48. Y este es mi papá, Luis. Es pescador."
          },
          {
            "quien": "Mike",
            "en": "Is this your brother?",
            "es": "¿Este es tu hermano?"
          },
          {
            "quien": "Laura",
            "en": "Yes, his name is Daniel. He's tall and funny.",
            "es": "Sí, se llama Daniel. Es alto y chistoso."
          },
          {
            "quien": "Mike",
            "en": "Do you have children?",
            "es": "¿Tienes hijos?"
          },
          {
            "quien": "Laura",
            "en": "Yes, I have a daughter. Her name is Sofi. She's 6.",
            "es": "Sí, tengo una hija. Se llama Sofi. Tiene 6 años."
          },
          {
            "quien": "Mike",
            "en": "What a beautiful family!",
            "es": "¡Qué familia tan bonita!"
          }
        ]
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "Relaciona inglés y español",
        "cuadernillo": {
          "pagina": 20,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "daughter",
            "hija"
          ],
          [
            "husband",
            "esposo"
          ],
          [
            "grandmother",
            "abuela"
          ],
          [
            "uncle",
            "tío"
          ],
          [
            "cousin",
            "primo(a)"
          ],
          [
            "parents",
            "padres"
          ],
          [
            "wife",
            "esposa"
          ],
          [
            "brother",
            "hermano"
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Completa con el posesivo correcto",
        "cuadernillo": {
          "pagina": 21,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Usa las palabras del recuadro.",
        "preguntas": [
          {
            "p": "I'm Pedro. ___ name is Pedro.",
            "r": [
              "My"
            ]
          },
          {
            "p": "This is Ana. ___ husband is a cook.",
            "r": [
              "Her"
            ]
          },
          {
            "p": "This is Luis. ___ sister is a nurse.",
            "r": [
              "His"
            ]
          },
          {
            "p": "We are students. ___ teacher is Carlos.",
            "r": [
              "Our"
            ]
          },
          {
            "p": "They are my cousins. ___ house is in Rosarito.",
            "r": [
              "Their"
            ]
          },
          {
            "p": "Are you Mike? Is this ___ phone?",
            "r": [
              "your"
            ]
          }
        ],
        "banco": [
          "my",
          "your",
          "his",
          "her",
          "our",
          "their"
        ]
      },
      {
        "id": "cC",
        "titulo": "Completa con have o has",
        "cuadernillo": {
          "pagina": 21,
          "letra": "C"
        },
        "tipo": "completar",
        "instrucciones": "Escribe have o has.",
        "preguntas": [
          {
            "p": "I ___ two sisters.",
            "r": [
              "have"
            ]
          },
          {
            "p": "She ___ a son.",
            "r": [
              "has"
            ]
          },
          {
            "p": "We ___ a big family.",
            "r": [
              "have"
            ]
          },
          {
            "p": "My father ___ three brothers.",
            "r": [
              "has"
            ]
          },
          {
            "p": "They ___ four children.",
            "r": [
              "have"
            ]
          },
          {
            "p": "He ___ curly hair.",
            "r": [
              "has"
            ]
          }
        ],
        "banco": [
          "have",
          "has"
        ]
      },
      {
        "id": "cD",
        "titulo": "Elige la respuesta correcta",
        "cuadernillo": {
          "pagina": 22,
          "letra": "D"
        },
        "tipo": "opcion",
        "instrucciones": "Elige la respuesta correcta.",
        "preguntas": [
          {
            "p": "My mother's mother is my ___.",
            "opciones": [
              "aunt",
              "grandmother",
              "sister"
            ],
            "correcta": 1
          },
          {
            "p": "My father's brother is my ___.",
            "opciones": [
              "uncle",
              "cousin",
              "son"
            ],
            "correcta": 0
          },
          {
            "p": "My uncle's son is my ___.",
            "opciones": [
              "brother",
              "nephew",
              "cousin"
            ],
            "correcta": 2
          },
          {
            "p": "This is Rosa. ___ husband is a mechanic.",
            "opciones": [
              "His",
              "Her",
              "Their"
            ],
            "correcta": 1
          },
          {
            "p": "The opposite of tall is:",
            "opciones": [
              "short",
              "young",
              "old"
            ],
            "correcta": 0
          }
        ]
      },
      {
        "id": "cE",
        "titulo": "Lee y contesta",
        "cuadernillo": {
          "pagina": 22,
          "letra": "E"
        },
        "tipo": "opcion",
        "instrucciones": "Lee el texto y elige True (verdadero) o False (falso).",
        "preguntas": [
          {
            "p": "Teresa is a nurse.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          },
          {
            "p": "Jorge is a carpenter.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "Teresa has three children.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          },
          {
            "p": "Lupita is 8 years old.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "Teresa's parents live in Rosarito.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          },
          {
            "p": "Her father is quiet.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          }
        ],
        "lectura": "Hi! My name is Teresa. I'm 35 years old and I live in Rosarito. I'm a hairdresser. My husband's name is Jorge. He's a carpenter. He's tall and very funny. We have two children: a son, Kevin, and a daughter, Lupita. Kevin is 12 and Lupita is 8. My parents live in Ensenada. My mother is kind and my father is quiet."
      },
      {
        "id": "cF",
        "titulo": "Mi familia",
        "cuadernillo": {
          "pagina": 23,
          "letra": "F"
        },
        "tipo": "escritura",
        "instrucciones": "Dibuja o pega una foto de tu familia en el recuadro. Después escribe 5 o 6 oraciones sobre ella.",
        "ejemplo": "This is my family. My mother's name is ______. She is ______. I have ______."
      }
    ]
  },
  {
    "id": "u4",
    "numero": 4,
    "titulo": "Daily Routine",
    "tituloEs": "Mi rutina diaria",
    "trimestre": 1,
    "paginas": {
      "inicio": 25,
      "fin": 31,
      "vocab": 25,
      "gram": 26,
      "dial": 26,
      "auto": 30
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "¿A qué hora te levantas? ¿Qué haces los domingos? En esta unidad aprenderás a decir la hora y a hablar de lo que haces todos los días."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Decir y preguntar la hora.",
          "Hablar de mi rutina diaria y de los días de la semana.",
          "Usar el presente simple con I, you, we y they: afirmativo, negativo y preguntas con do."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Los días de la semana",
        "items": [
          {
            "en": "Monday",
            "es": "lunes"
          },
          {
            "en": "Tuesday",
            "es": "martes"
          },
          {
            "en": "Wednesday",
            "es": "miércoles"
          },
          {
            "en": "Thursday",
            "es": "jueves"
          },
          {
            "en": "Friday",
            "es": "viernes"
          },
          {
            "en": "Saturday",
            "es": "sábado"
          },
          {
            "en": "Sunday",
            "es": "domingo"
          },
          {
            "en": "weekend",
            "es": "fin de semana"
          },
          {
            "en": "today",
            "es": "hoy"
          },
          {
            "en": "tomorrow",
            "es": "mañana"
          }
        ],
        "pagina": 25
      },
      {
        "tipo": "vocab",
        "titulo": "La hora",
        "items": [
          {
            "en": "What time is it?",
            "es": "¿Qué hora es?"
          },
          {
            "en": "It's seven o'clock.",
            "es": "Son las 7:00."
          },
          {
            "en": "It's seven thirty.",
            "es": "Son las 7:30."
          },
          {
            "en": "It's a quarter past seven.",
            "es": "Son las 7:15."
          },
          {
            "en": "It's a quarter to eight.",
            "es": "Son las 7:45 (cuarto para las 8)."
          },
          {
            "en": "in the morning",
            "es": "en la mañana"
          },
          {
            "en": "in the afternoon",
            "es": "en la tarde"
          },
          {
            "en": "in the evening",
            "es": "en la noche (temprano)"
          },
          {
            "en": "at night",
            "es": "en la noche"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Mi rutina",
        "items": [
          {
            "en": "wake up",
            "es": "despertar"
          },
          {
            "en": "get up",
            "es": "levantarse"
          },
          {
            "en": "take a shower",
            "es": "bañarse"
          },
          {
            "en": "get dressed",
            "es": "vestirse"
          },
          {
            "en": "have breakfast",
            "es": "desayunar"
          },
          {
            "en": "go to work",
            "es": "ir al trabajo"
          },
          {
            "en": "have lunch",
            "es": "comer"
          },
          {
            "en": "go home",
            "es": "ir a casa"
          },
          {
            "en": "cook dinner",
            "es": "hacer la cena"
          },
          {
            "en": "watch TV",
            "es": "ver la tele"
          },
          {
            "en": "study English",
            "es": "estudiar inglés"
          },
          {
            "en": "go to bed",
            "es": "acostarse"
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "Presente simple (I, you, we, they)",
        "explicacion": "Se usa para hablar de rutinas y cosas que pasan siempre. Para negar se usa don't y para preguntar se pone Do al principio.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I work every day.",
            "Trabajo todos los días."
          ],
          [
            "I don't work on Sunday.",
            "No trabajo el domingo."
          ],
          [
            "Do you work on Saturday?",
            "¿Trabajas el sábado?"
          ],
          [
            "Yes, I do.  /  No, I don't.",
            "Sí. / No."
          ],
          [
            "What time do you get up?",
            "¿A qué hora te levantas?"
          ]
        ],
        "pagina": 26
      },
      {
        "tipo": "gramatica",
        "titulo": "At, on, in para el tiempo",
        "explicacion": "At para la hora, on para los días e in para las partes del día (excepto at night).",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "at 7:00  ·  at night",
            "a las 7:00 · en la noche"
          ],
          [
            "on Monday  ·  on the weekend",
            "el lunes · el fin de semana"
          ],
          [
            "in the morning  ·  in the afternoon",
            "en la mañana · en la tarde"
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Don't",
        "texto": "Don't es la forma corta de do not: I don't work = I do not work. En la conversación casi siempre se usa don't."
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: Una semana ocupada",
        "contexto": "Rosa y Beto platican antes de la clase de inglés.",
        "pagina": 26,
        "lineas": [
          {
            "quien": "Rosa",
            "en": "What time do you get up, Beto?",
            "es": "¿A qué hora te levantas, Beto?"
          },
          {
            "quien": "Beto",
            "en": "I get up at five thirty.",
            "es": "Me levanto a las cinco y media."
          },
          {
            "quien": "Rosa",
            "en": "Wow, early!",
            "es": "¡Uy, qué temprano!"
          },
          {
            "quien": "Beto",
            "en": "Yes, I work at a hotel. I start at seven.",
            "es": "Sí, trabajo en un hotel. Entro a las siete."
          },
          {
            "quien": "Rosa",
            "en": "Do you work on weekends?",
            "es": "¿Trabajas los fines de semana?"
          },
          {
            "quien": "Beto",
            "en": "Yes, I do. I work on Saturday, but I don't work on Sunday.",
            "es": "Sí. Trabajo el sábado, pero no trabajo el domingo."
          },
          {
            "quien": "Rosa",
            "en": "What do you do on Sunday?",
            "es": "¿Qué haces el domingo?"
          },
          {
            "quien": "Beto",
            "en": "I go to the beach with my family. And you?",
            "es": "Voy a la playa con mi familia. ¿Y tú?"
          },
          {
            "quien": "Rosa",
            "en": "I study English and I cook for my family.",
            "es": "Estudio inglés y cocino para mi familia."
          }
        ]
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "Relaciona la hora",
        "cuadernillo": {
          "pagina": 27,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "7:00",
            "It's seven o'clock."
          ],
          [
            "7:30",
            "It's seven thirty."
          ],
          [
            "7:15",
            "It's a quarter past seven."
          ],
          [
            "7:45",
            "It's a quarter to eight."
          ],
          [
            "12:00",
            "It's twelve o'clock."
          ],
          [
            "9:30",
            "It's nine thirty."
          ],
          [
            "2:15",
            "It's a quarter past two."
          ],
          [
            "5:45",
            "It's a quarter to six."
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Completa con at, on o in",
        "cuadernillo": {
          "pagina": 28,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Escribe la preposición correcta.",
        "preguntas": [
          {
            "p": "I get up ___ 6:00.",
            "r": [
              "at"
            ]
          },
          {
            "p": "I don't work ___ Sunday.",
            "r": [
              "on"
            ]
          },
          {
            "p": "I study ___ the evening.",
            "r": [
              "in"
            ]
          },
          {
            "p": "We have lunch ___ 2:30.",
            "r": [
              "at"
            ]
          },
          {
            "p": "They go to the beach ___ Saturday.",
            "r": [
              "on"
            ]
          },
          {
            "p": "I watch TV ___ night.",
            "r": [
              "at"
            ]
          }
        ],
        "banco": [
          "at",
          "on",
          "in"
        ]
      },
      {
        "id": "cC",
        "titulo": "Elige la respuesta correcta",
        "cuadernillo": {
          "pagina": 28,
          "letra": "C"
        },
        "tipo": "opcion",
        "instrucciones": "Elige la respuesta correcta.",
        "preguntas": [
          {
            "p": "The day after Monday is:",
            "opciones": [
              "Sunday",
              "Tuesday",
              "Thursday"
            ],
            "correcta": 1
          },
          {
            "p": "Saturday and Sunday are the ___.",
            "opciones": [
              "weekend",
              "morning",
              "week"
            ],
            "correcta": 0
          },
          {
            "p": "I ___ breakfast at 8:00.",
            "opciones": [
              "have",
              "go",
              "take"
            ],
            "correcta": 0
          },
          {
            "p": "___ you work on Friday?",
            "opciones": [
              "Are",
              "Do",
              "Is"
            ],
            "correcta": 1
          },
          {
            "p": "«Do you watch TV?»  No, I ___.",
            "opciones": [
              "don't",
              "am not",
              "not"
            ],
            "correcta": 0
          },
          {
            "p": "It's 3:45.",
            "opciones": [
              "It's a quarter past three.",
              "It's a quarter to four.",
              "It's three fifteen."
            ],
            "correcta": 1
          }
        ]
      },
      {
        "id": "cD",
        "titulo": "Ordena las palabras",
        "cuadernillo": {
          "pagina": 29,
          "letra": "D"
        },
        "tipo": "ordenar",
        "instrucciones": "Toca las palabras en el orden correcto para formar la oración. Si te equivocas, toca la palabra otra vez para regresarla.",
        "preguntas": [
          {
            "r": "I get up at six o'clock"
          },
          {
            "r": "Do you work on Saturday"
          },
          {
            "r": "We don't watch TV in the morning"
          },
          {
            "r": "They go to bed at eleven"
          },
          {
            "r": "What time do you have lunch"
          }
        ]
      },
      {
        "id": "cE",
        "titulo": "Mi rutina",
        "cuadernillo": {
          "pagina": 29,
          "letra": "E"
        },
        "tipo": "escritura",
        "instrucciones": "Escribe tu rutina de un día normal: la hora y la actividad en inglés. En la plataforma, escribe tus resultados en el cuadro de texto.",
        "ejemplo": "6:00 – I get up.\n6:30 – I have breakfast.\n7:00 – I go to work.\n…"
      },
      {
        "id": "cF",
        "titulo": "Un día en mi vida",
        "cuadernillo": {
          "pagina": 30,
          "letra": "F"
        },
        "tipo": "escritura",
        "instrucciones": "Con la tabla anterior, escribe 6 oraciones sobre tu día.",
        "ejemplo": "I get up at ______. I have breakfast at ______. On Sunday I don't ______."
      },
      {
        "id": "cG",
        "titulo": "Entrevista: Do you…?",
        "cuadernillo": {
          "pagina": 30,
          "letra": "G"
        },
        "tipo": "escritura",
        "instrucciones": "Pregunta a dos compañeros. Escribe Yes o No. En la plataforma, escribe tus resultados en el cuadro de texto.",
        "ejemplo": "Do you get up before 6:00? Ana: Yes. Luis: No.\nDo you work on Saturday? Ana: No. Luis: Yes.\n…"
      }
    ]
  },
  {
    "id": "u5",
    "numero": 5,
    "titulo": "Food & Restaurants",
    "tituloEs": "Comida y restaurantes",
    "trimestre": 2,
    "paginas": {
      "inicio": 34,
      "fin": 40,
      "vocab": 34,
      "gram": 35,
      "dial": 35,
      "auto": 40
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "Rosarito es famoso por su comida. En esta unidad aprenderás a nombrar alimentos y bebidas, y a pedir y atender en un restaurante."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Nombrar alimentos y bebidas comunes.",
          "Ordenar o atender en un restaurante con I'd like…, Can I have…? y Would you like…?",
          "Usar a / an, some y any con los alimentos."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Comida",
        "items": [
          {
            "en": "bread",
            "es": "pan"
          },
          {
            "en": "rice",
            "es": "arroz"
          },
          {
            "en": "beans",
            "es": "frijoles"
          },
          {
            "en": "eggs",
            "es": "huevos"
          },
          {
            "en": "chicken",
            "es": "pollo"
          },
          {
            "en": "fish",
            "es": "pescado"
          },
          {
            "en": "shrimp",
            "es": "camarón"
          },
          {
            "en": "beef",
            "es": "carne de res"
          },
          {
            "en": "soup",
            "es": "sopa"
          },
          {
            "en": "salad",
            "es": "ensalada"
          },
          {
            "en": "cheese",
            "es": "queso"
          },
          {
            "en": "vegetables",
            "es": "verduras"
          },
          {
            "en": "apple",
            "es": "manzana"
          },
          {
            "en": "banana",
            "es": "plátano"
          },
          {
            "en": "orange",
            "es": "naranja"
          },
          {
            "en": "sandwich",
            "es": "sándwich"
          }
        ],
        "pagina": 34
      },
      {
        "tipo": "vocab",
        "titulo": "Bebidas",
        "items": [
          {
            "en": "water",
            "es": "agua"
          },
          {
            "en": "coffee",
            "es": "café"
          },
          {
            "en": "tea",
            "es": "té"
          },
          {
            "en": "juice",
            "es": "jugo"
          },
          {
            "en": "milk",
            "es": "leche"
          },
          {
            "en": "soda",
            "es": "refresco"
          },
          {
            "en": "lemonade",
            "es": "limonada"
          },
          {
            "en": "a glass of…",
            "es": "un vaso de…"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "En el restaurante",
        "items": [
          {
            "en": "menu",
            "es": "menú"
          },
          {
            "en": "table",
            "es": "mesa"
          },
          {
            "en": "the check",
            "es": "la cuenta"
          },
          {
            "en": "tip",
            "es": "propina"
          },
          {
            "en": "I'd like…",
            "es": "Quisiera…"
          },
          {
            "en": "Can I have…?",
            "es": "¿Me puede dar…?"
          },
          {
            "en": "Would you like…?",
            "es": "¿Le gustaría…?"
          },
          {
            "en": "Anything else?",
            "es": "¿Algo más?"
          },
          {
            "en": "Here you are.",
            "es": "Aquí tiene."
          },
          {
            "en": "How much is it?",
            "es": "¿Cuánto es?"
          },
          {
            "en": "Enjoy your meal!",
            "es": "¡Buen provecho!"
          },
          {
            "en": "delicious",
            "es": "delicioso"
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "A / an y some",
        "explicacion": "Las cosas que se pueden contar llevan a o an en singular (an antes de vocal). Las que no se pueden contar (agua, arroz, pan) llevan some.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "a banana  ·  an egg  ·  an apple",
            "un plátano · un huevo · una manzana"
          ],
          [
            "two eggs  ·  three tacos",
            "dos huevos · tres tacos"
          ],
          [
            "some rice  ·  some water  ·  some bread",
            "algo de arroz · agua · pan"
          ]
        ],
        "pagina": 35
      },
      {
        "tipo": "gramatica",
        "titulo": "Some y any",
        "explicacion": "Some se usa en oraciones afirmativas y al ofrecer o pedir algo. Any se usa en preguntas y en oraciones negativas.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I'd like some coffee.",
            "Quisiera café."
          ],
          [
            "Do you have any juice?",
            "¿Tiene jugo?"
          ],
          [
            "We don't have any fish today.",
            "Hoy no tenemos pescado."
          ]
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "Pedir con cortesía",
        "explicacion": "I'd like es la forma corta de I would like (quisiera). Es más amable que I want.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I'd like the fish tacos, please.",
            "Quisiera los tacos de pescado, por favor."
          ],
          [
            "Can I have a coffee, please?",
            "¿Me da un café, por favor?"
          ],
          [
            "Would you like something to drink?",
            "¿Le gustaría algo de tomar?"
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "The check o the bill",
        "texto": "En Estados Unidos se pide the check; en Inglaterra, the bill. Los turistas de California dirán: «Can I have the check, please?»"
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: Una cena frente al mar",
        "contexto": "Mary es turista y llega a un restaurante de mariscos. La atiende Ana.",
        "pagina": 35,
        "lineas": [
          {
            "quien": "Ana",
            "en": "Good evening! Here is the menu.",
            "es": "¡Buenas noches! Aquí está el menú."
          },
          {
            "quien": "Mary",
            "en": "Thank you.",
            "es": "Gracias."
          },
          {
            "quien": "Ana",
            "en": "Would you like something to drink?",
            "es": "¿Le gustaría algo de tomar?"
          },
          {
            "quien": "Mary",
            "en": "Yes, I'd like a lemonade, please.",
            "es": "Sí, quisiera una limonada, por favor."
          },
          {
            "quien": "Ana",
            "en": "And to eat?",
            "es": "¿Y de comer?"
          },
          {
            "quien": "Mary",
            "en": "Can I have the fish tacos?",
            "es": "¿Me puede dar los tacos de pescado?"
          },
          {
            "quien": "Ana",
            "en": "Sure. Anything else?",
            "es": "Claro. ¿Algo más?"
          },
          {
            "quien": "Mary",
            "en": "Do you have any salad?",
            "es": "¿Tienen ensalada?"
          },
          {
            "quien": "Ana",
            "en": "Yes, we have a green salad.",
            "es": "Sí, tenemos ensalada verde."
          },
          {
            "quien": "Mary",
            "en": "Great, a green salad, please.",
            "es": "Muy bien, una ensalada verde, por favor."
          },
          {
            "quien": "Ana",
            "en": "Enjoy your meal!",
            "es": "¡Buen provecho!"
          },
          {
            "quien": "Mary",
            "en": "Can I have the check, please?",
            "es": "¿Me trae la cuenta, por favor?"
          },
          {
            "quien": "Ana",
            "en": "Here you are. It's 350 pesos.",
            "es": "Aquí tiene. Son 350 pesos."
          },
          {
            "quien": "Mary",
            "en": "Thank you. The food is delicious!",
            "es": "Gracias. ¡La comida está deliciosa!"
          }
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Actividad oral en clase: Juego de roles: mesero y cliente",
        "texto": "1) Uno es el mesero y otro el cliente; después cambien de papel. 2) El mesero usa: Good afternoon / Would you like…? / Anything else? / Here you are. 3) El cliente usa: I'd like… / Can I have…? / Do you have any…? / Can I have the check, please?",
        "pagina": 40
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "Relaciona inglés y español",
        "cuadernillo": {
          "pagina": 37,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "beans",
            "frijoles"
          ],
          [
            "shrimp",
            "camarón"
          ],
          [
            "bread",
            "pan"
          ],
          [
            "cheese",
            "queso"
          ],
          [
            "juice",
            "jugo"
          ],
          [
            "beef",
            "carne de res"
          ],
          [
            "the check",
            "la cuenta"
          ],
          [
            "tip",
            "propina"
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Completa con a, an o some",
        "cuadernillo": {
          "pagina": 37,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Escribe a, an o some.",
        "preguntas": [
          {
            "p": "___ egg",
            "r": [
              "an"
            ]
          },
          {
            "p": "___ rice",
            "r": [
              "some"
            ]
          },
          {
            "p": "___ banana",
            "r": [
              "a"
            ]
          },
          {
            "p": "___ water",
            "r": [
              "some"
            ]
          },
          {
            "p": "___ apple",
            "r": [
              "an"
            ]
          },
          {
            "p": "___ sandwich",
            "r": [
              "a"
            ]
          },
          {
            "p": "___ bread",
            "r": [
              "some"
            ]
          },
          {
            "p": "___ orange",
            "r": [
              "an"
            ]
          }
        ],
        "banco": [
          "a",
          "an",
          "some"
        ]
      },
      {
        "id": "cC",
        "titulo": "Completa con some o any",
        "cuadernillo": {
          "pagina": 38,
          "letra": "C"
        },
        "tipo": "completar",
        "instrucciones": "Escribe some o any.",
        "preguntas": [
          {
            "p": "I'd like ___ coffee, please.",
            "r": [
              "some"
            ]
          },
          {
            "p": "Do you have ___ milk?",
            "r": [
              "any"
            ]
          },
          {
            "p": "We don't have ___ shrimp today.",
            "r": [
              "any"
            ]
          },
          {
            "p": "Can I have ___ water, please?",
            "r": [
              "some"
            ]
          },
          {
            "p": "Do they have ___ tacos?",
            "r": [
              "any"
            ]
          },
          {
            "p": "She wants ___ fruit.",
            "r": [
              "some"
            ]
          }
        ],
        "banco": [
          "some",
          "any"
        ]
      },
      {
        "id": "cD",
        "titulo": "En el restaurante",
        "cuadernillo": {
          "pagina": 38,
          "letra": "D"
        },
        "tipo": "opcion",
        "instrucciones": "Elige la respuesta correcta.",
        "preguntas": [
          {
            "p": "The waiter says «Anything else?». You answer:",
            "opciones": [
              "No, thank you.",
              "I'm fine.",
              "Goodbye."
            ],
            "correcta": 0
          },
          {
            "p": "You want to pay. You say:",
            "opciones": [
              "Can I have the menu?",
              "Can I have the check, please?",
              "I'd like a table."
            ],
            "correcta": 1
          },
          {
            "p": "___ like a coffee, please.",
            "opciones": [
              "I'd",
              "I'm",
              "I"
            ],
            "correcta": 0
          },
          {
            "p": "Which one is a drink?",
            "opciones": [
              "beans",
              "juice",
              "beef"
            ],
            "correcta": 1
          },
          {
            "p": "«Enjoy your meal!» means:",
            "opciones": [
              "¡Buen provecho!",
              "¿Algo más?",
              "Aquí tiene."
            ],
            "correcta": 0
          }
        ]
      },
      {
        "id": "cE",
        "titulo": "Ordena el diálogo",
        "cuadernillo": {
          "pagina": 39,
          "letra": "E"
        },
        "tipo": "ordenar",
        "instrucciones": "Toca las líneas en el orden correcto para armar el diálogo. Si te equivocas, toca la línea otra vez para regresarla.",
        "preguntas": [
          {
            "piezas": [
              "Good afternoon. Are you ready to order?",
              "Yes, I'd like the chicken soup, please.",
              "And to drink?",
              "A glass of water, please.",
              "Anything else?",
              "No, thank you."
            ]
          }
        ]
      },
      {
        "id": "cF",
        "titulo": "El menú de mi restaurante",
        "cuadernillo": {
          "pagina": 39,
          "letra": "F"
        },
        "tipo": "escritura",
        "instrucciones": "Inventa un restaurante. Escribe su nombre y su menú: cuatro comidas y tres bebidas con su precio. En la plataforma, escribe tus resultados en el cuadro de texto.",
        "ejemplo": "Restaurant name: Mariscos La Ola\nFish tacos – 45 pesos\nShrimp soup – 120 pesos\nLemonade – 30 pesos\n…"
      }
    ]
  },
  {
    "id": "u6",
    "numero": 6,
    "titulo": "Around Town",
    "tituloEs": "En la ciudad",
    "trimestre": 2,
    "paginas": {
      "inicio": 41,
      "fin": 46,
      "vocab": 41,
      "gram": 42,
      "dial": 42,
      "auto": 46
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "Un turista te pregunta dónde hay una farmacia. ¿Qué le dices? En esta unidad aprenderás a hablar de los lugares de tu ciudad y a dar indicaciones."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Nombrar lugares de la ciudad.",
          "Decir qué hay y dónde está con there is / there are y preposiciones de lugar.",
          "Pedir y dar indicaciones sencillas."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Lugares de la ciudad",
        "items": [
          {
            "en": "bank",
            "es": "banco"
          },
          {
            "en": "hospital",
            "es": "hospital"
          },
          {
            "en": "pharmacy",
            "es": "farmacia"
          },
          {
            "en": "supermarket",
            "es": "supermercado"
          },
          {
            "en": "market",
            "es": "mercado"
          },
          {
            "en": "gas station",
            "es": "gasolinera"
          },
          {
            "en": "bus stop",
            "es": "parada del camión"
          },
          {
            "en": "church",
            "es": "iglesia"
          },
          {
            "en": "park",
            "es": "parque"
          },
          {
            "en": "school",
            "es": "escuela"
          },
          {
            "en": "beach",
            "es": "playa"
          },
          {
            "en": "hotel",
            "es": "hotel"
          },
          {
            "en": "restaurant",
            "es": "restaurante"
          },
          {
            "en": "post office",
            "es": "oficina de correos"
          },
          {
            "en": "police station",
            "es": "estación de policía"
          },
          {
            "en": "street",
            "es": "calle"
          }
        ],
        "pagina": 41
      },
      {
        "tipo": "vocab",
        "titulo": "¿Dónde está?",
        "items": [
          {
            "en": "next to",
            "es": "junto a"
          },
          {
            "en": "between",
            "es": "entre"
          },
          {
            "en": "across from",
            "es": "enfrente de (cruzando la calle)"
          },
          {
            "en": "behind",
            "es": "detrás de"
          },
          {
            "en": "in front of",
            "es": "delante de"
          },
          {
            "en": "on the corner",
            "es": "en la esquina"
          },
          {
            "en": "near",
            "es": "cerca de"
          },
          {
            "en": "far from",
            "es": "lejos de"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Indicaciones",
        "items": [
          {
            "en": "Excuse me, where is the…?",
            "es": "Disculpe, ¿dónde está…?"
          },
          {
            "en": "Is there a… near here?",
            "es": "¿Hay un… cerca de aquí?"
          },
          {
            "en": "Go straight.",
            "es": "Siga derecho."
          },
          {
            "en": "Turn left.",
            "es": "Dé vuelta a la izquierda."
          },
          {
            "en": "Turn right.",
            "es": "Dé vuelta a la derecha."
          },
          {
            "en": "It's on your left.",
            "es": "Está a su izquierda."
          },
          {
            "en": "It's two blocks from here.",
            "es": "Está a dos cuadras de aquí."
          },
          {
            "en": "You're welcome.",
            "es": "De nada."
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "There is / there are (hay)",
        "explicacion": "There is se usa con una cosa y there are con varias. En preguntas, el verbo va primero.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "There is a bank on Juárez Boulevard.",
            "Hay un banco en el bulevar Juárez."
          ],
          [
            "There are two hotels near the beach.",
            "Hay dos hoteles cerca de la playa."
          ],
          [
            "There isn't a hospital here.",
            "Aquí no hay hospital."
          ],
          [
            "Is there a pharmacy near here?  –  Yes, there is.",
            "¿Hay una farmacia cerca? – Sí."
          ],
          [
            "Are there any restaurants?  –  No, there aren't.",
            "¿Hay restaurantes? – No."
          ]
        ],
        "pagina": 42
      },
      {
        "tipo": "gramatica",
        "titulo": "Dar instrucciones (imperativo)",
        "explicacion": "Para dar indicaciones se usa el verbo solo, sin persona. Para negar se agrega Don't.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "Go straight two blocks.",
            "Siga derecho dos cuadras."
          ],
          [
            "Turn left on Fifth Street.",
            "Dé vuelta a la izquierda en la calle Quinta."
          ],
          [
            "Don't turn right.",
            "No dé vuelta a la derecha."
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Hay no es have",
        "texto": "Hay se dice there is / there are. Es un error común decir «In Rosarito have a beach»; lo correcto es «In Rosarito there is a beach»."
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: Un turista en el bulevar",
        "contexto": "Un turista busca una farmacia en el bulevar Benito Juárez y le pregunta a Carmen.",
        "pagina": 42,
        "lineas": [
          {
            "quien": "Tourist",
            "en": "Excuse me, is there a pharmacy near here?",
            "es": "Disculpe, ¿hay una farmacia cerca de aquí?"
          },
          {
            "quien": "Carmen",
            "en": "Yes, there is. Go straight two blocks and turn left.",
            "es": "Sí, hay una. Siga derecho dos cuadras y dé vuelta a la izquierda."
          },
          {
            "quien": "Tourist",
            "en": "Two blocks and turn left?",
            "es": "¿Dos cuadras y vuelta a la izquierda?"
          },
          {
            "quien": "Carmen",
            "en": "Yes. The pharmacy is next to the bank, across from the park.",
            "es": "Sí. La farmacia está junto al banco, enfrente del parque."
          },
          {
            "quien": "Tourist",
            "en": "Thank you! And are there any good restaurants?",
            "es": "¡Gracias! ¿Y hay buenos restaurantes?"
          },
          {
            "quien": "Carmen",
            "en": "Yes, there are many restaurants near the beach.",
            "es": "Sí, hay muchos restaurantes cerca de la playa."
          },
          {
            "quien": "Tourist",
            "en": "Great. Thanks a lot!",
            "es": "Excelente. ¡Muchas gracias!"
          },
          {
            "quien": "Carmen",
            "en": "You're welcome. Have a nice day!",
            "es": "De nada. ¡Que tenga un buen día!"
          }
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Actividad oral en clase: ¿Cómo llego?",
        "texto": "1) Tu compañero está en la escuela (School). Pregunta: «Excuse me, where is the bank?» 2) Tu compañero te da indicaciones: «Go straight… turn… It's next to…». 3) Cambien de papel y de lugar tres veces.",
        "pagina": 46
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "Relaciona inglés y español",
        "cuadernillo": {
          "pagina": 43,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "pharmacy",
            "farmacia"
          ],
          [
            "gas station",
            "gasolinera"
          ],
          [
            "bus stop",
            "parada del camión"
          ],
          [
            "church",
            "iglesia"
          ],
          [
            "post office",
            "oficina de correos"
          ],
          [
            "next to",
            "junto a"
          ],
          [
            "across from",
            "enfrente de"
          ],
          [
            "Turn left.",
            "Dé vuelta a la izquierda."
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Completa con is o are",
        "cuadernillo": {
          "pagina": 44,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Escribe is, are, Is o Are.",
        "preguntas": [
          {
            "p": "There ___ a bank on this street.",
            "r": [
              "is"
            ]
          },
          {
            "p": "There ___ two schools in my town.",
            "r": [
              "are"
            ]
          },
          {
            "p": "___ there a hospital near here?",
            "r": [
              "Is"
            ]
          },
          {
            "p": "There ___ many hotels in Rosarito.",
            "r": [
              "are"
            ]
          },
          {
            "p": "There ___ a park next to the church.",
            "r": [
              "is"
            ]
          },
          {
            "p": "___ there any restaurants?",
            "r": [
              "Are"
            ]
          }
        ],
        "banco": [
          "is",
          "are"
        ]
      },
      {
        "id": "cC",
        "titulo": "Observa el mapa",
        "cuadernillo": {
          "pagina": 44,
          "letra": "C"
        },
        "tipo": "opcion",
        "instrucciones": "Observa el mapa y elige True (verdadero) o False (falso).",
        "preguntas": [
          {
            "p": "The pharmacy is between the bank and the supermarket.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "The school is next to the park.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "The church is across from the supermarket.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "The bank is next to the church.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          },
          {
            "p": "The park is across from the pharmacy.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "The supermarket is between the school and the park.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          }
        ],
        "mapa": {
          "filas": [
            [
              "School",
              "Park",
              "Church"
            ],
            [
              "Bank",
              "Pharmacy",
              "Supermarket"
            ]
          ],
          "calle": "Main Street"
        }
      },
      {
        "id": "cD",
        "titulo": "Elige la respuesta correcta",
        "cuadernillo": {
          "pagina": 45,
          "letra": "D"
        },
        "tipo": "opcion",
        "instrucciones": "Elige la respuesta correcta.",
        "preguntas": [
          {
            "p": "«Turn right» means:",
            "opciones": [
              "Dé vuelta a la derecha.",
              "Siga derecho.",
              "Dé vuelta a la izquierda."
            ],
            "correcta": 0
          },
          {
            "p": "«Go straight» means:",
            "opciones": [
              "Dé vuelta.",
              "Siga derecho.",
              "Deténgase."
            ],
            "correcta": 1
          },
          {
            "p": "«Is there a bank near here?»  Yes, there ___.",
            "opciones": [
              "are",
              "is",
              "it"
            ],
            "correcta": 1
          },
          {
            "p": "You need medicine. Go to the ___.",
            "opciones": [
              "pharmacy",
              "post office",
              "beach"
            ],
            "correcta": 0
          },
          {
            "p": "Your car needs gas. Go to the ___.",
            "opciones": [
              "bus stop",
              "gas station",
              "church"
            ],
            "correcta": 1
          }
        ]
      },
      {
        "id": "cE",
        "titulo": "Mi colonia",
        "cuadernillo": {
          "pagina": 45,
          "letra": "E"
        },
        "tipo": "escritura",
        "instrucciones": "Escribe 5 oraciones sobre tu colonia o tu calle. ¿Qué hay? ¿Dónde está?",
        "ejemplo": "In my neighborhood there is a ______. There are ______. The ______ is next to the ______."
      }
    ]
  },
  {
    "id": "u7",
    "numero": 7,
    "titulo": "At Work",
    "tituloEs": "En el trabajo",
    "trimestre": 2,
    "paginas": {
      "inicio": 47,
      "fin": 52,
      "vocab": 47,
      "gram": 48,
      "dial": 48,
      "auto": 51
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "¿Qué hace tu hermana? ¿Dónde trabaja tu vecino? En esta unidad aprenderás a hablar del trabajo de otras personas."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Nombrar lugares de trabajo y actividades de distintos oficios.",
          "Usar el presente simple con he y she: la -s, doesn't y Does…?",
          "Hablar del trabajo de un familiar o vecino."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Lugares de trabajo",
        "items": [
          {
            "en": "office",
            "es": "oficina"
          },
          {
            "en": "workshop",
            "es": "taller"
          },
          {
            "en": "factory",
            "es": "fábrica"
          },
          {
            "en": "store",
            "es": "tienda"
          },
          {
            "en": "farm",
            "es": "granja / rancho"
          },
          {
            "en": "bakery",
            "es": "panadería"
          },
          {
            "en": "beauty salon",
            "es": "estética"
          },
          {
            "en": "construction site",
            "es": "obra"
          },
          {
            "en": "hotel",
            "es": "hotel"
          },
          {
            "en": "hospital",
            "es": "hospital"
          }
        ],
        "pagina": 47
      },
      {
        "tipo": "vocab",
        "titulo": "¿Qué hace?",
        "items": [
          {
            "en": "help customers",
            "es": "atender a los clientes"
          },
          {
            "en": "serve food",
            "es": "servir comida"
          },
          {
            "en": "clean rooms",
            "es": "limpiar cuartos"
          },
          {
            "en": "fix cars",
            "es": "arreglar carros"
          },
          {
            "en": "cut hair",
            "es": "cortar el cabello"
          },
          {
            "en": "make bread",
            "es": "hacer pan"
          },
          {
            "en": "sell clothes",
            "es": "vender ropa"
          },
          {
            "en": "drive a taxi",
            "es": "manejar un taxi"
          },
          {
            "en": "take care of patients",
            "es": "cuidar pacientes"
          },
          {
            "en": "answer the phone",
            "es": "contestar el teléfono"
          },
          {
            "en": "build houses",
            "es": "construir casas"
          },
          {
            "en": "make furniture",
            "es": "hacer muebles"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Hablar del trabajo",
        "items": [
          {
            "en": "boss",
            "es": "jefe(a)"
          },
          {
            "en": "coworker",
            "es": "compañero(a) de trabajo"
          },
          {
            "en": "customer",
            "es": "cliente"
          },
          {
            "en": "full-time",
            "es": "tiempo completo"
          },
          {
            "en": "part-time",
            "es": "medio tiempo"
          },
          {
            "en": "day off",
            "es": "día de descanso"
          },
          {
            "en": "uniform",
            "es": "uniforme"
          },
          {
            "en": "schedule",
            "es": "horario"
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "He / she + verbo con -s",
        "explicacion": "En el presente simple, con he, she e it el verbo lleva -s. Algunos verbos llevan -es o cambian.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "work  →  He works at a hotel.",
            "Él trabaja en un hotel."
          ],
          [
            "watch, fix, go  →  watches, fixes, goes",
            "verbos que terminan en ch, sh, x, o: -es"
          ],
          [
            "study  →  She studies English.",
            "y después de consonante: -ies"
          ],
          [
            "have  →  He has a workshop.",
            "have cambia a has"
          ]
        ],
        "pagina": 48
      },
      {
        "tipo": "gramatica",
        "titulo": "Negativo y pregunta con he / she",
        "explicacion": "Se usa doesn't para negar y Does para preguntar. Con ellos, el verbo regresa a su forma normal (sin -s).",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "She doesn't work on Sunday.",
            "Ella no trabaja el domingo."
          ],
          [
            "Does he work at a hotel?",
            "¿Él trabaja en un hotel?"
          ],
          [
            "Yes, he does.  /  No, he doesn't.",
            "Sí. / No."
          ],
          [
            "Where does she work?",
            "¿Dónde trabaja ella?"
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "La -s se va con doesn't",
        "texto": "Si ya hay does o doesn't, el verbo no lleva -s: She doesn't work (no «doesn't works»). Does he fix cars? (no «Does he fixes»)."
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: ¿A qué se dedica tu hermana?",
        "contexto": "Dos vecinos, Lalo y Betty, platican sobre sus familias.",
        "pagina": 48,
        "lineas": [
          {
            "quien": "Lalo",
            "en": "What does your sister do?",
            "es": "¿A qué se dedica tu hermana?"
          },
          {
            "quien": "Betty",
            "en": "She's a nurse.",
            "es": "Es enfermera."
          },
          {
            "quien": "Lalo",
            "en": "Where does she work?",
            "es": "¿Dónde trabaja?"
          },
          {
            "quien": "Betty",
            "en": "She works at the hospital in Rosarito.",
            "es": "Trabaja en el hospital de Rosarito."
          },
          {
            "quien": "Lalo",
            "en": "Does she work at night?",
            "es": "¿Trabaja de noche?"
          },
          {
            "quien": "Betty",
            "en": "Yes, she does. She works from ten p.m. to six a.m.",
            "es": "Sí. Trabaja de las diez de la noche a las seis de la mañana."
          },
          {
            "quien": "Lalo",
            "en": "That's hard! Does she like her job?",
            "es": "¡Qué pesado! ¿Le gusta su trabajo?"
          },
          {
            "quien": "Betty",
            "en": "Yes, she loves it. She helps a lot of people. And your brother?",
            "es": "Sí, le encanta. Ayuda a mucha gente. ¿Y tu hermano?"
          },
          {
            "quien": "Lalo",
            "en": "He's a mechanic. He fixes cars in a workshop. He doesn't work on Sundays.",
            "es": "Es mecánico. Arregla carros en un taller. No trabaja los domingos."
          }
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Actividad oral en clase: Adivina el oficio",
        "texto": "1) Piensa en un oficio y no lo digas. 2) Tus compañeros hacen preguntas: «Does he work outside? Does she wear a uniform? Does he help customers?» 3) Contesta solo «Yes, he/she does» o «No, he/she doesn't». ¿En cuántas preguntas lo adivinan?",
        "pagina": 51
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "¿Qué hace cada uno?",
        "cuadernillo": {
          "pagina": 49,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "A mechanic",
            "fixes cars."
          ],
          [
            "A hairdresser",
            "cuts hair."
          ],
          [
            "A baker",
            "makes bread."
          ],
          [
            "A nurse",
            "takes care of patients."
          ],
          [
            "A waiter",
            "serves food."
          ],
          [
            "A receptionist",
            "answers the phone."
          ],
          [
            "A taxi driver",
            "drives a taxi."
          ],
          [
            "A carpenter",
            "makes furniture."
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Escribe el verbo con -s o -es",
        "cuadernillo": {
          "pagina": 50,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Escribe la forma correcta del verbo que está entre paréntesis.",
        "preguntas": [
          {
            "p": "He ___ (work) at a hotel.",
            "r": [
              "works"
            ]
          },
          {
            "p": "She ___ (watch) TV at night.",
            "r": [
              "watches"
            ]
          },
          {
            "p": "My brother ___ (fix) cars.",
            "r": [
              "fixes"
            ]
          },
          {
            "p": "Ana ___ (study) English.",
            "r": [
              "studies"
            ]
          },
          {
            "p": "The baker ___ (go) to work at 4:00.",
            "r": [
              "goes"
            ]
          },
          {
            "p": "My father ___ (have) a workshop.",
            "r": [
              "has"
            ]
          }
        ]
      },
      {
        "id": "cC",
        "titulo": "Completa con do, does, don't o doesn't",
        "cuadernillo": {
          "pagina": 50,
          "letra": "C"
        },
        "tipo": "completar",
        "instrucciones": "Usa las palabras del recuadro.",
        "preguntas": [
          {
            "p": "She ___ work on Sunday.",
            "r": [
              "doesn't",
              "does not"
            ]
          },
          {
            "p": "I ___ work at night.",
            "r": [
              "don't",
              "do not"
            ]
          },
          {
            "p": "___ he work at a school?",
            "r": [
              "Does"
            ]
          },
          {
            "p": "___ you like your job?",
            "r": [
              "Do"
            ]
          },
          {
            "p": "They ___ wear a uniform.",
            "r": [
              "don't",
              "do not"
            ]
          },
          {
            "p": "___ your sister work full-time?",
            "r": [
              "Does"
            ]
          }
        ],
        "banco": [
          "do",
          "does",
          "don't",
          "doesn't"
        ]
      },
      {
        "id": "cD",
        "titulo": "Lee y contesta",
        "cuadernillo": {
          "pagina": 50,
          "letra": "D"
        },
        "tipo": "opcion",
        "instrucciones": "Lee el texto y elige True (verdadero) o False (falso).",
        "preguntas": [
          {
            "p": "Julio is a mechanic.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          },
          {
            "p": "He gets up at 3:00 a.m.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "Carmen sells the bread.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "Julio works on Mondays.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          },
          {
            "p": "On his day off, he plays soccer.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "Julio doesn't like his job.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          }
        ],
        "lectura": "Julio is 40 years old. He's a baker in Rosarito. He gets up at three o'clock in the morning and goes to the bakery. He makes bread, cakes and cookies. His wife, Carmen, works with him. She sells the bread and answers the phone. Julio doesn't work on Mondays. On his day off, he plays soccer with his sons. He loves his job because his bread makes people happy."
      },
      {
        "id": "cE",
        "titulo": "El trabajo de alguien que conozco",
        "cuadernillo": {
          "pagina": 51,
          "letra": "E"
        },
        "tipo": "escritura",
        "instrucciones": "Escribe 6 oraciones sobre el trabajo de un familiar, amigo o vecino.",
        "ejemplo": "My ______ is a ______. He/She works at ______. He/She ______. He/She doesn't ______."
      }
    ]
  },
  {
    "id": "u8",
    "numero": 8,
    "titulo": "Shopping & Clothes",
    "tituloEs": "De compras: ropa y colores",
    "trimestre": 2,
    "paginas": {
      "inicio": 53,
      "fin": 59,
      "vocab": 53,
      "gram": 54,
      "dial": 54,
      "auto": 58
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "En las tiendas y mercados de Rosarito hay muchos clientes que hablan inglés. En esta unidad aprenderás la ropa, los colores y cómo comprar y vender."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Nombrar prendas de ropa y colores.",
          "Preguntar y decir precios y tallas en una tienda.",
          "Usar this, that, these y those."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "La ropa",
        "items": [
          {
            "en": "shirt",
            "es": "camisa"
          },
          {
            "en": "T-shirt",
            "es": "playera"
          },
          {
            "en": "pants",
            "es": "pantalón"
          },
          {
            "en": "jeans",
            "es": "pantalón de mezclilla"
          },
          {
            "en": "dress",
            "es": "vestido"
          },
          {
            "en": "skirt",
            "es": "falda"
          },
          {
            "en": "jacket",
            "es": "chamarra"
          },
          {
            "en": "sweater",
            "es": "suéter"
          },
          {
            "en": "shoes",
            "es": "zapatos"
          },
          {
            "en": "sneakers",
            "es": "tenis"
          },
          {
            "en": "hat",
            "es": "sombrero"
          },
          {
            "en": "cap",
            "es": "gorra"
          },
          {
            "en": "socks",
            "es": "calcetines"
          },
          {
            "en": "shorts",
            "es": "short"
          }
        ],
        "pagina": 53
      },
      {
        "tipo": "vocab",
        "titulo": "Los colores",
        "items": [
          {
            "en": "red",
            "es": "rojo"
          },
          {
            "en": "blue",
            "es": "azul"
          },
          {
            "en": "green",
            "es": "verde"
          },
          {
            "en": "yellow",
            "es": "amarillo"
          },
          {
            "en": "black",
            "es": "negro"
          },
          {
            "en": "white",
            "es": "blanco"
          },
          {
            "en": "gray",
            "es": "gris"
          },
          {
            "en": "brown",
            "es": "café"
          },
          {
            "en": "pink",
            "es": "rosa"
          },
          {
            "en": "orange",
            "es": "anaranjado"
          },
          {
            "en": "purple",
            "es": "morado"
          },
          {
            "en": "light / dark",
            "es": "claro / oscuro"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "En la tienda",
        "items": [
          {
            "en": "How much is it?",
            "es": "¿Cuánto cuesta?"
          },
          {
            "en": "How much are they?",
            "es": "¿Cuánto cuestan?"
          },
          {
            "en": "It's 200 pesos.",
            "es": "Cuesta 200 pesos."
          },
          {
            "en": "What size?",
            "es": "¿Qué talla?"
          },
          {
            "en": "small / medium / large",
            "es": "chica / mediana / grande"
          },
          {
            "en": "Can I try it on?",
            "es": "¿Me lo puedo probar?"
          },
          {
            "en": "fitting room",
            "es": "probador"
          },
          {
            "en": "I'll take it.",
            "es": "Me lo llevo."
          },
          {
            "en": "cheap",
            "es": "barato"
          },
          {
            "en": "expensive",
            "es": "caro"
          },
          {
            "en": "cash / card",
            "es": "efectivo / tarjeta"
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "This, that, these, those",
        "explicacion": "This y these son para cosas cerca de ti; that y those para cosas lejos. This y that son singular; these y those, plural.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "This shirt is blue.",
            "Esta camisa es azul. (cerca)"
          ],
          [
            "These shoes are nice.",
            "Estos zapatos están bonitos. (cerca)"
          ],
          [
            "That hat is expensive.",
            "Ese sombrero es caro. (lejos)"
          ],
          [
            "Those jeans are cheap.",
            "Esos pantalones son baratos. (lejos)"
          ]
        ],
        "pagina": 54
      },
      {
        "tipo": "gramatica",
        "titulo": "Precios y colores",
        "explicacion": "Con una prenda se pregunta How much is…? y con varias How much are…? El color va antes de la prenda.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "How much is this jacket?  –  It's 600 pesos.",
            "¿Cuánto cuesta esta chamarra? – 600 pesos."
          ],
          [
            "How much are these socks?  –  They're 80 pesos.",
            "¿Cuánto cuestan estos calcetines? – 80 pesos."
          ],
          [
            "a red dress  ·  black shoes",
            "un vestido rojo · zapatos negros"
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Prendas que son plural",
        "texto": "Pants, jeans, shorts, shoes y socks siempre son plural en inglés: These jeans are… / How much are they?"
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: En la tienda de ropa",
        "contexto": "Marta busca una chamarra para el invierno. La atiende una vendedora.",
        "pagina": 54,
        "lineas": [
          {
            "quien": "Clerk",
            "en": "Hi! Can I help you?",
            "es": "¡Hola! ¿Le puedo ayudar?"
          },
          {
            "quien": "Marta",
            "en": "Yes, how much is this jacket?",
            "es": "Sí, ¿cuánto cuesta esta chamarra?"
          },
          {
            "quien": "Clerk",
            "en": "It's 600 pesos.",
            "es": "Cuesta 600 pesos."
          },
          {
            "quien": "Marta",
            "en": "Hmm… and how much are those sweaters?",
            "es": "Mmm… ¿y cuánto cuestan esos suéteres?"
          },
          {
            "quien": "Clerk",
            "en": "They're 350 pesos each.",
            "es": "Cuestan 350 pesos cada uno."
          },
          {
            "quien": "Marta",
            "en": "Can I try on the blue sweater?",
            "es": "¿Me puedo probar el suéter azul?"
          },
          {
            "quien": "Clerk",
            "en": "Sure. What size are you?",
            "es": "Claro. ¿Qué talla es?"
          },
          {
            "quien": "Marta",
            "en": "Medium.",
            "es": "Mediana."
          },
          {
            "quien": "Clerk",
            "en": "Here you are. The fitting room is over there.",
            "es": "Aquí tiene. El probador está allá."
          },
          {
            "quien": "Marta",
            "en": "It's perfect. I'll take it. Can I pay by card?",
            "es": "Me queda perfecto. Me lo llevo. ¿Puedo pagar con tarjeta?"
          },
          {
            "quien": "Clerk",
            "en": "Yes, of course.",
            "es": "Sí, claro."
          }
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Actividad oral en clase: El bazar de la Misión",
        "texto": "1) Uno es vendedor y otro cliente; después cambien. 2) El cliente pregunta precios y tallas: How much is…? / How much are…? / Can I try it on? 3) El vendedor contesta y cierra la venta: It's… / They're… / Cash or card?",
        "pagina": 58
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "Relaciona inglés y español",
        "cuadernillo": {
          "pagina": 56,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "jacket",
            "chamarra"
          ],
          [
            "skirt",
            "falda"
          ],
          [
            "sneakers",
            "tenis"
          ],
          [
            "socks",
            "calcetines"
          ],
          [
            "cap",
            "gorra"
          ],
          [
            "brown",
            "café"
          ],
          [
            "purple",
            "morado"
          ],
          [
            "cheap",
            "barato"
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Completa con this, that, these o those",
        "cuadernillo": {
          "pagina": 56,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Mira las pistas entre paréntesis. Usa las palabras del recuadro.",
        "preguntas": [
          {
            "p": "___ shirt is nice. (cerca)",
            "r": [
              "This"
            ]
          },
          {
            "p": "___ shoes are black. (cerca)",
            "r": [
              "These"
            ]
          },
          {
            "p": "___ jacket over there is expensive. (lejos)",
            "r": [
              "That"
            ]
          },
          {
            "p": "___ caps over there are cheap. (lejos)",
            "r": [
              "Those"
            ]
          },
          {
            "p": "How much is ___ dress? (cerca)",
            "r": [
              "this"
            ]
          },
          {
            "p": "How much are ___ socks? (cerca)",
            "r": [
              "these"
            ]
          }
        ],
        "banco": [
          "this",
          "that",
          "these",
          "those"
        ]
      },
      {
        "id": "cC",
        "titulo": "Elige la respuesta correcta",
        "cuadernillo": {
          "pagina": 57,
          "letra": "C"
        },
        "tipo": "opcion",
        "instrucciones": "Elige la respuesta correcta.",
        "preguntas": [
          {
            "p": "«Can I try it on?» means:",
            "opciones": [
              "¿Me lo puedo probar?",
              "¿Cuánto cuesta?",
              "¿Qué talla?"
            ],
            "correcta": 0
          },
          {
            "p": "The opposite of expensive is:",
            "opciones": [
              "cheap",
              "small",
              "dark"
            ],
            "correcta": 0
          },
          {
            "p": "Which one is correct?",
            "opciones": [
              "a red dress",
              "a dress red",
              "red a dress"
            ],
            "correcta": 0
          },
          {
            "p": "How much ___ these jeans?",
            "opciones": [
              "is",
              "are",
              "am"
            ],
            "correcta": 1
          },
          {
            "p": "«I'll take it» means:",
            "opciones": [
              "Me lo llevo.",
              "Lo pago con tarjeta.",
              "No me gusta."
            ],
            "correcta": 0
          },
          {
            "p": "The sky is ___.",
            "opciones": [
              "blue",
              "brown",
              "pink"
            ],
            "correcta": 0
          }
        ]
      },
      {
        "id": "cD",
        "titulo": "Ordena el diálogo",
        "cuadernillo": {
          "pagina": 57,
          "letra": "D"
        },
        "tipo": "ordenar",
        "instrucciones": "Toca las líneas en el orden correcto para armar el diálogo. Si te equivocas, toca la línea otra vez para regresarla.",
        "preguntas": [
          {
            "piezas": [
              "Hi! Can I help you?",
              "Yes, how much are these sneakers?",
              "They're 900 pesos.",
              "Can I try them on?",
              "Sure. What size are you?",
              "Size 8, please."
            ]
          }
        ]
      },
      {
        "id": "cE",
        "titulo": "Mi ropa favorita",
        "cuadernillo": {
          "pagina": 58,
          "letra": "E"
        },
        "tipo": "escritura",
        "instrucciones": "Describe tu ropa favorita o la ropa que traes hoy. Escribe 5 oraciones con colores.",
        "ejemplo": "My favorite T-shirt is ______. My shoes are ______. I have a ______."
      }
    ]
  },
  {
    "id": "u9",
    "numero": 9,
    "titulo": "Free Time & Abilities",
    "tituloEs": "Tiempo libre y habilidades",
    "trimestre": 3,
    "paginas": {
      "inicio": 62,
      "fin": 67,
      "vocab": 62,
      "gram": 63,
      "dial": 63,
      "auto": 67
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "¿Sabes nadar? ¿Qué te gusta hacer los fines de semana? En esta unidad aprenderás a hablar de lo que puedes hacer y de lo que te gusta."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Decir lo que puedo y no puedo hacer con can / can't.",
          "Decir lo que me gusta hacer con like, love y don't like + verbo con -ing.",
          "Decir con qué frecuencia hago algo: always, usually, sometimes, never."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Habilidades y actividades",
        "items": [
          {
            "en": "swim",
            "es": "nadar"
          },
          {
            "en": "cook",
            "es": "cocinar"
          },
          {
            "en": "dance",
            "es": "bailar"
          },
          {
            "en": "sing",
            "es": "cantar"
          },
          {
            "en": "drive",
            "es": "manejar"
          },
          {
            "en": "play soccer",
            "es": "jugar futbol"
          },
          {
            "en": "play the guitar",
            "es": "tocar la guitarra"
          },
          {
            "en": "ride a bike",
            "es": "andar en bicicleta"
          },
          {
            "en": "surf",
            "es": "surfear"
          },
          {
            "en": "sew",
            "es": "coser"
          },
          {
            "en": "use a computer",
            "es": "usar una computadora"
          },
          {
            "en": "speak English",
            "es": "hablar inglés"
          }
        ],
        "pagina": 62
      },
      {
        "tipo": "vocab",
        "titulo": "Tiempo libre",
        "items": [
          {
            "en": "watch movies",
            "es": "ver películas"
          },
          {
            "en": "read",
            "es": "leer"
          },
          {
            "en": "go fishing",
            "es": "ir de pesca"
          },
          {
            "en": "go to the beach",
            "es": "ir a la playa"
          },
          {
            "en": "listen to music",
            "es": "escuchar música"
          },
          {
            "en": "visit my family",
            "es": "visitar a mi familia"
          },
          {
            "en": "walk in the park",
            "es": "caminar en el parque"
          },
          {
            "en": "go to church",
            "es": "ir a misa"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "¿Con qué frecuencia?",
        "items": [
          {
            "en": "always",
            "es": "siempre"
          },
          {
            "en": "usually",
            "es": "normalmente"
          },
          {
            "en": "often",
            "es": "seguido"
          },
          {
            "en": "sometimes",
            "es": "a veces"
          },
          {
            "en": "never",
            "es": "nunca"
          },
          {
            "en": "every day",
            "es": "todos los días"
          },
          {
            "en": "once a week",
            "es": "una vez por semana"
          },
          {
            "en": "twice a week",
            "es": "dos veces por semana"
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "Can / can't (poder, saber hacer)",
        "explicacion": "Can es igual para todas las personas y el verbo que sigue va en forma normal, sin to.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I can swim.",
            "Sé nadar."
          ],
          [
            "She can't drive.",
            "Ella no sabe manejar."
          ],
          [
            "Can you cook?  –  Yes, I can. / No, I can't.",
            "¿Sabes cocinar? – Sí. / No."
          ],
          [
            "What can you do?",
            "¿Qué sabes hacer?"
          ]
        ],
        "pagina": 63
      },
      {
        "tipo": "gramatica",
        "titulo": "Like / love / don't like + -ing",
        "explicacion": "Para decir lo que te gusta hacer, el segundo verbo lleva -ing.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I like dancing.",
            "Me gusta bailar."
          ],
          [
            "He loves cooking.",
            "A él le encanta cocinar."
          ],
          [
            "They don't like running.",
            "No les gusta correr."
          ],
          [
            "Do you like reading?",
            "¿Te gusta leer?"
          ]
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "¿Dónde va la frecuencia?",
        "explicacion": "Always, usually, sometimes y never van antes del verbo, pero después de am, is, are.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I always get up early.",
            "Siempre me levanto temprano."
          ],
          [
            "We sometimes go fishing.",
            "A veces vamos de pesca."
          ],
          [
            "She is never late.",
            "Ella nunca llega tarde."
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Can no cambia",
        "texto": "Con he y she, can no lleva -s: She can swim (no «cans»). Y nunca lleva to: I can dance (no «can to dance»)."
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: ¿Qué haces en tu tiempo libre?",
        "contexto": "Luis y Paty platican en el descanso de la clase.",
        "pagina": 63,
        "lineas": [
          {
            "quien": "Luis",
            "en": "What do you do in your free time, Paty?",
            "es": "¿Qué haces en tu tiempo libre, Paty?"
          },
          {
            "quien": "Paty",
            "en": "I love dancing. I take classes on Saturdays.",
            "es": "Me encanta bailar. Tomo clases los sábados."
          },
          {
            "quien": "Luis",
            "en": "Cool! Can you dance salsa?",
            "es": "¡Qué padre! ¿Sabes bailar salsa?"
          },
          {
            "quien": "Paty",
            "en": "Yes, I can. And you? What do you like doing?",
            "es": "Sí. ¿Y tú? ¿Qué te gusta hacer?"
          },
          {
            "quien": "Luis",
            "en": "I like going fishing. I usually go with my father on Sundays.",
            "es": "Me gusta ir de pesca. Normalmente voy con mi papá los domingos."
          },
          {
            "quien": "Paty",
            "en": "Can you swim?",
            "es": "¿Sabes nadar?"
          },
          {
            "quien": "Luis",
            "en": "Yes, I can, but I can't surf.",
            "es": "Sí, pero no sé surfear."
          },
          {
            "quien": "Paty",
            "en": "I can't swim!",
            "es": "¡Yo no sé nadar!"
          },
          {
            "quien": "Luis",
            "en": "Really? You can learn. There are classes at the beach.",
            "es": "¿De veras? Puedes aprender. Hay clases en la playa."
          },
          {
            "quien": "Paty",
            "en": "Maybe… I sometimes go to the beach, but I never swim!",
            "es": "Tal vez… A veces voy a la playa, ¡pero nunca nado!"
          }
        ]
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "Relaciona inglés y español",
        "cuadernillo": {
          "pagina": 64,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "swim",
            "nadar"
          ],
          [
            "ride a bike",
            "andar en bicicleta"
          ],
          [
            "sew",
            "coser"
          ],
          [
            "go fishing",
            "ir de pesca"
          ],
          [
            "always",
            "siempre"
          ],
          [
            "never",
            "nunca"
          ],
          [
            "sometimes",
            "a veces"
          ],
          [
            "twice a week",
            "dos veces por semana"
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Completa con can o can't",
        "cuadernillo": {
          "pagina": 65,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Mira la tabla y completa las oraciones.",
        "preguntas": [
          {
            "p": "Pedro ___ swim.",
            "r": [
              "can"
            ]
          },
          {
            "p": "Pedro ___ drive.",
            "r": [
              "can't",
              "can not",
              "cannot"
            ]
          },
          {
            "p": "Lucía ___ swim.",
            "r": [
              "can't",
              "can not",
              "cannot"
            ]
          },
          {
            "p": "Lucía ___ drive.",
            "r": [
              "can"
            ]
          },
          {
            "p": "Lucía and Pedro ___ cook.",
            "r": [
              "can"
            ]
          },
          {
            "p": "___ Pedro drive? No, he ___.",
            "r": [
              "Can / can't",
              "Can / can not",
              "Can / cannot"
            ]
          }
        ],
        "banco": [
          "can",
          "can't"
        ],
        "tabla": [
          [
            "",
            "swim",
            "drive",
            "cook"
          ],
          [
            "Pedro",
            "Sí",
            "No",
            "Sí"
          ],
          [
            "Lucía",
            "No",
            "Sí",
            "Sí"
          ]
        ]
      },
      {
        "id": "cC",
        "titulo": "Elige la respuesta correcta",
        "cuadernillo": {
          "pagina": 65,
          "letra": "C"
        },
        "tipo": "opcion",
        "instrucciones": "Elige la respuesta correcta.",
        "preguntas": [
          {
            "p": "I like ___.",
            "opciones": [
              "cook",
              "cooking",
              "to cooking"
            ],
            "correcta": 1
          },
          {
            "p": "She ___ dancing.",
            "opciones": [
              "love",
              "loves",
              "can loves"
            ],
            "correcta": 1
          },
          {
            "p": "«Nunca» in English is:",
            "opciones": [
              "always",
              "usually",
              "never"
            ],
            "correcta": 2
          },
          {
            "p": "Which one is correct?",
            "opciones": [
              "I always get up early.",
              "I get always up early.",
              "Always I get up early."
            ],
            "correcta": 0
          },
          {
            "p": "«Can you play the guitar?»",
            "opciones": [
              "Yes, I can.",
              "Yes, I do.",
              "Yes, I am."
            ],
            "correcta": 0
          },
          {
            "p": "«Once a week» means:",
            "opciones": [
              "una vez por semana",
              "todos los días",
              "dos veces por semana"
            ],
            "correcta": 0
          }
        ]
      },
      {
        "id": "cD",
        "titulo": "Ordena las palabras",
        "cuadernillo": {
          "pagina": 66,
          "letra": "D"
        },
        "tipo": "ordenar",
        "instrucciones": "Toca las palabras en el orden correcto para formar la oración. Si te equivocas, toca la palabra otra vez para regresarla.",
        "preguntas": [
          {
            "r": "I can ride a bike"
          },
          {
            "r": "She doesn't like running"
          },
          {
            "r": "We sometimes go fishing"
          },
          {
            "r": "Can your brother play soccer"
          },
          {
            "r": "They never watch TV in the morning"
          }
        ]
      },
      {
        "id": "cE",
        "titulo": "Mi tiempo libre",
        "cuadernillo": {
          "pagina": 66,
          "letra": "E"
        },
        "tipo": "escritura",
        "instrucciones": "Escribe 6 oraciones: dos cosas que sabes hacer, una que no sabes, dos que te gustan y una con frecuencia.",
        "ejemplo": "I can ______. I can't ______. I love ______ing. I usually ______ on Sundays."
      },
      {
        "id": "cF",
        "titulo": "Encuentra a alguien que…",
        "cuadernillo": {
          "pagina": 67,
          "letra": "F"
        },
        "tipo": "escritura",
        "instrucciones": "Camina por el salón y pregunta. Escribe el nombre del compañero que contesta «Yes». En la plataforma, escribe tus resultados en el cuadro de texto.",
        "ejemplo": "can swim: Pedro\ncan play the guitar: Lupita\nlikes dancing: …\n…"
      }
    ]
  },
  {
    "id": "u10",
    "numero": 10,
    "titulo": "Right Now",
    "tituloEs": "Ahora mismo",
    "trimestre": 3,
    "paginas": {
      "inicio": 68,
      "fin": 73,
      "vocab": 68,
      "gram": 69,
      "dial": 69,
      "auto": 73
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "¿Qué estás haciendo? ¿Cómo está el clima? En esta unidad aprenderás a describir lo que pasa en este momento y a hablar del tiempo."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Describir lo que está pasando ahora con el presente continuo.",
          "Hablar del clima y de las estaciones del año.",
          "Distinguir el presente simple (rutina) del presente continuo (ahora)."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "El clima",
        "items": [
          {
            "en": "What's the weather like?",
            "es": "¿Cómo está el clima?"
          },
          {
            "en": "It's sunny.",
            "es": "Está soleado."
          },
          {
            "en": "It's cloudy.",
            "es": "Está nublado."
          },
          {
            "en": "It's windy.",
            "es": "Hace viento."
          },
          {
            "en": "It's raining.",
            "es": "Está lloviendo."
          },
          {
            "en": "It's foggy.",
            "es": "Hay neblina."
          },
          {
            "en": "It's hot.",
            "es": "Hace calor."
          },
          {
            "en": "It's cold.",
            "es": "Hace frío."
          },
          {
            "en": "It's warm.",
            "es": "Está templado."
          },
          {
            "en": "It's 25 degrees.",
            "es": "Estamos a 25 grados."
          }
        ],
        "pagina": 68
      },
      {
        "tipo": "vocab",
        "titulo": "Las estaciones",
        "items": [
          {
            "en": "spring",
            "es": "primavera"
          },
          {
            "en": "summer",
            "es": "verano"
          },
          {
            "en": "fall / autumn",
            "es": "otoño"
          },
          {
            "en": "winter",
            "es": "invierno"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "¿Qué está pasando?",
        "items": [
          {
            "en": "talking on the phone",
            "es": "hablando por teléfono"
          },
          {
            "en": "waiting for the bus",
            "es": "esperando el camión"
          },
          {
            "en": "eating",
            "es": "comiendo"
          },
          {
            "en": "sleeping",
            "es": "durmiendo"
          },
          {
            "en": "working",
            "es": "trabajando"
          },
          {
            "en": "studying",
            "es": "estudiando"
          },
          {
            "en": "cooking",
            "es": "cocinando"
          },
          {
            "en": "playing",
            "es": "jugando"
          },
          {
            "en": "reading",
            "es": "leyendo"
          },
          {
            "en": "writing",
            "es": "escribiendo"
          },
          {
            "en": "wearing",
            "es": "usando (ropa)"
          },
          {
            "en": "doing homework",
            "es": "haciendo la tarea"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Para decir «ahora»",
        "items": [
          {
            "en": "now",
            "es": "ahora"
          },
          {
            "en": "right now",
            "es": "ahora mismo"
          },
          {
            "en": "at the moment",
            "es": "en este momento"
          },
          {
            "en": "today",
            "es": "hoy"
          },
          {
            "en": "Look!",
            "es": "¡Mira!"
          },
          {
            "en": "Listen!",
            "es": "¡Escucha!"
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "Presente continuo: am / is / are + verbo -ing",
        "explicacion": "Se usa para hablar de lo que pasa en este momento.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I am cooking.",
            "Estoy cocinando."
          ],
          [
            "She is working.",
            "Ella está trabajando."
          ],
          [
            "They are playing soccer.",
            "Están jugando futbol."
          ],
          [
            "He isn't sleeping.",
            "Él no está durmiendo."
          ],
          [
            "Are you studying?  –  Yes, I am.",
            "¿Estás estudiando? – Sí."
          ],
          [
            "What are you doing?",
            "¿Qué estás haciendo?"
          ]
        ],
        "pagina": 69
      },
      {
        "tipo": "gramatica",
        "titulo": "Cómo se escribe el -ing",
        "explicacion": "La mayoría solo agrega -ing. Si termina en e, se quita la e. Si es corto y termina en consonante-vocal-consonante, se duplica la última letra.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "work  →  working  ·  play  →  playing",
            "agrega -ing"
          ],
          [
            "make  →  making  ·  write  →  writing",
            "quita la e"
          ],
          [
            "swim  →  swimming  ·  run  →  running",
            "duplica la consonante"
          ]
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "¿Rutina o ahora?",
        "explicacion": "Presente simple para lo de siempre; presente continuo para lo que pasa en este momento.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I work every day.",
            "Trabajo todos los días. (rutina)"
          ],
          [
            "I'm working now.",
            "Estoy trabajando ahora. (en este momento)"
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Grados",
        "texto": "En Estados Unidos la temperatura se da en grados Fahrenheit: 77 °F son 25 °C. Si un turista dice «It's 90 degrees», ¡hace mucho calor!"
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: Una llamada",
        "contexto": "Ana está en Rosarito y llama por teléfono a su amigo Beto, que vive en Tijuana.",
        "pagina": 69,
        "lineas": [
          {
            "quien": "Ana",
            "en": "Hi, Beto! What are you doing?",
            "es": "¡Hola, Beto! ¿Qué estás haciendo?"
          },
          {
            "quien": "Beto",
            "en": "Hi, Ana! I'm waiting for the bus.",
            "es": "¡Hola, Ana! Estoy esperando el camión."
          },
          {
            "quien": "Ana",
            "en": "Is it raining there?",
            "es": "¿Está lloviendo allá?"
          },
          {
            "quien": "Beto",
            "en": "No, but it's very windy and cold. What about Rosarito?",
            "es": "No, pero hace mucho viento y frío. ¿Y en Rosarito?"
          },
          {
            "quien": "Ana",
            "en": "Here it's foggy. I'm cooking dinner and the kids are doing their homework.",
            "es": "Aquí hay neblina. Estoy haciendo la cena y los niños están haciendo la tarea."
          },
          {
            "quien": "Beto",
            "en": "Is your husband working today?",
            "es": "¿Tu esposo está trabajando hoy?"
          },
          {
            "quien": "Ana",
            "en": "Yes, he's working at the restaurant. It's a busy day.",
            "es": "Sí, está trabajando en el restaurante. Es un día muy ocupado."
          },
          {
            "quien": "Beto",
            "en": "OK, my bus is coming. See you later!",
            "es": "Bueno, ya viene mi camión. ¡Nos vemos!"
          },
          {
            "quien": "Ana",
            "en": "Bye!",
            "es": "¡Adiós!"
          }
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Actividad oral en clase: Describe la escena",
        "texto": "1) Dibuja en el recuadro una escena de la playa de Rosarito con varias personas haciendo cosas. 2) Sin enseñar tu dibujo, descríbelo: «A man is fishing. Two kids are playing. It's sunny.» 3) Tu compañero dibuja lo que escucha. Al final comparen los dibujos.",
        "pagina": 73
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "Relaciona inglés y español",
        "cuadernillo": {
          "pagina": 70,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "It's sunny.",
            "Está soleado."
          ],
          [
            "It's foggy.",
            "Hay neblina."
          ],
          [
            "It's windy.",
            "Hace viento."
          ],
          [
            "It's raining.",
            "Está lloviendo."
          ],
          [
            "summer",
            "verano"
          ],
          [
            "winter",
            "invierno"
          ],
          [
            "spring",
            "primavera"
          ],
          [
            "right now",
            "ahora mismo"
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Escribe el verbo con -ing",
        "cuadernillo": {
          "pagina": 71,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Escribe la forma -ing de cada verbo.",
        "preguntas": [
          {
            "p": "cook  →  ___",
            "r": [
              "cooking"
            ]
          },
          {
            "p": "write  →  ___",
            "r": [
              "writing"
            ]
          },
          {
            "p": "swim  →  ___",
            "r": [
              "swimming"
            ]
          },
          {
            "p": "play  →  ___",
            "r": [
              "playing"
            ]
          },
          {
            "p": "make  →  ___",
            "r": [
              "making"
            ]
          },
          {
            "p": "run  →  ___",
            "r": [
              "running"
            ]
          },
          {
            "p": "study  →  ___",
            "r": [
              "studying"
            ]
          },
          {
            "p": "sit  →  ___",
            "r": [
              "sitting"
            ]
          }
        ]
      },
      {
        "id": "cC",
        "titulo": "¿Qué está pasando?",
        "cuadernillo": {
          "pagina": 71,
          "letra": "C"
        },
        "tipo": "completar",
        "instrucciones": "Completa con am, is o are y el verbo con -ing.",
        "preguntas": [
          {
            "p": "I ___ (read) a book now.",
            "r": [
              "am reading"
            ]
          },
          {
            "p": "She ___ (talk) on the phone.",
            "r": [
              "is talking"
            ]
          },
          {
            "p": "They ___ (play) soccer.",
            "r": [
              "are playing"
            ]
          },
          {
            "p": "We ___ (study) English right now.",
            "r": [
              "are studying"
            ]
          },
          {
            "p": "He ___ (not / sleep).",
            "r": [
              "isn't sleeping",
              "is not sleeping"
            ]
          },
          {
            "p": "___ you ___ (wait) for the bus?",
            "r": [
              "Are / waiting"
            ]
          }
        ]
      },
      {
        "id": "cD",
        "titulo": "¿Rutina o ahora?",
        "cuadernillo": {
          "pagina": 72,
          "letra": "D"
        },
        "tipo": "opcion",
        "instrucciones": "Elige la respuesta correcta.",
        "preguntas": [
          {
            "p": "I ___ every day.",
            "opciones": [
              "work",
              "am working"
            ],
            "correcta": 0
          },
          {
            "p": "Look! It ___.",
            "opciones": [
              "rains",
              "is raining"
            ],
            "correcta": 1
          },
          {
            "p": "She usually ___ coffee in the morning.",
            "opciones": [
              "drinks",
              "is drinking"
            ],
            "correcta": 0
          },
          {
            "p": "Shh! The baby ___.",
            "opciones": [
              "sleeps",
              "is sleeping"
            ],
            "correcta": 1
          },
          {
            "p": "We ___ English on Mondays and Wednesdays.",
            "opciones": [
              "study",
              "are studying"
            ],
            "correcta": 0
          },
          {
            "p": "In winter it ___ cold.",
            "opciones": [
              "is",
              "are"
            ],
            "correcta": 0
          }
        ]
      },
      {
        "id": "cE",
        "titulo": "En este momento",
        "cuadernillo": {
          "pagina": 72,
          "letra": "E"
        },
        "tipo": "escritura",
        "instrucciones": "Mira a tu alrededor (el salón, tu casa o la calle). Escribe 6 oraciones sobre lo que está pasando y cómo está el clima.",
        "ejemplo": "Today it's ______. The teacher is ______. My classmates are ______. I'm ______."
      }
    ]
  },
  {
    "id": "u11",
    "numero": 11,
    "titulo": "Last Weekend",
    "tituloEs": "El fin de semana pasado",
    "trimestre": 3,
    "paginas": {
      "inicio": 74,
      "fin": 79,
      "vocab": 74,
      "gram": 74,
      "dial": 75,
      "auto": 78
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "¿Cómo te fue el fin de semana? En esta unidad aprenderás a hablar del pasado: dónde estabas y qué hiciste."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Usar was / were para decir dónde estaba y cómo estuvo algo.",
          "Contar lo que hice con verbos regulares e irregulares en pasado.",
          "Hacer preguntas en pasado con did y contestarlas."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Para hablar del pasado",
        "items": [
          {
            "en": "yesterday",
            "es": "ayer"
          },
          {
            "en": "last night",
            "es": "anoche"
          },
          {
            "en": "last weekend",
            "es": "el fin de semana pasado"
          },
          {
            "en": "last week",
            "es": "la semana pasada"
          },
          {
            "en": "last year",
            "es": "el año pasado"
          },
          {
            "en": "two days ago",
            "es": "hace dos días"
          }
        ],
        "pagina": 74
      },
      {
        "tipo": "vocab",
        "titulo": "Verbos regulares (-ed)",
        "items": [
          {
            "en": "work  →  worked",
            "es": "trabajé"
          },
          {
            "en": "play  →  played",
            "es": "jugué"
          },
          {
            "en": "cook  →  cooked",
            "es": "cociné"
          },
          {
            "en": "watch  →  watched",
            "es": "vi (tele)"
          },
          {
            "en": "visit  →  visited",
            "es": "visité"
          },
          {
            "en": "clean  →  cleaned",
            "es": "limpié"
          },
          {
            "en": "study  →  studied",
            "es": "estudié"
          },
          {
            "en": "walk  →  walked",
            "es": "caminé"
          },
          {
            "en": "stay  →  stayed",
            "es": "me quedé"
          },
          {
            "en": "travel  →  traveled",
            "es": "viajé"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Verbos irregulares",
        "items": [
          {
            "en": "go  →  went",
            "es": "fui"
          },
          {
            "en": "have  →  had",
            "es": "tuve / comí"
          },
          {
            "en": "eat  →  ate",
            "es": "comí"
          },
          {
            "en": "drink  →  drank",
            "es": "tomé"
          },
          {
            "en": "see  →  saw",
            "es": "vi"
          },
          {
            "en": "buy  →  bought",
            "es": "compré"
          },
          {
            "en": "make  →  made",
            "es": "hice"
          },
          {
            "en": "get up  →  got up",
            "es": "me levanté"
          },
          {
            "en": "do  →  did",
            "es": "hice"
          },
          {
            "en": "come  →  came",
            "es": "vine"
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "Was / were (fui, estuve, era)",
        "explicacion": "Es el pasado de to be. Was con I, he, she, it; were con you, we, they.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I was at home last night.",
            "Anoche estuve en casa."
          ],
          [
            "They were at the beach.",
            "Estaban en la playa."
          ],
          [
            "It wasn't fun.",
            "No estuvo divertido."
          ],
          [
            "Was it good?  –  Yes, it was.",
            "¿Estuvo bueno? – Sí."
          ]
        ],
        "pagina": 74
      },
      {
        "tipo": "gramatica",
        "titulo": "Pasado simple",
        "explicacion": "Los verbos regulares agregan -ed; los irregulares cambian (hay que aprenderlos). Para negar y preguntar se usa did / didn't y el verbo regresa a su forma normal.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I cleaned the house.  ·  We went to Ensenada.",
            "Limpié la casa. · Fuimos a Ensenada."
          ],
          [
            "She didn't work yesterday.",
            "Ella no trabajó ayer."
          ],
          [
            "Did you go to the beach?  –  Yes, I did. / No, I didn't.",
            "¿Fuiste a la playa? – Sí. / No."
          ],
          [
            "What did you do last weekend?",
            "¿Qué hiciste el fin de semana?"
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "El sonido de -ed",
        "texto": "La -ed casi nunca se pronuncia «ed». Suena como t en worked, como d en played, y solo suena «id» en verbos que terminan en t o d: visited, needed."
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: ¿Cómo estuvo tu fin de semana?",
        "contexto": "Es lunes. El maestro platica con Rosa antes de empezar la clase.",
        "pagina": 75,
        "lineas": [
          {
            "quien": "Teacher",
            "en": "Good morning! How was your weekend, Rosa?",
            "es": "¡Buenos días! ¿Cómo estuvo tu fin de semana, Rosa?"
          },
          {
            "quien": "Rosa",
            "en": "It was great! I went to Ensenada with my family.",
            "es": "¡Estuvo muy bien! Fui a Ensenada con mi familia."
          },
          {
            "quien": "Teacher",
            "en": "Nice! What did you do there?",
            "es": "¡Qué bien! ¿Qué hicieron allá?"
          },
          {
            "quien": "Rosa",
            "en": "We visited the market and ate fish tacos.",
            "es": "Visitamos el mercado y comimos tacos de pescado."
          },
          {
            "quien": "Teacher",
            "en": "Did you go to La Bufadora?",
            "es": "¿Fueron a La Bufadora?"
          },
          {
            "quien": "Rosa",
            "en": "Yes, we did! It was beautiful. And you, teacher?",
            "es": "¡Sí! Estaba hermosa. ¿Y usted, maestro?"
          },
          {
            "quien": "Teacher",
            "en": "I stayed home. I cleaned the house and watched a movie.",
            "es": "Me quedé en casa. Limpié la casa y vi una película."
          },
          {
            "quien": "Rosa",
            "en": "Was the movie good?",
            "es": "¿Estuvo buena la película?"
          },
          {
            "quien": "Teacher",
            "en": "No, it wasn't. It was boring!",
            "es": "No. ¡Estuvo aburrida!"
          }
        ]
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "Relaciona el verbo con su pasado",
        "cuadernillo": {
          "pagina": 76,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "go",
            "went"
          ],
          [
            "eat",
            "ate"
          ],
          [
            "have",
            "had"
          ],
          [
            "see",
            "saw"
          ],
          [
            "buy",
            "bought"
          ],
          [
            "drink",
            "drank"
          ],
          [
            "make",
            "made"
          ],
          [
            "come",
            "came"
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Completa con was o were",
        "cuadernillo": {
          "pagina": 76,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Escribe was, were, Was o Were.",
        "preguntas": [
          {
            "p": "I ___ at home last night.",
            "r": [
              "was"
            ]
          },
          {
            "p": "We ___ in Tijuana yesterday.",
            "r": [
              "were"
            ]
          },
          {
            "p": "The party ___ fun.",
            "r": [
              "was"
            ]
          },
          {
            "p": "___ you at work on Saturday?",
            "r": [
              "Were"
            ]
          },
          {
            "p": "My parents ___ tired.",
            "r": [
              "were"
            ]
          },
          {
            "p": "It ___ cold last weekend.",
            "r": [
              "was"
            ]
          }
        ],
        "banco": [
          "was",
          "were"
        ]
      },
      {
        "id": "cC",
        "titulo": "Escribe el verbo en pasado",
        "cuadernillo": {
          "pagina": 77,
          "letra": "C"
        },
        "tipo": "completar",
        "instrucciones": "Escribe el pasado del verbo que está entre paréntesis.",
        "preguntas": [
          {
            "p": "Yesterday I ___ (clean) my house.",
            "r": [
              "cleaned"
            ]
          },
          {
            "p": "Last night we ___ (watch) a movie.",
            "r": [
              "watched"
            ]
          },
          {
            "p": "She ___ (go) to the beach on Sunday.",
            "r": [
              "went"
            ]
          },
          {
            "p": "They ___ (eat) tacos.",
            "r": [
              "ate"
            ]
          },
          {
            "p": "I ___ (buy) a new shirt.",
            "r": [
              "bought"
            ]
          },
          {
            "p": "He ___ (not / work) yesterday.",
            "r": [
              "didn't work",
              "did not work"
            ]
          }
        ]
      },
      {
        "id": "cD",
        "titulo": "Lee y contesta",
        "cuadernillo": {
          "pagina": 77,
          "letra": "D"
        },
        "tipo": "opcion",
        "instrucciones": "Lee el texto y elige True (verdadero) o False (falso).",
        "preguntas": [
          {
            "p": "Marisol got up at 7:00 on Saturday.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "She bought fruit at the market.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "She cooked pozole on Sunday.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          },
          {
            "p": "She worked on Sunday.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          },
          {
            "p": "She visited her grandmother.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 0
          },
          {
            "p": "On Sunday she went to bed late.",
            "opciones": [
              "True (verdadero)",
              "False (falso)"
            ],
            "correcta": 1
          }
        ],
        "lectura": "Last Saturday was a busy day for Marisol. She got up at seven and cleaned the house. Then she went to the market and bought fruit and vegetables. In the afternoon, she cooked pozole for her family. On Sunday, she didn't work. She visited her grandmother in Popotla and they walked on the beach. In the evening, she was tired, so she watched TV and went to bed early."
      },
      {
        "id": "cE",
        "titulo": "Mi fin de semana",
        "cuadernillo": {
          "pagina": 78,
          "letra": "E"
        },
        "tipo": "escritura",
        "instrucciones": "Escribe 6 oraciones sobre tu fin de semana pasado.",
        "ejemplo": "Last weekend was ______. On Saturday I ______. On Sunday I didn't ______."
      },
      {
        "id": "cF",
        "titulo": "Did you…? Encuesta del fin de semana",
        "cuadernillo": {
          "pagina": 78,
          "letra": "F"
        },
        "tipo": "escritura",
        "instrucciones": "Pregunta a dos compañeros qué hicieron el fin de semana pasado. Escribe Yes o No. En la plataforma, escribe tus resultados en el cuadro de texto.",
        "ejemplo": "Did you go to the beach? Ana: Yes. Luis: No.\nDid you cook? Ana: Yes. Luis: Yes.\n…"
      }
    ]
  },
  {
    "id": "u12",
    "numero": 12,
    "titulo": "Plans & Dreams",
    "tituloEs": "Planes y sueños",
    "trimestre": 3,
    "paginas": {
      "inicio": 80,
      "fin": 85,
      "vocab": 80,
      "gram": 80,
      "dial": 81,
      "auto": 85
    },
    "material": [
      {
        "tipo": "intro",
        "texto": "¡Última unidad! Ahora vas a hablar de tus planes y de tus sueños, y vas a demostrar todo lo que aprendiste este año."
      },
      {
        "tipo": "metas",
        "titulo": "Al terminar esta unidad podrás:",
        "items": [
          "Hablar de mis planes con going to.",
          "Hablar de mis metas y sueños con want to, would like to y My dream is to…",
          "Presentar oralmente todo lo que aprendí en el curso."
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Para hablar del futuro",
        "items": [
          {
            "en": "tomorrow",
            "es": "mañana"
          },
          {
            "en": "next week",
            "es": "la próxima semana"
          },
          {
            "en": "next month",
            "es": "el próximo mes"
          },
          {
            "en": "next year",
            "es": "el próximo año"
          },
          {
            "en": "this summer",
            "es": "este verano"
          },
          {
            "en": "soon",
            "es": "pronto"
          },
          {
            "en": "in the future",
            "es": "en el futuro"
          }
        ],
        "pagina": 80
      },
      {
        "tipo": "vocab",
        "titulo": "Planes y metas",
        "items": [
          {
            "en": "get a better job",
            "es": "conseguir un mejor trabajo"
          },
          {
            "en": "open a business",
            "es": "abrir un negocio"
          },
          {
            "en": "learn to drive",
            "es": "aprender a manejar"
          },
          {
            "en": "finish school",
            "es": "terminar la escuela"
          },
          {
            "en": "buy a house",
            "es": "comprar una casa"
          },
          {
            "en": "travel",
            "es": "viajar"
          },
          {
            "en": "keep studying English",
            "es": "seguir estudiando inglés"
          },
          {
            "en": "take a new course",
            "es": "tomar un curso nuevo"
          },
          {
            "en": "help tourists",
            "es": "atender a turistas"
          },
          {
            "en": "visit my family",
            "es": "visitar a mi familia"
          }
        ]
      },
      {
        "tipo": "vocab",
        "titulo": "Para hablar de sueños",
        "items": [
          {
            "en": "I'm going to…",
            "es": "Voy a…"
          },
          {
            "en": "I want to…",
            "es": "Quiero…"
          },
          {
            "en": "I'd like to…",
            "es": "Me gustaría…"
          },
          {
            "en": "My dream is to…",
            "es": "Mi sueño es…"
          },
          {
            "en": "I hope to…",
            "es": "Espero…"
          },
          {
            "en": "Good luck!",
            "es": "¡Buena suerte!"
          }
        ]
      },
      {
        "tipo": "gramatica",
        "titulo": "Going to (voy a…)",
        "explicacion": "Para planes se usa am / is / are + going to + verbo en forma normal.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I'm going to study tonight.",
            "Voy a estudiar en la noche."
          ],
          [
            "She's going to open a business.",
            "Ella va a abrir un negocio."
          ],
          [
            "They aren't going to travel this year.",
            "No van a viajar este año."
          ],
          [
            "Are you going to work on Saturday?  –  Yes, I am.",
            "¿Vas a trabajar el sábado? – Sí."
          ],
          [
            "What are you going to do?",
            "¿Qué vas a hacer?"
          ]
        ],
        "pagina": 80
      },
      {
        "tipo": "gramatica",
        "titulo": "Want to / would like to",
        "explicacion": "Después de want to, would like to y My dream is to, el verbo va en forma normal.",
        "encabezados": [
          "Inglés",
          "Significado"
        ],
        "filas": [
          [
            "I want to learn more English.",
            "Quiero aprender más inglés."
          ],
          [
            "I'd like to travel.",
            "Me gustaría viajar."
          ],
          [
            "My dream is to have my own restaurant.",
            "Mi sueño es tener mi propio restaurante."
          ]
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Gonna",
        "texto": "Al hablar rápido, going to suena «gonna»: I'm gonna study. Lo vas a escuchar mucho, pero en tus tareas escríbelo completo."
      },
      {
        "tipo": "dialogo",
        "titulo": "Diálogo: La última clase",
        "contexto": "Es la última semana del curso. El maestro pregunta a Miguel y a Lucía por sus planes.",
        "pagina": 81,
        "lineas": [
          {
            "quien": "Teacher",
            "en": "What are you going to do this summer, Miguel?",
            "es": "¿Qué vas a hacer este verano, Miguel?"
          },
          {
            "quien": "Miguel",
            "en": "I'm going to work at a hotel in Rosarito. I want to use my English with the tourists.",
            "es": "Voy a trabajar en un hotel de Rosarito. Quiero usar mi inglés con los turistas."
          },
          {
            "quien": "Teacher",
            "en": "Excellent! And next year?",
            "es": "¡Excelente! ¿Y el próximo año?"
          },
          {
            "quien": "Miguel",
            "en": "I'm going to take the intermediate course. My dream is to open my own restaurant.",
            "es": "Voy a tomar el curso intermedio. Mi sueño es abrir mi propio restaurante."
          },
          {
            "quien": "Teacher",
            "en": "That's a great plan. And you, Lucía?",
            "es": "Es un gran plan. ¿Y tú, Lucía?"
          },
          {
            "quien": "Lucía",
            "en": "I'm going to visit my sister in Mexicali. And I'd like to learn to drive.",
            "es": "Voy a visitar a mi hermana en Mexicali. Y me gustaría aprender a manejar."
          },
          {
            "quien": "Teacher",
            "en": "Good luck to both of you! I'm very proud of you.",
            "es": "¡Buena suerte a los dos! Estoy muy orgulloso de ustedes."
          }
        ]
      },
      {
        "tipo": "tip",
        "titulo": "Actividad oral en clase: Proyecto final: All about me",
        "texto": "1) Saludo y presentación: nombre, edad, de dónde eres, a qué te dedicas. (Unidades 1 y 2) 2) Tu familia y tu rutina. (Unidades 3 y 4) 3) Tu comida favorita, tu colonia o tu trabajo. (Unidades 5, 6 y 7) 4) Lo que sabes hacer y lo que te gusta. (Unidad 9) 5) Algo que hiciste el fin de semana pasado. (Unidad 11) 6) Tus planes y tu sueño. (Unidad 12) Despedida.",
        "pagina": 85
      }
    ],
    "actividades": [
      {
        "id": "cA",
        "titulo": "Relaciona inglés y español",
        "cuadernillo": {
          "pagina": 82,
          "letra": "A"
        },
        "tipo": "relacionar",
        "instrucciones": "Elige la opción correcta para cada una.",
        "pares": [
          [
            "next year",
            "el próximo año"
          ],
          [
            "open a business",
            "abrir un negocio"
          ],
          [
            "learn to drive",
            "aprender a manejar"
          ],
          [
            "buy a house",
            "comprar una casa"
          ],
          [
            "get a better job",
            "conseguir un mejor trabajo"
          ],
          [
            "I'd like to…",
            "Me gustaría…"
          ],
          [
            "My dream is to…",
            "Mi sueño es…"
          ],
          [
            "soon",
            "pronto"
          ]
        ]
      },
      {
        "id": "cB",
        "titulo": "Completa con going to",
        "cuadernillo": {
          "pagina": 82,
          "letra": "B"
        },
        "tipo": "completar",
        "instrucciones": "Escribe am / is / are + going to + el verbo entre paréntesis.",
        "preguntas": [
          {
            "p": "I ___ (study) tonight.",
            "r": [
              "am going to study"
            ]
          },
          {
            "p": "She ___ (visit) her mother.",
            "r": [
              "is going to visit"
            ]
          },
          {
            "p": "We ___ (cook) tomorrow.",
            "r": [
              "are going to cook"
            ]
          },
          {
            "p": "They ___ (not / travel) this year.",
            "r": [
              "aren't going to travel",
              "are not going to travel"
            ]
          },
          {
            "p": "___ you ___ (work) on Saturday?",
            "r": [
              "Are / going to work"
            ]
          },
          {
            "p": "He ___ (open) a store.",
            "r": [
              "is going to open"
            ]
          }
        ]
      },
      {
        "id": "cC",
        "titulo": "Repaso de todo el año",
        "cuadernillo": {
          "pagina": 82,
          "letra": "C"
        },
        "tipo": "opcion",
        "instrucciones": "Elige la respuesta correcta.",
        "preguntas": [
          {
            "p": "Where ___ you from?",
            "opciones": [
              "is",
              "are",
              "do"
            ],
            "correcta": 1
          },
          {
            "p": "She ___ two sons.",
            "opciones": [
              "have",
              "has",
              "is"
            ],
            "correcta": 1
          },
          {
            "p": "___ you work on Sunday?",
            "opciones": [
              "Do",
              "Are",
              "Does"
            ],
            "correcta": 0
          },
          {
            "p": "There ___ three banks on this street.",
            "opciones": [
              "is",
              "are",
              "have"
            ],
            "correcta": 1
          },
          {
            "p": "I ___ swim very well.",
            "opciones": [
              "can",
              "am",
              "do"
            ],
            "correcta": 0
          },
          {
            "p": "Yesterday we ___ to the beach.",
            "opciones": [
              "go",
              "went",
              "going"
            ],
            "correcta": 1
          },
          {
            "p": "Look! The children ___ playing.",
            "opciones": [
              "is",
              "are",
              "do"
            ],
            "correcta": 1
          },
          {
            "p": "Next year I ___ going to study.",
            "opciones": [
              "am",
              "do",
              "will"
            ],
            "correcta": 0
          }
        ]
      },
      {
        "id": "cD",
        "titulo": "Ordena las palabras",
        "cuadernillo": {
          "pagina": 84,
          "letra": "D"
        },
        "tipo": "ordenar",
        "instrucciones": "Toca las palabras en el orden correcto para formar la oración. Si te equivocas, toca la palabra otra vez para regresarla.",
        "preguntas": [
          {
            "r": "I'm going to visit my family"
          },
          {
            "r": "What are you going to do tomorrow"
          },
          {
            "r": "She wants to open a business"
          },
          {
            "r": "We aren't going to work next week"
          },
          {
            "r": "My dream is to speak English very well"
          }
        ]
      },
      {
        "id": "cE",
        "titulo": "Mis planes y mis sueños",
        "cuadernillo": {
          "pagina": 84,
          "letra": "E"
        },
        "tipo": "escritura",
        "instrucciones": "Escribe 6 a 8 oraciones sobre tus planes para el verano, para el próximo año y tu gran sueño.",
        "ejemplo": "This summer I'm going to ______. Next year I want to ______. My dream is to ______."
      }
    ]
  }
];

// Se colocan en su unidad: los oficios al inicio del vocabulario de la 7 y el diálogo antes del de la 5
{
  const u7 = UNIDADES.find(u => u.id === 'u7');
  u7.material.splice(u7.material.findIndex(b => b.tipo === 'vocab'), 0, ...OFICIOS_U7);
  u7.actividades.push({ ...PRACTICA_OFICIOS_U7, extra: true });
  const u5 = UNIDADES.find(u => u.id === 'u5');
  u5.material.splice(u5.material.findIndex(b => b.tipo === 'dialogo'), 0, DIALOGO_RESTAURANTE_U5);
}

export function buscarUnidad(id) {
  return UNIDADES.find(u => u.id === id);
}

export function itemsDe(actividad) {
  if (actividad.tipo === 'relacionar') return actividad.pares;
  if (actividad.tipo === 'escritura') return [];
  return actividad.preguntas;
}
