import RevealOnScroll from './RevealOnScroll';

const steps = [
  {
    n: '01',
    title: 'Discover',
    body: 'Two weeks of audit, research, and architecture. We lock scope, surface risk, and shape a technical plan you can actually defend in a board meeting.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'System design, UX flows, and functional prototypes — reviewed against real-world constraints before a single production line of code is written.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Bi-weekly shipping cadence with automated tests, typed contracts, CI/CD, and continuous demos. You see working software from week one.',
  },
  {
    n: '04',
    title: 'Scale',
    body: 'Observability, on-call rotations, performance hardening, and iterative improvements. Launch is the start of the engagement, not the end.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-black text-white py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              How we work
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-normal"
              style={{ letterSpacing: '-0.04em' }}
            >
              A process built for teams<br />who ship every week.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.n} delay={i * 100}>
              <div className="liquid-glass rounded-2xl p-8 h-full">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl font-light text-white/30">{step.n}</span>
                  <h3
                    className="text-2xl md:text-3xl font-normal"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{step.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
