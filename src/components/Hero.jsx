import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { heroAnimations } from '../utils/animations';
import Particles from './canvas/Particles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Background with Particles */}
      <div className="absolute inset-0 z-0">
        <Particles count={2000} color="#915eff" />
      </div>

      {/* Main Content */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            variants={heroAnimations.floatingElement}
            animate="animate"
            className="w-5 h-5 rounded-full bg-[#915eff]"
          />
          <motion.div
            variants={heroAnimations.floatingElement}
            animate="animate"
            className="w-1 sm:h-80 h-40 violet-gradient"
          />
        </div>

        <div>
          <motion.h1
            variants={heroAnimations.title}
            initial="initial"
            animate="animate"
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, Ich bin{" "}
            <motion.span
              variants={heroAnimations.highlight}
              initial="initial"
              animate="animate"
              className="text-[#915eff]"
            >
              Entwickler
            </motion.span>
          </motion.h1>
          <motion.p
            variants={heroAnimations.fadeInScale}
            initial="initial"
            animate="animate"
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            Ich entwickle 3D Visuals, User{" "}
            <br className="sm:block hidden" />
            Interfaces und Web Applikationen
          </motion.p>
        </div>
      </div>

      {/* 3D Computer Model */}
      <div className="absolute inset-0 z-20">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30">
        <a href="#about">
          <motion.div
            variants={heroAnimations.floatingElement}
            animate="animate"
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                },
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 