import styled from "styled-components"

export const UserDataTitleStyle = styled.h2`
    color:${p => p.theme.colors.black};
    background: ${p => p.theme.colors.background};
    font-size: ${p => p.theme.fontSizes[4]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    letter-spacing: 0.04em;
    margin-bottom: ${p => p.theme.space[6]}px;
    padding-bottom: 18px;
    /* border-top-left-radius: ${p => p.theme.radii.normal};
    border-top-right-radius: ${p => p.theme.radii.normal}; */

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[6]};
        letter-spacing: 0;
    }
`

