"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeRevolvingLogo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight1.position.set(5, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // Warm golden point light for spectacular highlights on the gold border
    const pointLight = new THREE.PointLight(0xFDB813, 3.5, 12, 0.5);
    pointLight.position.set(-3, 3, 3);
    scene.add(pointLight);

    // Create a group for the revolving plaque
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // Load logo texture
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load("/logo.png");
    logoTexture.colorSpace = THREE.SRGBColorSpace; // Standard color space for Next.js

    // 1. The Glass Plaque Mesh
    // Aspect ratio of logo is 1.5 (1024 x 682). So plaque width=3.3, height=2.2, depth=0.08
    const plaqueGeometry = new THREE.BoxGeometry(3.3, 2.2, 0.08);
    const plaqueMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.22,
      roughness: 0.1,
      metalness: 0.15,
      transmission: 0.9, // high glass transmission
      ior: 1.5,
      thickness: 0.25,
      depthWrite: false,
    });
    const plaqueMesh = new THREE.Mesh(plaqueGeometry, plaqueMaterial);
    logoGroup.add(plaqueMesh);

    // 2. Metallic Gold Border Bars
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37, // Gold
      metalness: 0.95,
      roughness: 0.18,
    });

    const borderThickness = 0.05;
    const borderDepth = 0.1;

    // Top border bar
    const topBorder = new THREE.Mesh(
      new THREE.BoxGeometry(3.36, borderThickness, borderDepth),
      goldMaterial
    );
    topBorder.position.y = 1.1 + borderThickness / 2;
    logoGroup.add(topBorder);

    // Bottom border bar
    const bottomBorder = new THREE.Mesh(
      new THREE.BoxGeometry(3.36, borderThickness, borderDepth),
      goldMaterial
    );
    bottomBorder.position.y = -1.1 - borderThickness / 2;
    logoGroup.add(bottomBorder);

    // Left border bar
    const leftBorder = new THREE.Mesh(
      new THREE.BoxGeometry(borderThickness, 2.2, borderDepth),
      goldMaterial
    );
    leftBorder.position.x = -1.65 - borderThickness / 2;
    logoGroup.add(leftBorder);

    // Right border bar
    const rightBorder = new THREE.Mesh(
      new THREE.BoxGeometry(borderThickness, 2.2, borderDepth),
      goldMaterial
    );
    rightBorder.position.x = 1.65 + borderThickness / 2;
    logoGroup.add(rightBorder);

    // 3. Logo Decals (Front and Back)
    // Scale logo slightly smaller than the plate boundaries
    const logoGeometry = new THREE.PlaneGeometry(3.05, 2.03);
    const logoFrontMaterial = new THREE.MeshStandardMaterial({
      map: logoTexture,
      transparent: true,
      roughness: 0.25,
      metalness: 0.1,
    });
    
    // Front face logo decal
    const logoFront = new THREE.Mesh(logoGeometry, logoFrontMaterial);
    logoFront.position.z = 0.041; // sit slightly in front of the glass face
    logoGroup.add(logoFront);

    // Back face logo decal (rotated 180 degrees around Y so it reads correctly from behind)
    const logoBack = new THREE.Mesh(logoGeometry, logoFrontMaterial);
    logoBack.position.z = -0.041;
    logoBack.rotation.y = Math.PI;
    logoGroup.add(logoBack);

    // 4. Subtle gold ambient floating particles
    const particleCount = 50;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];

    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(253, 224, 131, 0.95)");
        gradient.addColorStop(0.3, "rgba(212, 175, 55, 0.45)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(canvas);
    };

    for (let i = 0; i < particleCount; i++) {
      // Spread particles around the logo space
      particlePositions[i * 3] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
      particleSpeeds.push(0.3 + Math.random() * 0.5);
    }
    
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    
    const pTexture = createParticleTexture();
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.55,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse movement interaction (tilts logo on hover/mouse move)
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      mouse.targetX = mouseX * 0.35;
      mouse.targetY = mouseY * 0.35;
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
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
      const elapsed = clock.getElapsedTime();

      // Smooth mouse tracking interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 3D Revolve speed & floating up-and-down oscillation
      logoGroup.rotation.y = elapsed * 0.42; 
      logoGroup.position.y = Math.sin(elapsed * 1.3) * 0.12; 
      
      // Tilt logo relative to cursor coordinates & slight natural wobble
      logoGroup.rotation.x = mouse.y * 0.4 + Math.sin(elapsed * 0.7) * 0.04;
      logoGroup.rotation.z = -mouse.x * 0.18 + Math.cos(elapsed * 0.7) * 0.02;

      // Animate ambient particles floating up
      const pPositions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pPositions[i * 3 + 1] += 0.0025 * particleSpeeds[i]; 
        
        // Reset when it goes off screen height
        if (pPositions[i * 3 + 1] > 2.5) {
          pPositions[i * 3 + 1] = -2.5;
          pPositions[i * 3] = (Math.random() - 0.5) * 6;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Circular orbit for PointLight to cast dynamic reflections across gold and glass
      pointLight.position.x = Math.sin(elapsed * 1.5) * 4.5;
      pointLight.position.z = Math.cos(elapsed * 1.5) * 3 + 2;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up WebGL resources
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      
      plaqueGeometry.dispose();
      plaqueMaterial.dispose();
      goldMaterial.dispose();
      logoGeometry.dispose();
      logoFrontMaterial.dispose();
      logoTexture.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      pTexture.dispose();
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
