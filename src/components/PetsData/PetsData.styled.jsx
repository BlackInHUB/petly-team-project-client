import styled from "styled-components";

export const AddPetWrapper = styled.div`
    width: 100%;

    @media screen and (min-width: 768px) {
        padding-left: ${p => p.theme.space[9]}px;
    }

    @media screen and (min-width: 768px) {
        padding-left: ${p => p.theme.space[5]}px;
    }
`

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

export const PetDataWrapper = styled.div`
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.userDataShadow};
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
    padding-top: ${p => p.theme.space[9]}px;
    padding-bottom: ${p => p.theme.space[9]}px;

    /* @media (min-width: 768px) {
        display: flex;
        padding-top: ${p => p.theme.space[6]}px;
        padding-bottom: ${p => p.theme.space[6]}px;
    }

    @media (min-width: 1280px) {
        padding-right: ${p => p.theme.space[8]}px;
    } */
`

export const PetDataInfo = styled.h2`
    color:${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    letter-spacing: 0.04em;

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[5]};
        letter-spacing: 0;
    }
`
