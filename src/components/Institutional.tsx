import { CREF } from "../constants"
import formacaoImg from "../assets/Imagem na sessão Formação - Experiência.webp"

const specialties = [
  { icon: "fitness_center", title: "Hipertrofia", desc: "Protocolos de alto volume e intensidade focados no ganho máximo de massa muscular magra estruturada." },
  { icon: "monitor_weight", title: "Emagrecimento", desc: "Estratégias metabólicas para redução de percentual de gordura preservando massa magra e acelerando o metabolismo." },
  { icon: "accessibility_new", title: "Correção Postural", desc: "Avaliação e correção de desequilíbrios musculares, melhorando postura e reduzindo dores crônicas." },
  { icon: "exercise", title: "Treinamento de Força", desc: "Desenvolvimento de força máxima e funcional com periodização científica adaptada ao seu nível." },
  { icon: "health_and_safety", title: "Reabilitação e Prevenção de Lesões", desc: "Fortalecimento muscular direcionado para recuperação de lesões e prevenção de novos problemas." },
  { icon: "directions_run", title: "Condicionamento Físico", desc: "Melhora da capacidade cardiovascular, resistência e desempenho físico geral para qualidade de vida." },
]

const credentials = [
  "Licenciatura Plena em Educação Física",
  "Pós-graduando em Fisiologia do Exercício e Biomecânica",
  "Faixa Preta de Jiu-Jitsu 1º Grau",
]

const experience = [
  { institution: "Academia Greenlife", role: "Professor de Musculação" },
  { institution: "Atendimento Individualizado", role: "Personal Trainer" },
  { institution: "Iron CT", role: "Professor de Musculação" },
  { institution: "Funcional Life", role: "Estagiário e Professor" },
  { institution: "Academia Visual & Estilo", role: "Estagiário" },
  { institution: "FATENE Jiu-Jitsu", role: "Professor — Projeto de Extensão" },
  { institution: "Academia ZABAF", role: "Estagiário e Professor" },
]

export function Institutional() {
  return (
    <section className="w-full py-[128px] bg-[#0D0D0D]" id="especialidades">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-body text-sm font-bold text-primary-container mb-4 uppercase tracking-[0.1em]">
            Especialidades &amp; Credenciais
          </span>
          <h2 className="font-display text-5xl text-white uppercase mb-8">
            Método, Formação e Resultado.
          </h2>
          <div className="w-24 h-1 bg-primary-container" />
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-gutter)] mb-32">
          {specialties.map((s) => (
            <div
              key={s.title}
              className="group relative bg-[#141414] p-8 border border-transparent hover:border-[#333333] transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
              <span
                className="material-symbols-outlined text-4xl text-[#777777] group-hover:text-primary-container mb-6 block transition-colors"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                {s.icon}
              </span>
              <h3 className="font-display text-[32px] leading-[32px] tracking-[0.05em] text-white uppercase mb-4">
                {s.title}
              </h3>
              <p className="font-body text-sm text-[#AAAAAA]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Credentials Block — image + formação + experiência */}
        <div className="w-full bg-[#111111] border border-[#222222] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image */}
            <div className="lg:col-span-4 w-full">
              <img
                src={formacaoImg}
                alt="Thiago Silva Rodrigues em ambiente de treino"
                className="w-full h-auto lg:h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Formação + Experiência */}
            <div className="lg:col-span-8 p-8 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {/* Formação */}
                <div>
                  <h3 className="font-body text-sm font-bold text-primary-container uppercase tracking-[0.15em] mb-8">
                    Formação
                  </h3>
                  <ul className="space-y-6">
                    {credentials.map((c) => (
                      <li key={c} className="border-l-[3px] border-primary-container pl-4">
                        <span className="font-body text-[15px] font-semibold text-white">
                          {c}
                        </span>
                      </li>
                    ))}
                    <li className="border-l-[3px] border-primary-container pl-4">
                      <span className="font-body text-[15px] font-bold text-primary-container tracking-wider">
                        CREF: {CREF}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Experiência */}
                <div>
                  <h3 className="font-body text-sm font-bold text-primary-container uppercase tracking-[0.15em] mb-8">
                    Experiência
                  </h3>
                  <ul className="space-y-6 relative">
                    <div className="absolute left-[3px] top-2 bottom-2 w-px bg-[#333333]" />
                    {experience.map((e) => (
                      <li key={e.institution} className="flex items-start gap-4 relative">
                        <div className="w-[7px] h-[7px] shrink-0 rounded-full bg-primary-container mt-1.5 relative z-10" />
                        <div className="flex flex-col">
                          <span className="font-body text-[15px] font-semibold text-white">
                            {e.institution}
                          </span>
                          <span className="font-body text-[13px] text-[#888888]">
                            {e.role}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
