import React, { useState } from 'react'
import '../styles/Fundraisers.css'
import fundraisersList from '../components/FundraisersList.js'
import iconGallery from '../assets/icons/project-gallery.png';
import ImageModal from '../components/ImageModal.js';

function Fundraisers() {
  const [activeTab, setActiveTab] = useState('bubbletea');

  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
    <div className='fundraisers-div'>
      <div>
        <h1 className='fundraisers-title'>FUNDRAISERS & EVENTS</h1>
      </div>
      
      <div className="fundraisers-tabs">
        {fundraisersList.map((tab) => (
          <div
            key={tab.key}
            className={`fundraisers-tab-item ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="fundraisers-tab-content-wrapper">
        {fundraisersList.map((tab) =>
          activeTab === tab.key ? (
            <div className="fundraisers-tab-content" key={tab.key}>
              <div className="fundraisers-card">
                <button
                  className="fundraisers-gallery-button"
                  onClick={() => {
                    setGalleryImages(tab.gallery);
                    setCurrentIndex(0);
                    setShowGallery(true);
                  }}
                >
                  <img
                    src={iconGallery}
                    alt="View Gallery"
                    className="fundraisers-gallery-icon"
                  />
                </button>
                <h2 className="fundraisers-tab-title">{tab.title}</h2>
                <img src={tab.image} alt={tab.label} className="fundraisers-tab-image"/>
                <p className="fundraisers-tab-description">{tab.description}</p>
              </div>


            </div>
          ) : null
        )

        }
      </div>

      {showGallery && (
        <ImageModal
          images={galleryImages}
          currentIndex={currentIndex}
          onClose={() => setShowGallery(false)}
          onPrev={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
            )
          }
          onNext={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
            )
          }
        />
      )}

    </div>
    </>
  );
}

export default Fundraisers;