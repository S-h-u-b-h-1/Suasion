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
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.z = 4.8;

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

    // 1. Math profile for the money bag radius r at height y
    const getBagRadius = (y: number) => {
      let r = 0;
      if (y < -1.0) {
        // Flat/rounded bottom base
        const t = (y + 1.5) / 0.5; // 0 to 1
        r = Math.sin(t * Math.PI / 2) * 1.35;
      } else if (y < 0.6) {
        // Bulbous body
        const t = (y + 1.0) / 1.6; // 0 to 1
        r = 1.35 - 0.75 * Math.pow(t, 2);
      } else if (y < 0.85) {
        // Cinched neck
        const t = (y - 0.6) / 0.25; // 0 to 1
        r = 0.6 - 0.15 * Math.sin(t * Math.PI);
      } else {
        // Flared top opening
        const t = (y - 0.85) / 0.65; // 0 to 1
        r = 0.6 + 0.65 * Math.pow(t, 1.5);
      }
      return r;
    };

    // 2. Generate particles for the Money Bag Body (Bronze-Gold)
    const bodyCount = 1400;
    const bodyGeometry = new THREE.BufferGeometry();
    const bodyPositions = new Float32Array(bodyCount * 3);
    const bodyInitial = new Float32Array(bodyCount * 3);

    for (let i = 0; i < bodyCount; i++) {
      // Distribute height y from -1.5 to 1.5
      const y = (i / bodyCount) * 3.0 - 1.5;
      const phi = Math.random() * Math.PI * 2;
      const baseR = getBagRadius(y);
      // Add vertical ruffles / folds
      const r = baseR * (1.0 + Math.sin(phi * 10) * 0.05);

      const x = r * Math.sin(phi);
      const z = r * Math.cos(phi);

      bodyPositions[i * 3] = x;
      bodyPositions[i * 3 + 1] = y;
      bodyPositions[i * 3 + 2] = z;

      bodyInitial[i * 3] = x;
      bodyInitial[i * 3 + 1] = y;
      bodyInitial[i * 3 + 2] = z;
    }
    bodyGeometry.setAttribute("position", new THREE.BufferAttribute(bodyPositions, 3));

    // 3. Generate particles for the Cinch Rope / Tie (Bright Yellow-Gold)
    const tieCount = 200;
    const tieGeometry = new THREE.BufferGeometry();
    const tiePositions = new Float32Array(tieCount * 3);
    const tieInitial = new Float32Array(tieCount * 3);

    for (let i = 0; i < tieCount; i++) {
      const phi = (i / tieCount) * Math.PI * 2;
      // Cinch height at 0.65
      const y = 0.65 + (Math.random() - 0.5) * 0.04;
      const baseR = getBagRadius(0.65);
      // Tie loops slightly wider than the neck cinch
      const r = baseR * (1.06 + Math.sin(phi * 24) * 0.02);

      const x = r * Math.sin(phi);
      const z = r * Math.cos(phi);

      tiePositions[i * 3] = x;
      tiePositions[i * 3 + 1] = y;
      tiePositions[i * 3 + 2] = z;

      tieInitial[i * 3] = x;
      tieInitial[i * 3 + 1] = y;
      tieInitial[i * 3 + 2] = z;
    }
    tieGeometry.setAttribute("position", new THREE.BufferAttribute(tiePositions, 3));

    // 4. Generate particles for the Dollar Sign '$' (Champagne Gold)
    const dollarCount = 300;
    const dollarGeometry = new THREE.BufferGeometry();
    const dollarPositions = new Float32Array(dollarCount * 3);
    const dollarInitial = new Float32Array(dollarCount * 3);

    // Generate 2D dollar shape coordinates first
    const rawDollarPoints: { x: number; y: number }[] = [];
    const sCount = 200;
    for (let i = 0; i < sCount; i++) {
      const t = (i / sCount) * Math.PI * 2.4 - Math.PI * 1.2;
      const sx = Math.sin(t) * 0.38;
      const sy = t * 0.18 - 0.2; // Centered on the bulbous body (from -0.4 to 0.0)
      rawDollarPoints.push({ x: sx, y: sy });
    }
    const lCount = 60;
    for (let i = 0; i < lCount; i++) {
      const t = (i / lCount) * 1.1 - 0.75;
      rawDollarPoints.push({ x: -0.04, y: t });
      rawDollarPoints.push({ x: 0.04, y: t });
    }

    // Cylindrical projection onto the front surface of the bag
    for (let i = 0; i < dollarCount; i++) {
      const pt = rawDollarPoints[i % rawDollarPoints.length];
      const y = pt.y;
      const R = getBagRadius(y);
      const theta = pt.x / (R || 1); // wrap angle
      
      const x = R * Math.sin(theta);
      const z = R * Math.cos(theta) + 0.04; // Slightly offset forward

      dollarPositions[i * 3] = x;
      dollarPositions[i * 3 + 1] = y;
      dollarPositions[i * 3 + 2] = z;

      dollarInitial[i * 3] = x;
      dollarInitial[i * 3 + 1] = y;
      dollarInitial[i * 3 + 2] = z;
    }
    dollarGeometry.setAttribute("position", new THREE.BufferAttribute(dollarPositions, 3));

    // 5. Materials configurations
    const bodyMaterial = new THREE.PointsMaterial({
      color: 0xB58A2B, // Dark Gold / Bronze
      size: 0.11,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.8,
    });

    const tieMaterial = new THREE.PointsMaterial({
      color: 0xFFF066, // Bright Yellow-Gold
      size: 0.16,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.95,
    });

    const dollarMaterial = new THREE.PointsMaterial({
      color: 0xFFE885, // Glowing Champagne Gold
      size: 0.14,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.95,
    });

    const bodyPoints = new THREE.Points(bodyGeometry, bodyMaterial);
    const tiePoints = new THREE.Points(tieGeometry, tieMaterial);
    const dollarPoints = new THREE.Points(dollarGeometry, dollarMaterial);

    const group = new THREE.Group();
    group.add(bodyPoints);
    group.add(tiePoints);
    group.add(dollarPoints);
    scene.add(group);

    // 6. Connecting lines / network web (only connect nearest surface points)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
    });
    
    const lineGeometry = new THREE.BufferGeometry();
    const maxConnections = 450;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineInitial = new Float32Array(maxConnections * 2 * 3);
    let lineIdx = 0;

    for (let i = 0; i < bodyCount && lineIdx < maxConnections; i += 4) {
      const x1 = bodyInitial[i * 3];
      const y1 = bodyInitial[i * 3 + 1];
      const z1 = bodyInitial[i * 3 + 2];

      for (let j = i + 1; j < bodyCount && lineIdx < maxConnections; j += 10) {
        const x2 = bodyInitial[j * 3];
        const y2 = bodyInitial[j * 3 + 1];
        const z2 = bodyInitial[j * 3 + 2];

        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
        if (dist < 0.38) { // fine density connection
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

      mouse.targetX = mouseX * 1.4;
      mouse.targetY = mouseY * 1.4;
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
      const rotY = elapsedTime * 0.22;
      const rotX = Math.sin(elapsedTime * 0.4) * 0.1;

      // Local cursor coordinates calculation (inverse rotation of target cursor in world space)
      const cosRY = Math.cos(-rotY);
      const sinRY = Math.sin(-rotY);
      const cosRX = Math.cos(-rotX);
      const sinRX = Math.sin(-rotX);

      // Mouse target coords in world-space (projected)
      const targetX = mouse.x * 2.0;
      const targetY = mouse.y * 2.0;
      const targetZ = 0.5;

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
          if (dist < 1.3) {
            const force = ((1.3 - dist) / 1.3) * 0.22;
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
      const bodyArr = bodyGeometry.attributes.position.array as Float32Array;
      updateDisplacement(bodyArr, bodyInitial, bodyCount);
      bodyGeometry.attributes.position.needsUpdate = true;

      const tieArr = tieGeometry.attributes.position.array as Float32Array;
      updateDisplacement(tieArr, tieInitial, tieCount);
      tieGeometry.attributes.position.needsUpdate = true;

      const dollarArr = dollarGeometry.attributes.position.array as Float32Array;
      updateDisplacement(dollarArr, dollarInitial, dollarCount);
      dollarGeometry.attributes.position.needsUpdate = true;

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

        if (dist < 1.3) {
          const force = ((1.3 - dist) / 1.3) * 0.22;
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

      bodyGeometry.dispose();
      tieGeometry.dispose();
      dollarGeometry.dispose();
      lineGeometry.dispose();
      bodyMaterial.dispose();
      tieMaterial.dispose();
      dollarMaterial.dispose();
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
