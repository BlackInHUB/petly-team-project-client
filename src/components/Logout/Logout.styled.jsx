import styled from "styled-components";

export const LogoutBtn = styled.button`
    position: absolute;
    top: 540px;
    right: 20px;
    display: flex;
    align-items: center;
    background: ${p => p.theme.colors.white};
    border: none;
    cursor: pointer;
    margin-left: auto;
    padding-right: ${ p => p.theme.space[4]}px;

    @media screen and (min-width: 768px) {
        position: absolute;
        bottom: 24px;
    }
`

export const LogoutBtnText = styled.span`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    letter-spacing: 0.04em;
    color: ${p => p.theme.colors.logout};
    margin-left: ${ p => p.theme.space[3]}px;
`