import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${p => (p.loadMore ? '248px' : '100%')};
  height: ${p => (p.loadMore ? '38px' : '44px')};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-left: 28px;
  padding-right: 28px;
  white-space: nowrap;
  color: ${p =>
    p.buttonStyle === 'primary'
      ? p.theme.colors.white
      : p.loadMore
      ? p.theme.colors.accent
      : p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.l * p.theme.fontSizes[4].slice(0, -2)) +
    'px'};
  font-weight: ${p => p.theme.fontWeights.normal};

  background-color: ${p =>
    p.buttonStyle === 'primary' ? p.theme.colors.accent : p.theme.colors.white};
  border: ${p =>
    p.buttonStyle === 'primary'
      ? p.theme.borders.normal + ' ' + p.theme.colors.accent
      : p.theme.borders.normal + ' ' + p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};

  transition: box-shadow ease 0.25s, border-color ease 0.25s, fill ease 0.25s,
    background-color ease 0.25s, color ease 0.25s;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
    background-color: ${p =>
      p.buttonStyle === 'primary'
        ? p.theme.colors.hoveredAccent
        : p.theme.colors.white};
    border-color: ${p => p.theme.colors.hoveredAccent};
    color: ${p =>
      p.buttonStyle === 'primary'
        ? p.theme.colors.white
        : p.theme.colors.hoveredAccent};
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};

    & svg {
      fill: ${p => p.theme.colors.hoveredAccent};
    }
  }

  svg {
    transition: fill ease 0.25s;
  }

  @media (min-width: 1280px) {
    height: ${p => (p.loadMore ? '40px' : '48px')};
  }
`;
