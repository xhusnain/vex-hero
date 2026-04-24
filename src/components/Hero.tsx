import AnimatedHeading from './AnimatedHeading';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section id="top" className="min-h-screen bg-black text-white relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_084718_72a17915-4964-4059-afcd-22d59399b72e.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 min-h-screen">
        <div className="min-h-screen px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-4xl flex flex-col items-center">
            <AnimatedHeading
              text={'Software crafted\nto shape tomorrow.'}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
              style={{ letterSpacing: '-0.04em' }}
              delay={200}
              charDelay={30}
            />
            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-lg text-gray-300 mb-5 max-w-2xl">
                Web, mobile, and commerce platforms engineered for companies that
                can't afford to ship mediocre.
              </p>
            </FadeIn>
            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Start a Project
                </a>
                <a
                  href="#work"
                  className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Explore Work
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 flex justify-center">
          <FadeIn delay={1400} duration={1000}>
            <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
              <p className="text-lg md:text-xl lg:text-2xl font-light">
                Web. Mobile. Commerce. Cloud.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
