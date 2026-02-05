import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const getRandomDuration = (min, max) => {
  return Math.random() * (max - min) + min;
};


function Card({ title, body, imgPath, link }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className='w-[300px] m-2'
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: getRandomDuration(0.8, 1.2),
        ease: 'easeOut',
      }}
    >
      <a href={link}>
        <div class='py-4 rounded-lg transition-colors duration-500 hover:bg-waylessdeepblue shadow-3xl bg-lessdeepblue'>
          <div className='w-full flex justify-center rounded-full '>
            <img
              className='h-[80px] w-[80px] rounded-full border border-white border-3 bg-white p-2'
              src={imgPath}
              alt={title}
            />
          </div>
          <div className='flex flex-col justify-between h-[200px]'>
            <div className=' flex-none'>
              <h2 className='text-lg font-semibold mb-2 p-2 text-white justify-center text-center'>
                {title}
              </h2>
            </div>
            <div className='flex-auto p-2 flex justify-center items-end text-center'>
              <div>
                <p className='text-white mt-4'>{body}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function InvestmentSolutions() {
  const { t } = useTranslation(); // Initialize the translation hook
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='bg-deepblue relative z-0 '>
        <div ref={ref}>
          <motion.div
            initial={{ y: -200, opacity: 1 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='w-full'
          >
            <div
              className={`font-bold md:text-6xl justify-center flex text-center  text-white p-32 ${
                screenWidth < 1054 ? 'py-4 text-4xl' : 'py-32'
              }`}
            >
              <h1>{t('quotes.investment_solutions.title')}</h1>
            </div>
          </motion.div>
        </div>

        <div className='CARDS p-10 flex justify-center flex-wrap'>
          <Card
            title={t('quotes.investment_solutions.solutions1')}
            body={t('quotes.investment_solutions.solutions1body')}
            imgPath='img/alternative.png'
            link='/alternative-investment'
          />
          <Card
            title={t('quotes.investment_solutions.solutions2')}
            body={t('quotes.investment_solutions.solutions2body')}
            imgPath='img/portfolio.png'
            link='/family-partners'
          />
          <Card
            title={t('quotes.investment_solutions.solutions3')}
            body={t('quotes.investment_solutions.solutions3body')}
            imgPath='img/loan.png'
            link='/family-partners'
          />

          <Card
            title={t('quotes.investment_solutions.solutions4')}
            body={t('quotes.investment_solutions.solutions4body')}
            imgPath='img/customize.png'
            link='/family-partners'
          />
          <Card
            title={t('quotes.investment_solutions.solutions5')}
            body={t('quotes.investment_solutions.solutions5body')}
            imgPath='img/certificate.png'
            link='/family-partners'
          />
        </div>
      </div>
    </>
  );
}
