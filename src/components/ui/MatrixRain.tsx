import React, { useEffect, useRef } from 'react';

export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Characters for Matrix effect (hex, binary, OSINT symbols)
    const chars = '01010101ABCDEF0123456789Linux$#';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    // Y position of drops
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let lastTime = 0;
    const fps = 24; // Smooth, light and low CPU
    const interval = 1000 / fps;

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      const delta = time - lastTime;
      if (delta < interval) return;
      lastTime = time - (delta % interval);

      // Very light translucent black to create fading trails
      ctx.fillStyle = 'rgba(5, 7, 12, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00FF41'; // Matrix neon green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Subtle opacity
        ctx.globalAlpha = 0.25 + Math.random() * 0.25;
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      ctx.globalAlpha = 1.0;
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none -z-10 w-full h-full opacity-40 mix-blend-screen"
    />
  );
};
