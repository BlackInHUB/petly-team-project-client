import { FaSpinner } from 'react-icons/fa';
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
  color: ${p => p.theme.colors.link};
  fill: ${p => p.theme.colors.white} !important;
`;
