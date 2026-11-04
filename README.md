# 🍕 La Bicca Pizzaria

Website for **La Bicca Pizzaria**, a family-run pizzeria. The goal is to let customers browse the menu and order directly from the pizzeria, without paying marketplace commissions.

> 🚧 **Work in progress.** The menu and contact flow are working; direct ordering is the next stage.

## What it does today

- **Home page** with a hero section (logo, photo and a "see the menu" button), in Portuguese for the pizzeria's customers.
- **Menu sections** with flavor cards, split into savory and sweet pizzas (a combos section is on the way).
- **Pricing that mirrors the delivery marketplace:** price depends on the *type* of flavor (traditional or premium) and the *size*, not on each flavor individually. Prices are stored in cents (integers) to avoid rounding errors.
- **Size rules built into the data:** each size defines its number of slices and the maximum number of flavors per pizza (up to 4 on the family size).
- **Side menu** for jumping between sections of the page.
- **Contact section** with phone, address and opening hours.
- **WhatsApp button** that opens a chat with the order message already written.
- **Single source of truth for store info:** name, phone, address and opening hours live in one file, and the menu, footer and WhatsApp button all read from it.

## Tech

- [Next.js](https://nextjs.org/) (App Router) and React
- CSS Modules
- ESLint

## Project structure

```
app/
├── components/      # FlavorCard, SideMenu, WhatsApp button
├── page.js          # home page
└── layout.js
data/
├── menu.js          # flavors, sizes and price table
└── loja.js          # store contact info
lib/                 # formatting helpers
public/              # logo and images
```

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Roadmap

- [ ] Move the menu from a data file to a database (PostgreSQL)
- [ ] Direct ordering with a cart
- [ ] Mobile app (Expo / React Native) for Android and iOS
- [ ] Deploy

## About this project

This is a real project for a real business, built from scratch by [Sofia Maldaner](https://github.com/sofiadietzmaldaner), partly to learn full-stack development end to end. It is developed with the help of Claude Code.
