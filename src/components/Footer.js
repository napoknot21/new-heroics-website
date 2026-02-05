import React from 'react';
import BottomPageComponent from './BottomPageComponent';
import { useTranslation } from 'react-i18next'; // Import the translation hook

function Footer({ categories }) {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className='relative -mt-[130px] z-0 pb-40 md:pb-0 '>
      <BottomPageComponent categories={categories} />

      <footer className='bg-deeperblue text-white w-full bottom-0 text-xs md:text-sm absolute p-5 pt-10 md:pt-0'>
        <div className='container mx-auto px-1 flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0 flex items-center text-gray-200'>
            <div className='p-6 py-2'>
            <p>Heroics Capital Partners</p>
            <p>Luxembourg</p>
            <p className='text-gray-500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34A Rue Philippe II - L2340 Luxembourg</p>
            <p className='text-gray-500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+352 27 30 09 40</p>
            <a href="mailto:info@heroics-capital.com" className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@heroics-capital.com</a>
            <p className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RCS: B274980</p>
            <p>Monaco</p>
            <p className='text-gray-500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;57 Rue Grimaldi - 98000 Monaco</p>
            <p className='text-gray-500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+377 92 26 02 10</p>
            <a href="mailto:info@heroics-capital.com" className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@heroics-capital.com</a>
            <p className='text-gray-500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RCi: 23S09652</p>

            </div>
          </div>
          <ul className='text-gray-400 px-1'>
            {categories.map((category, index) => (
              <li key={index} className='p-1'>
                <a href={category.path} className=''>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>

          <div className='flex items-center justify-center my-3'>
            <div className='flex items-center w-full'>
              <div className='flex flex-col items-center justify-center my-3'>
                <div className='flex items-center justify-between w-full max-w-xs'>
                  <h3 className='flex items-center pt-1 text-sm font-bold mb-2 p-0 mr-2'>
                    <a href='https://www.linkedin.com/company/heroics-capital/en'>
                      {t('footer.followUs')}
                    </a>
                  </h3>

                  <a
                    href='https://www.linkedin.com/company/heroics-capital/en'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='/img/linkedin.png'
                      alt='LinkedIn'
                      className='w-8 h-8'
                    />
                  </a>

                </div>
                <div className='flex justify-content'>
                  <h3 className='flex items-center pt-1 text-sm font-bold mb-2 p-0 mr-2'>
                    <a href='https://heroics-capital.mc/your-team-heroics'>
                      Heroics Monaco
                    </a>
                  </h3>

                  <a
                    href='https://heroics-capital.mc/your-team-heroics'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='/img/worldLink.png'
                      alt='Heroics Capital Monaco'
                      className='w-8 h-8'
                    />
                  </a>
                </div>

              </div>

            </div>
          </div>
          <div className='flex flex-col items-center text-gray-600 px-5'>
            <p className=''>
              &copy; {new Date().getFullYear()} {t('footer.copyright')}

            </p>
            <a
              href='https://fr.linkedin.com/in/paul-zamanian-abbassi-899126196'
              className='text-deeperblue'
            >
              {t('footer.paul')}

            </a>
            <a
              href='https://fr.linkedin.com/in/matthieu-vichet-4b31201a8'
              className='text-deeperblue'
            >
              {t('footer.matthieu')}

            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
