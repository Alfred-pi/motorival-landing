# Privacy Policy — MotoRival

**Version**: 2026-04-23
**Last update**: April 23, 2026

---

## 1. What we collect

### Technical data
- **Device ID UUID**: unique identifier generated locally, stored in your iPhone's localStorage and in the Despia iCloud keychain. It's the pivot of your account — no email login, no password.
- **iOS version, iPhone model, app version**: for debugging and compatibility.

### Gameplay data
- **GPS positions** during an active ride (1 Hz). They are converted into territory hexagons and stored server-side.
- **Ride stats**: distance, duration, zones captured, zones stolen.
- **Public profile**: handle, motorcycle (brand + model), zone colour, country.
- **Crew**: crew membership and km² contribution.

### Optional data
- **Profile photo**: only if you upload one.
- **Bio**: only if you fill one in.

---

## 2. What we don't collect

- **No legal name, no email, no phone number.** MotoRival runs zero-friction, accountless.
- **No instant speed.** The app doesn't score speed and doesn't store it — that's an ethical and legal choice.
- **No GPS tracking outside rides.** GPS is only active during a ride you manually start. Outside rides, we don't know where you are.
- **No banking data.** Apple handles all payments. We never see your card.

---

## 3. Why we collect this data

| Data | Purpose | Legal basis |
|---|---|---|
| Device ID | Identify your account | Contract performance |
| GPS positions | Compute your territory | Contract performance |
| Handle, motorcycle, country | Display profile and leaderboard | Contract performance |
| Ride stats | Ranking, ceremonies, notifications | Contract performance |
| Anonymous analytics (PostHog) | Improve the app, catch bugs | Legitimate interest |
| RevenueCat entitlements | Verify your subscription | Contract performance |

---

## 4. Who we share with

- **Firebase (Google Cloud)**: hosting of profile and ride data. EU servers.
- **RevenueCat**: subscription management, tied to your Device ID.
- **PostHog (EU)**: anonymised product analytics. EU servers (Frankfurt).
- **OneSignal**: push notification delivery, tied to your Device ID.
- **Apple**: payments and distribution via the App Store.

We never sell your data to third parties. We don't run targeted advertising.

---

## 5. Retention period

- **While your account is active**: we keep your data.
- **Inactivity > 24 months**: your data may be archived or deleted automatically.
- **Account deletion** (Settings → Delete my account): all your data is wiped within 30 days. Territories you owned become capturable again by others.

---

## 6. Your rights (GDPR)

- **Access**: you can review your data inside the app (profile, activity, settings).
- **Rectification**: edit your profile in Settings.
- **Erasure**: Settings → Delete my account.
- **Portability**: write to support@motorival.ch, we'll send you a JSON export within 30 days.
- **Object to analytics**: disable analytics in iOS settings (Limit Ad Tracking).
- **Complaint**: you can lodge a complaint with your country's data protection authority (in Switzerland: FDPIC).

---

## 7. Cookies and trackers

MotoRival is a mobile app — no cookies in the web sense. The identifiers used:
- Device ID (required for operation)
- RevenueCat anonymous ID (subscriptions)
- PostHog distinct ID (analytics, anonymised)

---

## 8. Security

- Data is encrypted in transit (TLS 1.3) and at rest (Firestore/Google encryption at rest).
- The Device ID is stored in the secure Despia iCloud keychain.
- No sensitive identifier is stored in plain text in server logs.

In the event of a data breach, we'll notify you inside the app and via push notification within 72h.

---

## 9. Minors

MotoRival is intended for adults holding a valid motorcycle licence. If you are a minor, don't use the app without supervision from a responsible adult.

---

## 10. Changes

This policy may evolve. The version in force is always the one shown inside the app. Substantial changes trigger a notification.

---

## 11. Contact

**Privacy questions**: support@motorival.ch

**Data controller**: AppSprint (Geneva, Switzerland)

---

*End of privacy policy.*
