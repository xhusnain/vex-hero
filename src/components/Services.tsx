import RevealOnScroll from './RevealOnScroll';

const services = [
  {
    title: 'Web Applications',
    body: 'Production-grade SaaS, dashboards, and marketing sites built with React, Next.js, Vue, Svelte, and Remix.',
  },
  {
    title: 'Mobile Apps',
    body: 'Native iOS and Android in Swift and Kotlin, plus cross-platform builds in React Native, Expo, and Flutter.',
  },
  {
    title: 'Shopify & Commerce',
    body: 'Hydrogen storefronts, custom themes and apps, headless commerce, and checkout extensions at scale.',
  },
  {
    title: 'Backend & APIs',
    body: 'Services in Node, Python, Go, Rust, Ruby on Rails, PHP/Laravel, .NET, or Java — whatever fits the problem.',
  },
  {
    title: 'Cloud & DevOps',
    body: 'AWS, GCP, Vercel, Cloudflare. CI/CD pipelines, observability, and infrastructure-as-code with Terraform.',
  },
  {
    title: 'AI & Data',
    body: 'LLM integrations, RAG pipelines, vector search, and analytics warehousing on Postgres, BigQuery, and ClickHouse.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              What we do
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-normal"
              style={{ letterSpacing: '-0.04em' }}
            >
              End-to-end product teams,<br />embedded.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 80}>
              <div className="liquid-glass rounded-2xl p-8 h-full">
                <div className="text-sm text-gray-400 mb-6">0{i + 1}</div>
                <h3
                  className="text-2xl font-normal mb-3"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
