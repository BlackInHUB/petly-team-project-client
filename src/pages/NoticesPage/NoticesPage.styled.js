import styled from 'styled-components';

export const BigBox = styled.div``;

export const Wrapper = styled.div``;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-style: ${p => p.theme.fontStyle.normal};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: ${p => p.theme.fontHeight.xl};
  text-align: center;
  color: ${p => p.theme.colors.text};

  margin-bottom: 28px;
  margin-left: auto;
  margin-right: auto;
`;
