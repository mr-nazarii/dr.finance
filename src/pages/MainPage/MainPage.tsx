import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GS from "../../styles/styles";
import PieChart from "./PieChart/PieChart";
import ServisesSecond from "./ServisesSecond/ServisesSecond";

const MainPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("uToken");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  });

  return (
    <GS.MainBckground>
      <GS.LogoWrapper jContent="center">
        <GS.BlockWrapperChart onClick={() => setShow(!show)}>
          <GS.BlockImg src={process.env.PUBLIC_URL + "chart.png"} />
        </GS.BlockWrapperChart>

        <Modal
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          open={show}
          onClose={() => setShow(false)}
        >
          <PieChart />
        </Modal>
      </GS.LogoWrapper>
      <ServisesSecond />
    </GS.MainBckground>
  );
};

export default MainPage;
