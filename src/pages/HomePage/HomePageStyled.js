import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  // padding: 20px;
  display: flex;
  height: auto;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
`;

export const BackgroundWrapper = styled.div`
  & img.main {
    position: absolute;
    width: 590px;
    height: 640px;
    right: 0;
    bottom: 0px;
    z-index: 10;
  }

  & img.bg {
    position: absolute;
    width: 1178px;
    height: 418px;
    right: 20px;
    bottom: 0px;
    z-index: 8;
  }

  & img.bgRight {
    position: absolute;
    width: 511px;
    height: 393px;
    right: 0;
    bottom: 0px;
    z-index: 9;
  }

  & img.union {
    position: absolute;
    width: 92px;
    height: 89px;
    right: 500px;
    bottom: 550px;
    z-index: 9;
  }

  & img.mainTablet {
    position: absolute;
    width: 645px;
    height: auto;
    right: 0;
    bottom: 0px;
    z-index: 10;
  }

  & img.bgTablet {
    position: absolute;
    width: 1449px;
    height: 80vh;
    right: 0;
    bottom: 0px;
    z-index: 9;
  }

  & img.mainMobile {
    position: absolute;
    width: auto;
    // height: 30em;
    right: 0;
    bottom: 0px;
    z-index: 10;
  }

  & img.bgMobile {
    position: absolute;
    width: 100vw;
    // height: 30em;
    right: 0;
    bottom: 0;
    z-index: 9;
  }

  @media (min-width: 320px) and (max-width: 767.98px) {
    .main,
    .bg,
    .bgRight,
    .union,
    .mainTablet,
    .bgTablet {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1279.98px) {
    .main,
    .bg,
    .bgRight,
    .union,
    .mainMobile,
    .bgMobile {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    .mainTablet,
    .bgTablet,
    .mainMobile,
    .bgMobile {
      display: none;
    }
  }
`;

export const HomePageTitle = styled.h1`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};

  @media (min-width: 320px) and (max-width: 767.98px) {
    font-size: ${p => p.theme.fontSizes[7]};
    line-height: ${p => p.theme.fontHeight.l};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[10]};
    line-height: ${p => p.theme.fontHeight.xl};
  }
`;
