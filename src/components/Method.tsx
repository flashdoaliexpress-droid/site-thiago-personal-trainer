import { WHATSAPP_URL } from "../constants"

const steps = [
  {
    number: "01",
    icon: "assignment_ind",
    title: "Avaliação Inicial",
    desc: "Análise completa do seu histórico físico, objetivos, limitações e rotina. Sem atalhos — o protocolo começa com diagnóstico preciso.",
  },
  {
    number: "02",
    icon: "edit_note",
    title: "Protocolo Personalizado",
    desc: "Treino montado exclusivamente para você: volume, intensidade, frequência e seleção de exercícios baseados na ciência e no seu perfil.",
  },
  {
    number: "03",
    icon: "track_changes",
    title: "Acompanhamento Contínuo",
    desc: "Presença real no seu progresso — feedbacks periódicos, ajustes de carga e suporte direto pelo WhatsApp.",
  },
  {
    number: "04",
    icon: "trending_up",
    title: "Evolução e Ajustes",
    desc: "Reavaliações regulares para medir resultados e recalibrar o plano conforme sua evolução. O método não para — ele cresce com você.",
  },
]

const expectations = [
  {
    label: "Treino 100% individualizado",
    desc: "Nenhum protocolo copiado. Cada detalhe do seu plano é pensado para o seu corpo e objetivo específico.",
  },
  {
    label: "Suporte direto pelo WhatsApp",
    desc: "Dúvidas, ajustes e feedbacks respondidos por Thiago — sem intermediários, sem robôs.",
  },
  {
    label: "Progressão mensurável",
    desc: "Acompanhamento de métricas reais: peso, medidas, carga e desempenho. Você vai ver evoluir.",
  },
]

export function Method() {
  return (
    <section className="w-full py-[128px] bg-[#111111]" id="metodo">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-end">
          <div className="lg:col-span-7">
            <span className="font-body text-sm font-bold text-primary-container mb-4 block uppercase tracking-[0.1em]">
              Como funciona
            </span>
            <h2 className="font-display text-5xl md:text-[64px] text-white uppercase leading-[1]">
              O Método que Leva <br />
              <span className="text-[#AAAAAA]">ao Resultado.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-base text-[#AAAAAA] leading-[1.8]">
              Resultado não é sorte — é método. Cada aluno passa por um processo
              estruturado de avaliação, planejamento e acompanhamento contínuo.
              Aqui você não recebe uma planilha genérica: recebe atenção real.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-gutter)] mb-16">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="bg-[#0D0D0D] border border-[#1E1E1E] p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-5xl text-primary-container leading-none">
                    {step.number}
                  </span>
                  <div className="w-px h-8 bg-[#333333]" />
                  <span
                    className="material-symbols-outlined text-2xl text-[#555555]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-display text-[28px] leading-[1] text-white uppercase tracking-[0.04em] mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[#888888] leading-[1.7]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What to expect */}
        <div className="w-full bg-[#0D0D0D] border border-[#1E1E1E] p-8 md:p-16">
          <h3 className="font-body text-sm font-bold text-primary-container uppercase tracking-[0.15em] mb-10">
            O que você pode esperar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {expectations.map((item) => (
              <div key={item.label} className="border-l-[3px] border-primary-container pl-6">
                <span className="font-body text-sm font-bold text-white uppercase tracking-[0.08em] block mb-2">
                  {item.label}
                </span>
                <p className="font-body text-sm text-[#888888] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <a
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-container text-white font-body text-sm font-bold uppercase tracking-[0.1em] hover:bg-inverse-primary transition-all duration-300 group"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero Meus Resultados
            <span
              className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
