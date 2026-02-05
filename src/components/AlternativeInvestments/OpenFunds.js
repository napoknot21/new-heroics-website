import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LetterAnimation from '../../components/LetterAnimation';
import { useTranslation } from 'react-i18next'; // Import the translation hook

export const TitleSection = ({ screenWidth }) => {
  const { t } = useTranslation(); // Initialize the translation hook

  const [refUp, inViewUp] = useInView({ threshold: 0.1 });

  // Determine text size based on screenWidth
  const textSizeClass = screenWidth < 1105 ? 'text-xl' : 'text-8xl';

  return (
    <motion.div
      className={`w-full h-full text-center italic flex items-center justify-center ${
        screenWidth > 1105 ? 'py-16 pl-10' : ''
      } text-deepblue ${textSizeClass}`}
      ref={refUp}
      initial='hidden'
      animate={inViewUp ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <h1>{t('alternativeInvestment.openHedge.titleSection')}</h1>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [refUp, inVewUp] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      className='text-deepblue '
      ref={refUp}
      initial='hidden'
      animate={inVewUp ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <ul className='list-disc pl-5 space-y-2 pt-4 m-10'>
        <li className='text-gray-700'>
          <strong className='text-blue-500'>
            <LetterAnimation text={t('alternativeInvestment.openHedge.letterAnimation1Title')} />
          </strong>
          {t('alternativeInvestment.openHedge.letterAnimation1Text')}
        </li>
      </ul>
      <ul className='list-disc pl-5 space-y-2 pt-4 m-10'>
        <li className='text-gray-700'>
          <strong className='text-blue-500'>
            <LetterAnimation text={t('alternativeInvestment.openHedge.letterAnimation2Title')} />
          </strong>
          {t('alternativeInvestment.openHedge.letterAnimation2Text')}
        </li>
      </ul>
    </motion.div>
  );
};

export const BenefitsSection = () => {

  const { t } = useTranslation(); // Initialize the translation hook

  const [refUp1, inViewUp1] = useInView({ threshold: 0.1 });
  const [refUp2, inViewUp2] = useInView({ threshold: 0.1 });

  const animationDuration1 = 0.8;
  const animationDuration2 = 0.6;

  return (
    <>
      {/* First motion div */}
      <motion.div
        ref={refUp1}
        initial='hidden'
        animate={inViewUp1 ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: animationDuration1, ease: 'easeInOut' }}
        className='m-10'
      >
        <strong>{t('alternativeInvestment.openHedge.benefitsTitle')}</strong>
        <ul className='list-disc pl-5 space-y-2 pt-3'>
          <li>
            <span className='font-ppmori italic text-blue-500'>{t('alternativeInvestment.openHedge.benefit1Title')}</span>{' '}
            {t('alternativeInvestment.openHedge.benefit1Text')}
          </li>
          <li>
            <span className='font-ppmori italic text-blue-500'>
            {t('alternativeInvestment.openHedge.benefit2Title')}
            </span>{' '}
            {t('alternativeInvestment.openHedge.benefit2Text')}
          </li>
          <li>
            <span className='font-ppmori italic text-blue-500'>
            {t('alternativeInvestment.openHedge.benefit3Title')}
            </span>{' '}
            {t('alternativeInvestment.openHedge.benefit3Text')}
          </li>
        </ul>
      </motion.div>

      {/* Third motion div */}
      <motion.div
        ref={refUp2}
        initial='hidden'
        animate={inViewUp2 ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: animationDuration2, ease: 'easeInOut' }}
        className='m-10'
      >
        <strong>{t('alternativeInvestment.openHedge.extractionTitle')}</strong>
        <ul className='list-disc pl-5 space-y-2 pt-3'>
          <li>
          {t('alternativeInvestment.openHedge.extractionText')}
          </li>
        </ul>
      </motion.div>
    </>
  );
};
