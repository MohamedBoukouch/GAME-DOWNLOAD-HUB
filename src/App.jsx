import { useState, useEffect } from 'react';
import './App.css';
import { FaDownload, FaCheck, FaArrowRight, FaSun, FaMoon, FaLanguage, FaTimes } from 'react-icons/fa';
import fortniteImage from './assets/fortnite.jpg';
import gta5Image from './assets/gta5.jpeg';
import fifa25Image from './assets/fifa25.jpg';
import pubgImage from './assets/pubg.jpg';
import spidermanImage from './assets/spedrman.png';
import poppyImage from './assets/poppy.jpeg';
import gtaRipImage from './assets/RP.jpg';
import minecraftImage from './assets/minecraft.jpeg';
import truck from './assets/truck.png';
import sonic from './assets/sonic.jpg';
import nfl from './assets/nfl.jpeg';

// Language translations
const translations = {
  en: {
    title: "GAME DOWNLOAD HUB",
    subtitle: "Download the latest games for free for mobile and PC",
    availableGames: "Available Games",
    download: "Download",
    verificationTitle: "Complete Offer to Download",
    verificationText: "To download this game, please complete a quick offer. This helps us keep the service free.",
    verificationSteps: [
      "Click 'Complete Offer' button",
      "Fill in the required information (email/phone/age)",
      "Submit the form",
      "Return here to download your game"
    ],
    completeOffer: "Complete Offer",
    copyright: `© ${new Date().getFullYear()} GAME DOWNLOAD HUB - All rights reserved`,
    selectPlatform: "Select your platform",
    downloading: "Preparing your download...",
    downloadReady: "Download Ready!",
    downloadButton: "Download Now",
    offerCompleted: "Thank you! Your download will start now",
    close: "Close",
    cancel: "Cancel",
    offerTitle: "Quick Offer Required",
    offerDescription: "Please complete this quick offer to download the game"
  },
  ar: {
    title: "GAME DOWNLOAD HUB",
    subtitle: "تحميل أحدث الألعاب مجانًا للجوال والكمبيوتر",
    availableGames: "الألعاب المتاحة للتحميل",
    download: "تحميل",
    verificationTitle: "أكمل العرض لتحميل اللعبة",
    verificationText: "لتحميل هذه اللعبة، يرجى إكمال عرض سريع. هذا يساعدنا في الحفاظ على الخدمة مجانية.",
    verificationSteps: [
      "اضغط على زر 'إكمال العرض'",
      "املأ المعلومات المطلوبة (بريد إلكتروني/هاتف/عمر)",
      "إرسال النموذج",
      "عد هنا لتحميل اللعبة"
    ],
    completeOffer: "إكمال العرض",
    copyright: `© ${new Date().getFullYear()} GAME DOWNLOAD HUB - جميع الحقوق محفوظة`,
    selectPlatform: "اختر نظام التشغيل الخاص بك",
    downloading: "جاري تجهيز التحميل...",
    downloadReady: "التحميل جاهز!",
    downloadButton: "تحميل الآن",
    offerCompleted: "شكراً لك! سوف يبدأ التحميل الآن",
    close: "إغلاق",
    cancel: "إلغاء",
    offerTitle: "عرض سريع مطلوب",
    offerDescription: "يرجى إكمال هذا العرض السريع لتحميل اللعبة"
  }
};

