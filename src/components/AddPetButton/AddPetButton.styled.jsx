import styled from "styled-components"

export const AddPetWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    min-width: 130px;

    & button.add-button:hover ~ p.add-text {
    translate: 110px;
    color: ${p => p.theme.colors.white};
}
`

export const AddPetDesc = styled.p`
    font-size: ${p => p.theme.fontSizes[4]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    margin-right: 15px;
`

export const AddPetBtn = styled.button`
    display: flex;
    align-items: center;
    background: ${p => p.theme.colors.accent};
    border: none;
    border-radius: ${p => p.theme.radii.big};
    padding: ${p => p.theme.space[3]}px;
    cursor: pointer;

    &:hover {
    transition: margin-left 3s;
    border-radius: 40px;
    width: 120px;
        
        & svg {
            opacity: 0;
        }
    }
`