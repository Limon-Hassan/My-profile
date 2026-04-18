'use client';

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    };

    document.addEventListener('mousemove', moveMouse);

    const animate = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.left = mouseX + 'px';
        cursorRef.current.style.top = mouseY + 'px';

        followerRef.current.style.left = posX - 12 + 'px';
        followerRef.current.style.top = posY - 12 + 'px';
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', moveMouse);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor small:hidden tab:hidden lap:block com:block"
      ></div>
      <div
        ref={followerRef}
        className="cursor-follower small:hidden tab:hidden lap:block com:block"
      ></div>
    </>
  );
};

export default CustomCursor;
