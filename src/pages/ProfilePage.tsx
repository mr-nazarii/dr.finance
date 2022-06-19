import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { loadUser } from "../store/loadUser";
import { colorVariables } from "../styles/colors";
import { FormButton } from "../styles/muiStyles";
import GS from "../styles/styles";

const ProfilePage = () => {
  // chage style
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("uToken");
  const { name, surname, email } = useAppSelector((state) => state.profile);

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
    loadUser(dispatch, token, "setProfile");
  }, []);

  return (
    <GS.Background aItems={"flex-start"} height={"auto"}>
      <GS.LoginBackground>
        <GS.SectionTitle>Profile</GS.SectionTitle>
        <GS.SafeImage
          imgWidth={"100%"}
          src={process.env.PUBLIC_URL + "/defaultProfile.webp"}
        />
        <GS.SectionTitle
          color={colorVariables.white}
          bgColor={colorVariables.black}
        >
          {name} {surname}
        </GS.SectionTitle>
        <GS.SectionTitle
          color={colorVariables.white}
          bgColor={colorVariables.black}
          fSize={"16px"}
        >
          {email}
        </GS.SectionTitle>

        <FormButton
          variant="contained"
          size="large"
          backgroundColor="login"
          onClick={() => localStorage.removeItem("uToken")}
          to="/"
          component={Link}
        >
          Log out
        </FormButton>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default ProfilePage;
