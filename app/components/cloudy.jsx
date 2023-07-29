import React from "react";
import { useSpring, animated } from "react-spring";

export const Cloudy = () => {
  const animProps = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(100%)" },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  });

  return (
    <animated.div className="text-white" style={animProps}>
      <img src="/images/clouds.png" alt="Cloud" />
    </animated.div>
  );
};

export default Cloudy;
