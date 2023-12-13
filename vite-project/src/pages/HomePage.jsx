import Banner from "../Components/HomeSections/Banner";
import Cars from "../Components/HomeSections/Cars";
import Destinations from "../Components/HomeSections/Destination";
import Hero from "../Components/HomeSections/Hero";
import ImageSlider from "../Components/HomeSections/ImageSlider";
import Offers from "../Components/HomeSections/Offers";

import RentService from "../Components/HomeSections/RentService";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Hero />
      <Banner />
      <Destinations />
      <Offers />
      <RentService />
      <Cars />
      <ImageSlider />
    </div>
  );
};

export default HomePage;
