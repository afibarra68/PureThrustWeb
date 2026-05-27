import { useState } from 'react';

const HERO_VIDEO_SRC = '/media/hero-bg.mp4';

export function HeroBackground() {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <div className="hero-bg" aria-hidden="true">
      <video
        className={
          videoActive ? 'hero-bg__video hero-bg__video--active' : 'hero-bg__video'
        }
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoActive(true)}
        onCanPlay={() => setVideoActive(true)}
        onError={() => setVideoActive(false)}
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="hero-bg__fallback" />
      <div className="hero-bg__scrim" />
      <div className="hero-bg__grain" />
    </div>
  );
}
