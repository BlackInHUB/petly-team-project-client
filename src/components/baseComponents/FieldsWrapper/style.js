import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  gap: ${p => p.theme.space[5] + 'px'};

  visibility: ${p => (p.visible ? 'visible' : 'hidden')};
  display: ${p => (p.visible ? 'flex' : 'none')};
`;
