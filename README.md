# QR Menu + WhatsApp Cart (React + Vite + Tailwind)

- Arabic default + RTL first paint
- Menu with categories, search, item options (single/multi/text)
- Cart drawer with quantity controls, clear cart, customer details
- WhatsApp checkout (pre-filled message)

## Run
```bash
npm install
npm run dev
```

## Customize
- Business info: `src/data/config.json`
- Menus: `src/data/menu.{ar,he,en}.json` (add `options` per item)
- WhatsApp target: `config.whatsapp` in the same file
- Styling via CSS variables in `src/styles/index.css`

## Deploy
- Vercel/Netlify. Use `/qr` to generate poster PNG.