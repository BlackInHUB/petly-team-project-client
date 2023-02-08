import styled from 'styled-components';

export const NoticesCategoriesListStyled = styled.ul`
  display: grid;
  grid-gap: 32px;
  justify-items: center;
  padding: 0;
  margin: 0 auto;

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }
`;
