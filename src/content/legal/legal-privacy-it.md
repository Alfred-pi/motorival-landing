# Informativa sulla privacy — MotoRival

**Versione**: 2026-04-23
**Ultimo aggiornamento**: 23 aprile 2026

---

## 1. Cosa raccogliamo

### Dati tecnici
- **Device ID UUID**: identificatore unico generato localmente, memorizzato nel localStorage del tuo iPhone e nel portachiavi iCloud Despia. È il perno del tuo account — nessun login email, nessuna password.
- **Versione iOS, modello di iPhone, versione dell'app**: per debugging e compatibilità.

### Dati di gameplay
- **Posizioni GPS** durante un ride attivo (1 Hz). Sono convertite in esagoni di territorio e memorizzate lato server.
- **Statistiche di ride**: distanza, durata, zone catturate, zone rubate.
- **Profilo pubblico**: nickname, moto (marca + modello), colore delle zone, paese.
- **Crew**: appartenenza a una crew e contributo in km².

### Dati facoltativi
- **Foto profilo**: solo se ne carichi una.
- **Bio**: solo se ne compili una.

---

## 2. Cosa non raccogliamo

- **Nessun nome legale, nessuna email, nessun numero di telefono.** MotoRival funziona zero-friction, senza account.
- **Nessuna velocità istantanea.** L'app non valuta la velocità e non la memorizza — è una scelta etica e giuridica.
- **Nessun tracking GPS al di fuori del ride.** Il GPS è attivo solo durante un ride avviato manualmente da te. Fuori dal ride, non sappiamo dove sei.
- **Nessun dato bancario.** Apple gestisce tutti i pagamenti. Non vediamo mai la tua carta.

---

## 3. Perché raccogliamo questi dati

| Dato | Finalità | Base giuridica |
|---|---|---|
| Device ID | Identificare il tuo account | Esecuzione del contratto |
| Posizioni GPS | Calcolare il tuo territorio | Esecuzione del contratto |
| Nickname, moto, paese | Visualizzare profilo e leaderboard | Esecuzione del contratto |
| Statistiche di ride | Ranking, ceremonies, notifiche | Esecuzione del contratto |
| Analytics anonime (PostHog) | Migliorare l'app, rilevare bug | Interesse legittimo |
| Entitlements RevenueCat | Verificare il tuo abbonamento | Esecuzione del contratto |

---

## 4. Con chi condividiamo

- **Firebase (Google Cloud)**: hosting dei dati di profilo e ride. Server UE.
- **RevenueCat**: gestione abbonamenti, collegata al tuo Device ID.
- **PostHog (EU)**: analytics di prodotto anonimizzate. Server UE (Francoforte).
- **OneSignal**: invio di push notification, collegato al tuo Device ID.
- **Apple**: pagamenti e distribuzione tramite App Store.

Non vendiamo mai i tuoi dati a terzi. Non facciamo pubblicità mirata.

---

## 5. Periodo di conservazione

- **Finché il tuo account è attivo**: conserviamo i tuoi dati.
- **Inattività > 24 mesi**: i tuoi dati possono essere archiviati o eliminati automaticamente.
- **Eliminazione dell'account** (Impostazioni → Elimina il mio account): tutti i tuoi dati vengono cancellati entro 30 giorni. I territori che possedevi tornano catturabili da altri.

---

## 6. I tuoi diritti (RGPD)

- **Accesso**: puoi consultare i tuoi dati nell'app (profilo, attività, impostazioni).
- **Rettifica**: modifica il tuo profilo in Impostazioni.
- **Cancellazione**: Impostazioni → Elimina il mio account.
- **Portabilità**: scrivi a support@motorival.app, ti rimandiamo un export JSON entro 30 giorni.
- **Opposizione alle analytics**: disattiva le analytics nelle impostazioni iOS (Limita tracciamento pubblicitario).
- **Reclamo**: puoi depositare un reclamo presso l'autorità di protezione dei dati del tuo paese (in Svizzera: IFPDT).

---

## 7. Cookie e tracker

MotoRival è un'app mobile — nessun cookie nel senso web. Identificatori usati:
- Device ID (obbligatorio per il funzionamento)
- RevenueCat anonymous ID (abbonamenti)
- PostHog distinct ID (analytics, anonimizzato)

---

## 8. Sicurezza

- I dati sono cifrati in transito (TLS 1.3) e a riposo (Firestore/Google encryption at rest).
- Il Device ID è memorizzato nel portachiavi iCloud sicuro Despia.
- Nessun identificatore sensibile è memorizzato in chiaro nei log del server.

In caso di violazione dei dati, ti informeremo nell'app e tramite notifica push entro 72h.

---

## 9. Minori

MotoRival è destinato ad adulti titolari di una patente moto valida. Se sei minorenne, non usare l'app senza la supervisione di un adulto responsabile.

---

## 10. Modifiche

Questa informativa può evolvere. La versione in vigore è sempre quella mostrata nell'app. Le modifiche sostanziali attivano una notifica.

---

## 11. Contatto

**Domande privacy**: support@motorival.app

**Titolare del trattamento**: AppSprint (Ginevra, Svizzera)

---

*Fine dell'informativa sulla privacy.*
