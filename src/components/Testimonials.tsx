import { useState } from "react"
import aluno1A from "../assets/Aluno 1.jpeg"
import aluno1B from "../assets/Aluno 1 (2).jpeg"
import aluna2Before from "../assets/Aluna 2.webp"
import aluna2After from "../assets/Aluna 2 (2).webp"
import aluna3Before from "../assets/Aluna 3.webp"
import aluna3After from "../assets/Aluna 3 (2).webp"
import aluna4Before from "../assets/Aluna 4.webp"
import aluna4After from "../assets/Aluna 4 (2).webp"
import aluno5 from "../assets/Aluno 5.jpeg"
import aluno6 from "../assets/Aluno 6.webp"

type PairSlide   = { type: "pair";   before: string; after: string }
type DoubleSlide  = { type: "double"; first: string;  second: string }
type SingleSlide  = { type: "single"; image: string }
type Slide = PairSlide | DoubleSlide | SingleSlide

const slides: Slide[] = [
  { type: "double", first: aluno1A,       second: aluno1B      },
  { type: "pair",   before: aluna2Before, after: aluna2After   },
  { type: "pair",   before: aluna3Before, after: aluna3After   },
  { type: "pair",   before: aluna4Before, after: aluna4After   },
  { type: "single", image: aluno5 },
  { type: "single", image: aluno6 },
]

/* Imagem sem corte: ocupa a largura total, altura natural, máximo de 70vh */
function SlideImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full h-auto block"
      style={{ maxHeight: "70vh", objectFit: "contain" }}
    />
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  const slide = slides[current]

  const renderSlide = () => {
    if (slide.type === "pair") {
      return (
        <div className="grid grid-cols-2 gap-3 md:gap-[var(--spacing-gutter)] items-start">
          <div className="flex flex-col gap-2">
            <span className="font-body text-[10px] font-bold text-[#444444] uppercase tracking-[0.15em]">Antes</span>
            <div className="w-full bg-[#111111] overflow-hidden">
              <SlideImg src={slide.before} alt={`Antes — resultado ${current + 1}`} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-body text-[10px] font-bold text-primary-container uppercase tracking-[0.15em]">Depois</span>
            <div className="w-full bg-[#111111] overflow-hidden">
              <SlideImg src={slide.after} alt={`Depois — resultado ${current + 1}`} />
            </div>
          </div>
        </div>
      )
    }

    if (slide.type === "double") {
      return (
        <div className="grid grid-cols-2 gap-3 md:gap-[var(--spacing-gutter)] items-start">
          <div className="flex flex-col gap-2">
            <span className="font-body text-[10px] font-bold text-primary-container uppercase tracking-[0.15em]">Resultado</span>
            <div className="w-full bg-[#111111] overflow-hidden">
              <SlideImg src={slide.first} alt="Resultado — foto 1" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-body text-[10px] font-bold text-primary-container uppercase tracking-[0.15em]">Resultado</span>
            <div className="w-full bg-[#111111] overflow-hidden">
              <SlideImg src={slide.second} alt="Resultado — foto 2" />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="flex flex-col gap-2 max-w-xs mx-auto">
        <span className="font-body text-[10px] font-bold text-primary-container uppercase tracking-[0.15em]">Resultado</span>
        <div className="w-full bg-[#111111] overflow-hidden">
          <SlideImg src={slide.image} alt={`Resultado — aluno ${current + 1}`} />
        </div>
      </div>
    )
  }

  return (
    <section className="w-full py-[128px] bg-[#0D0D0D]" id="resultados">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-body text-sm font-bold text-primary-container mb-4 uppercase tracking-[0.1em]">
            Provas Sociais
          </span>
          <h2 className="font-display text-5xl text-white uppercase mb-8">
            Resultados Reais.
            <br />
            <span className="text-[#AAAAAA]">Alunos Reais.</span>
          </h2>
          <div className="w-24 h-1 bg-primary-container" />
        </div>

        {renderSlide()}

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 border border-[#333333] flex items-center justify-center text-[#AAAAAA] hover:border-primary-container hover:text-primary-container transition-all duration-200"
              aria-label="Anterior"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-[#333333] flex items-center justify-center text-[#AAAAAA] hover:border-primary-container hover:text-primary-container transition-all duration-200"
              aria-label="Próximo"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-200 ${
                  i === current ? "w-8 h-2 bg-primary-container" : "w-2 h-2 bg-[#333333] hover:bg-[#555555]"
                }`}
                aria-label={`Resultado ${i + 1}`}
              />
            ))}
          </div>

          <span className="font-body text-sm text-[#444444] uppercase tracking-widest">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  )
}
