import styled from "styled-components";
import {
  ButtonProps,
  LogoType,
  SettingsBar,
  Wraper,
} from "../components/types/styleTypes";

const GS = {
  FalseText: styled.p`
    color: red;
    margin: 0;
  `,

  FalseWrapper: styled.div`
    height: 30px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  `,

  LogoMain: styled.h1<LogoType>`
    border-radius: 12px;
    position: relative;
    font-style: normal;
    font-weight: 800;
    font-size: ${(props) => props.fontSize || "33px"};
    line-height: 36px;
    color: #ffffff;
    margin: 0 0 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: black;
    padding: 10px 10px;
  `,

  Background: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,

  LoginBackground: styled.div`
    background-color: black;
    border: none;
    border-radius: 12px;
    min-width: 262px;
    max-width: 462px;
    flex: 1;

    margin: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 37px 24px 26px;
  `,

  InputStyle: styled.input`
    height: 38px;
    border: 3px solid;
    border-radius: 9px;
    width: 100%;
    padding: 0 0 0 10px;
    box-shadow: inset 0px 8px 8px rgba(0, 0, 0, 0.25);
    outline: none;

    &:focus-visible {
      border: solid 3px #d67eff;
      outline: none;
    }
  `,

  ButtonStyleLogin: styled.button<ButtonProps>`
    background: ${(props) => props.bgColor || "#93f084"};
    border-radius: 9px;
    width: 105px;
    height: 36px;
    box-shadow: inset 0px 6px 6px #ffffff72;
    color: #000000;
    border: 3px solid transparent;
    font-weight: 700;

    &:active {
      border: solid 3px #d67eff;
      outline: none;
      box-shadow: inset 0px 6px 6px rgba(0, 0, 0, 0.25);
    }
  `,

  ImageDollar: styled.img`
    width: 45px;
    height: 45px;
    position: absolute;
    right: -35px;
    top: 8px;
  `,

  LogoWrapper: styled.div<Wraper>`
    flex-wrap: wrap;
    display: flex;
    align-content: center;
    position: relative;
    width: 100%;
    justify-content: ${(props) => props.jContent || "space-around"};
  `,

  SectionTitle: styled.h2`
    color: #ffffff;
    margin: 0;
    position: relative;
    bottom: 16px;
    background-color: #ffffff;
    padding: 5px 12px;
    color: #000000;
    border-radius: 12px;
  `,

  MainText: styled.p`
    color: #ffffff;
    text-align: justify;
    line-height: 27px;
    font-size: 16px;
  `,

  SafeImage: styled.img`
    width: 70%;
    border-radius: 13px;
    height: auto;
    margin-top: 10px;

    margin-bottom: 20px;
  `,

  SpanLogo: styled.span`
    background-color: #ffffff;
    padding: 2px 4px;
    border-radius: 5px;
    color: #000000;
    font-weight: 800;
    margin-left: 5px;
  `,

  BlockWrapper: styled.div`
    background-color: #ffffff;
    display: inline-block;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin: 20px;
    min-width: 100px;
    max-width: 180px;

    flex: 1;
  `,

  BlockWallet: styled.div`
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin: 20px;
    min-width: 50px;
    max-width: 302px;

    font-size: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 700;
    padding: 0 10px;
    padding-right: 40px;
  `,

  BlockWrapperSettings: styled.div`
    background-color: #ffffff;
    display: inline-block;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin: 20px;
    min-width: 50px;
    max-width: 70px;
    flex: 1;
  `,

  BlockWrapperChart: styled.div`
    background-color: #ffffff;
    display: inline-block;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin: 20px;
    min-width: 50px;
    max-width: 300px;

    flex: 1;
  `,
  BlockImg: styled.img`
    width: 100%;
  `,

  BlockCurrencyImg: styled.img`
    width: 39px;
    margin-right: 5px;
  `,

  SettingsMenu: styled.ul<SettingsBar>`
    z-index: 2;
    background-color: #ffffff;
    height: 100vh;
    margin: 0;
    position: fixed;
    width: ${(props) => (!props.right ? "0px" : "220px")};
    right: ${(props) => (!props.right ? "-200px" : "0px")};
    transition: transform 0.2s ease-out;
    list-style-type: none;
    padding: 30px 0px;
  `,

  SettingsMenuLI: styled.li`
    font-size: 20px;
    font-weight: 700;
    margin: 30px 0px;
    padding: 0px 20px;
  `,

  MenuBackground: styled.div`
    z-index: 1;
    background-color: #00000060;
    height: 100vh;
    position: fixed;
    width: 100vw;
  `,

  MainBckground: styled.div`
    overflow-x: hidden;
  `,

  SelectItem: styled.select`
    margin-left: 6px;
    border-radius: 9px;
    background-color: black;
    color: white;
  `,
};

export default GS;
