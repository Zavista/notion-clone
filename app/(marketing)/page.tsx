import Heading from "./_components/Heading";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading></Heading>
        <Hero></Hero>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MarketingPage;
