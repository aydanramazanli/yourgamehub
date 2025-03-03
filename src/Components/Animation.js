import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import '../Styles/Amimation.css';

const Animation = ({ children }) => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xf8f9fa, 1); // Light background color
    
    // Only append if the ref is empty
    if (mountRef.current && !mountRef.current.querySelector('canvas')) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    // Create positions and colors for particles
    for (let i = 0; i < particlesCount * 3; i++) {
      // Positions - create a wider spread
      posArray[i] = (Math.random() - 0.5) * 15;
      
      // Colors - light pastel colors
      if (i % 3 === 0) { // R component
        colorArray[i] = 0.8 + Math.random() * 0.2; // Mostly light
      } else if (i % 3 === 1) { // G component
        colorArray[i] = 0.8 + Math.random() * 0.2;
      } else { // B component
        colorArray[i] = 0.9 + Math.random() * 0.1;
      }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    // Material with custom vertex colors
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add some ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Position camera
    camera.position.z = 5;
    
    // Mouse interaction
    const mouse = {
      x: 0,
      y: 0
    };
    
    window.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Slow rotation
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0003;
      
      // Mouse movement effect
      particlesMesh.rotation.x += mouse.y * 0.0005;
      particlesMesh.rotation.y += mouse.x * 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', () => {});
      mountRef.current && mountRef.current.removeChild(renderer.domElement);
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div className="animated-background-container">
      <div ref={mountRef} className="animated-background"></div>
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default Animation;