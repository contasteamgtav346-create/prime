# prime.gg

## Deploy recomendado

- Frontend: Netlify
- Backend + banco: Railway + PostgreSQL
- Login: Discord OAuth2

## Variaveis do backend no Railway

Crie estas variaveis no servico do backend:

```env
NODE_ENV=production
DATABASE_URL=postgresql://...
SESSION_COOKIE_NAME=pg_session
ADMIN_INITIAL_PASSWORD=troque-isto
FRONTEND_URL=https://primecompetiive.netlify.app
DISCORD_CLIENT_ID=SEU_CLIENT_ID
DISCORD_CLIENT_SECRET=SEU_CLIENT_SECRET
```

## Variavel do frontend no Netlify

```env
VITE_API_BASE_URL=https://seu-backend.up.railway.app
```

## Comandos prontos para Railway

- Build Command: `npm run railway:build`
- Start Command: `npm run railway:start`

Esses comandos:

1. geram o Prisma Client
2. fazem `prisma db push` no PostgreSQL
3. iniciam o backend com `tsx`

## Passo a passo rapido

1. Suba este repositorio no GitHub.
2. No Railway, crie um projeto novo e escolha `Deploy from GitHub repo`.
3. Adicione um banco `PostgreSQL` no mesmo projeto.
4. No servico do backend, copie a `DATABASE_URL` do banco.
5. Configure as variaveis do backend.
6. Em `Settings` do servico, use:
   - Root Directory: deixe vazio
   - Build Command: `npm run railway:build`
   - Start Command: `npm run railway:start`
7. Aguarde o deploy e copie a URL publica do Railway.
8. No Netlify, em `Site configuration > Environment variables`, defina:
   - `VITE_API_BASE_URL=https://URL-DO-RAILWAY`
9. Faça um novo deploy do frontend no Netlify.
10. No Discord Developer Portal, atualize:
   - Redirect URI local: `http://localhost:3001/api/auth/discord/callback`
   - Redirect URI producao: `https://URL-DO-RAILWAY/api/auth/discord/callback`

## Observacao importante sobre Prisma

As migrations antigas do projeto foram criadas em SQLite. Para o Railway com PostgreSQL, este projeto usa `prisma db push` no deploy para criar a estrutura do banco direto no Postgres.
