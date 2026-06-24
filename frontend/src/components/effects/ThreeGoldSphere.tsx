"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeGoldSphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene, camera, and WebGL renderer
    const scene = new THREE.Scene();
    
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create a circular particle glow texture programmatically (ensures no asset loading bottlenecks)
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.15, "rgba(253, 229, 171, 0.85)"); // Gold Core
        gradient.addColorStop(0.45, "rgba(212, 175, 55, 0.35)");  // Outer Gold Glow
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    // Create geometry: distribute points uniformly on a sphere surface (Fibonacci Sphere)
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const radius = 2.0;

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.acos(1 - 2 * (i / particleCount));
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;

      sizes[i] = Math.random() * 8 + 4;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Points Material configuration
    const material = new THREE.PointsMaterial({
      color: 0xD4AF37, // Gold accent
      size: 0.14,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Line segments to create a premium network mesh effect (connecting nodes)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });
    
    const lineGeometry = new THREE.BufferGeometry();
    const maxConnections = 600;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    let lineIdx = 0;

    // Connect nodes within a maximum distance
    for (let i = 0; i < particleCount && lineIdx < maxConnections; i += 3) {
      const x1 = initialPositions[i * 3];
      const y1 = initialPositions[i * 3 + 1];
      const z1 = initialPositions[i * 3 + 2];

      for (let j = i + 1; j < particleCount && lineIdx < maxConnections; j += 12) {
        const x2 = initialPositions[j * 3];
        const y2 = initialPositions[j * 3 + 1];
        const z2 = initialPositions[j * 3 + 2];

        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
        if (dist < 0.9) {
          linePositions[lineIdx * 6] = x1;
          linePositions[lineIdx * 6 + 1] = y1;
          linePositions[lineIdx * 6 + 2] = z1;
          linePositions[lineIdx * 6 + 3] = x2;
          linePositions[lineIdx * 6 + 4] = y2;
          linePositions[lineIdx * 6 + 5] = z2;
          lineIdx++;
        }
      }
    }

    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions.slice(0, lineIdx * 6), 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Interaction states
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      mouse.targetX = mouseX * 1.5;
      mouse.targetY = mouseY * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle viewport resize correctly
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

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Inertial damping for mouse movement response
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Base auto rotation + user hover rotation influence
      points.rotation.y = elapsedTime * 0.06 + mouse.x * 0.18;
      points.rotation.x = elapsedTime * 0.03 - mouse.y * 0.18;

      lines.rotation.y = points.rotation.y;
      lines.rotation.x = points.rotation.x;

      // Organic shape oscillation (pulsating waves)
      const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
      const pArr = positionAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const x = initialPositions[i * 3];
        const y = initialPositions[i * 3 + 1];
        const z = initialPositions[i * 3 + 2];

        // Complex multi-wave ripple effect
        const wave = Math.sin(x * 1.8 + elapsedTime * 1.2) * 
                     Math.cos(y * 1.8 + elapsedTime * 0.8) * 0.07;
        const factor = 1.0 + wave;

        pArr[i * 3] = x * factor;
        pArr[i * 3 + 1] = y * factor;
        pArr[i * 3 + 2] = z * factor;
      }
      positionAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup resources to prevent WebGL/JavaScript memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      lineGeometry.dispose();
      material.dispose();
      lineMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[350px] md:min-h-[450px]">
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 gold-glow-radial pointer-events-none opacity-30 mix-blend-screen" />
    </div>
  );
}
