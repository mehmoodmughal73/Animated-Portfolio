
# ----------------------------
FROM node:18-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

# ----------------------------
# Dependencies Layer
# ----------------------------
FROM base AS deps

COPY package.json package-lock.json* ./
RUN npm install --omit=dev && npm cache clean --force

# ----------------------------
# Builder Layer
# ----------------------------
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ----------------------------
# Runner Layer (Production)
# ----------------------------
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /app/out ./out
COPY --from=builder /app/public ./public

USER root
RUN npm install -g serve

RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

CMD ["serve", "-s", "out", "-p", "3000"]

