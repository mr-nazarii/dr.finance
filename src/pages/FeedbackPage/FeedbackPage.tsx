import { Field, Formik } from "formik";
import Button from "../../components/buttons/Button";
import feedbackSchema from "../../components/form/shemas/feedbackSchema";
import Input from "../../components/form/Input";
import GS from "../../styles/styles";
import Textarea from "../../components/form/Textarea";
import { Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const FeedbackPage = () => {
  const initialValues: any = {
    title: "",
    description: "",
    rate: 0,
  };

  return (
    <GS.Background aItems={"flex-start"} height={"auto"}>
      <GS.LoginBackground>
        <GS.SectionTitle>Feedback</GS.SectionTitle>
        <GS.SafeImage
          imgWidth={"50%"}
          src={process.env.PUBLIC_URL + "/megaphone.png"}
        />
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
              <Field
                name="title"
                as={Input}
                type="text"
                placeholder="Title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
              />
              <GS.FalseWrapper height={"20px"}>
                {/* {props.errors.title && props.touched.title ? (
                  <GS.FalseText>Hi</GS.FalseText>
                ) : null} */}
              </GS.FalseWrapper>

              <Field
                name="description"
                as={Textarea}
                type="text"
                placeholder="Description"
                onChangeText={props.handleChange("description")}
                value={props.values.description}
              />
              <GS.FalseWrapper height={"20px"}>
                {/* {props.errors.description && props.touched.description ? (
                  <GS.FalseText>Description</GS.FalseText>
                ) : null} */}
              </GS.FalseWrapper>
              <GS.LoginBackground
                style={{ alignSelf: "flex-start", margin: "0px 0px 30px 0px" }}
                bgColor={"trasperent"}
                aItems={"flex-start"}
                padding={"0"}
              >
                <Typography style={{ color: "white" }} component="legend">
                  Feedback Rate
                </Typography>

                <Rating
                  name="simple-controlled"
                  value={props.values.rate}
                  onChange={props.handleChange("rate")}
                  style={{
                    backgroundColor: "white",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                  emptyIcon={<StarIcon fontSize="inherit" />}
                />
              </GS.LoginBackground>
              <GS.LogoWrapper jContent="space-around">
                <Field as={Button} onClick={() => props.handleSubmit()}>
                  Send
                </Field>
              </GS.LogoWrapper>
            </>
          )}
        </Formik>
        {/* <Link to="/">
          <Button>Log Out</Button>
        </Link> */}
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default FeedbackPage;
