import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

const BODY_TEXT =
  'By day, I am a software engineer at Google working on Shopping on Gemini. Before that, I interned at LinkedIn and Amazon. By night, I love coding random websites — small ideas I ship into real, live products, from stock alert engines to leaderboards to a neighborhood market storefront.';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

function AnimatedLetter({ char, index, totalChars, progress }: AnimatedLetterProps) {
  const charProgress = index / totalChars;
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1]);

  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = BODY_TEXT.split('');

  return (
    <section id="about" className="bg-black px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-16 text-center sm:px-10 sm:py-20 md:rounded-[2rem] md:px-16 md:py-28">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs">
          My story
        </span>

        <h2
          className="mx-auto mt-8 max-w-3xl text-3xl leading-[0.95] sm:mt-10 sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          style={{ color: '#E1E0CC' }}
        >
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Jeffrey Liu,', className: 'font-normal' },
              { text: 'a software engineer.', className: 'italic font-serif' },
              {
                text: 'I build for the web — from trading tools to neighborhood storefronts.',
                className: 'font-normal',
              },
            ]}
          />
        </h2>

        <p
          ref={paragraphRef}
          className="mx-auto mt-10 max-w-2xl font-mono text-xs text-[#DEDBC8] sm:mt-14 sm:text-sm md:text-base"
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              index={i}
              totalChars={chars.length}
              progress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
