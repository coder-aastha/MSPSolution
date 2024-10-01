import image3 from "../img/image3.png";
import AboutCompanyCard from "./AboutCompanyCard";

function AboutCard1() {
  return (
    <div className="w-full max-w-[700px] flex justify-center md:justify-start h-auto">
      <div className="flex flex-col gap-8 items-center justify-evenly bg-white w-full h-auto rounded-xl p-4">
        <div className="bg-[#F2F5F9] flex flex-col items-center h-[327px] w-full max-w-[580px]  rounded-lg">
          <img className="h-[275px] w-full" src={image3} alt="Company Image" />
        </div>
        <div className="flex flex-col gap-8 h-auto w-full max-w-[580px]">
          <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap gap-8 justify-center md:justify-start">
            <AboutCompanyCard number="129+" title="Insurance Policies" />
            <AboutCompanyCard number="99+" title="Awards Won" />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap gap-8 justify-center md:justify-start">
            <AboutCompanyCard number="556+" title="Skilled Agents" />
            <AboutCompanyCard number="967+" title="Team Members" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard1;
