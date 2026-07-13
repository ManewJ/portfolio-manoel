# Portfolio Manoel Justino 👋
 
Esse é o meu portfólio pessoal — fique à vontade pra explorar! Ele foi feito com **React + Vite + Tailwind CSS**, e tá sendo construído aos poucos, seção por seção, enquanto eu aprendo e aplico frontend na prática.
 
Depois de 9 anos como Personal Trainer, tô migrando de carreira pra desenvolvimento — e decidi não esconder isso no caminho. Esse portfólio é tanto minha vitrine profissional quanto meu campo de treino técnico (trocadilho intencional 😄).
 
---
 
## 🚧 Como o projeto está evoluindo
 
O site vai crescendo seção por seção, cada uma na sua própria branch:
 
- ✅ **Hero** — foto, badge de disponibilidade, stats rápidos e um fundo animado com blobs de gradiente
- ✅ **Sobre** — minha trajetória, do treino ao código
- ✅ **Tecnologias** — minha stack organizada por área de atuação
- ✅ **Processo** — timeline animada (alternando lados no desktop) mostrando como eu conduzo o trabalho, revelada via Intersection Observer
- 🔜 **Próximas paradas** — Projetos, Experiência, Formação, Contato, navbar com menu mobile, efeitos de scroll, e o deploy final
---
 
## 🛠️ Stack
 
| Tecnologia | Uso |
| --- | --- |
| React + Vite | Interface e estrutura do projeto |
| Tailwind CSS v4 | Estilização utilitária |
| Intersection Observer (nativo) | Animações de revelação por scroll, sem dependência externa |
| Vercel / Netlify *(em breve)* | Deploy |
 
---
 
## 📁 Estrutura do projeto
 
```
src/
├── assets/          # Imagens e arquivos estáticos
├── components/      # Um componente por seção do site
│   ├── Hero.jsx
│   ├── Sobre.jsx
│   ├── Tecnologias.jsx
│   └── Processo.jsx
├── App.jsx          # Componente raiz, renderiza as seções em ordem
├── index.css         # Estilos globais e variáveis CSS
└── main.jsx          # Ponto de entrada da aplicação
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
 
# Rode o projeto
npm run dev
```
 
---
 
## 🔧 Workflow de desenvolvimento
 
Sigo boas práticas de mercado desde o início do projeto:
 
- **Conventional Commits** — mensagens de commit semânticas (`feat`, `fix`, `chore`, `style`, `docs`)
- **Feature branches** — cada seção construída na sua própria branch
- **Pull Requests** — revisão antes de qualquer merge na `main`
---
 
## 👋 Sobre mim
 
Feito por **Manoel Justino** — Personal Trainer e desenvolvedor front-end em transição de carreira.
 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Manoel%20Justino-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/manoel-justino-dev/)