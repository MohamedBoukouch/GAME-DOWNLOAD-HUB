import { useState, useRef } from 'react';
import './App.css';
import beforeExample from './assets/before-example.jpg';
import afterExample from './assets/after-example.jpg';

function App() {
  const [originalImage, setOriginalImage] = useState(null);
  const [ghibliImage, setGhibliImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
        window.open('https://www.facebook.com', '_blank');
      }, 1500);
    }
  };

  const resetAll = () => {
    setOriginalImage(null);
    setGhibliImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="app">
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
                <div className="step-number">1</div>
                <p>Upload your image using the button below</p>
              </div>
              <div className="guide-step">
                <div className="step-number">2</div>
                <p>Click "Apply Ghibli Magic" to transform it</p>
              </div>
              <div className="guide-step">
                <div className="step-number">3</div>
                <p>Download or share your Ghibli-style artwork</p>
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
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
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
                    <span className="spinner"></span>
                    Transforming...
                  </>
                ) : (
                  'Apply Ghibli Magic'
                )}
              </button>
              <button onClick={resetAll} className="reset-button">
                Start Over
              </button>
            </section>
          )}

          {error && (
            <div className="error-message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              {error}
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
                <button className="download-button">
                  Download
                </button>
                <button className="share-button">
                  Share
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
    </div>
  );
}

export default App;