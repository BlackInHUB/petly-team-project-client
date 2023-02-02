import styled from 'styled-components';
import { device } from 'utils/device';

export const Wrap = styled.div`
  position: relative;
`;
export const Img = styled.img`
  border-radius: 40px;
`;
export const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  text-align: center;

  mix-blend-mode: soft-light;

  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.body};

  color: ${({ theme }) => theme.colors.white};

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    line-height: ${({ theme }) => theme.lineHeights.hero};
  }

  @media ${device.desktop} {
    font-size: 100px;
  }
`;
