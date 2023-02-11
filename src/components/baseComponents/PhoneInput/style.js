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
  }
  .special-label {
    position: absolute;
      z-index: 1;
      top: -7px;
      left: 25px;
      display: block;
      color: ${p => p.theme.colors.text};

      background: transparent;
      padding: 0 5px;
      font-size: 14px;

      white-space: nowrap;
      z-index: 2;
  }
  
`;

export const DecorativeDiv = styled.label`
  position: absolute;
  left: 25px;
  top: -2px;
  height: 4px;
  padding-right: 2px;
  background-color: ${p => p.theme.colors.background};
  color: transparent;
  z-index: 1;
`;

export const FieldWrapper = styled.div`
  position: relative;
`;
