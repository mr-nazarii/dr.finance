import styled from "styled-components";

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

  ButtonStyleLogin: styled.button`
    background: #93f084;
    border-radius: 9px;
    width: 105px;
    height: 36px;
    box-shadow: inset 0px 6px 6px rgba(0, 0, 0, 0.25);
    color: white;
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
    right: -45px;
    top: -1px;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  `,

  LogoWrapper: styled.div`
    display: flex;
    align-content: center;
    position: relative;
  `,
};

export default GS;
