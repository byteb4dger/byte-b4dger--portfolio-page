import { useRef } from "react";
import "./parallaxGalaxy.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxCity = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-200%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%%"]);
  const yRocket = useTransform(scrollYProgress, [0, 1], ["70%", "-200%"]);
  const xRocket = useTransform(scrollYProgress, [0, 1], ["25%", "-100%"]);
  const xPlanet = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);
  const yPlanet = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: yText }}>Projekty</motion.h1>
      <motion.div className="galaxy"></motion.div>
      <motion.div
        className="rocket"
        style={{
          y: yRocket,
          x: xRocket,
        }}
      >
        <img src="/rocket.png" alt="" />
      </motion.div>
      <motion.div
        className="planet"
        style={{
          y: yPlanet,
          x: xPlanet,
        }}
      >
        <img src="/planet.png" alt="" />
      </motion.div>
      <motion.div style={{ x: yBg }} className="cosmos"></motion.div>
    </div>
  );
};

export default ParallaxCity;
