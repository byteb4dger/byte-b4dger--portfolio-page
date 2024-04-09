import { useRef } from "react";
import "./parallaxCity.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxCity = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-200%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yRocket = useTransform(scrollYProgress, [0, 1], ["70%", "-200%"]);
  const yMoon = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #02030e, #a8a8e0)",
      }}
    >
      <motion.h1 style={{ y: yText }}>Coś o mnie </motion.h1>
      <motion.div className="city"></motion.div>
      <motion.div
        className="rocket2"
        style={{
          y: yRocket,
        }}
      >
        <img src="/rocket2.png" alt="" />
      </motion.div>
      <motion.div
        className="moon"
        style={{
          y: yMoon,
          x: yBg,
        }}
      >
        <img src="/moon.png" alt="" />
      </motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default ParallaxCity;
