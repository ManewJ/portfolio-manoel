import { useEffect, useRef, useState } from 'react'

function Processo() {
  // Cada posição do array corresponde a um passo (0, 1, 2) + a frase final (3).
  // false = ainda não apareceu na tela | true = já apareceu (e permanece true pra sempre)
  const [revelados, setRevelados] = useState([false, false, false, false])

  // Um ref por elemento observado — o Intersection Observer precisa de um
  // elemento real do DOM pra "vigiar", e useRef nos dá esse acesso direto
  const refs = useRef([])

  useEffect(() => {
    // O Observer recebe uma função de callback: toda vez que um elemento observado
    // entra ou sai da tela, essa função roda com a lista de mudanças (entries)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // data-index guarda qual passo é esse (0 a 3), definido no JSX abaixo
            const index = Number(entry.target.dataset.index)
            // Atualiza só essa posição do array pra true — as outras mantêm o valor atual,
            // por isso o passo nunca "desaparece" de novo ao rolar pra cima
            setRevelados((prev) => {
              const novo = [...prev]
              novo[index] = true
              return novo
            })
          }
        })
      },
      { threshold: 0.4 } // dispara quando 40% do elemento já está visível
    )

    // Manda o Observer vigiar cada um dos elementos que guardamos em refs.current
    refs.current.forEach((el) => el && observer.observe(el))

    // Cleanup: desliga o observer quando o componente sair da tela de vez
    return () => observer.disconnect()
  }, [])

  // Calcula até onde a linha da timeline deve "crescer" — baseado no último
  // passo (0, 1 ou 2) que já foi revelado. A frase final (índice 3) não conta
  // pra altura da linha, porque ela fica fora da timeline visualmente
  const passosRevelados = revelados.slice(0, 3).filter(Boolean).length
  const alturaLinha = (passosRevelados / 3) * 100

  const passos = [
    {
      titulo: 'Entendimento e planejamento',
      texto: 'Antes de escrever qualquer código, entendo o problema por completo e planejo a menor unidade de trabalho possível — uma branch, uma tarefa clara, um objetivo definido.',
    },
    {
      titulo: 'Execução com validação contínua',
      texto: 'Construo de forma iterativa, testando cada mudança imediatamente — em diferentes tamanhos de tela, sempre documentando o progresso e as decisões técnicas pelo caminho.',
    },
    {
      titulo: 'Refinamento com base em resultado real',
      texto: 'Reviso, ajusto e refino com base no que efetivamente funciona na prática — a mesma disciplina que usei por 9 anos ajustando planos de treino conforme a resposta real de cada atleta.',
    },
  ]

  return (
    <section id="processo" className="max-w-2xl mx-auto px-6 pt-4 pb-16 sm:pt-8 sm:pb-24 text-left">

      <span className="text-xs font-medium text-(--accent) uppercase tracking-wider mb-3 block">
        Processo
      </span>

      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-(--text-h) mb-6">
        Como eu conduzo o trabalho do planejamento à entrega.
      </h2>

      <p className="text-base text-(--text) leading-relaxed">
        Processo estruturado, com validação constante em cada etapa — da primeira linha de
        código ao ajuste final.
      </p>

      {/* Container relativo pra a linha da timeline poder ser posicionada
          de forma absoluta, alinhada com as bolinhas de cada passo */}
      <div className="relative mt-12 pl-8">

        {/* Trilho de fundo (cinza, fixo) — sempre visível, marca o "caminho total" */}
        <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-(--border)"></div>

        {/* Trilho preenchido (roxo) — cresce via transition de height conforme
            alturaLinha muda. Isso É a animação de "a linha crescendo" que você pediu */}
        <div
          className="absolute left-0 top-2 w-0.5 bg-(--accent) transition-all duration-700 ease-out"
          style={{ height: `${alturaLinha}%` }}
        ></div>

        <div className="flex flex-col gap-10">
          {passos.map((passo, index) => (
            <div
              key={index}
              // Guarda esse elemento na posição certa do array de refs
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
              // opacity + translate-y controlados pela condição — cria o fade-in
              // suave de baixo pra cima quando revelados[index] vira true
              className={`relative transition-all duration-700 ease-out ${
                revelados[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Bolinha da timeline — posicionada sobre a linha, à esquerda do texto */}
              <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-(--accent) border-2 border-(--bg)"></div>

              <h3 className="text-lg font-semibold text-(--text-h) mb-2">
                {String(index + 1).padStart(2, '0')}. {passo.titulo}
              </h3>
              <p className="text-base text-(--text) leading-relaxed">
                {passo.texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Frase final — sem bolinha, fora da timeline, abaixo dela.
          Usa o índice 3 do array de revelados, observado separadamente */}
      <div
        ref={(el) => (refs.current[3] = el)}
        data-index={3}
        className={`mt-16 text-center transition-all duration-700 ease-out ${
          revelados[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-xl sm:text-2xl font-semibold text-(--text-h) tracking-tight">
          Transformando problemas reais em soluções práticas.
        </p>
      </div>
    </section>
  )
}

export default Processo