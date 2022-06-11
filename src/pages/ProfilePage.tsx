import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
import { colorVariables } from "../styles/colors";
import GS from "../styles/styles";

const ProfilePage = () => {
  // chage style
  const navigate = useNavigate();
  const token = localStorage.getItem("uToken");

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
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
          Nazarii Kubik
        </GS.SectionTitle>
        <GS.SectionTitle
          color={colorVariables.white}
          bgColor={colorVariables.black}
          fSize={"16px"}
        >
          fakeemail@gmail.com
        </GS.SectionTitle>
        <Link to="/">
          <Button>Log Out</Button>
        </Link>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default ProfilePage;
