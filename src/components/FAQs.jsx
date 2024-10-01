import image1 from "../img/image1.png"
import FAQsComponent from "./FAQsComponent";

function FAQs() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center gap-36 mb-32">
      <div className="text-[#015EC9] flex flex-col   h-auto rounded-xl p-4 w-[50%] gap-10">
        <h1 className="text-[#015EC9] text-2xl font-medium w-full">Some Important FAQs</h1>
        <div className="text-black flex flex-col gap-6">
          <h1 className="font-bold text-4xl md:text-6xl">Common Frequently</h1>
          <h1 className="font-bold text-4xl md:text-6xl"> Asked Questions</h1>
          </div>
          <FAQsComponent />
          </div>
      <div>
        <img className="h-full" src={image1} alt="" />
      </div>
    </div>
  );
}

export default FAQs;
