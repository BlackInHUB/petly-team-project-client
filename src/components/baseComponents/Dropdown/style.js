import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.thin};

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: left;
  border: 1px solid #ccc;
  position: relative;
  border: ${p => p.theme.borders.small};
  border-color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  width: 120px;
  height: 40px;

  transition: box-shadow ease 0.25s, border-color ease 0.25s;
  @media (min-width: 768px) {
    height: 48px;
    border-radius: ${p => p.theme.radii.big};
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};

    
    border-color: ${p => p.theme.colors.hoveredAccent};

`;

export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 40px;
  border: ${p => p.theme.borders.small};
  border-color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  z-index: -1;

  @media (min-width: 768px) {
    
    height: 48px;
    border-radius: ${p => p.theme.radii.big};
  }
  &:focus {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};
    caret-color: transparent;
    outline: none;
    
    border-color: ${p => p.theme.colors.hoveredAccent};
`;

export const InputContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.thin};

  border: ${p => p.theme.borders.small};
  border-color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal} ${p => p.theme.radii.normal};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f59256;
    border-radius: 5px;

    border: 1px solid #f59256;
  }

  left: 0;
  transform: translateY(5px);
  width: 100%;
  position: absolute;

  overflow-x: hidden;

  z-index: 3;
`;

export const Item = styled.div`
  text-align: center;
  padding: 5px;
  cursor: pointer;
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }

  &.selected {
    background-color: ${p => p.theme.colors.hoveredAccent};
    color: #fff;
  }
`;
