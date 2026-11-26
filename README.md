# Portfolio Manoel Justino 👋

🔗 **Veja no ar: [manoel-justino.vercel.app](https://manoel-justino.vercel.app)**

Esse é o meu portfólio pessoal — fique à vontade pra explorar! Ele foi feito com **React + Vite + Tailwind CSS** e construído aos poucos, etapa por etapa, enquanto eu aprendo e aplico frontend na prática.

Depois de 9 anos como Personal Trainer, tô migrando de carreira pra desenvolvimento — e decidi não esconder isso no caminho. Esse portfólio é tanto minha vitrine profissional quanto meu campo de treino técnico (trocadilho intencional 😄).

---

## ✨ O que tem no site

- **Navbar fixa** com logo animado (o "MJ" como núcleo de um átomo), indicador da seção ativa, barra de progresso de leitura e menu de celular
- **Hero** — foto, badge de disponibilidade, destaques rápidos e um fundo animado com blobs de gradiente
- **Sobre** — minha trajetória, do treino ao código
- **Tecnologias** — minha stack organizada por área de atuação
- **Processo** — timeline animada (alternando lados no desktop), revelada ao rolar a página
- **Projetos** — cards com status, stack e links (inclusive deste próprio portfólio)
- **Contato** — e-mail, LinkedIn, GitHub, botão de copiar o e-mail e currículo em PDF para baixar
- **Rodapé** — links de contato e "voltar ao topo"

## ♿ Cuidados de acessibilidade

- HTML semântico (`header`, `nav`, `main`, `footer`) e `lang="pt-BR"`
- Menu de celular com `aria-expanded`, `aria-controls`, `aria-label`, `inert` e fechamento pela tecla Esc
- `aria-current` no link da seção ativa e `aria-live` no aviso de e-mail copiado
- Animações respeitam o `prefers-reduced-motion` (rolagem, menu, sublinhado e logo)
- Ícones decorativos com `aria-hidden` e links só de ícone com `aria-label`

---

## 🛠️ Stack

| Tecnologia | Uso |
| --- | --- |
| React 19 + Vite | Interface e estrutura do projeto |
| Tailwind CSS v4 | Estilização utilitária |
| Intersection Observer (nativo) | Revelação por scroll e seção ativa da navbar, sem dependência externa |
| SVG + `animateMotion` | Logo animado, sem biblioteca de animação |
| Vercel | Deploy contínuo a cada merge na `main` e prévia em cada PR |
| SonarCloud | Análise de qualidade do código em cada PR |

---

## 📁 Estrutura do projeto

```
src/
├── assets/              # Imagens (foto de perfil em WebP)
├── components/
│   ├── layout/          # Navbar e Footer
│   ├── sections/        # Uma seção por arquivo (Hero, Sobre, Tecnologias, Processo, Projetos, Contato)
│   └── ui/              # Peças reutilizáveis: Tag, SectionHeader, LogoAtomo e ícones
├── data/                # Conteúdo separado do layout (projetos, tecnologias, processo, navegação, contato)
├── hooks/               # useReveal (revelação ao rolar) e useSecaoAtiva (seção ativa da navbar)
├── App.jsx              # Componente raiz, monta a página em ordem
├── index.css            # Estilos globais e variáveis de cor (tema claro e escuro)
└── main.jsx             # Ponto de entrada da aplicação
public/                  # Favicon, imagem de compartilhamento e currículo em PDF
```

---

## ▶️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/ManewJ/portfolio-manoel.git

# Entre na pasta
cd portfolio-manoel

# Instale as dependências
npm install

# Rode o projeto (abre em http://localhost:5173)
npm run dev

# Outros comandos
npm run lint    # confere o código com o ESLint
npm run build   # gera a versão de produção na pasta dist/
```

---

## 🔧 Workflow de desenvolvimento

Sigo boas práticas de mercado desde o início do projeto:

- **Conventional Commits** — mensagens de commit semânticas (`feat`, `fix`, `refactor`, `style`, `perf`, `chore`, `docs`)
- **Uma branch por etapa** — cada parte do site construída na sua própria branch
- **Pull Requests** — revisão antes de qualquer merge na `main`, com descrição padronizada (o que muda, o que fica para depois e como testar)
- **Deploy contínuo** — a Vercel publica sozinha cada merge na `main`

---

## 👋 Sobre mim

Feito por **Manoel Justino** — desenvolvedor Frontend Jr., formado em Sistemas para Internet (UNIESP) e Personal Trainer em transição de carreira.

[![Portfólio](https://img.shields.io/badge/Portf%C3%B3lio-manoel--justino.vercel.app-7C3AED?style=flat)](https://manoel-justino.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Manoel%20Justino-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/manoel-justino-dev/)
[![GitHub](https://img.shields.io/badge/GitHub-ManewJ-181717?style=flat&logo=github)](https://github.com/ManewJ)
