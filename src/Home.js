import { Banner } from "./components/Banner";
import { Feedback } from "./components/Feedback";
import { Monthly_Lotteries } from "./components/Monthly_Lotteries";
import { Slider } from "./components/slider";
import { Slider2 } from "./components/slider2";
import { Support } from "./components/support";
import { Upcoming_Attraction } from "./components/Upcoming_Attraction";
import { Winner_Gallery } from "./components/Winner_Gallery";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Slider />
      <Upcoming_Attraction />
      <Slider2/>
      <Monthly_Lotteries />
      <Winner_Gallery />
      <Support />
      <Feedback />
    </div>
  );
};
