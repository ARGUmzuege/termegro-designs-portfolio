import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { heroAnimations } from '../utils/animations';
import Particles from './canvas/Particles';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background with Particles */}
      <div className="absolute inset-0 z-[1]">
        <Particles count={2000} color="#915eff" />
      </div>

      {/* 3D Computer Model */}
      <div className="absolute inset-0 z-[5]">
        <ComputersCanvas />
      </div>

      {/* Main Content */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-[15] pointer-events-none select-none`}>
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
            {t('hero.greeting')}{" "}
            <motion.span
              variants={heroAnimations.highlight}
              initial="initial"
              animate="animate"
              className="text-[#915eff]"
            >
              {t('hero.role')}
            </motion.span>
          </motion.h1>
          <motion.p
            variants={heroAnimations.fadeInScale}
            initial="initial"
            animate="animate"
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            {t('hero.description')}
          </motion.p>
          <motion.p
            variants={heroAnimations.fadeInScale}
            initial="initial"
            animate="animate"
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {t('hero.subDescription')}
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-[25] pointer-events-none">
        <a href="#about" className="pointer-events-auto">
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