function App() {
  const [showVerification, setShowVerification] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // Changed default to English
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [showPlatformSelector, setShowPlatformSelector] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const [offerCompleted, setOfferCompleted] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const games = [
    {
      id: 1,
      name: language === 'ar' ? 'صونيك موبايل' : 'Sonic the Hedgehog',
      platforms: ['Android', 'iOS'],
      image: sonic
    },
    {
      id: 2,
      name: language === 'ar' ? 'مادين نفل' : 'MADDEN NFL',
      platforms: ['Android', 'iOS', 'Windows'],
      image: nfl
    },
    {
      id: 3,
      name: language === 'ar' ? 'فيفا 25' : 'FIFA 25',
      platforms: ['Android', 'iOS', 'Windows'],
      image: fifa25Image
    },
    {
      id: 4,
      name: language === 'ar' ? 'ببجي موبايل' : 'PUBG MOBILE',
      platforms: ['Android', 'iOS'],
      image: pubgImage
    },
    {
      id: 5,
      name: language === 'ar' ? 'سبايدرمان' : 'SPIDERMAN',
      platforms: ['Android', 'iOS'],
      image: spidermanImage
    },
    {
      id: 6,
      name: language === 'ar' ? 'بوبي بلاي تايم' : 'POPPY PLAYTIME',
      platforms: ['Android', 'iOS'],
      image: poppyImage
    },
    {
      id: 7,
      name: language === 'ar' ? 'جيتا آر بي' : 'GTA RP',
      platforms: ['Android', 'iOS'],
      image: gtaRipImage
    },
    {
      id: 8,
      name: 'MINECRAFT',
      platforms: ['Android', 'iOS'],
      image: minecraftImage
    },
    {
      id: 9,
      name: 'TRUCK SIMULTOR',
      platforms: ['Android', 'iOS'],
      image: truck
    },
    {
      id: 10,
      name: language === 'ar' ? 'فورتنايت موبايل' : 'FORTNITE MOBILE',
      platforms: ['Android', 'iOS'],
      image: fortniteImage
    },
    {
      id: 11,
      name: language === 'ar' ? 'جيتا 5' : 'GTA V',
      platforms: ['Android', 'iOS', 'Windows'],
      image: gta5Image
    },
  ];

  const handleDownload = (game) => {
    setSelectedGame(game);
    if (game.platforms.length > 1) {
      setShowPlatformSelector(true);
    } else {
      setShowVerification(true);
    }
  };

  const startDownload = (platform) => {
    setShowPlatformSelector(false);
    setShowVerification(true);
  };

  const completeOffer = () => {
    // Open offer page in new tab
    window.open('https://smrturl.co/24ccacb', '_blank');
    
    // Simulate user completing the offer
    setShowVerification(false);
    setIsDownloading(true);
    
    setTimeout(() => {
      setIsDownloading(false);
      setOfferCompleted(true);
      setDownloadReady(true);
    }, 2000);
  };

  const startFileDownload = () => {
    // In a real app, this would trigger the actual file download
    alert('Download would start now!');
    resetDownload();
  };

  const resetDownload = () => {
    setIsDownloading(false);
    setDownloadReady(false);
    setOfferCompleted(false);
    setShowVerification(false);
    setShowPlatformSelector(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">{t.title}</h1>
          <p className="app-subtitle">{t.subtitle}</p>
        </div>
        <div className="header-controls">
          <div className="language-selector">
            <button 
              className="language-toggle" 
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              <FaLanguage />
            </button>
            {isLanguageMenuOpen && (
              <div className="language-menu">
                <button 
                  className={`language-option ${language === 'en' ? 'active' : ''}`} // Changed order
                  onClick={() => toggleLanguage('en')}
                >
                  English
                </button>
                <button 
                  className={`language-option ${language === 'ar' ? 'active' : ''}`}
                  onClick={() => toggleLanguage('ar')}
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="main-content">
          <section className="games-section">
            <h2 className="section-title">{t.availableGames}</h2>
            <div className="games-grid">
              {games.map(game => (
                <div key={game.id} className="game-card">
                  <div className="game-image-container">
                    <img 
                      src={game.image} 
                      alt={game.name} 
                      className="game-image" 
                      loading="lazy"
                    />
                  </div>
                  <div className="game-info">
                    <h3 className="game-name">{game.name}</h3>
                    <p className="game-platforms">{game.platforms.join(' - ')}</p>
                    <button 
                      onClick={() => handleDownload(game)}
                      className="download-button"
                    >
                      <FaDownload /> {t.download}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>{t.copyright}</p>
        </div>
      </footer>

      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Platform Selector Modal */}
      {showPlatformSelector && (
        <div className="verification-modal">
          <div className="verification-content">
            <button className="close-modal" onClick={resetDownload}>
              <FaTimes />
            </button>
            <h3>{t.selectPlatform}</h3>
            <div className="platform-options">
              {selectedGame?.platforms.map((platform, index) => (
                <button 
                  key={index} 
                  className="platform-button"
                  onClick={() => startDownload(platform)}
                >
                  {platform}
                </button>
              ))}
            </div>
            <button className="verification-button cancel-button" onClick={resetDownload}>
              {t.cancel}
            </button>
          </div>
        </div>
      )}

      {/* Downloading Modal */}
      {isDownloading && (
        <div className="verification-modal">
          <div className="verification-content">
            <div className="loading-spinner"></div>
            <h3>{t.downloading}</h3>
            <p>{offerCompleted ? t.offerCompleted : t.offerDescription}</p>
          </div>
        </div>
      )}

      {/* Download Ready Modal */}
      {downloadReady && (
        <div className="verification-modal">
          <div className="verification-content">
            <div className="verification-icon">
              <FaCheck />
            </div>
            <h3>{t.downloadReady}</h3>
            <button 
              className="verification-button" 
              onClick={startFileDownload}
            >
              {t.downloadButton} <FaDownload />
            </button>
          </div>
        </div>
      )}

      {/* Offer Verification Modal */}
      {showVerification && (
        <div className="verification-modal">
          <div className="verification-content">
            <button className="close-modal" onClick={resetDownload}>
              <FaTimes />
            </button>
            <div className="verification-icon">
              <FaCheck />
            </div>
            <h3>{t.verificationTitle}</h3>
            <p>{t.verificationText}</p>
            <div className="verification-steps">
              {t.verificationSteps.map((step, index) => (
                <div key={index} className="verification-step">
                  <span>{index + 1}</span> {step}
                </div>
              ))}
            </div>
            <button 
              className="verification-button" 
              onClick={completeOffer}
            >
              {t.completeOffer} <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;