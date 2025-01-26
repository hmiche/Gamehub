'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-white mb-4 sm:mb-0">
          We use cookies to enhance your gaming experience and show personalized ads. 
          By continuing to use our site, you agree to our use of cookies.
        </p>
        <div className="flex gap-4">
          <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300">
            Learn More
          </a>
          <button
            onClick={acceptCookies}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 