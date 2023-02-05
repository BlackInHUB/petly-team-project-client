import styled from 'styled-components';

export const PaddingWrapperStyled = styled.div`
  min-width: 100%;
  @media (min-width: 320px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
  }

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
  }

  @media (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 20px;
  }
`;
