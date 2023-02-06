import styled from "styled-components"

export const AddsPetBtnStyleOrange = styled.button`
    width: 240px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${p => p.theme.radii.big};
    letter-spacing: 0.04em;
    padding-top: 9px;
    padding-bottom: 9px;
    font-size: ${p => p.theme.fontSizes[2]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.accent};
    border-color: transparent;
    margin-bottom: ${p => p.theme.space[4]}px;
    cursor: pointer;

&:hover, :focus {
    border-color: ${p => p.theme.colors.hoveredAccent};
}
`
