import styled from "styled-components"

export const AddsPetBtnStyleOrange = styled.button`
    position: relative;
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
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.big};
    margin-bottom: ${p => p.theme.space[4]}px;
    cursor: pointer;
    transition: ${p => p.theme.transition.all};

&:hover, :focus {
    outline: none;
    background-color: ${p => p.theme.colors.hoveredAccent};
    border-color: ${p => p.theme.colors.hoveredAccent};
}

@media screen and (min-width: 768px) {
        width: 180px;
        height: 44px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: ${p => p.theme.fontSizes[4]};
        margin-bottom: ${p => p.theme.space[0]}px;
    }
`
