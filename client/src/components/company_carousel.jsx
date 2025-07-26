import { useState, useEffect } from "react";
import {images} from "../data/company_data.js";

const extendedImages = [...images, ...images]; // for seamless loop
const imageWidthVW = 6; // 10vw image + 2vw gap

function CompanyCarousel() {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const totalWidth = images.length * imageWidthVW*2; // Only one set
    const interval = setInterval(() => {
      setScrollX((prev) => {
        if (prev >= totalWidth) {
          // Reset for seamless loop
          return 8;
        }
        return prev + 0.1 ; // Adjust for smoothness/speed
      });
    }, 18); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="">
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
