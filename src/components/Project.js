import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Project.css'; 

import iconDetails from '../assets/icons/project-home.png';
import iconReport from '../assets/icons/project-folder.png';
import iconVideo from '../assets/icons/project-video.png';
import iconGallery from '../assets/icons/project-gallery.png';

const Project = ({ project, onPrev, onNext }) => {
  const [activeTab, setActiveTab] = useState('details');

  const hasReport = !!project.reportLink;
  const hasVideo = !!project.youtubeLink;
  const hasImage = !!project.image;

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
    ...(hasImage
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
          <div className='embed-container'>
            <iframe
              src={project.reportLink.replace('/view', '/preview')}
              title="Project Report"
              width="100%"
              height="500"
              allow="autoplay"
              frameBorder="0"
            />
          </div>
        );
      case 'video':
        return (
          <div className='embed-container'>
            <iframe
              src={project.youtubeLink}
              title="Project Video"
              width="100%"
              height="500"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        );
      case 'gallery':
        return (
          <div className='project-gallery'>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='carousel'>
      <button className='carousel-btn left' onClick={onPrev}>
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

      <button className='carousel-btn right' onClick={onNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Project;
