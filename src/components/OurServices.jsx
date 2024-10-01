import ServiceCard from "./ServiceCard";
import image4 from "../img/image5.png"
import image5 from "../img/image6.png"
import image6 from "../img/image7.png"
import image7 from "../img/image4.png"

// import { FaUsers } from "react-icons/fa";
// import { FaHospital } from "react-icons/fa";
// import { FaCar } from "react-icons/fa";
// import { IoHome } from "react-icons/io5";
import LargeButton from "./LargeButton";



function OurServices() {
  return (
    <div className="flex flex-col gap-6 min-h-screen px-4 md:px-8 mb-32 bg-white pt-20 w-full">
      <div className="text-[#015EC9] text-center text-2xl md:text-3xl lg:text-2xl font-medium mb-4 flex flex-col gap-4 md:gap-6">
        <h1>Our Services</h1>
        <div className="font-bold text-4xl md:text-5xl lg:text-6xl text-black flex flex-col gap-3 md:gap-4">
          <h1>We Provide Best Services</h1>
        </div>
      </div>
      <div className="text-[#787878] flex flex-col gap-8 md:gap-14">
        <div className="text-center">
          <p className="text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            temporibus corporis itaque quis facere, numquam, ad culpa deserunt
            sint dolorem autem obcaecati, ipsam
          </p>
          <p className="text-sm md:text-base lg:text-lg">mollitia hic.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 md:gap-7 mb-8">
          <ServiceCard title={"Life Insurance"} image={image4} />
          <ServiceCard
            title={"Health Insurance"} image={image5} />
          <ServiceCard title={"Car Insurance"} image={image6} />
          <ServiceCard title={"Home Insurance"} image={image7} />
        </div>
      </div>
      <div className="text-center md:mt-16 lg:mt-24 mb-20 " >
        <LargeButton title={"More Services"} />
      </div>
    </div>
  );
}

export default OurServices;
