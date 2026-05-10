# Política de privacidad — MotoRival

**Versión**: 2026-04-23
**Última actualización**: 23 de abril de 2026

---

## 1. Qué recopilamos

### Datos técnicos
- **Device ID UUID**: identificador único generado localmente, almacenado en el localStorage de tu iPhone y en el llavero iCloud de Despia. Es el pivote de tu cuenta — sin login por email, sin contraseña.
- **Versión de iOS, modelo de iPhone, versión de la app**: para debugging y compatibilidad.

### Datos de gameplay
- **Posiciones GPS** durante un ride activo (1 Hz). Se convierten en hexágonos de territorio y se almacenan en el servidor.
- **Estadísticas de ride**: distancia, duración, zonas capturadas, zonas robadas.
- **Perfil público**: alias, moto (marca + modelo), color de zonas, país.
- **Crew**: pertenencia a un crew y contribución en km².

### Datos opcionales
- **Foto de perfil**: sólo si subes una.
- **Bio**: sólo si rellenas una.

---

## 2. Qué no recopilamos

- **Ningún nombre legal, ningún email, ningún número de teléfono.** MotoRival funciona en zero-friction, sin cuenta.
- **Ninguna velocidad instantánea.** La app no puntúa la velocidad y no la almacena — es una decisión ética y jurídica.
- **Ningún tracking GPS fuera de ride.** El GPS sólo está activo durante un ride lanzado manualmente por ti. Fuera de ride, no sabemos dónde estás.
- **Ningún dato bancario.** Apple gestiona todos los pagos. Nunca vemos tu tarjeta.

---

## 3. Por qué recopilamos estos datos

| Dato | Finalidad | Base legal |
|---|---|---|
| Device ID | Identificar tu cuenta | Ejecución del contrato |
| Posiciones GPS | Calcular tu territorio | Ejecución del contrato |
| Alias, moto, país | Mostrar tu perfil y el leaderboard | Ejecución del contrato |
| Estadísticas de ride | Ranking, ceremonias, notificaciones | Ejecución del contrato |
| Analytics anónimas (PostHog) | Mejorar la app, detectar bugs | Interés legítimo |
| Entitlements RevenueCat | Verificar tu suscripción | Ejecución del contrato |

---

## 4. Con quién compartimos

- **Firebase (Google Cloud)**: hosting de los datos de perfil y rides. Servidores UE.
- **RevenueCat**: gestión de suscripciones, vinculada a tu Device ID.
- **PostHog (EU)**: analytics de producto anonimizadas. Servidores UE (Frankfurt).
- **OneSignal**: envío de push notifications, vinculado a tu Device ID.
- **Apple**: pagos y distribución vía App Store.

Nunca vendemos tus datos a terceros. No hacemos publicidad segmentada.

---

## 5. Duración de conservación

- **Mientras tu cuenta esté activa**: conservamos tus datos.
- **Inactividad > 24 meses**: tus datos pueden ser archivados o eliminados automáticamente.
- **Eliminación de cuenta** (Ajustes → Eliminar mi cuenta): todos tus datos se borran en un plazo de 30 días. Los territorios que poseías vuelven a ser capturables por otros.

---

## 6. Tus derechos (RGPD)

- **Acceso**: puedes consultar tus datos dentro de la app (perfil, actividad, ajustes).
- **Rectificación**: edita tu perfil en Ajustes.
- **Supresión**: Ajustes → Eliminar mi cuenta.
- **Portabilidad**: escribe a support@motorival.ch, te enviaremos un export JSON en un plazo de 30 días.
- **Oposición a las analytics**: desactiva las analytics en los ajustes de iOS (Limitar el seguimiento publicitario).
- **Reclamación**: puedes presentar una reclamación ante la autoridad de protección de datos de tu país (en Suiza: FDPIC).

---

## 7. Cookies y trackers

MotoRival es una app móvil — sin cookies en el sentido web. Los identificadores usados:
- Device ID (obligatorio para el funcionamiento)
- RevenueCat anonymous ID (suscripciones)
- PostHog distinct ID (analytics, anonimizado)

---

## 8. Seguridad

- Los datos se cifran en tránsito (TLS 1.3) y en reposo (Firestore/Google encryption at rest).
- El Device ID se almacena en el llavero iCloud seguro de Despia.
- Ningún identificador sensible se almacena en claro en los logs del servidor.

En caso de fuga de datos, te informaremos dentro de la app y por notificación push en un plazo de 72h.

---

## 9. Menores

MotoRival está destinado a adultos con un permiso de moto válido. Si eres menor, no uses la app sin la supervisión de un adulto responsable.

---

## 10. Modificaciones

Esta política puede evolucionar. La versión en vigor es siempre la que se muestra dentro de la app. Las modificaciones sustanciales disparan una notificación.

---

## 11. Contacto

**Dudas sobre privacidad**: support@motorival.ch

**Responsable del tratamiento**: AppSprint (Ginebra, Suiza)

---

*Fin de la política de privacidad.*
