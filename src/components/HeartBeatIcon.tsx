import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface HeartBeatIconProps {
  size?: number;
  className?: string;
  color?: string;
  interval?: number;
}

const HeartBeatIcon = ({
  size = 24,
  className = "",
  color = "text-rose-600",
  interval = 2000,
}: HeartBeatIconProps) => {
  const [beat, setBeat] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setBeat(true);
      setTimeout(() => setBeat(false), 300);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <Heart
      className={`transition-transform duration-300 ${color} ${className} ${beat ? "scale-125" : "scale-100"}`}
      size={size}
    />
  );
};

export default HeartBeatIcon;
