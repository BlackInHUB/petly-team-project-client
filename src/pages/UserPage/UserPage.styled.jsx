import styled from "styled-components";

export const UserPageWrapper = styled.div`
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.accent};
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${p => p.theme.space[12]}px;
    margin-bottom: ${p => p.theme.space[13]}px;

    @media screen and (min-width: 1280px) {
        display: flex;
        justify-content: space-between;
        max-width: 1280px;
        margin-top: 69px;
        margin-bottom: ${p => p.theme.space[10]}px;
    }  
`
export const UserDataLogoutContainer = styled.div`
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.userDataShadow};
    margin-bottom: ${p => p.theme.space[10]}px;
`