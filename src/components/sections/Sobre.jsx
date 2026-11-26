import { SectionHeader } from '../ui/SectionHeader'

function Sobre() {
  return (
    <section
      id="sobre"
      className="max-w-2xl mx-auto px-6 pt-16 pb-16 sm:pt-24 sm:pb-24 text-left"
    >
      <SectionHeader
        rotulo="Sobre"
        titulo="Desenvolvimento orientado a clareza, performance e experiência do usuário."
      >
        Formado em Sistemas para Internet (UNIESP), com 9 anos de experiência como Personal
        Trainer. Hoje direciono minha carreira para o desenvolvimento Full Stack, com foco em Frontend, unindo
        disciplina técnica com uma visão de produto que poucos devs junior têm: a de quem
        já foi o "usuário final" de soluções de saúde e performance.
      </SectionHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <span className="rounded-2xl border border-(--border) bg-(--code-bg) px-5 py-3.5 text-sm leading-relaxed text-(--text) cursor-default transition-colors duration-200 hover:border-(--accent-border) hover:bg-(--accent-bg)">
          Desenvolvimento de aplicações React e React Native com integração Firebase
        </span>
        <span className="rounded-2xl border border-(--border) bg-(--code-bg) px-5 py-3.5 text-sm leading-relaxed text-(--text) cursor-default transition-colors duration-200 hover:border-(--accent-border) hover:bg-(--accent-bg)">
          Entrega do CrismaApp em equipe, com publicação de APK via EAS
        </span>
        <span className="rounded-2xl border border-(--border) bg-(--code-bg) px-5 py-3.5 text-sm leading-relaxed text-(--text) cursor-default transition-colors duration-200 hover:border-(--accent-border) hover:bg-(--accent-bg)">
          Construção do TrackRun, nascido de um problema real vivido como atleta
        </span>
      </div>
    </section>
  )
}

export default Sobre