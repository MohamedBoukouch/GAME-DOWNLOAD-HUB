import { useState, useEffect } from 'react';
import './App.css';
import { FaDownload, FaCheck, FaArrowRight, FaSun, FaMoon, FaLanguage } from 'react-icons/fa';
import fortniteImage from './assets/fortnite.jpg';
import gta5Image from './assets/gta5.jpeg';
import fifa25Image from './assets/fifa25.jpg';
import pubgImage from './assets/pubg.jpg';
import spidermanImage from './assets/spedrman.png';
import poppyImage from './assets/poppy.jpeg';
import gtaRipImage from './assets/RP.jpg';
import minecraftImage from './assets/minecraft.jpeg';

// Language translations
const translations = {
  en: {
    title: "GAME DOWNLOAD HUB",
    subtitle: "Download the latest games for free for mobile and PC",
    availableGames: "Available Games",
    download: "Download",
    verificationTitle: "Game ready to download!",
    verificationText: "To download the game, please complete the following offer successfully and then send a screenshot as proof of completion via private message and the game file will be sent to you",
    verificationSteps: [
      "Press 'Continue'",
      "Complete the offer on the next page",
      "Send the screenshot via private message showing completion",
      "I will send you the file privately"
    ],
    continue: "Continue",
    copyright: `© ${new Date().getFullYear()} GAME DOWNLOAD HUB - All rights reserved`
  },
  ar: {
    title: "GAME DOWNLOAD HUB",
    subtitle: "تحميل أحدث الألعاب مجانًا للجوال والكمبيوتر",
    availableGames: "الألعاب المتاحة للتحميل",
    download: "تحميل",
    verificationTitle: "اللعبة جاهزة للتحميل!",
    verificationText: "لتحميل اللعبة، يرجى إكمال العرض التالي بنجاح ثم إرسال لقطة شاشة لإثبات الإكمال عبر رسالة خاصة وسيتم إرسال ملف اللعبة إليك",
    verificationSteps: [
      "اضغط على 'متابعة'",
      "أكمل العرض على الصفحة التالية",
      "أرسل لقطة الشاشة عبر رسالة خاصة تدل على اتمامك للمهمة",
      "و سأرسل لك الملف على الخاص"
    ],
    continue: "متابعة",
    copyright: `© ${new Date().getFullYear()} GAME DOWNLOAD HUB - جميع الحقوق محفوظة`
  }
};

function App() {
  const [showVerification, setShowVerification] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ar'); // Default to Arabic
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
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
      name: language === 'ar' ? 'فورتنايت موبايل' : 'FORTNITE MOBILE',
      platforms: 'Android-iOS',
      image: fortniteImage
    },
    {
      id: 2,
      name: language === 'ar' ? 'جيتا 5' : 'GTA V',
      platforms: 'Android-iOS-PC',
      image: gta5Image
    },
    {
      id: 3,
      name: language === 'ar' ? 'فيفا 25' : 'FIFA 25',
      platforms: 'Android-iOS-PC',
      image: fifa25Image
    },
    {
      id: 4,
      name: language === 'ar' ? 'ببجي موبايل' : 'PUBG MOBILE',
      platforms: 'Android-iOS',
      image: pubgImage
    },
    {
      id: 5,
      name: language === 'ar' ? 'سبايدرمان' : 'SPIDERMAN',
      platforms: 'Android-iOS',
      image: spidermanImage
    },
    {
      id: 6,
      name: language === 'ar' ? 'بوبي بلاي تايم' : 'POPPY PLAYTIME',
      platforms: 'Android-iOS',
      image: poppyImage
    },
    {
      id: 7,
      name: language === 'ar' ? 'جيتا آر بي' : 'GTA RP',
      platforms: 'Android-iOS',
      image: gtaRipImage
    },
    {
      id: 8,
      name: 'MINECRAFT',
      platforms: 'Android-iOS',
      image: minecraftImage
    }
  ];

  const handleDownload = (game) => {
    setSelectedGame(game);
    setShowVerification(true);
  };

  const handleVerification = () => {
    setShowVerification(false);
    window.open('https://smrturl.co/24ccacb', '_blank');
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
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
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
                  className={`language-option ${language === 'ar' ? 'active' : ''}`}
                  onClick={() => toggleLanguage('ar')}
                >
                  العربية
                </button>
                <button 
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => toggleLanguage('en')}
                >
                  English
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
                    <p className="game-platforms">{game.platforms}</p>
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

      {showVerification && (
        <div className="verification-modal">
          <div className="verification-content">
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
            <button className="verification-button" onClick={handleVerification}>
              {t.continue} <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;