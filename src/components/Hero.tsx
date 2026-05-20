import { WHATSAPP_URL } from "../constants"
import heroDesktop from "../assets/Imagem Hero Desktop.webp"
import heroMobile from "../assets/Imagem Hero Mobile.webp"

export function Hero() {
  return (
    <header
      className="relative w-full h-screen min-h-[800px] flex items-end md:items-center"
      id="inicio"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-[#0D0D0D]">
        {/* Desktop — ancorado no bottom-right, altura 88%, cabeça fica abaixo da navbar */}
        <img
          alt="Thiago Silva Rodrigues — Personal Trainer"
          className="hidden md:block absolute bottom-0 right-0 h-[88%] w-auto"
          src={heroDesktop}
        />
        {/* Mobile — object-cover ancorado no topo para preservar o rosto */}
        <img
          alt="Thiago Silva Rodrigues — Personal Trainer"
          className="md:hidden w-full h-full object-cover"
          style={{ objectPosition: "center 5%" }}
          src={heroMobile}
        />
        {/* Desktop gradient: esquerda → direita */}
        <div className="absolute inset-0 hidden md:block hero-gradient" />
        {/* Mobile gradient: baixo → cima */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to top, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.55) 38%, rgba(13,13,13,0.0) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] pb-36 md:pb-0 pt-20">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center mb-5 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-container mr-3 animate-pulse shrink-0" />
            <span className="font-body text-xs md:text-sm font-bold text-[#AAAAAA] uppercase tracking-[0.1em]">
              Personal Trainer · Fortaleza CE
            </span>
          </div>

          {/* Headline */}
          <div className="relative pl-4 md:pl-6 border-l-4 border-primary-container mb-5 md:mb-8">
            <h1 className="font-display text-[44px] md:text-[96px] leading-[40px] md:leading-[88px] text-white uppercase tracking-[0.02em]">
              Transforme Seu Corpo.
              <br />
              <span className="text-[#AAAAAA]">Transforme Sua Vida.</span>
            </h1>
          </div>

          {/* Subheadline — visível só no desktop */}
          <p className="hidden md:block font-body text-lg text-[#AAAAAA] max-w-[520px] mb-12 leading-[1.8] tracking-[0.01em]">
            Acompanhamento personalizado com método, ciência e compromisso com o
            seu resultado. Presencial em Fortaleza e Caucaia · Consultoria
            Online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 w-full sm:w-auto mt-2 md:mt-0">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-primary-container text-white font-body text-xs md:text-sm font-bold uppercase tracking-[0.1em] hover:bg-inverse-primary transition-all duration-300 group"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero Começar Agora
              <span
                className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                arrow_forward
              </span>
            </a>
            <a
              className="hidden sm:inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#F5F5F5] text-white font-body text-sm font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300"
              href="#sobre"
            >
              Conheça o Método
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — desktop only */}
      <div className="absolute bottom-10 left-[var(--spacing-margin-desktop)] hidden md:flex items-center gap-4">
        <div className="h-px w-16 bg-primary-container opacity-40" />
        <span className="font-body text-[10px] font-bold text-primary-container uppercase tracking-widest">
          Scroll
        </span>
      </div>
    </header>
  )
}
