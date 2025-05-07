import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Home";
import { Footer } from "./components/footer";
import { Fiveteen_Lacks } from "./buyButton/Fiveteen_Lacks";
import { Ten_Lack } from "./buyButton/Ten_Lack";
import { Twenty_Lacks } from "./buyButton/Twenty_Lacks";
import { Fifty_Lacks } from "./buyButton/Fifty_Lack";
import { Fourty_Lacks } from "./buyButton/FourtyLacks";
import { OneCrore } from "./buyButton/OneCrore";
import { Sixty_Lack } from "./buyButton/Sixty_Lacks";
import { Seventy_Lacks } from "./buyButton/Seventy_Lacks";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/trueIgTech_30_weekly_lottery"
          element={<Fiveteen_Lacks />}
        />
        <Route path="/trueIgTech_10_weekly_lottery" element={<Ten_Lack />} />
        <Route
          path="/trueIgTech_21_weekly_lottery"
          element={<Twenty_Lacks />}
        />
        <Route path="/trueIgTech_50_weekly_lottery" element={<Fifty_Lacks />} />
        <Route path="/trueIgTech_40_weekly_lottery" element={<Fourty_Lacks />} />
        <Route path="/trueIgTech_1cr_weekly_lottery" element={<OneCrore />} />
        <Route path="/trueIgTech_60_weekly_lottery" element={<Sixty_Lack />} />
        <Route path="/trueIgTech_70_weekly_lottery" element={<Seventy_Lacks />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
