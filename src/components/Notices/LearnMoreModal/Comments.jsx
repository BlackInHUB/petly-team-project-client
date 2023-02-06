import styled from 'styled-components';
import React from 'react';

const Div = styled.div`
  text-align: start;
  overflow: hidden;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.thin};
  line-height: ${p => p.theme.fontHeight.l};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

const Span = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

const Comments = ({ children }) => {
  return (
    <Div>
      <Span>Comments:&nbsp;</Span>
      <span>{children}</span>
    </Div>
  );
};

export default Comments;
