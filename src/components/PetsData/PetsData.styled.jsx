import styled from "styled-components";

export const PetsDataWrapper = styled.div`
    /* border: ${p => p.theme.borders.normal}; */
    /* border-color: ${p => p.theme.colors.accent}; */
    /* max-width: 280px;
    margin-left: auto;
    margin-right: auto; */
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.userDataShadow};
    margin-bottom: ${p => p.theme.space[10]}px;
    /* margin-top: ${p => p.theme.space[12]}px;
    margin-bottom: ${p => p.theme.space[13]}px; */

`

export const PetsDataText = styled.p`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]};
    /* max-width: 280px; */
    min-height: 80px;
    
`