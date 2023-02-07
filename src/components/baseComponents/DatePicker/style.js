import DatePicker from 'react-datepicker';
import 'components/baseComponents/DatePicker/react-datepicker.css';
import styled from 'styled-components';

export const DatePickerStyled = styled(DatePicker)`
  height: 40px;
  text-align: center;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.thin};

  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.big};
  border-color: ${p => p.theme.colors.accent};

  transition: box-shadow ease 0.25s, border-color ease 0.25s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};

    outline: none;
    border-color: ${p => p.theme.colors.hoveredAccent};
  }

  cursor: pointer;
  caret-color: transparent;
  @media (min-width: 768px) {
    height: 48px;
  }
`;
