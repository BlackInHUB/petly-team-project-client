import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.white};
    @media screen and (max-width: 767px) {
      width: 280px;
    }
  width: 608px;
  padding: 9px 9px;
    @media screen and (max-width: 767px) {
      height: 40px;
    }
  height: 44px;
  box-shadow: ${p => p.theme.shadows.mainShadow};
  border-radius: ${p => p.theme.radii.big};
`;

export const Input = styled.input`
  font-family: ${p => p.theme.fonts.body};
    @media screen and (max-width: 767px) {
      font-size: ${p => p.theme.fontSizes[2]};
    }
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: ${p => p.theme.fontHeight.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  background-color: transparent;
  width: 100%;
  border: none;
  color: ${p => p.theme.colors.search};
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: ${p => p.theme.colors.search};
  }
`;

export const Button = styled.button`
display: inline-block;  
margin: 0;
padding: 0;
width: 50px;
float: right;
line-height: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${p => p.theme.colors.black};
`;