/* ============================================================
   Feliz cumpleaños, María Fernanda — lógica y animaciones
   Los textos, fotos y canciones se editan en js/contenido.js
   ============================================================ */
(() => {
  "use strict";

  const C = window.CONTENIDO;
  const $ = (sel, raiz = document) => raiz.querySelector(sel);
  const calmado = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const azar = (min, max) => min + Math.random() * (max - min);
  const limitar = (v, min, max) => Math.min(max, Math.max(min, v));

  const crear = (etiqueta, clase, texto) => {
    const el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (texto != null) el.textContent = texto;
    return el;
  };

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  /* ==========================================================
     Ambiente: destellos que titilan y corazones que flotan
     ========================================================== */
  const ambiente = (() => {
    const lienzo = $("#ambiente");
    const ctx = lienzo.getContext("2d");
    const TONOS = ["255,255,255", "255,214,224", "255,176,196", "255,232,238"];
    const CONFETI = ["#ff8fab", "#e8335a", "#ffd1dc", "#ffffff", "#c8213f", "#ffb3c4"];
    let ancho = 0, alto = 0, destellos = [], corazones = [], confeti = [];
    let anterior = 0, visible = true;

    function nuevoCorazon(enCualquierParte) {
      return {
        x: Math.random() * ancho,
        y: enCualquierParte ? Math.random() * alto : alto + 24,
        s: azar(7, 15),
        vy: azar(9, 22),
        fase: Math.random() * 6.283,
        ampl: azar(8, 22),
        alfa: azar(.1, .28),
        tono: TONOS[Math.floor(Math.random() * TONOS.length)],
      };
    }

    function medir() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ancho = lienzo.clientWidth;
      alto = lienzo.clientHeight;
      lienzo.width = Math.round(ancho * dpr);
      lienzo.height = Math.round(alto * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const area = ancho * alto;
      destellos = Array.from({ length: Math.min(55, Math.round(area / 15000)) }, () => ({
        x: Math.random() * ancho,
        y: Math.random() * alto,
        r: azar(1.6, 3.8),
        vel: azar(.5, 1.6),
        fase: Math.random() * 6.283,
        fondo: azar(.02, .08),
        tono: TONOS[Math.floor(Math.random() * TONOS.length)],
      }));
      corazones = Array.from({ length: Math.min(16, Math.round(area / 45000)) }, () => nuevoCorazon(true));
    }

    function trazarCorazon(x, y, s) {
      const t = s / 2;
      ctx.beginPath();
      ctx.moveTo(x, y + t * 0.9);
      ctx.bezierCurveTo(x - t * 1.7, y - t * 0.15, x - t * 0.75, y - t * 1.45, x, y - t * 0.45);
      ctx.bezierCurveTo(x + t * 0.75, y - t * 1.45, x + t * 1.7, y - t * 0.15, x, y + t * 0.9);
      ctx.closePath();
    }

    function trazarDestello(x, y, r) {
      ctx.beginPath();
      ctx.moveTo(x, y - r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.quadraticCurveTo(x, y, x, y + r);
      ctx.quadraticCurveTo(x, y, x - r, y);
      ctx.quadraticCurveTo(x, y, x, y - r);
      ctx.fill();
    }

    function dibujar(ms) {
      const t = ms / 1000;
      const dt = Math.min(0.05, t - anterior || 0);
      anterior = t;
      const desplazado = window.scrollY;

      ctx.clearRect(0, 0, ancho, alto);

      for (const d of destellos) {
        let y = (d.y - desplazado * d.fondo) % alto;
        if (y < 0) y += alto;
        const onda = 0.5 + 0.5 * Math.sin(t * d.vel + d.fase);
        ctx.fillStyle = `rgba(${d.tono},${(0.12 + onda * 0.4).toFixed(3)})`;
        trazarDestello(d.x, y, d.r * (0.6 + 0.4 * onda));
      }

      for (const c of corazones) {
        if (!calmado) {
          c.y -= c.vy * dt;
          if (c.y < -30) Object.assign(c, nuevoCorazon(false));
        }
        const x = c.x + Math.sin(t * 0.6 + c.fase) * c.ampl;
        ctx.fillStyle = `rgba(${c.tono},${c.alfa.toFixed(3)})`;
        trazarCorazon(x, c.y, c.s);
        ctx.fill();
      }

      if (!calmado && confeti.length) {
        for (const p of confeti) {
          p.vida += dt;
          p.vy = Math.min(p.vy + 40 * dt, 170);
          p.x += (p.vx + Math.sin(p.vida * 2.4 + p.fase) * 28) * dt;
          p.y += p.vy * dt;
          p.giro += p.vgiro * dt;
          ctx.save();
          ctx.globalAlpha = p.vida > p.dura - 1 ? Math.max(0, p.dura - p.vida) : 1;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.giro);
          ctx.fillStyle = p.color;
          trazarCorazon(0, 0, p.s);
          ctx.fill();
          ctx.restore();
        }
        confeti = confeti.filter((p) => p.vida < p.dura && p.y < alto + 40);
      }

      if (visible && !calmado) requestAnimationFrame(dibujar);
    }

    let anchoPrevio = 0;
    function alCambiarTamano() {
      if (Math.abs(lienzo.clientWidth - anchoPrevio) < 2) return;
      anchoPrevio = lienzo.clientWidth;
      medir();
      if (calmado) dibujar(0);
    }

    window.addEventListener("resize", alCambiarTamano);
    document.addEventListener("visibilitychange", () => {
      const antes = visible;
      visible = !document.hidden;
      if (visible && !antes && !calmado) requestAnimationFrame(dibujar);
    });

    alCambiarTamano();
    if (calmado) window.addEventListener("scroll", () => dibujar(0), { passive: true });
    else requestAnimationFrame(dibujar);

    return {
      // Lluvia de corazones de colores
      lluvia(cantidad, duranteMs = 2500) {
        if (calmado) return;
        for (let i = 0; i < cantidad; i++) {
          setTimeout(() => confeti.push({
            x: azar(0, ancho),
            y: azar(-60, -10),
            vx: azar(-25, 25),
            vy: azar(50, 120),
            fase: Math.random() * 6.283,
            giro: azar(-0.6, 0.6),
            vgiro: azar(-1.8, 1.8),
            s: azar(10, 20),
            color: CONFETI[Math.floor(Math.random() * CONFETI.length)],
            vida: 0,
            dura: azar(6, 9),
          }), Math.random() * duranteMs);
        }
      },
    };
  })();

  /* ==========================================================
     Tulipanes
     ========================================================== */
  const COLORES = [
    ["#ff8fa3", "#d7193f", "#ffd6de"], // rojo
    ["#ffd0dc", "#f06d8f", "#fff0f4"], // rosa
    ["#fffaf3", "#f2bfcb", "#ffffff"], // blanco
    ["#ffb3c1", "#e0466b", "#ffe3ea"], // fresa
  ];
  let serieTulipan = 0;

  function tulipan({ x, alto = 140, retraso = 0, color } = {}) {
    const [claro, fuerte, luz] = color || COLORES[Math.floor(Math.random() * COLORES.length)];
    const id = "t" + serieTulipan++;
    const curva = azar(-5, 5).toFixed(1);
    const mata = crear("div", "mata");
    mata.style.left = x + "%";
    mata.style.zIndex = String(Math.round(alto));
    mata.innerHTML = `
      <div class="tulipan" style="--alto:${alto.toFixed(0)}px;--retraso:${retraso.toFixed(2)}s;--vaiven:${azar(3, 5.5).toFixed(2)}s">
        <svg viewBox="0 0 60 160">
          <defs>
            <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="${claro}"/><stop offset="1" stop-color="${fuerte}"/>
            </linearGradient>
          </defs>
          <path d="M30 160 C ${30 + +curva} 122, ${30 - +curva} 88, 30 52" fill="none" stroke="#4f9a6a" stroke-width="3.2" stroke-linecap="round"/>
          <path d="M30 136 C 11 126, 5 100, 10 82 C 21 97, 28 114, 30 136Z" fill="#3c8558"/>
          <path d="M30 146 C 49 134, 55 110, 51 94 C 41 108, 33 124, 30 146Z" fill="#5aad78"/>
          <path d="M30 57 C 12 55, 8 34, 13 12 C 19 19, 24 23, 30 9 C 36 23, 41 19, 47 12 C 52 34, 48 55, 30 57Z" fill="url(#${id})"/>
          <path d="M30 57 C 21 46, 21 25, 30 9 C 39 25, 39 46, 30 57Z" fill="${luz}" opacity=".55"/>
        </svg>
      </div>`;
    return mata;
  }

  // Ramo de la portada
  (() => {
    const ramo = $("#ramo");
    const flores = [
      { x: 22, alto: 102, giro: -16, color: COLORES[1] },
      { x: 50, alto: 128, giro: 0, color: COLORES[0] },
      { x: 78, alto: 102, giro: 16, color: COLORES[3] },
    ];
    flores.forEach((f, i) => {
      const mata = tulipan({ x: f.x, alto: f.alto, retraso: 0.7 + i * 0.18, color: f.color });
      mata.style.bottom = "0";
      mata.style.transform = `translateX(-50%) rotate(${f.giro}deg)`;
      mata.style.transformOrigin = "50% 100%";
      ramo.appendChild(mata);
    });
  })();

  function sembrarPradera() {
    const pradera = $("#pradera");
    const cantidad = window.innerWidth < 520 ? 11 : 19;
    const base = limitar(window.innerHeight * 0.19, 105, 175);
    const mitad = (cantidad - 1) / 2;
    for (let i = 0; i < cantidad; i++) {
      const lejos = Math.abs(i - mitad) / mitad; // 0 centro, 1 bordes
      const alto = base * (0.5 + 0.5 * lejos) * azar(0.88, 1.1);
      const x = ((i + 0.5) / cantidad) * 100 + azar(-1.5, 1.5);
      pradera.appendChild(
        tulipan({ x, alto, retraso: 1.3 + Math.abs(i - mitad) * 0.12, color: COLORES[i % COLORES.length] })
      );
    }
  }

  /* ==========================================================
     Fotos: utilidades compartidas
     ========================================================== */
  const fotosCargadas = new Set();

  function imagenConRespaldo(foto, i, marco, textoRespaldo) {
    const img = new Image();
    img.alt = foto.texto || "Nuestra foto " + (i + 1);
    img.decoding = "async";
    img.addEventListener("load", () => fotosCargadas.add(i));
    img.addEventListener("error", () => {
      img.remove();
      marco.classList.add("sin-foto");
      if (textoRespaldo) marco.appendChild(crear("span", "", textoRespaldo));
    });
    img.src = foto.archivo;
    marco.appendChild(img);
    return img;
  }

  /* ==========================================================
     Tira de fotos del inicio (tipo fotomatón)
     ========================================================== */
  (() => {
    const tira = $("#tira");
    const EMOJIS = ["💝", "🌷", "✨"];
    for (let i = 0; i < 3; i++) {
      const cuadro = crear("div", "tira-cuadro");
      cuadro.dataset.emoji = EMOJIS[i];
      const foto = C.fotos[i];
      if (foto) imagenConRespaldo(foto, i, cuadro);
      else cuadro.classList.add("sin-foto");
      tira.appendChild(cuadro);
    }
    tira.appendChild(crear("p", "tira-pie", C.tiraPie || "tú & yo"));
  })();

  /* ==========================================================
     Música
     ========================================================== */
  const musica = (() => {
    const boton = $("#musica");
    const aviso = $("#cancion");
    const VOLUMEN = 0.8;

    // Nombres que se prueban para cada canción. Windows suele esconder
    // la extensión, así que "risk-it-all.mp3" a veces queda guardado
    // como "risk-it-all.mp3.mp3". También se acepta .m4a.
    function candidatos(archivo) {
      const lista = [archivo, archivo + ".mp3"];
      if (/\.mp3$/i.test(archivo)) lista.push(archivo.replace(/\.mp3$/i, ".m4a"));
      return [...new Set(lista)];
    }

    const pistas = C.musica.map((p) => {
      const pista = { ...p, opciones: candidatos(p.archivo), url: null, falta: false, tiempo: 0 };
      pista.listo = new Promise((resolver) => { pista.resolver = resolver; });
      return pista;
    });

    // Revisa en segundo plano cuál archivo existe de verdad, antes de que
    // ella toque "Abrir mi regalo". Así el audio arranca dentro del toque
    // (que es lo que exigen iPhone y Chrome para dejar sonar música).
    pistas.forEach((p) => {
      const sonda = new Audio();
      sonda.preload = "metadata";
      sonda.muted = true;
      let k = 0, resuelta = false;
      const probarSiguiente = () => {
        if (resuelta) return;
        if (k >= p.opciones.length) {
          resuelta = true;
          p.falta = true;
          console.warn(`🎵 No encontré la canción "${p.titulo}". Guárdala en la carpeta del proyecto como: ${p.archivo}`);
          p.resolver(null);
          revisarBoton();
          return;
        }
        sonda.src = p.opciones[k++];
      };
      sonda.addEventListener("loadedmetadata", () => {
        if (resuelta) return;
        resuelta = true;
        p.url = sonda.currentSrc || sonda.src;
        p.resolver(p.url);
        sonda.removeAttribute("src");
      });
      sonda.addEventListener("error", probarSiguiente);
      probarSiguiente();
    });

    const audio = new Audio();
    audio.loop = true;
    audio.preload = "auto";
    let actual = -1, deseada = 0, encendida = false, rampa = null, pausadaPorOculta = false, avisoReloj = 0;

    function avisar(texto) {
      aviso.textContent = "♪ " + texto;
      aviso.classList.add("visible");
      clearTimeout(avisoReloj);
      avisoReloj = setTimeout(() => aviso.classList.remove("visible"), 3500);
    }

    function revisarBoton() {
      if (pistas.every((p) => p.falta)) {
        boton.hidden = true;
        console.warn("🎵 No hay ninguna canción disponible. Revisa que los mp3 estén dentro de la carpeta \"musica\" con los nombres de js/contenido.js");
      }
    }

    function volumenHacia(destino, ms, alTerminar) {
      clearInterval(rampa);
      const desde = audio.volume;
      const pasos = Math.max(1, Math.round(ms / 40));
      let n = 0;
      rampa = setInterval(() => {
        n++;
        try { audio.volume = limitar(desde + ((destino - desde) * n) / pasos, 0, 1); } catch (e) { /* iOS no deja */ }
        if (n >= pasos) {
          clearInterval(rampa);
          if (alTerminar) alTerminar();
        }
      }, 40);
    }

    function mejorPista(preferida) {
      if (pistas[preferida] && !pistas[preferida].falta) return preferida;
      return pistas.findIndex((p) => !p.falta);
    }

    function cargar(i, url) {
      if (actual >= 0 && audio.currentTime) pistas[actual].tiempo = audio.currentTime;
      actual = i;
      const retomar = pistas[i].tiempo;
      audio.src = url;
      if (retomar > 0) {
        audio.addEventListener("loadedmetadata", () => {
          try { audio.currentTime = retomar; } catch (e) { /* sin importancia */ }
        }, { once: true });
      }
    }

    function sonar() {
      try { audio.volume = 0; } catch (e) { /* iOS */ }
      const promesa = audio.play();
      if (!promesa) return;
      promesa
        .then(() => {
          boton.hidden = false;
          boton.classList.add("sonando");
          boton.setAttribute("aria-label", "Pausar la música");
          volumenHacia(VOLUMEN, 1400);
          avisar(pistas[actual].titulo);
        })
        .catch((e) => {
          if (e && e.name === "NotAllowedError") {
            // El navegador bloqueó el sonido: dejamos el botón para que ella lo active.
            boton.hidden = false;
            boton.classList.remove("sonando");
            boton.setAttribute("aria-label", "Reproducir la música");
          }
        });
    }

    function reproducir(i) {
      const p = pistas[i];
      cargar(i, p.url || p.opciones[0]);
      sonar();
    }

    audio.addEventListener("error", () => {
      if (actual < 0 || !audio.getAttribute("src")) return;
      const yo = actual;
      const p = pistas[yo];
      const fallida = audio.src;
      p.listo.then((url) => {
        if (actual !== yo) return;
        if (url && url !== fallida) {
          // El primer nombre no existía, pero otro sí: usamos ese.
          cargar(yo, url);
          if (encendida) sonar();
          return;
        }
        p.falta = true;
        revisarBoton();
        const otra = mejorPista(deseada);
        if (otra >= 0 && encendida) reproducir(otra);
      });
    });

    boton.addEventListener("click", () => {
      if (audio.paused) {
        encendida = true;
        const i = mejorPista(deseada);
        if (i < 0) return;
        if (i !== actual) reproducir(i);
        else sonar();
      } else {
        encendida = false;
        audio.pause();
        boton.classList.remove("sonando");
        boton.setAttribute("aria-label", "Reproducir la música");
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && !audio.paused) {
        pausadaPorOculta = true;
        audio.pause();
      } else if (!document.hidden && pausadaPorOculta) {
        pausadaPorOculta = false;
        if (encendida) audio.play().catch(() => {});
      }
    });

    return {
      iniciar() {
        encendida = true;
        const i = mejorPista(deseada);
        if (i < 0) return;
        reproducir(i);
      },
      cambiar(i) {
        if (i === deseada) return;
        deseada = i;
        if (!encendida) return;
        const destino = mejorPista(i);
        if (destino < 0 || destino === actual) return;
        volumenHacia(0, 700, () => reproducir(destino));
      },
    };
  })();

  /* ==========================================================
     Portada
     ========================================================== */
  const portada = $("#portada");
  $("#abrir").addEventListener("click", () => {
    document.body.classList.remove("cerrado");
    document.body.classList.add("abierto");
    portada.classList.add("abierta");
    setTimeout(() => portada.remove(), 1300);
    window.scrollTo(0, 0);
    musica.iniciar();
    sembrarPradera();
    rotarApodos();
    ambiente.lluvia(26, 3000);
  });

  function rotarApodos() {
    const el = $("#apodo");
    let i = 0;
    setInterval(() => {
      el.classList.add("cambia");
      setTimeout(() => {
        i = (i + 1) % C.apodos.length;
        el.textContent = C.apodos[i];
        el.classList.remove("cambia");
      }, 360);
    }, 2800);
  }

  /* ==========================================================
     Contador
     ========================================================== */
  (() => {
    const [a, m, d] = C.fechaNovios;
    const inicio = new Date(a, m - 1, d);
    const [ca, cm, cd] = C.fechaConocimos;
    const conocimos = new Date(ca, cm - 1, cd);
    const DIA = 86400000;
    const dos = (n) => String(n).padStart(2, "0");
    const previo = {};

    function poner(id, valor) {
      if (previo[id] === valor) return;
      previo[id] = valor;
      const el = $("#" + id);
      el.textContent = valor;
      el.classList.remove("tic");
      void el.offsetWidth;
      el.classList.add("tic");
    }

    function actualizar() {
      const ahora = new Date();
      let anios = ahora.getFullYear() - inicio.getFullYear();
      let meses = ahora.getMonth() - inicio.getMonth();
      let dias = ahora.getDate() - inicio.getDate();
      if (dias < 0) {
        meses--;
        dias += new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
      }
      if (meses < 0) {
        anios--;
        meses += 12;
      }
      poner("cAnios", String(anios));
      poner("cMeses", String(meses));
      poner("cDias", String(dias));
      poner("cHoras", dos(ahora.getHours()));
      poner("cMin", dos(ahora.getMinutes()));
      poner("cSeg", dos(ahora.getSeconds()));
      $("#tAnios").textContent = anios === 1 ? "año" : "años";
      $("#tMeses").textContent = meses === 1 ? "mes" : "meses";
      $("#tDias").textContent = dias === 1 ? "día" : "días";
      $("#cTotal").textContent = Math.floor((ahora - inicio) / DIA).toLocaleString("es-CO");
      $("#cConocerte").textContent = Math.floor((ahora - conocimos) / DIA).toLocaleString("es-CO");
    }

    actualizar();
    setInterval(actualizar, 1000);
  })();

  /* ==========================================================
     Historia
     ========================================================== */
  (() => {
    const lista = $("#hitos");
    C.historia.forEach((h) => {
      const li = crear("li", "hito revelar");
      const icono = crear("span", "hito-icono", h.icono);
      icono.setAttribute("aria-hidden", "true");
      const tarjeta = crear("div", "hito-tarjeta");
      tarjeta.append(
        crear("p", "hito-fecha", h.fecha),
        crear("h3", "hito-titulo", h.titulo),
        crear("p", "hito-texto", h.texto)
      );
      li.append(icono, tarjeta);
      lista.appendChild(li);
    });
  })();

  /* ==========================================================
     Fotos: collage en blanco y negro + visor a color
     ========================================================== */
  (() => {
    const collage = $("#collage");
    const extra = $("#collageExtra");
    const visor = $("#visor");
    const visorImg = $("#visorImg");
    const visorTexto = $("#visorTexto");
    const CORAZON = '<svg viewBox="0 0 64 58" aria-hidden="true"><path d="M32 55 C 12 41, 3 30, 3 18 C 3 9, 10 3, 18 3 C 24 3, 29 7, 32 12 C 35 7, 40 3, 46 3 C 54 3, 61 9, 61 18 C 61 30, 52 41, 32 55Z"/></svg>';
    let enVisor = 0;

    // Bloque de texto a máquina con el corazón
    const texto = crear("div", "collage-texto revelar");
    texto.innerHTML = CORAZON;
    texto.appendChild(crear("p", "", C.fraseFotos || ""));
    collage.appendChild(texto);

    // Muestras de grises, como en la plantilla
    [["m1", 3], ["m2", 3]].forEach(([clase, n]) => {
      const caja = crear("div", "muestras revelar " + clase);
      caja.setAttribute("aria-hidden", "true");
      for (let k = 0; k < n; k++) caja.appendChild(crear("i"));
      collage.appendChild(caja);
    });

    C.fotos.forEach((foto, i) => {
      const enCollage = i < 6;
      const figura = crear("figure", "foto-bn revelar" + (enCollage ? " f" + (i + 1) : ""));
      figura.style.setProperty("--espera", ((i % 3) * 0.1).toFixed(2) + "s");
      const marco = crear("div", "marco-bn");
      imagenConRespaldo(foto, i, marco, "foto " + (i + 1));
      figura.appendChild(marco);
      if (i === 5) figura.appendChild(crear("span", "te-amo", C.teAmo || "te amo"));
      figura.addEventListener("click", () => abrir(i));
      (enCollage ? collage : extra).appendChild(figura);
    });

    if (C.notaFotos) {
      const nota = crear("p", "collage-nota revelar");
      nota.innerText = C.notaFotos;
      collage.appendChild(nota);
    }

    function mostrar(i) {
      enVisor = i;
      visorImg.style.animation = "none";
      void visorImg.offsetWidth;
      visorImg.style.animation = "";
      visorImg.src = C.fotos[i].archivo;
      visorImg.alt = C.fotos[i].texto || "";
      visorTexto.textContent = C.fotos[i].texto || "";
    }
    function abrir(i) {
      if (!fotosCargadas.has(i)) return;
      mostrar(i);
      visor.hidden = false;
      document.body.style.overflow = "hidden";
    }
    function cerrar() {
      visor.hidden = true;
      document.body.style.overflow = "";
    }
    function mover(paso) {
      if (!fotosCargadas.size) return;
      let i = enVisor;
      do { i = (i + paso + C.fotos.length) % C.fotos.length; } while (!fotosCargadas.has(i));
      mostrar(i);
    }

    $("#visorCerrar").addEventListener("click", cerrar);
    $("#visorAnt").addEventListener("click", () => mover(-1));
    $("#visorSig").addEventListener("click", () => mover(1));
    visor.addEventListener("click", (e) => { if (e.target === visor) cerrar(); });
    document.addEventListener("keydown", (e) => {
      if (visor.hidden) return;
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowLeft") mover(-1);
      if (e.key === "ArrowRight") mover(1);
    });
    let toqueX = null;
    visor.addEventListener("touchstart", (e) => { toqueX = e.touches[0].clientX; }, { passive: true });
    visor.addEventListener("touchend", (e) => {
      if (toqueX == null) return;
      const dx = e.changedTouches[0].clientX - toqueX;
      toqueX = null;
      if (Math.abs(dx) > 45) mover(dx < 0 ? 1 : -1);
    });
  })();

  /* ==========================================================
     Constelación en forma de corazón (dibujada en el cuaderno)
     ========================================================== */
  (() => {
    const caja = $("#constelacion");
    const lineas = $("#constelacionLineas");
    const corazon = $("#constelacionCorazon");
    const tarjeta = $("#razon");
    const total = C.razones.length;
    const SVG = "http://www.w3.org/2000/svg";
    const ESTRELLA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2 L14.7 8.7 L21.7 9.3 L16.4 13.9 L18 20.8 L12 17.1 L6 20.8 L7.6 13.9 L2.3 9.3 L9.3 8.7 Z"/></svg>';

    // Curva del corazón, llevada a porcentajes de la caja
    const punto = (t) => {
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      return [50 + x * 2.45, 44 - y * 2.45];
    };

    const trazo = [];
    for (let i = 0; i <= 90; i++) {
      const [x, y] = punto((i / 90) * Math.PI * 2);
      trazo.push((i ? "L" : "M") + x.toFixed(2) + " " + y.toFixed(2));
    }
    corazon.setAttribute("d", trazo.join(" ") + "Z");

    const posiciones = C.razones.map((_, i) => punto((i / total) * Math.PI * 2));
    const vistas = new Set();
    const botones = [];
    const uniones = [];

    posiciones.forEach(([x, y], i) => {
      const [x2, y2] = posiciones[(i + 1) % total];
      const linea = document.createElementNS(SVG, "line");
      linea.setAttribute("x1", x); linea.setAttribute("y1", y);
      linea.setAttribute("x2", x2); linea.setAttribute("y2", y2);
      linea.setAttribute("pathLength", "1");
      lineas.appendChild(linea);
      uniones.push(linea);

      const boton = crear("button", "estrella");
      boton.type = "button";
      boton.style.left = x + "%";
      boton.style.top = y + "%";
      boton.style.setProperty("--desfase", (-i * 0.37).toFixed(2) + "s");
      boton.setAttribute("aria-label", "Estrella " + (i + 1));
      boton.innerHTML = ESTRELLA;
      boton.addEventListener("click", () => elegir(i));
      caja.appendChild(boton);
      botones.push(boton);
    });

    function elegir(i) {
      vistas.add(i);
      botones.forEach((b, j) => b.classList.toggle("actual", j === i));
      botones[i].classList.add("vista");
      botones[i].setAttribute("aria-label", C.razones[i].titulo);

      uniones.forEach((linea, j) => {
        if (vistas.has(j) && vistas.has((j + 1) % total)) linea.classList.add("unida");
      });

      $("#razonNum").textContent = vistas.size + " / " + total;
      $("#razonTitulo").textContent = C.razones[i].titulo;
      $("#razonTexto").textContent = C.razones[i].texto;
      tarjeta.classList.remove("cambia");
      void tarjeta.offsetWidth;
      tarjeta.classList.add("cambia");

      if (vistas.size === total && !caja.classList.contains("completa")) {
        caja.classList.add("completa");
        $("#razonNum").textContent = "Y la lista sigue, mi amor 💝";
        ambiente.lluvia(30, 2500);
      }
    }
  })();

  /* ==========================================================
     Cosas muy de nosotros
     ========================================================== */
  (() => {
    const rejilla = $("#rejilla");
    C.nuestras.forEach((n, i) => {
      const tarjeta = crear("div", "cosa revelar");
      tarjeta.style.setProperty("--espera", (i % 2) * 0.12 + "s");
      const icono = crear("span", "cosa-icono", n.icono);
      icono.setAttribute("aria-hidden", "true");
      tarjeta.append(icono, crear("h3", "cosa-titulo", n.titulo), crear("p", "cosa-texto", n.texto));
      rejilla.appendChild(tarjeta);
    });
  })();

  /* ==========================================================
     Carta
     ========================================================== */
  (() => {
    const sobre = $("#sobre");
    const papel = $("#cartaTexto");
    let i = 0;
    const parrafo = (texto, clase) => {
      const p = crear("p", clase, texto);
      p.style.setProperty("--i", i++);
      papel.appendChild(p);
    };
    parrafo(C.carta.saludo, "saludo");
    C.carta.parrafos.forEach((t) => parrafo(t));
    parrafo(C.carta.despedida, "despedida");
    parrafo(C.carta.firma, "firma");

    sobre.addEventListener("click", () => {
      if (sobre.classList.contains("abierto")) return;
      sobre.classList.add("abierto");
      sobre.setAttribute("aria-expanded", "true");
      $("#cartaPista").textContent = "Para ti, con todo mi corazón.";
      setTimeout(() => {
        papel.hidden = false;
        setTimeout(() => papel.scrollIntoView({ behavior: calmado ? "auto" : "smooth", block: "start" }), 350);
      }, calmado ? 0 : 1300);
    });
  })();

  /* ==========================================================
     Jardín final
     ========================================================== */
  (() => {
    const jardin = $("#jardin");
    const pradera = $("#jardinPradera");
    const numero = $("#jardinNum");
    const META = C.edad;
    const MAXIMO = 60;
    const EMOJIS = ["💝", "🌷", "✨", "❤️", "🌷", "💝"];
    let sembrados = 0;

    jardin.addEventListener("click", (e) => {
      if (e.target.closest("a, button")) return;
      const caja = jardin.getBoundingClientRect();
      const x = limitar(((e.clientX - caja.left) / caja.width) * 100, 6, 94);

      if (sembrados < MAXIMO) {
        const base = limitar(window.innerHeight * 0.2, 105, 185);
        pradera.appendChild(tulipan({ x, alto: base * azar(0.6, 1.1) }));
      }
      sembrados++;

      const emoji = crear("span", "flotante", EMOJIS[sembrados % EMOJIS.length]);
      emoji.style.left = e.clientX - caja.left + "px";
      emoji.style.top = e.clientY - caja.top + "px";
      emoji.style.setProperty("--dx", azar(-50, 50).toFixed(0) + "px");
      emoji.style.setProperty("--giro", azar(-25, 25).toFixed(0) + "deg");
      emoji.addEventListener("animationend", () => emoji.remove());
      jardin.appendChild(emoji);

      if (sembrados <= META) {
        numero.textContent = sembrados;
        numero.classList.remove("tic");
        void numero.offsetWidth;
        numero.classList.add("tic");
      }
      if (sembrados === META) {
        setTimeout(() => {
          $("#jardinJuego").hidden = true;
          $("#final").hidden = false;
          ambiente.lluvia(70, 5000);
        }, 700);
      }
    });
  })();

  /* ==========================================================
     Aparecer al hacer scroll, barra de avance y cambio de canción
     ========================================================== */
  (() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(".revelar").forEach((el) => observador.observe(el));

    const barra = $("#barraProgreso");
    const lineaTiempo = $("#lineaTiempo");
    const carta = $("#carta");
    let pendiente = false;

    function alDesplazar() {
      pendiente = false;
      const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
      barra.style.transform = `scaleX(${alturaTotal > 0 ? limitar(window.scrollY / alturaTotal, 0, 1) : 0})`;

      const caja = lineaTiempo.getBoundingClientRect();
      lineaTiempo.style.setProperty("--avance", limitar((window.innerHeight * 0.72 - caja.top) / caja.height, 0, 1).toFixed(3));

      musica.cambiar(carta.getBoundingClientRect().top < window.innerHeight * 0.55 ? 1 : 0);
    }
    window.addEventListener("scroll", () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(alDesplazar);
    }, { passive: true });
    alDesplazar();
  })();

  /* ==========================================================
     Chispitas al tocar la pantalla
     ========================================================== */
  if (!calmado) {
    const CHISPA = '<svg viewBox="0 0 24 24"><path d="M12 0 C 12.9 7.2, 16.8 11.1, 24 12 C 16.8 12.9, 12.9 16.8, 12 24 C 11.1 16.8, 7.2 12.9, 0 12 C 7.2 11.1, 11.1 7.2, 12 0Z"/></svg>';
    document.addEventListener("pointerdown", (e) => {
      const chispa = crear("span", "chispa");
      chispa.innerHTML = CHISPA;
      chispa.style.left = e.clientX + "px";
      chispa.style.top = e.clientY + "px";
      chispa.addEventListener("animationend", () => chispa.remove());
      document.body.appendChild(chispa);
    }, { passive: true });
  }
})();
