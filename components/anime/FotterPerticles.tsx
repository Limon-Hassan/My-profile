'use client';
import { useEffect, useState } from 'react';

type Star = {
  top: number;
  left: number;
  size: number;
  dx: number;
  dy: number;
  angle: number;
};

type Trail = {
  key: string;
  top: number;
  left: number;
  width: number;
  rotation: number;
};

const FooterParticles = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    const initialStars = Array.from({ length: 40 }).map(() => ({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
      size: Math.random() * 20 + 20,
      dx: 0,
      dy: 0,
      angle: 0,
    }));
    setStars(initialStars);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars(prev => {
        const index = Math.floor(Math.random() * prev.length);
        const oldStar = prev[index];

        const newTop = Math.random() * window.innerHeight;
        const newLeft = Math.random() * window.innerWidth;

        const dx = newLeft - oldStar.left;
        const dy = newTop - oldStar.top;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const distance = Math.sqrt(dx * dx + dy * dy);

        setTrails(prevTrails => [
          ...prevTrails,
          {
            key: Date.now() + Math.random().toString(),
            top: oldStar.top,
            left: oldStar.left,
            width: distance,
            rotation: angle,
          },
        ]);

        const newStars = [...prev];
        newStars[index] = {
          ...oldStar,
          top: newTop,
          left: newLeft,
          dx,
          dy,
          angle,
        };
        return newStars;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 3000);
    return () => clearInterval(timeout);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
        />
      ))}

      {trails.map(trail => (
        <div
          key={trail.key}
          className="trail"
          style={{
            top: trail.top,
            left: trail.left,
            width: trail.width,
            transform: `rotate(${trail.rotation}deg)`,
            transformOrigin: '0 50%',
          }}
        />
      ))}
    </div>
  );
};

export default FooterParticles;
