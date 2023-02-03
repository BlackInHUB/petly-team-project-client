import { ReactComponent as BackgroundMobileIcon } from '../../images/mobileBackground.svg';
import { ReactComponent as BackgroundTabletIcon } from '../../images/tabletBackground.svg';
import { ReactComponent as BackgroundPCIcon } from '../../images/pcBackground.svg';

import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media (min-width: 768px) {
    align-items: center;
  }
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
