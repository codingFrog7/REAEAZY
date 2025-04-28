import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1572120360610-d971b9b78825?w=1600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1613977257363-707ba9348220?w=1600&h=600&fit=crop",
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative w-full h-72 sm:h-96 overflow-hidden rounded-b-xl mb-6">
      <img
        src={heroImages[current]}
        alt="Hero Slide"
        className="object-cover w-full h-full transition-none"
      />

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        <Button
          variant="secondary"
          size="sm"
          onClick={prevSlide}
          className="bg-black/50 text-white hover:bg-white hover:text-black"
        >
          Prev
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={nextSlide}
          className="bg-black/50 text-white hover:bg-white hover:text-black"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HeroSlider;
