import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarWrapper = styled.header`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 20px 16px 20px 42px;

  & div {
    margin-left: auto;
    display: flex;
    flex-direction: row;
  }
`;

export const CommonLink = styled(NavLink)`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #181c27;

  margin-left: 16px;

  text-decoration: none;

  &.active {
    color: #f59256;
    text-decoration: underline;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    scale: 1.1;
  }
`;

export const UserLink = styled(NavLink)`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;

  margin-left: 20px;

  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 28px;
  gap: 10px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;

  &.active {
    background-color: #f59256;
    color: #ffffff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    scale: 1.05;
  }
`;
