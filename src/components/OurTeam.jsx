import Team1 from '../img/Team1.jpg';
import Team2 from '../img/Team2.jpg';
import Team3 from '../img/Team3.jpg';
import Team4 from '../img/Team4.jpg';
import TeamCard from "./TeamCard";

function OurTeam() {
  return (
    <div className="flex flex-col gap-6 min-h-screen px-4 md:px-8 mb-32 bg-white pt-20 w-full">
      <div className="text-[#015EC9] text-center text-2xl md:text-3xl lg:text-4xl font-medium mb-4 flex flex-col gap-4 md:gap-6">
        <h1>Our Team</h1>
        <div className="font-bold text-3xl md:text-5xl lg:text-6xl text-black flex flex-col gap-3 md:gap-4">
          <h1>Meet Our Expert Team</h1>
          <h1>Members</h1>
        </div>
      </div>
      <div className="text-[#787878] flex flex-col gap-8 md:gap-14">
        <div className="text-center">
          <p className="text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam.
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            Temporibus corporis itaque quis facere, numquam, ad culpa deserunt
            sint dolorem autem obcaecati, ipsam.
          </p>
          <p className="text-sm md:text-base lg:text-lg">Mollitia hic.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 md:gap-7 mb-8">
          <div className="flex-1 min-w-[200px] max-w-[250px]"> {/* Responsive Card Size */}
            <TeamCard image={Team1} />
          </div>
          <div className="flex-1 min-w-[200px] max-w-[250px]">
            <TeamCard image={Team2} />
          </div>
          <div className="flex-1 min-w-[200px] max-w-[250px]">
            <TeamCard image={Team3} />
          </div>
          <div className="flex-1 min-w-[200px] max-w-[250px]">
            <TeamCard image={Team4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
