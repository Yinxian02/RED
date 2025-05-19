import '../styles/ImageModal.css';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const ImageModal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
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
