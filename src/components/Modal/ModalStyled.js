import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${p => p.theme.colors.background};
  z-index: 100;

  & button.close-modal-btn {
    position: fixed;
    right: 0;
    top: 0;
    border: ${p => p.theme.borders.none};
    background: transparent;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${p => p.theme.colors.background};
  }
`;
