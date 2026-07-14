function IconeGithub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.92.432.372.816 1.103.816 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function IconeLinkExterno() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  )
}

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
      links: [],
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
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h3 className="text-lg font-semibold text-(--text-h)">
                {projeto.titulo}
              </h3>
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

            {/* Links: já nascem "acesos" (cor de destaque + fundo sutil sempre visíveis),
                menores que as tags de stack (text-xs em vez de text-sm) — isso os
                diferencia visualmente das tags, que só acendem no hover */}
            {projeto.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {projeto.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-(--accent-border) bg-(--accent-bg) text-xs font-medium text-(--accent) transition-colors duration-200 hover:bg-(--accent) hover:text-(--bg)"
                  >
                    {link.label === 'GitHub' ? <IconeGithub /> : <IconeLinkExterno />}
                    {link.label === 'GitHub' ? 'Ver código' : link.label}
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