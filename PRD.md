# PRD — Site Institucional: Thiago Silva Rodrigues | Personal Trainer

**Versão:** 1.0  
**Data:** 2026-05-19  
**Responsável:** Thiago Silva Rodrigues  
**Status:** Em aprovação

---

## 1. Visão do Projeto

### 1.1 Objetivo

Criar um site institucional de alta conversão para o personal trainer Thiago Silva Rodrigues, com foco em transmitir autoridade profissional, gerar conexão com o público-alvo e converter visitantes em alunos via WhatsApp ou consulta online.

O site deve funcionar como o principal ativo digital do profissional, posicionando Thiago como referência em treinamento personalizado em Fortaleza e Caucaia (CE), além de viabilizar atendimentos de consultoria online.

### 1.2 Proposta de Valor

> "Resultado não é sorte, é método."

O site deve comunicar de forma clara que Thiago oferece acompanhamento profissional, humano e estratégico — diferenciando-se pelo cuidado individualizado com cada aluno e pela sólida formação acadêmica e prática.

### 1.3 Público-Alvo

| Perfil | Objetivo típico |
|---|---|
| Homens (18–45 anos) | Hipertrofia, performance, emagrecimento |
| Mulheres (18–45 anos) | Emagrecimento, tonificação, saúde |
| Idosos (55+) | Qualidade de vida, reabilitação, mobilidade |
| Pessoas em reabilitação | Prevenção e recuperação de lesões |

### 1.4 Canais de Conversão

- **Primário:** WhatsApp direto (85 99627-8013)
- **Secundário:** Instagram (@personaltrainerthiagosilva)

---

## 2. Escopo do Produto

### 2.1 Versão Inicial (v1.0)

O site será composto por **uma página única (one-page)** com três seções principais:

1. **Hero Section** — impacto visual imediato e CTA principal
2. **Sobre o Profissional** — conexão e credibilidade pessoal
3. **Institucional** — especialidades e credenciais objetivas

### 2.2 Fora do Escopo (v1.0)

- Sistema de agendamento online
- Blog ou área de conteúdo
- Área de membros / alunos
- Integração com pagamentos
- Seção de depoimentos (pode entrar em v1.1)
- Galeria de fotos de transformação (pode entrar em v1.1)

---

## 3. Requisitos Funcionais

### 3.1 Navegação

- **RF-01:** A navbar deve ser fixa no topo (sticky) e permanecer visível durante o scroll.
- **RF-02:** A navbar deve conter links âncora para as três seções da página.
- **RF-03:** Em dispositivos móveis, a navbar deve colapsar em um menu hambúrguer.
- **RF-04:** O logo/nome do profissional na navbar deve ser clicável e rolar até o topo.

### 3.2 Seção 1 — Hero Section

