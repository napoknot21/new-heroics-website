import React from 'react';
import '../../css/CircularAnimation.css'; // Import the CSS file for styling

export default function CircularAnimation({ texts, centerLabel, colors }) {
  return (
    <>
      <img
        src='./img/rotate_arrow.png'
        alt='arrow'
        className='absolute w-[300px] h-[300px] rotate-slow'
        style={{ marginTop: '-40px' }}
      />
      <div className='container relative transition-all duration-500 w-[400px] h-[200px]'>
        {texts.map((text, index) => (
          <div
            key={index}
            className={`moving-text absolute transform bg-${colors[index]} rounded-sm border-2 border-black text-white w-[150px] h-[50px] flex justify-center items-center text-center text-2xl mt-4`}
            style={{ animationDelay: `-${index * 12}s` }}
          >
            <div className='border-2 border-white h-full w-full flex justify-center items-center text-center text-sm'>
              {text}
            </div>
          </div>
        ))}
        <div className='center-label w-[400px] h-[220px] flex items-center justify-center font-bold text-3xl'>
          {centerLabel}
        </div>
      </div>
    </>
  );
}
