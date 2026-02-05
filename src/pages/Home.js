import React from 'react';
import '../css/homepage_animations.css';
//import Localisation from '../components/homepage/Localisation';
import Quotes from '../components/homepage/3quotes';
import VideoPlayer from '../components/homepage/VideoPlayer';
import WhoAreWe from '../components/homepage/WhoAreWe';
import InvestmentSolutions from '../components/homepage/InvestmentSolutions';
import { useTranslation } from 'react-i18next'; // Import the translation hook


function LogoAndQuotes() {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className={`text-deepblue bg-white relative z-0 flex w-full`}>
      <div className='flex w-full border-t border-gray-200 flex-wrap justify-evenly lg:p-32'>
        <div className='w-[500px] flex flex-col justify-center items-center '>
          <div className='p-5 flex justify-center md:mr-32'>
            <img
              src='img/heroics-logo-rgb.png'
              alt='logo'
              className='h-16'
            ></img>
          </div>

          <div
            id='animation_body'
            className=' justify-center items-center h-32 text-center'
          >
            <div id='escape' className='lg:text-3xl md:text-2xl sm:text-xl text-center'>
            {t('homepage.logo_animation.line1')}
            </div>
            <div id='experiences' className='lg:text-3xl md:text-2xl sm:text-xl text-center'>
              <span className='text-center'> {t('homepage.logo_animation.line2')}</span>
            </div>
          </div>
        </div>

        <div className='lg:w-1/3 flex flex-col justify-center items-center p-12'>
          <Quotes py='py-2' />
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className='w-full text-white  max-w-full overflow-x-hidden'>
      <VideoPlayer />
      <LogoAndQuotes />
      <InvestmentSolutions />
      <WhoAreWe />
      {/* <div className='text-mist bg-deepblue relative z-40 p-20 flex justify-between items-center flex-wrap font-light'>
        <div className=' md:w-2/5 px-4 '>
          <h2 className='text-3xl font-bold mb-4 text-white'>Who Are We?</h2>
          <p className='text-white mb-4'>
            Welcome to{' '}
            <span className='text-blue-500 font-bold'>Heroics Capital</span>,
            the investment firm that redefine smart asset management in
            Luxembourg since 2023. Our mission is clear: to foster capital
            growth for our investors through an innovative management approach
            that transcends market norms.
          </p>
          <p className='text-white mb-4'>
            At Heroics, we envision the future of{' '}
            <span className='text-blue-500 font-bold'>
              discretionary management & advisory services 3.0
            </span>
            , where digital tools drive efficiency and reshape traditional
            paradigms. Join our exclusive partner club—a community of{' '}
            <span className='text-blue-500 font-bold'>
              visionary entrepreneurs
            </span>{' '}
            committed to mutual enrichment and sustainable growth. Our
            commitment to investors is not just about managing assets; it's
            about{' '}
            <span className='text-blue-500 font-bold'>
              breathing life into our strategies
            </span>
            , passionately pursuing results and continuous improvement.
          </p>
          <p className='text-white mb-4'>
            Like our investors, we{' '}
            <span className='text-blue-500 font-bold'>embrace curiosity</span>,
            track trends, adapt to new landscapes, innovate collaboratively, and
            thrive on learning and evolution.
          </p>
        </div>

        <div className=' md:w-1/2 pl-4'>
          <div className='bg-lessdeepblue  p-6 rounded-lg shadow-lg mb-2'>
            <h2 className='text-3xl font-bold mb-4 text-white'>
              Investment Solutions
            </h2>
            <p className='text-white mb-4'>
              Heroics Capital offers a range of products and services to meet
              the needs of its professional and institutional clients:
            </p>
            <ul className='list-disc pl-6 text-white'>
              <li>Alternative Investment Funds</li>
              <li>Dedicated Funds</li>
              <li>Managed Certificates</li>
              <li>Discretionary Portfolio Management</li>
              <li>Tailored Advisory Management</li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* <div className='text-deepblue bg-white relative z-40 p-20 '>
        <Localisation />
      </div> */}
    </div>
  );
}

export default HomePage;
