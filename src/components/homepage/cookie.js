import React, { useState, useEffect } from 'react';
import '..\\src\\css\\cookie.css'
function CookieConsent() {
  const [showPopup, setShowPopup] = useState(false);

  // Check if user has already consented to cookies
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowPopup(true); // Show popup if no consent is found
    }
  }, []);

  // Handle when user accepts cookies
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', true);  // Save consent in localStorage
    setShowPopup(false); // Hide the popup
    loadAnalytics(); // Load any scripts (like Google Analytics) after consent
  };

  // Load your scripts here, such as Google Analytics
  const loadAnalytics = () => {
    console.log('Analytics script can be loaded here.');
    // For example, load Google Analytics
    const script = document.createElement('script');
    script.src = "'https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID';"
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_TRACKING_ID');
  };

  return (
    showPopup && (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
        <p>
          We use cookies to improve your experience. By continuing to use our site, you agree to our use of cookies.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Accept Cookies
        </button>
      </div>
    )
  );
}

export default CookieConsent;
