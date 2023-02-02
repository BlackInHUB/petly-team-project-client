import styled from "styled-components"

export const AddPetWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`