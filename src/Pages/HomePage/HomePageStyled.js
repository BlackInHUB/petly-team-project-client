import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;

  & img.main {
    position: absolute;
    width: 590px;
    height: 640px;
    left: 674px;
    top: 128px;
    z-index: 10;
  }

  & img.bg {
    position: absolute;
    width: 1178px;
    height: 418px;
    left: 11px;
    top: 350px;
    z-index: 8;
  }

  & img.bgRight {
    position: absolute;
    width: 511px;
    height: 393px;
    left: 818px;
    top: 375px;
    z-index: 9;
  }

  & img.union {
    position: absolute;
    width: 91.93px;
    height: 89px;
    left: 712px;
    top: 170px;
    z-index: 9;
  }
`;

export const HomePageTitle = styled.h1`
  // font-family: 'Manrope';
  // font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[10]};
  line-height: ${p => p.theme.fontHeight.xl};
  color: ${p => p.theme.colors.black};

  position: absolute;
  left: 16px;
  top: 160px;
`;
