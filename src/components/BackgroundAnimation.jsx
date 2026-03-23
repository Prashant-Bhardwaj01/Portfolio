import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 40;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 200 + 100;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.alpha = 0;
        this.maxAlpha = Math.random() * 0.15 + 0.05;
        this.baseColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-500').trim();
        this.accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;

        if (this.alpha < this.maxAlpha) this.alpha += 0.001;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        
        const color = Math.random() > 0.5 ? this.baseColor : this.accentColor;
        
        gradient.addColorStop(0, `${color}${Math.floor(this.alpha * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles.length = 0;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]); // Re-run when theme changes to pick up new CSS variables

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1, opacity: 0.6 }}
    />
  );
}
