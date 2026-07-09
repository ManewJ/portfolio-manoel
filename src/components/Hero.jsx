import profileImg from '../assets/profile.png'

function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20 gap-6">
      <img
        src={profileImg}
        alt="Manoel Justino"
        className="w-32 h-32 rounded-full object-cover border-2 border-[var(--accent-border)]"
      />

      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent-border)] text-sm font-medium text-[var(--text-h)]">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        Disponível para oportunidades
      </span>

      <div>
        <h1>Manoel Justino</h1>
        <h2>Desenvolvedor Frontend Jr.</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-2">
        <span className="px-3 py-1 rounded-md border border-[var(--border)] text-sm">
          📍 João Pessoa, PB
        </span>
        <span className="px-3 py-1 rounded-md border border-[var(--border)] text-sm">
          ⚛️ React • React Native • JavaScript
        </span>
        <span className="px-3 py-1 rounded-md border border-[var(--border)] text-sm">
          🏃 9 anos como Personal Trainer
        </span>
      </div>
    </section>
  )
}

export default Hero