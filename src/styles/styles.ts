import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  LogoType,
  SettingsBar,
  FalseWrapperType,
  BackgroundType,
  LoginBackgroundType,
  LogoWrapperType,
  SectionTitleType,
  SafeImageType,
  SettingsMenuLIType,
  CloseButtonType,
} from "../components/types/styleTypes";
import { colorVariables } from "./colors";

const GS = {
  FalseText: styled.p`
    color: ${colorVariables.warningRed};
    margin: 0;
    padding-left: 5px;
  `,

  FalseWrapper: styled.div<FalseWrapperType>`
    height: ${(props) => props.height || "30px"};
    display: flex;
    width: 100%;
    justify-content: ${(props) => props.jContent || "flex-start"};
    align-items: flex-start;
  `,

  LogoMain: styled.h1<LogoType>`
    font-weight: 700;
    font-size: 50px;
    line-height: 87px;
    text-align: center;

    text-transform: uppercase;
    @media (max-width: 575px) {
      font-size: 45px;
    }
    color: ${(props) => props.color || colorVariables.white};
    background-color: ${(props) => props.bgcolor || "none"};
    margin: 0px;
  `,

  Background: styled.div<BackgroundType>`
    height: 100vh;
    background-image: url("./dollarBg.png");
    background-size: 150px;
  `,

  LoginBackground: styled(Col)<LoginBackgroundType>`
    box-sizing: border-box;
    border: none;
    background-color: ${(props) => props.bgColor || colorVariables.black};
    color: white;
  `,

  ButtonsLinks: styled(Link)<any>`
    text-decoration: none;
    background-color: ${(props) =>
      props.theme === "dark" ? colorVariables.black : colorVariables.white};
    color: ${(props) =>
      props.theme === "dark" ? colorVariables.white : colorVariables.black};
    width: 100%;
  `,

  TextareaStyle: styled.textarea`
    height: 208px;
    border: 3px solid;
    min-width: 260px;
    max-width: 260px;
    flex: 1;
    padding: 0 0 0 10px;
    width: 100%;
    outline: none;
    resize: none;
    padding-bottom: 40px;
  `,

  InputsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    margin: 30px 0px;
  `,

  LogoWrapper: styled.div<LogoWrapperType>`
    /* flex-wrap: wrap;
    display: flex;
    align-content: center;
    position: relative;
    width: ${(props) => props.width || "100%"}; */
    justify-content: ${(props) => props.jContent || "space-around"};
  `,

  Calculations: styled.p<any>`
    font-size: 14px;
    text-align: center;
    margin: 10px 0px 20px;
    font-weight: bold;
    color: ${(prop) => prop.color || colorVariables.black};
  `,

  SectionTitle: styled.p<SectionTitleType>`
    color: ${(prop) => prop.color || colorVariables.black};
    /* bottom: ${(prop) => prop.bottom || "16px"}; */
    background-color: ${(prop) => prop.bgColor || colorVariables.white};
    font-weight: 700;
    font-size: 28px;
    line-height: 54px;
    text-transform: uppercase;
  `,

  DateSection: styled.p<any>`
    background-color: ${colorVariables.black};
    color: ${colorVariables.white};
    padding: 10px;
  `,

  TableHeader: styled.p<any>`
    font-weight: 500;
    font-size: 18px;
    color: ${colorVariables.black};
    margin: 0 10px;
    line-height: 24px;
    text-align: center;
  `,

  ProfileEmail: styled.p<any>`
    font-weight: 10px;
    font-size: 16px;
    color: ${colorVariables.white};
    margin-top: -20px;
    margin-bottom: 40px;
    font-weight: 400;
    line-height: 24px;
  `,

  SafeImage: styled.img<SafeImageType>`
    width: ${(props) => props.imgWidth || "12em"};
    height: auto;
    margin-top: 10px;

    margin-bottom: 20px;
  `,

  SpanLogo: styled.span`
    background-color: ${colorVariables.white};
    padding: 2px 4px;
    color: ${colorVariables.black};
    font-weight: 800;
    margin-left: 5px;
  `,

  BlockWrapper: styled(Col)`
    background-color: ${colorVariables.white};
    box-shadow: -5px 8px 8px ${colorVariables.blackWithOpacity};
    width: 200px !important;

    div {
      background-color: ${colorVariables.black};
    }

    p {
      text-transform: uppercase;
      color: ${colorVariables.white};
    }

    p:first-child {
      font-weight: 400;
      margin: 0;
    }

    &:hover p:last-child {
      color: #c349e9;
      transition: color 0.3s linear;
    }

    p:last-child {
      font-weight: 700;
      font-size: 35px;
      line-height: 25px;
      position: relative;
      left: -3px;
      transition: color 0.3s linear;
    }

    @media (max-width: 450px) {
      width: 150px !important;
    }
  `,

  BlockWallet: styled(Col)`
    background-color: ${colorVariables.black};
    box-shadow: -5px 8px 8px ${colorVariables.blackWithOpacity};
    color: ${colorVariables.white};

    p {
      font-size: 18px;
      font-weight: 700;
      margin: 0;
    }
  `,

  BlockWrapperSettings: styled(Col)`
    background-color: ${colorVariables.white};
    box-shadow: -5px 8px 8px ${colorVariables.blackWithOpacity};
  `,

  BlockWrapperSettingsInside: styled.div`
    background-color: ${colorVariables.white};
    display: inline-block;
    box-shadow: -5px 8px 8px ${colorVariables.blackWithOpacity};
    min-width: 50px;
    max-width: 70px;
    flex: 1;
  `,

  BlockWrapperChart: styled.div`
    background-color: ${colorVariables.black};
    box-shadow: -5px 8px 8px ${colorVariables.blackWithOpacity};

    div {
      color: ${colorVariables.white};
    }

    p {
      text-transform: uppercase;
      margin: 0;
    }

    p:first-child {
      font-weight: 400;
      font-size: 30px;
    }

    &:hover p:last-child {
      color: #c349e9;
      transition: color 0.3s linear;
    }

    p:last-child {
      font-weight: 700;
      font-size: 58px;
      line-height: 40px;
      position: relative;
      left: -3px;
      transition: color 0.3s linear;
    }
  `,

  Img: styled.img`
    height: 200px;
    width: 200px;

    background-color: white;
  `,

  BlockImg: styled.img`
    width: 100%;
  `,

  BlockCurrencyImg: styled.img`
    width: 39px;
    margin-right: 5px;
  `,

  SettingsMenu: styled.ul<SettingsBar>`
    z-index: 5;
    background-color: ${colorVariables.white};
    height: 100vh;
    margin: 0;
    transition: transform 0.2s ease-out;
    list-style-type: none;
    padding: 20px 0px;
  `,

  SettingsMenuLI: styled.li<SettingsMenuLIType>`
    display: flex;
    justify-content: ${(props) => props.jContent || "flex-start"};
    color: ${colorVariables.black};
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 30px 0;
    padding: 0px 20px;
  `,

  MenuBackground: styled.div`
    top: 0;
    z-index: 2;
    background-color: ${colorVariables.black}60;
    height: 100vh;
    position: fixed;
    width: 100vw;
  `,

  MainBckground: styled.div`
    overflow-x: hidden;
  `,

  SelectItem: styled.select`
    margin-left: 6px;
    background-color: ${colorVariables.black};
    color: white;
  `,

  FinanceWrapper: styled(Col)`
    background-color: ${colorVariables.white};
    color: white;
  `,

  CloseButton: styled.span<CloseButtonType>`
    color: ${colorVariables.black};
  `,
};

export default GS;
