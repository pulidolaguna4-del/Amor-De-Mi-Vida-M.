/* ============================================================
   CONTENIDO DE LA PÁGINA
   Todo lo que se lee en la página está aquí. Para cambiar un
   texto, una foto o una canción, solo edita este archivo.
   ============================================================ */
window.CONTENIDO = {
  // Fechas: [año, mes, día]
  fechaNovios: [2024, 6, 29],
  fechaConocimos: [2024, 4, 21],
  edad: 17,

  apodos: ["mi flaquita 🌷", "mi amor 💝", "mi princesa 👑", "mi vida ✨"],

  // ---------- Tira tipo fotomatón del inicio (3 fotos) ----------
  // "enfoque" mueve el recorte de la foto: "50% 30%" = centrada, un poco arriba.
  // "zoom" (opcional, por ejemplo 1.5) acerca la foto hacia ese punto.
  tira: [
    { archivo: "fotos/01-la-foto-con-la-que-empezo-todo.jpeg", enfoque: "50% 35%" },
    { archivo: "fotos/02-la-segunda-foto-de-nosotros.jpeg", enfoque: "50% 32%" },
    { archivo: "fotos/carro.jpeg", enfoque: "50% 40%" },
  ],
  tiraPie: "tú & yo",

  // ---------- Nuestra historia ----------
  // "foto" es opcional: si la pones, sale pegada en la tarjeta.
  historia: [
    {
      icono: "🪩",
      fecha: "21 de abril de 2024",
      titulo: "Una fiesta de 15",
      texto:
        "Fui a una fiesta de 15 y el que salió con regalo fui yo: esa noche te conocí. Y ni siquiera era mi cumpleaños.",
      foto: "fotos/01-la-foto-con-la-que-empezo-todo.jpeg",
      pie: "La foto con la que empezó todo",
      enfoque: "50% 35%",
    },
    {
      icono: "💝",
      fecha: "29 de junio de 2024",
      titulo: "Oficialmente novios",
      texto:
        "El día que dejaste de ser «la niña que me encanta» para ser mi novia. La mejor decisión que hemos tomado los dos.",
      foto: "fotos/02-la-segunda-foto-de-nosotros.jpeg",
      pie: "Nuestra segunda foto 🐶",
      enfoque: "50% 30%",
    },
    {
      icono: "🏫",
      fecha: "El colegio",
      titulo: "Nuestra época más linda",
      texto:
        "Los descansos juntos, las izadas de bandera que solo aguantaba porque estabas a mi lado, y salir juntos al final del día. Todo el colegio era más bonito contigo.",
      foto: "fotos/colegio.jpeg",
      pie: "La más linda del colegio",
      enfoque: "50% 62%",
      zoom: 1.75,
    },
    {
      icono: "🎓",
      fecha: "Después del grado",
      titulo: "Me gradué del colegio, no de ti",
      texto:
        "Ya no tenía que volver, pero seguí yendo: a llevarte y a recogerte. Era, de lejos, el mejor trayecto del día.",
    },
    {
      icono: "🍟",
      fecha: "Muchas, muchas veces",
      titulo: "Salchipapa con choriperro",
      texto:
        "Nuestro plan romántico oficial. Y de postre helado o ensalada de frutas, para poder decir que comemos sano.",
    },
    {
      icono: "🕷️",
      fecha: "2026",
      titulo: "Cine: Spider-Man: Brand New Day",
      texto:
        "Tú, yo, crispetas y el Hombre Araña. Aunque, siendo sincero, lo más lindo de la sala no estaba en la pantalla.",
      foto: "fotos/cine-spiderman.jpeg",
      pie: "Lo más lindo no estaba en la pantalla",
      enfoque: "50% 15%",
      zoom: 1.18,
    },
    {
      icono: "🌴",
      fecha: "Noviembre de 2026",
      titulo: "Girardot",
      texto:
        "Nuestro viaje: comer juntos, bailar juntos y ver un matrimonio por primera vez, los dos. Fue hermoso… y me dejó pensando cosas.",
      foto: "fotos/piscina.jpeg",
      pie: "Girardot, 2026 ☀️",
      enfoque: "50% 35%",
    },
  ],

  // ---------- Collage de fotos ----------
  // Las 5 primeras arman el collage (la 4.ª lleva el "te amo").
  // Si agregas más, aparecen debajo. "texto" sale cuando ella la abre en grande.
  // Ojo: en internet los nombres distinguen mayúsculas ("Foto.JPG" no es "foto.jpg").
  fraseFotos: "Cada día a tu lado es una aventura llena de risas, amor y momentos que no quiero olvidar.",
  notaFotos: "15.11.2026 · feliz cumple, mi amor",
  teAmo: "te amo",
  fotos: [
    { archivo: "fotos/mesa-luces.jpeg", texto: "Tú y yo 💝", enfoque: "50% 40%" },
    { archivo: "fotos/espejo-blanco-2.jpeg", texto: "Siempre nosotros", enfoque: "38% 72%", zoom: 1.45 },
    { archivo: "fotos/tienda.jpeg", texto: "Mi lugar favorito: a tu lado", enfoque: "50% 40%" },
    { archivo: "fotos/gafas.jpeg", texto: "Contigo hasta las fotos salen mejor 😎", enfoque: "50% 35%" },
    { archivo: "fotos/espejo-rosado.jpeg", texto: "Mi princesa", enfoque: "50% 35%" },
  ],

  // ---------- Dedicatoria (foto recortada, estilo vintage) ----------
  // "recorte" es la foto sin fondo (PNG). Si no existe, se usa "foto".
  dedicatoria: {
    texto:
      "A veces me pregunto qué hice para tener la suerte de encontrarte. Gracias por las risas, por los planes de salchipapa y por hacer que cada día sea especial. Eres mi lugar favorito en el mundo.",
    titulo: "¡Feliz cumpleaños, mi amor!",
    recorte: "fotos/espejo-blanco-1-recorte.png",
    foto: "fotos/espejo-blanco-1.jpeg",
  },

  // ---------- Videos ----------
  // "sonido: false" deja sonando la música de fondo mientras se ve ese video.
  notaVideos: "nuestras tonterías favoritas 🎬",
  videos: [
    { archivo: "videos/perrito.mp4", poster: "videos/perrito.jpg", texto: "Con filtro de perrito 🐶" },
    { archivo: "videos/retro.mp4", poster: "videos/retro.jpg", texto: "Modo retro 📼", sonido: false },
    { archivo: "videos/gafas.mp4", poster: "videos/gafas.jpg", texto: "Tú, yo y las gafas 😎" },
  ],

  // ---------- Lo que me encanta de ti (8 estrellas) ----------
  // "foto" es opcional: sale pegada en la tarjeta cuando ella toca esa estrella.
  razones: [
    { titulo: "Tus ojos", texto: "Me puedo quedar mirándolos todo el día. Y lo hago, no creas que no te das cuenta.", foto: "fotos/ella-ojos.jpeg", enfoque: "55% 35%" },
    { titulo: "Tu pelo", texto: "Me encanta. Suelto, recogido, despeinado… como sea.", foto: "fotos/ella-pelo.jpeg", enfoque: "50% 40%" },
    { titulo: "Tu carita", texto: "Esa carita tuya me arregla cualquier día malo en dos segundos.", foto: "fotos/ella-carita.jpeg", enfoque: "45% 40%" },
    { titulo: "Tu forma de ser", texto: "Eres tú, sin copiarle a nadie. Y esa es justo la persona de la que me enamoré." },
    { titulo: "Lo tierna que eres", texto: "Tienes una ternura que me desarma. Contigo hasta yo me vuelvo cursi (la prueba es esta página)." },
    { titulo: "Lo detallista", texto: "Siempre tienes un detalle, una sorpresa, algo pensado para mí. Hoy me tocaba a mí." },
    { titulo: "Lo atenta que eres", texto: "Siempre pendiente de mí, de cómo estoy, de si ya comí. Nadie me cuida como tú." },
    { titulo: "Que me aguantas", texto: "Con mi humor pesado y todo. Eso ya es amor del bueno, mi vida." },
  ],

  // ---------- Cosas muy de nosotros ----------
  nuestras: [
    { icono: "🌷", titulo: "Tulipanes", texto: "Nuestra flor. Por eso esta página está llena de ellos." },
    { icono: "🐱", titulo: "Gatos", texto: "A los dos nos derriten. Y tú te pareces a uno cuando te enojas." },
    { icono: "🕷️", titulo: "Spider-Man", texto: "Mi película favorita… después de verte a ti." },
    { icono: "🧛‍♀️", titulo: "The Vampire Diaries", texto: "Tú con tus vampiros y yo celoso de un tipo de 170 años." },
    { icono: "👻", titulo: "Películas de miedo", texto: "Las ves tú. Yo solo estoy ahí para que me abraces." },
    { icono: "💄", titulo: "Maquillarte", texto: "Te demoras, pero vale la pena. Igual sin maquillaje ya ganaste." },
    { icono: "🚶‍♀️", titulo: "Caminar y hablar", texto: "Tu hobby es hablar. El mío, escucharte (casi siempre)." },
    { icono: "🎵", titulo: "Nuestras canciones", texto: "«Risk It All» y «Distancia». Suenan y ya estoy pensando en ti." },
  ],

  // ---------- La carta (cada elemento es un párrafo) ----------
  carta: {
    saludo: "Mi flaquita, mi princesa, mi vida:",
    parrafos: [
      "Hoy cumples 17 años y quería regalarte algo que no se pudiera envolver. Así que te hice un pedacito de cielo lleno de tulipanes, para que lo abras cada vez que quieras acordarte de cuánto te amo.",
      "Te conocí un 21 de abril en una fiesta de 15 y desde ese día mi vida tiene otro color (morado, rosa y azul, para ser exactos). El colegio fue nuestra época más linda: los descansos contigo, las izadas de bandera, salir juntos. Y cuando me gradué, lo único que no quise dejar de hacer fue ir por ti.",
      "Me encantan tus ojos, tu pelo, tu carita. Me encanta lo tierna que eres, lo detallista, lo atenta que estás siempre conmigo. Me encanta que una salchipapa contigo sea mejor plan que cualquier restaurante elegante.",
      "No todo ha sido perfecto, hemos tenido nuestras idas y vueltas. Pero mira dónde estamos: siempre terminamos eligiéndonos. Y yo te volvería a elegir todas las veces.",
      "Girardot me dejó pensando. Comer contigo, bailar contigo, ver ese matrimonio a tu lado… quiero muchos más viajes, muchas más primeras veces y muchos más cumpleaños junto a ti.",
      "Feliz cumpleaños, mi amor. Gracias por existir y por dejarme quererte.",
    ],
    despedida: "Con todo mi corazón,",
    firma: "Tu cielo 💝🌷",
  },

  // ---------- Música ----------
  // Guarda los mp3 en la carpeta "musica" con estos nombres EXACTOS
  // (todo en minúsculas y con guiones). La primera suena al abrir;
  // la segunda desde la carta hasta el final.
  // Si Windows esconde las extensiones y el archivo quedó como
  // "risk-it-all.mp3.mp3", igual funciona. También acepta .m4a.
  musica: [
    { archivo: "musica/risk-it-all.mp3", titulo: "Risk It All" },
    { archivo: "musica/distancia.mp3", titulo: "Distancia" },
  ],
};
