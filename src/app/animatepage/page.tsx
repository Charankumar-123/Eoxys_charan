"use client";
import { motion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function VideoBackground() {
  const meshRef = useRef<THREE.Mesh | null>(null);
  const { viewport } = useThree(); // Get viewport dimensions
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(null);
  const [videoAspect, setVideoAspect] = useState(16 / 9); // Default aspect ratio

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/videos/outputtt.mp4"; // Ensure correct path
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.play();

    video.onloadedmetadata = () => {
      setVideoAspect(video.videoWidth / video.videoHeight); // Get actual video aspect ratio
    };

    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    setVideoTexture(texture);
  }, []);

  useFrame(() => {
    if (videoTexture) {
      videoTexture.needsUpdate = true;
    }

    if (meshRef.current) {
      const { width, height } = viewport;

      let meshWidth, meshHeight;
      if (width / height > videoAspect) {
        meshWidth = width * 1.2; // Over-scale width by 1.2x to remove side gaps
        meshHeight = (width / videoAspect) * 1.2;
      } else {
        meshHeight = height * 1.2; // Over-scale height by 1.2x to remove top/bottom gaps
        meshWidth = (height * videoAspect) * 1.2;
      }

      meshRef.current.scale.set(meshWidth, meshHeight, 1);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1]}>
      <planeGeometry args={[1, 1]} />
      {videoTexture && <meshBasicMaterial map={videoTexture} toneMapped={false} />}
    </mesh>
  );
}

export default function Animate() {
  return (
    <div className="relative w-full h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 z-20 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">AIML Company</h1>
        <ul className="flex gap-6 text-gray-700 font-semibold">
          <li>
            <a href="#" className="hover:text-gray-900">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Background Animation Container */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-full">
          <ambientLight intensity={0.7} />
          <VideoBackground />
        </Canvas>
      </div>

      {/* Foreground Text Content */}
      <div className="relative flex flex-col justify-center items-center text-center text-white px-6 z-10 h-full">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg"
        >
          AIML Product Engineering Company
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl lg:text-3xl mt-4 drop-shadow-md"
        >
          Enabling to build Edge AIML Devices
        </motion.p>
      </div>
    </div>
  );
}
