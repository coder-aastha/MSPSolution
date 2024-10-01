import Card from "./Card";
import { FaRegHandshake } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { LuTarget } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa";

function Features() {
  return (
    <div className="flex flex-col gap-6 min-h-screen px-4 md:px-8 mb-16">
      <div className="text-[#015EC9] text-center text-2xl md:text-3xl lg:text-4xl mb-4 flex flex-col gap-4 md:gap-6">
        <h1>Our Features</h1>
        <div className="font-bold text-4xl md:text-5xl lg:text-6xl text-black flex flex-col gap-3 md:gap-4">
          <h1>Insurance Provide You a Better</h1>
          <h1>Future</h1>
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
          <Card title={"Trusted Company"} icon={<FaRegHandshake size={80} />} />
          <Card
            title={"Anytime Money Back"}
            icon={<FaDollarSign size={80} />}
          />
          <Card title={"Flexible Plans"} icon={<LuTarget size={80} />} />
          <Card title={"24/7 Fast Support"} icon={<FaHeadphones size={80} />} />
        </div>
      </div>
    </div>
  );
}

export default Features;
