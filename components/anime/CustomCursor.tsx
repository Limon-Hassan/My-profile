'use client';
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = 0,
      mouseY = 0,
      posX = 0,
      posY = 0;

    const smoothing = 9; 

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', moveMouse);

    const animate = () => {
      posX += (mouseX - posX) / smoothing;
      posY += (mouseY - posY) / smoothing;

      if (cursor && follower) {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        follower.style.transform = `translate(${posX - 12}px, ${posY - 12}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const links = document.querySelectorAll('.link');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        cursor?.classList.add('active');
        follower?.classList.add('active');
      });
      link.addEventListener('mouseleave', () => {
        cursor?.classList.remove('active');
        follower?.classList.remove('active');
      });
    });

    return () => {
      document.removeEventListener('mousemove', moveMouse);
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={followerRef} className="cursor-follower"></div>
    </>
  );
};

export default CustomCursor;
