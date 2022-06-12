import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { findUserbyId } from "../../api/backendAPI";
import { useAppDispatch } from "../../hooks/hooks";
import { loadUser } from "../../store/loadUser";
import { setProfile } from "../../store/reducers/profileSlice";
import GS from "../../styles/styles";
import ServisesSecond from "./ServisesSecond/ServisesSecond";

const MainPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("uToken");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }

    loadUser(dispatch, token);
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
