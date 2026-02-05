export default function NotFoundPage() {
  return (
    <div className='pt-[55px]'>
      <img
        className='fixed top-0 left-0 w-full -z-50'
        src='img/street.jpg'
        alt='street'
      />

      <div className='m-8'>
        <img
          className='top-32 left-0 w-full -z-40 filter grayscale'
          src='img/heroics-logo-rgb blanc.png'
          alt='logo'
        />
      </div>
      <div className='w-full bg-white'>
        <div className='text-gray-800 md:p-32 sm:p-0 bg-white  flex flex-row justify-center items-center flex-wrap'>
          <div className='w-full flex justify-center items-center text-3xl m-10'>
            <p>404 - Page not found</p>
          </div>
          <div className='w-full flex justify-center items-center text-3xl m-10'>
            <p>Sorry, the page you are looking for does not exist.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

