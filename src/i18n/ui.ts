export const SUPPORTED_LOCALES = ['fr', 'en', 'es', 'de', 'it', 'pt'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

export const LOCALE_NAMES: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  es: 'ES',
  de: 'DE',
  it: 'IT',
  pt: 'PT',
};

export const LOCALE_HREFLANG: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  es: 'es-ES',
  de: 'de-DE',
  it: 'it-IT',
  pt: 'pt-BR',
};

type Dict = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    download: string;
    skipToContent: string;
    toggleTheme: string;
  };
  hero: {
    eyebrow: string;
    /** 3-word punchy headline, one verb per line. e.g. ["RIDE.","CAPTURE.","CONQUER."] */
    headline: [string, string, string];
    title: [string, string, string]; // legacy long title (kept for fallback)
    sub: string;
    cta: string;
    ctaSecondary: string;
    chips: { ios: string; languages: string; gps: string; privacy: string };
    trust: string[];
  };
  loop: {
    eyebrow: string;
    title: string;
    steps: { num: string; eyebrow: string; title: string; desc: string }[];
  };
  nemesis: {
    eyebrow: string;
    title: string;
    sub: string;
    youLabel: string;
    themLabel: string;
    youName: string;
    themName: string;
    youZones: string;
    themZones: string;
  };
  showcase: {
    eyebrow: string;
    title: string;
    sub: string;
    captions: [string, string, string, string];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    eyebrow: string;
    title: [string, string];
    sub: string;
    note: string;
    soon: string;
  };
  footer: {
    tagline: string;
    legal: string;
    privacy: string;
    terms: string;
    support: string;
    languages: string;
    rights: string;
    motto: string;
  };
  badge: {
    download: string;
    appStore: string;
    soon: string;
    aria: string;
  };
};

