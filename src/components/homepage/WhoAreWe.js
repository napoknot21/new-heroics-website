import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

function Card({
  title,
  body,
  imgPath,
  direction = 'left',
  width = '700',
  small,
}) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const cardStyle = {
    width: `${width}px`,
  };

  const initial = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    up: { y: 100, opacity: 0 },
    down: { y: -100, opacity: 0 },
  };

  const animate = {
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
  };

  // Determine the icon size based on screen width
  const iconSize = small ? 80 : 250; // Adjust 16px as per your requirement
  console.log(iconSize);

  return (
    <div
      ref={ref}
      className={`flex items-center rounded-lg pr-0 bg-blue  ${
        small ? 'flex-col py-2 ' : 'py-10'
      }`}
      style={cardStyle}
    >
      <motion.img
        src={imgPath}
        alt={title}
        initial={initial[direction]}
        animate={inView ? animate[direction] : {}}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className={`w-[${iconSize}px] h-[${iconSize}px] rounded-3xl ${
          small ? 'm-1' : 'm-10'
        }`}
      />
      <motion.div
        initial={initial[direction]}
        animate={inView ? animate[direction] : {}}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        className='flex flex-col justify-center'
      >
        <h2
          className={`font-bold mb-2 text-deepblue ${
            small ? 'text-md' : 'text-2xl'
          }`}
        >
          {title}
        </h2>
        <p className={`italic text-deepblue ${small ? 'text-sm' : 'text-xl'}`}>
          {body}
        </p>
      </motion.div>
    </div>
  );
}

export default function WhoAreWe() {
  const { t } = useTranslation(); // Initialize the translation hook

  const [small, setSmall] = useState(window.innerWidth < 1360);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSmall(width < 1360);
    };

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Initial check for screen size on component mount
    setSmall(window.innerWidth < 1360);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency
  return (
    <>
      <div className='bg-white relative z-0 '>
        <div className='font-bold text-7xl p-12 text-center justify-center flex text-deepblue'>
        {t('whoarewe.title')}
        </div>
        <div className='CARDS p-10'>
          <div className='flex flex-row flex-wrap'>
            <div
              className={`flex justify-center ${small ? 'w-full' : 'w-1/2'}`}
            >
              <Card
                title={t('whoarewe.pres1')}
                body={t('whoarewe.pres1body')}
                imgPath='img/handshake.png'
                small={small}
              />
            </div>
            <div
              className={`flex  justify-center ${
                small ? 'w-full' : 'w-1/2 pt-32 '
              }`}
            >
              <Card
                title={t('whoarewe.pres2')}
                body={t('whoarewe.pres2body')}
                imgPath='img/target.png'
                direction='right'
                small={small}
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <Card
              title={t('whoarewe.pres3')}
              body={t('whoarewe.pres3body')}
              imgPath='img/enlargement.png'
              direction='up'
              width='850'
              small={small}
            />
          </div>
          <div className='flex flex-row flex-wrap'>
            <div
              className={`flex  justify-center ${
                small ? 'w-full' : 'w-1/2 pt-32'
              }`}
            >
              <Card
                title={t('whoarewe.pres5')}
                body={t('whoarewe.pres5body')}
                imgPath='img/commitment.png'
                direction='left'
                small={small}

                //width={800}
              />
            </div>
            <div
              className={`flex justify-center ${
                small ? 'w-full' : 'w-1/2 mb-32'
              }`}
            >
              <Card
                title={t('whoarewe.pres4')}
                body={t('whoarewe.pres4body')}
                imgPath='img/group.png'
                direction='right'
                small={small}
              />
            </div>
          </div>
          <div className='flex justify-center '>
            <Card
              title={t('whoarewe.pres6')}
              body={t('whoarewe.pres6body')}
              imgPath='img/curiosity.png'
              direction='up'
              width='800'
              small={small}
            />
          </div>
        </div>
      </div>
    </>
  );
}
