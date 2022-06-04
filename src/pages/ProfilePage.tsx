import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import GS from "../styles/styles";

const ProfilePage = () => {
  // chage style

  return (
    <GS.Background>
      <GS.LoginBackground>
        <GS.SectionTitle>Profile</GS.SectionTitle>

        <GS.SafeImage
          imgWidth={"100%"}
          src={process.env.PUBLIC_URL + "/defaultProfile.webp"}
        />
        <GS.SectionTitle>Nazarii Kubik</GS.SectionTitle>
        <GS.SectionTitle fSize={"16px"}>fakeemail@gmail.com</GS.SectionTitle>
        <Link to="/">
          <Button>Log Out</Button>
        </Link>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default ProfilePage;
