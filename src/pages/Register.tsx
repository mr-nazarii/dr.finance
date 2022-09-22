import { Formik } from "formik";
import React from "react";
import GS from "../styles/styles";
import Logo from "../components/texts/Logo";
import registerSchema from "../components/form/shemas/registerSchema";
import { RegisterFormValues } from "../components/types/formTypes";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../api/backendAPI";
import { FormButton, FormTextField } from "../styles/muiStyles";

const Register = () => {
  const initialValues: RegisterFormValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  return (
    <GS.Background>
      <GS.LoginBackground>
        <Logo />
        <GS.SectionTitle>Register</GS.SectionTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            const object = {
              firstname: values.firstname,
              lastname: values.lastname,
              email: values.email,
              password: values.password,
            };
            createUser(object);
            actions.resetForm();
            navigate("/login");
          }}
        >
          {(props) => (
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
                fullWidth="100%"
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
                fullWidth="100%"
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
                fullWidth="100%"
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
                fullWidth="100%"
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
                fullWidth="100%"
              />

              <GS.FalseWrapper jContent="center">
                {props.errors.confirmPassword &&
                props.touched.confirmPassword ? (
                  <GS.FalseText>{props.errors.confirmPassword}</GS.FalseText>
                ) : null}
              </GS.FalseWrapper>
              <GS.LogoWrapper jContent="space-between">
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
              </GS.LogoWrapper>
            </div>
          )}
        </Formik>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default Register;
