import { Banner } from "./components/Banner";
import { Feedback } from "./components/Feedback";
import { MonthlyLotteries } from "./components/MonthlyLotteries";
import { Slider } from "./components/slider";
import { Slider2 } from "./components/slider2";
import { Support } from "./components/support";
import {UpcomingAttraction} from "./components/UpcomingAttraction";
import {WinnerGallery} from "./components/WinnerGallery";

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
