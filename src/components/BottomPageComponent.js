import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

function Card({ category }) {
  const { t } = useTranslation(); // Initialize the translation hook
  return (
    <a href={category.path}>
      <div className='bg-mist w-[200px] h-[200px] m-4 rounded-lg shadow-lg flex flex-col hover:scale-105 hover:bg-mist2  transition-colors duration-500 transform transition-transform'>
        <div className=' h-[150px] rounded-t-lg flex justify-center items-center'>
          <h2 className='text-deepblue text-lg font-bold flex justify-center text-center'>
            {category.name}
          </h2>
        </div>
        <div className=' h-[250px] p-4 rounded-b-lg flex items-center justify-center'>
          <p className='text-deepblue text-center'>{category.catchPhrase}</p>
        </div>
      </div>
    </a>
  );
}

export default function BottomPageComponent({ categories }) {
  const { t } = useTranslation(); // Initialize the translation hook

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
  categories = categories.filter((item) => item.name !== 'Home');
  const location = useLocation();
  categories = categories.filter((item) => item.path !== location.pathname);
  return (
    <div className='bg-mist pb-[500px] border-y-2 border-white'>
      <div
        className={`text-3xl text-center items-center py-32 ${
          screenWidth < 630 ? 'py-8' : 'py-32'
        }`}
      >
        <p>{t('footer.bottomPageTitle')}</p>
      </div>
      <div className='flex flex-row flex-wrap justify-center'>
        {categories.map((category, index) => (
          <Card category={category} />
        ))}
      </div>
    </div>
  );
}
