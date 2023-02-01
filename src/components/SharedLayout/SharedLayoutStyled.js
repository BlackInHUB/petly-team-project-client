import styled from 'styled-components';

export const SharedLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.colors.background};
  width: 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
  }

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
  }

  @media (min-width: 1248px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 20px;
  }
`;
