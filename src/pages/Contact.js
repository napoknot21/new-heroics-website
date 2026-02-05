// import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

export default function JoinUs() {
  //const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className='w-full items-center flex justify-center flex-wrap z-0'>
      <img
        className='fixed top-0 left-0 w-full -z-50'
        src='img/Monaco.jpg'
        alt='clocher'
      />
      <div className='z-40 text-gray-800 bg-white p-10 w-full mt-[200px] sm:mt-[500px] flex flex-row justify-center items-center flex-wrap sm:pb-32'>
      <div className='flex justify-center items-center p-6 w-full md:w-1/3 '>
       <div className='bg-mist mt-16 p-6 flex justify-center items-center flex-col py-32 rounded-lg w-full'>
        <h1 className='text-3xl font-bold'>{t('joinUs.greyCard.title')}</h1>
        <img
          className='w-1/3 m-10'
          src='img/heroics-logo-rgb-no-text.png'
          alt='logo'
        />
        <p>{t('joinUs.greyCard.text')}</p>
        </div>
      </div>

        <div className=' h-min'>
          <h2 className='m-10 text-3xl font-bold mb-6 text-center'>{t('joinUs.whiteCard.title')}</h2>
          <div className='max-w-xl mx-auto'>
            <p className='mb-6'>
            {t('joinUs.whiteCard.text1')}
            </p>
            <p className='mb-6'>
            {t('joinUs.whiteCard.text2')}
            </p>
            <p className='mb-6'>
            {t('joinUs.whiteCard.text3')}{' '}
              <a
                href='mailto:hr@heroics-capital.com'
                className='text-blue-600 hover:underline'
              >
                hr@heroics-capital.com
              </a>
              {t('joinUs.whiteCard.text4')}
            </p>
            <p className='mb-6'>
            {t('joinUs.whiteCard.text5')}{' '}
              <a
                href='https://www.linkedin.com/company/heroicscapital'
                className='text-blue-600 hover:underline'
              >
                {t('joinUs.whiteCard.text9')}
              </a>{' '}
              {t('joinUs.whiteCard.text6')}
            </p>
            <p className='mb-6'>
            {t('joinUs.whiteCard.text7')}
            </p>
            <p className='text-center'>
            {t('joinUs.whiteCard.text8')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
