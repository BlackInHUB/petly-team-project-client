import styled from 'styled-components';

export const UserPageWrapper = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    padding-bottom: ${p => p.theme.space[13]}px;
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
  }

  @media screen and (min-width: 768px) {
    /* max-width: 736px; */
    padding-bottom: ${p => p.theme.space[14]}px;
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[9]}px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    /* max-width: 1280px; */
    padding-bottom: ${p => p.theme.space[10]}px;
    padding-right: ${p => p.theme.space[5]}px;
  }
`;
export const UserDataWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    margin-right: ${p => p.theme.space[9]}px;
  }
`;

export const UserDataContainer = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.userDataShadow};
  margin-bottom: ${p => p.theme.space[10]}px;
  margin-top: 18px;
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;

  @media screen and (min-width: 768px) {
    position: relative;
    /* margin-left: -32px; */
    margin-bottom: ${p => p.theme.space[6]}px;
    margin-top: ${p => p.theme.space[10]}px;
    padding-right: ${p => p.theme.space[10]}px;
    padding-top: ${p => p.theme.space[7]}px;
    padding-bottom: ${p => p.theme.space[7]}px;
    border-bottom-left-radius: ${p => p.theme.radii.none};
    border-top-left-radius: ${p => p.theme.radii.none};
    border-bottom-right-radius: ${p => p.theme.radii.big};
    border-top-right-radius: ${p => p.theme.radii.big};
  }

  @media screen and (min-width: 1280px) {
    /* margin-left: ${p => p.theme.space[-5]}px; */
    margin-bottom: ${p => p.theme.space[0]}px;
    margin-top: ${p => p.theme.space[7]}px;
    padding-right: ${p => p.theme.space[5]}px;
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
  }
`;
