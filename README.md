# MARTINA.DEV — Portfolio cyberpunk 🎮

**Portfolio realizzato solo con HTML, CSS e JavaScript.** Nessun Python, PHP, MAMP, npm, framework o server necessario. Si apre anche senza connessione Internet.

## Aprilo subito su Windows

1. Estrai tutto lo ZIP.
2. Entra nella cartella `portfolio_cyberpunk_static`.
3. **Fai doppio clic su `index.html`**. Si aprirà nel browser.

Oppure, dal terminale di VS Code:

```powershell
start .\index.html
```

Non devi aprire `localhost`: qui non c'è nessun server da avviare.

## Personalizzalo (2 minuti)

Apri `assets/projects.js` in VS Code.

All'inizio trovi:

```javascript
window.PORTFOLIO_CONTACTS = {
  "github_username": "",
  "email": "",
  "linkedin_url": ""
};
```

Inserisci il tuo **username GitHub**, la tua **email** (se vuoi renderla pubblica) e il link **LinkedIn**. I pulsanti di contatto appariranno automaticamente. Nessun link è stato inventato.

Più sotto c'è `window.PORTFOLIO_PROJECTS`, un elenco di otto case study con titoli **generici**, descrizioni, competenze e contributi. Modifichi le schede qui, **senza dover cambiare HTML o rigenerare nulla**. Salvi il file, ricarichi la pagina (`Ctrl + R`), ed è aggiornato.

Per aggiungere un link a un progetto personale con repository pubblico, usa la proprietà `repository` della sua scheda. Non collegare repository aziendali privati.

I colori, le animazioni e il layout sono in `assets/style.css`. Se vuoi cambiare un testo della home, apri `index.html`.

## Mettilo su GitHub Pages

1. Crea un repository **pubblico** su GitHub (es. `portfolio`).
2. Carica `index.html`, `assets/style.css`, `assets/script.js`, `assets/projects.js`, `assets/favicon.svg` e questo README, **mantenendo la cartella `assets`**.
3. Apri **Settings → Pages** sul repository.
4. Seleziona **Deploy from a branch**, poi `main` e `/ (root)`; salva.
5. Il link sarà normalmente `https://TUO_USERNAME.github.io/portfolio/`.

Attenzione: se pubblichi il sito, anche il file `projects.js` diventa pubblico: **nessun nome cliente, password o informazione riservata** deve essere inserito al suo interno.

## Struttura

```text
portfolio_cyberpunk_static/
├── index.html          ← Apri questo file
├── assets/
│   ├── style.css       ← Stile nero, viola e rosa neon
│   ├── projects.js     ← Progetti e contatti (MODIFICA QUESTO)
│   ├── script.js       ← Filtri, schede, modali, animazioni
│   └── favicon.svg     ← Icona
└── README.md           ← Istruzioni
```

### Privacy professionale

Le schede sono presentate come **case study**, non come repository pubblici. I loro nomi sono per tipologia (gestionale poliambulatori, gestionale socio-sanitario, CRM ecc.) e non citano software, aziende o clienti reali. Rileggi comunque i dettagli prima della pubblicazione per assicurarti che siano adatti alla condivisione.
