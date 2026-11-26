import { useState } from 'react'

// Monograma "MJ" como o núcleo de um átomo: duas órbitas em elipse cruzadas,
// cada uma com um "elétron" girando. Desenhado em SVG, com a cor herdada do
// link (currentColor), então muda sozinho entre o tema claro e o escuro.
//
// O movimento usa <animateMotion>, a animação nativa do SVG: o elétron percorre
// o caminho (path) da elipse. Quem pede menos movimento no sistema
// (prefers-reduced-motion) vê o átomo parado, com os elétrons fixos.

// Elipse com centro (60, 35), raio horizontal 34 e vertical 12, escrita como
// dois arcos (A) — é o caminho que o elétron percorre.
const ORBITA = 'M26,35 a34,12 0 1,0 68,0 a34,12 0 1,0 -68,0'
const ORBITA_INVERTIDA = 'M94,35 a34,12 0 1,0 -68,0 a34,12 0 1,0 68,0'

function Eletron({ caminho, duracao, opacidade, parado, posicaoParada }) {
  if (parado) {
    return <circle cx={posicaoParada[0]} cy={posicaoParada[1]} r="2.6" fill="currentColor" opacity={opacidade} />
  }

  return (
    <circle r="2.6" fill="currentColor" opacity={opacidade}>
      <animateMotion dur={duracao} repeatCount="indefinite" path={caminho} />
    </circle>
  )
}

export function LogoAtomo({ className }) {
  // Lido uma vez, quando o componente aparece na tela
  const [parado] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  return (
    <svg viewBox="0 0 120 70" aria-hidden="true" className={className}>
      <g fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2">
        <ellipse cx="60" cy="35" rx="34" ry="12" transform="rotate(-20 60 35)" />
        <ellipse cx="60" cy="35" rx="34" ry="12" transform="rotate(20 60 35)" />
      </g>

      <text
        x="60"
        y="35"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="system-ui, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="-2"
        fill="currentColor"
      >
        MJ
      </text>

      <g transform="rotate(-20 60 35)">
        <Eletron caminho={ORBITA} duracao="3.2s" opacidade="1" parado={parado} posicaoParada={[26, 35]} />
      </g>
      <g transform="rotate(20 60 35)">
        <Eletron caminho={ORBITA_INVERTIDA} duracao="4.4s" opacidade="0.6" parado={parado} posicaoParada={[94, 35]} />
      </g>
    </svg>
  )
}
