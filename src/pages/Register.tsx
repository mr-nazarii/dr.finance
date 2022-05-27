import { Field, Formik } from "formik";
import React from "react";
import GS from "../styles/styles";
import Button from "../components/buttons/Button";
import Logo from "../components/texts/Logo";
import Input from "../components/form/Input";
import loginSchema from "../components/form/loginSchema";
import { RegisterFormValues } from "../components/types/formTypes";
import { Link, useNavigate } from "react-router-dom";

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
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
            navigate("/mainPage");
          }}
        >
          {(props) => (
            <>
              <Field
                name="name"
                as={Input}
                type="text"
                placeholder="Name"
                onChangeText={props.handleChange("name")}
                value={props.values.name}
              />
              <GS.FalseWrapper>
                {props.errors.name && props.touched.name ? (
                  <GS.FalseText>{props.errors.name}</GS.FalseText>
                ) : null}
              </GS.FalseWrapper>

              <Field
                name="surname"
                as={Input}
                type="text"
                placeholder="Surname"
                onChangeText={props.handleChange("surname")}
                value={props.values.surname}
              />
              <GS.FalseWrapper>
                {props.errors.surname && props.touched.surname ? (
                  <GS.FalseText>{props.errors.surname}</GS.FalseText>
                ) : null}
              </GS.FalseWrapper>

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
              <Field
                name="confirmPassword"
                as={Input}
                type="text"
                placeholder="Confirm Password"
                onChangeText={props.handleChange("confirmPassword")}
                value={props.values.confirmPassword}
              />
              <GS.FalseWrapper>
                {props.errors.confirmPassword &&
                props.touched.confirmPassword ? (
                  <GS.FalseText>{props.errors.confirmPassword}</GS.FalseText>
                ) : null}
              </GS.FalseWrapper>
              <GS.LogoWrapper jContent="space-around">
                <Link to="/login">
                  <Button>Log In</Button>
                </Link>
                <Field
                  as={Button}
                  bgColor="#DAAAFF"
                  onClick={() => props.handleSubmit()}
                >
                  Register
                </Field>
              </GS.LogoWrapper>
            </>
          )}
        </Formik>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default Register;
