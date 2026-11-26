// Projetos exibidos na seção Projetos.
// status: 'Implementado' (selo verde) ou 'Em andamento' (selo âmbar).
// links: lista vazia esconde os botões do card.
export const projetos = [
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
    titulo: 'Portfólio pessoal',
    status: 'Implementado',
    descricao: 'Este site, construído em etapas: uma branch e um PR por etapa, componentes reutilizáveis, dados separados do layout, hooks próprios com Intersection Observer, navbar acessível e deploy contínuo na Vercel.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ManewJ/portfolio-manoel' },
    ],
  },
  {
    titulo: 'Vita Inspirata',
    status: 'Em andamento',
    descricao: 'Site católico de evangelização voltado a jovens, com textos em Markdown e fontes sempre indicadas. Projeto pessoal, do conteúdo ao código.',
    stack: ['Astro', 'TypeScript', 'Tailwind', 'Markdown'],
    links: [],
  },
]
