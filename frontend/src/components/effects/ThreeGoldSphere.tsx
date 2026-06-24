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
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create a circular particle glow texture programmatically
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

    // Generate particles for a perfect 3D Sphere (Wealth Nexus Globe)
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    const radius = 1.5;

    for (let i = 0; i < particleCount; i++) {
      // Uniform distribution on sphere
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Materials configurations
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xE5C158, // Glowing Warm Gold
      size: 0.13,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.85,
    });

    const points = new THREE.Points(geometry, particleMaterial);

    const group = new THREE.Group();
    group.add(points);
    scene.add(group);

    // Neural connections / line network web
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    
    const lineGeometry = new THREE.BufferGeometry();
    const maxConnections = 350;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineInitial = new Float32Array(maxConnections * 2 * 3);
    let lineIdx = 0;

    for (let i = 0; i < particleCount && lineIdx < maxConnections; i += 3) {
      const x1 = initialPositions[i * 3];
      const y1 = initialPositions[i * 3 + 1];
      const z1 = initialPositions[i * 3 + 2];

      for (let j = i + 1; j < particleCount && lineIdx < maxConnections; j += 8) {
        const x2 = initialPositions[j * 3];
        const y2 = initialPositions[j * 3 + 1];
        const z2 = initialPositions[j * 3 + 2];

        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
        if (dist < 0.65) { // Connection threshold
          linePositions[lineIdx * 6] = x1;
          linePositions[lineIdx * 6 + 1] = y1;
          linePositions[lineIdx * 6 + 2] = z1;
          linePositions[lineIdx * 6 + 3] = x2;
          linePositions[lineIdx * 6 + 4] = y2;
          linePositions[lineIdx * 6 + 5] = z2;

          lineInitial[lineIdx * 6] = x1;
          lineInitial[lineIdx * 6 + 1] = y1;
          lineInitial[lineIdx * 6 + 2] = z1;
          lineInitial[lineIdx * 6 + 3] = x2;
          lineInitial[lineIdx * 6 + 4] = y2;
          lineInitial[lineIdx * 6 + 5] = z2;
          lineIdx++;
        }
      }
    }

    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions.slice(0, lineIdx * 6), 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

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

      // Inertial damping mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Group auto-rotation
      const rotY = elapsedTime * 0.18;
      const rotX = Math.sin(elapsedTime * 0.3) * 0.08;

      // Local cursor coordinates calculation
      const cosRY = Math.cos(-rotY);
      const sinRY = Math.sin(-rotY);
      const cosRX = Math.cos(-rotX);
      const sinRX = Math.sin(-rotX);

      // Mouse target coords in world-space (projected)
      const targetX = mouse.x * 1.8;
      const targetY = mouse.y * 1.8;
      const targetZ = 0.6;

      // Inverse rotate mouse target into local-space
      const ty1 = targetY * cosRX - targetZ * sinRX;
      const tz1 = targetY * sinRX + targetZ * cosRX;
      const txLocal = targetX * cosRY - tz1 * sinRY;
      const tyLocal = ty1;
      const tzLocal = targetX * sinRY + tz1 * cosRY;

      // Springy interaction logic for a single particle
      const updateDisplacement = (
        pArr: Float32Array,
        initialArr: Float32Array,
        count: number
      ) => {
        for (let i = 0; i < count; i++) {
          const bx = initialArr[i * 3];
          const by = initialArr[i * 3 + 1];
          const bz = initialArr[i * 3 + 2];

          const dx = bx - txLocal;
          const dy = by - tyLocal;
          const dz = bz - tzLocal;

          const dist = Math.hypot(dx, dy, dz);
          let ox = 0, oy = 0, oz = 0;

          // Push particles slightly when cursor gets too close
          if (dist < 1.1) {
            const force = ((1.1 - dist) / 1.1) * 0.25;
            ox = (dx / dist) * force;
            oy = (dy / dist) * force;
            oz = (dz / dist) * force;
          }

          pArr[i * 3] = bx + ox;
          pArr[i * 3 + 1] = by + oy;
          pArr[i * 3 + 2] = bz + oz;
        }
      };

      // 1. Update displacements in local coordinates
      const pointsArr = geometry.attributes.position.array as Float32Array;
      updateDisplacement(pointsArr, initialPositions, particleCount);
      geometry.attributes.position.needsUpdate = true;

      // 2. Line displacements
      const lineArr = lineGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < lineIdx * 2; i++) {
        const bx = lineInitial[i * 3];
        const by = lineInitial[i * 3 + 1];
        const bz = lineInitial[i * 3 + 2];

        const dx = bx - txLocal;
        const dy = by - tyLocal;
        const dz = bz - tzLocal;

        const dist = Math.hypot(dx, dy, dz);
        let ox = 0, oy = 0, oz = 0;

        if (dist < 1.1) {
          const force = ((1.1 - dist) / 1.1) * 0.25;
          ox = (dx / dist) * force;
          oy = (dy / dist) * force;
          oz = (dz / dist) * force;
        }

        lineArr[i * 3] = bx + ox;
        lineArr[i * 3 + 1] = by + oy;
        lineArr[i * 3 + 2] = bz + oz;
      }
      lineGeometry.attributes.position.needsUpdate = true;

      // 3. Apply Group Rotations
      group.rotation.y = rotY;
      group.rotation.x = rotX;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup resources to prevent memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      lineGeometry.dispose();
      particleMaterial.dispose();
      lineMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[350px] md:min-h-[450px]">
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 gold-glow-radial-strong pointer-events-none opacity-40 mix-blend-screen" />
    </div>
  );
}
