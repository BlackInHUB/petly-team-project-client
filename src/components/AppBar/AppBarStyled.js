import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media (min-width: 320px) and (max-width: 767.99px) {
    margin-bottom: 42px;

    .user,
    .nav {
      display: none;
    }

    .open-modal-btn {
      margin-left: auto;
    }
  }

  @media (min-width: 768px) and (max-width: 1279.99px) {
    margin-bottom: 88px;

    .nav {
      display: none;
    }

    .open-modal-btn {
      margin-left: 20px;
    }
  }

  @media (min-width: 1280px) {
    margin-bottom: 60px;

    .open-modal-btn {
      display: none;
    }
  }

  & div {
    display: flex;
    flex-direction: row;
  }

  & .user {
    margin-left: auto;
  }

  & button {
    border: ${p => p.theme.borders.none};
    background: transparent;
  }
`;

export const CommonLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: ${p => p.theme.fontHeight.l};
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  margin-left: 80px;
  color: ${p => p.theme.colors.text};

  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline 0.4px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.hoveredAccent};
  }

  @media (max-width: 767.99px) {
    font-size: ${p => p.theme.fontSizes[1]};
  }
`;

export const UserLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: ${p => p.theme.fontHeight.l};
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 0.04em;
  margin-left: 20px;
  padding: 10px 28px;
  color: ${p => p.theme.colors.text};

  gap: 10px;
  background: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};

  text-decoration: none;

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.hoveredAccent};
    color: ${p => p.theme.colors.hoveredAccent};
  }

  @media (max-width: 767.99px) {
    font-size: ${p => p.theme.fontSizes[1]};
  }
`;
