'use client';

import { useEffect, useRef } from 'react';

const DottedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const DPR = window.devicePixelRatio || 1;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.scale(DPR, DPR);
    };

    resize();
    window.addEventListener('resize', resize);

    const DOT = 8;
    const CELL = 16;

    const dots: {
      x: number;
      y: number;
      opacity: number;
      target: number;
      speed: number;
    }[] = [];

    const cols = Math.floor(canvas.width / DPR / CELL);
    const rows = Math.floor(canvas.height / DPR / CELL);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          x: x * CELL + CELL / 2,
          y: y * CELL + CELL / 2,
          opacity: Math.random(),
          target: Math.random(),
          speed: 0.02 + Math.random() * 0.03,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const d of dots) {
        d.opacity += (d.target - d.opacity) * d.speed;

        if (Math.abs(d.opacity - d.target) < 0.01) {
          d.target = Math.random();
        }

        ctx.fillStyle = `rgba(36,36,36,${d.opacity})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default DottedBackground;
