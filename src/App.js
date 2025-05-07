import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Home";
import { Footer } from "./components/footer";
import {FifteenLacks} from "./buyButton/Fiveteen_Lacks";
import {TenLacks} from "./buyButton/TenLack";
import {TwentyLacks} from "./buyButton/TwentyLacks";
import {FiftyLacks} from "./buyButton/Fifty_Lacks";
import {FourtyLacks} from "./buyButton/FourtyLacks";
import {OneCrore} from "./buyButton/OneCrore";
import {SeventyLacks} from "./buyButton/SeventyLacks";
import {SixtyLack} from "./buyButton/SixtyLacks";



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trueIgTech_15_weekly_lottery" element={<FifteenLacks  />} />
        <Route path="/trueIgTech_10_weekly_lottery" element={<TenLacks  />} />
        <Route path="/trueIgTech_21_weekly_lottery" element={<TwentyLacks />} />
        <Route path="/trueIgTech_50_weekly_lottery" element={<FiftyLacks />} />
        <Route path="/trueIgTech_40_weekly_lottery" element={<FourtyLacks />} />
        <Route path="/trueIgTech_1cr_weekly_lottery" element={<OneCrore />} />
        <Route path="/trueIgTech_60_weekly_lottery" element={<SixtyLack />} />
        <Route path="/trueIgTech_70_weekly_lottery" element={<SeventyLacks />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
