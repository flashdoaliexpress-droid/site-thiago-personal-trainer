import { INSTAGRAM_URL, CREF } from "../constants"

export function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] py-8 border-t border-[#222222]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display text-2xl text-[#555555] uppercase tracking-widest">
          THIAGO <span className="text-[#333333]">SILVA</span>
        </div>
        <div className="flex gap-6">
          <a
            className="text-[#777777] hover:text-white transition-colors"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <span className="material-symbols-outlined">photo_camera</span>
          </a>
        </div>
        <div className="text-center md:text-right font-body text-[10px] font-bold text-[#555555] uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Thiago Silva Rodrigues · Personal Trainer
          <br />
          CREF {CREF}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
