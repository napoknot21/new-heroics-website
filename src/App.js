import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import your i18n configuration here

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/Footer';
import Login from './pages/Login';
import JoinUs from './pages/JoinUs';
import AlternativeInvestment from './pages/AlternativeInvestment';
import FamilyPartners from './pages/FamilyPartners';
import News from './pages/News';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { t } = useTranslation(); // Use the translation hook

  const logoUrl = 'img/heroics-logo-rgb.png';
  
  const categories = [
    { name: t('header.home'), path: '/', component: <HomePage /> },
    { name: t('header.alternative_investment'), path: '/alternative-investment', component: <AlternativeInvestment /> },
    { name: t('header.family_partners'), path: '/family-partners', component: <FamilyPartners /> },
    { name: t('header.about_us'), path: '/about-us', component: <AboutUsPage /> },
    { name: t('header.news'), path: '/news', component: <News /> },
    { name: t('header.login'), path: 'https://investors.heroics-capital.com/', component: <Login /> },
    { name: t('header.join_us'), path: '/join-heroics', component: <JoinUs /> },
  ];

  const [cookies, setCookie] = useCookies(['userConsent']);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!cookies.userConsent) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, [cookies.userConsent]);

  const handleAcceptCookies = () => {
    setCookie('userConsent', 'accepted', { path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) });
    setShowBanner(false);
  };

  const handleDeclineCookies = () => {
    setCookie('userConsent', 'declined', { path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) });
    setShowBanner(false);
  };

  return (
    <CookiesProvider>
      <BrowserRouter>
        <div className="w-full text-justify pb-32 font-ppmori max-w-screen overflow-x-hidden z-10">
          <Header logoUrl={logoUrl} categories={categories} />
          <div className="text-white w-full flex justify-center items-center z-30">
            <Routes>
            {categories.map((category, index) => (
              category.path.startsWith('http') ? (
                <Route
                  key={index}
                  path={category.path}
                  element={
                    <div>
                      <script>
                        {`window.location.href = '${category.path}';`}
                      </script>
                    </div>
                  }
                />
              ) : (
                <Route key={index} path={category.path} element={category.component} />
              )
            ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>

        <div className="z-0 font-ppmori">
          <Footer categories={categories} />
        </div>

        {/* Cookie Consent Banner */}
        {showBanner && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center">
            <p>{t('cookies.text')}</p>
            <button className="bg-blue-500 px-4 py-2 rounded mx-2" onClick={handleAcceptCookies}>
              {t('cookies.accept')}
            </button>
            <button className="bg-gray-500 px-4 py-2 rounded mx-2" onClick={handleDeclineCookies}>
              {t('cookies.decline')}
            </button>
          </div>
        )}
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
