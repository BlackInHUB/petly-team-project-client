import styled from 'styled-components';

export const Button = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: ${p => p.theme.colors.accent};
  cursor: pointer;

  :hover,
  :focus {
    color: ${p => p.theme.colors.hoveredAccent};
  }

  z-index: 30;
  svg {
    transition: color 0.25s linear;
    width: 50px;
    height: 50px;
  }
`;
