import RevealOnScroll from './RevealOnScroll';

const quotes = [
  {
    body: 'VEX ships more in a month than our last two vendors shipped in a year. They don’t just write code — they push back on the decisions that matter.',
    name: 'Priya Ramachandran',
    role: 'CTO, Helix Finance',
  },
  {
    body: 'We scaled from 10k to 2M users without a rewrite. That’s the difference between a shop and a team that actually understands architecture.',
    name: 'Marcus Levenson',
    role: 'VP Engineering, Brightline Health',
  },
  {
    body: 'Our Shopify migration was four weeks end-to-end. Hydrogen, custom checkout, and a 40% drop in page load time. We’ve never worked faster.',
    name: 'Elena Kowalski',
    role: 'Founder, Northpath Apparel',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              What clients say
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-normal"
              style={{ letterSpacing: '-0.04em' }}
            >
              Trusted by founders<br />and engineering leaders.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <RevealOnScroll key={q.name} delay={i * 120}>
              <figure className="liquid-glass rounded-2xl p-8 h-full flex flex-col">
                <blockquote className="text-lg md:text-xl font-light leading-relaxed mb-8">
                  &ldquo;{q.body}&rdquo;
                </blockquote>
                <figcaption className="mt-auto">
                  <div className="text-sm font-medium">{q.name}</div>
                  <div className="text-sm text-gray-400">{q.role}</div>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
