import { Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import { ReactComponent as BackgroundMobileIcon } from './mobileBackground.svg';
import { ReactComponent as BackgroundTabletIcon } from './tabletBackground.svg';
import { ReactComponent as BackgroundPCIcon } from './pcBackground.svg';

import styled, { keyframes } from 'styled-components';

const spinerAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
export const SpinnerStyled = styled(FaSpinner)`
  animation: ${spinerAnimation} infinite 2s ease;
`;

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flexDirection: column;
  justify-content: center;
  align-items: start;
  @media (min-width: 768px) {
    align-items: center;
  }
}}`;

export const NavLinkStyled = styled(NavLink)`
  color: ${p => p.theme.colors.link};
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.s * p.theme.fontSizes[0].slice(0, -2)) +
    'px'};
  letter-spacing: 4%;
  font-weight: ${p => p.theme.fontWeights.thin};
  display: inline-block;
`;

export const Header = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.l * p.theme.fontSizes[5].slice(0, -2)) +
    'px'};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  height: 40px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.l * p.theme.fontSizes[3].slice(0, -2)) +
    'px'};
  font-weight: ${p => p.theme.fontWeights.thin};

  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.big};
  border-color: ${p => p.theme.colors.accent};
  padding-left: ${p => p.theme.space[5] + 'px'};

  &:focus + label,
  &:hover + label,
  &:valid + label {
    top: -10px;
    background-color: ${p => p.theme.colors.white};
    line-height: ${p => p.theme.fontSizes[3]};
    font-size: ${p => p.theme.fontSizes[1]};
  }

  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.hoveredAccent};
  }

  @media (min-width: 768px) {
    height: 52px;

    &:focus + label,
    &:hover + label,
    &:valid + label {
      top: -13px;
    }
  }
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

export const ButtonStyled = styled.button`
  width: 100%;
  height: 44px;

  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.l * p.theme.fontSizes[4].slice(0, -2)) +
    'px'};
  font-weight: ${p => p.theme.fontWeights.normal};

  background-color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.big};

  transition: all 0.5s;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
    background-color: ${p => p.theme.colors.hoveredAccent};
    transform: scale(1.01);
  }

  @media (min-width: 1280px) {
    height: 48px;
  }
`;

export const ButtonType2Styled = styled.button`
  width: 100%;
  height: 44px;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.l * p.theme.fontSizes[4].slice(0, -2)) +
    'px'};
  font-weight: ${p => p.theme.fontWeights.normal};

  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal + ' ' + p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};

  transition: all 0.5s;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
    border: ${p => p.theme.borders.big + ' ' + p.theme.colors.hoveredAccent};

    transform: scale(1.01);
  }

  @media (min-width: 1280px) {
    height: 48px;
  }
`;

export const Error = styled.p`
  color: ${p => p.theme.colors.hoveredAccent};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.s * p.theme.fontSizes[3].slice(0, -2)) +
    'px'};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  gap: ${p => p.theme.space[5] + 'px'};
`;

export const FieldWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: ${p => p.theme.space[5] + 'px'};

  color: ${p => p.theme.colors.gray};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.l * p.theme.fontSizes[3].slice(0, -2)) +
    'px'};
  font-weight: ${p => p.theme.fontWeights.thin};

  transition: 0.2s linear;

  @media (min-width: 768px) {
    top: 13px;
  }
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

const styleForBackgroundImg = `position: absolute;
bottom: 0px;
width: 100%;
zIndex: 0;`;
export const BackgroundMobileIconStyled = styled(BackgroundMobileIcon)`
  ${styleForBackgroundImg}
`;
export const BackgroundTabletIconStyled = styled(BackgroundTabletIcon)`
  ${styleForBackgroundImg}
`;
export const BackgroundPCIconStyled = styled(BackgroundPCIcon)`
  ${styleForBackgroundImg}
`;
