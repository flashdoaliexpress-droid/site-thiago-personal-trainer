import { WHATSAPP_URL, INSTAGRAM_URL } from "../constants"

export function FinalCTA() {
  return (
    <section className="w-full py-[128px] bg-[#0D0D0D]" id="contato">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="relative w-full bg-[#111111] border border-[#222222] p-12 md:p-24 text-center overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container rounded-full blur-[120px] opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-container rounded-full blur-[120px] opacity-20" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-body text-sm font-bold text-primary-container uppercase tracking-[0.2em] mb-4 block">
              Pronto para começar?
            </span>
            <h2 className="font-display text-5xl text-white uppercase mb-6">
              Sua transformação começa com uma decisão.
            </h2>
            <p className="font-body text-base text-[#AAAAAA] mb-12">
              Presencial em Fortaleza e Caucaia ou online para todo o Brasil.
            </p>
            <a
              className="inline-flex items-center justify-center px-10 py-5 bg-primary-container text-white font-body text-sm font-bold uppercase tracking-[0.1em] hover:bg-inverse-primary transition-all duration-300"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com o Thiago Agora
            </a>
            <div className="mt-6">
              <a
                className="font-body text-sm text-[#666666] hover:text-on-surface transition-colors"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                @personaltrainerthiagosilva
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
