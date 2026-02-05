import React, { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher'; // Import the Language Switcher component

function Header({ logoUrl, categories }) {
  const [smallLayout, setSmallLayout] = useState(window.innerWidth < 1100);
  const [menuOpen, setMenuOpen] = useState(false);

  const notLogo = categories.filter(
    (category) => category.name !== 'Home' && category.name !== 'Log in' && category.name !== 'Connexion' && category.name !== 'Accueil'
  );

  useEffect(() => {
    const handleResize = () => {
      setSmallLayout(window.innerWidth < 1100);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Get the current path of the page (for rendering the active link)
  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <div className='fixed top-0 left-0 w-full bg-white px-4 sm:px-8 md:px-16 z-10 h-[80px] border-b border-gray-20'>
      <ul className='flex justify-between items-center h-full'>
        <li className='w-1/4'>
          <a href='/'>
            <img
              src={logoUrl}
              alt='Logo'
              className='w-[150px] transform transition-transform duration-300 hover:scale-105 slow-transform cursor-pointer'
            />
          </a>
        </li>
        {smallLayout ? (
          <li className='ml-auto relative' onClick={toggleMenu}>
            <img
              src='img/menuicon.png'
              alt='menu icon'
              className='p-2 h-10 hover:scale-110 slow-transform cursor-pointer'
            />
            {menuOpen && (
              <ul className='absolute top-12 right-0 shadow-md w-[300px] bg-white'>
                {notLogo.map((category, index) => (
                  <a href={category.path} key={index}>
                    <li
                      className='py-2 px-4 hover:bg-gray-500 text-black hover:text-white transition duration-300 ease-in h-[50px] border-b border-gray-200 flex justify-center items-center'
                    >
                      <h1
                        className={`block ${
                          currentPath === category.path
                            ? 'text-blue-500 font-bold'
                            : ''
                        }`}
                      >
                        {category.name}
                      </h1>
                    </li>
                  </a>
                ))}
                {/* Language Switcher in Small Layout */}
                <li className='py-2 px-4 text-center'>
                  <LanguageSwitcher /> {/* Include Language Switcher */}
                </li>
              </ul>
            )}
          </li>
        ) : (
          <ul className='flex items-center'>
            {notLogo.map((category, index) => (
              <li
                key={index}
                className='px-4 text-md flex items-center justify-center border-b-4 hover:border-deepblue transition duration-30 ease-in h-[80px] border-transparent slow-transform'
              >
                <a
                  href={category.path}
                  className={`h-full flex items-center justify-center font-heroics-regular ${
                    currentPath === category.path
                      ? 'text-blue-500 font-bold'
                      : 'text-black'
                  }`}
                >
                  {category.name}
                </a>
              </li>
            ))}
            {/* Language Switcher in Large Layout */}
            <li className='px-4 flex items-center'>
              <LanguageSwitcher /> {/* Include Language Switcher */}
            </li>
          </ul>
        )}

        <li
          className={smallLayout ? 'flex justify-end' : 'w-16 flex justify-end'}
        >
          <a href='https://investors.heroics-capital.com/'>
            <img
              src='img/user.png'
              alt='User'
              className='p-2 h-12  w-12 slow-transform hover:scale-105 transform transition-transform duration-300'
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
