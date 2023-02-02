import styled from 'styled-components';
import { device } from 'utils/device';

export const ListNotices = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: ${p => `${p.theme.space[5]}px`};

  @media ${device.fabletAndMobileOnly} {
    justify-content: center;
    align-items: center;
  }

  @media ${device.tablet} {
    flex-basis: calc((100% - 32px) / 2);
  }

  @media ${device.desktop} {
    flex-basis: calc((100% - 96px) / 4);
  }
`;
