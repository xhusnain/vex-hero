import RevealOnScroll from './RevealOnScroll';

const projects = [
  {
    name: 'Atlas Commerce',
    category: 'E-commerce · Shopify Hydrogen',
    result: '4M monthly active users. 38% checkout lift.',
    gradient: 'from-indigo-500/30 via-purple-500/20 to-transparent',
  },
  {
    name: 'Ridgeline Health',
    category: 'Healthtech · React Native + Node',
    result: 'HIPAA-compliant telehealth. 2s time-to-first-visit.',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-transparent',
  },
  {
    name: 'Orbit Finance',
    category: 'Fintech · Next.js + Go',
    result: 'Real-time trading dashboard. 12k events/second.',
    gradient: 'from-amber-500/30 via-rose-500/20 to-transparent',
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-black text-white py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Featured work
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-normal"
              style={{ letterSpacing: '-0.04em' }}
            >
              A few things we've<br />built recently.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <RevealOnScroll key={p.name} delay={i * 120}>
              <a
                href="#work"
                className="group block liquid-glass rounded-2xl overflow-hidden h-full"
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative transition-transform duration-700 group-hover:scale-[1.03]`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                    {p.category}
                  </p>
                  <h3
                    className="text-2xl font-normal mb-2"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{p.result}</p>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={300}>
          <div className="mt-12 flex justify-center">
            <a
              href="#work"
              className="liquid-glass border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              View the full case book
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
