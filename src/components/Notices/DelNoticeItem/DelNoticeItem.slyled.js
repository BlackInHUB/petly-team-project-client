import styled from 'styled-components';
import { device } from 'utils/device';
import { StyledButton } from 'components/Common/Button/Button.styled';
import { ReactComponent as Delete } from 'assets/icons/delete.svg';
import { ModalContent } from 'components/Common/Modal/Modal.styled';

export const DelPetBox = styled(ModalContent)`
  display: flex;
  flex-direction: column;
  gap: ${p => `${p.theme.space[4] - 2}px`};
  background-color: rgba(33, 33, 33, 0.12);
`;
export const DelPetBtn = styled(StyledButton)`
  width: ${p => `${p.theme.space[8] - 26}px`};

  @media (${device.tablet}) {
    width: ${p => `${p.theme.space[8] - 8}px`};
  }
`;

export const AnimalsBtnDel = styled(DelPetBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => `${p.theme.space[4] - 2}px`};
`;
export const AnimalsDeleteSvg = styled(Delete)`
  width: ${p => `${p.theme.space[4]}px`};
  height: ${p => `${p.theme.space[4]}px`};
  fill: currentColor;
`;
export const CancelPetText = styled.p`
  font-family: ${p => `${p.theme.fonts.body}`};

  font-weight: ${p => `${p.theme.fontWeights.medium}`};
  font-size: ${p => `${p.theme.fontSizes.s}`};
  line-height: ${p => `${p.theme.lineHeights.body}`};
  text-align: center;
  margin-bottom: ${p => `${p.theme.space[4] + 4}px`};
`;
