import AboutCard from "./AboutCard";
import AboutCard1 from "./AboutCard1";

function AboutCompany() {
  return (
    <div id="about" className="flex flex-col md:flex-row justify-between flex-wrap gap-8 md:gap-14 px-4 mb-28 lg:flex-nowrap">
      <AboutCard />
      <AboutCard1 />
    </div>
  );
}

export default AboutCompany;
