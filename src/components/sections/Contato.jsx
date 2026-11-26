import { useState } from 'react'
import { contato } from '../../data/contato'
import { SectionHeader } from '../ui/SectionHeader'
import {
  IconeCheck, IconeCopiar, IconeDownload, IconeEmail, IconeGithub, IconeLinkedin,
} from '../ui/icons'

const canais = [
  { nome: 'E-mail', texto: contato.email, url: `mailto:${contato.email}`, Icone: IconeEmail },
  { nome: 'LinkedIn', texto: contato.linkedin.texto, url: contato.linkedin.url, Icone: IconeLinkedin, externo: true },
  { nome: 'GitHub', texto: contato.github.texto, url: contato.github.url, Icone: IconeGithub, externo: true },
]

function Contato() {
  const [copiado, setCopiado] = useState(false)

  // Copia o e-mail para a área de transferência e mostra "copiado" por 2 segundos.
  // Se o navegador não permitir, nada quebra: o link do e-mail continua funcionando.
  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(contato.email)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      setCopiado(false)
    }
  }

  return (
    <section id="contato" className="max-w-2xl mx-auto px-6 pt-4 pb-16 sm:pt-8 sm:pb-24 text-left">
      <SectionHeader rotulo="Contato" titulo="Vamos conversar?">
        Estou em busca da minha primeira oportunidade como desenvolvedor Frontend. Se quiser
        falar sobre uma vaga, um projeto ou trocar uma ideia, é só chamar.
      </SectionHeader>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {canais.map(({ nome, texto, url, Icone, externo }) => (
          <a
            key={nome}
            href={url}
            {...(externo && { target: '_blank', rel: 'noopener noreferrer' })}
            className="flex flex-col gap-3 rounded-2xl border border-(--border) bg-(--code-bg) p-5 shadow-(--shadow) transition-colors duration-200 hover:border-(--accent-border) hover:bg-(--accent-bg)"
          >
            <Icone className="w-5 h-5 text-(--accent)" />
            <span>
              <span className="block text-sm font-semibold text-(--text-h)">{nome}</span>
              <span className="block text-xs text-(--text) break-all">{texto}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        <a
          href={contato.curriculo}
          download="Curriculo-Manoel-Justino-Frontend.pdf"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-(--accent) text-sm font-medium text-(--bg) transition-opacity duration-200 hover:opacity-90"
        >
          <IconeDownload className="w-4 h-4" />
          Baixar currículo (PDF)
        </a>

        <button
          type="button"
          onClick={copiarEmail}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-(--accent-border) bg-(--accent-bg) text-sm font-medium text-(--accent) cursor-pointer transition-colors duration-200 hover:bg-(--accent) hover:text-(--bg)"
        >
          {copiado ? <IconeCheck className="w-4 h-4" /> : <IconeCopiar className="w-4 h-4" />}
          {/* aria-live: o leitor de tela anuncia quando o texto muda para "copiado" */}
          <span aria-live="polite">{copiado ? 'E-mail copiado!' : 'Copiar e-mail'}</span>
        </button>
      </div>
    </section>
  )
}

export default Contato
