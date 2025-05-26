import { useEffect, useState } from "react";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
}

const ParallaxBackground = ({ children }: ParallaxBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Floating circles */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-300/30 to-rose-300/30 blur-3xl"
          style={{
            top: "10%",
            left: "5%",
            transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-rose-300/30 to-purple-300/30 blur-3xl"
          style={{
            top: "40%",
            right: "10%",
            transform: `translate3d(0, ${scrollY * -0.03}px, 0)`,
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/20 to-rose-400/20 blur-3xl"
          style={{
            bottom: "15%",
            left: "20%",
            transform: `translate3d(0, ${scrollY * -0.02}px, 0)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxBackground;
