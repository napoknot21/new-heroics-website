import React from 'react';
import {
  TitleSection,
  FeaturesSection,
  BenefitsSection,
} from '../components/AlternativeInvestments/OpenFunds';
import LetterAnimation from '../components/LetterAnimation';
import CircularAnimation from '../components/AlternativeInvestments/CircularAnimation';
import CardsStrategies from '../components/AlternativeInvestments/CardsStrategies';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

function OpenHedgeFunds() {
  const { t } = useTranslation(); // Initialize the translation hook
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full bg-white max-w-full overflow-x-hidden'>
      <div className='items-center text-center text-3xl pt-10 text-deepblue'>
        <h1>{t('alternativeInvestment.openHedge.title')}</h1>
      </div>
      <div className='flex flex-row flex-wrap '>
        <div
          className={`${screenWidth < 1105 ? 'w-full' : 'w-1/2'} py-${
            screenWidth < 1105 ? '0' : '12'
          } text-deepblue px-16`}
        >
          <TitleSection screenWidth={screenWidth} />
        </div>
        <div
          className={`${
            screenWidth < 1105 ? 'w-full' : 'w-1/2'
          } text-deepblue items-center flex flex-col justify-center px-${
            screenWidth < 1105 ? '0' : '16'
          }`}
        >
          <FeaturesSection />
          <BenefitsSection />
        </div>
      </div>
    </div>
  );
}

function DedicatedFunds() {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className='w-full'>
      <div className='z-40 text-gray-800 md:p-10 sm:p-0 bg-mist flex flex-row justify-center items-center flex-wrap'>
        <div className='m-10 sm:w-3/4 lg:w-1/3 rounded-full overflow-hidden '>
          <video
            src="gifs/city-skyscrapers-at-night-2023-11-27-05-12-41-utc.mp4"
            className='w-full h-full object-cover'
            autoPlay
            loop
            controls={false}
          ></video>
        </div>

        <div className='lg:w-1/2 p-0 sm:w-full'>
          <div className=' flex justify-center items-center text-3xl m-10'>
            <p>{t('alternativeInvestment.dedicatedFunds.dedicatedFundsTitle')}</p>
          </div>
          <div>
            <p className='m-10'>
            {t('alternativeInvestment.dedicatedFunds.dedicatedFundsText')}
            </p>
            <p className='m-10'>
              <strong>{t('alternativeInvestment.dedicatedFunds.dedicatedFundsQuestion')}</strong>
              <ul className='p-2'>
                <li>
                  <span className='italic text-blue-500'>
                    <LetterAnimation text={t('alternativeInvestment.dedicatedFunds.dedicatedFundsReasonTitle1')} />
                  </span>
                  {t('alternativeInvestment.dedicatedFunds.dedicatedFundsReasonText1')}
                </li>
                <li>
                  <span className='italic text-blue-500'>
                    <LetterAnimation text={t('alternativeInvestment.dedicatedFunds.dedicatedFundsReasonTitle2')} />
                  </span>
                  {t('alternativeInvestment.dedicatedFunds.dedicatedFundsReasonText2')}
                </li>
                <li>
                  <span className='italic text-blue-500'>
                    <LetterAnimation text= {t('alternativeInvestment.dedicatedFunds.dedicatedFundsReasonTitle3')}/>
                  </span>
                  {t('alternativeInvestment.dedicatedFunds.dedicatedFundsReasonText3')}
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlternativeInvestment() {
  const { t } = useTranslation(); // Initialize the translation hook
  const texts = [
    t('alternativeInvestment.stratAndAssetClass.text1'),
    t('alternativeInvestment.stratAndAssetClass.text2'),
    t('alternativeInvestment.stratAndAssetClass.text3'),
    t('alternativeInvestment.stratAndAssetClass.text4'),
    t('alternativeInvestment.stratAndAssetClass.text5'),
  ];
  const centerLabel = t('alternativeInvestment.stratAndAssetClass.centerLabel');
  const colors = ['bluehour', 'deepblue', 'bluehour', 'deepblue', 'bluehour'];
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
    <div className='items-center flex justify-center flex-wrap z-0 w-full'>
      <img
        className='fixed top-0 left-0 w-full -z-50'
        src='img/street.jpg'
        alt='street'
      />

      <div className='m-64'>
        <img
          className='top-32 left-0 w-full -z-40 filter grayscale'
          src='img/heroics-logo-rgb blanc.png'
          alt='logo'
        />
      </div>
      <OpenHedgeFunds />
      <DedicatedFunds />
      <div className='w-full '>
        <div className='z-40 text-gray-800 md:p-10 sm:p-0 bg-white p-10 flex flex-row justify-center items-center flex-wrap'>
          <div className='w-full flex justify-center items-center text-3xl m-10'>
            <p>{t('alternativeInvestment.stratAndAssetClass.stratAndAssetClassTitle')}
            </p>
          </div>

          <div
            className={` ${
              screenWidth > 1700 ? 'w-1/2' : 'w-full'
            } py-32 flex justify-center mb-16`}
          >
            <CircularAnimation
              texts={texts}
              centerLabel={centerLabel}
              colors={colors}
              size={screenWidth < 630 ? 'small' : 'default'} // Smaller size for mobile
            />

          </div>

          <CardsStrategies screenWidth={screenWidth} />
        </div>{' '}
      </div>
    </div>
  );
}

export default AlternativeInvestment;
