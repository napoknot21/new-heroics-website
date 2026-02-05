import React, { useEffect, useRef } from 'react';
import '../css/LetterAnimation.css'; // Import your CSS file for styling

const LetterAnimation = ({ text }) => {
  const textContainerRef = useRef(null);

  useEffect(() => {
    const textContainer = textContainerRef.current;
    const characters = text.split('');
    textContainer.innerHTML = '';

    characters.forEach((char, index) => {
      const letterSpan = document.createElement('span');
      letterSpan.textContent = char === ' ' ? '\u00A0' : char; // Replace space with non-breaking space
      letterSpan.classList.add('animate-letter');
      letterSpan.style.animationDelay = `${index * 0.02}s`; // Adjust delay for staggered animation
      textContainer.appendChild(letterSpan);
    });
  }, [text]);

  return <span ref={textContainerRef} />;
};

export default LetterAnimation;
