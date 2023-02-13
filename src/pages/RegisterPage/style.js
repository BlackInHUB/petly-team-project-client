import { ReactComponent as BackgroundMobileIcon } from '../../images/mobileBackground.svg';
import { ReactComponent as BackgroundTabletIcon } from '../../images/tabletBackground.svg';
import { ReactComponent as BackgroundPCIcon } from '../../images/pcBackground.svg';

import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

// position: absolute;
//   top: 50%;
//   width: 100%;
//   z-index: 1;
//   transform: translateY(-50%);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   @media (min-width: 768px) {
//     align-items: center;
//   }

const styleForBackgroundImg = `position: fixed;
bottom: 0px;
width: 100%;
z-index: -1;`;
export const BackgroundMobileIconStyled = styled(BackgroundMobileIcon)`
  ${styleForBackgroundImg}
`;
export const BackgroundTabletIconStyled = styled(BackgroundTabletIcon)`
  ${styleForBackgroundImg}
`;
export const BackgroundPCIconStyled = styled(BackgroundPCIcon)`
  ${styleForBackgroundImg}
`;
