import styled from "styled-components";

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
`
export const UserDataWrapper = styled.div`
    @media screen and (min-width: 1280px) {
        margin-right: ${p => p.theme.space[9]}px;
    } 
`

export const UserDataContainer = styled.div`
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.userDataShadow};
    margin-bottom: ${p => p.theme.space[10]}px;
    margin-top: 18px;
    padding-top: ${ p => p.theme.space[6]}px;
    padding-bottom: ${ p => p.theme.space[6]}px;

    @media screen and (min-width: 768px) {
        position: relative;
        /* margin-left: -32px; */
        margin-bottom: ${ p => p.theme.space[6]}px;
        margin-top: ${ p => p.theme.space[10]}px;
        padding-right: ${ p => p.theme.space[10]}px;
        padding-top: ${ p => p.theme.space[7]}px;
        padding-bottom: ${ p => p.theme.space[7]}px;
        border-bottom-left-radius: ${p => p.theme.radii.none};
        border-top-left-radius: ${p => p.theme.radii.none};
        border-bottom-right-radius: ${p => p.theme.radii.big};
        border-top-right-radius: ${p => p.theme.radii.big};
    }

    @media screen and (min-width: 1280px) {
        /* margin-left: ${ p => p.theme.space[-5]}px; */
        margin-bottom: ${ p => p.theme.space[0]}px;
        margin-top: ${ p => p.theme.space[7]}px;
        padding-right: ${ p => p.theme.space[5]}px;
        padding-top: ${ p => p.theme.space[6]}px;
        padding-bottom: ${ p => p.theme.space[6]}px;
    }
`

export const UserAboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* @media screen and (min-width: 768px) {
        padding-left: ${p => p.theme.space[9]}px;
    }

    @media screen and (min-width: 768px) {
        padding-left: ${p => p.theme.space[5]}px;
    } */
`

export const TopContainer = styled.div`
display: flex;
justify-content: space-between;
/* border-bottom: ${p => p.theme.borders.small} ${p => p.theme.colors.accent}; */
`

export const NavBtnsContainer = styled.div`
    display: flex;
    width: 80%;
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};

    @media (max-width: 400px) {
        flex-direction: column;
        align-items: flex-start
    }
`

export const NavBtn = styled.button`
    outline: none;
    background-color: transparent;
    border: ${p => p.theme.borders.small} ${p => p.theme.colors.transparent};
    color:${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[4]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    letter-spacing: 0.04em;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[6]};
        letter-spacing: 0;
    }

    @media (max-width: 400px) {
        &:not(:last-child) {
            margin-bottom: ${p => p.theme.space[3]}px;
        }
    }

    &:hover,
    :focus {
        border: ${p => p.theme.borders.small} ${p => p.theme.colors.accent};
        border-top-right-radius: ${p => p.theme.radii.small};
        border-top-left-radius: ${p => p.theme.radii.small};
        background-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.white};
    }

    &.active {
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.accent};
    }
`