import { TiStarFullOutline } from "react-icons/ti";

function ReviewCard({ rating1, rating2, image }) {
  return (
    <div className="rounded-lg w-full sm:w-[80%] md:w-[47%] lg:w-[47%] bg-[#F2F5F9] flex flex-col justify-center sm:flex-row gap-6 p-4 shadow-lg ml-56">
      <div className="flex-shrink-0">
        <img
          className="w-full h-48 sm:w-48 sm:h-64 rounded-lg object-cover"
          src={image}
          alt="Client"
        />
      </div>
      <div className="flex flex-col justify-around">
        <h1 className="text-2xl">Client Name</h1>
        <p className="text-[#787878] text-lg">Profession</p>
        <div className="flex">
          <TiStarFullOutline size={20} className="text-[#015EC9]" />
          <TiStarFullOutline size={20} className="text-[#015EC9]" />
          <TiStarFullOutline size={20} className="text-[#015EC9]" />
          {rating1}
          {rating2}
        </div>
        <div className="text-[#787878] text-lg">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <span> Enim error molestiae aut modi corrupti fugit eaque rem nulla</span>
            <span> incidunt temporibus quisquam,</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;

