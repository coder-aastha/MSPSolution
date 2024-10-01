import image4 from "../img/image5.png"
import image5 from "../img/image6.png"
import image6 from "../img/image7.png"
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <div className="flex flex-col gap-6 min-h-screen px-4 md:px-8 mb-32 bg-white pt-20">
      <div className="text-[#015EC9] text-center text-2xl md:text-3xl lg:text-2xl font-medium mb-4 flex flex-col gap-4 md:gap-6">
        <h1>From Blog</h1>
        <div className="font-bold text-4xl md:text-5xl lg:text-6xl text-black flex flex-col gap-3 md:gap-4">
          <h1>News And Updates</h1>
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
        <div className="flex flex-wrap justify-center gap-5 md:gap-7 mb-8 text-lg">
          <BlogCard title={"Which allows you to pay down insurance bills"} image={image4} />
          <BlogCard
            title={"Leverage agile frameworks to provide"} image={image5} />
          <BlogCard title={"Leverage agile frameworks to provide"} image={image6} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
