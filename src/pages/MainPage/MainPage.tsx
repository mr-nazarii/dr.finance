import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GS from "../../styles/styles";
import ServisesSecond from "./ServisesSecond/ServisesSecond";

const MainPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("uToken");

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, []);

  return (
    <GS.MainBckground>
      <GS.LogoWrapper jContent="center">
        <GS.BlockWrapperChart>
          <GS.BlockImg src={process.env.PUBLIC_URL + "chart.png"} />
        </GS.BlockWrapperChart>
      </GS.LogoWrapper>
      <ServisesSecond />
    </GS.MainBckground>
  );
};

export default MainPage;
