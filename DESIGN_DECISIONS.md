# Decisões de Design - Kaito Website

## 📋 Visão Geral

Este documento descreve as principais decisões de design, arquitetura e implementação do site da Kaito.

## 🎯 Conceito Central

**Sinais → Inteligência → Ação**

Todos os elementos visuais, copy e estrutura estão organizados em torno deste conceito narrativo.

## 🏗️ Decisões Arquiteturais

### Framework & Stack

- **Next.js 14** com App Router: SSG/SSR eficiente, performance otimizada
- **React 18**: Componentes modernos com hooks
- **TypeScript**: Segurança de tipos end-to-end
- **Tailwind CSS**: Design system consistente, velocidade de desenvolvimento
- **Framer Motion**: Animações suaves mas não excessivas

### Razões

1. **Performance**: Core Web Vitals otimizados (LCP, FID, CLS)
2. **SEO**: Metadata estruturada, Open Graph, server-side rendering
3. **Responsividade**: Abordagem mobile-first com Tailwind
4. **Manutenibilidade**: TypeScript previne bugs, componentes reutilizáveis
5. **Escalabilidade**: Fácil adicionar novas seções

## 🎨 Decisões de Design

### Paleta de Cores

A paleta segue o master prompt com algumas refinações:

- **Background escuro** (#08080B, #0E0E13, #14141B): Estabelece sofisticação
- **Roxo Kaito** (#6C3BFF): Cor primária, usar com moderação
- **Variações de roxo**: Criar hierarquia visual sem neon excessivo
- **Bordas subtis** (rgba(255,255,255,0.08)): Definir espaços sem ruído

### Tipografia

- **Hero**: Contraste extremo de escala (72-104px desktop, 42-56px mobile)
- **Heading**: -0.02em letter-spacing, font-weight 600
- **Body**: Legibilidade primeira, max-width controlada
- **Prioridade**: Clareza editorial sobre decoração

### Animações

- **Duração**: 500-800ms para sensação responsiva
- **Easing**: ease-out para entrada, ease-in para saída
- **Preferência de redução**: Respeita `prefers-reduced-motion`
- **Tipos**: opacity + transform preferidos (melhor performance)

**Evitado**: Bounce, elastic, neon excessivo, movimento por movimento

### Espaçamento

- **Vertical**: Seções com 24-32px de padding
- **Horizontal**: Max-width 7xl (80rem)
- **Interno**: Respiro generoso entre elementos
- **Princípio**: Menos elementos competindo simultaneamente

## 📱 Responsividade

### Breakpoints Testados

- 375px (Mobile pequeno)
- 390px (Mobile padrão)
- 768px (Tablet)
- 1024px (Desktop médio)
- 1440px (Desktop)
- 1920px (Ultra-wide)

### Estratégia Mobile

- Simplificar animações (sem sticky sections)
- Preservar conteúdo de produto
- CTA sempre visível
- Boa legibilidade sem zoom

## 🧩 Estrutura de Componentes

### Componentes UI (Reutilizáveis)

```
components/ui/
├── Button.tsx       # Variantes: primary, secondary, ghost
├── Badge.tsx        # Tags/labels com variantes
└── SectionHeader.tsx # Header padrão de seções
```

### Seções

```
components/sections/
├── Hero.tsx                          # Seção principal
├── SingleJourney.tsx                 # Conectando departamentos
├── KaitoAI.tsx                       # IA multimodal
├── ProductOverview.tsx               # 4 pilares
├── SignalIntelligenceAction.tsx      # Conceito central
├── Manifesto.tsx                     # Editorial
├── FAQ.tsx                           # Perguntas frequentes
└── FinalCTA.tsx                      # Call-to-action final
```

### Composição

- Cada seção é independente
- Usa componentes UI para consistência
- Animações com Framer Motion
- Viewport-based animations com `whileInView`

## 📝 Copywriting Melhorias

### Princípios Aplicados

1. **Cliente antes da Tecnologia**: Começar com o problema, não a solução
2. **Ação antes do Dashboard**: Focar em "o que fazer", não em "que dados temos"
3. **Contexto antes do Dado**: Explicar POR QUE a informação importa
4. **Resultado antes de Feature**: "Transforme em inteligência" > "temos AI"
5. **Frase-chave repetida**: Reforçar "Sinais → Inteligência → Ação"

### Exemplos

**Antes**: "Conheça a Kaito. A solução de CRM com IA para sua empresa."
**Depois**: "Entenda cada sinal. Transforme inteligência em ação."

**Antes**: "Uma IA generativa para sua empresa"
**Depois**: "Uma IA que lê, escuta, conversa e age."

## ♿ Acessibilidade

### WCAG 2.1 Compliance

- ✅ Contraste de cores AA+ (excedem requisitos)
- ✅ HTML semântico (h1, h2, nav, etc.)
- ✅ Navegação por teclado completa
- ✅ Focus states visíveis
- ✅ Alt text em imagens decorativas e funcionais
- ✅ Suporte a `prefers-reduced-motion`
- ✅ Touch targets mínimo 48x48px

### Implementação

```typescript
// Focus state para acessibilidade
className="focus-visible:outline-2 focus-visible:outline-offset-2"

// Respeitando preferência de movimento
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}

// Semântica HTML
<header>, <nav>, <main>, <footer>, <section>, <article>
```

## 📊 SEO Otimizações

### Metadata

- Title: "Kaito | CRM com IA e Customer Intelligence"
- Meta Description: Descrição concisa, call-to-action
- Open Graph + Twitter Card
- Schema.org structured data (quando apropriado)

### Conteúdo

- H1 único por página (Hero)
- H2 para seções principais
- H3 para sub-tópicos
- Palavras-chave naturalmente integradas
- FAQ estruturada

### Performance

- Next.js automatic code-splitting
- Image optimization
- CSS crítico inline
- Lazy loading de componentes

## 🔒 Security

- Nenhuma integração de terceiros sensível
- Validação de entrada (quando houver formulários)
- CSP headers em produção
- No sensitive data na UI

## 🚀 Deployment

### Preparação

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build
npm run build

# Test build localmente
npm start
```

### Plataformas Recomendadas

- **Vercel** (nativo para Next.js, zero-config)
- **Netlify** (bom suporte para Next.js)
- **AWS Amplify** (para integração AWS)

### Variáveis de Ambiente

Nenhuma necessária para o site estático.

Para futuras integrações (forms, analytics):
```
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_GA_ID=
```

## 📈 Performance Targets

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Otimizações Aplicadas

- CSS minified por Tailwind
- JavaScript split automático
- SVG inline para ícones
- CSS variables para temas
- No render-blocking resources

## 🔄 Padrões de Desenvolvimento

### Componentes

```typescript
// Usar 'use client' apenas onde necessário (animações, interações)
'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface ComponentProps {
  title: string;
  description?: string;
}

export const Component: FC<ComponentProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
};
```

### Animações

```typescript
// Pattern para animações com viewport
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }} // Animar apenas uma vez
>
  Conteúdo
</motion.div>
```

## 📦 Próximos Passos

### Fase 1 (MVP)
- ✅ Homepage pronta
- ✅ Seções principais
- ✅ Responsividade
- ✅ SEO base

### Fase 2 (Expansão)
- [ ] Página de pricing
- [ ] Blog/conteúdo
- [ ] Case studies
- [ ] Integração de formulários
- [ ] Analytics

### Fase 3 (Otimização)
- [ ] A/B testing de CTAs
- [ ] Heatmaps e session recording
- [ ] Otimização de conversão
- [ ] Dark/light mode toggle
- [ ] Localização (i18n)

## 🎓 Referências de Qualidade

**Benchmark**: Sierra AI (sierra.ai)

**Aspectos estudados**:
- Ritmo de scroll e pacing
- Hierarquia visual
- Uso de whitespace
- Animações sofisticadas
- Storytelling editorial

**Diferenciais Kaito**:
- Identidade visual própria
- Copy editorial forte
- Foco em operação comercial (não apenas tecnologia)
- Conceito "Sinais → Inteligência → Ação" como fio condutor

---

**Princípio Final**: A página não deve parecer um template de SaaS. Deve parecer uma empresa global de tecnologia pronta para competir internacionalmente.
