import styled from "styled-components"

export const AddsPetBtnStyle = styled.button`
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
    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.white};
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.big};
    border-color: ${p => p.theme.colors.accent};
    cursor: pointer;
    transition: ${p => p.theme.transition.all};

    &:hover, :focus {
        outline: none;
        border-color: ${p => p.theme.colors.hoveredAccent};
    }

    @media screen and (min-width: 768px) {
        width: 180px;
        height: 44px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: ${p => p.theme.fontSizes[4]};
    }
`