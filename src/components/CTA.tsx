import RevealOnScroll from './RevealOnScroll';

export default function CTA() {
  return (
    <section id="contact" className="bg-black text-white py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <RevealOnScroll>
          <div className="liquid-glass rounded-3xl p-10 md:p-16 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
            <div className="relative">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
                style={{ letterSpacing: '-0.04em' }}
              >
                Ready to build<br />what&rsquo;s next?
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-10 max-w-xl mx-auto">
                Tell us what you&rsquo;re working on. We&rsquo;ll respond in under
                24 hours with a scoped proposal, not a sales call.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:hello@vex.dev"
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Start a Project
                </a>
                <a
                  href="#work"
                  className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                >
                  See our work first
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
