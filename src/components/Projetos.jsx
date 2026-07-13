function Projetos() {
  const projetos = [
    {
      titulo: 'CrismaApp',
      status: 'Implementado',
      descricao: 'App mobile para gestão de grupos de Crisma, desenvolvido em equipe de 4 pessoas.',
      stack: ['React Native', 'Expo', 'Firebase'],
      links: [
        { label: 'GitHub', url: 'https://github.com/ManewJ/crisma-app-entrega' },
        { label: 'APK', url: 'https://expo.dev/accounts/manoeljustino86/projects/crisma-app/builds/e4fb31d3-317e-4949-b9ea-7c86af29ca93' },
      ],
    },
    {
      titulo: 'TrackRun',
      status: 'Em andamento',
      descricao: 'App de registro de treinos de corrida, nascido de um problema real: relatos de treino se perdendo no WhatsApp. Atualmente em desenvolvimento o painel do treinador — visualização dos treinos dos atletas e envio de feedbacks.',
      stack: ['React', 'Vite', 'Tailwind', 'Supabase'],
      links: [], // repositório ainda privado — sem link clicável por enquanto
    },
    {
      titulo: 'Testes E2E — Portal da Transparência',
      status: 'Implementado',
      descricao: 'Projeto de testes automatizados end-to-end (BDD + Page Object Model) contra o Portal da Transparência.',
      stack: ['Cypress', 'Gherkin'],
      links: [
        { label: 'GitHub', url: 'https://github.com/ManewJ/va02-qa-cypress-bdd-entrega' },
      ],
    },
  ]

  return (
    <section id="projetos" className="max-w-2xl mx-auto px-6 pt-4 pb-16 sm:pt-8 sm:pb-24 text-left">

      <span className="text-xs font-medium text-(--accent) uppercase tracking-wider mb-3 block">
        Projetos
      </span>

      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-(--text-h) mb-6">
        Projetos que aplicam a teoria na prática.
      </h2>

      <p className="text-base text-(--text) leading-relaxed">
        Do mobile aos testes automatizados — cada projeto resolve um problema real, com honestidade sobre o que já está pronto e o que ainda está em construção.
      </p>

      <div className="grid grid-cols-1 gap-6 mt-10">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="rounded-2xl border border-(--border) bg-(--code-bg) p-6 shadow-(--shadow)"
          >
            {/* Cabeçalho do card: título + badge de status lado a lado */}
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h3 className="text-lg font-semibold text-(--text-h)">
                {projeto.titulo}
              </h3>
              {/* Cor do badge muda conforme o status — verde para o que já
                  está pronto, âmbar para o que ainda está em construção */}
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  projeto.status === 'Implementado'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                }`}
              >
                {projeto.status}
              </span>
            </div>

            <p className="text-base text-(--text) leading-relaxed mb-4">
              {projeto.descricao}
            </p>

            {/* Tags de stack — mesmo padrão visual da seção Tecnologias */}
            <div className="flex flex-wrap gap-2 mb-4">
              {projeto.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md border border-(--border) text-sm transition-colors duration-200 hover:border-(--accent-border) hover:bg-(--accent-bg)"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links só aparecem se existirem — o TrackRun não tem nenhum ainda */}
            {projeto.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {projeto.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-(--accent) hover:underline"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projetos