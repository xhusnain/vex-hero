import RevealOnScroll from './RevealOnScroll';

const stats = [
  { value: '140+', label: 'Products shipped' },
  { value: '60+', label: 'Engineers on staff' },
  { value: '12', label: 'Years in business' },
  { value: '38', label: 'Countries served' },
];

export default function Stats() {
  return (
    <section className="bg-black text-white py-20 md:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 120}>
              <div>
                <div
                  className="text-5xl md:text-6xl lg:text-7xl font-light mb-3"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {s.value}
                </div>
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  {s.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
