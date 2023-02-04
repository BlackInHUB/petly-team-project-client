import styled from "styled-components";

export const AddPetDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${p => p.theme.space[7]}px;
`

export const PetDataTitle = styled.h2`
    color:${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[4]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    letter-spacing: 0.04em;

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[6]};
        letter-spacing: 0;
    }
`
