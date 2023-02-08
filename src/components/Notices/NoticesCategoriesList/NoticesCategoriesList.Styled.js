import styled from 'styled-components';

export const NoticesCategoriesListStyled = styled.ul`
  gap: 32px;
  padding: 0;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  };

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  };
`;
