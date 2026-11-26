import { useEffect, useRef, useState } from 'react'

// Revela elementos quando eles entram na tela, usando o Intersection Observer.
// Depois de revelado, o elemento continua visível (não "some" ao sair da tela).
//
// total: quantos elementos vão ser observados.
// threshold: quanto do elemento precisa aparecer para revelar (0.4 = 40%).
//
// Retorna:
// - revelados: array de booleanos, um por elemento (true = já apareceu)
// - registrar(index): função para passar na prop ref do elemento
export function useReveal(total, { threshold = 0.4 } = {}) {
  const [revelados, setRevelados] = useState(() => Array(total).fill(false))
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const index = refs.current.indexOf(entry.target)
          setRevelados((prev) => {
            const novo = [...prev]
            novo[index] = true
            return novo
          })
          // Já revelado: não precisa mais vigiar este elemento
          observer.unobserve(entry.target)
        })
      },
      { threshold }
    )

    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  const registrar = (index) => (el) => {
    refs.current[index] = el
  }

  return { revelados, registrar }
}
