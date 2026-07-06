import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

const NAV_ITEMS = [
  { label: 'My Story', href: '#about' },
  { label: 'Projects', href: '#projects' },
];

const HERO_VIDEO_URL = 'https://jeffreycodingcyber.vercel.app/';

export function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/75" />

        <nav className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap font-mono text-[10px] transition-colors sm:text-xs md:text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
          <div className="grid grid-cols-12 items-end gap-x-4 gap-y-6">
            <div className="col-span-12 lg:col-span-8">
              <h1 style={{ color: '#E1E0CC' }}>
                <WordsPullUp
                  text="Jeffrey"
                  showAsterisk
                  className="text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col items-start gap-5 sm:gap-6 lg:col-span-4 lg:pb-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-xs leading-[1.2] text-primary/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.9)] sm:text-sm md:text-base"
              >
                I am Jeffrey Liu, a software engineer at Google working on Shopping on Gemini,
                with past internships at LinkedIn and Amazon. Off the clock, I love coding random
                websites and shipping them into the world.
              </motion.p>

              <motion.a
                href="mailto:jeffrey.jl.liu@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 font-mono text-sm font-medium text-black transition-all hover:gap-3 sm:pl-6 sm:text-base"
              >
                Get in touch
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: '#E1E0CC' }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
