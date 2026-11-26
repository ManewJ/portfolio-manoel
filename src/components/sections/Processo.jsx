import { useReveal } from '../../hooks/useReveal'
import { passos } from '../../data/processo'
import { SectionHeader } from '../ui/SectionHeader'

function Processo() {
  // +1 porque a frase final também é revelada ao rolar
  const { revelados, registrar } = useReveal(passos.length + 1)

  // A linha da timeline cresce conforme os passos (não a frase final) aparecem
  const passosRevelados = revelados.slice(0, passos.length).filter(Boolean).length
  const alturaLinha = (passosRevelados / passos.length) * 100

  return (
    <section id="processo" className="max-w-2xl mx-auto px-6 pt-4 pb-16 sm:pt-8 sm:pb-24 text-left">

      <SectionHeader rotulo="Processo" titulo="Como eu conduzo o trabalho do planejamento à entrega.">
        Processo estruturado, com validação constante em cada etapa — da primeira linha de código ao ajuste final.
      </SectionHeader>

      <div className="relative mt-12 pl-8 sm:pl-0">

        <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-2 bottom-2 w-0.5 bg-(--border)"></div>

        <div
          className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-2 w-0.5 bg-(--accent) transition-all duration-700 ease-out"
          style={{ height: `${alturaLinha}%` }}
        ></div>

        <div className="flex flex-col gap-16">
          {passos.map((passo, index) => {
            // index par (0, 2) = lado direito | index ímpar (1) = lado esquerdo
            const ladoDireito = index % 2 === 0
            const entradaOculta = ladoDireito
              ? 'sm:translate-x-10 sm:rotate-2'
              : 'sm:-translate-x-10 sm:-rotate-2'

            // O conteúdo real do card — extraído em uma variável porque
            // sua POSIÇÃO no JSX (antes ou depois do espaçador) é o que
            // realmente decide de que lado da linha ele aparece
            const conteudo = (
              <div
                ref={registrar(index)}
                className={`sm:w-1/2 transition-all duration-1000 ease-out ${
                  ladoDireito ? 'sm:pl-10 sm:text-left' : 'sm:pr-10 sm:text-right'
                } ${
                  revelados[index]
                    ? 'opacity-100 translate-y-0 sm:translate-x-0 sm:rotate-0'
                    : `opacity-0 translate-y-4 ${entradaOculta}`
                }`}
              >
                <h3 className="text-lg font-semibold text-(--text-h) mb-2">
                  {String(index + 1).padStart(2, '0')}. {passo.titulo}
                </h3>
                <p className="text-base text-(--text) leading-relaxed">
                  {passo.texto}
                </p>
              </div>
            )

            const espacador = <div className="hidden sm:block sm:w-1/2"></div>

            return (
              <div key={index} className="relative sm:flex sm:items-center">
                {/* Bolinha sempre no centro da linha (a partir do sm) */}
                <div className="absolute -left-8 sm:left-1/2 sm:-translate-x-1/2 top-1 w-3 h-3 rounded-full bg-(--accent) border-2 border-(--bg) z-10"></div>

                {/* AQUI está a correção: a ordem física dos dois elementos
                    inverte conforme o lado, em vez de ficar sempre fixa */}
                {ladoDireito ? (
                  <>
                    {espacador}
                    {conteudo}
                  </>
                ) : (
                  <>
                    {conteudo}
                    {espacador}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div
        ref={registrar(passos.length)}
        className={`mt-16 text-center transition-all duration-1000 ease-out ${
          revelados[passos.length] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-xl sm:text-2xl font-semibold text-(--text-h) tracking-tight">
          Transformando problemas reais em{' '}
          <span className="text-(--accent)">soluções</span> práticas.
        </p>
      </div>
    </section>
  )
}

export default Processo