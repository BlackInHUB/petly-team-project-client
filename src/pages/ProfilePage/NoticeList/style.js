import styled from 'styled-components';

export const NoticesCategoriesListStyled = styled.ul`
  display: grid;
  grid-gap: 32px;
  place-content: center;

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 280px);
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: repeat(auto-fill, 336px);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, 288px);
  }
`;

export const Plug = styled.div`
  text-align: center;

  & h2 {
    font-size: ${p => p.theme.fontSizes[7]};
  }
`;
