import styled from 'styled-components';

export const ModalFormStyled = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  overflow-x: hidden;
  position: absolute;

  scrollbar-width: thin;
  scrollbar-color: ${p => p.theme.colors.accent} #ffffff;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.accent};
    border-radius: 40px;

    border: 1px solid ${p => p.theme.colors.accent};
  }

  left: 50%;
  width: calc(100vw - 40px);
  max-width: 500px;
  max-height: calc(100vh - 40px);
  overflow-y: scroll;
  z-index: 1;
  transform: translateY(20px) translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 60px 20px 40px 20px;

  gap: 40px;

  background-color: ${p => p.theme.colors.white};
  z-index: 1;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.mainShadow};

  @media (min-width: 768px) {
    max-height: calc(100vh - 80px);
    max-width: 1000px;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    gap: 32px;
    padding: ${p => (p.paddings ? p.paddings : '32px 20px')};
    width: ${p => p.width};
  }
`;
export const ModalCloseBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  right: 20px;
  top: 20px;

  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};

  width: 34px;
  height: 34px;

  :hover,
  :focus {
    outline: none;
    cursor: pointer;
  }
  :hover img,
  :focus img {
    width: 20px;
    filter: invert(16%) sepia(99%) saturate(7404%) hue-rotate(4deg)
      brightness(95%) contrast(118%);
  }

  @media (min-width: 768px) {
    top: 12px;
    width: 44px;
    height: 44px;
  }
`;

export const Img = styled.img`
  width: 16px;
`;
