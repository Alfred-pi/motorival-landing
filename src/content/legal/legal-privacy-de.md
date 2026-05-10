# Datenschutzerklärung — MotoRival

**Version**: 2026-04-23
**Letzte Aktualisierung**: 23. April 2026

---

## 1. Was wir erheben

### Technische Daten
- **Device ID UUID**: eindeutige, lokal erzeugte Kennung, gespeichert im localStorage deines iPhones und im Despia-iCloud-Schlüsselbund. Sie ist der Dreh- und Angelpunkt deines Accounts — kein E-Mail-Login, kein Passwort.
- **iOS-Version, iPhone-Modell, App-Version**: für Debugging und Kompatibilität.

### Gameplay-Daten
- **GPS-Positionen** während eines aktiven Rides (1 Hz). Sie werden in Territorial-Hexagone umgewandelt und serverseitig gespeichert.
- **Ride-Stats**: Distanz, Dauer, eroberte Zonen, gestohlene Zonen.
- **Öffentliches Profil**: Alias, Motorrad (Marke + Modell), Zonenfarbe, Land.
- **Crew**: Zugehörigkeit zu einer Crew und km²-Beitrag.

### Optionale Daten
- **Profilbild**: nur wenn du eines hochlädst.
- **Bio**: nur wenn du eine ausfüllst.

---

## 2. Was wir nicht erheben

- **Keinen bürgerlichen Namen, keine E-Mail, keine Telefonnummer.** MotoRival läuft zero-friction, ohne Account.
- **Keine Momentangeschwindigkeit.** Die App wertet die Geschwindigkeit nicht aus und speichert sie nicht — eine ethische und rechtliche Entscheidung.
- **Kein GPS-Tracking außerhalb von Rides.** GPS ist nur während eines von dir manuell gestarteten Rides aktiv. Außerhalb wissen wir nicht, wo du bist.
- **Keine Bankdaten.** Apple wickelt alle Zahlungen ab. Wir sehen deine Karte nie.

---

## 3. Warum wir diese Daten erheben

| Daten | Zweck | Rechtsgrundlage |
|---|---|---|
| Device ID | Deinen Account identifizieren | Vertragserfüllung |
| GPS-Positionen | Dein Territorium berechnen | Vertragserfüllung |
| Alias, Motorrad, Land | Profil und Leaderboard anzeigen | Vertragserfüllung |
| Ride-Stats | Ranking, Ceremonies, Notifications | Vertragserfüllung |
| Anonyme Analytics (PostHog) | App verbessern, Bugs erkennen | Berechtigtes Interesse |
| RevenueCat-Entitlements | Dein Abo verifizieren | Vertragserfüllung |

---

## 4. Mit wem wir teilen

- **Firebase (Google Cloud)**: Hosting von Profil- und Ride-Daten. EU-Server.
- **RevenueCat**: Abo-Verwaltung, verknüpft mit deiner Device ID.
- **PostHog (EU)**: anonymisierte Produkt-Analytics. EU-Server (Frankfurt).
- **OneSignal**: Versand von Push-Notifications, verknüpft mit deiner Device ID.
- **Apple**: Zahlungen und Distribution über den App Store.

Wir verkaufen deine Daten nie an Dritte. Wir betreiben kein gezieltes Advertising.

---

## 5. Aufbewahrungsdauer

- **Solange dein Account aktiv ist**: wir bewahren deine Daten auf.
- **Inaktivität > 24 Monate**: deine Daten können automatisch archiviert oder gelöscht werden.
- **Accountlöschung** (Einstellungen → Mein Konto löschen): alle deine Daten werden innerhalb von 30 Tagen gelöscht. Die Territorien, die du besaßest, werden wieder für andere eroberbar.

---

## 6. Deine Rechte (DSGVO)

- **Auskunft**: du kannst deine Daten in der App einsehen (Profil, Aktivität, Einstellungen).
- **Berichtigung**: bearbeite dein Profil in den Einstellungen.
- **Löschung**: Einstellungen → Mein Konto löschen.
- **Datenübertragbarkeit**: schreib an support@motorival.ch, wir schicken dir einen JSON-Export innerhalb von 30 Tagen.
- **Widerspruch gegen Analytics**: deaktiviere Analytics in den iOS-Einstellungen (Ad-Tracking beschränken).
- **Beschwerde**: du kannst eine Beschwerde bei der Datenschutzbehörde deines Landes einreichen (in der Schweiz: EDÖB).

---

## 7. Cookies und Tracker

MotoRival ist eine Mobile-App — keine Cookies im Web-Sinn. Verwendete Kennungen:
- Device ID (zwingend notwendig für den Betrieb)
- RevenueCat Anonymous ID (Abos)
- PostHog Distinct ID (Analytics, anonymisiert)

---

## 8. Sicherheit

- Daten werden in der Übertragung (TLS 1.3) und im Ruhezustand (Firestore/Google encryption at rest) verschlüsselt.
- Die Device ID wird im sicheren Despia-iCloud-Schlüsselbund gespeichert.
- Keine sensible Kennung wird im Klartext in den Server-Logs gespeichert.

Im Fall einer Datenpanne informieren wir dich innerhalb von 72h in der App und per Push-Notification.

---

## 9. Minderjährige

MotoRival richtet sich an Erwachsene mit gültigem Motorradführerschein. Wenn du minderjährig bist, nutze die App nicht ohne Aufsicht eines verantwortlichen Erwachsenen.

---

## 10. Änderungen

Diese Erklärung kann sich ändern. Die aktuell gültige Version ist immer die in der App angezeigte. Wesentliche Änderungen lösen eine Benachrichtigung aus.

---

## 11. Kontakt

**Privacy-Fragen**: support@motorival.ch

**Verantwortlicher**: AppSprint (Genf, Schweiz)

---

*Ende der Datenschutzerklärung.*
