import React, { useState } from 'react';
import '../css/loginlogo.css';
import { useTranslation } from 'react-i18next'; // Import the translation hook

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation(); // Initialize the translation hook

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send login credentials to a server
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center w-full'
      style={{
        backgroundImage: `url('img/street.jpg')`,
        backgroundSize: 'cover',
      }}
    >
      <img
        className='z-0 logo fixed top-10  h-full p-64 max-w-none animate-logo'
        style={{ filter: 'grayscale(100%)' }}
        src='img/heroics-logo-rgb blanc.png'
        alt='logo'
      />
      <div className='max-w-md w-full space-y-8 bg-mist p-10 z-0'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-deepblue'>
            Investors.Heroics
          </h2>
        </div>
        <p className="text-center text-black">
          {t('login.text')}
        </p>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='username' className='sr-only'>
                {t('login.username')}
              </label>
              <input
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-mist placeholder-mist text-deepblue rounded-t-md focus:outline-none focus:ring-bluehour focus:border-bluehour focus:z-10 sm:text-sm'
                placeholder='Username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                {t('login.password')}
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-mist placeholder-mist text-deepblue rounded-b-md focus:outline-none focus:ring-bluehour focus:border-bluehour focus:z-10 sm:text-sm'
                placeholder='Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-bluehour hover:bg-deeperblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluehour'
            >
              {t('login.signin')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
