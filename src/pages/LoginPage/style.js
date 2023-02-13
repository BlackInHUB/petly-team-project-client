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

// pointer-events: none;

//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;

//   width: 100vw;
//   height: 100vh;

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
