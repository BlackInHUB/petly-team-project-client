import styled from 'styled-components';

export const SharedLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.colors.background};

  width: 100vw;
  min-height: 100vh;

  margin-left: auto;
  margin-right: auto;
`;
