import { useState } from 'react';
import './App.css';
import { FaDownload, FaCheck, FaArrowRight } from 'react-icons/fa';
import fortniteImage from './assets/fortnite.jpg';
import gta5Image from './assets/gta5.jpeg';
import fifa25Image from './assets/fifa25.jpg';
import pubgImage from './assets/pubg.jpg';
import spidermanImage from './assets/spedrman.png';
import poppyImage from './assets/poppy.jpeg';
import gtaRipImage from './assets/rip.png';
import minecraftImage from './assets/minecraft.jpeg';

function App() {
  const [showVerification, setShowVerification] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      name: 'FORTNITE MOBILE',
      platforms: 'Android-iOS',
      image: fortniteImage
    },
    {
      id: 2,
      name: 'GTA V',
      platforms: 'Android-iOS-PC',
      image: gta5Image
    },
    {
      id: 3,
      name: 'FIFA 25',
      platforms: 'Android-iOS-PC',
      image: fifa25Image
    },
    {
      id: 4,
      name: 'PUBG MOBILE',
      platforms: 'Android-iOS',
      image: pubgImage
    },
    {
      id: 5,
      name: 'SPIDERMAN',
      platforms: 'Android-iOS',
      image: spidermanImage
    },
    {
      id: 6,
      name: 'POPPY PLAYTIME',
      platforms: 'Android-iOS',
      image: poppyImage
    },
    {
      id: 7,
      name: 'GTA RIP',
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

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">GAME DOWNLOAD HUB</h1>
          <p className="app-subtitle">تحميل أحدث الألعاب مجانًا للجوال والكمبيوتر</p>
        </div>
      </header>

      <main className="app-main">
        <div className="main-content">
          <section className="games-section">
            <h2 className="section-title">الألعاب المتاحة للتحميل</h2>
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
                      <FaDownload /> تحميل
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
          <p>© {new Date().getFullYear()} GAME DOWNLOAD HUB - جميع الحقوق محفوظة</p>
        </div>
      </footer>

      {showVerification && (
        <div className="verification-modal">
          <div className="verification-content">
            <div className="verification-icon">
              <FaCheck />
            </div>
            <h3>اللعبة جاهزة للتحميل!</h3>
            <p>لتحميل اللعبة، يرجى إكمال العرض التالي بنجاح ثم إرسال لقطة شاشة لإثبات الإكمال عبر رسالة خاصة وسيتم إرسال ملف اللعبة إليك</p>
            <div className="verification-steps">
              <div className="verification-step">
                <span>1</span> اضغط على "متابعة"
              </div>
              <div className="verification-step">
                <span>2</span> أكمل العرض على الصفحة التالية
              </div>
              <div className="verification-step">
                <span>3</span> أرسل لقطة الشاشة عبر رسالة خاصة تدل على اتمامك للمهمة
              </div>
              <div className="verification-step">
                <span>4</span>و سأرسل لك الملف على الخاص 
              </div>
            </div>
            <button className="verification-button" onClick={handleVerification}>
              متابعة <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;