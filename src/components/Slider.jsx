import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import ReviewCard from "./ReviewCard"
import client1 from "../img/client1.jpg";
import client2 from "../img/client2.jpg";
import client3 from "../img/client3.jpg";
import { TiStarFullOutline } from "react-icons/ti";


function Slider() {
  return (
    // 50% on small screens and 33% on larger screens.
<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><ReviewCard
    rating1={<TiStarFullOutline size={20} className="text-[#015EC9]" />}
    rating2={<TiStarFullOutline size={20} className="text-[#015EC9]" />}
    image={client1} /></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><ReviewCard 
    
    rating1={<TiStarFullOutline size={20} className="text-[#015EC9]" />}
    rating2={<TiStarFullOutline size={20} className="text-[#787878]" />}
    image={client2}/></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><ReviewCard 
    
    rating1={<TiStarFullOutline size={20} className="text-[#015EC9]" />}
    rating2={<TiStarFullOutline size={20} className="text-[#787878]" />}
    image={client3}/></CarouselItem>
  </CarouselContent>
</Carousel>

  )
}

export default Slider
