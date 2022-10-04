import { Field, Formik } from "formik";
import feedbackSchema from "../../components/form/shemas/feedbackSchema";
import GS from "../../styles/styles";
import Textarea from "../../components/form/Textarea";
import { Rating, TextareaAutosize, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FormButton, FormTextField } from "../../styles/muiStyles";
import { Image, Row } from "react-bootstrap";

const FeedbackPage = () => {
  const initialValues: any = {
    title: "",
    description: "",
    rate: 0,
  };

  const navigate = useNavigate();
  const token = localStorage.getItem("uToken");

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  });

  return (
    <GS.Background
      className="d-flex align-items-start justify-content-center
    "
    >
      <Row className="d-flex flex-column">
        <Formik
          initialValues={initialValues}
          validationSchema={feedbackSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
          }}
        >
          {(props) => (
            <>
              <GS.LoginBackground className="d-flex align-items-center justify-content-center flex-column  px-3 px-sm-5 py-4">
                <GS.SectionTitle className="px-3">Feedback</GS.SectionTitle>
                <div className="mb-3" style={{ width: "200px" }}>
                  <Image
                    fluid
                    src={process.env.PUBLIC_URL + "/megaphone.png"}
                  />
                </div>

                <FormTextField
                  id="title"
                  name="title"
                  label="Title"
                  variant="filled"
                  type="text"
                  placeholder="Title"
                  onChange={props.handleChange("title")}
                  value={props.values.title}
                  fullWidth="100%"
                />
                <GS.FalseWrapper height={"20px"}>
                  {/* {props.errors.title && props.touched.title ? (
                  <GS.FalseText>Hi</GS.FalseText>
                ) : null} */}
                </GS.FalseWrapper>

                <TextareaAutosize
                  name="description"
                  aria-label="minimum height"
                  minRows={3}
                  onChange={props.handleChange("description")}
                  placeholder="Description"
                  value={props.values.description}
                  style={{
                    width: "100%",
                    padding: "10px",
                    color: "purple",
                  }}
                />

                {/* <Field
                name="description"
                as={Textarea}
                type="text"
                placeholder="Description"
                onChange={props.handleChange("description")}
                value={props.values.description}
                fullWidth="100%"
              /> */}

                <GS.FalseWrapper height={"20px"}>
                  {/* {props.errors.description && props.touched.description ? (
                  <GS.FalseText>Description</GS.FalseText>
                ) : null} */}
                </GS.FalseWrapper>
                <GS.LoginBackground className="d-flex mb-3 align-items-center">
                  <p className="fs-5 m-0 me-3">Rate:</p>

                  <Rating
                    name="simple-controlled"
                    value={props.values.rate}
                    onChange={props.handleChange("rate")}
                    style={{}}
                    emptyIcon={<StarIcon fontSize="inherit" />}
                  />
                </GS.LoginBackground>
              </GS.LoginBackground>
              <GS.LoginBackground
                bgColor="white"
                className="d-flex align-items-center justify-content-center flex-column flex-sm-row p-0"
              >
                <GS.ButtonsLinks
                  to={false}
                  className="text-center fw-bolder fs-5 text-uppercase py-3 m-0 "
                  type="submit"
                  onClick={() => props.handleSubmit()}
                >
                  Log In
                </GS.ButtonsLinks>
              </GS.LoginBackground>
            </>
          )}
        </Formik>
      </Row>
    </GS.Background>
  );
};

export default FeedbackPage;
