import { Banner2 } from "./Components/Banner2";
import Container from "./Container/Container";
import HeroSlider from "./Swiper/HeroSlider";

export default function Home() {
  return (
    <>
      
        <section className="max-w-full h-auto">
          <div className="">
            <HeroSlider/>
            <Banner2/>


          </div>
        </section>
      
    </>
  );
}
