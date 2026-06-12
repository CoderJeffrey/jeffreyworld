import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

const CARD_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

interface FeatureCardData {
  number: string;
  title: string;
  icon: string;
  url: string;
  items: string[];
}

const FEATURE_CARDS: FeatureCardData[] = [
  {
    number: '01',
    title: 'IndicatorHub.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    url: 'https://indicatorhub.dev/',
    items: [
      'Watches your tickers against technical conditions',
      'RSI, MACD, Bollinger and more, with AND/OR logic',
      'Ranked pre-market digest emailed at 6:30 ET daily',
      'Free for up to 50 tickers',
    ],
  },
  {
    number: '02',
    title: 'FinX Leaderboard.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    url: 'https://finx-leaderboard.com/',
    items: [
      'Tracks influencer stock calls on X',
      'Ranks accounts by what happened after each post',
      'Live win rates and verified pick performance',
    ],
  },
  {
    number: '03',
    title: 'Santo Market.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    url: 'https://santomarket.vercel.app/',
    items: [
      'Site for a third-generation Japantown market and deli',
      'Daily poke bowls, plate lunches and online ordering',
      'Serving San Jose since 1946',
    ],
  },
];

const cardTransition = (index: number) => ({
  duration: 0.6,
  delay: index * 0.15,
  ease: [0.22, 1, 0.36, 1] as const,
});

export function Features() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative min-h-screen bg-black px-4 py-20 sm:px-6 md:px-8 md:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="mx-auto mb-12 max-w-2xl text-center text-xl font-normal sm:text-2xl md:mb-20 md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Random websites I could not stop building.',
                className: 'text-[#E1E0CC]',
              },
              { text: 'Real products. Live on the internet.', className: 'text-gray-500' },
            ]}
          />
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={cardTransition(0)}
            className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[420px] lg:h-auto"
          >
            <video
              src={CARD_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-5 sm:p-6">
              <p className="text-lg sm:text-xl" style={{ color: '#E1E0CC' }}>
                I love coding random websites.
              </p>
            </div>
          </motion.div>

          {FEATURE_CARDS.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={cardTransition(i + 1)}
              className="flex flex-col rounded-2xl bg-[#212121] p-5 sm:p-6"
            >
              <img
                src={card.icon}
                alt=""
                className="h-10 w-10 rounded object-cover sm:h-12 sm:w-12"
              />

              <div className="mt-5 flex items-start justify-between gap-2 sm:mt-6">
                <h3 className="text-lg sm:text-xl" style={{ color: '#E1E0CC' }}>
                  {card.title}
                </h3>
                <span className="text-xs text-gray-500">({card.number})</span>
              </div>

              <ul className="mt-4 space-y-2.5 sm:mt-5">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-xs leading-snug text-gray-400 sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-xs text-primary sm:text-sm"
              >
                Visit site
                <ArrowRight className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
