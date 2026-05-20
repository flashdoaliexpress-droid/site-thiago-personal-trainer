import { WHATSAPP_URL, CREF } from "../constants"
import sobreImg from "../assets/IMAGEM SOBRE.webp"

const formations = [
  { title: "Licenciatura Plena em Educação Física" },
  { title: "Pós-graduando em Fisiologia do Exercício e Biomecânica" },
  { title: "Faixa Preta de Jiu-Jitsu 1º Grau" },
  { title: `CREF ${CREF} — Ativo` },
]

export function About() {
  return (
    <section className="relative w-full py-[128px] bg-[#111111] noise-bg" id="sobre">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-gutter)] items-center">
          {/* Left: Image */}
          <div className="lg:col-span-5 relative mb-16 lg:mb-0">
            <div className="relative z-10 w-full aspect-[3/4] max-w-md mx-auto">
              <img
                alt="Thiago Silva Rodrigues — Personal Trainer profissional em ambiente de treino"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
                src={sobreImg}
              />
              {/* Red L-Reticles */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-container" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-container" />
            </div>
            {/* Red Shadow Block */}
            <div className="absolute top-8 -right-4 w-full h-full max-w-md bg-primary-container z-0 hidden md:block" />
            {/* CREF Badge */}
            <div className="absolute bottom-4 right-4 lg:-bottom-6 lg:left-0 lg:right-auto z-20">
              <div className="bg-[#0D0D0D] border border-[#333333] px-4 py-2 lg:px-6 lg:py-3 flex items-center gap-2 lg:gap-3">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <div className="flex flex-col">
                  <span className="font-body text-[10px] font-bold text-[#AAAAAA] uppercase">
                    Registro Profissional
                  </span>
                  <span className="font-body text-sm font-bold text-white uppercase tracking-[0.1em]">
                    CREF {CREF}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col items-start">
            <span className="font-body text-sm font-bold text-primary-container mb-4 uppercase tracking-[0.1em]">
              Sobre o Profissional
            </span>
            <h2 className="font-display text-5xl text-white uppercase mb-8 leading-tight">
              Quem é <br />
              <span className="text-[#AAAAAA]">Thiago Silva Rodrigues?</span>
            </h2>
            <div className="space-y-6 text-base text-[#BBBBBB] mb-10 border-l px-6 border-[#333333] font-body leading-[1.7]">
              <p>
                Sou Personal Trainer com Licenciatura Plena em Educação Física e
                Pós-graduação em Fisiologia do Exercício e Biomecânica. Minha
                missão vai além de montar treinos — trabalho com transformação
                física, mental e qualidade de vida através de um acompanhamento
                estratégico, individualizado e 100% focado no seu objetivo.
              </p>
              <p>
                Sou Faixa Preta de Jiu-Jitsu 1º Grau e carrego para cada treino
                a mesma disciplina e respeito que aprendi nas artes marciais. Com
                formação contínua e experiência prática em academias e projetos
                de extensão universitária, garanto que cada aluno receba o melhor
                da ciência aplicada ao treinamento.
              </p>
            </div>

            {/* Formations */}
            <ul className="space-y-4 mb-10 w-full">
              {formations.map((f, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-4 ${i < formations.length - 1 ? "border-b border-[#222222] pb-4" : ""}`}
                >
                  <div className="w-2 h-2 shrink-0 bg-primary-container" />
                  <span className="font-body text-sm font-bold text-[#E5E5E5] uppercase tracking-[0.1em]">
                    {f.title}
                  </span>
                </li>
              ))}
            </ul>

            {/* Location Badges */}
            <div className="flex flex-wrap gap-3 mb-12">
              <div className="px-4 py-2 bg-[#141414] border border-[#333333] font-body text-xs font-bold text-[#AAAAAA] uppercase">
                Fortaleza &amp; Caucaia
              </div>
              <div className="px-4 py-2 bg-[#141414] border border-[#333333] font-body text-xs font-bold text-[#AAAAAA] uppercase">
                Consultoria Online
              </div>
            </div>

            {/* CTA */}
            <a
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#F5F5F5] text-white font-body text-sm font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="material-symbols-outlined mr-3"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                chat
              </span>
              Fale Comigo no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
