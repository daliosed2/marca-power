export default function MarcaPowerLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar (v1 structure, base white) */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/70 border-b border-slate-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 font-extrabold text-slate-900 shadow">MP</span>
            <span className="font-semibold tracking-wide">Marca Power</span>
          </a>
          <ul className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <li><a className="hover:text-slate-900" href="#mision">Misión</a></li>
            <li><a className="hover:text-slate-900" href="#contenidos">Contenidos</a></li>
            <li><a className="hover:text-slate-900" href="#masterclass">Masterclass</a></li>
            <li><a className="hover:text-slate-900" href="#comunidad">Comunidad</a></li>
            <li><a className="hover:text-slate-900" href="#contacto">Contacto</a></li>
          </ul>
          <a href="#suscripcion" className="hidden md:inline-flex items-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition">Suscríbete</a>
        </nav>
      </header>

      {/* Hero (v1 layout, on white) */}
      <section id="inicio" className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <span>🚀 Nuevo</span>
              <span className="text-slate-900">Marca Power</span>
              <span className="text-slate-500">IA al alcance de todos</span>
            </p>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Tu aliado en <span className="text-cyan-700">IA</span> y negocios para emprendedores
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl">
              Comunicamos noticias útiles, oportunidades de negocio y formación práctica en inteligencia artificial a través de videos cortos y masterclasses sencillas, en español y sin tecnicismos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contenidos" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:shadow-md transition">Ver videos</a>
              <a href="#masterclass" className="inline-flex items-center justify-center rounded-2xl bg-white text-cyan-700 ring-1 ring-cyan-300 px-5 py-3 text-sm font-semibold hover:bg-cyan-50 transition">Tomar masterclass</a>
              <a href="#comunidad" className="inline-flex items-center justify-center rounded-2xl bg-white text-emerald-700 ring-1 ring-emerald-300 px-5 py-3 text-sm font-semibold hover:bg-emerald-50 transition">Unirme a la comunidad</a>
            </div>
          </div>
        </div>
      </section>

      {/* Value props (v1) */}
      <section id="mision" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { emoji: '📰', title: 'Información que sí sirve', desc: 'Resúmenes claros de noticias y tendencias con impacto en Ecuador y LATAM.' },
            { emoji: '💼', title: 'Herramientas de negocio', desc: 'Plantillas, guías y casos prácticos para vender más y optimizar tu emprendimiento.' },
            { emoji: '🤖', title: 'Educación en IA', desc: 'Cursos y micro-clases desde cero: aprende a usar IA hoy, sin saber programar.' }
          ].map((c, i) => (
            <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl" aria-hidden>{c.emoji}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content cards (v1) */}
      <section id="contenidos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 pb-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Contenido reciente</h2>
          <a href="#" className="text-sm text-cyan-700 hover:text-cyan-800">Ver todo</a>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i)=> (
            <article key={i} className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-500 text-sm">Miniatura {i}</div>
              <div className="p-5">
                <h3 className="font-semibold group-hover:text-slate-900">Título de video #{i}</h3>
                <p className="mt-1 text-sm text-slate-600 line-clamp-2">Descripción breve del contenido. Aquí irá el resumen y el enlace al video.</p>
                <div className="mt-4 flex items-center gap-2">
                  <a href="#" className="rounded-xl bg-slate-900 text-white px-3 py-2 text-xs font-semibold">Reproducir</a>
                  <a href="#" className="rounded-xl bg-white ring-1 ring-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">Guardar</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Masterclass (v1) */}
      <section id="masterclass" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-emerald-50 p-8 lg:p-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Masterclass: IA para Emprender Fácil</h2>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>• Aprende a crear contenido viral con IA (YouTube Shorts, Reels, TikTok).</li>
              <li>• Automatiza tareas: WhatsApp, Excel/Sheets, y flujos de atención.</li>
              <li>• Casos reales en Ecuador y Latinoamérica.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:shadow-md">Reservar cupo</a>
              <a href="#" className="inline-flex items-center rounded-2xl bg-white ring-1 ring-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Ver temario</a>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidad (v1) */}
      <section id="comunidad" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Comunidad Marca Power</h2>
            <p className="mt-3 text-slate-600 text-sm">Únete para recibir alertas de tendencias, retos semanales y recursos gratuitos. Comparte tus avances y consigue feedback de otros emprendedores.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#" className="rounded-2xl bg-emerald-500 text-white font-semibold px-5 py-3 text-sm">WhatsApp</a>
              <a href="#" className="rounded-2xl bg-cyan-600 text-white font-semibold px-5 py-3 text-sm">Telegram</a>
              <a href="#" className="rounded-2xl bg-slate-900 text-white font-semibold px-5 py-3 text-sm">Discord</a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <ol className="text-sm space-y-2 list-decimal list-inside text-slate-700">
              <li>Reglas simples y respeto siempre.</li>
              <li>Contenido práctico, cero spam.</li>
              <li>Enfoque en impacto local (Ecuador & LATAM).</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Newsletter (v1) */}
      <section id="suscripcion" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Recibe el boletín semanal</h2>
          <p className="mt-2 text-sm text-slate-600">Tendencias + oportunidades + tutoriales. Corta y al grano.</p>
          <form className="mt-5 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full sm:w-auto flex-1 rounded-xl bg-white border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Tu correo" />
            <button className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold">Suscribirme</button>
          </form>
          <p className="mt-2 text-xs text-slate-500">Al suscribirte aceptas recibir correos de Marca Power. Puedes darte de baja cuando quieras.</p>
        </div>
      </section>

      {/* Contacto (v1) */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Contacto</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-slate-500">Correo</p>
              <p className="font-medium">hola@marcapower.com</p>
            </div>
            <div>
              <p className="text-slate-500">Redes</p>
              <p className="font-medium">YouTube · Instagram · TikTok · X</p>
            </div>
            <div>
              <p className="text-slate-500">Ubicación</p>
              <p className="font-medium">Ecuador · LATAM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (v1) */}
      <footer className="pb-10 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Marca Power. Hecho con ❤️ para emprendedores.</p>
      </footer>
    </div>
  );
}
