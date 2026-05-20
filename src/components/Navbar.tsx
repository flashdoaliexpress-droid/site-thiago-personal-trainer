import { useState } from "react"
import { WHATSAPP_URL } from "../constants"
import logo from "../assets/Logo do Thiago.webp"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant transition-all duration-300">
      <div className="flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-3 md:py-4 w-full max-w-[var(--container-max)] mx-auto">
        <a href="#inicio" className="shrink-0">
          <img
            src={logo}
            alt="Thiago Silva — Personal Trainer"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            className="font-body text-sm font-bold text-primary-container border-b-2 border-primary-container pb-1 uppercase tracking-[0.1em]"
            href="#inicio"
          >
            Início
          </a>
          <a
            className="font-body text-sm font-bold text-on-surface hover:text-primary-container hover:border-b-2 hover:border-primary-container pb-1 transition-all uppercase tracking-[0.1em]"
            href="#sobre"
          >
            Sobre
          </a>
          <a
            className="font-body text-sm font-bold text-on-surface hover:text-primary-container hover:border-b-2 hover:border-primary-container pb-1 transition-all uppercase tracking-[0.1em]"
            href="#especialidades"
          >
            Especialidades
          </a>
          <a
            className="font-body text-sm font-bold text-on-surface hover:text-primary-container hover:border-b-2 hover:border-primary-container pb-1 transition-all uppercase tracking-[0.1em]"
            href="#planos"
          >
            Planos
          </a>
        </div>

        <a
          className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-primary-container text-white font-body text-sm font-bold uppercase tracking-[0.1em] hover:bg-inverse-primary transition-colors duration-200"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale Comigo
        </a>

        <button
          className="md:hidden text-on-surface hover:text-primary-container transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant px-[var(--spacing-margin-mobile)] py-6 flex flex-col gap-4">
          <a className="font-body text-sm font-bold text-on-surface uppercase tracking-[0.1em]" href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          <a className="font-body text-sm font-bold text-on-surface uppercase tracking-[0.1em]" href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a className="font-body text-sm font-bold text-on-surface uppercase tracking-[0.1em]" href="#especialidades" onClick={() => setMenuOpen(false)}>Especialidades</a>
          <a className="font-body text-sm font-bold text-on-surface uppercase tracking-[0.1em]" href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>
          <a
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-container text-white font-body text-sm font-bold uppercase tracking-[0.1em]"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Fale Comigo
          </a>
        </div>
      )}
    </nav>
  )
}
