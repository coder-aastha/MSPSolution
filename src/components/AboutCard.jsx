import { FaCheck } from "react-icons/fa";
import Button1 from './LargeButton';

function AboutCard() {
  return (
    <div className="w-full max-w-[700px] flex justify-center h-auto">
      <div className="text-[#015EC9] flex flex-col gap-6 justify-center items-center bg-white w-full h-auto rounded-xl p-4">
        <h1 className="text-[#015EC9] text-2xl font-medium w-full ml-16">About Our Company</h1>
        <div className="text-black flex flex-col gap-6">
          <h1 className="font-bold text-4xl md:text-6xl">High Range of</h1>
          <h1 className="font-bold text-4xl md:text-6xl">Exploring Protection</h1>
          <div className="text-base font-normal text-[#787878] flex flex-col gap-4">
            <div className="text-sm md:text-lg">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt debitis sint</p>
              <p>tempora. Corporis consequatur illo blanditiis</p>
              <p>voluptates aperiam quos aliquam totam aliquid rem explicabo,</p>
            </div>
            <div className="text-sm md:text-lg">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae</p>
              <p>praesentium recusandae eligendi modi hic</p>
            </div>
          </div>
          <div className="flex gap-3 text-sm md:text-lg">
            <div className="text-[#015EC9] mt-1"><FaCheck /></div>
            <p>We can save your money.</p>
          </div>
          <div className="flex gap-3 text-sm md:text-lg">
            <div className="text-[#015EC9] mt-1"><FaCheck /></div>
            <p>Production or trading of goods</p>
          </div>
          <div className="flex gap-3 text-sm md:text-lg">
            <div className="text-[#015EC9] mt-1"><FaCheck /></div>
            <p>Our life insurance is flexible</p>
          </div>
          <div>
            <Button1 title={"More Information"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
