import '../../css/aboutus.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

function Card({ title, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`hover:scale-105 card m-5 w-[250px] h-[150px] flex justify-center rounded-lg transition-transform duration-200 ${
        isFlipped ? 'flipped' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className='card-inner w-full text-white bg-deepblue rounded-lg '>
        <div className='card-front flex justify-center text-center'>
          <div className='text-center text-xl flex justify-center items-center'>
            <p>{title}</p>
          </div>
        </div>
        <div className='card-back px-8 bg-blue-500 flex flex-col justify-center rounded-lg items-center'>
          <div className='text-center flex justify-center w-full text-lg py-2'>
            <p>{title}</p>
          </div>
          <div className='text-center text-sm flex justify-center w-full'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardsStrategies({ screenWidth }) {
  const { t } = useTranslation(); // Initialize the translation hook

  const cards = {
    [t('alternativeInvestment.cardStrategies.card1Title')]: t('alternativeInvestment.cardStrategies.card1Text'),
    [t('alternativeInvestment.cardStrategies.card2Title')]: t('alternativeInvestment.cardStrategies.card2Text'),
    [t('alternativeInvestment.cardStrategies.card3Title')]: t('alternativeInvestment.cardStrategies.card3Text'),
    [t('alternativeInvestment.cardStrategies.card4Title')]: t('alternativeInvestment.cardStrategies.card4Text'),
  };
  console.log(screenWidth);

  return (
    <div
      className={`${
        screenWidth > 1700 ? 'w-1/3' : 'w-full'
      } flex flex-row flex-wrap justify-center`}
    >
      {Object.entries(cards).map(([title, description]) => (
        <Card key={title} title={title} description={description} />
      ))}
    </div>
  );
}
