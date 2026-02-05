import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import whatsNewPosts from '../data/news';

function News() {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
      <div className='items-center flex justify-center flex-wrap z-0 h-full pt-20 pb-20'>
      <div className=" flex justify-center bg-white py-10 pb-40">
        <video
          className="w-[50%] h-auto object-contain"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/img/HeroicsCapitalAnimation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>




      {/* Content section */}
      <div className='w-full pb-[50px] bg-white mt-[-100px] md:mt-[-150px]'>
        <div className='z-40 text-gray-800 bg-white md:p-10 sm:p-0 flex flex-row justify-center items-center flex-wrap'>
          <div className='w-full flex justify-center items-center text-3xl m-10'>
            <p>{t('news.latest_news')}</p>
          </div>
          <div className='lg:w-1/2 p-5 sm:w-full'>
            <div className='max-w-3xl mx-auto mt-8'>
              <h1 className='text-3xl font-bold mb-4'>{t('news.whats_new')}</h1>
              {t('news.posts', { returnObjects: true }).map((post, index) => (
                <div key={index} className='mb-16'>
                  <p className='text-gray-500 mb-1'>{post.date}</p>
                  <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
                  <p
                    className='text-gray-700'
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>

  );
}

export default News;
