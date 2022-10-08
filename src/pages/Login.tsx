import { Formik } from "formik";
import React, { useState } from "react";
import GS from "../styles/styles";
import { LoginFormValues } from "../components/types/formTypes";
import { Link, useNavigate } from "react-router-dom";
import loginSchema from "../components/form/shemas/loginSchema";
import { loginUser } from "../api/backendAPI";
import { useAppDispatch } from "../hooks/hooks";
import { profileTokenConfigure } from "../store/reducers/profileSlice";
import { FormTextField } from "../styles/muiStyles";
import { Image, Row } from "react-bootstrap";

const Login = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };
  const dispatch = useAppDispatch();
  const [warning, setWarning] = useState("");
  // change local storage to JWT in the future
  const navigate = useNavigate();
  return (
    <GS.Background
      className="d-flex align-items-center justify-content-center
    "
    >
      <Row className="d-flex flex-column">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={async (values, actions) => {
            const auth = await loginUser(values);
            if (typeof auth === "string") {
              dispatch(profileTokenConfigure(auth));
              localStorage.setItem("uToken", auth);
              actions.resetForm();
              navigate("/mainPage");
            } else if (!auth) {
              setWarning(auth.data.message);
              return;
            } else if (auth.response.data === undefined) {
              setWarning(auth.message);
              return;
            }
            console.log(auth);
          }}
        >
          {(props) => (
            <>
              <GS.LoginBackground className="d-flex align-items-center justify-content-center flex-column  px-3 px-sm-5 py-2">
                <div className="d-flex gap-4 align-items-center">
                  <Link to="/">
                    <Image fluid src="./icons/back.svg" />
                  </Link>
                  <GS.LogoMain fontSize="33px">Dr.Finance </GS.LogoMain>
                </div>

                <GS.FalseWrapper jContent="center">
                  <GS.FalseText>{warning}</GS.FalseText>
                </GS.FalseWrapper>

                <GS.InputsWrapper>
                  <FormTextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="filled"
                    type="text"
                    placeholder="Email Address"
                    onChange={props.handleChange("email")}
                    value={props.values.email}
                    fullWidth={true}
                  />

                  <FormTextField
                    id="password"
                    name="password"
                    label="Password"
                    variant="filled"
                    type="password"
                    placeholder="Password"
                    onChange={props.handleChange("password")}
                    value={props.values.password}
                    fullWidth={true}
                  />
                </GS.InputsWrapper>
              </GS.LoginBackground>
              <GS.LoginBackground className="d-flex align-items-center justify-content-center flex-column flex-sm-row p-0">
                <GS.ButtonsLinks
                  to={false}
                  className="text-center fw-bolder fs-5 text-uppercase py-3 m-0 "
                  type="submit"
                  theme="dark"
                  onClick={() => props.handleSubmit()}
                >
                  Log In
                </GS.ButtonsLinks>
                <GS.ButtonsLinks
                  to="/register"
                  className="text-center fw-bolder fs-5 text-uppercase py-3 m-0 "
                >
                  Register
                </GS.ButtonsLinks>
              </GS.LoginBackground>
            </>
          )}
        </Formik>
      </Row>
    </GS.Background>
  );
};

export default Login;
