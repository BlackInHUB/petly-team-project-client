import styled from 'styled-components';

export const NoticesCategoriesListStyled = styled.ul`
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  //   max-width: calc(100vw - 32px);
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  grid-gap: 32px;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;
