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
        "Fui a una fiesta de 15 y nunca creí que esa noche iba a conocer al amor de mi vida.",
      foto: "fotos/01-la-foto-con-la-que-empezo-todo.jpeg",
      pie: "La foto con la que empezó todo",
      enfoque: "50% 35%",
    },
    {
      icono: "💝",
      fecha: "29 de junio de 2024",
      titulo: "Nuestras primeras fotos",
      texto:
        "Con ilusión, con nervios, cuando todavía nos dábamos besos tímidos.",
      foto: "fotos/02-la-segunda-foto-de-nosotros.jpeg",
      pie: "Nuestra segunda foto 🐶",
      enfoque: "50% 30%",
    },
    {
      icono: "🏫",
      fecha: "El colegio",
      titulo: "Nuestra época más linda",
      texto:
        "Haber vivido contigo los descansos, las izadas de bandera y las salidas del colegio fue lo más bonito que me pudo pasar, y lo volvería a vivir. Todo el colegio a tu lado fue muy bonito.",
      foto: "fotos/colegio.jpeg",
      pie: "La más linda del colegio",
      enfoque: "50% 62%",
      zoom: 1.75,
    },
    {
      icono: "🎓",
      fecha: "Después del grado",
      titulo: "Me gradué del colegio",
      texto:
        "Ya no tenía que volver, pero seguí yendo a llevarte y a recogerte. Me quedaba lejos, pero por tenerte ahí valía la pena.",
    },
    {
      icono: "🍟",
      fecha: "Muchas, muchas veces",
      titulo: "Nuestra comida favorita",
      texto:
        "Nuestra comida de siempre, la del desvare: el choriperro y la salchipapa que tanto nos encantan.",
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
        "Nuestro primer viaje ha sido lo más hermoso que hemos vivido. Compartimos momentos muy íntimos y muy lindos: dormir juntos, arruncharnos, comer, bailar… Haber vivido todo eso a tu lado fue lo que más me encantó. No sabes las ganas que tengo de repetir un paseo así contigo.",
      foto: "fotos/piscina.jpeg",
      pie: "Girardot, 2026 ☀️",
      enfoque: "50% 35%",
    },
  ],

  // ---------- Collage de fotos ----------
  // Cada 5 fotos arman un collage; el segundo sale en espejo, y así.
  // Si sobran fotos (menos de 5), aparecen debajo en cuadrícula.
  // "fraseFotos", "notaFotos" y "teAmo" llevan un texto por collage, en orden.
  // "texto" sale cuando ella abre la foto en grande.
  // Ojo: en internet los nombres distinguen mayúsculas ("Foto.JPG" no es "foto.jpg").
  fraseFotos: [
    "Cada día a tu lado es una aventura llena de risas, amor y momentos que no quiero olvidar.",
    "Contigo los días normales se vuelven mis favoritos. Y los especiales, inolvidables.",
  ],
  notaFotos: ["15.11.2026 · feliz cumple, mi amor", "y todos los que nos faltan"],
  teAmo: ["te amo", "siempre tú"],
  fotos: [
    // Collage 1
    { archivo: "fotos/mesa-luces.jpeg", texto: "Tú y yo 💝", enfoque: "50% 40%" },
    { archivo: "fotos/espejo-blanco-2.jpeg", texto: "Siempre nosotros", enfoque: "38% 72%", zoom: 1.45 },
    { archivo: "fotos/tienda.jpeg", texto: "Mi lugar favorito: a tu lado", enfoque: "50% 40%" },
    { archivo: "fotos/gafas.jpeg", texto: "Contigo hasta las fotos salen mejor 😎", enfoque: "50% 35%" },
    { archivo: "fotos/espejo-rosado.jpeg", texto: "Mi princesa", enfoque: "50% 35%" },
    // Collage 2 (la 1.ª lleva el "siempre tú")
    { archivo: "fotos/quince-baile.jpeg", texto: "Bailando contigo 💙", enfoque: "55% 55%" },
    { archivo: "fotos/osos.jpeg", texto: "Un corazón de ositos 🐻💗", enfoque: "50% 55%" },
    { archivo: "fotos/espejo-saco.jpeg", texto: "Tú, yo y el espejo 🤍", enfoque: "52% 30%", zoom: 1.3 },
    { archivo: "fotos/espejo-bn.jpeg", texto: "Abrazados, como siempre 🖤", enfoque: "50% 45%" },
    { archivo: "fotos/ella-bn.jpeg", texto: "La más linda, hasta haciendo caras 😛", enfoque: "50% 25%" },
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
  // "sonido: false" deja sonando la música de fondo mientras se ve ese video
  // (se usa en los que no tienen audio).
  // "forma" dice cómo se ve cada uno:
  //   "alto"     = video vertical, media fila (van de a dos)
  //   "cuadrado" = video cuadrado, media fila (van de a dos)
  //   "ancho"    = video horizontal, fila entera
  //   "foto"     = horizontal más cuadrado (4:3), fila entera
  // Para que no queden huecos, pon los de media fila en parejas.
  // { nota: "..." } pone un papelito con ese texto en ese lugar.
  videos: [
    { archivo: "videos/perrito.mp4", poster: "videos/perrito.jpg", texto: "Con filtro de perrito 🐶", forma: "alto" },
    { archivo: "videos/globos.mp4", poster: "videos/globos.jpg", texto: "La sorpresa de tus 16 🎈", forma: "alto" },
    { archivo: "videos/gafas.mp4", poster: "videos/gafas.jpg", texto: "Tú, yo y las gafas 😎", forma: "ancho" },
    { archivo: "videos/luces.mp4", poster: "videos/luces.jpg", texto: "Nosotros en un bar ✨", forma: "alto" },
    { archivo: "videos/tus-brazos.mp4", poster: "videos/tus-brazos.jpg", texto: "Directo a tus brazos 🤍", forma: "alto" },
    { archivo: "videos/risas.mp4", poster: "videos/risas.jpg", texto: "Compartiendo con mi amor 💗", forma: "ancho" },
    { archivo: "videos/perritos-uniforme.mp4", poster: "videos/perritos-uniforme.jpg", texto: "Nosotros compartiendo en unos 15 🎉", forma: "alto" },
    { archivo: "videos/bocotas.mp4", poster: "videos/bocotas.jpg", texto: "Nuestros videos más lindos y más viejitos", forma: "alto", sonido: false },
    { archivo: "videos/retro.mp4", poster: "videos/retro.jpg", texto: "Modo retro 📼", forma: "cuadrado", sonido: false },
    { archivo: "videos/guino.mp4", poster: "videos/guino.jpg", texto: "Esos ojos tan hermosos 😍", forma: "cuadrado", sonido: false },
    { archivo: "videos/sube-y-baja.mp4", poster: "videos/sube-y-baja.jpg", texto: "En el sube y baja 🎢", forma: "alto" },
    { archivo: "videos/tu-perrito.mp4", poster: "videos/tu-perrito.jpg", texto: "Tu perrito favorito 🐶", forma: "alto", sonido: false },
    { nota: "y todos los que nos faltan por grabar 🎥" },
  ],

  // ---------- Lo que me encanta de ti (8 estrellas) ----------
  // "foto" es opcional: sale pegada en la tarjeta cuando ella toca esa estrella.
  razones: [
    { titulo: "Tus ojos", texto: "Me puedo quedar mirándolos todo el día y nunca me voy a cansar.", foto: "fotos/ella-ojos.jpeg", enfoque: "55% 35%" },
    { titulo: "Tu pelo", texto: "Me encanta. Suelto, recogido, despeinado… como sea.", foto: "fotos/ella-pelo.jpeg", enfoque: "50% 40%" },
    { titulo: "Tu carita", texto: "Esa carita tuya me arregla cualquier día malo en dos segundos.", foto: "fotos/ella-carita.jpeg", enfoque: "45% 40%" },
    { titulo: "Tu forma de ser", texto: "Eres tú, sin copiarle a nadie. Y esa es justo la persona de la que me enamoré." },
    { titulo: "Lo tierna que eres", texto: "Mi flaca tiene una ternura que me desarma, literal. Contigo me he vuelto muy cursi, y lo voy a seguir siendo si así te gusta, porque por el amor de mi vida lo hago todo." },
    { titulo: "Lo detallista", texto: "Siempre tienes un detalle, una sorpresa, algo pensado para mí. Hoy me tocaba a mí." },
    { titulo: "Lo atenta que eres", texto: "Siempre pendiente de mí, de cómo estoy, de si ya comí. Nadie me cuida como tú." },
    { titulo: "Que me aguantas", texto: "Con mi humor pesado y mis bromas no tan chistosas… y aun así te quedas. Así es el amor de mi vida." },
  ],

  // ---------- La carta (cada elemento es un párrafo) ----------
  carta: {
    saludo: "Mi flaquita, mi princesa, mi vida:",
    parrafos: [
      "Hoy cumples 17 años y quería regalarte algo un poco original. Así que te hice un pedacito de cielo lleno de tulipanes, para que lo abras cada vez que quieras acordarte de cuánto te amo, mi amor.",
      "Te conocí un 21 de abril en una fiesta de 15. ¿Quién iba a pensar que ese día conocí a mi futura esposa y la madre de mis hijos? Desde ese día mi vida tiene otro color. El colegio fue nuestra época más linda: los descansos contigo, acompañarte a tu casita, salir juntos cuando se podía. Y cuando me gradué, lo único que no quise dejar de hacer fue ir por ti, mi flaquita.",
      "Me encantan tus ojos, tu pelo, tu carita. Me encanta lo tierna que eres, lo detallista, lo atenta que estás siempre conmigo. Me encanta que una salchipapa contigo sea el mejor plan que pueda haber, porque solo con estar contigo se me arregla el día.",
      "No todo ha sido perfecto: hemos tenido nuestras idas y vueltas, muchas veces terminamos y dejamos de hablar, pero, mi amor, mira dónde estamos: siempre terminamos eligiéndonos. Y yo te volvería a elegir todas las veces necesarias.",
      "Girardot me dejó pensando. Comer contigo, bailar contigo, ver ese matrimonio a tu lado… quiero muchos más viajes, muchas más primeras veces y muchos más cumpleaños junto a ti.",
      "Feliz cumpleaños, mi amor. Gracias por existir y por dejarme quererte. Eres demasiado para mí, y por eso mismo siempre mejoraré para ser el amor de la vida del amor de mi vida. Te amo, mi cuchurrumi, no te imaginas cuánto. Por favor, nunca cambies ese amor tan lindo que me tienes, y pásala muy bien en tu día especial, mi amor. No podré estar muy presente, pero quiero que al menos con mis detallitos me pienses todo el día 💝",
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
