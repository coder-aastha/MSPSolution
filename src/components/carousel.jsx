import { useState, useEffect } from "react";
import image1 from "../img/image1.png";
import image3 from "../img/image3.png";

const Carousel = () => {
  const slides = [
    {
      title: "Welcome To MSP Solution",
      subtitle: "Achieve the best tech & digital experiences",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam",
      image: image1,
      buttonText: "Explore More",
      buttonLink: "#",
    },
    {
      title: "Welcome To MSP Solution",
      subtitle: "Driving digital success with innovative IT solutions.",
      description:
        "With a focus on customization and scalability, we tailor our services to meet your unique need.",
      image: image3,
      buttonText: "Explore More",
      buttonLink: "#",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]); // Re-run the effect when the currentSlide changes

  return (
    <div className="header-carousel relative w-full h-[700px] sm:h-[500px] md:h-[600px] overflow-hidden flex mb-28">
      {/* Carousel container with sliding effect */}
      <div
        className="carousel-track flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Move slides
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="header-carousel-item w-full h-full flex-shrink-0 flex items-center justify-center"
            style={{ backgroundColor: "#025DC9" }}
          >
            <div className="carousel-caption w-full h-full flex items-center justify-center">
              <div className="container mx-auto flex flex-col lg:flex-row gap-4 flex-wrap lg:flex-nowrap p-5">
                {/* Text Section */}
                <div className="lg:w-7/12 p-2 sm:p-5">
                  <div className="text-center lg:text-left flex flex-col gap-4 md:gap-5">
                    {/* Title */}
                    <h4 className="text-lg sm:text-xl md:text-2xl text-white uppercase font-bold mb-2 sm:mb-4 leading-none">
                      {slide.title}
                    </h4>

                    {/* Subtitle */}
                    <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                      {slide.subtitle}
                    </h3>

                    {/* Description */}
                    <p className="text-white mb-4 sm:mb-5 text-base sm:text-lg md:text-xl lg:text-2xl">
                      {slide.description}
                    </p>

                    {/* Button */}
                    <div className="flex justify-center lg:justify-start mb-2 sm:mb-4">
                      <a
                        className="btn btn-dark rounded-full py-2 sm:py-3 px-4 sm:px-6 bg-white text-black transition-all duration-500 hover:bg-[#025DC9] hover:text-white hover:border-2 hover:px-6"
                        href={slide.buttonLink}
                      >
                        {slide.buttonText} <i className="fas fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="lg:w-5/12 p-2 sm:p-5 flex justify-center lg:justify-end">
                  <img
                    src={slide.image}
                    className="w-full h-auto max-h-[400px] sm:max-h-[300px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                    alt={slide.title}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center transition duration-500 hover:shadow-lg"
        >
          &#10094; {/* Left Arrow */}
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center transition duration-500 hover:shadow-lg"
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default Carousel;