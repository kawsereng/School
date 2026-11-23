import { Banner2 } from "./Components/Banner2";
import Notice from "./notice/page";
// import Container from "./Container/Container";
import HeroSlider from "./Swiper/HeroSlider";
import TeachersSection from "./teacher/page";

export default function Home() {
  return (
    <>
      
        <section className="max-w-full h-auto">
          <div className="">
            <HeroSlider/>
            <Banner2/>
            <Notice/>
            <TeachersSection/>


          </div>
        </section>
      
    </>
  );
}
