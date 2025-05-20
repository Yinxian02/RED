import { useEffect, useRef, useState } from 'react';
import '../styles/FollowUs.css';

function FollowUs() {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='follow-us-div'>
      <div className='youtube-video-div' ref={videoRef}>
          {inView && (
            <iframe
              width="50%"
              height="500"
              className="youtube-video"
              src="https://www.youtube.com/embed/KpyeHYGpz1w?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
      </div>
    </div>
  );
}

export default FollowUs;
