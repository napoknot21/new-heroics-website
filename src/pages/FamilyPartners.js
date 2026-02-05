import React from 'react';
import '../css/familypartners.css';
import { useTranslation } from 'react-i18next'; // Import the translation hook

import { useState, useRef, useEffect } from 'react';

const Component = ({ title, img, text, elements }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (expanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [expanded]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='my-16'>
      <div className='flex items-center justify-between border-b-[1px] hover:border-b-[3px] border-gray-500 hover:border-blue-500 transform transition-border cursor-pointer w-full'>
        <h3 className='text-2xl text-left w-full' onClick={toggleExpanded}>
          {title}
        </h3>
        <button
          onClick={toggleExpanded}
          className='flex items-center justify-center px-2 py-1 w-auto'
        >
          <img src='/img/plus.png' alt='Expand' className='w-8 h-8 mr-2' />
        </button>
      </div>
      <div
        ref={contentRef}
        className='overflow-hidden transition-max-height duration-500 ease-in-out w-full'
        style={{ maxHeight }}
      >
        <div className='flex flex-col md:flex-row justify-center pt-10 w-full'>
          {img && <img src={img} alt='img' className='w-full md:w-1/2 mb-4 md:mb-0 md:mr-4' />}
          <div className='w-full'>
            <p>{text}</p>
            <ul className='list-disc list-inside mt-2'>
              {elements.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function FamilyPartners() {
  const { t } = useTranslation(); // Initialize the translation hook

  const data_family_partners = [
    {
      title: [t('familyPartners.title1')],
      text:  [t('familyPartners.text1')],
      elements: [
        {
          title: [t('familyPartners.elements1.title1')],
          text: [t('familyPartners.elements1.text1')],
        },
        {
          title: [t('familyPartners.elements1.title2')],
          text: [t('familyPartners.elements1.text2')],
        },
        {
          title: [t('familyPartners.elements1.title3')],
          text: [t('familyPartners.elements1.text3')],
        },
      ],
    },
    {
      title:  [t('familyPartners.title2')],
      text: [t('familyPartners.text2')],
      elements: [
        {
          title: [t('familyPartners.elements2.title1')],
          text: [t('familyPartners.elements2.text1')],
        },
        {
          title: [t('familyPartners.elements2.title2')],
          text: [t('familyPartners.elements2.text2')],
        },
        {
          title: [t('familyPartners.elements2.title3')],
          text: [t('familyPartners.elements2.text3')],
        },
      ],
    },
    {
      title:  [t('familyPartners.title3')],
      img: './img/risks.png',
      text: [t('familyPartners.text3')],
      elements: [
        {
          title: [t('familyPartners.elements3.title1')],
          text: [t('familyPartners.elements3.text1')],
        },
        {
          title: [t('familyPartners.elements3.title2')],
          text: [t('familyPartners.elements3.text2')],
        },
        {
          title: [t('familyPartners.elements3.title3')],
          text: [t('familyPartners.elements3.text3')],
        },
      ],
    },
    {
      title:  [t('familyPartners.title4')],
      text: [t('familyPartners.text4')],
      elements: [
        {
          title: [t('familyPartners.elements4.title1')],
          text: [t('familyPartners.elements4.text1')],
        },
        {
          title: [t('familyPartners.elements4.title2')],
          text: [t('familyPartners.elements4.text2')],
        },
        {
          title: [t('familyPartners.elements4.title3')],
          text: [t('familyPartners.elements4.text3')],
        },
      ],
    },
    {
      title:  [t('familyPartners.title5')],
      text: [t('familyPartners.text5')],
      elements: [
        {
          title: [t('familyPartners.elements5.title1')],
          text: [t('familyPartners.elements5.text1')],
        },
        {
          title: [t('familyPartners.elements5.title2')],
          text: [t('familyPartners.elements5.text2')],
        },
        {
          title: [t('familyPartners.elements5.title3')],
          text: [t('familyPartners.elements5.text3')],
        },
      ],
    },
  ];
  
  return (
    <div className='pt-[55px] pb-[100px]'>
      <div className='flex justify-center'>
        <div className='text-white text-4xl text-center absolute p-10 right-1/4'>
          {t('familyPartners.title')}
        </div>
      </div>
      <div
        className='parallax min-h-[500px] inset-0 bg-fixed bg-center bg-no-repeat bg-cover'
      >
       <video
          src="gifs/skyscrapers-in-the-city-of-london-england-uk-2024-07-02-16-45-39-utc.mp4"
          className='w-full h-full object-cover fixed inset-0 -z-40'
          autoPlay
          loop
          muted
          controls={false}
        ></video>
        <img
          className='top-32 left-0 w-full -z-40 filter grayscale p-32'
          src='img/heroics-logo-rgb blanc.png'
          alt='logo'
        />
      </div>
      <div className='flex flex-wrap flex-row justify-center p-10 bg-white text-left text-gray-800'>
        <div className='max-w-4xl text-justify pb-32'>
          <h2 className='text-3xl font-semibold mb-6'>{t('familyPartners.title')}
          </h2>
          <div className='my-16 flex justify-center'>
            <img
              alt='services'
              src='../img/familypartners.png'
              className='max-h-[400px] '
            ></img>
          </div>
          {data_family_partners.map((section, index) => (
            <Component
              key={index}
              title={section.title}
              img={section.img}
              text={section.text}
              elements={section.elements}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FamilyPartners;
