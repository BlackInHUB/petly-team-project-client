import styled from "styled-components";

export const Form = styled.div`
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
  padding-right: 10px;
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
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z'%3E%3C/path%3E%3C/svg%3E") no-repeat right center;
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