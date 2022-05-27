import styled from "styled-components";
import { ButtonProps, Wraper } from "../components/types/styleTypes";

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

  LogoMain: styled.h1`
    font-style: normal;
    font-weight: 800;
    font-size: 33px;
    line-height: 36px;
    color: #ffffff;
    margin: 0 0 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
    box-shadow: inset 0px 6px 6px rgba(0, 0, 0, 0.25);
    color: #000000;
    border: 3px solid transparent;

    &:active {
      border: solid 3px #d67eff;
      outline: none;
    }
  `,

  ImageDollar: styled.img`
    width: 45px;
    height: 45px;
    position: absolute;
    right: 98px;
    top: -1px;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  `,

  LogoWrapper: styled.div<Wraper>`
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
};

export default GS;
