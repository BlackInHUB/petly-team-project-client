import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;

  @media (max-width: 767px) {
    margin-bottom: 42px;

    .user,
    .nav {
      display: none;
      flex-direction: row;
      align-items: center;
    }

    .open-modal-btn {
      margin-left: auto;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 88px;

    .nav {
      display: none;
      flex-direction: row;
      align-items: center;
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
    gap: 20px;
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
  outline: none;

  color: ${p => p.theme.colors.text};

  text-decoration: none;
  transition: ${p => p.theme.transition.all};

  &.active {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline 0.4px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.hoveredAccent};
  }

  @media (max-width: 767px) {
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[7]};
    line-height: ${p => p.theme.fontHeight.l};
    margin-left: 0;
    margin-bottom: 40px;
    justify-self: center;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[9]};
    line-height: ${p => p.theme.fontHeight.l};
    margin-left: 0;
    margin-bottom: 60px;
    justify-self: center;
  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    margin-left: 80px;
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
  padding: 10px 28px;
  color: ${p => p.theme.colors.text};
  outline: none;

  gap: 10px;
  background: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};

  text-decoration: none;

  transition: ${p => p.theme.transition.all};

  & img {
    border-radius: 50%;
    background: white;
  }

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.hoveredAccent};
    color: ${p => p.theme.colors.hoveredAccent};
  }

  @media (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes[1]};
    margin-left: 0;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;

  margin-left: 0;
  margin-right: 0;
  background-color: ${p => p.theme.colors.background};
  width: auto;
  height: 100vh;

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 88px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;

    .user-modal {
      display: none;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 46px;
  z-index: 999;

  & img.logo-modal {
    height: 32px;
  }

  & button.close-modal-btn {
    border: ${p => p.theme.borders.none};
    background: transparent;
  }

  & div.nav-modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const UserModal = styled.div`
  margin-bottom: 60px;

  & div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
`;
