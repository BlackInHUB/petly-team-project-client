import styled from "styled-components";

// export const LogoutBtn = styled.button`
//     color: ${p => p.theme.colors.black};
//     font-family: ${p => p.theme.fonts.body};
//     font-size: ${p => p.theme.fontSizes[2]};
//     padding-left: ${p => p.theme.space[3]}px;
//     padding-right: ${p => p.theme.space[3]}px;
//     padding-bottom: ${p => p.theme.space[2]}px;
//     padding-top: ${p => p.theme.space[2]}px;
//     display: block;
//     border: ${p => p.theme.borders.normal};
//     border-radius: ${p => p.theme.radii.normal};
//     cursor: pointer;

    


//     :hover{
//         color: ${p => p.theme.colors.link};
//         background-color: ${p => p.theme.colors.accent};
//     };
// `

export const LogoutBtn = styled.button`
    display: flex;
    align-items: center;
    background: ${p => p.theme.colors.white};
    border: none;
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