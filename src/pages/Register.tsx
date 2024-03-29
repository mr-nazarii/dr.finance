import { Formik } from "formik";
import React, { useState } from "react";
import GS from "../styles/styles";
import registerSchema from "../components/form/shemas/registerSchema";
import { RegisterFormValues } from "../components/types/formTypes";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../api/backendAPI";
import { FormTextField } from "../styles/muiStyles";
import { Image, Row } from "react-bootstrap";

const Register = () => {
  const initialValues: RegisterFormValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [warning, setWarning] = useState("");

  const navigate = useNavigate();
  return (
    <GS.Background
      className="d-flex align-items-center justify-content-center
    "
    >
      <Row className="d-flex flex-column">
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (values, actions) => {
            const object = {
              firstname: values.firstname,
              lastname: values.lastname,
              email: values.email,
              password: values.password,
            };
            const create = await createUser(object);

            console.log(create);

            if (create.response.data === undefined) {
              setWarning(create.message);
              return;
            }

            actions.resetForm();
            navigate("/login");
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
                <div style={{ marginTop: "20px", width: "100%" }}>
                  <FormTextField
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    variant="filled"
                    type="text"
                    placeholder="firstname"
                    onChange={props.handleChange("firstname")}
                    value={props.values.firstname}
                    fullWidth={true}
                  />
                  <GS.FalseWrapper jContent="center">
                    {props.errors.firstname && props.touched.firstname ? (
                      <GS.FalseText>{props.errors.firstname}</GS.FalseText>
                    ) : null}
                  </GS.FalseWrapper>
                  <FormTextField
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    variant="filled"
                    type="text"
                    placeholder="lastname"
                    onChange={props.handleChange("lastname")}
                    value={props.values.lastname}
                    fullWidth={true}
                  />

                  <GS.FalseWrapper jContent="center">
                    {props.errors.lastname && props.touched.lastname ? (
                      <GS.FalseText>{props.errors.lastname}</GS.FalseText>
                    ) : null}
                  </GS.FalseWrapper>
                  <FormTextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="filled"
                    type="text"
                    placeholder="Email"
                    onChange={props.handleChange("email")}
                    value={props.values.email}
                    fullWidth={true}
                  />

                  <GS.FalseWrapper jContent="center">
                    {props.errors.email && props.touched.email ? (
                      <GS.FalseText>{props.errors.email}</GS.FalseText>
                    ) : null}
                  </GS.FalseWrapper>

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
                  <GS.FalseWrapper jContent="center">
                    {props.errors.password && props.touched.password ? (
                      <GS.FalseText>{props.errors.password}</GS.FalseText>
                    ) : null}
                  </GS.FalseWrapper>
                  <FormTextField
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    variant="filled"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={props.handleChange("confirmPassword")}
                    value={props.values.confirmPassword}
                    fullWidth={true}
                  />

                  <GS.FalseWrapper jContent="center">
                    {props.errors.confirmPassword &&
                    props.touched.confirmPassword ? (
                      <GS.FalseText>
                        {props.errors.confirmPassword}
                      </GS.FalseText>
                    ) : null}
                  </GS.FalseWrapper>
                  {/* <GS.LogoWrapper jContent="space-between">
                  <FormButton
                    variant="contained"
                    size="large"
                    backgroundcolor="login"
                    component={Link}
                    to="/login"
                  >
                    Log In
                  </FormButton>

                  <FormButton
                    variant="contained"
                    size="large"
                    onClick={() => props.handleSubmit()}
                    type="submit"
                  >
                    Register
                  </FormButton>
                </GS.LogoWrapper> */}
                </div>
              </GS.LoginBackground>
              <GS.LoginBackground className="d-flex align-items-center justify-content-center flex-column flex-sm-row p-0">
                <GS.ButtonsLinks
                  to="/login"
                  className="text-center fw-bolder fs-5 text-uppercase py-3 m-0"
                >
                  Log In
                </GS.ButtonsLinks>
                <GS.ButtonsLinks
                  to={false}
                  theme="dark"
                  className="text-center fw-bolder fs-5 text-uppercase py-3 m-0 order-first order-sm-last"
                  type="submit"
                  onClick={() => props.handleSubmit()}
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

export default Register;
