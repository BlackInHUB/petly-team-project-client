import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 280px;
  padding: 9px 12px;
  height: 40px;
  box-shadow: 7px 4px 14px 0px rgba(490,210,400,0.7);
  border-radius: 40px;
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  border: none;
  color: black;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #535353;
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
  color: black;
`;