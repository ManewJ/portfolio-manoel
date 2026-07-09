import profileImg from '../assets/profile.png'

function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center px-6 py-20 gap-6 overflow-hidden">
      {/* Blobs de fundo — decorativos, não interativos */}
      <div className="absolute top-[-60px] left-[10%] w-72 h-72 rounded-full bg-[var(--accent)] opacity-20 blur-3xl animate-[blob_18s_ease-in-out_infinite]"></div>
      <div className="absolute top-[20%] right-[5%] w-80 h-80 rounded-full bg-[var(--accent)] opacity-15 blur-3xl animate-[blob_22s_ease-in-out_infinite] [animation-delay:-6s]"></div>
      <div className="absolute bottom-[-80px] left-[30%] w-64 h-64 rounded-full bg-[var(--accent)] opacity-20 blur-3xl animate-[blob_20s_ease-in-out_infinite] [animation-delay:-11s]"></div>

      {/* Conteúdo real, acima dos blobs */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <img
          src={profileImg}
          alt="Manoel Justino"
          className="w-44 h-44 rounded-full object-cover border-2 border-[var(--accent-border)]"
        />

        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent-border)] text-xs font-medium text-[var(--text-h)]">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Disponível para oportunidades
        </span>

        <div className="-mt-4">
          <h1>Manoel Justino</h1>
          <h2>Desenvolvedor Frontend Jr.</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <span className="px-3 py-1 rounded-md border border-[var(--border)] text-sm transition-colors duration-200 hover:border-[var(--accent-border)]">
            Localizado em João Pessoa - PB 🏖
          </span>
          <span className="px-3 py-1 rounded-md border border-[var(--border)] text-sm transition-colors duration-200 hover:border-[var(--accent-border)]">
            React • React Native • JavaScript
          </span>
          <span className="px-3 py-1 rounded-md border border-[var(--border)] text-sm transition-colors duration-200 hover:border-[var(--accent-border)]">
            9 anos como Personal Trainer
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero