import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from "./button";
import ReviewCard from "./ReviewCard";
import { TiStarFullOutline } from "react-icons/ti";
import client1 from "../img/client1.jpg";
import client2 from "../img/client2.jpg";
import client3 from "../img/client3.jpg";
import '../css/CustomerReview.css'

const reviews = [
  {
    rating1: <TiStarFullOutline size={20} className="text-[#015EC9]" />,
    rating2: <TiStarFullOutline size={20} className="text-[#015EC9]" />,
    image: client1,
  },
  {
    rating1: <TiStarFullOutline size={20} className="text-[#015EC9]" />,
    rating2: <TiStarFullOutline size={20} className="text-[#787878]" />,
    image: client2,
  },
  {
    rating1: <TiStarFullOutline size={20} className="text-[#787878]" />,
    rating2: <TiStarFullOutline size={20} className="text-[#787878]" />,
    image: client3,
  },
  // Add more reviews if needed
];

function CustomerReview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayDelay = 4000; // Autoplay every 4 seconds

  // Handles clicking right arrow (forward), moving to the next review but keeping two visible
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Handles clicking left arrow (backward), moving to the previous review
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(handleNext, autoPlayDelay); // Automatically move to the next slide

    // Clear interval on component unmount or when user manually interacts
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Calculate the translateX value for horizontal sliding
  const translateValue = `translateX(-${currentIndex * 50}%)`;

  return (
    <div className="flex flex-col gap-6 min-h-screen px-4 md:px-8 bg-white pt-20">
      {/* Title Section */}
      <div className="text-[#015EC9] text-center text-2xl md:text-3xl lg:text-2xl font-medium mb-4 flex flex-col gap-4 md:gap-6">
        <h1>Testimonial</h1>
        <div className="font-bold text-4xl md:text-5xl lg:text-6xl text-black flex flex-col gap-3 md:gap-4">
          <h1>What Our Customers Are</h1>
          <h1>Saying</h1>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-around items-center gap-4">
        <Button title={<FaArrowLeft />} className="hidden md:block" onClick={handlePrev} />
        <Button title={<FaArrowRight />} className="hidden md:block" onClick={handleNext} />
      </div>

      {/* Review Cards Carousel Section */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: translateValue, width: `${reviews.length * 100}%` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-[50%] flex-shrink-0 p-4 review-carousel-item"
            >
              <ReviewCard
                rating1={review.rating1}
                rating2={review.rating2}
                image={review.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;