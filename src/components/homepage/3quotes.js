import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // Import the translation hook

export default function Quotes({ py }) {
  const { t } = useTranslation(); // Initialize the translation hook

  const quotes = [
    {
      title: t('quotes.vision.title'), // Use translation keys
      text: t('quotes.vision.text'),
    },
    {
      title: t('quotes.mission.title'),
      text: t('quotes.mission.text'),
    },
    {
      title: t('quotes.ambition.title'),
      text: t('quotes.ambition.text'),
    },
  ];

  return (
    <div className={`flex justify-center flex-wrap flex-col ${py}`}>
      {quotes.map((quote, index) => (
        <QuoteItem key={index} quote={quote} index={index} />
      ))}
    </div>
  );
}

const QuoteItem = ({ quote, index }) => {
  const [ref, inView] = useInView({ threshold: 0.5 }); // Change threshold as per your requirement

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 1 }} // Initial animation state
      animate={inView ? { opacity: 1, scale: 1 } : {}} // Animation when component is in view
      transition={{ duration: 2, delay: index * 0.2 }} // Animation duration and delay
      className='w-full'
    >
      <div className='p-4 pr-10 rounded-lg'>
        <h1 className='text-4xl font-bold mb-2 italic'>"{quote.title}"</h1>
        <p className='text-sm'>{quote.text}</p>
      </div>
    </motion.div>
  );
};
