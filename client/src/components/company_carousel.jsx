import React, { useState, useEffect } from "react";

import afflatus from "../assets/companies/afflatus.png";
import blast_asia from "../assets/companies/blast_asia.png";
import delsan from "../assets/companies/delsan.png";
import dynamic_pc from "../assets/companies/dynamic_pc.png";
// Glory dapat here
import infopro from "../assets/companies/infopro.png";
import isr from "../assets/companies/isr.png";
// Manila Water
// Nexus Cloud
// Open Access BPO
import primer from "../assets/companies/primer.png";
// Prodigitality

const images = [afflatus, blast_asia, delsan, dynamic_pc, infopro, isr, primer];
const extendedImages = [...images, ...images]; // for seamless loop
const imageWidthVW = 12; // 10vw image + 2vw gap

function CompanyCarousel() {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const totalWidth = extendedImages.length * imageWidthVW / 2; // Reset after first set
    const interval = setInterval(() => {
      setScrollX((prev) => {
        if (prev >= totalWidth) {
          // Reset for seamless loop
          return 0;
        }
        return prev + 0.1; // Adjust for smoothness/speed
      });
    }, 24); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-white/30">
        <div
          className="flex m-5 gap-5 transition-transform duration-0"
          style={{
            transform: `translateX(-${scrollX}vw)`,
            width: `${extendedImages.length * imageWidthVW}vw`
          }}
        >
          {extendedImages.map((image, i) => (
            <img key={i} src={image} alt="" className="w-[10vw] h-auto" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyCarousel;
