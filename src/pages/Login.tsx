import { Field, Formik } from "formik";
import React, { useState } from "react";
import GS from "../styles/styles";
import Button from "../components/buttons/Button";
import Logo from "../components/texts/Logo";
import Input from "../components/form/Input";
import { LoginFormValues } from "../components/types/formTypes";
import { Link, useNavigate } from "react-router-dom";
import loginSchema from "../components/form/shemas/loginSchema";
import { loginUser } from "../api/backendAPI";

const Login = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const [warning, setWarning] = useState("");

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

            actions.resetForm();
            navigate("/mainPage");
          }}
        >
          {(props) => (
            <>
              <Field
                name="email"
                as={Input}
                type="text"
                placeholder="Email Address"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <GS.FalseWrapper>
                {props.errors.email && props.touched.email ? (
                  <GS.FalseText>{props.errors.email}</GS.FalseText>
                ) : null}
              </GS.FalseWrapper>

              <Field
                name="password"
                as={Input}
                type="password"
                placeholder="Password"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
              <GS.FalseWrapper>
                {props.errors.password && props.touched.password ? (
                  <GS.FalseText>{props.errors.password}</GS.FalseText>
                ) : null}
              </GS.FalseWrapper>

              <GS.LogoWrapper jContent="space-around">
                <Field
                  as={Button}
                  onClick={() => props.handleSubmit()}
                  type="submit"
                >
                  Log In
                </Field>
                <Link to="/register">
                  <Button bgColor="#DAAAFF">Register</Button>
                </Link>
              </GS.LogoWrapper>
            </>
          )}
        </Formik>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default Login;
