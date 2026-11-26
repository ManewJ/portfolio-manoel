import { contato } from '../../data/contato'
import { IconeEmail, IconeGithub, IconeLinkedin } from '../ui/icons'

// O ano é calculado na hora: o rodapé nunca fica com o ano desatualizado.
const ano = new Date().getFullYear()

const redes = [
  { nome: 'E-mail', url: `mailto:${contato.email}`, Icone: IconeEmail },
  { nome: 'LinkedIn', url: contato.linkedin.url, Icone: IconeLinkedin, externo: true },
  { nome: 'GitHub', url: contato.github.url, Icone: IconeGithub, externo: true },
]

export function Footer() {
  return (
    <footer className="border-t border-(--border)">
      <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-(--text) text-center sm:text-left">
          © {ano} Manoel Justino · Feito com React e Tailwind CSS
        </p>

        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-3">
            {redes.map(({ nome, url, Icone, externo }) => (
              <li key={nome}>
                <a
                  href={url}
                  aria-label={nome}
                  {...(externo && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="block p-1 text-(--text) transition-colors duration-200 hover:text-(--accent)"
                >
                  <Icone className="w-5 h-5" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#inicio"
            className="text-sm text-(--text) transition-colors duration-200 hover:text-(--accent)"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
