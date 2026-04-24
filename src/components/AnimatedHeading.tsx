import { useEffect, useState, type CSSProperties } from 'react';

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  charDelay?: number;
};

export default function AnimatedHeading({
  text,
  className,
  style,
  delay = 0,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(id);
  }, [delay]);

  const lines = text.split('\n');

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex flex-wrap justify-center">
          {Array.from(line).map((char, charIndex) => {
            const transitionDelay =
              lineIndex * line.length * charDelay + charIndex * charDelay;
            return (
              <span
                key={charIndex}
                className="inline-block transition-all duration-500"
                style={{
                  opacity: started ? 1 : 0,
                  transform: started ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDelay: `${transitionDelay}ms`,
                }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
}
