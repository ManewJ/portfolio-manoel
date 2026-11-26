import { useEffect, useState } from 'react'

// Descobre qual seção está na tela agora (técnica conhecida como "scroll spy").
// Usa o Intersection Observer, o mesmo conceito do useReveal.
//
// ids: lista com os ids das seções que têm link na navbar.
// Retorna o id da seção ativa, ou null quando o topo da página (Hero) está na tela.
export function useSecaoAtiva(ids) {
  const [ativa, setAtiva] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          setAtiva(id === 'inicio' ? null : id)
        })
      },
      // Em vez da tela inteira, observa uma "faixa" fina perto do meio da tela:
      // corta 40% de cima e 55% de baixo. A seção que cruza essa faixa é a ativa.
      { rootMargin: '-40% 0px -55% 0px' }
    )

    ;['inicio', ...ids].forEach((id) => {
      const secao = document.getElementById(id)
      if (secao) observer.observe(secao)
    })

    return () => observer.disconnect()
  }, [ids])

  return ativa
}
