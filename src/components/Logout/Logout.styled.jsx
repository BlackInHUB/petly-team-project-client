import styled from "styled-components";

export const BtnLogout = styled.button`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]};
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[2]}px;
    display: block;
    /* margin-left: auto;
    margin-right: auto; */
    /* margin-bottom: ${p => p.theme.space[0]}px;
    margin-top: ${p => p.theme.space[5]}px; */
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;
    :hover{
        color: ${p => p.theme.colors.link};
        background-color: ${p => p.theme.colors.accent};
    };
`