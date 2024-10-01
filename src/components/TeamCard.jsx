import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function TeamCard({ image }) {
  return (
    <div className="relative bg-[#015EC9] w-full md:w-72 lg:w-60 rounded-lg lg:h-[330px] md:h-[374px] flex flex-col gap-4 mb-6 group">
      <div>
        <img className="rounded-t-lg w-full" src={image} alt="" />
      </div>
      <div className="text-white text-center flex flex-col">
        <h1 className="text-2xl">David James</h1>
        <h1 className="text-lg">Profession</h1>
      </div>

      {/* Social icons */}
      <div className="team-icon absolute top-16 right-0  transition-all duration-500 opacity-0 group-hover:opacity-100 z-10 flex flex-col space-y-2 text-white bg-[#015EC9] rounded-l-lg">
        <a className="btn btn-primary btn-sm-square rounded-full p-2" href="#">
          <FontAwesomeIcon icon={faFacebookF}/>
        </a>
        <a className="btn btn-primary btn-sm-square rounded-full p-2" href="#">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
        <a className="btn btn-primary btn-sm-square rounded-full p-2" href="#">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </div>
    </div>
  );
}

export default TeamCard;
