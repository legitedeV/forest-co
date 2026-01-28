FROM node:20-alpine AS deps
WORKDIR /opt/app
COPY package.json ./
COPY package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN corepack enable
RUN if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  else npm install; \
  fi

FROM node:20-alpine AS build
WORKDIR /opt/app
COPY --from=deps /opt/app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /opt/app
ENV NODE_ENV=production
COPY --from=build /opt/app ./
EXPOSE 1337
CMD ["npm", "run", "start"]
