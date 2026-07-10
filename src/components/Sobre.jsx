function Sobre() {
  return (
    <section
      id="sobre"
      className="max-w-2xl mx-auto px-6 pt-16 pb-16 sm:pt-24 sm:pb-24 text-left flex flex-col gap-5"
    >
      <span className="text-xs font-semibold text-(--accent) uppercase tracking-widest block opacity-90">
        Sobre
      </span>

      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-(--text-h) leading-tight">
        Frontend orientado a clareza, performance e experiência do usuário.
      </h2>

      <p className="text-sm sm:text-base text-(--text) opacity-90 leading-relaxed font-normal">
        Formado em Sistemas para Internet (UNIESP), com 9 anos de experiência como Personal
        Trainer. Hoje direciono minha carreira para o desenvolvimento Frontend, unindo
        disciplina técnica com uma visão de produto que poucos devs junior têm: a de quem
        já foi o "usuário final" de soluções de saúde e performance.
      </p>

      {/* mt-8 isola o bloco de cards do texto acima, evitando o efeito "colado"
          que tínhamos antes de descobrir a solução do flex+gap */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <span className="rounded-2xl border border-(--border) bg-(--code-bg) px-5 py-3.5 text-sm leading-relaxed text-(--text) transition-colors duration-200 hover:border-(--accent-border) hover:bg-(--accent-bg)">
          Desenvolvimento de aplicações React e React Native com integração Firebase
        </span>
        <span className="rounded-2xl border border-(--border) bg-(--code-bg) px-5 py-3.5 text-sm leading-relaxed text-(--text) transition-colors duration-200 hover:border-(--accent-border) hover:bg-(--accent-bg)">
          Entrega do CrismaApp em equipe, com publicação de APK via EAS
        </span>
        <span className="rounded-2xl border border-(--border) bg-(--code-bg) px-5 py-3.5 text-sm leading-relaxed text-(--text) transition-colors duration-200 hover:border-(--accent-border) hover:bg-(--accent-bg)">
          Construção do TrackRun, nascido de um problema real vivido como atleta
        </span>
      </div>
    </section>
  )
}

export default Sobre