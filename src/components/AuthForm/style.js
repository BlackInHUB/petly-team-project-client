import { Form } from 'formik';
import { NavLink } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import './material.css';

import styled from 'styled-components';

export const PhoneInputStyled = styled(PhoneInput)`
  width: 100%;
  #phone:hover,
  #phone:focus {
    border-color: ${p => p.theme.colors.hoveredAccent};
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};
  }
  #phone {
    background-color: ${p => p.theme.colors.background};     
    }
  .special-label {
    position: absolute;
      z-index: 1;
      top: -7px;
      left: 25px;
      display: block;
      color: ${p => p.theme.colors.text};

      background: ${p => p.theme.colors.white};
      padding: 0 5px;
      font-size: 14px;

      white-space: nowrap;
  }
`;

export const Header = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.l * p.theme.fontSizes[5].slice(0, -2)) +
    'px'};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding-top: ${p => p.theme.space[10] + 'px'};
  padding-bottom: ${p => p.theme.space[10] + 'px'};

  gap: ${p => p.theme.space[10] + 'px'};

  width: 280px;

  background-color: transparent;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 60px 80px 40px 80px;
    width: 608px;
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.big};
    box-shadow: ${p => p.theme.shadows.mainShadow};
  }
  @media (min-width: 1280px) {
    padding: 60px 80px;
    width: 618px;
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.big};
    box-shadow: ${p => p.theme.shadows.mainShadow};
  }
`;

export const Error = styled.div`
  padding: ${p => p.theme.space[1] + 'px'} ${p => p.theme.space[5] + 'px'} 0px
    ${p => p.theme.space[5] + 'px'};
  color: ${p => p.theme.colors.hoveredAccent};
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.fontHeight.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.hoveredAccent};
  background-color: ${p => p.theme.colors.background};

  padding: 2px 10px;
  box-shadow: ${p => p.theme.shadows.mainShadow};

  border-radius: ${p => p.theme.radii.big};

  position: absolute;
  bottom: -10px;
  right: 20px;
  z-index: 2;
`;

export const BottomText = styled.p`
  color: ${p => p.theme.colors.gray};
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.s * p.theme.fontSizes[0].slice(0, -2)) +
    'px'};
  letter-spacing: 4%;
  font-weight: ${p => p.theme.fontWeights.thin};
  display: inline-block;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${p => p.theme.colors.link};
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.s * p.theme.fontSizes[0].slice(0, -2)) +
    'px'};
  letter-spacing: 4%;
  font-weight: ${p => p.theme.fontWeights.thin};
  display: inline-block;

  :hover,
  :focus {
    outline-color: ${p => p.theme.colors.hoveredAccent};
  }
`;
