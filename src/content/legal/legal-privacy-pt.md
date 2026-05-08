# Política de privacidade — MotoRival

**Versão**: 2026-04-23
**Última atualização**: 23 de abril de 2026

---

## 1. O que a gente coleta

### Dados técnicos
- **Device ID UUID**: identificador único gerado localmente, armazenado no localStorage do seu iPhone e no chaveiro iCloud Despia. É o pivô da sua conta — sem login por email, sem senha.
- **Versão do iOS, modelo do iPhone, versão do app**: para debugging e compatibilidade.

### Dados de gameplay
- **Posições GPS** durante um ride ativo (1 Hz). São convertidas em hexágonos de território e armazenadas no servidor.
- **Estatísticas de ride**: distância, duração, zonas capturadas, zonas roubadas.
- **Perfil público**: apelido, moto (marca + modelo), cor das zonas, país.
- **Crew**: pertencimento a uma crew e contribuição em km².

### Dados opcionais
- **Foto de perfil**: só se você enviar uma.
- **Bio**: só se você preencher uma.

---

## 2. O que a gente não coleta

- **Nenhum nome legal, nenhum email, nenhum número de telefone.** O MotoRival roda em zero-friction, sem conta.
- **Nenhuma velocidade instantânea.** O app não pontua a velocidade e não a armazena — é uma escolha ética e jurídica.
- **Nenhum tracking GPS fora do ride.** O GPS só fica ativo durante um ride iniciado manualmente por você. Fora do ride, a gente não sabe onde você está.
- **Nenhum dado bancário.** A Apple gerencia todos os pagamentos. A gente nunca vê seu cartão.

---

## 3. Por que a gente coleta esses dados

| Dado | Finalidade | Base legal |
|---|---|---|
| Device ID | Identificar sua conta | Execução do contrato |
| Posições GPS | Calcular seu território | Execução do contrato |
| Apelido, moto, país | Exibir seu perfil e o leaderboard | Execução do contrato |
| Estatísticas de ride | Ranking, ceremonies, notificações | Execução do contrato |
| Analytics anônimas (PostHog) | Melhorar o app, detectar bugs | Interesse legítimo |
| Entitlements RevenueCat | Verificar sua assinatura | Execução do contrato |

---

## 4. Com quem a gente compartilha

- **Firebase (Google Cloud)**: hospedagem dos dados de perfil e rides. Servidores UE.
- **RevenueCat**: gestão de assinaturas, vinculada ao seu Device ID.
- **PostHog (EU)**: analytics de produto anonimizadas. Servidores UE (Frankfurt).
- **OneSignal**: envio de push notifications, vinculado ao seu Device ID.
- **Apple**: pagamentos e distribuição via App Store.

A gente nunca vende seus dados a terceiros. Não faz publicidade direcionada.

---

## 5. Prazo de conservação

- **Enquanto sua conta estiver ativa**: a gente mantém seus dados.
- **Inatividade > 24 meses**: seus dados podem ser arquivados ou excluídos automaticamente.
- **Exclusão de conta** (Ajustes → Excluir minha conta): todos os seus dados são apagados em até 30 dias. Os territórios que você possuía voltam a poder ser capturados por outros.

---

## 6. Seus direitos (LGPD / GDPR)

- **Acesso**: você pode consultar seus dados dentro do app (perfil, atividade, ajustes).
- **Retificação**: edite seu perfil em Ajustes.
- **Exclusão**: Ajustes → Excluir minha conta.
- **Portabilidade**: escreva para support@motorival.app, a gente te manda um export JSON em até 30 dias.
- **Oposição às analytics**: desative as analytics nos ajustes do iOS (Limitar rastreamento de anúncios).
- **Reclamação**: você pode apresentar uma reclamação à autoridade de proteção de dados do seu país (na Suíça: FDPIC; no Brasil: ANPD).

---

## 7. Cookies e trackers

O MotoRival é um app mobile — sem cookies no sentido web. Identificadores usados:
- Device ID (obrigatório para o funcionamento)
- RevenueCat anonymous ID (assinaturas)
- PostHog distinct ID (analytics, anonimizado)

---

## 8. Segurança

- Os dados são criptografados em trânsito (TLS 1.3) e em repouso (Firestore/Google encryption at rest).
- O Device ID é armazenado no chaveiro iCloud seguro Despia.
- Nenhum identificador sensível é armazenado em texto claro nos logs do servidor.

Em caso de vazamento de dados, a gente te avisa dentro do app e por push notification em até 72h.

---

## 9. Menores

O MotoRival é destinado a adultos com habilitação de moto válida. Se você é menor de idade, não use o app sem a supervisão de um adulto responsável.

---

## 10. Modificações

Esta política pode evoluir. A versão em vigor é sempre a exibida dentro do app. Modificações substanciais disparam uma notificação.

---

## 11. Contato

**Dúvidas de privacidade**: support@motorival.app

**Controlador dos dados**: AppSprint (Genebra, Suíça)

---

*Fim da política de privacidade.*
