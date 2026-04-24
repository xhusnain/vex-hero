import RevealOnScroll from './RevealOnScroll';

const groups = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vue', 'Nuxt', 'Svelte', 'Angular', 'Astro', 'Remix'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'Rust', 'Ruby on Rails', 'Laravel', '.NET', 'Java'],
  },
  {
    label: 'Mobile',
    items: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Expo'],
  },
  {
    label: 'Commerce',
    items: ['Shopify', 'Hydrogen', 'Liquid', 'BigCommerce', 'WooCommerce', 'Medusa'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Azure', 'Vercel', 'Cloudflare', 'Terraform', 'Docker', 'Kubernetes'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'ClickHouse', 'BigQuery'],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="bg-black text-white py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Our toolbox
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-normal"
              style={{ letterSpacing: '-0.04em' }}
            >
              Any language. Any framework.<br />Whatever the job needs.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-10">
          {groups.map((g, gi) => (
            <RevealOnScroll key={g.label} delay={gi * 60}>
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-6 border-b border-white/10">
                <div className="md:w-48 shrink-0">
                  <p className="text-sm uppercase tracking-widest text-gray-400">
                    {g.label}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="liquid-glass rounded-full px-4 py-2 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
