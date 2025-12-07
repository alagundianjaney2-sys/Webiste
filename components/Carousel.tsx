"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Advanced Electric Switchgear Solutions",
    subtitle: "Powering the Future of Industrial Infrastructure",
    description: "Innovative, reliable, and efficient power distribution systems for modern industry.",
    image: "linear-gradient(135deg, #009999 0%, #006b6b 100%)",
  },
  {
    id: 2,
    title: "High Voltage Distribution Systems",
    subtitle: "Industry-Leading Performance & Safety",
    description: "Engineered for maximum reliability in demanding industrial environments.",
    image: "linear-gradient(135deg, #006b6b 0%, #004d4d 100%)",
  },
  {
    id: 3,
    title: "Smart Grid Technology",
    subtitle: "Intelligent Power Management",
    description: "Next-generation solutions for efficient energy distribution and monitoring.",
    image: "linear-gradient(135deg, #1ab0b0 0%, #009999 100%)",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: slide.image }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-light">
                {slide.subtitle}
              </p>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                {slide.description}
              </p>
              <div className="flex space-x-4">
                <Link href="/products" className="bg-white text-siemens-teal-600 hover:bg-siemens-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
                  Explore Products
                </Link>
                <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-siemens-teal-500 font-semibold py-4 px-10 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
