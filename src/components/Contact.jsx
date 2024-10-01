import { NavLink } from "react-router-dom";
import ContactImg from "../img/ContactImg.jpg";

export const Contact = () => {
  return (
    <div>
      <div>
        {/* <img className='w-full h-full' src={ContactImg} alt="" /> */}
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${ContactImg})` }}
        >
          <div className="p-16 flex flex-col items-center justify-center gap-10">
            <p className=" text-white text-6xl font-bold">
              Contact Us
            </p>
            <NavLink to="/">Home</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
