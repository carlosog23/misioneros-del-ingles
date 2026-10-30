// =====================================================================
//  CONTENIDO DEL CURSO · Misioneros del Inglés
//  Aquí viven las unidades: material y actividades.
//  Para agregar una unidad nueva, copia la estructura de la Unidad 1.
// =====================================================================

export const UNIDADES = [
  {
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
      },
      {
        tipo: 'dialogo',
        titulo: 'Diálogo: en un restaurante de Rosarito',
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
      },
      {
        id: 'a5',
        tipo: 'escritura',
        titulo: 'Preséntate en inglés',
        instrucciones: 'Escribe de 4 a 6 oraciones: saluda, di tu nombre, de dónde eres, dónde vives, a qué te dedicas y despídete. Tu maestro la revisará y te dejará observaciones.',
        ejemplo: "Hello! My name is Laura. I'm from Sinaloa. I live in Rosarito. I'm a cook. I work at a restaurant. See you later!"
      }
    ]
  },
  { id: 'u2', numero: 2, titulo: 'Numbers & Age', tituloEs: 'Números y edad', proximamente: true },
  { id: 'u3', numero: 3, titulo: 'My Family', tituloEs: 'Mi familia', proximamente: true },
  { id: 'u4', numero: 4, titulo: 'Daily Routine', tituloEs: 'Mi rutina diaria', proximamente: true },
  { id: 'u5', numero: 5, titulo: 'Food & Restaurants', tituloEs: 'Comida y restaurantes', proximamente: true },
  { id: 'u6', numero: 6, titulo: 'Around Town', tituloEs: 'En la ciudad', proximamente: true }
];

export function buscarUnidad(id) {
  return UNIDADES.find(u => u.id === id);
}

export function itemsDe(actividad) {
  if (actividad.tipo === 'relacionar') return actividad.pares;
  if (actividad.tipo === 'escritura') return [];
  return actividad.preguntas;
}
