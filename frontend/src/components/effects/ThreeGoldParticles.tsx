"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeGoldParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 50);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create custom soft gold particle canvas texture
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.7)");
        gradient.addColorStop(0.3, "rgba(212, 175, 55, 0.45)"); // Soft Gold Accent
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    // Create geometry: distribute particles randomly in 3D box coordinates
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      velocities[i * 3] = (Math.random() - 0.5) * 0.012;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012 + 0.008; // Slight upward drift
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.008;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle material
    const material = new THREE.PointsMaterial({
      color: 0xD4AF37,
      size: 0.16,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.35,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse movement listeners for subtle background shift parallax
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Dynamic layout resize support
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Animation Tick
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Inertial damping mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.015;
      mouse.y += (mouse.targetY - mouse.y) * 0.015;

      points.rotation.y = mouse.x * 0.12;
      points.rotation.x = -mouse.y * 0.12;

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const pArr = posAttr.array as Float32Array;

      // Update particle positions with drift speeds
      for (let i = 0; i < particleCount; i++) {
        pArr[i * 3] += velocities[i * 3];
        pArr[i * 3 + 1] += velocities[i * 3 + 1];
        pArr[i * 3 + 2] += velocities[i * 3 + 2];

        // Boundary wrapping
        if (pArr[i * 3] > 11 || pArr[i * 3] < -11) velocities[i * 3] *= -1;
        
        if (pArr[i * 3 + 1] > 8.5) {
          pArr[i * 3 + 1] = -8.5;
        } else if (pArr[i * 3 + 1] < -8.5) {
          pArr[i * 3 + 1] = 8.5;
        }

        if (pArr[i * 3 + 2] > 4 || pArr[i * 3 + 2] < -4) velocities[i * 3 + 2] *= -1;
      }

      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up to prevent context loss or leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      <div ref={containerRef} className="w-full h-full opacity-50" />
    </div>
  );
}
