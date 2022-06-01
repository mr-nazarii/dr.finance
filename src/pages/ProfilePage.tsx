import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import GS from "../styles/styles";

const ProfilePage = () => {
  // get the setting menu to the different file
  // add an exit button off the settings menu

  return (
    <GS.Background>
      <GS.LoginBackground>
        <GS.SectionTitle>Profile</GS.SectionTitle>

        <GS.SafeImage src={process.env.PUBLIC_URL + "/defaultProfile.webp"} />
        <GS.SectionTitle>Nazarii Kubik</GS.SectionTitle>
        <GS.SectionTitle>fakeemail@gmail.com</GS.SectionTitle>
        <Link to="/">
          <Button>Log Out</Button>
        </Link>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default ProfilePage;
