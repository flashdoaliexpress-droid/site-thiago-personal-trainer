import { WHATSAPP_URL } from "../constants"

const onlinePlans = [
  {
    name: "Mensal",
    originalPrice: "200",
    promoPrice: "150",
    discount: "25% OFF",
    bonus: null,
    featured: false,
  },
  {
    name: "Bimestral",
    originalPrice: "400",
    promoPrice: "300",
    discount: "25% OFF",
    bonus: null,
    featured: false,
  },
  {
    name: "Trimestral",
    originalPrice: "600",
    promoPrice: "400",
    discount: "33% OFF",
    bonus: "4º mês grátis",
    featured: true,
  },
  {
    name: "Semestral",
    originalPrice: "1.000",
    promoPrice: "500",
    discount: "50% OFF",
    bonus: null,
    featured: false,
  },
]

const benefits = [
  "Treinos personalizados de acordo com seu objetivo",
  "Ajustes semanais conforme sua evolução",
  "Suporte direto com o Thiago",
  "Motivação e cobrança contínua",
  "Resultados reais e sustentáveis",
  "Atendimento 100% on-line",
  "Segurança e privacidade garantidas",
  "Foco total nos seus resultados",
]

const preAvaliacao = [
  "Nome e idade",
  "Histórico com musculação e tempo de treino",
  "Objetivo principal",
  "Dieta ou reeducação alimentar",
  "Uso de medicamentos ou suplementação",
  "Problemas de saúde, dores ou limitações físicas",
  "Patologias",
]

const presencialRules = [
  "Atendimentos somente em dias úteis",
  "Sábados, domingos e feriados têm taxa em dobro",
  "Remarcação exige aviso prévio mínimo de 24h",
  "Falta sem aviso é considerada aula válida, sem ressarcimento",
  "2 aulas/mês disponíveis para remarcação, a combinar",
  "Tolerância de atraso de 20 minutos",
  "Cada plano tem validade de 30 dias corridos",
  "Aulas não usufruídas no período expiram sem ressarcimento",
]

export function Plans() {
  return (
    <section className="w-full py-[128px] bg-[#111111]" id="planos">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-body text-sm font-bold text-[#AAAAAA] mb-4 uppercase tracking-[0.1em]">
            Consultoria Online
          </span>
          <h2 className="font-display text-5xl text-white uppercase mb-6">
            Planos & Investimento
          </h2>
          <p className="font-body text-base text-[#AAAAAA] max-w-lg leading-[1.8]">
            Consultoria 100% online para todo o Brasil. Escolha o plano que se encaixa na sua jornada.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-gutter)] mb-20">
          {onlinePlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden ${
                plan.featured
                  ? "border-2 border-primary-container"
                  : "border border-[#1E1E1E]"
              }`}
            >
              {/* Featured tag */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 flex justify-center z-10" style={{ top: 0 }}>
                  <div className="bg-primary-container px-5 py-1">
                    <span className="font-body text-[10px] font-bold text-white uppercase tracking-[0.15em]">
                      Mais Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Header band — gray bg, dark title */}
              <div className={`bg-[#AAAAAA] px-7 pb-5 ${plan.featured ? "pt-8" : "pt-5"}`}>
                <h3 className="font-display text-3xl text-[#0D0D0D] uppercase tracking-[0.04em]">
                  {plan.name}
                </h3>
              </div>

              {/* Card body */}
              <div className="bg-[#0D0D0D] px-7 pt-6 pb-7 flex flex-col flex-1">
                {/* Pricing */}
                <div className="mb-5 pb-5 border-b border-[#1E1E1E]">
                  <span className="font-body text-xs text-[#555555] line-through block mb-1">
                    R$ {plan.originalPrice}
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="font-body text-xs font-bold text-[#888888] mb-1">R$</span>
                    <span className="font-display text-5xl text-white leading-none">
                      {plan.promoPrice}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className={`inline-block px-2 py-1 font-body text-[10px] font-bold uppercase tracking-[0.1em] ${
                      plan.featured
                        ? "bg-primary-container text-white"
                        : "bg-[#1A1A1A] border border-[#333333] text-[#AAAAAA]"
                    }`}>
                      {plan.discount}
                    </span>
                    {plan.bonus && (
                      <span className="inline-block px-2 py-1 bg-[#1A1A1A] border border-primary-container font-body text-[10px] font-bold text-primary-container uppercase tracking-[0.08em]">
                        + {plan.bonus}
                      </span>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-3 mb-6 flex-1">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        className={`material-symbols-outlined text-base shrink-0 mt-0.5 ${
                          plan.featured ? "text-primary-container" : "text-[#444444]"
                        }`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="font-body text-xs text-[#BBBBBB] leading-[1.5]">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-5 py-3 font-body text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                    plan.featured
                      ? "bg-primary-container text-white hover:bg-inverse-primary"
                      : "bg-transparent border border-[#333333] text-white hover:border-[#F5F5F5]"
                  }`}
                >
                  Contratar
                  <span className="material-symbols-outlined ml-2 text-base" style={{ fontVariationSettings: "'FILL' 0" }}>
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pré-avaliação + Presencial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-gutter)] mb-10">
          <div className="bg-[#0D0D0D] border border-[#1E1E1E] overflow-hidden">
            <div className="bg-[#AAAAAA] px-8 py-4">
              <h3 className="font-display text-2xl text-[#0D0D0D] uppercase tracking-[0.04em]">
                Pré-Avaliação
              </h3>
            </div>
            <div className="p-8">
              <p className="font-body text-xs text-[#666666] mb-6 uppercase tracking-[0.08em]">
                Informações necessárias para início
              </p>
              <ul className="space-y-4">
                {preAvaliacao.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 shrink-0 bg-primary-container mt-2" />
                    <span className="font-body text-sm text-[#BBBBBB] leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-xs text-[#555555] mt-6 leading-[1.6]">
                Esses dados garantem que seu protocolo seja 100% personalizado desde o primeiro treino.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0D0D] border border-[#1E1E1E] overflow-hidden flex flex-col">
            <div className="bg-[#AAAAAA] px-8 py-4">
              <h3 className="font-display text-2xl text-[#0D0D0D] uppercase tracking-[0.04em]">
                Presencial
              </h3>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <p className="font-body text-sm text-[#AAAAAA] mb-6 leading-[1.7]">
                Fortaleza e Caucaia — CE. Treino 1 a 1 com acompanhamento em tempo real, execução correta e resultados com saúde e qualidade de vida.
              </p>
              <h4 className="font-body text-[10px] font-bold text-[#555555] uppercase tracking-[0.15em] mb-4">
                Regras essenciais
              </h4>
              <ul className="space-y-3 mb-8 flex-1">
                {presencialRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 shrink-0 bg-[#444444] mt-2" />
                    <span className="font-body text-xs text-[#888888] leading-[1.5]">{rule}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 border border-[#333333] text-white font-body text-sm font-bold uppercase tracking-[0.1em] hover:border-primary-container hover:text-primary-container transition-all duration-300"
              >
                Consultar Disponibilidade
                <span className="material-symbols-outlined ml-2 text-base" style={{ fontVariationSettings: "'FILL' 0" }}>
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>

        <p className="font-body text-xs text-[#3A3A3A] text-center uppercase tracking-[0.08em]">
          Valores promocionais sujeitos a alteração. Consulte condições pelo WhatsApp.
        </p>
      </div>
    </section>
  )
}
