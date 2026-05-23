'use client';

import { useEffect, useRef } from 'react';
import { HERO_VIDEO_PATH, HERO_VIDEO_OBJECT_POSITION } from '@/lib/constants';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      void video.play().catch(() => {
        /* autoplay bloqueado até interação — ignora */
      });
    };

    play();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      style={{
        objectPosition: HERO_VIDEO_OBJECT_POSITION,
        transform: 'translateZ(0)',
      }}
      src={HERO_VIDEO_PATH}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden
    />
  );
}
