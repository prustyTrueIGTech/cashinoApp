import { Banner } from "./components/Banner";
import { Feedback } from "./components/Feedback";
import { MonthlyLotteries } from "./components/Monthly_Lotteries";
import { Slider } from "./components/slider";
import { Slider2 } from "./components/slider2";
import { Support } from "./components/support";
import { UpcomingAttraction } from "./components/Upcoming_Attraction";
import { WinnerGallery } from "./components/Winner_Gallery";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Slider />
      <UpcomingAttraction />
      <Slider2/>
      <MonthlyLotteries />
      <WinnerGallery />
      <Support />
      <Feedback />
    </div>
  );
};