- **RF-05:** A seção deve ocupar 100% da viewport (altura mínima: 100vh).
- **RF-06:** Deve exibir uma imagem de alta qualidade como fundo (foto profissional do Thiago ou imagem de impacto relacionada a treinamento).
- **RF-07:** A imagem de fundo deve ter overlay escuro semi-transparente para garantir legibilidade do texto.
- **RF-08:** Deve conter uma **headline** principal de alto impacto.
- **RF-09:** Deve conter uma **subheadline** de suporte que complementa a headline.
- **RF-10:** Deve conter um **botão CTA principal** que abre o WhatsApp do Thiago em nova aba com mensagem pré-definida.
- **RF-11:** O botão CTA deve ser visualmente destacado e usar a cor oficial do WhatsApp (#25D366) ou cor primária do design system.

### 3.3 Seção 2 — Sobre o Profissional

- **RF-12:** A seção deve apresentar uma foto do Thiago em destaque (diferente do hero).
- **RF-13:** Deve exibir um texto de apresentação pessoal e profissional em tom humanizado e direto.
- **RF-14:** Deve listar as principais **formações e capacitações** do profissional.
- **RF-15:** Deve exibir o **CREF (021579-G/CE)** como elemento de credibilidade.
- **RF-16:** Deve mencionar as modalidades de atendimento: presencial (Fortaleza e Caucaia) e online.
- **RF-17:** Deve conter um **CTA secundário** de apoio (ex: "Fale comigo no WhatsApp").

### 3.4 Seção 3 — Institucional

- **RF-18:** A seção deve exibir as **especialidades** de forma visual, curta e didática (cards ou ícones).
- **RF-19:** Cada especialidade deve ter um ícone representativo e título curto.
- **RF-20:** Deve exibir as **credenciais formais** do profissional de forma organizada:
  - Licenciatura Plena em Educação Física
  - Pós-graduando em Fisiologia do Exercício e Biomecânica
  - Faixa Preta de Jiu-Jitsu 1º Grau
  - CREF: 021579-G/CE
- **RF-21:** Deve exibir um resumo da **experiência profissional** (instituições onde atuou).
- **RF-22:** Deve conter um **CTA final** de encerramento incentivando o contato.

---

## 4. Requisitos Não Funcionais

### 4.1 Performance

- **RNF-01:** O site deve atingir pontuação mínima de 85 no Google PageSpeed Insights (mobile).
- **RNF-02:** As imagens devem ser otimizadas (WebP, compressão sem perda de qualidade visual).
- **RNF-03:** O site deve carregar em menos de 3 segundos em conexão 4G.

### 4.2 Responsividade

- **RNF-04:** O layout deve ser responsivo para mobile, tablet e desktop.
- **RNF-05:** O breakpoint mobile principal é 390px (iPhone 14); tablet é 768px; desktop é 1280px+.
- **RNF-06:** Elementos de CTA (botões de WhatsApp) devem ter área de toque mínima de 48×48px em mobile.

### 4.3 Acessibilidade

- **RNF-07:** Contraste mínimo WCAG AA (4.5:1) entre texto e fundo.
- **RNF-08:** Imagens devem conter atributo `alt` descritivo.
- **RNF-09:** Botões e links devem ter estados de foco visíveis.

### 4.4 SEO

- **RNF-10:** A página deve ter meta title, meta description e Open Graph configurados.
- **RNF-11:** Headings devem seguir hierarquia semântica (H1 > H2 > H3).
- **RNF-12:** A página deve ter Schema Markup do tipo `LocalBusiness` ou `Person`.

---

## 5. Design System

### 5.1 Identidade Visual

O design deve transmitir: **força, profissionalismo, confiança e resultado**. Evitar o visual genérico de "academia"; buscar um posicionamento premium e humano.

### 5.2 Paleta de Cores (proposta)

| Token | Uso | Valor sugerido |
|---|---|---|
| `--color-primary` | CTAs, destaques, acentos | `#E8A000` (dourado/âmbar) |
| `--color-primary-dark` | Hover dos botões | `#C47A00` |
| `--color-bg-dark` | Fundos escuros, hero | `#0D0D0D` |
| `--color-bg-section` | Fundo de seções alternadas | `#111111` |
| `--color-surface` | Cards, superfícies | `#1A1A1A` |
| `--color-text-primary` | Corpo do texto principal | `#F5F5F5` |
| `--color-text-muted` | Texto secundário | `#9A9A9A` |
| `--color-accent-green` | Botão WhatsApp | `#25D366` |

> **Nota:** A paleta final deve ser aprovada com o cliente antes do desenvolvimento. Alternativa: usar vermelho/laranja intenso se o cliente preferir identidade mais agressiva.

### 5.3 Tipografia

| Uso | Fonte sugerida | Peso |
|---|---|---|
| Headlines | `Bebas Neue` ou `Montserrat` | 700–900 |
| Subheadlines | `Montserrat` | 600 |
| Corpo de texto | `Inter` ou `Montserrat` | 400 |
| Labels / tags | `Inter` | 500 |

### 5.4 Tom de Voz

- Direto, motivacional e confiante
- Primeira pessoa do singular (voz do Thiago)
- Sem jargão excessivo de academia; linguagem acessível
- Calls-to-action com verbos de ação: "Comece agora", "Fale comigo", "Quero minha transformação"

---

## 6. Conteúdo por Seção

### 6.1 Hero Section

**Headline:** "TRANSFORME SEU CORPO. TRANSFORME SUA VIDA."  
**Subheadline:** "Acompanhamento personalizado com método, ciência e compromisso com o seu resultado. Presencial em Fortaleza e Caucaia | Consultoria Online."  
**CTA:** "QUERO COMEÇAR AGORA" → WhatsApp com mensagem: *"Olá, Thiago! Vi seu site e quero saber mais sobre o acompanhamento personalizado."*

### 6.2 Sobre o Profissional

**Título da seção:** "Quem é Thiago Silva Rodrigues?"

**Texto principal:**  
"Sou Personal Trainer com Licenciatura Plena em Educação Física e Pós-graduação em Fisiologia do Exercício e Biomecânica. Minha missão vai além de montar treinos — trabalho com transformação física, mental e qualidade de vida através de um acompanhamento estratégico, individualizado e 100% focado no seu objetivo.

Sou Faixa Preta de Jiu-Jitsu 1º Grau e carrego para cada treino a mesma disciplina e respeito que aprendi nas artes marciais. Com formação contínua e experiência prática em academias e projetos de extensão universitária, garanto que cada aluno receba o melhor da ciência aplicada ao treinamento."

**Elementos visuais:** Foto profissional em ambiente de treino + lista de formações com ícones.

### 6.3 Institucional

**Título da seção:** "Especialidades & Credenciais"

**Cards de especialidades (7 itens):**

| Ícone | Especialidade |
|---|---|
| 🏋️ | Hipertrofia |
| 🔥 | Emagrecimento |
| 🧍 | Correção Postural |
| 💪 | Treinamento de Força |
| 🩺 | Reabilitação e Prevenção de Lesões |
| ⚡ | Condicionamento Físico |
| 🏆 | Performance e Qualidade de Vida |

**Credenciais formais:**

- Licenciatura Plena em Educação Física
- Pós-graduando em Fisiologia do Exercício e Biomecânica
- Faixa Preta de Jiu-Jitsu 1º Grau
- CREF: 021579-G/CE

**Experiência profissional:**

- Professor de Musculação — Academia Greenlife
- Personal Trainer — Atendimento Individualizado
- Professor de Musculação — Iron CT
- Estagiário e Professor — Funcional Life
- Estagiário — Academia Visual & Estilo
- Professor — Projeto de Extensão FATENE Jiu-Jitsu
- Estagiário e Professor — Academia ZABAF

**CTA final:** "PRONTO PARA COMEÇAR?" + botão WhatsApp

---

## 7. Regras de Negócio

| ID | Regra |
|---|---|
| RN-01 | Todo CTA do site deve direcionar ao WhatsApp com mensagem pré-preenchida para facilitar o primeiro contato. |
| RN-02 | O número de WhatsApp deve ser centralizado em uma única variável/constante no código para facilitar atualização futura. |
| RN-03 | O link do Instagram deve abrir em nova aba (`target="_blank"` com `rel="noopener noreferrer"`). |
| RN-04 | O CREF deve estar visível e legível em pelo menos duas seções do site (credibilidade regulatória). |
| RN-05 | Nenhuma informação de preço deve constar no site — valores são tratados diretamente no WhatsApp. |
| RN-06 | O site não deve ter formulário de captura de leads — o fluxo de conversão é exclusivamente via WhatsApp. |
| RN-07 | A área de atendimento (Fortaleza, Caucaia e Online) deve ser mencionada de forma explícita para SEO local. |
| RN-08 | Imagens utilizadas devem ter direitos autorais verificados (fotos próprias do cliente ou licenciadas). |
| RN-09 | O site deve ser entregue como código estático (HTML/CSS/JS) sem dependência de backend ou CMS. |
| RN-10 | O botão de WhatsApp flutuante (opcional, v1.1) deve aparecer após o usuário scrollar além da Hero Section. |

---

## 8. Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Markup | HTML5 semântico |
| Estilo | CSS3 com variáveis customizadas (CSS Custom Properties) |
| Interatividade | JavaScript vanilla (ES6+) |
| Ícones | Lucide Icons ou Font Awesome Free |
| Fontes | Google Fonts (Montserrat + Inter) |
| Deploy | Netlify / Vercel / GitHub Pages (a definir) |

> Sem frameworks JS pesados (React, Vue) para manter performance máxima e simplicidade de entrega.

---

## 9. Critérios de Aceitação

| Critério | Condição de aceite |
|---|---|
| Responsividade | Testado e aprovado nos breakpoints 390px, 768px e 1280px |
| CTAs funcionais | Todos os botões de WhatsApp abrem o chat com a mensagem pré-definida |
| Performance | PageSpeed Insights mobile ≥ 85 |
| Acessibilidade | Sem erros críticos de contraste; imagens com `alt` |
| SEO básico | Meta title, description e OG tags presentes e corretos |
| Aprovação visual | Cliente aprova o layout antes da entrega final |

---

## 10. Cronograma Estimado

| Fase | Entregável | Prazo estimado |
|---|---|---|
| Fase 1 | Aprovação do PRD | Dia 1 |
| Fase 2 | Wireframe / Layout (Figma ou HTML) | Dias 2–3 |
| Fase 3 | Desenvolvimento completo | Dias 4–6 |
| Fase 4 | Revisão e ajustes do cliente | Dias 7–8 |
| Fase 5 | Deploy e entrega final | Dia 9–10 |

---

## 11. Contatos e Referências

| Item | Valor |
|---|---|
| WhatsApp | 85 99627-8013 |
| Instagram | @personaltrainerthiagosilva |
| CREF | 021579-G/CE |
| Localização | Fortaleza e Caucaia — CE |
| Modalidade | Presencial + Consultoria Online |

---

*Documento criado em 2026-05-19. Sujeito a revisão mediante aprovação do cliente.*

Planos:

CONSULTORIA ON-LINE — PLANOS E VALORES
Planos

Mensal
De $200 por $150
25% OFF

Bimestral
De $400 por $300
25% OFF

Trimestral
De $600 por $400
33% OFF
Fechou o trimestral, ganhou o 4º mês grátis!

Semestral
De $1.000 por $500
50% OFF

Benefícios e entregáveis
Treinos personalizados de acordo com seu objetivo
Ajustes semanais conforme sua evolução
Suporte direto comigo
Motivação e cobrança
Resultados reais e sustentáveis
Atendimento 100% on-line
Segurança e privacidade
Foco total em seus resultados
CONSULTORIA ON-LINE — PRÉ-AVALIAÇÃO
Informações necessárias
Nome e idade
Histórico com musculação
Tempo de treino
Objetivo
Dieta ou reeducação alimentar
Uso de medicamento ou suplementação
Problemas de saúde
Dores no corpo ou limitações para atividade física
Patologias
Benefícios e entregáveis
Treinos 100% personalizados para o seu objetivo
Ajustes constantes para evolução real
Suporte e motivação em cada etapa
Resultados sustentáveis com saúde e qualidade
Acompanhamento personalizado
Dados para cadastro
Nome e sobrenome
Data de nascimento
E-mail
WhatsApp
CONSULTORIA PRESENCIAL — PRÉ-AVALIAÇÃO
Informações necessárias
Nome e idade
Histórico com musculação
Tempo de treino
Objetivo
Dieta ou reeducação alimentar
Uso de medicamento ou suplementação
Problemas de saúde
Dores no corpo ou limitações para atividade física
Patologias
Academia onde deseja o atendimento de personal
Quantas vezes na semana e melhor horário
Benefícios e entregáveis
Ajustes em tempo real para melhores resultados
Execução correta e segura dos exercícios
Motivação e disciplina em cada treino
Acompanhamento humanitário e individualizado
Resultados reais com saúde e qualidade de vida
Dados para cadastro
Nome e sobrenome
Data de nascimento
E-mail
WhatsApp
CONSULTORIA PRESENCIAL — REGRAS ESSENCIAIS
Condições de atendimento
Aula somente em dias úteis.
Atendimentos somente em dias úteis.
Atendimento em sábados, domingos e feriados é taxado em dobro.
Remarcação de aula perdida exige aviso prévio de no mínimo 24h.
Falta sem aviso prévio de 24h será considerada aula válida, sem ressarcimento.
Cada aluno tem direito a 2 aulas por mês para remarcação, de acordo com disponibilidade de horários, a combinar em dias úteis.
Em dias não úteis, uma aula válida equivale por duas de treinamento ou pagamento extra de R$50 a mais na aula devido ao deslocamento.
Tolerância de atraso de 20 minutos.
Minutos de atraso serão contabilizados na aula do dia.
Caso atrase mais de 20 minutos, a aula é considerada válida sem direito a ressarcimento.
Em caso de doença, é necessário atestado médico.
Cada plano tem validade de 30 dias corridos.
Não é permitido saldo cumulativo de treinos/aulas.
Aulas não usufruídas no período de 30 dias serão consideradas válidas e expiradas.
Não há ressarcimento em espécie, Pix ou descontos em planos futuros.
O vencimento do plano adquirido não será alterado, independente de aulas para remarcar ou afastamento por motivo de saúde.