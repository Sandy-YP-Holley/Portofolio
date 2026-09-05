import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / (window.innerHeight || 800),
      0.1,
      100
    );
    camera.position.z = window.innerWidth < 640 ? 8.5 : 7;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight || 800);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Palette: NestJS Signature Crimson, Deep Ruby & Pure Luminous White
    const crimson = new THREE.Color('#E0234E');
    const ruby = new THREE.Color('#9F0E30');
    const pureWhite = new THREE.Color('#FFFFFF');

    // 3. Central Interactive Assembly Group
    const assembly = new THREE.Group();
    scene.add(assembly);

    // Large Primary Icosahedron Wireframe
    const geom1 = new THREE.IcosahedronGeometry(2.4, 1);
    const wire1 = new THREE.WireframeGeometry(geom1);
    const mat1 = new THREE.LineBasicMaterial({
      color: crimson,
      transparent: true,
      opacity: 0.7,
      linewidth: 1.5,
    });
    const mesh1 = new THREE.LineSegments(wire1, mat1);
    assembly.add(mesh1);

    // Luminous Particle Nodes on Outer Vertices
    const pointsMat = new THREE.PointsMaterial({
      color: pureWhite,
      size: 0.08,
      transparent: true,
      opacity: 0.95,
    });
    const pointsMesh = new THREE.Points(geom1, pointsMat);
    assembly.add(pointsMesh);

    // Inner Dodecahedron Wireframe (Nested Core)
    const geom2 = new THREE.DodecahedronGeometry(1.5, 0);
    const wire2 = new THREE.WireframeGeometry(geom2);
    const mat2 = new THREE.LineBasicMaterial({
      color: ruby,
      transparent: true,
      opacity: 0.5,
      linewidth: 1,
    });
    const mesh2 = new THREE.LineSegments(wire2, mat2);
    assembly.add(mesh2);

    // Orbital Ring 1
    const ringGeom1 = new THREE.TorusGeometry(3.6, 0.018, 16, 90);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: crimson,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    assembly.add(ring1);

    // Orbital Ring 2 (Orthogonal)
    const ringGeom2 = new THREE.TorusGeometry(3.8, 0.012, 16, 90);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: pureWhite,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    assembly.add(ring2);

    // Floating Ambient Starfield Dust
    const count = 90;
    const dustGeom = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 16;
      dustPositions[i + 1] = (Math.random() - 0.5) * 12;
      dustPositions[i + 2] = (Math.random() - 0.5) * 8 - 1;
    }
    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: crimson,
      size: 0.045,
      transparent: true,
      opacity: 0.6,
    });
    const dustSystem = new THREE.Points(dustGeom, dustMat);
    scene.add(dustSystem);

    // 4. Pointer Tracking State attached to WINDOW
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = normX * 1.8;
      targetY = normY * 1.2;
      targetRotY = normX * 1.4;
      targetRotX = -normY * 1.1;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const normX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normY = -(touch.clientY / window.innerHeight) * 2 + 1;
        targetX = normX * 1.8;
        targetY = normY * 1.2;
        targetRotY = normX * 1.4;
        targetRotX = -normY * 1.1;
      }
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight || 800;
      camera.aspect = w / h;
      camera.position.z = w < 640 ? 8.5 : 7;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 5. Active Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth position lerping towards cursor
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      assembly.position.x = currentX;
      assembly.position.y = currentY;

      // Base rotation + cursor tilt
      const continuousY = elapsed * 0.25;
      const continuousX = Math.sin(elapsed * 0.4) * 0.15;

      currentRotX += (targetRotX + continuousX - currentRotX) * 0.06;
      currentRotY += (targetRotY + continuousY - currentRotY) * 0.06;

      assembly.rotation.x = currentRotX;
      assembly.rotation.y = currentRotY;

      // Spin internal elements independently
      mesh2.rotation.y -= delta * 0.5;
      mesh2.rotation.z += delta * 0.25;
      ring1.rotation.z += delta * 0.18;
      ring2.rotation.x -= delta * 0.12;

      // Gentle ambient starfield rotation
      dustSystem.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      geom1.dispose();
      wire1.dispose();
      mat1.dispose();
      geom2.dispose();
      wire2.dispose();
      mat2.dispose();
      pointsMat.dispose();
      ringGeom1.dispose();
      ringMat1.dispose();
      ringGeom2.dispose();
      ringMat2.dispose();
      dustGeom.dispose();
      dustMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-85"
      />
      {/* Subtle radial vignette so foreground text always has crisp contrast */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/20 via-transparent to-dark-950 pointer-events-none" />
    </div>
  );
};
