import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Message from "../components/Message";
import Services from "../components/Services";

export default function Page(): JSX.Element {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <HeroText />
      <Hero />
      <Services />
      <Testimonial />
      <Message />
      <Footer />
    </div>
  );
}
