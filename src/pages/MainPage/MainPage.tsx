import React, { useState } from "react";
import GS from "../../styles/styles";
import Header from "./Header";
import ServisesSecond from "./ServisesSecond";

const MainPage = () => {
  // get the setting menu to the different file
  // add an exit button off the settings menu
  const [right, setRight] = useState(false);
  return (
    <GS.MainBckground>
      <Header right={right} setRight={setRight} />
      <GS.LogoWrapper jContent="center">
        <GS.BlockWrapperChart>
          <GS.BlockImg src={process.env.PUBLIC_URL + "chart.png"} />
        </GS.BlockWrapperChart>
      </GS.LogoWrapper>

      <ServisesSecond services={["thumbUp", "thumbDown", "stats", "wallet"]} />
    </GS.MainBckground>
  );
};

export default MainPage;
