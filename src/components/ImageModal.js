import '../styles/ImageModal.css';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const ImageModal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
          onPrev();
        } else if (e.key === 'ArrowRight') {
          onNext();
        } else if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onPrev, onNext, onClose]);

    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const deltaX = touchStartX.current - touchEndX.current;
      const threshold = 50;
      if (deltaX > threshold) {
        onNext();
      } else if (deltaX < -threshold) {
        onPrev();
      }
    };
    if (!images || images.length === 0) return null;

  return (
    <div className='modal-overlay' onClick={onClose} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose}>
          <FaTimes />
        </button>
        <img
          src={images[currentIndex]}
          alt={`Modal ${currentIndex + 1}`}
          className='modal-image'
        />
        <button className='modal-nav left' onClick={onPrev}>
          <FaChevronLeft />
        </button>
        <button className='modal-nav right' onClick={onNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
