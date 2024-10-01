import { FaArrowRight } from "react-icons/fa"

function ReadMorebtn() {
  return (
    <div>
      <button
        className="text-lg font-bold text-black flex gap-2 "
      >
        Read More<FaArrowRight className="mt-1" />
      </button>
    </div>
  )
}

export default ReadMorebtn
