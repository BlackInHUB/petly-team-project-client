import styled from "styled-components";

export const LogoutBtn = styled.button`
    display: flex;
    align-items: center;
    background: ${p => p.theme.colors.white};
    border: none;
    cursor: pointer;
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