const fr: Dict = {
  meta: {
    title: 'MotoRival — Conquiers ta ville à moto',
    description:
      "Le seul jeu PvP territorial pensé pour les motards. Roule, capture des zones hexagonales, défends-les. Conçu à Genève. Bientôt sur iOS.",
    ogTitle: 'MotoRival',
    ogDescription: 'Bataille territoriale pour motards. iOS bientôt.',
  },
  nav: {
    download: 'Télécharger',
    skipToContent: 'Aller au contenu',
    toggleTheme: 'Changer de thème',
  },
  hero: {
    eyebrow: 'NOUVEAU · iOS · v1',
    headline: ['ROULE.', 'CAPTURE.', 'CONQUIERS.'],
    title: ['Chaque route', 'est à prendre.', ''],
    sub: 'Roule. Capture des zones. Défends-les contre tes rivaux. Une seule app fait ça pour les motards.',
    cta: 'Télécharger',
    ctaSecondary: 'Voir comment',
    chips: { ios: 'iPhone only', languages: '6 langues', gps: 'GPS hardened', privacy: 'Privacy-first' },
    trust: [
      'Conçu à Genève',
      'Privacy first',
      'Pas de scoring vitesse',
      '6 langues',
      '14 jours d’essai',
    ],
  },
  loop: {
    eyebrow: 'MÉCANIQUE',
    title: 'Trois mouvements. Une obsession.',
    steps: [
      {
        num: '01',
        eyebrow: 'ROULE',
        title: 'Chaque km devient territoire.',
        desc: 'Le GPS capture chaque hex que tu traverses. Auto-capture, zéro tap pendant le ride. Map-matched, trace propre.',
      },
      {
        num: '02',
        eyebrow: 'CAPTURE',
        title: 'Ferme une boucle. Vole 50 km².',
        desc: 'Quand tu fermes une boucle, tous les hex à l’intérieur deviennent ton territoire. Garde-fous : densité, force dégressive, fuel system.',
      },
      {
        num: '03',
        eyebrow: 'DOMINE',
        title: 'Grimpe 7 rangs. Deviens Légende.',
        desc: 'Défends contre les vols. Détecte ton Nemesis. Mène un crew. Streak quotidien. Les zones decay — il faut rouler pour rester en vie.',
      },
    ],
  },
  nemesis: {
    eyebrow: 'BATAILLES LOCALES',
    title: 'Ton rival est juste à côté.',
    sub: "L'app détecte ton rival le plus fréquent. Il te vole une zone, tu lui en reprends deux. La rivalité s'écrit ride après ride.",
    youLabel: 'TOI',
    themLabel: 'NEMESIS',
    youName: 'JonnyWest',
    themName: 'MaxRider',
    youZones: '128 km²',
    themZones: '94 km²',
  },
  showcase: {
    eyebrow: "L'APP",
    title: 'Pensée pour la moto. Pas adaptée.',
    sub: 'Mode Riding sécurisé, deux boutons. Notifications coupées en mouvement. Map-matched. Pas de scoring vitesse.',
    captions: ['Carte vivante', 'Classement live', 'Persona auto-révélée', 'Cérémonies post-ride'],
  },
  faq: {
    eyebrow: 'QUESTIONS',
    title: 'Questions fréquentes.',
    items: [
      {
        q: 'Est-ce que ça mesure ma vitesse ?',
        a: 'Non. Jamais. Choix produit. On track distance, temps, zones — pas la vitesse. Pour ta sécurité et la nôtre.',
      },
      {
        q: 'Y a-t-il une version gratuite ?',
        a: 'Oui, à vie. 1 ride par semaine, capture de hex, leaderboard ville, streak quotidien, Mode Riding. Le Rival Pass débloque les rides illimités, leaderboards mondiaux, crews, Pin-to-Ride, Nemesis, stats avancées.',
      },
      {
        q: 'Mes zones expirent ?',
        a: 'Oui. Les hex roulés decay après 7 jours, les hex remplis après 2-3 jours. Faut rouler pour garder ton territoire vivant.',
      },
      {
        q: 'Android prévu ?',
        a: "iPhone d'abord. Android coming soon — on suit la même approche que motorival.app, sortie progressive.",
      },
      {
        q: 'Comment je supprime mon compte ?',
        a: 'Settings → Supprimer le compte. Tout est effacé : profil, rides, zones, crew. Aucune trace conservée. RGPD respecté.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'PRÊT À ROULER ?',
    title: ['Les rues sont', 'à prendre.'],
    sub: 'Premier ride. Première zone capturée. Premier vol subi. Le compteur démarre maintenant.',
    note: 'Gratuit avec 1 ride/sem · Rival Pass débloque tout',
    soon: 'Bientôt sur iOS · Submission en cours',
  },
  footer: {
    tagline: 'Bataille territoriale pour motards. Conçu à Genève. Lancé sur iOS.',
    legal: 'Légal',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    support: 'Support',
    languages: 'Langues',
    rights: '© 2026 MotoRival · AppSprint Studio · Genève',
    motto: 'Roule sage. Roule loin.',
  },
  badge: {
    download: 'TÉLÉCHARGER SUR',
    appStore: 'App Store',
    soon: "Bientôt sur l'App Store. Submission en cours.",
    aria: "Télécharger sur l'App Store",
  },
};

const en: Dict = {
  meta: {
    title: 'MotoRival — Claim every road you ride',
    description:
      'The only PvP territory game built for motorcyclists. Ride, capture hex zones, defend them. Made in Geneva. Coming soon on iOS.',
    ogTitle: 'MotoRival',
    ogDescription: 'Territory warfare for motorcyclists. iOS soon.',
  },
  nav: { download: 'Download', skipToContent: 'Skip to content', toggleTheme: 'Toggle theme' },
  hero: {
    eyebrow: 'NEW · iOS · v1',
    headline: ['RIDE.', 'CAPTURE.', 'CONQUER.'],
    title: ['Every road', 'is yours to claim.', ''],
    sub: 'Ride. Capture zones. Defend them from rivals. One app built for motorcyclists.',
    cta: 'Download',
    ctaSecondary: 'How it works',
    chips: { ios: 'iPhone only', languages: '6 languages', gps: 'GPS hardened', privacy: 'Privacy-first' },
    trust: ['Built in Geneva', 'Privacy first', 'No speed scoring', '6 languages', '14-day free trial'],
  },
  loop: {
    eyebrow: 'CORE LOOP',
    title: 'Three moves. One obsession.',
    steps: [
      {
        num: '01',
        eyebrow: 'RIDE',
        title: 'Every km becomes territory.',
        desc: 'GPS captures every hex you cross. Auto-capture, zero taps during the ride. Map-matched, clean trace.',
      },
      {
        num: '02',
        eyebrow: 'CAPTURE',
        title: 'Close a loop. Claim 50 km².',
        desc: 'When you close a loop, every hex inside becomes your territory. Guardrails: density, decay strength, fuel system.',
      },
      {
        num: '03',
        eyebrow: 'DOMINATE',
        title: 'Climb 7 ranks. Become Legend.',
        desc: 'Defend against thieves. Detect your Nemesis. Lead a crew. Daily streak. Zones decay — keep riding to stay alive.',
      },
    ],
  },
  nemesis: {
    eyebrow: 'LOCAL BATTLES',
    title: 'Your rival lives next door.',
    sub: 'The app auto-detects your most recurring rival. They steal one zone, you grab two back. Rivalry writes itself ride after ride.',
    youLabel: 'YOU',
    themLabel: 'NEMESIS',
    youName: 'JonnyWest',
    themName: 'MaxRider',
    youZones: '128 km²',
    themZones: '94 km²',
  },
  showcase: {
    eyebrow: 'THE APP',
    title: 'Built for motorcycles. Not adapted.',
    sub: 'Safety-first Riding Mode, two buttons. Notifications muted in motion. Map-matched. No speed scoring.',
    captions: ['Living territory', 'Live leaderboard', 'Auto-revealed persona', 'Post-ride ceremonies'],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked.',
    items: [
      {
        q: 'Does it score my speed?',
        a: "No. Never. Product decision. We track distance, time, zones — not speed. For your safety and ours.",
      },
      {
        q: 'Is there a free version?',
        a: 'Yes, forever. 1 ride per week, hex capture, city leaderboard, daily streak, Riding Mode. The Rival Pass unlocks unlimited rides, global leaderboards, crews, Pin-to-Ride, Nemesis, advanced stats.',
      },
      {
        q: 'Do my zones expire?',
        a: 'Yes. Ridden hexes decay after 7 days, filled hexes after 2-3 days. Keep riding to keep your turf alive.',
      },
      {
        q: 'Android version?',
        a: 'iPhone first. Android coming soon — same gradual rollout as motorival.app.',
      },
      {
        q: 'How do I delete my account?',
        a: 'Settings → Delete account. Everything wiped: profile, rides, zones, crew. No trace kept. GDPR compliant.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'READY TO RIDE?',
    title: ['The streets are', 'up for grabs.'],
    sub: 'First ride. First zone claimed. First steal taken. The clock starts now.',
    note: 'Free with 1 ride/week · Rival Pass unlocks everything',
    soon: 'Coming soon on iOS · Submission in progress',
  },
  footer: {
    tagline: 'Territory warfare for motorcyclists. Built in Geneva. Launched on iOS.',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    support: 'Support',
    languages: 'Languages',
    rights: '© 2026 MotoRival · AppSprint Studio · Geneva',
    motto: 'Ride safe. Ride far.',
  },
  badge: { download: 'Download on the', appStore: 'App Store', soon: 'Coming soon on the App Store. Submission in progress.', aria: 'Download on the App Store' },
};

const es: Dict = {
  meta: {
    title: 'MotoRival — Reclama cada carretera que rodes',
    description:
      'El único juego PvP territorial pensado para motoristas. Rueda, captura zonas hexagonales, defiéndelas. Hecho en Ginebra. Próximamente en iOS.',
    ogTitle: 'MotoRival',
    ogDescription: 'Guerra territorial para motoristas. iOS pronto.',
  },
  nav: { download: 'Descargar', skipToContent: 'Saltar al contenido', toggleTheme: 'Cambiar tema' },
  hero: {
    eyebrow: 'NUEVO · iOS · v1',
    headline: ['RUEDA.', 'CAPTURA.', 'CONQUISTA.'],
    title: ['Cada carretera', 'es tuya.', ''],
    sub: 'Rueda. Captura zonas. Defiéndelas de tus rivales. Una sola app hecha para motoristas.',
    cta: 'Descargar',
    ctaSecondary: 'Cómo funciona',
    chips: { ios: 'iPhone only', languages: '6 idiomas', gps: 'GPS reforzado', privacy: 'Privacidad primero' },
    trust: ['Hecho en Ginebra', 'Privacidad primero', 'Sin puntuación de velocidad', '6 idiomas', 'Prueba 14 días'],
  },
  loop: {
    eyebrow: 'BUCLE CENTRAL',
    title: 'Tres movimientos. Una obsesión.',
    steps: [
      {
        num: '01',
        eyebrow: 'RUEDA',
        title: 'Cada km se convierte en territorio.',
        desc: 'El GPS captura cada hex que cruzas. Auto-captura, cero toques durante la ruta. Map-matched, traza limpia.',
      },
      {
        num: '02',
        eyebrow: 'CAPTURA',
        title: 'Cierra un bucle. Roba 50 km².',
        desc: 'Cuando cierras un bucle, todos los hex dentro se vuelven tuyos. Salvaguardas: densidad, fuerza decreciente, sistema de fuel.',
      },
      {
        num: '03',
        eyebrow: 'DOMINA',
        title: 'Sube 7 rangos. Conviértete en Leyenda.',
        desc: 'Defiende contra robos. Detecta a tu Némesis. Lidera un crew. Racha diaria. Las zonas decaen — sigue rodando para seguir vivo.',
      },
    ],
  },
  nemesis: {
    eyebrow: 'BATALLAS LOCALES',
    title: 'Tu rival vive al lado.',
    sub: 'La app detecta a tu rival más frecuente. Te roba una zona, tú le quitas dos. La rivalidad se escribe ruta tras ruta.',
    youLabel: 'TÚ',
    themLabel: 'NEMESIS',
    youName: 'JonnyWest',
    themName: 'MaxRider',
    youZones: '128 km²',
    themZones: '94 km²',
  },
  showcase: {
    eyebrow: 'LA APP',
    title: 'Pensada para la moto. No adaptada.',
    sub: 'Modo Riding seguro, dos botones. Notificaciones silenciadas en movimiento. Map-matched. Sin puntuación de velocidad.',
    captions: ['Territorio vivo', 'Clasificación live', 'Persona auto-revelada', 'Ceremonias post-ruta'],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Preguntas frecuentes.',
    items: [
      { q: '¿Mide mi velocidad?', a: 'No. Nunca. Decisión de producto. Medimos distancia, tiempo, zonas — no velocidad. Por tu seguridad y la nuestra.' },
      { q: '¿Hay versión gratis?', a: 'Sí, para siempre. 1 ruta semanal, captura de hex, leaderboard ciudad, racha diaria, Modo Riding. Rival Pass desbloquea rutas ilimitadas, leaderboards globales, crews, Pin-to-Ride, Némesis, stats avanzadas.' },
      { q: '¿Caducan mis zonas?', a: 'Sí. Hex rodados decaen tras 7 días, hex rellenos tras 2-3 días. Sigue rodando para mantener tu territorio vivo.' },
      { q: '¿Versión Android?', a: 'iPhone primero. Android coming soon — mismo lanzamiento gradual que motorival.app.' },
      { q: '¿Cómo elimino mi cuenta?', a: 'Ajustes → Eliminar cuenta. Todo borrado: perfil, rutas, zonas, crew. Sin rastro. RGPD respetado.' },
    ],
  },
  finalCta: {
    eyebrow: '¿LISTO?',
    title: ['Las calles están', 'libres.'],
    sub: 'Primera ruta. Primera zona capturada. Primer robo recibido. El reloj empieza ahora.',
    note: 'Gratis con 1 ruta/sem · Rival Pass desbloquea todo',
    soon: 'Pronto en iOS · Envío en curso',
  },
  footer: {
    tagline: 'Guerra territorial para motoristas. Hecho en Ginebra. Lanzado en iOS.',
    legal: 'Legal',
    privacy: 'Privacidad',
    terms: 'Términos',
    support: 'Soporte',
    languages: 'Idiomas',
    rights: '© 2026 MotoRival · AppSprint Studio · Ginebra',
    motto: 'Rueda seguro. Rueda lejos.',
  },
  badge: { download: 'Descárgalo en el', appStore: 'App Store', soon: 'Pronto en el App Store. Envío en curso.', aria: 'Descárgalo en el App Store' },
};

const de: Dict = {
  meta: {
    title: 'MotoRival — Erobere jede Straße',
    description:
      'Das einzige PvP-Territory-Spiel für Motorradfahrer. Fahre, erobere Hex-Zonen, verteidige sie. Made in Genf. Bald auf iOS.',
    ogTitle: 'MotoRival',
    ogDescription: 'Territory-Kampf für Motorradfahrer. iOS bald.',
  },
  nav: { download: 'Laden', skipToContent: 'Zum Inhalt springen', toggleTheme: 'Theme wechseln' },
  hero: {
    eyebrow: 'NEU · iOS · v1',
    headline: ['FAHRE.', 'EROBERE.', 'DOMINIERE.'],
    title: ['Jede Straße', 'gehört dir.', ''],
    sub: 'Fahre. Erobere Zonen. Verteidige sie. Eine App, gebaut für Motorradfahrer.',
    cta: 'Laden',
    ctaSecondary: 'So funktioniert es',
    chips: { ios: 'iPhone only', languages: '6 Sprachen', gps: 'GPS hardened', privacy: 'Privacy-first' },
    trust: ['Made in Genf', 'Privacy first', 'Keine Speed-Wertung', '6 Sprachen', '14 Tage gratis'],
  },
  loop: {
    eyebrow: 'CORE LOOP',
    title: 'Drei Moves. Eine Obsession.',
    steps: [
      { num: '01', eyebrow: 'FAHRE', title: 'Jeder km wird Territorium.', desc: 'Das GPS erfasst jedes Hex, das du kreuzt. Auto-Capture, null Taps während der Fahrt. Map-matched, saubere Spur.' },
      { num: '02', eyebrow: 'EROBERE', title: 'Schließe eine Schleife. 50 km² gehören dir.', desc: 'Wenn du eine Schleife schließt, werden alle Hex darin dein Territorium. Schutzmaßnahmen: Dichte, abnehmende Kraft, Fuel-System.' },
      { num: '03', eyebrow: 'DOMINIERE', title: 'Steige 7 Ränge. Werde Legende.', desc: 'Verteidige gegen Diebstähle. Erkenne deinen Nemesis. Führe einen Crew. Daily Streak. Zonen verfallen — fahre weiter, um zu überleben.' },
    ],
  },
  nemesis: {
    eyebrow: 'LOKALE KÄMPFE',
    title: 'Dein Rivale lebt nebenan.',
    sub: 'Die App erkennt deinen häufigsten Rivalen. Er klaut eine Zone, du nimmst zwei zurück. Die Rivalität schreibt sich Ride für Ride selbst.',
    youLabel: 'DU',
    themLabel: 'NEMESIS',
    youName: 'JonnyWest',
    themName: 'MaxRider',
    youZones: '128 km²',
    themZones: '94 km²',
  },
  showcase: {
    eyebrow: 'DIE APP',
    title: 'Gebaut für Motorräder. Nicht angepasst.',
    sub: 'Safety-first Riding Mode, zwei Buttons. Notifications stumm in Bewegung. Map-matched. Keine Speed-Wertung.',
    captions: ['Lebendiges Territorium', 'Live-Leaderboard', 'Auto-Persona', 'Post-Ride-Zeremonien'],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Häufige Fragen.',
    items: [
      { q: 'Misst es meine Geschwindigkeit?', a: 'Nein. Niemals. Produkt-Entscheidung. Wir tracken Distanz, Zeit, Zonen — nicht Speed. Für deine Sicherheit und unsere.' },
      { q: 'Gibt es eine Gratis-Version?', a: 'Ja, für immer. 1 Ride pro Woche, Hex-Capture, Stadt-Leaderboard, Daily Streak, Riding Mode. Rival Pass schaltet unbegrenzte Rides, globale Leaderboards, Crews, Pin-to-Ride, Nemesis, Advanced Stats frei.' },
      { q: 'Verfallen meine Zonen?', a: 'Ja. Gefahrene Hex verfallen nach 7 Tagen, gefüllte nach 2-3 Tagen. Fahre weiter, um dein Territorium am Leben zu halten.' },
      { q: 'Android?', a: 'iPhone zuerst. Android coming soon — gleicher gradueller Rollout wie motorival.app.' },
      { q: 'Wie lösche ich meinen Account?', a: 'Einstellungen → Account löschen. Alles weg: Profil, Rides, Zonen, Crew. Keine Spur. DSGVO konform.' },
    ],
  },
  finalCta: {
    eyebrow: 'BEREIT?',
    title: ['Die Straßen sind', 'frei.'],
    sub: 'Erster Ride. Erste Zone erobert. Erster Diebstahl. Die Uhr läuft jetzt.',
    note: 'Gratis mit 1 Ride/Woche · Rival Pass schaltet alles frei',
    soon: 'Bald auf iOS · Einreichung läuft',
  },
  footer: {
    tagline: 'Territory-Kampf für Motorradfahrer. Made in Genf. Auf iOS gestartet.',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    terms: 'AGB',
    support: 'Support',
    languages: 'Sprachen',
    rights: '© 2026 MotoRival · AppSprint Studio · Genf',
    motto: 'Fahre sicher. Fahre weit.',
  },
  badge: { download: 'Laden im', appStore: 'App Store', soon: 'Bald im App Store. Einreichung läuft.', aria: 'Im App Store laden' },
};

const it: Dict = {
  meta: {
    title: 'MotoRival — Conquista ogni strada',
    description:
      "L'unico gioco PvP territoriale pensato per motociclisti. Guida, cattura zone esagonali, difendile. Fatto a Ginevra. Presto su iOS.",
    ogTitle: 'MotoRival',
    ogDescription: 'Guerra territoriale per motociclisti. iOS presto.',
  },
  nav: { download: 'Scarica', skipToContent: 'Salta al contenuto', toggleTheme: 'Cambia tema' },
  hero: {
    eyebrow: 'NUOVO · iOS · v1',
    headline: ['GUIDA.', 'CATTURA.', 'DOMINA.'],
    title: ['Ogni strada', 'è tua.', ''],
    sub: 'Guida. Cattura zone. Difendile dai rivali. Una sola app per motociclisti.',
    cta: 'Scarica',
    ctaSecondary: 'Come funziona',
    chips: { ios: 'iPhone only', languages: '6 lingue', gps: 'GPS hardened', privacy: 'Privacy-first' },
    trust: ['Fatto a Ginevra', 'Privacy first', 'Nessun punteggio velocità', '6 lingue', 'Prova 14 giorni'],
  },
  loop: {
    eyebrow: 'CORE LOOP',
    title: 'Tre mosse. Un’ossessione.',
    steps: [
      { num: '01', eyebrow: 'GUIDA', title: 'Ogni km diventa territorio.', desc: 'Il GPS cattura ogni hex che attraversi. Auto-capture, zero tap durante il giro. Map-matched, traccia pulita.' },
      { num: '02', eyebrow: 'CATTURA', title: 'Chiudi un loop. Conquista 50 km².', desc: 'Quando chiudi un loop, tutti gli hex dentro diventano tuoi. Vincoli: densità, forza decrescente, sistema fuel.' },
      { num: '03', eyebrow: 'DOMINA', title: 'Sali 7 rank. Diventa Leggenda.', desc: 'Difendi dai furti. Riconosci la tua Nemesis. Guida un crew. Streak quotidiano. Le zone decadono — guida per restare vivo.' },
    ],
  },
  nemesis: {
    eyebrow: 'BATTAGLIE LOCALI',
    title: 'Il tuo rivale è qui accanto.',
    sub: 'L’app riconosce il tuo rivale più frequente. Ti ruba una zona, tu gliene riprendi due. La rivalità si scrive giro dopo giro.',
    youLabel: 'TU',
    themLabel: 'NEMESIS',
    youName: 'JonnyWest',
    themName: 'MaxRider',
    youZones: '128 km²',
    themZones: '94 km²',
  },
  showcase: {
    eyebrow: "L'APP",
    title: 'Pensata per la moto. Non adattata.',
    sub: 'Modalità Riding sicura, due bottoni. Notifiche mute in movimento. Map-matched. Nessun punteggio velocità.',
    captions: ['Territorio vivo', 'Classifica live', 'Persona auto-rivelata', 'Cerimonie post-ride'],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Domande frequenti.',
    items: [
      { q: 'Misura la velocità?', a: 'No. Mai. Scelta di prodotto. Tracciamo distanza, tempo, zone — non velocità. Per la tua sicurezza e la nostra.' },
      { q: 'Versione gratuita?', a: 'Sì, per sempre. 1 ride a settimana, cattura hex, classifica città, streak quotidiano, Modalità Riding. Rival Pass sblocca ride illimitati, classifiche globali, crew, Pin-to-Ride, Nemesis, statistiche avanzate.' },
      { q: 'Le mie zone scadono?', a: 'Sì. Hex guidati decadono dopo 7 giorni, hex riempiti dopo 2-3 giorni. Continua a guidare per tenere vivo il tuo territorio.' },
      { q: 'Android?', a: 'iPhone prima. Android coming soon — stesso rollout graduale di motorival.app.' },
      { q: 'Come elimino il mio account?', a: 'Impostazioni → Elimina account. Tutto cancellato: profilo, ride, zone, crew. Nessuna traccia. GDPR rispettato.' },
    ],
  },
  finalCta: {
    eyebrow: 'PRONTO?',
    title: ['Le strade sono', 'libere.'],
    sub: 'Primo ride. Prima zona catturata. Primo furto subito. Il timer parte ora.',
    note: 'Gratis con 1 ride/sett · Rival Pass sblocca tutto',
    soon: 'Presto su iOS · Submission in corso',
  },
  footer: {
    tagline: 'Guerra territoriale per motociclisti. Fatto a Ginevra. Lanciato su iOS.',
    legal: 'Legale',
    privacy: 'Privacy',
    terms: 'Termini',
    support: 'Supporto',
    languages: 'Lingue',
    rights: '© 2026 MotoRival · AppSprint Studio · Ginevra',
    motto: 'Guida sicuro. Guida lontano.',
  },
  badge: { download: 'Scarica su', appStore: 'App Store', soon: "Presto sull'App Store. Submission in corso.", aria: "Scarica sull'App Store" },
};

const pt: Dict = {
  meta: {
    title: 'MotoRival — Conquiste cada estrada',
    description:
      'O único jogo PvP territorial feito para motociclistas. Pilote, capture zonas hexagonais, defenda-as. Feito em Genebra. Em breve no iOS.',
    ogTitle: 'MotoRival',
    ogDescription: 'Guerra territorial para motociclistas. iOS em breve.',
  },
  nav: { download: 'Baixar', skipToContent: 'Ir ao conteúdo', toggleTheme: 'Mudar tema' },
  hero: {
    eyebrow: 'NOVO · iOS · v1',
    headline: ['PILOTE.', 'CAPTURE.', 'CONQUISTE.'],
    title: ['Cada estrada', 'é sua.', ''],
    sub: 'Pilote. Capture zonas. Defenda-as dos rivais. Um app feito para motociclistas.',
    cta: 'Baixar',
    ctaSecondary: 'Como funciona',
    chips: { ios: 'iPhone only', languages: '6 idiomas', gps: 'GPS hardened', privacy: 'Privacidade primeiro' },
    trust: ['Feito em Genebra', 'Privacidade primeiro', 'Sem score de velocidade', '6 idiomas', '14 dias grátis'],
  },
  loop: {
    eyebrow: 'CORE LOOP',
    title: 'Três movimentos. Uma obsessão.',
    steps: [
      { num: '01', eyebrow: 'PILOTE', title: 'Cada km vira território.', desc: 'O GPS captura cada hex que você cruza. Auto-captura, zero toques durante a volta. Map-matched, traço limpo.' },
      { num: '02', eyebrow: 'CAPTURE', title: 'Feche um loop. Conquiste 50 km².', desc: 'Ao fechar um loop, todos os hex dentro viram seus. Salvaguardas: densidade, força decrescente, sistema de fuel.' },
      { num: '03', eyebrow: 'DOMINE', title: 'Suba 7 ranks. Vire Lenda.', desc: 'Defenda dos roubos. Detecte sua Nemesis. Lidere um crew. Streak diário. As zonas decaem — pilote para se manter vivo.' },
    ],
  },
  nemesis: {
    eyebrow: 'BATALHAS LOCAIS',
    title: 'Seu rival mora ao lado.',
    sub: 'O app detecta seu rival mais frequente. Ele rouba uma zona, você toma duas de volta. A rivalidade se escreve volta após volta.',
    youLabel: 'VOCÊ',
    themLabel: 'NEMESIS',
    youName: 'JonnyWest',
    themName: 'MaxRider',
    youZones: '128 km²',
    themZones: '94 km²',
  },
  showcase: {
    eyebrow: 'O APP',
    title: 'Feito para moto. Não adaptado.',
    sub: 'Modo Riding seguro, dois botões. Notificações mudas em movimento. Map-matched. Sem score de velocidade.',
    captions: ['Território vivo', 'Ranking live', 'Persona auto-revelada', 'Cerimônias pós-volta'],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Perguntas frequentes.',
    items: [
      { q: 'Mede minha velocidade?', a: 'Não. Nunca. Decisão de produto. Trackamos distância, tempo, zonas — não velocidade. Pela sua segurança e a nossa.' },
      { q: 'Tem versão grátis?', a: 'Sim, pra sempre. 1 ride por semana, captura de hex, ranking cidade, streak diário, Modo Riding. Rival Pass libera rides ilimitados, rankings globais, crews, Pin-to-Ride, Nemesis, stats avançadas.' },
      { q: 'Minhas zonas expiram?', a: 'Sim. Hex pilotados decaem após 7 dias, hex preenchidos após 2-3 dias. Continue pilotando para manter seu território vivo.' },
      { q: 'Android?', a: 'iPhone primeiro. Android coming soon — mesmo rollout gradual que motorival.app.' },
      { q: 'Como deleto minha conta?', a: 'Settings → Deletar conta. Tudo apagado: perfil, rides, zonas, crew. Sem rastros. LGPD respeitada.' },
    ],
  },
  finalCta: {
    eyebrow: 'PRONTO?',
    title: ['As ruas estão', 'livres.'],
    sub: 'Primeiro ride. Primeira zona capturada. Primeiro roubo sofrido. O cronômetro começa agora.',
    note: 'Grátis com 1 ride/sem · Rival Pass libera tudo',
    soon: 'Em breve no iOS · Submission em andamento',
  },
  footer: {
    tagline: 'Guerra territorial para motociclistas. Feito em Genebra. Lançado no iOS.',
    legal: 'Legal',
    privacy: 'Privacidade',
    terms: 'Termos',
    support: 'Suporte',
    languages: 'Idiomas',
    rights: '© 2026 MotoRival · AppSprint Studio · Genebra',
    motto: 'Pilote seguro. Pilote longe.',
  },
  badge: { download: 'Baixar na', appStore: 'App Store', soon: 'Em breve na App Store. Submission em andamento.', aria: 'Baixar na App Store' },
};

export const ui: Record<Locale, Dict> = { fr, en, es, de, it, pt };
