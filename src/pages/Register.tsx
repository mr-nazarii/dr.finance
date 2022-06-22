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
    name: "",
    surname: "",
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
              name: values.name,
              surname: values.surname,
              email: values.email,
              password: values.password,
            };
            createUser(object);
            actions.resetForm();
            navigate("/login");
          }}
        >
          {(props) => (
            <>
              <FormTextField
                id="name"
                name="name"
                label="Name"
                variant="filled"
                type="text"
                placeholder="Name"
                onChange={props.handleChange("name")}
                value={props.values.name}
              />
              <GS.FalseWrapper jContent="center">
                {props.errors.name && props.touched.name ? (
                  <GS.FalseText>{props.errors.name}</GS.FalseText>
                ) : null}
              </GS.FalseWrapper>
              <FormTextField
                id="surname"
                name="surname"
                label="Surname"
                variant="filled"
                type="text"
                placeholder="Surname"
                onChange={props.handleChange("surname")}
                value={props.values.surname}
              />

              <GS.FalseWrapper jContent="center">
                {props.errors.surname && props.touched.surname ? (
                  <GS.FalseText>{props.errors.surname}</GS.FalseText>
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
              />
              <GS.FalseWrapper jContent="center">
                {props.errors.password && props.touched.password ? (
                  <GS.FalseText>{props.errors.password}</GS.FalseText>
                ) : null}
              </GS.FalseWrapper>
              <FormTextField
                id="confirmPassword"
                name="confirmPassword"
                label="ConfirmPassword"
                variant="filled"
                type="password"
                placeholder="Confirm Password"
                onChange={props.handleChange("confirmPassword")}
                value={props.values.confirmPassword}
              />

              <GS.FalseWrapper jContent="center">
                {props.errors.confirmPassword &&
                props.touched.confirmPassword ? (
                  <GS.FalseText>{props.errors.confirmPassword}</GS.FalseText>
                ) : null}
              </GS.FalseWrapper>
              <GS.LogoWrapper jContent="space-around">
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
            </>
          )}
        </Formik>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default Register;
