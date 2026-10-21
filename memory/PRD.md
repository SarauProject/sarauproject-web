# SarauProject — PRD

## Original problem statement
https://www.sarauproject.com/
"Modernízame esta cuenta, actualízala al estilo gráfico más actual, que se mueva por Internet y atractivo para la contratación. Modernízame esta cuenta y ponla a un estilo actualizado con todo, con todo lo que hay, sin errores, para que haya más contratación, de forma que sea fácil, pero moderna, actualizada."

## Architecture
- React (CRA) + framer-motion + lenis, bilingual ES/EN (context, localStorage)
- FastAPI + MongoDB: `quotes` collection, JWT admin (bcrypt, seeded from .env)
- Assets copied locally to /frontend/public/assets (from original site + YouTube thumbnails)

## User personas
- Programadores de teatros/festivales, wedding planners, agencias de eventos corporativos
- Admin de SarauProject (gestiona solicitudes)

## Core requirements
- Todo el contenido del sitio original (4 espectáculos con vídeo, sobre nosotros, stats, formulario, email)
- Diseño moderno con movimiento, optimizado a conversión (CTAs, sticky CTA, pasos de contratación)
- Formulario de presupuesto guardado + panel /admin

## Implemented (2026-10-21)
- Hero cinematográfico: titular con reveal por líneas, spotlight que sigue el ratón, tilt 3D, parallax, tarjeta flotante
- Marquee editorial lento, bento de espectáculos con modal YouTube + "Solicitar este espectáculo" (preselecciona en formulario)
- Sobre nosotros (sección clara con parallax), Para quién actuamos, Cómo contratar (3 pasos)
- Formulario de presupuesto (POST /api/quotes) con toasts; CTA flotante; footer
- Panel /admin (login JWT, listado, cambio de estado, borrado)
- Logo ORIGINAL del cliente (logo.jpg / letras-sarauproject.png) en nav, footer, admin y favicon — NO cambiar la marca
- 12 idiomas como la web original (es, en, fr, it, de, pl, tr, hu, ru, id, zh, ja): textos originales en src/lib/locales.json + textos nuevos en src/lib/i18n.js; selector desplegable

- Blog recuperado de la web original (4 artículos × 12 idiomas, src/lib/blog.json) en /blog y /blog/:id, enlace en menú y footer
- Publicación independiente: Vercel (frontend/vercel.json) + formulario vía Web3Forms (clave original). Panel /admin retirado de la web.

## Backlog
- P1: Notificación por email al recibir solicitud (Resend)
- P1: Botón WhatsApp (requiere número)
- P2: Galería de fotos, testimonios reales de clientes, dossier PDF descargable
