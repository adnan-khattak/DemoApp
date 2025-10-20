import React, { useState, useEffect, useRef } from "react";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";

const Hero = () => {
  const videos = [vid1, vid2, vid3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
      setAnimating(false);
    }, 700); 
  };

  // Auto move when video ends
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handleEnded = () => handleNext();
    vid.addEventListener("ended", handleEnded);

    return () => vid.removeEventListener("ended", handleEnded);
  }, [currentIndex]);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.currentTime = 0; 
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          vid.muted = true;
          vid.play();
        });
      }
    }
  }, [currentIndex]);

  const leftVideo = videos[currentIndex];
  const rightVideo = videos[(currentIndex + 1) % videos.length];

  return (
    <section className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className={`grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-4 sm:gap-6 lg:gap-7 transition-transform duration-700 ease-in-out ${
          animating ? "-translate-x-1" : "translate-x-0"
        }`}
      >
        {/* Left autoplay video */}
        <div
          className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
          key={leftVideo}
        >
          <video
            ref={videoRef}
            src={leftVideo}
            autoPlay
            muted
            playsInline
            loop={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right upcoming video */}
        <div
          className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
          key={rightVideo}
        >
          <video
            src={rightVideo}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
