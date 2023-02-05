import styled from 'styled-components';

export const NoticesCategoriesNavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & a {
    text-decoration: none;
  }

  & a + a {
    margin-left: 12px;
  }
`;
