// PERSONALIZZA QUI IL TUO PORTFOLIO.
// Non serve installare nulla: salva il file e aggiorna index.html nel browser.
// Metti solo username GitHub (senza URL), email e URL LinkedIn se li vuoi mostrare.
window.PORTFOLIO_CONTACTS = {
  "github_username": "",
  "email": "",
  "linkedin_url": ""
};

// Schede progetto senza nomi di software, aziende o clienti.
// I progetti professionali sono case study descrittivi: non includere codice aziendale privato.
window.PORTFOLIO_PROJECTS = [
  {
    "id": "socio-sanitario",
    "title": "GESTIONALE SOCIO-SANITARIO",
    "subtitle": "Servizi e strutture assistenziali",
    "description": "Piattaforma per sedi, servizi, turnazioni del personale, utenti e documenti con accessi differenziati per ruolo.",
    "details": "Contributi su flussi di servizio, turnazioni del personale, documentazione, gestione delle anagrafiche e delle autorizzazioni. Focus su coerenza delle interfacce, modularità e utilizzo quotidiano da parte di profili differenti.",
    "contributions": [
      "Gestione sedi, servizi e tipologie",
      "Turnazioni e documentazione",
      "Ruoli, autorizzazioni e viste dedicate"
    ],
    "tech": [
      "PHP",
      "MySQL",
      "JavaScript",
      "UI/UX"
    ],
    "category": "health",
    "category_label": "HEALTH TECH",
    "art": "care",
    "repository": ""
  },
  {
    "id": "poliambulatori",
    "title": "GESTIONALE POLIAMBULATORI",
    "subtitle": "Prenotazioni e agende mediche",
    "description": "Sistema per appuntamenti organizzati per medico e reparto, gestione slot, filtri e database separati per cliente.",
    "details": "Attività su calendario delle prenotazioni, filtri, gestione dei professionisti, importazione dati e architettura multi-tenant. Attenzione all'esperienza su dispositivi mobili e alla separazione dei dati.",
    "contributions": [
      "Calendari per medico e reparto",
      "Importazione di anagrafiche",
      "Gestione multi-tenant"
    ],
    "tech": [
      "PHP",
      "MySQL",
      "JavaScript",
      "FullCalendar"
    ],
    "category": "health",
    "category_label": "HEALTH TECH",
    "art": "calendar",
    "repository": ""
  },
  {
    "id": "recruiting",
    "title": "PIATTAFORMA HR & RECRUITING",
    "subtitle": "Candidature, CV e documenti",
    "description": "Flussi per candidati e aziende: CV, allegati, controlli sui dati e comunicazioni automatiche.",
    "details": "Contributi alla gestione dei CV e degli allegati, alla qualità delle anagrafiche, ai controlli sui duplicati e all'invio di documenti e comunicazioni transazionali.",
    "contributions": [
      "Gestione CV e allegati",
      "Validazione e normalizzazione dati",
      "Workflow documentali e email"
    ],
    "tech": [
      "PHP",
      "MySQL",
      "PDF",
      "Brevo"
    ],
    "category": "automation",
    "category_label": "HR / AUTOMATION",
    "art": "people",
    "repository": ""
  },
  {
    "id": "crm-aziendale",
    "title": "CRM & WORKSPACE AZIENDALE",
    "subtitle": "Attività, calendari e microservizi",
    "description": "Workspace per clienti, progetti, assegnazioni, attività, notifiche e calendari condivisi.",
    "details": "Evoluzione di un gestionale operativo con attività assegnabili, agenda condivisa, collegamenti tra clienti e progetti, documenti e microservizi. Architettura orientata alla manutenzione e al riuso concreto.",
    "contributions": [
      "CRM e gestione attività",
      "Calendario operativo condiviso",
      "Notifiche e microservizi"
    ],
    "tech": [
      "PHP",
      "MySQL",
      "JavaScript",
      "REST API"
    ],
    "category": "management",
    "category_label": "MANAGEMENT",
    "art": "workflow",
    "repository": ""
  },
  {
    "id": "magazzino",
    "title": "GESTIONALE MAGAZZINO",
    "subtitle": "Prodotti, varianti e workflow di rilascio",
    "description": "Gestione di prodotti e movimenti con varianti, versionamento Git e distribuzione automatizzata.",
    "details": "Funzionalità per prodotti con varianti e movimentazioni di magazzino; organizzazione del repository e configurazione di un flusso di deploy tramite GitHub Actions e FTP.",
    "contributions": [
      "Varianti colore e movimenti",
      "Organizzazione repository",
      "Automazione deploy"
    ],
    "tech": [
      "PHP",
      "MySQL",
      "GitHub Actions",
      "FTP"
    ],
    "category": "automation",
    "category_label": "INVENTORY / DEVOPS",
    "art": "stock",
    "repository": ""
  },
  {
    "id": "centri-beauty",
    "title": "GESTIONALE CENTRI BEAUTY",
    "subtitle": "Prenotazioni, servizi e cataloghi",
    "description": "Sistema di prenotazione con calendari e strumenti per importare e deduplicare cataloghi e listini.",
    "details": "Interventi sui flussi di prenotazione e sugli stati del calendario, oltre a strumenti per l'importazione e la deduplicazione di prodotti, servizi e listini da fogli di calcolo.",
    "contributions": [
      "Calendario prenotazioni",
      "Import massivi da Excel",
      "Cataloghi e gestione duplicati"
    ],
    "tech": [
      "PHP",
      "MySQL",
      "JavaScript",
      "Excel"
    ],
    "category": "management",
    "category_label": "BOOKING / RETAIL",
    "art": "booking",
    "repository": ""
  },
  {
    "id": "editor-creativo",
    "title": "EDITOR CREATIVO OFFLINE",
    "subtitle": "Progetto personale · app per tablet",
    "description": "Editor di disegno per tablet con strumenti creativi, livelli e utilizzo senza connessione.",
    "details": "Progetto personale per l’uso su tablet: area di disegno, strumenti per il tratto, livelli e approccio offline-first, pensato per lavorare anche senza connessione.",
    "contributions": [
      "Disegno su canvas e livelli",
      "Interfaccia per tablet e pennino",
      "Esperienza offline-first"
    ],
    "tech": [
      "JavaScript",
      "Canvas API",
      "PWA",
      "CSS"
    ],
    "category": "mobile",
    "category_label": "PERSONAL PROJECT",
    "art": "editor",
    "repository": ""
  },
  {
    "id": "rete-commerciale",
    "title": "PORTALE RETE COMMERCIALE",
    "subtitle": "Agenti, fornitori e cataloghi",
    "description": "Portale gestionale per l’organizzazione di prodotti, fornitori e attività della rete vendita.",
    "details": "Contributi alle schermate del portale agenti e all'organizzazione dei flussi commerciali, con attenzione alla coerenza dell'interfaccia e alla gestione dei dati.",
    "contributions": [
      "Workflow agenti",
      "Prodotti e fornitori",
      "Interfacce gestionali responsive"
    ],
    "tech": [
      "PHP",
      "MySQL",
      "JavaScript",
      "CSS"
    ],
    "category": "management",
    "category_label": "SALES TOOLS",
    "art": "sales",
    "repository": ""
  }
];
