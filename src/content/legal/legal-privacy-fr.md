# Politique de confidentialité — MotoRival

**Version** : 2026-04-23
**Dernière MAJ** : 23 avril 2026

---

## 1. Ce qu'on collecte

### Données techniques
- **Device ID UUID** : identifiant unique généré localement, stocké dans le localStorage de ton iPhone et dans le trousseau iCloud Despia. C'est le pivot de ton compte — pas de login email, pas de mot de passe.
- **Version iOS, modèle d'iPhone, version de l'app** : pour le debugging et la compatibilité.

### Données de gameplay
- **Positions GPS** pendant un ride actif (1 Hz). Elles sont converties en hexagones de territoire et stockées côté serveur.
- **Stats de ride** : distance, durée, zones capturées, zones volées.
- **Profil public** : pseudo, moto (marque + modèle), couleur de zones, pays.
- **Crew** : appartenance à un crew et contribution km².

### Données facultatives
- **Photo de profil** : uniquement si tu en charges une.
- **Bio** : uniquement si tu en renseignes une.

---

## 2. Ce qu'on ne collecte pas

- **Pas de nom légal, pas d'email, pas de numéro de téléphone.** MotoRival fonctionne en zero-friction, sans compte.
- **Pas de vitesse instantanée.** L'app ne score pas la vitesse et ne la stocke pas — c'est un choix éthique et juridique.
- **Pas de tracking GPS hors ride.** Le GPS n'est actif que pendant un ride lancé manuellement par toi. Hors ride, on ne sait pas où tu es.
- **Pas de données bancaires.** Apple gère tous les paiements. On ne voit jamais ta carte.

---

## 3. Pourquoi on collecte ces données

| Donnée | Finalité | Base légale |
|---|---|---|
| Device ID | Identifier ton compte | Exécution du contrat |
| Positions GPS | Calculer ton territoire | Exécution du contrat |
| Pseudo, moto, pays | Afficher ton profil et le leaderboard | Exécution du contrat |
| Stats de ride | Ranking, ceremonies, notifications | Exécution du contrat |
| Analytics anonymes (PostHog) | Améliorer l'app, détecter les bugs | Intérêt légitime |
| Entitlements RevenueCat | Vérifier ton abonnement | Exécution du contrat |

---

## 4. Avec qui on partage

- **Firebase (Google Cloud)** : hébergement des données de profil et rides. Serveurs UE.
- **RevenueCat** : gestion des abonnements, lié à ton Device ID.
- **PostHog (EU)** : analytics produit anonymisés. Serveurs UE (Francfort).
- **OneSignal** : envoi des push notifications, lié à ton Device ID.
- **Apple** : paiements et distribution via l'App Store.

On ne vend jamais tes données à des tiers. On ne fait pas de publicité ciblée.

---

## 5. Durée de conservation

- **Tant que ton compte est actif** : on conserve tes données.
- **Inactivité > 24 mois** : tes données peuvent être archivées ou supprimées automatiquement.
- **Suppression de compte** (Settings → Supprimer mon compte) : toutes tes données sont effacées sous 30 jours. Les territoires que tu possédais redeviennent capturables par d'autres.

---

## 6. Tes droits (RGPD)

- **Accès** : tu peux consulter tes données via l'app (profil, activité, settings).
- **Rectification** : édite ton profil dans Settings.
- **Effacement** : Settings → Supprimer mon compte.
- **Portabilité** : écris à support@motorival.app, on te renvoie un export JSON sous 30 jours.
- **Opposition aux analytics** : désactive les analytics dans les réglages iOS (Limiter le suivi publicitaire).
- **Plainte** : tu peux déposer une plainte auprès de l'autorité de protection des données de ton pays (en Suisse : PFPDT).

---

## 7. Cookies et trackers

MotoRival est une app mobile — pas de cookies au sens web. Les identifiants utilisés :
- Device ID (obligatoire au fonctionnement)
- RevenueCat anonymous ID (abonnements)
- PostHog distinct ID (analytics, anonymisé)

---

## 8. Sécurité

- Les données sont chiffrées en transit (TLS 1.3) et au repos (Firestore/Google encryption at rest).
- Le Device ID est stocké dans le trousseau iCloud sécurisé Despia.
- Aucun identifiant sensible n'est stocké en clair dans les logs serveur.

En cas de fuite de données, on t'informera dans l'app et par notification push sous 72h.

---

## 9. Mineurs

MotoRival est destiné à des adultes détenteurs d'un permis moto valide. Si tu es mineur, n'utilise pas l'app sans supervision d'un adulte responsable.

---

## 10. Modifications

Cette politique peut évoluer. La version en vigueur est toujours celle affichée dans l'app. Les modifications substantielles déclenchent une notification.

---

## 11. Contact

**Questions privacy** : support@motorival.app

**Responsable du traitement** : AppSprint (Genève, Suisse)

---

*Fin de la politique de confidentialité.*
