import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import profileImage from '../assets/profile.jpg';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-start">
        {/* Text Content Section */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="xl:w-2/3 w-full flex flex-col justify-start"
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{t('about.intro')}</p>
            <h2 className={styles.sectionHeadText}>{t('about.title')}</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {t('about.description')}
          </motion.p>

          <motion.div
            variants={fadeIn("", "", 0.2, 1)}
            className="mt-4"
          >
            <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
              {t('about.services.title')}
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-secondary text-[17px]">
              {t('about.services.list').map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                index={index} 
                title={t(`services.${service.title}`)}
                icon={service.icon}
              />
            ))}
          </div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="xl:w-1/3 w-full flex justify-center items-start xl:sticky xl:top-32"
        >
          <div className="w-full max-w-[400px] xl:max-w-none">
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-[#915eff] to-[#915eff]/50 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
              
              {/* Main image container */}
              <div className="relative bg-tertiary rounded-2xl p-2">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={profileImage}
                    alt={t('about.profileAlt')}
                    className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-[1.01]"
                    style={{
                      maxHeight: '550px',
                      objectPosition: 'center 10%'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about"); 