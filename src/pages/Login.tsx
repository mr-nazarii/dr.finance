import { Field, Formik } from "formik";
import React from "react";
import GS from "../styles/styles";
import Button from "../components/buttons/Button";
import Logo from "../components/texts/Logo";
import Input from "../components/form/Input";
import loginSchema from "../components/form/loginSchema";
import { LoginFormValues } from "../components/types/formTypes";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  return (
    <GS.Background>
      <GS.LoginBackground>
        <Logo />
        <GS.SectionTitle>Log In</GS.SectionTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
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
                type="text"
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
                <Field as={Button} onClick={() => props.handleSubmit()}>
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
