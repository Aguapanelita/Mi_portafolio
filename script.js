/**
 * ============================================================================
 * PORTAFOLIO · YURINETH VARGAS SALAZAR
 * Diseñadora de la Comunicación Gráfica
 * Vanilla JS: Sistema de Carpetas Físicas, i18n (ES/EN) y Modo Claro/Oscuro
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. DICCIONARIOS DE IDIOMA (ESPAÑOL / ENGLISH)
     -------------------------------------------------------------------------- */
  const TRANSLATIONS = {
    es: {
      skip: "Saltar a proyectos",
      nav: {
        brand: "Yurineth",
        home: "Home",
        projects: "Proyectos",
        about: "Sobre mí",
        contact: "Contacto",
        themeLight: "claro ☀️",
        themeDark: "oscuro 🌙"
      },
      hero: {
        available: "Disponible para proyectos",
        subtitle: "Diseñadora de la comunicación gráfica",
        cta: "Explorar Archivador",
        copyright: "© 2026 Yurineth",
        scroll: "bajar al archivador"
      },
      projects: {
        tag: "ARCHIVO CREATIVO // SELECCIÓN DE TRABAJOS",
        title: "Proyectos",
        desc: "Una selección de proyectos que reúne exploraciones visuales, narrativas y experiencias interactivas. Desliza las cartas para descubrirlos.",
        open: "Ver detalle",
        readLetter: "Ver reverso",
        branding: {
          desc: "Identidades visuales memorables, sistemas gráficos coherentes y conceptos de marca que comunican propósito con sensibilidad visual y solidez técnica."
        },
        editorial: {
          desc: "Publicaciones, fanzines, storyboards impresos y diseño editorial con un cuidado exhaustivo de la tipografía, el ritmo de lectura y la materialidad del papel."
        },
        social: {
          desc: "Campañas para redes sociales, activos visuales para plataformas interactivas, piezas animadas de alto impacto y comunicación visual para comunidades digitales."
        },
        illustration: {
          desc: "Ilustraciones digitales y bocetos con paletas cálidas, texturas orgánicas, personajes expresivos y reminiscencias de la naturaleza latinoamericana."
        },
        events: {
          desc: "Instalaciones audiovisuales, experiencias sensoriales en vivo, diseño espacial y piezas gráficas para exhibiciones interactivas."
        },
        items: {
          oskowampik: {
            category: "Identidad Visual & Concept Art 3D",
            title: "Oskowampik",
            year: "2025",
            short: "\"Oskowampik, la tierra Dorada\" es un cortometraje en motion capture realizado por 12 estudiantes de sexto semestre de la Universidad Autónoma de Occidente. La historia sigue a dos jóvenes investigadores que se adentran en la cordillera central colombiana para documentar una comunidad originaria casi desconocida. Guiados por un misterioso intermediario de amplio conocimiento, descubrirán la magia ancestral que resguarda este pueblo y el inminente riesgo de que su legado desaparezca para siempre.",
            long: "\"Oskowampik, la tierra Dorada\" es un cortometraje en motion capture realizado por 12 estudiantes de sexto semestre de la Universidad Autónoma de Occidente. La historia sigue a dos jóvenes investigadores que se adentran en la cordillera central colombiana para documentar una comunidad originaria casi desconocida. Guiados por un misterioso intermediario de amplio conocimiento, descubrirán la magia ancestral que resguarda este pueblo y el inminente riesgo de que su legado desaparezca para siempre.",
            tools: ["Autodesk 3ds Max", "After Effects", "Illustrator", "Photoshop", "Procreate", "Audacity"],
            link: "https://www.behance.net/gallery/242598803/Oskowampik-la-tierra-Dorada",
            mediaType: "image",
            mediaSrc: "./images/Oskowampik/Oskowampik_portada.jpg"
          },
          dos: {
            category: "Branding Digital · Visión Computacional",
            title: "Dos realidades son infinitas realidades",
            year: "2026",
            short: "Con el objetivo de comprender las posibilidades y limitaciones de las bibliotecas \"OpenCV\" y \"MediaPipe\" y la manera en que las máquinas pueden percibir la \"realidad\", he creado esta experiencia web que te permite interactuar por separado con estas y a la vez de manera conjunta.",
            long: "Con el objetivo de comprender las posibilidades y limitaciones de las bibliotecas \"OpenCV\" y \"MediaPipe\" y la manera en que las máquinas pueden percibir la \"realidad\", he creado esta experiencia web que te permite interactuar por separado con estas y a la vez de manera conjunta.",
            tools: ["GitHub Pages", "Figma", "Claude", "OpenCV", "MediaPipe", "HTML", "CSS", "JS"],
            link: "https://aguapanelita.github.io/Dos_Realidades/",
            mediaType: "retro-vision",
            mediaSrc: ""
          },
          textil: {
            category: "Identidad de Marca & Textil",
            title: "Territorio & Textil",
            short: "Sistema de identidad visual y diseño de indumentaria textil fusionando artesanía latinoamericana con estética contemporánea.",
            long: "Proyecto de diseño de identidad y desarrollo textil desarrollado entre Colombia y Chile. Explora el valor de las fibras naturales, el teñido artesanal y la memoria geográfica plasmada en piezas de indumentaria contemporáneas y papelería corporativa sostenible.",
            tools: ["Diseño Textil", "Adobe Illustrator", "Fotografía de Producto", "InDesign"],
            link: "#",
            mediaType: "pattern-textile",
            mediaSrc: ""
          },
          ninos: {
            category: "Editorial Ilustrado & Narrativa",
            title: "Ser niños",
            year: "2026",
            short: "A través de esta pequeña animación (o mi carta de amor a Chile) quise volver a esa mirada inocente con la que descubríamos el mundo, a los recuerdos que habitan nuestros hogares y a esas pequeñas cosas que nos hacen sentir que pertenecemos a un lugar; además quise mirar un poquito más allá de la nostalgia y recordar que nuestra historia, incluso con sus heridas, forma parte de aquello que somos.",
            long: "A través de esta pequeña animación (o mi carta de amor a Chile) quise volver a esa mirada inocente con la que descubríamos el mundo, a los recuerdos que habitan nuestros hogares y a esas pequeñas cosas que nos hacen sentir que pertenecemos a un lugar; además quise mirar un poquito más allá de la nostalgia y recordar que nuestra historia, incluso con sus heridas, forma parte de aquello que somos.",
            tools: ["Procreate", "Photoshop", "After Effects", "Adobe Premiere", "Sketch Tools"],
            link: "https://vimeo.com/1248352489",
            mediaType: "image",
            mediaSrc: "./images/ser_ninos/general.png"
          },
          biodiversidad: {
            category: "Diseño Editorial & Divulgación",
            title: "Los ecosistemas de Colombia",
            year: "2024",
            short: "Colombia es sinónimo de riqueza natural, pero ¿realmente conocemos lo que protegemos? “Los ecosistemas de Colombia” es un viaje visual por nuestra pluralidad de biomas, diseñado no solo para mostrar su belleza, sino para revelar su estado actual y despertar una conciencia real sobre el territorio que habitamos. ¿Sabías que el ecosistema marino conforma el 45% del territorio Colombiano?",
            long: "Colombia es sinónimo de riqueza natural, pero ¿realmente conocemos lo que protegemos? “Los ecosistemas de Colombia” es un viaje visual por nuestra pluralidad de biomas, diseñado no solo para mostrar su belleza, sino para revelar su estado actual y despertar una conciencia real sobre el territorio que habitamos. ¿Sabías que el ecosistema marino conforma el 45% del territorio Colombiano?",
            tools: ["After Effects", "Illustrator", "Photoshop", "Procreate", "Audacity", "Adobe Premiere"],
            link: "https://vimeo.com/1247582560",
            mediaType: "image",
            mediaSrc: "./images/Los ecosistemas de Colombia/portada.png"
          },
          senses: {
            category: "Campaña Digital & Social Gaming",
            title: "Senses Party",
            year: "2026",
            short: "Senses Party es un juego multijugador (4 personas) con una sola pantalla compartida y los teléfonos de cada persona como controles. Alguien abre la consola en un computador o proyector, y los demás usan el link para entrar a la sala desde el navegador, sin instalar nada. Desde ahí compiten en minijuegos que usan los sensores.",
            long: "Senses Party es un juego multijugador (4 personas) con una sola pantalla compartida y los teléfonos de cada persona como controles. Alguien abre la consola en un computador o proyector, y los demás usan el link para entrar a la sala desde el navegador, sin instalar nada. Desde ahí compiten en minijuegos que usan los sensores.",
            tools: ["GitHub Pages", "Claude", "OpenCV", "MediaPipe", "HTML", "CSS", "JS"],
            link: "https://aguapanelita.github.io/Senses_Party/",
            mediaType: "party-mock",
            mediaSrc: ""
          },
          motion: {
            category: "Motion Graphics & Social Kit",
            title: "Motion Social Kit",
            short: "Píldoras animadas, plantillas modulares para historias de Instagram y secuencias dinámicas diseñadas para destacar en feeds saturados.",
            long: "Colección de componentes animados, transiciones cinéticas y plantillas reutilizables para plataformas de contenido visual. Creadas para potenciar el storytelling de marcas creativas a través de micro-animaciones expresivas y paletas de alto impacto.",
            tools: ["After Effects", "Adobe Premiere", "CapCut", "Photoshop"],
            link: "#",
            mediaType: "motion-pill",
            mediaSrc: ""
          },
          ninosart: {
            category: "Ilustración Digital & Cuaderno de Bocetos",
            title: "Ser niños · Concept Art",
            short: "Exploración de acuarelas digitales, trazos texturizados y personajes entrañables para una narrativa sobre la inocencia y el territorio.",
            long: "Compendio de bocetos, pruebas de color e ilustraciones finales desarrolladas en Procreate y Photoshop para el universo visual de 'Ser Niños'. Cada trazo busca capturar la calidez del papel físico mediante texturas rugosas y pinceles de pigmentación natural.",
            tools: ["Procreate", "Photoshop", "Wacom Intuos", "Acuarela Digital"],
            link: "#",
            mediaType: "image",
            mediaSrc: "./images/ser_ninos/detalle.png"
          },
          oskowampikart: {
            category: "Diseño de Personajes & Entornos",
            title: "Oskowampik · Bestiario",
            short: "Desarrollo conceptual de personajes míticos de la cordillera colombiana, atuendos ceremoniales y fauna sagrada en 2D y 3D.",
            long: "Hojas de diseño de personajes (character turnarounds), guías de estilo para trajes tradicionales y entornos atmosféricos para el cortometraje Oskowampik. Se sintetizaron referencias etnográficas con líneas modernas y paletas terracota.",
            tools: ["Character Design", "Photoshop", "Adobe Illustrator", "Concept Art"],
            link: "https://www.behance.net/gallery/242598803/Oskowampik-la-tierra-Dorada",
            mediaType: "image",
            mediaSrc: "./images/Oskowampik/Oskowampik_portada.jpg"
          },
          pulso: {
            category: "Instalación Audiovisual & Escultura 3D",
            title: "PULSO",
            year: "2026",
            short: "PULSO es una plataforma audiovisual experimental que transforma videos en composiciones sonoras mediante el análisis de sus colores y movimientos, generando esculturas 3D evolutivas.",
            long: "PULSO es una plataforma audiovisual experimental que transforma videos en composiciones sonoras mediante el análisis de sus colores y movimientos, generando esculturas 3D evolutivas.",
            tools: ["GitHub Pages", "Claude", "OpenCV", "MediaPipe", "HTML", "CSS", "JS"],
            link: "https://aguapanelita.github.io/PULSO/",
            mediaType: "image",
            mediaSrc: "./images/PULSO/pulso_home.png"
          },
          muestra: {
            category: "Identidad de Evento & Señalética",
            title: "Muestra Textil UDP",
            short: "Diseño de señalética, programas impresos y piezas digitales para la exhibición de diseño textil y desarrollo de indumentaria.",
            long: "Desarrollo del sistema visual para la exhibición de diseño textil y de indumentaria de la Universidad Diego Portales en Santiago de Chile. Incluyó señalética de salas, catálogo editorial impreso en papel reciclado y piezas gráficas animadas para redes sociales.",
            tools: ["Señalética", "InDesign", "Tipografía Editorial", "Impresión en Papel Reciclado"],
            link: "#",
            mediaType: "pass-badge",
            mediaSrc: ""
          }
        }
      },
      about: {
        tag: "EXPEDIENTE CREATIVO // TRAYECTORIA",
        title: "Sobre mí",
        photoCaption: "Yurineth Vargas Salazar · Perfil creativo",
        lead: "Soy Yurineth Vargas Salazar, diseñadora de la Comunicación Gráfica.",
        p1: "Me reconozco como una persona sensible, apasionada por el arte y curiosa: me mueve profundamente entender cómo se construyen las imágenes, las historias y las experiencias que nos conmueven e inspiran.",
        p2: "Mi recorrido en el diseño me ha llevado por los mágicos caminos de las narrativas audiovisuales, la ilustración, la animación, el modelado 3D, la identidad de marca, el desarrollo de interfaces web y el diseño de indumentaria textil.",
        photoPlaceholder: "Fotografía próximamente",
        timelineHeading: "Mi recorrido profesional",
        timeline: {
          fromPlace: "Colombia",
          toPlace: "Chile"
        },
        toolsTitle: "Herramientas"
      },
      contact: {
        tag: "CORRESPONDENCIA // MENSAJE",
        title: "¿Creamos algo juntos?",
        desc: "Estoy siempre abierta a nuevas colaboraciones creativas, proyectos de diseño gráfico, identidades de marca, ilustraciones o experiencias interactivas. Escríbeme y demos vida a tu idea.",
        emailLabel: "CORREO ELECTRÓNICO:",
        copy: "Copiar",
        copied: "¡Copiado!",
        socialLabel: "REDES & PORTAFOLIOS:"
      },
      modal: {
        aboutTitle: "Acerca de la obra",
        toolsTitle: "Herramientas & Medios",
        visit: "Abrir proyecto completo"
      }
    },
    en: {
      skip: "Skip to projects",
      nav: {
        brand: "Yurineth",
        home: "Home",
        projects: "Projects",
        about: "About me",
        contact: "Contact",
        themeLight: "light ☀️",
        themeDark: "dark 🌙"
      },
      hero: {
        available: "Available for projects",
        subtitle: "Graphic Communication Designer",
        cta: "Explore Archive",
        copyright: "© 2026 Yurineth",
        scroll: "scroll to archive"
      },
      projects: {
        tag: "CREATIVE ARCHIVE // SELECTED WORKS",
        title: "Projects",
        desc: "A selection of projects bringing together visual explorations, narratives, and interactive experiences. Swipe through the cards to explore.",
        open: "View details",
        readLetter: "View reverse",
        branding: {
          desc: "Memorable visual identities, coherent design systems, and brand concepts communicating purpose with aesthetic sensitivity and technical rigor."
        },
        editorial: {
          desc: "Publications, fanzines, printed storyboards, and editorial design with meticulous attention to typography, reading rhythm, and tactile paper materiality."
        },
        social: {
          desc: "Social media campaigns, digital assets for interactive platforms, high-impact motion pieces, and visual communication tailored for digital communities."
        },
        illustration: {
          desc: "Digital illustrations and sketches featuring warm palettes, organic paper textures, expressive characters, and echoes of Latin American nature."
        },
        events: {
          desc: "Audiovisual installations, live sensory experiences, spatial design, and interactive graphic assets for exhibitions and festivals."
        },
        items: {
          oskowampik: {
            category: "Visual Identity & 3D Concept Art",
            title: "Oskowampik",
            short: "Brand universe and visual narrative for a motion capture short film exploring ancestral indigenous memories in Colombia.",
            long: "Oskowampik is an animated short film and transmedia project developed with motion capture technology. The story follows two young researchers delving into the Colombian Central Andes to document the customs of a sacred native community. Guided by a mysterious mediator, they witness the ancestral magic guarded by this community and the imminent danger of their legacy vanishing forever. Responsibilities included logo design, typographic identity, character concept art, and general art direction.",
            tools: ["Autodesk 3ds Max", "Motion Capture", "Adobe Premiere", "After Effects", "Illustrator", "Procreate", "Photoshop"],
            link: "https://www.behance.net/gallery/242598803/Oskowampik-la-tierra-Dorada",
            mediaType: "image",
            mediaSrc: "./images/Oskowampik/Oskowampik_portada.jpg"
          },
          dos: {
            category: "Digital Branding · Computer Vision",
            title: "Dos realidades son infinitas",
            short: "Interactive graphic identity and web experience exploring how machines perceive reality through OpenCV and MediaPipe.",
            long: "An interactive web experience exploring OpenCV and MediaPipe libraries to understand how artificial intelligence models interpret physical reality. I developed the full project visual identity, modular web components, and an aesthetic narrative bridging human warmth with algorithmic computation.",
            tools: ["Figma", "HTML5", "CSS3", "JavaScript", "MediaPipe", "OpenCV", "GitHub Pages"],
            link: "https://aguapanelita.github.io/Dos_Realidades/",
            mediaType: "retro-vision",
            mediaSrc: ""
          },
          textil: {
            category: "Brand Identity & Textile Design",
            title: "Territorio & Textil",
            short: "Visual identity system and apparel textile design merging Latin American artisanal craft with contemporary aesthetics.",
            long: "A brand identity and textile design project developed between Colombia and Chile. Explores natural fibers, botanical dye techniques, and geographical heritage embodied in contemporary garments and sustainable stationery.",
            tools: ["Textile Design", "Adobe Illustrator", "Product Photography", "InDesign"],
            link: "#",
            mediaType: "pattern-textile",
            mediaSrc: ""
          },
          ninos: {
            category: "Illustrated Editorial & Storytelling",
            title: "Ser niños",
            short: "A love letter to Chile through the eyes of childhood: editorial book design, illustration, and storyboards of memory and identity.",
            long: "An editorial publication and animation project conceived as a tender love letter to Chile, exploring innocent wonder, memory, and cultural identity through nostalgia. Features the editorial design of a printed art book, typographic layout in InDesign, and sequential storyboarding for the animated piece.",
            tools: ["Adobe InDesign", "Photoshop", "Procreate", "After Effects", "Premiere", "Storyboarding"],
            link: "https://vimeo.com/1248352489",
            mediaType: "image",
            mediaSrc: "./images/ser_ninos/general.png"
          },
          biodiversidad: {
            category: "Editorial Design & Science Communication",
            title: "Los ecosistemas de Colombia",
            short: "An editorial and infographic journey through Colombia’s diverse biomes, unveiling their status and sparking ecological awareness.",
            long: "Colombia is synonymous with natural abundance, but do we truly understand what we protect? 'Los ecosistemas de Colombia' is an infographic editorial journey across our plurality of biomes, crafted not only to celebrate their beauty, but to expose their current conservation challenges. Did you know, for instance, that marine ecosystems account for 45% of Colombian territory?",
            tools: ["Adobe Illustrator", "Photoshop", "After Effects", "Premiere", "InDesign", "Audacity"],
            link: "https://vimeo.com/1247582560",
            mediaType: "eco-badge",
            mediaSrc: ""
          },
          senses: {
            category: "Digital Campaign & Social Gaming",
            title: "Senses Party",
            short: "Visual strategy and social media assets for a shared-screen multiplayer game where smartphones become controllers.",
            long: "A local multiplayer game for four players on a shared screen where each player's smartphone acts as a real-time controller directly through the browser without installations. Designed the comprehensive visual identity, mobile controller UI, dynamic Instagram promotional graphics, and animated micro-content.",
            tools: ["Figma", "Motion Graphics", "HTML5", "CSS3", "JavaScript", "WebSockets"],
            link: "https://aguapanelita.github.io/Senses_Party/",
            mediaType: "party-mock",
            mediaSrc: ""
          },
          motion: {
            category: "Motion Graphics & Social Kit",
            title: "Motion Social Kit",
            short: "Animated micro-videos, modular Instagram story templates, and kinetic sequences crafted to shine across crowded feeds.",
            long: "A curated suite of kinetic UI components, video transitions, and reusable graphic templates for visual storytelling across social platforms. Built to empower creative brands with expressive micro-animations and warm Desert Summer palettes.",
            tools: ["After Effects", "Adobe Premiere", "CapCut", "Photoshop"],
            link: "#",
            mediaType: "motion-pill",
            mediaSrc: ""
          },
          ninosart: {
            category: "Digital Illustration & Sketchbook",
            title: "Ser niños · Concept Art",
            short: "Digital watercolor explorations, textured brushwork, and heartwarming characters for a tender childhood narrative.",
            long: "A collection of preliminary sketches, color scripts, and finished digital illustrations created in Procreate and Photoshop for 'Ser Niños'. Each stroke captures the organic grain of vintage physical paper through natural textured brushes.",
            tools: ["Procreate", "Photoshop", "Wacom Intuos", "Digital Watercolor"],
            link: "#",
            mediaType: "image",
            mediaSrc: "./images/ser_ninos/detalle.png"
          },
          oskowampikart: {
            category: "Character Design & Environments",
            title: "Oskowampik · Bestiary",
            short: "Conceptual design of mythical Andean characters, ceremonial garments, and sacred fauna in 2D and 3D.",
            long: "Character turnaround sheets, traditional costume design systems, and atmospheric keyframe environments for the film Oskowampik. Synthesized ethnographic research with contemporary line art and terracotta palettes.",
            tools: ["Character Design", "Photoshop", "Adobe Illustrator", "Concept Art"],
            link: "https://www.behance.net/gallery/242598803/Oskowampik-la-tierra-Dorada",
            mediaType: "image",
            mediaSrc: "./images/Oskowampik/Oskowampik_portada.jpg"
          },
          pulso: {
            category: "Audiovisual Installation & 3D Sculpture",
            title: "PULSO",
            short: "An experimental platform converting video streams into real-time soundscapes and living 3D sculptures via color and motion analysis.",
            long: "An experimental audiovisual platform that transforms video feeds into generative sound compositions through real-time motion and chroma analysis, sculpting evolutionary 3D forms onto digital surfaces. Exhibited as an interactive communal art piece.",
            tools: ["MediaPipe", "Audio Synthesis", "OpenCV", "HTML5", "CSS3", "JavaScript"],
            link: "https://aguapanelita.github.io/PULSO/",
            mediaType: "image",
            mediaSrc: "./images/PULSO/pulso_home.png"
          },
          muestra: {
            category: "Event Identity & Wayfinding",
            title: "Muestra Textil UDP",
            short: "Signage design, printed programs, and digital assets for the annual academic textile and apparel exhibition.",
            long: "Visual identity and signage system created for the annual textile and fashion exhibition at Universidad Diego Portales in Santiago, Chile. Included venue wayfinding, an editorial catalogue printed on sustainable recycled stock, and animated teaser assets.",
            tools: ["Wayfinding", "InDesign", "Editorial Typography", "Recycled Paper Print"],
            link: "#",
            mediaType: "pass-badge",
            mediaSrc: ""
          }
        }
      },
      about: {
        tag: "CREATIVE RECORD // BACKGROUND",
        title: "About me",
        photoCaption: "Yurineth Vargas Salazar · Creative Profile",
        lead: "I am Yurineth Vargas Salazar, Graphic Communication Designer.",
        p1: "I see myself as a sensitive, art-passionate, and deeply curious person: I am driven by understanding how images, stories, and sensory experiences that move and inspire us are constructed.",
        p2: "My journey through design has led me along the magical pathways of audiovisual storytelling, illustration, animation, 3D modeling, brand identity, web interfaces, and textile apparel design.",
        photoPlaceholder: "Photo coming soon",
        timelineHeading: "My professional journey",
        timeline: {
          fromPlace: "Colombia",
          toPlace: "Chile"
        },
        toolsTitle: "Tools"
      },
      contact: {
        tag: "CORRESPONDENCE // MESSAGE",
        title: "Shall we create together?",
        desc: "I am always open to creative collaborations, graphic design challenges, visual brand identities, illustration projects, or interactive digital experiences. Reach out and let's bring your idea to life.",
        emailLabel: "EMAIL ADDRESS:",
        copy: "Copy",
        copied: "Copied!",
        socialLabel: "NETWORKS & PORTFOLIOS:"
      },
      modal: {
        aboutTitle: "About the work",
        toolsTitle: "Tools & Mediums",
        visit: "Open full project"
      }
    }
  };

  /* --------------------------------------------------------------------------
     2. ESTADO GLOBAL DE LA APLICACIÓN
     -------------------------------------------------------------------------- */
  const STATE = {
    lang: localStorage.getItem('yvs_portfolio_lang') || 'es',
    theme: localStorage.getItem('yvs_portfolio_theme') || 'light',
    activeFolder: 'branding'
  };

  /* --------------------------------------------------------------------------
     3. ELEMENTOS DEL DOM
     -------------------------------------------------------------------------- */
  const DOM = {
    html: document.documentElement,
    themeToggle: document.getElementById('theme-toggle'),
    themeText: document.getElementById('theme-text'),
    langBtn: document.getElementById('lang-btn'),
    navbarBurger: document.getElementById('navbar-burger'),
    navbarMenu: document.getElementById('navbar-menu'),
    navLinks: document.querySelectorAll('.navbar__link'),
    folders: document.querySelectorAll('.folder'),
    folderTabs: document.querySelectorAll('.folder__tab'),
    quickTabBtns: document.querySelectorAll('.quick-tab-btn'),
    btnCopyEmail: document.getElementById('btn-copy-email'),
    copyText: document.getElementById('copy-text'),
    toast: document.getElementById('toast'),
    // Modal
    modal: document.getElementById('project-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalCat: document.getElementById('modal-cat'),
    modalMedia: document.getElementById('modal-media'),
    modalDescText: document.getElementById('modal-desc-text'),
    modalToolsList: document.getElementById('modal-tools-list'),
    modalExtBtn: document.getElementById('modal-ext-btn'),
    modalCloseBtn: document.getElementById('modal-close-btn')
  };

  /* --------------------------------------------------------------------------
     4. GESTIÓN DE TEMA (MODO CLARO / MODO OSCURO)
     -------------------------------------------------------------------------- */
  function initTheme() {
    // Si no había guardado, chequear preferencia del sistema
    if (!localStorage.getItem('yvs_portfolio_theme')) {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      STATE.theme = prefersDark ? 'dark' : 'light';
    }
    applyTheme(STATE.theme);

    if (DOM.themeToggle) {
      DOM.themeToggle.addEventListener('click', toggleTheme);
    }
  }

  function applyTheme(theme) {
    STATE.theme = theme;
    DOM.html.setAttribute('data-theme', theme);
    localStorage.setItem('yvs_portfolio_theme', theme);

    if (DOM.themeText) {
      const texts = TRANSLATIONS[STATE.lang].nav;
      DOM.themeText.textContent = theme === 'dark' ? texts.themeDark : texts.themeLight;
    }
  }

  function toggleTheme() {
    const nextTheme = STATE.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  }

  /* --------------------------------------------------------------------------
     5. GESTIÓN DE IDIOMA (I18N: ESPAÑOL / ENGLISH)
     -------------------------------------------------------------------------- */
  function initLanguage() {
    applyLanguage(STATE.lang);

    if (DOM.langBtn) {
      DOM.langBtn.addEventListener('click', () => {
        const nextLang = STATE.lang === 'es' ? 'en' : 'es';
        applyLanguage(nextLang);
      });
    }
  }

  function applyLanguage(lang) {
    STATE.lang = lang;
    DOM.html.setAttribute('lang', lang);
    localStorage.setItem('yvs_portfolio_lang', lang);

    const dict = TRANSLATIONS[lang];

    // Actualizar elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedValue(dict, key);
      if (val !== undefined && val !== null) {
        el.textContent = val;
      }
    });

    // Actualizar textos dinámicos del selector y tema
    if (DOM.themeText) {
      DOM.themeText.textContent = STATE.theme === 'dark' ? dict.nav.themeDark : dict.nav.themeLight;
    }

    if (DOM.langBtn) {
      const display = document.getElementById('lang-display') || DOM.langBtn;
      display.innerHTML = lang === 'es'
        ? '<strong class="lang-current">Esp</strong><span class="lang-sep">/</span><span class="lang-alt">Eng</span>'
        : '<span class="lang-alt">Esp</span><span class="lang-sep">/</span><strong class="lang-current">Eng</strong>';
    }
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), obj);
  }

  /* --------------------------------------------------------------------------
     6. INTERACCIÓN DE CARPETAS FÍSICAS (ARCHIVADOR MANILA)
     -------------------------------------------------------------------------- */
  function initFolders() {
    // Clic en el lomo o pestaña de una carpeta inactiva para activarla
    DOM.folders.forEach((folder) => {
      folder.addEventListener('click', (e) => {
        if (!folder.classList.contains('active')) {
          const target = folder.getAttribute('data-category');
          activateFolder(target);
        }
      });
    });

    // Clic en las pestañas superiores físicas de las carpetas
    DOM.folderTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        const target = tab.getAttribute('data-target');
        activateFolder(target);
      });

      // Accesibilidad con teclado (Enter / Space)
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const target = tab.getAttribute('data-target');
          activateFolder(target);
        }
      });
    });

    // Clic en los botones rápidos de navegación de carpetas
    DOM.quickTabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const folder = btn.getAttribute('data-folder');
        activateFolder(folder);
      });
    });

  }

  function activateFolder(folderId) {
    if (!folderId) return;
    STATE.activeFolder = folderId;

    // Actualizar carpetas físicas en el stack
    DOM.folders.forEach((folder) => {
      const cat = folder.getAttribute('data-category');
      if (cat === folderId) {
        folder.classList.add('active');
        folder.setAttribute('aria-expanded', 'true');
      } else {
        folder.classList.remove('active');
        folder.setAttribute('aria-expanded', 'false');
      }
    });

    // Actualizar botones de la barra rápida
    DOM.quickTabBtns.forEach((btn) => {
      const cat = btn.getAttribute('data-folder');
      if (cat === folderId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }


  /* --------------------------------------------------------------------------
     6B. CARRUSEL DE PROYECTOS · POSTALES APILADAS
     -------------------------------------------------------------------------- */
  function initProjectsCarousel() {
    const track = document.getElementById('letters-track');
    const dots = document.getElementById('carousel-dots');
    const counter = document.getElementById('carousel-counter');
    const activeTitle = document.getElementById('projects-active-title');
    const prev = document.getElementById('carousel-prev');
    const next = document.getElementById('carousel-next');
    if (!track) return;
    const cards = Array.from(track.querySelectorAll('.letter-card'));
    if (!cards.length) return;

    cards.forEach((card) => {
      if (card.querySelector('.letter-card__inner')) return;
      const originalChildren = Array.from(card.childNodes);
      const inner = document.createElement('div');
      inner.className = 'letter-card__inner';
      const front = document.createElement('div');
      front.className = 'letter-card__face letter-card__face--front';
      originalChildren.forEach((node) => front.appendChild(node));
      inner.appendChild(front);

      const back = document.createElement('div');
      back.className = 'letter-card__face letter-card__face--back';
      back.setAttribute('aria-label', 'Reverso de la postal');
      const title = front.querySelector('.letter-card__title');
      const category = front.querySelector('.letter-card__category');
      const description = front.querySelector('.letter-card__text');
      const photo = front.querySelector('.letter-card__photo');
      const tools = front.querySelector('.letter-card__tools');
      const external = front.querySelector('.letter-ext-link');
      // El CTA debe vivir sobre la imagen de portada: el bloque de contenido
      // original queda oculto por el diseño limpio de la postal.
      const frontFlipButton = front.querySelector('.btn-read-letter');
      if (photo && frontFlipButton) {
        frontFlipButton.classList.add('btn-read-letter--overlay');
        frontFlipButton.innerHTML = '<span>VER REVERSO</span><span aria-hidden="true">→</span>';
        frontFlipButton.setAttribute('aria-label', 'Ver reverso de esta postal');
        photo.appendChild(frontFlipButton);
      }
      const year = front.querySelector('.stamp-year')?.textContent?.trim() || card.querySelector('.letter-card__num')?.textContent?.match(/20\d{2}/)?.[0] || '—';
      const cleanTitle = title?.textContent?.replace(/^\d+\s*[·.:-]\s*/, '').trim() || 'Proyecto';

      const left = document.createElement('section');
      left.className = 'postcard-back__message';
      // El reverso no lleva encabezado de notas ni una miniatura en el área de mensaje.
      const backDescription = document.createElement('p');
      backDescription.className = 'postcard-back__description';
      backDescription.textContent = description?.textContent?.trim() || 'Descripción del proyecto.';
      const programsLabel = document.createElement('span');
      programsLabel.className = 'postcard-back__programs-label';
      programsLabel.textContent = 'PROGRAMAS / HERRAMIENTAS';
      const backTools = document.createElement('div');
      backTools.className = 'postcard-back__programs';
      if (tools) Array.from(tools.querySelectorAll('.letter-tag')).forEach((tag) => {
        const item = document.createElement('span');
        item.textContent = tag.textContent.trim();
        backTools.appendChild(item);
      });
      // Enlaces externos específicos para el reverso de cada postal
      const projectExternalLinks = {
        dos: [
          {
            text: 'VER EXPERIENCIA ↗',
            href: 'https://aguapanelita.github.io/Dos_Realidades/',
            title: 'Ver experiencia: Dos realidades son infinitas realidades'
          },
          {
            text: 'REPOSITORIO GITHUB ↗',
            href: 'https://github.com/Aguapanelita/Dos_Realidades.git',
            title: 'Repositorio GitHub: Dos realidades son infinitas realidades'
          }
        ],
        pulso: [
          {
            text: 'VER EXPERIENCIA ↗',
            href: 'https://aguapanelita.github.io/PULSO/',
            title: 'Ver experiencia: PULSO'
          },
          {
            text: 'REPOSITORIO GITHUB ↗',
            href: 'https://github.com/Aguapanelita/PULSO.git',
            title: 'Repositorio GitHub: PULSO'
          }
        ],
        senses: [
          {
            text: 'VER EXPERIENCIA ↗',
            href: 'https://aguapanelita.github.io/Senses_Party/',
            title: 'Ver experiencia: Senses Party'
          },
          {
            text: 'REPOSITORIO GITHUB ↗',
            href: 'https://github.com/Aguapanelita/Senses_Party.git',
            title: 'Repositorio GitHub: Senses Party'
          }
        ],
        ninos: [
          {
            text: 'VISITAR PROYECTO ↗',
            href: 'https://vimeo.com/1247494989?fl=tl&fe=ec&share=copy',
            title: 'Ver en Vimeo: Ser niños'
          },
          {
            text: 'VER PROCESO ↗',
            href: 'https://www.instagram.com/reel/Dez3ifkKlDV/?utm_source=ig_web_copy_link&bqrl=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==',
            title: 'Ver proceso'
          }
        ],
        biodiversidad: [
          {
            text: 'VISITAR PROYECTO ↗',
            href: 'https://vimeo.com/1247582560',
            title: 'Ver en Vimeo: Los ecosistemas de Colombia'
          }
        ],
        oskowampik: [
          {
            text: 'VISITAR PROYECTO ↗',
            href: 'https://www.behance.net/gallery/242598803/Oskowampik-la-tierra-Dorada',
            title: 'Ver en Behance: Oskowampik'
          }
        ]
      };

      const backLink = document.createElement('div');
      backLink.className = 'postcard-back__project-link';
      const projectId = card.dataset.project;
      const configuredLinks = projectExternalLinks[projectId];

      if (configuredLinks && configuredLinks.length) {
        configuredLinks.forEach((item) => {
          const link = document.createElement('a');
          link.href = item.href;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = item.text;
          if (item.title) link.title = item.title;
          link.setAttribute('aria-label', `${item.text.replace('↗', '').trim()}: ${cleanTitle}`);
          backLink.appendChild(link);
        });
      } else {
        const externalLinks = Array.from(front.querySelectorAll('.letter-ext-link'));
        if (externalLinks.length) {
          externalLinks.forEach((ext) => {
            if (ext.href) {
              const link = document.createElement('a');
              link.href = ext.href;
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              link.textContent = ext.textContent.trim().length > 1 ? ext.textContent.trim().toUpperCase() : 'VISITAR PROYECTO ↗';
              if (ext.title) link.title = ext.title;
              backLink.appendChild(link);
            }
          });
        } else {
          const unavailable = document.createElement('span');
          unavailable.textContent = 'ENLACE NO DISPONIBLE';
          backLink.appendChild(unavailable);
        }
      }
      // La descripción y el enlace permanecen en la mitad izquierda;
      // los programas/herramientas se trasladan a la zona inferior derecha.
      left.append(backDescription, backLink);

      const divider = document.createElement('div');
      divider.className = 'postcard-back__divider';
      divider.setAttribute('aria-hidden', 'true');

      const right = document.createElement('section');
      right.className = 'postcard-back__address';
      const heading = document.createElement('h3');
      heading.className = 'postcard-back__heading';
      heading.textContent = 'POSTCARD';
      const subtitle = document.createElement('p');
      subtitle.className = 'postcard-back__subtitle';
      subtitle.textContent = cleanTitle;
      const stamp = document.createElement('div');
      stamp.className = 'postcard-back__stamp';
      stamp.setAttribute('aria-label', `Imagen del proyecto ${cleanTitle}`);
      if (photo) {
        const stampImage = photo.cloneNode(true);
        stampImage.className = 'postcard-back__stamp-image';
        // El CTA pertenece únicamente al frente; nunca debe duplicarse en la estampilla.
        stampImage.querySelectorAll('.btn-read-letter').forEach((button) => button.remove());
        stampImage.querySelectorAll('[loading]').forEach((el) => el.removeAttribute('loading'));
        stamp.appendChild(stampImage);
        const stampYear = document.createElement('span');
        stampYear.className = 'postcard-back__stamp-year';
        stampYear.textContent = year;
        stamp.appendChild(stampYear);
      } else { stamp.textContent = year; }
      // Video incrustado de Vimeo: solo se agregan los tres enlaces confirmados.
      const vimeoVideos = {
        biodiversidad: { id: '1247582560', title: 'Los ecosistemas de Colombia' },
        oskowampik: { id: '1247582273', title: 'Oskowampik' },
        ninos: { id: '1248352489', title: 'Ser niños' }
      };
      const videoWrap = document.createElement('div');
      videoWrap.className = 'postcard-back__video';
      const videoInfo = vimeoVideos[card.dataset.project];
      if (videoInfo) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://player.vimeo.com/video/${videoInfo.id}?autopause=0&player_id=0&app_id=58479`;
        iframe.title = videoInfo.title;
        iframe.loading = 'lazy';
        iframe.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        videoWrap.appendChild(iframe);
      } else {
        const pending = document.createElement('div');
        pending.className = 'postcard-back__video-pending';
        pending.textContent = 'VIDEO PRÓXIMAMENTE';
        videoWrap.appendChild(pending);
      }
      const returnButton = document.createElement('button');
      returnButton.type = 'button';
      returnButton.className = 'postcard-back__return';
      returnButton.textContent = '↶ VER ANVERSO';
      returnButton.addEventListener('click', (event) => {
        event.stopPropagation();
        card.classList.remove('is-flipped');
      });
      right.append(heading, subtitle, stamp, videoWrap, programsLabel, backTools, returnButton);
      back.append(left, divider, right);
      inner.appendChild(back);
      card.appendChild(inner);
    });

    let active = 0;
    let pointerStart = null;
    let dragDistance = 0;
    let suppressClick = false;
    const wrap = (n) => (n + cards.length) % cards.length;

    function render() {
      cards.forEach((card, index) => {
        let delta = index - active;
        if (delta > cards.length / 2) delta -= cards.length;
        if (delta < -cards.length / 2) delta += cards.length;
        const distance = Math.abs(delta);
        const sign = Math.sign(delta);
        const y = distance === 0 ? 0 : Math.min(distance, 2) * 5;
        const scale = distance === 0 ? 1 : (distance === 1 ? .82 : .74);
        const lateralOffset = window.matchMedia('(max-width: 760px)').matches ? 94 : 100;
        const x = distance === 0 ? 0 : sign * (distance === 1 ? lateralOffset : lateralOffset + 14);
        const blur = distance === 0 ? 0 : (distance === 1 ? 4 : 7);
        card.style.setProperty('--stack-y', `${y}px`);
        card.style.setProperty('--stack-x', `${x}%`);
        card.style.setProperty('--stack-scale', scale);
        card.style.setProperty('--stack-blur', `${blur}px`);
        card.style.setProperty('--stack-opacity', distance > 2 ? .0 : 1);
        card.style.zIndex = String(50 - distance);
        card.classList.toggle('is-active', delta === 0);
        card.classList.toggle('is-behind', delta !== 0);
        card.setAttribute('aria-current', delta === 0 ? 'true' : 'false');
        card.tabIndex = delta === 0 ? 0 : -1;
        card.setAttribute('aria-label', `${card.querySelector('.letter-card__title')?.textContent || 'Proyecto'}${delta === 0 ? ', postal al frente. Presiona para ver el reverso.' : ', postal detrás.'}`);
      });
      if (counter) counter.textContent = `${String(active + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
      if (activeTitle) activeTitle.textContent = cards[active].querySelector('.letter-card__title')?.textContent?.trim() || 'Proyecto';
      if (dots) dots.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === active);
        dot.setAttribute('aria-current', i === active ? 'true' : 'false');
      });
    }
    function goTo(index) {
      cards.forEach((card) => card.classList.remove('is-flipped'));
      active = wrap(index);
      render();
    }

    cards.forEach((card, index) => {
      // Botón explícito para consultar el reverso de la postal activa.
      // El listener se registra aquí porque el botón queda dentro de la cara frontal.
      const flipButton = card.querySelector('.btn-read-letter');
      if (flipButton) {
        flipButton.type = 'button';
        flipButton.setAttribute('aria-label', 'Ver reverso de esta postal');
        flipButton.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (!card.classList.contains('is-active')) goTo(index);
          card.classList.add('is-flipped');
        });
      }

      card.addEventListener('click', (event) => {
        if (suppressClick || event.target.closest('a, button')) return;
        if (!card.classList.contains('is-active')) goTo(index);
        else card.classList.toggle('is-flipped');
      });
      card.addEventListener('keydown', (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && card.classList.contains('is-active')) {
          event.preventDefault();
          card.classList.toggle('is-flipped');
        }
      });
    });
    if (dots) dots.querySelectorAll('.dot').forEach((dot) => dot.addEventListener('click', () => goTo(Number(dot.dataset.slide))));
    if (prev) prev.addEventListener('click', () => goTo(active - 1));
    if (next) next.addEventListener('click', () => goTo(active + 1));
    track.addEventListener('pointerdown', (event) => {
      if (event.target.closest('button, a')) return;
      pointerStart = event.clientX;
      dragDistance = 0;
      suppressClick = false;
      track.classList.add('is-dragging');
      if (track.setPointerCapture && event.pointerId !== undefined) track.setPointerCapture(event.pointerId);
    });
    track.addEventListener('pointermove', (event) => {
      if (pointerStart === null) return;
      dragDistance = event.clientX - pointerStart;
      if (Math.abs(dragDistance) > 8) suppressClick = true;
    });
    const finishDrag = () => {
      if (pointerStart === null) return;
      track.classList.remove('is-dragging');
      if (Math.abs(dragDistance) > 42) goTo(active + (dragDistance < 0 ? 1 : -1));
      pointerStart = null;
      window.setTimeout(() => { suppressClick = false; }, 80);
    };
    track.addEventListener('pointerup', finishDrag);
    track.addEventListener('pointercancel', finishDrag);
    track.addEventListener('lostpointercapture', finishDrag);
    window.addEventListener('keydown', (event) => {
      if (DOM.modal?.hasAttribute('open')) return;
      if (event.altKey || event.ctrlKey || event.metaKey || /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(active - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); goTo(active + 1); }
    });
    render();
    window.addEventListener('resize', render, { passive: true });
  }

  /* --------------------------------------------------------------------------
     7. MODAL DE PROYECTO (FICHA TÉCNICA POP-OUT)
     -------------------------------------------------------------------------- */
  function initModal() {
    if (!DOM.modal) return;

    if (DOM.modalCloseBtn) {
      DOM.modalCloseBtn.addEventListener('click', closeModal);
    }

    // Cerrar al hacer clic en el backdrop
    DOM.modal.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-close-modal') || e.target === DOM.modal) {
        closeModal();
      }
    });

    // Cerrar con tecla Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.modal.hasAttribute('open')) {
        closeModal();
      }
    });
  }

  function openModal(projectId) {
    const dict = TRANSLATIONS[STATE.lang].projects.items;
    const project = dict[projectId];
    if (!project) return;

    DOM.modalTitle.textContent = project.title;
    DOM.modalCat.textContent = project.category;
    DOM.modalDescText.textContent = project.long || project.short;

    // Renderizar medios según el tipo
    DOM.modalMedia.innerHTML = '';
    if (project.mediaType === 'image' && project.mediaSrc) {
      const img = document.createElement('img');
      img.src = project.mediaSrc;
      img.alt = project.title;
      img.loading = 'lazy';
      DOM.modalMedia.appendChild(img);
    } else {
      // Mockup gráfico estilizado
      const placeholder = document.createElement('div');
      placeholder.style.cssText = 'padding: 40px; text-align: center; font-family: var(--font-display); font-size: 1.5rem; color: var(--wet-clay);';
      placeholder.innerHTML = `<span>✦ ${project.title} ✦</span><br><small style="font-size:0.85rem; font-family:var(--font-mono); color:var(--pine-needles);">${project.category}</small>`;
      DOM.modalMedia.appendChild(placeholder);
    }

    // Renderizar tags de herramientas
    DOM.modalToolsList.innerHTML = '';
    if (Array.isArray(project.tools)) {
      project.tools.forEach((tool) => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = tool;
        DOM.modalToolsList.appendChild(tag);
      });
    }

    // Configurar enlace externo si existe
    if (project.link && project.link !== '#') {
      DOM.modalExtBtn.style.display = 'inline-flex';
      DOM.modalExtBtn.href = project.link;
    } else {
      DOM.modalExtBtn.style.display = 'none';
    }

    // Abrir diálogo de forma nativa o accesible
    if (typeof DOM.modal.showModal === 'function') {
      DOM.modal.showModal();
    } else {
      DOM.modal.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (typeof DOM.modal.close === 'function') {
      DOM.modal.close();
    } else {
      DOM.modal.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  /* --------------------------------------------------------------------------
     8. COPIAR CORREO AL PORTAPAPELES
     -------------------------------------------------------------------------- */
  function initCopyEmail() {
    if (!DOM.btnCopyEmail) return;

    DOM.btnCopyEmail.addEventListener('click', () => {
      const email = 'yuriv2424@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(STATE.lang === 'es' ? '¡Correo copiado al portapapeles! 📬' : 'Email copied to clipboard! 📬');
        const originalText = DOM.copyText.textContent;
        DOM.copyText.textContent = TRANSLATIONS[STATE.lang].contact.copied;
        setTimeout(() => {
          DOM.copyText.textContent = originalText;
        }, 2200);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }

  function showToast(message) {
    if (!DOM.toast) return;
    DOM.toast.textContent = message;
    DOM.toast.classList.add('show');
    setTimeout(() => {
      DOM.toast.classList.remove('show');
    }, 2800);
  }

  /* --------------------------------------------------------------------------
     9. NAVEGACIÓN SUAVE & MENÚ MÓVIL
     -------------------------------------------------------------------------- */
  function initNavigation() {
    // Home es una vista propia; las otras tres secciones también son páginas independientes.
    const pageIds = ['top', 'proyectos', 'sobre-mi', 'contacto'];
    const pageLinks = Array.from(DOM.navLinks).filter((link) =>
      pageIds.some((id) => link.getAttribute('href') === `#${id}`)
    );

    function showPage(targetId, updateHistory = false) {
      const pageId = pageIds.includes(targetId) ? targetId : 'top';
      document.body.classList.add('page-mode');

      pageIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const isActive = id === pageId;
        section.classList.toggle('page-active', isActive);
        section.setAttribute('aria-hidden', String(!isActive));
        if (isActive) section.removeAttribute('inert');
        else section.setAttribute('inert', '');
      });

      pageLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${pageId}`;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });

      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (updateHistory && window.location.hash !== `#${pageId}`) {
        window.history.pushState({ page: pageId }, '', `#${pageId}`);
      }
      if (DOM.navbarMenu) DOM.navbarMenu.classList.remove('show');
      if (DOM.navbarBurger) DOM.navbarBurger.setAttribute('aria-expanded', 'false');
    }

    pageLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(link.getAttribute('href').slice(1), true);
      });
    });

    // El nombre/logo siempre devuelve a la portada principal.
    const brand = document.querySelector('.navbar__brand');
    if (brand) {
      brand.setAttribute('href', '#top');
      brand.addEventListener('click', (event) => {
        event.preventDefault();
        showPage('top', true);
      });
    }

    // Los accesos directos de la portada usan la misma navegación y el historial.
    document.querySelectorAll('.hero__navigation a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(link.getAttribute('href').slice(1), true);
      });
    });

    window.addEventListener('popstate', () => showPage(window.location.hash.slice(1) || 'top', false));
    window.addEventListener('hashchange', () => showPage(window.location.hash.slice(1) || 'top', false));

    if (DOM.navbarBurger && DOM.navbarMenu) {
      DOM.navbarBurger.addEventListener('click', () => {
        const isOpen = DOM.navbarMenu.classList.toggle('show');
        DOM.navbarBurger.setAttribute('aria-expanded', String(isOpen));
      });
    }

    const initialPage = window.location.hash.slice(1) || 'top';
    showPage(initialPage, false);
    if (!pageIds.includes(initialPage)) {
      window.history.replaceState({ page: 'top' }, '', '#top');
    }
  }

  function boot() {
    initTheme();
    initLanguage();
    initFolders();
    initProjectsCarousel();
    initModal();
    initCopyEmail();
    initNavigation();
    console.log("🌸 Portafolio de Yurineth inicializado con estilo vintage y carpetas manila.");
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
