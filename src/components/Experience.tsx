import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

interface ExperienceEntry {
  company: string;
  logo: string;
  title: string;
  location: string;
  dates: string;
  description: string;
}

// Add/remove roles here — newest first. Use 'Present' as the end date for a current role.
const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Google',
    logo: '/logos/google.png',
    title: 'Software Engineer',
    location: 'Mountain View, CA',
    dates: 'Feb 2025 – Present',
    description: 'Shopping on Gemini',
  },
  {
    company: 'LinkedIn',
    logo: '/logos/linkedin.png',
    title: 'Software Engineer Intern',
    location: 'Sunnyvale, CA',
    dates: 'May 2024 – Aug 2024',
    description: 'Backend Infra',
  },
  {
    company: 'Amazon',
    logo: '/logos/amazon.png',
    title: 'Software Engineer Intern',
    location: 'East Palo Alto, CA',
    dates: 'May 2023 – Aug 2023',
    description: 'AWS OpenSearch (Open source version of ElasticSearch)',
  },
  {
    company: 'Stanford AI Lab (SAIL)',
    logo: '/logos/sail.png',
    title: 'AI Researcher',
    location: 'Palo Alto, CA',
    dates: 'Feb 2023 – May 2023',
    description: 'Research on frontier large language models',
  },
];

const itemTransition = (index: number) => ({
  duration: 0.6,
  delay: index * 0.15,
  ease: [0.22, 1, 0.36, 1] as const,
});

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const isInView = useInView(listRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative bg-black px-4 py-20 sm:px-6 md:px-8 md:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-3xl">
        <h2 className="mx-auto mb-12 max-w-2xl text-center text-xl font-normal sm:text-2xl md:mb-20 md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Where I have worked.',
                className: 'font-display font-medium text-[#E1E0CC]',
              },
              {
                text: 'The road so far.',
                className: 'font-display italic text-gray-500',
              },
            ]}
          />
        </h2>

        <ol ref={listRef} className="relative space-y-8 sm:space-y-10">
          {/* vertical timeline line, centered under the dots */}
          <div className="absolute bottom-7 left-[5px] top-7 w-px bg-[#212121] sm:left-[7px]" />

          {EXPERIENCE.map((entry, i) => (
            <motion.li
              key={`${entry.company}-${entry.dates}`}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={itemTransition(i)}
              className="relative pl-8 sm:pl-12"
            >
              <span className="absolute left-0 top-7 h-[11px] w-[11px] rounded-full bg-primary ring-4 ring-black sm:h-[15px] sm:w-[15px]" />

              <div className="rounded-2xl bg-[#212121] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                    <img
                      src={entry.logo}
                      alt=""
                      className="h-5 w-5 shrink-0 rounded-[5px] object-contain sm:h-6 sm:w-6"
                    />
                    <h3 className="font-mono text-lg sm:text-xl" style={{ color: '#E1E0CC' }}>
                      {entry.company}
                    </h3>
                  </div>
                  <span className="pt-1 text-right font-mono text-xs text-gray-500">
                    {entry.location}
                  </span>
                </div>

                <p className="mt-1 font-mono text-xs text-primary sm:text-sm">{entry.title}</p>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500 sm:text-xs">
                  {entry.dates}
                </p>

                <p className="mt-4 font-mono text-xs leading-snug text-gray-400 sm:text-sm">
                  {entry.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
