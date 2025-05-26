import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Delay the animation if needed
    const delayTimeout = setTimeout(() => {
      // Calculate the increment per frame
      const totalFrames = 60 * (duration / 1000); // 60fps
      const increment = end / totalFrames;

      let currentCount = 0;
      let frame = 0;

      const counter = setInterval(() => {
        currentCount = Math.min(currentCount + increment, end);
        setCount(Math.floor(currentCount));
        frame++;

        if (frame >= totalFrames) {
          clearInterval(counter);
          setCount(end); // Ensure we end exactly at the target number
        }
      }, 1000 / 60); // 60fps

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [end, duration, delay]);

  return (
    <span className="font-bold">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
