import { FaUser, FaCalendar, FaCommentAlt } from "react-icons/fa";
import ReadMorebtn from "./ReadMorebtn";

function BlogCard({ title, image }) {
  return (
    <div className="bg-white w-full sm:w-[90%] md:w-[45%] lg:w-[30%] rounded-lg h-[550px] flex flex-col gap-6 mb-6">
      {/* Image section */}
      <div className="h-60">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Content section */}
      <div className="flex flex-col gap-4 md:gap-6 p-5 bg-[#F2F5F9] rounded-lg flex-grow">
        <div className="flex justify-between text-xs md:text-sm">
          <div className="flex gap-2 items-center">
            <FaUser className="text-[#015EC9]" />
            <div>Martin .C</div>
          </div>
          <div className="flex gap-2 items-center">
            <FaCalendar className="text-[#015EC9]" />
            <div>30 Dec 2025</div>
          </div>
          <div className="flex gap-2 items-center">
            <FaCommentAlt className="text-[#015EC9]" />
            <div>6 comments</div>
          </div>
        </div>

        {/* Title and text */}
        <h1 className="text-2xl text-black line-clamp-2">
          {title}
        </h1>
        <p className="text-[#787878] text-sm md:text-base line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero
          soluta impedit eligendi? Quibusdam, laudantium.
        </p>

        {/* Read more button */}
        <div className="mt-auto">
          <ReadMorebtn />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
