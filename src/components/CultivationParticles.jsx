import { useEffect, useRef } from 'react';

const CultivationParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particles array - reduced for performance
    const particles = [];
    const particleCount = 40; // Giảm từ 100 xuống 40 cho mượt hơn
    const colors = ['#a78bfa', '#fbbf24', '#60a5fa', '#c084fc', '#fcd34d'];

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.fadeDelay = Math.random() * 600;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity = 0;
        this.fadeInSpeed = Math.random() * 0.02 + 0.005;
        this.fadeOutSpeed = Math.random() * 0.02 + 0.005;
        this.size = Math.random() * 2.5 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.shimmer = Math.random() * 0.5 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.orbitRadius = Math.random() * 2;
        this.orbitSpeed = Math.random() * 0.02 + 0.01;
        this.fadeStart = Date.now() + Math.random() * 600;
        this.fadingOut = false;
      }

      update() {
        // Gentle floating movement
        this.y -= this.speed;
        this.angle += this.orbitSpeed;
        this.x += Math.sin(this.angle) * this.orbitRadius * 0.5;

        // Fade in
        if (Date.now() > this.fadeStart && !this.fadingOut) {
          if (this.opacity < 1) {
            this.opacity += this.fadeInSpeed;
          } else if (Math.random() < 0.005) {
            this.fadingOut = true;
          }
        }

        // Fade out
        if (this.fadingOut) {
          this.opacity -= this.fadeOutSpeed;
          if (this.opacity <= 0) {
            this.reset();
            this.fadeStart = Date.now() + Math.random() * 600;
            this.fadingOut = false;
          }
        }

        // Reset if out of bounds
        if (this.y < -10) {
          this.reset();
          this.y = canvas.height + 10;
        }

        // Shimmer effect
        this.shimmer = Math.sin(Date.now() * 0.005 + this.x) * 0.3 + 0.7;
      }

      draw() {
        if (this.opacity > 0) {
          ctx.save();
          
          // Glow effect
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 3
          );
          gradient.addColorStop(0, `${this.color}${Math.floor(this.opacity * this.shimmer * 255).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(0.5, `${this.color}${Math.floor(this.opacity * this.shimmer * 100).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Core particle
          ctx.fillStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop - optimized for smooth performance
    let lastTime = 0;
    const fps = 60;
    const frameDelay = 1000 / fps;

    const animate = (currentTime) => {
      requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameDelay) return;

      lastTime = currentTime - (deltaTime % frameDelay);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        mixBlendMode: 'screen',
        willChange: 'transform',
        transform: 'translateZ(0)' // GPU acceleration
      }}
    />
  );
};

export default CultivationParticles;
