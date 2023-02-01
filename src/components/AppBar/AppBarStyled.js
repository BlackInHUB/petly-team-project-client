import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media (min-width: 480px) {
    margin-bottom: 42px;
  }

  @media (min-width: 768px) {
    margin-bottom: 88px;
  }

  @media (min-width: 1248px) {
    margin-bottom: 60px;
  }

  & div {
    margin-left: auto;
    display: flex;
    flex-direction: row;
  }
`;

export const CommonLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: ${p => p.theme.fontHeight.l};
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.text};

  margin-left: 80px;

  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline 0.4px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    scale: 1.1;
  }
`;

export const UserLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: ${p => p.theme.fontHeight.l};
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.text};

  margin-left: 20px;

  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 28px;
  gap: 10px;
  background: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    scale: 1.05;
  }
`;
