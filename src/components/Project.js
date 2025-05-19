import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Project.css'; 
import ImageModal from './ImageModal';

import iconDetails from '../assets/icons/project-home.png';
import iconReport from '../assets/icons/project-folder.png';
import iconVideo from '../assets/icons/project-video.png';
import iconGallery from '../assets/icons/project-gallery.png';

import dinoImage from '../assets/design/project-dino.png';

const Project = ({ project, onPrev, onNext }) => {
  const [activeTab, setActiveTab] = useState('details');

  const hasReport = !!project.reportLink;
  const hasVideo = !!project.youtubeLink;
  const hasGallery = !!project.gallery && project.gallery.length > 0;

  const tabs = [
    {
      id: 'details',
      icon: iconDetails,
      alt: 'Details',
    },
    ...(hasReport
      ? [
          {
            id: 'report',
            icon: iconReport,
            alt: 'Report',
          },
        ]
      : []),
    ...(hasVideo
      ? [
          {
            id: 'video',
            icon: iconVideo,
            alt: 'Video',
          },
        ]
      : []),
    ...(hasGallery
      ? [
          {
            id: 'gallery',
            icon: iconGallery,
            alt: 'Gallery',
          },
        ]
      : []),
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className='project-card'>
            <h1 className='project-name'>{project.name}</h1>
            <h4 className='project-year'>{project.year}</h4>
            {project.image && <img src={project.image} alt={project.name} className='project-image' />}
            <p className='project-description'>{project.description}</p>
          </div>
        );
      case 'report':
        return (
          <div className='report-download-container'>
            <img
              src={dinoImage}
              alt='Cute Dino'
              className='dino-image'
            />
            <a
              href={project.reportLink}
              target='_blank'
              rel='noopener noreferrer'
              className='download-btn'
              download
            >
              Download Project Report {project.year}
            </a>
          </div>
        );
      case 'video':
        return (
          <div className='embed-container'>
            <iframe
              src={project.youtubeLink}
              title="Project Video"
              width="80%"
              height="400"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        );
      case 'gallery':
        return (
          <div className='project-gallery'>
            {project.gallery?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                className='gallery-thumb'
                onClick={() => openModal(index)}
              />
            ))}

            {isModalOpen && (
              <ImageModal
                images={project.gallery}
                currentIndex={activeImageIndex}
                onClose={closeModal}
                onPrev={goPrev}
                onNext={goNext}
              />
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const handlePrev = () => {
    setActiveTab('details');
    onPrev();
  };

  const handleNext = () => {
    setActiveTab('details');
    onNext();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (index) => {
    setActiveImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const goPrev = () => setActiveImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  const goNext = () => setActiveImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));


  return (
    <div className='carousel'>
      <button className='carousel-btn left' onClick={handlePrev}>
        <FaChevronLeft />
      </button>

      <div className='project-content'>
        <div className='project-tab-nav'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-icon-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <img src={tab.icon} alt={tab.alt} className='tab-icon' />
            </button>
          ))}
        </div>

        <div className='tab-content'>{renderTabContent()}</div>
      </div>

      <button className='carousel-btn right' onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Project;
