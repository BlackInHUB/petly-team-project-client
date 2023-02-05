import styled from "styled-components"

export const AddsPetBtnStyle = styled.button`
    width: 240px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${p => p.theme.radii.big};
    padding-top: 9px;
    padding-bottom: 9px;
    font-size: ${p => p.theme.fontSizes[3]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.text}
`