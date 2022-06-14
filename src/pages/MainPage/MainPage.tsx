import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { loadUser } from "../../store/loadUser";

import GS from "../../styles/styles";
import PieChart from "./PieChart/PieChart";
import ServisesSecond from "./ServisesSecond/ServisesSecond";

const MainPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("uToken");
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, []);

  return (
    <GS.MainBckground>
      <GS.LogoWrapper jContent="center">
        <GS.BlockWrapperChart onClick={() => setShow(!show)}>
          <GS.BlockImg src={process.env.PUBLIC_URL + "chart.png"} />
        </GS.BlockWrapperChart>
        {show ? (
          <>
            <PieChart />
            <GS.MenuBackground onClick={() => setShow(!show)} />
          </>
        ) : null}
      </GS.LogoWrapper>
      <ServisesSecond />
    </GS.MainBckground>
  );
};

export default MainPage;
