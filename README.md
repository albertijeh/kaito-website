# Kaito — Customer Intelligence Platform

Site institucional moderno da plataforma de CRM com IA e Customer Intelligence.

## 🚀 Visão Geral

Kaito é uma plataforma de **Customer Intelligence** que conecta CRM, inteligência artificial, automação e dados da jornada para ajudar empresas a atrair, converter e se relacionar melhor com cada cliente.

**Conceito Central:** Sinais → Inteligência → Ação

## 🏗️ Arquitetura

- **Framework:** Next.js 14 com App Router
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React

## 📁 Estrutura de Diretórios

```
kaito-website/
├── app/
│   ├── components/
│   │   ├── sections/           # Seções principais
│   │   │   ├── Hero.tsx
│   │   │   ├── SingleJourney.tsx
│   │   │   ├── KaitoAI.tsx
│   │   │   ├── ProductOverview.tsx
│   │   │   ├── SignalIntelligenceAction.tsx
│   │   │   ├── Manifesto.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── ui/                 # Componentes reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── globals.css             # Estilos globais
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Home page
├── public/                     # Arquivos estáticos
├── tailwind.config.ts          # Configuração Tailwind
├── tsconfig.json               # Configuração TypeScript
├── next.config.js              # Configuração Next.js
├── postcss.config.js           # Configuração PostCSS
└── package.json
```

## 🎨 Design System

### Cores Kaito

- **Background Principal:** `#08080B`
- **Background Secundário:** `#0E0E13`
- **Background Terciário:** `#14141B`
- **Foreground Claro:** `#F7F7FA`
- **Roxo Kaito:** `#6C3BFF`
- **Roxo Claro:** `#7C5CFF`
- **Lavanda:** `#A997FF`
- **Accent:** `#916CFF`
- **Texto Secundário:** `#A8A8B3`

### Tipografia

- **Hero Desktop:** 72px - 104px
- **Hero Mobile:** 42px - 56px
- **Headings:** 600 font-weight, -0.02em letter-spacing
- **Body:** Legível, max-width controlada

## 🚀 Começando

### Instalação

```bash
# Clone o repositório
git clone <repositorio>
cd kaito-website

# Instale as dependências
npm install
# ou
yarn install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Abra http://localhost:3000
```

### Build

```bash
# Crie a build de produção
npm run build

# Inicie o servidor de produção
npm start
```

### Lint

```bash
# Verifique código com ESLint
npm run lint

# Verificação de tipos TypeScript
npm run type-check
```

## 📋 Seções da Homepage

1. **Header/Navbar** - Navegação fixa com menu responsivo
2. **Hero** - Seção principal com visual de produto integrado
3. **Single Journey** - Conectando departamentos (Marketing, Vendas, Atendimento, Pós-venda)
4. **Kaito AI** - IA que lê, escuta, conversa e age
5. **Product Overview** - 4 Pilares: ATRair, CONVERTER, RELACIONAR, INTELIGÊNCIA
6. **Signal → Intelligence → Action** - Conceito central da marca
7. **Manifesto** - Editorial da marca
8. **FAQ** - Perguntas frequentes otimizadas
9. **Final CTA** - Chamada final para ação
10. **Footer** - Links e informações da empresa

## ✨ Características

- ✅ Design moderno e sofisticado
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Animações suaves com Framer Motion
- ✅ Otimizado para SEO
- ✅ Acessibilidade WCAG 2.1
- ✅ Performance otimizada (Core Web Vitals)
- ✅ TypeScript para segurança de tipos
- ✅ Componentes reutilizáveis

## 🔒 Segurança

- HTML semântico
- Contraste de cores WCAG AA+
- Navegação por teclado
- Focus states acessíveis
- Alt text em imagens
- Respeita `prefers-reduced-motion`

## 📊 Otimizações

- Lazy loading de imagens
- CSS crítico inline
- Code splitting automático
- Minificação de assets
- Suporte a dark/light mode (dark por padrão)

## 🌍 SEO

- Metadata estruturada
- Open Graph tags
- Twitter Card
- Sitemap automático
- Robots.txt
- Schema.org markup

## 📱 Responsividade

Testado em:
- 375px (Mobile pequeno)
- 390px (Mobile)
- 768px (Tablet)
- 1024px (Desktop médio)
- 1440px (Desktop)
- 1920px (Desktop grande)

## 🤝 Contribuindo

Para sugestões e melhorias, abra uma issue ou pull request.

## 📄 Licença

Copyright © 2024 Kaito. Todos os direitos reservados.

## 📞 Contato

- Email: contato@kaito.com
- Website: https://kaito.com
- Twitter: @kaiocorp
- LinkedIn: /company/kaito

---

**Sinais. Inteligência. Ação.**
