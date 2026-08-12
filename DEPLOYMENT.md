# Guia de Deployment - Kaito Website

## 🚀 Deployment Rápido

### Vercel (Recomendado)

Vercel é otimizado para Next.js e oferece zero-config deployment.

```bash
# 1. Instale o Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Siga as prompts interativas
```

**Ou via GitHub**:
1. Push para repositório GitHub
2. Conecte em vercel.com
3. Deploy automático em cada push

### Netlify

```bash
# 1. Instale Netlify CLI
npm install -g netlify-cli

# 2. Build
npm run build

# 3. Deploy
netlify deploy --prod --dir=.next
```

### AWS Amplify

```bash
# 1. Instale AWS Amplify CLI
npm install -g @aws-amplify/cli

# 2. Configure
amplify init

# 3. Deploy
amplify publish
```

### Self-hosted (Server)

```bash
# 1. SSH para seu servidor
ssh user@server.com

# 2. Clone o repositório
git clone <repo-url>
cd kaito-website

# 3. Instale dependências
npm install

# 4. Build
npm run build

# 5. Start com PM2 (recomendado)
npm install -g pm2
pm2 start "npm start" --name "kaito"
pm2 save
pm2 startup

# 6. Configure Nginx como reverse proxy
# Aponte para http://localhost:3000
```

## 🔗 Variáveis de Ambiente

Para o site estático não há variáveis obrigatórias.

**Futuras integrações** (se necessário):

```bash
# .env.local (não commitar)
NEXT_PUBLIC_API_URL=https://api.kaito.com
NEXT_PUBLIC_GA_ID=UA-XXXXX-X
NEXT_PUBLIC_SENTRY_DSN=
```

## 🔍 Pré-deployment Checklist

### Código
- [ ] `npm run lint` sem erros
- [ ] `npm run type-check` sem erros
- [ ] `npm run build` bem-sucedido
- [ ] Testar `npm start` localmente

### SEO
- [ ] Meta tags revisadas
- [ ] Open Graph tags corretas
- [ ] Favicon presente
- [ ] robots.txt configurado
- [ ] sitemap.xml configurado

### Performance
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals otimizados
- [ ] Imagens otimizadas
- [ ] CSS/JS minificado

### Acessibilidade
- [ ] Sem erros axe DevTools
- [ ] Contraste de cores OK
- [ ] Navegação por teclado testada
- [ ] Alt text presente

### Responsividade
- [ ] Testado em mobile (375px)
- [ ] Testado em tablet (768px)
- [ ] Testado em desktop (1440px)
- [ ] Sem overflow horizontal

## 📊 Monitoramento Pós-deployment

### Analytics
```typescript
// Adicionar Google Analytics (futuro)
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        <GoogleAnalytics gaId="UA-XXXXX-X" />
      </body>
    </html>
  )
}
```

### Erro Tracking
Considere Sentry para monitoramento de erros:

```bash
npm install @sentry/nextjs
```

### Core Web Vitals
Monitorar via:
- PageSpeed Insights
- Vercel Analytics
- Google Search Console

## 🔒 Security Headers

### Recomendado adicionar ao `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
      ],
    },
  ]
}
```

## 🌍 Domain & DNS

### Cloudflare (Recomendado)
1. Registre em registrador (Namecheap, GoDaddy, etc.)
2. Aponte NS para Cloudflare
3. Crie CNAME record apontando para Vercel/host
4. Ative SSL automático

### DNS Típico (Vercel)
```
Host: www
Type: CNAME
Value: cname.vercel-dns.com
```

## 📞 Suporte & Troubleshooting

### Build fail
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Performance lenta
1. Verificar build size
2. Analisar com Lighthouse
3. Verificar imagens otimizadas
4. Considerar CDN

### Erro em produção
1. Verificar logs do servidor
2. Usar Sentry ou similar
3. Testar localmente com `npm start`

## 📈 Escalação Futura

### Se precisa de backend
- Considerar Next.js API routes
- Usar serverless (Vercel Functions, AWS Lambda)
- Database (PostgreSQL, MongoDB)

### Se precisa de CMS
- Headless: Contentful, Sanity, Strapi
- Tradicional: WordPress headless

### Se precisa de e-commerce
- Shopify headless
- WooCommerce headless
- Stripe + customizado

---

**Deployment checklist completo**: Antes de ir para produção, verificar todos os itens acima.
