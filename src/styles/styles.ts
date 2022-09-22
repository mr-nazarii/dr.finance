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
    text-decoration: none;
    font-weight: 700;
    font-size: 58px;
    line-height: 63px;
    text-align: center;
    text-transform: uppercase;
    font-size: ${(props) => props.fontSize || "33px"};
    color: ${(props) => props.color || colorVariables.white};
    background-color: ${(props) => props.bgcolor || "none"};
    margin: 0px;
    border-radius: 13px;
    padding: 0px 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,

  Background: styled.div<BackgroundType>`
    display: flex;
    justify-content: ${(props) => props.jContent || "center"};
    flex-direction: ${(props) => props.fDirection || "row"};
    align-items: ${(props) => props.aItems || "center"};
    height: ${(props) => props.height || "100vh"};
    gap: ${(props) => props.gap || "none"};
    margin: 10px 0 10px 0;
  `,

  LoginBackground: styled.div<LoginBackgroundType>`
    border: none;
    border-radius: 12px;
    min-width: 262px;
    max-width: 362px;
    flex: 1;
    height: auto;
    margin: 15px;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.bgColor || colorVariables.black};
    flex-direction: ${(props) => props.fDirection || "column"};
    align-items: ${(props) => props.aItems || "center"};
    padding: ${(props) => props.padding || "20px 24px 26px"};
    z-index: 1;
    position: ${(props) => props.position || "static"};
  `,

  TextareaStyle: styled.textarea`
    height: 208px;
    border: 3px solid;
    border-radius: 13px;
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
    flex-wrap: wrap;
    display: flex;
    align-content: center;
    position: relative;
    width: ${(props) => props.width || "100%"};
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
    margin: 10px 0;
    bottom: ${(prop) => prop.bottom || "16px"};
    background-color: ${(prop) => prop.bgColor || colorVariables.white};
    padding: 5px 12px;
    border-radius: 12px;
    font-size: ${(props) => props.fSize || "1.5em"};
    text-align: ${(prop) => prop.tAlign || "center"};
    font-weight: bolder;
    line-height: 39px;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
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
    width: ${(props) => props.imgWidth || "70%;"};
    border-radius: 13px;
    height: auto;
    margin-top: 10px;

    margin-bottom: 20px;
  `,

  SpanLogo: styled.span`
    background-color: ${colorVariables.white};
    padding: 2px 4px;
    border-radius: 5px;
    color: ${colorVariables.black};
    font-weight: 800;
    margin-left: 5px;
  `,

  BlockWrapper: styled.div`
    background-color: ${colorVariables.white};
    display: inline-block;
    box-shadow: 0px 4px 4px ${colorVariables.blackWithOpacity};
    border-radius: 20px;
    margin: 20px;
    min-width: 100px;
    max-width: 180px;

    flex: 1;
  `,

  BlockWallet: styled.div`
    background-color: ${colorVariables.white};
    box-shadow: 0px 4px 4px ${colorVariables.blackWithOpacity};
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
    background-color: ${colorVariables.white};
    display: inline-block;
    box-shadow: 0px 4px 4px ${colorVariables.blackWithOpacity};
    border-radius: 20px;
    margin: 20px;
    min-width: 50px;
    max-width: 70px;
    flex: 1;
  `,

  BlockWrapperSettingsInside: styled.div`
    background-color: ${colorVariables.white};
    display: inline-block;
    box-shadow: 0px 4px 4px ${colorVariables.blackWithOpacity};
    border-radius: 20px;
    min-width: 50px;
    max-width: 70px;
    flex: 1;
  `,

  BlockWrapperChart: styled.div`
    background-color: ${colorVariables.white};
    display: inline-block;
    box-shadow: 0px 4px 4px ${colorVariables.blackWithOpacity};
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
    border-radius: 9px;
    background-color: ${colorVariables.black};
    color: white;
  `,

  FinanceWrapper: styled.div`
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    min-width: 262px;
    max-width: 462px;
    flex: 1;
    border-radius: 23px;
    background-color: ${colorVariables.white};
    color: white;
    padding: 20px 30px;
  `,

  CloseButton: styled.span<CloseButtonType>`
    color: ${colorVariables.black};
  `,
};

export default GS;
