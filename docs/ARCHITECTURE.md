# Architecture

## Overview

- Caddy terminates TLS and routes to Next.js, Medusa, and Strapi.
- Medusa provides commerce APIs/admin.
- Strapi provides content and page sections.
- Postgres is shared initially (can be split later).
- No MinIO/Redis by default for MVP simplicity.

## Flow

```
Strapi -> Next.js (content + preview)
Medusa -> Next.js (products/checkout)
Caddy -> public domains + admin subdomains
```

## Decision notes

- MinIO omitted: local volumes first, add when scaling.
- Redis omitted: add if queues/background jobs needed.
