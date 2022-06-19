import { Formik } from "formik";
import React, { useState } from "react";
import GS from "../styles/styles";
import Logo from "../components/texts/Logo";
import { LoginFormValues } from "../components/types/formTypes";
import { Link, useNavigate } from "react-router-dom";
import loginSchema from "../components/form/shemas/loginSchema";
import { loginUser } from "../api/backendAPI";
import { useAppDispatch } from "../hooks/hooks";
import { profileTokenConfigure } from "../store/reducers/profileSlice";
import { FormButton, FormTextField } from "../styles/muiStyles";

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
    <GS.Background>
      <GS.LoginBackground>
        <Logo />
        <GS.SectionTitle>Log In</GS.SectionTitle>
        <GS.FalseWrapper jContent="center">
          <GS.FalseText>{warning}</GS.FalseText>
        </GS.FalseWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={async (values, actions) => {
            console.log({ values, actions });

            const auth = await loginUser(values);

            if (auth.status) {
              setWarning(auth.data.message);
              return;
            }

            dispatch(profileTokenConfigure(auth));
            localStorage.setItem("uToken", auth);
            actions.resetForm();
            navigate("/mainPage");
          }}
        >
          {(props) => (
            <>
              <FormTextField
                id="email"
                name="email"
                label="Email"
                variant="filled"
                type="text"
                placeholder="Email Address"
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

              <GS.LogoWrapper jContent="space-around">
                <FormButton
                  variant="contained"
                  size="large"
                  backgroundColor="login"
                  onClick={() => props.handleSubmit()}
                  type="submit"
                >
                  Log In
                </FormButton>
                <FormButton
                  component={Link}
                  to="/register"
                  variant="contained"
                  size="large"
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

export default Login;
