import styled from 'styled-components';

export const ModalFormStyled = styled.div`
  position: absolute;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  left: 50%;
  width: calc(100vw - 40px);
  max-width: 500px;
  max-height: calc(100vh - 80px);
  overflow-y: scroll;
  z-index: 1;
  transform: translateX(-50%);
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

  :hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    top: 12px;
    width: 44px;
    height: 44px;
  }
`;