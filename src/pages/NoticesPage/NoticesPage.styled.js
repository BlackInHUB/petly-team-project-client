import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin-bottom: 60px;
    margin-top: 40px;
  }
`;