# DEWL website starter

A responsive Next.js landing-page starter for DEWL — CALL HOME.

## Run locally

1. Install Node.js 20.9+ (Node 24 is also suitable).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Included

- Responsive homepage for desktop and mobile
- DEWL brand and “Call home” positioning
- Destination selector and phone-number entry UI
- How-it-works section
- Destination list with rates intentionally marked “Rates coming soon”
- Early-access email form (front-end demonstration only)

## Important: not yet connected

This is the first front-end milestone. It does **not** yet:
- create customer accounts or authenticate users
- collect or store payments
- maintain a real wallet or balance
- place real telephone calls
- connect to VoipPro, WebTic, or another SIP carrier
- calculate live calling rates or deduct call charges

Those require a backend, database, payment provider, SIP/WebRTC infrastructure, provider approval, and security/fraud controls. Do not enter real payment details or rely on the demo form for customer registrations.

## Next implementation milestones

1. Confirm the DEWL domain and provider's written reseller permission.
2. Build authentication, customer profiles, and PostgreSQL schema.
3. Build wallet ledger and payment integration with idempotent payment webhooks.
4. Connect browser calling using WebRTC and a server-side SIP/PBX gateway.
5. Add rate lookup, call authorization, CDR reconciliation, and wallet charging.
6. Add operational monitoring, fraud limits, privacy terms, and telecom/legal review.
