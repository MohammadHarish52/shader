import { useEffect, useRef } from 'react';

export default function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const colors = [
      { r: 239, g: 68, b: 68 },    // Red
      { r: 249, g: 115, b: 22 },   // Orange
      { r: 234, g: 179, b: 8 },    // Yellow
      { r: 34, g: 197, b: 94 },    // Green
      { r: 6, g: 182, b: 212 },    // Cyan
      { r: 59, g: 130, b: 246 },   // Blue
      { r: 147, g: 51, b: 234 },   // Purple
      { r: 236, g: 72, b: 153 },   // Pink
    ];

    const createGradient = (x: number, y: number, radius: number, colorIndex: number, timeOffset: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      const currentColorIndex = Math.floor((colorIndex + timeOffset) % colors.length);
      const nextColorIndex = (currentColorIndex + 1) % colors.length;
      const blend = (timeOffset % 1);
      
      const color = {
        r: colors[currentColorIndex].r * (1 - blend) + colors[nextColorIndex].r * blend,
        g: colors[currentColorIndex].g * (1 - blend) + colors[nextColorIndex].g * blend,
        b: colors[currentColorIndex].b * (1 - blend) + colors[nextColorIndex].b * blend,
      };
      
      gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`);
      gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`);
      gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
      return gradient;
    };

    const animate = () => {
      time += 0.005;

      // Create base gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, '#0a0a1f');
      bgGradient.addColorStop(0.5, '#1a0a2e');
      bgGradient.addColorStop(1, '#0f0520');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animated gradient orbs
      const orbs = [
        {
          x: canvas.width * (0.3 + Math.sin(time) * 0.2),
          y: canvas.height * (0.3 + Math.cos(time * 0.8) * 0.2),
          radius: 400,
          colorIndex: 0,
        },
        {
          x: canvas.width * (0.7 + Math.cos(time * 1.2) * 0.2),
          y: canvas.height * (0.4 + Math.sin(time * 0.9) * 0.2),
          radius: 450,
          colorIndex: 1,
        },
        {
          x: canvas.width * (0.5 + Math.sin(time * 0.7) * 0.15),
          y: canvas.height * (0.6 + Math.cos(time * 1.1) * 0.15),
          radius: 380,
          colorIndex: 2,
        },
        {
          x: canvas.width * (0.2 + Math.cos(time * 0.9) * 0.15),
          y: canvas.height * (0.7 + Math.sin(time * 1.3) * 0.15),
          radius: 350,
          colorIndex: 3,
        },
        {
          x: canvas.width * (0.8 + Math.sin(time * 1.1) * 0.1),
          y: canvas.height * (0.2 + Math.cos(time * 0.6) * 0.2),
          radius: 420,
          colorIndex: 4,
        },
      ];

      ctx.globalCompositeOperation = 'screen';
      orbs.forEach((orb) => {
        ctx.fillStyle = createGradient(orb.x, orb.y, orb.radius, orb.colorIndex, time * 2);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(80px)' }}
    />
  );
}