import Button from "./Button";

function ServiceCard({ title, image }) {
  return (
    <div className="bg-white w-full md:w-72 lg:w-80 rounded-lg h-auto md:h-[374px] flex flex-col gap-6 mb-6">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col gap-4 md:gap-6 p-5 bg-[#F2F5F9] rounded-lg">
        <h1 className="text-2xl md:text-3xl text-black text-center md:text-left">
          {title}
        </h1>
        <p className="text-[#787878] text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
          laborum odit pariatur...
        </p>
        <div className="text-center md:text-left">
          <Button title={"Read More"} />
        </div>
      </div>
    
    </div>
  );
}

export default ServiceCard;
