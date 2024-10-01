import { useState, useEffect } from "react";
import clientCompany1 from "../img/clientCompany1.jpg";
import clientCompany2 from "../img/clientCompany2.png";
import clientCompany3 from "../img/clientCompany3.png";
import clientCompany4 from "../img/clientCompany4.png";
import clientCompany5 from "../img/clientCompany5.jpg";
import clientCompany6 from "../img/clientCompany6.png";
import clientCompany7 from "../img/clientCompany7.png";
import clientCompany8 from "../img/clientCompany8.png";
import clientCompany9 from "../img/clientCompany9.jpg";
import clientCompany10 from "../img/clientCompany10.jpeg";
import clientCompany11 from "../img/clientCompany11.jpg";
import clientCompany12 from "../img/clientCompany12.png";
import clientCompany13 from "../img/clientCompany13.png";
import clientCompany14 from "../img/clientCompany14.png";
import { PiArrowSquareLeftFill } from "react-icons/pi";
import { PiArrowSquareRightFill } from "react-icons/pi";

const OurClients = () => {
  const clients = [
    {
      src: clientCompany1,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-10 sm:h-14 md:h-16 lg:h-20",
    },
    {
      src: clientCompany2,
      width: "w-32 sm:w-40 md:w-44 lg:w-52",
      height: "h-8 sm:h-10 md:h-12 lg:h-16",
    },
    {
      src: clientCompany3,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-10 sm:h-14 md:h-16 lg:h-20",
    },
    {
      src: clientCompany4,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-10 sm:h-14 md:h-16 lg:h-20",
    },
    {
      src: clientCompany5,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-8 sm:h-10 md:h-12 lg:h-16",
    },
    {
      src: clientCompany6,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-10 sm:h-14 md:h-16 lg:h-20",
    },
    {
      src: clientCompany7,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-10 sm:h-14 md:h-16 lg:h-20",
    },
    {
      src: clientCompany8,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-10 sm:h-14 md:h-16 lg:h-20",
    },
    {
      src: clientCompany9,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-18 sm:h-24 md:h-28 lg:h-36",
    },
    {
      src: clientCompany10,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-18 sm:h-24 md:h-28 lg:h-36",
    },
    {
      src: clientCompany11,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-10 sm:h-14 md:h-16 lg:h-20",
    },
    {
      src: clientCompany12,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-10 sm:h-14 md:h-16 lg:h-20",
    },
    {
      src: clientCompany13,
      width: "w-24 sm:w-32 md:w-40 lg:w-48",
      height: "h-10 sm:h-14 md:h-16 lg:h-20",
    },
    {
      src: clientCompany14,
      width: "w-28 sm:w-36 md:w-44 lg:w-52",
      height: "h-10 sm:h-14 md:h-16 lg:h-20",
    },
  ];

  const [currentIndices, setCurrentIndices] = useState([0, 1, 2, 3, 4, 5]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextClient = () => {
    setIsTransitioning(true);
    setCurrentIndices((prev) => {
      const newIndices = [
        ...prev.slice(1),
        (prev[prev.length - 1] + 1) % clients.length,
      ];
      return newIndices;
    });
  };

  const prevClient = () => {
    setCurrentIndices((prev) => {
      const newIndices = [
        (prev[0] - 1 + clients.length) % clients.length,
        ...prev.slice(0, -1),
      ];
      return newIndices;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextClient, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reset transition state after currentIndices changes
  // useEffect(() => {
  //   if (isTransitioning) {
  //     const timer = setTimeout(() => {
  //       setIsTransitioning(false);
  //     }, 500); // Adjust this duration to match your CSS transition duration
  //     return () => clearTimeout(timer);
  //   }
  // }, [currentIndices, isTransitioning]);

  return (
    <div className="text-center px-4 sm:px-6 lg:px-8 w-full mb-20">
      <h1 className="text-[#015EC9] text-xl sm:text-2xl md:text-3xl lg:text-2xl font-medium mb-2 sm:mb-4">
        Our Clients
      </h1>
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black mb-4 sm:mb-6">
        Few of Our Valuable Clients
      </h2>
      <div className="mx-auto border-2 border-gray-300 rounded-lg p-2 sm:p-4 w-full max-w-[1430px] h-[150px] sm:h-[200px] md:h-[250px] overflow-x-auto"> {/* Add overflow-x-auto here */}
        <div className="flex justify-end mb-2 sm:mb-4">
          <PiArrowSquareLeftFill
            size={30}
            className="cursor-pointer mr-2 sm:mr-4"
            onClick={prevClient}
          />
          <PiArrowSquareRightFill
            size={30}
            className="cursor-pointer"
            onClick={nextClient}
          />
        </div>
        <div className="flex justify-start items-center"> {/* Change to justify-start for horizontal alignment */}
          {currentIndices.map((index, i) => (
            <div
              key={`${index}-${i}`}
              className={`flex-shrink-0 px-1 sm:px-2 transition-all duration-500 ease-in-out ${
                i === 0
                  ? "w-0 opacity-0"
                  : i === 5
                  ? "w-0 opacity-0 absolute right-0"
                  : "w-1/4"
              }`}
              style={{
                transform: isTransitioning
                  ? `translateX(-${100 / 4}%)`
                  : "translateX(0)",
              }}
            >
              <img
                src={clients[index].src}
                alt={`Client ${index + 1}`}
                className={`${clients[index].width} ${clients[index].height} mx-auto`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurClients