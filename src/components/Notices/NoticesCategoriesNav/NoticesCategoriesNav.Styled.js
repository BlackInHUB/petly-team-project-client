import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 12px;

@media (min-width: 768px) {
  width: 90%;
  }
`

export const NavBtn = styled(NavLink)`
text-decoration: none;
font-size: ${p => p.theme.fontSizes[2]};
line-height: ${p => p.theme.fontHeight.l};
font-weight: ${p => p.theme.fontWeights.normal};
padding: ${p => p.theme.space[3]}px ${p => p.theme.space[8]}px;
border-radius: ${p => p.theme.radii.big};
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
background-color: ${p => p.theme.colors.white};
transition: ${p => p.theme.transition.all};
outline: none;

&.active {
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
}

@media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[4]};
  }

  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.hoveredAccent};
    border-color: ${p => p.theme.colors.hoveredAccent};
  }
`
