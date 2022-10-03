import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { colorVariables } from "../../styles/colors";
import GS from "../../styles/styles";
import PieChart from "./PieChart/PieChart";
import ServisesSecond from "./ServisesSecond/ServisesSecond";
import { AnimatePresence, motion } from "framer-motion";

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
    <GS.MainBckground className="">
      <Row className="d-flex justify-content-center pb-4 gap-3">
        <Col sm="12" className="d-flex justify-content-center">
          <GS.BlockWrapperChart
            className="d-flex flex-column flex-sm-row text-center text-sm-start align-items-center justify-content-around p-0"
            onClick={() => setShow(!show)}
          >
            <AnimatePresence>
              <Image
                style={{
                  backgroundColor: `${colorVariables.white}`,
                }}
                src="./imgDefault/chartD.png"
                width={"200"}
              />
            </AnimatePresence>
            <div className="px-3">
              <p className="fs-4">FINANCES</p>
              <p className="fs-1">GRAPH</p>
            </div>
          </GS.BlockWrapperChart>
        </Col>
        <Modal
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          open={show}
          onClose={() => setShow(false)}
        >
          <PieChart />
        </Modal>
        <ServisesSecond />
      </Row>
    </GS.MainBckground>
  );
};

export default MainPage;
