import styled from 'styled-components';

export const HomePageWrapper = styled.div`

`;

export const BackgroundWrapper = styled.div`

  & img.main {
    position: absolute;
    // width: 590px;
    // height: 640px;
    width: auto;
    height: 75%;
    right: 0;
    bottom: 0px;
    z-index: 10;
  }

  & img.union {
    position: absolute;
    width: auto;
    right: 375px;
    bottom: 412px;
    z-index: 9;
  }

  & img.bg {
    position: absolute;
    width: auto;
    height: 50%;
    right: 20px;
    bottom: 0px;
    z-index: 8;
  }

  & img.bgRight {
    position: absolute;
    width: auto;
    height: 50%;
    right: 0;
    bottom: 0px;
    z-index: 9;
  }

  & img.mainTablet {
    position: absolute;
    height: 50%;
    right: 0;
    bottom: 0px;
    z-index: 10;
  }

  & img.bgTablet {
    position: absolute;
    width: 100vw;
    height: 50%;
    right: 0;
    bottom: 0px;
    z-index: 9;
  }

  & img.mainMobile {
    position: absolute;
    width: auto;
    right: 0;
    bottom: 0px;
    z-index: 10;
  }

  & img.bgMobile {
    position: absolute;
    width: 100vw;
    height: 50%;
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
