import { Field } from 'formik';
import styled from 'styled-components';

import { ReactComponent as EyeIcon } from '../../../images/icons/auth/eye.svg';
import { ReactComponent as EyeOffIcon } from '../../../images/icons/auth/eye-off.svg';

export const FieldWrapper = styled.div`
  position: relative;
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

  transition: box-shadow ease 0.25s, border-color ease 0.25s;

  &:focus + label,
  &:hover + label,
  &:valid + label {
    top: -9px;
    left: 25px;
    color: ${p => p.theme.colors.text};
    padding: 0 ${p => p.theme.space[2] + 'px'};

    line-height: ${p => p.theme.fontSizes[3]};
    font-size: ${p => p.theme.fontSizes[1]};
  }
  &:focus + label + label,
  &:hover + label + label,
  &:valid + label + label {
    opacity: 1;
  }

  &:focus + label + label,
  &:hover + label + label {
    top: -2px;
    height: 4px;
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};

    outline: none;
    border-color: ${p => p.theme.colors.hoveredAccent};
  }

  @media (min-width: 768px) {
    height: 52px;

    &:focus + label,
    &:hover + label,
    &:valid + label {
      top: -9px;
      left: 25px;
    }
  }
`;

export const DecorativeDiv = styled.label`
  opacity: 0;
  position: absolute;
  left: 25px;
  top: -1px;
  height: 3px;
  padding-right: 2px;
  background-color: ${p => p.theme.colors.background};
  color: transparent;
  z-index: 1;

  transition: opacity 0.25s ease-out;
`;

export const Label = styled.label`
  position: absolute;
  top: 8px;
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
  z-index: 2;
`;

const styleEyeButtonsSvg = `position: absolute;
top: 50%;
width: 20px;
z-index: 2;
transform: translateY(-50%);
&:hover,
  &:focus {
    cursor: pointer; }

`;

export const EyeIconOn = styled(EyeIcon)`
  right: ${p => p.theme.space[5] + 'px'};
  ${styleEyeButtonsSvg}
`;
export const EyeIconOff = styled(EyeOffIcon)`
  right: ${p => p.theme.space[5] + 'px'};
  ${styleEyeButtonsSvg}
`;
