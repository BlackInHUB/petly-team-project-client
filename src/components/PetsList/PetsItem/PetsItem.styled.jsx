import styled from "styled-components"
import { ReactComponent as Delete } from '../../../images/icons/petsItem/delete.svg'

export const PetsItemWrapper= styled.li`
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.userDataShadow};
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[10]}px;

    &:not(:last-child){
        margin-bottom: ${p => p.theme.space[6]}px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        padding-top: ${p => p.theme.space[6]}px;
        padding-bottom: ${p => p.theme.space[6]}px;
    }
`
export const PetsItemImg = styled.img`
    width:240px;
    height: 240px;
    border-radius: ${p => p.theme.radii.normal};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${p => p.theme.space[6]}px;
    object-fit: cover;

    @media screen and (min-width: 768px) {
        width:161px;
        height: 161px;
        margin-bottom: ${p => p.theme.space[0]}px;
        margin-left: ${p => p.theme.space[0]}px;
        margin-right: ${p => p.theme.space[9]}px;
    }
`

export const PetsItemInfoBlock = styled.div`
    position: relative;
    border-color: ${p => p.theme.colors.accent};

    @media screen and (min-width: 768px) {
        width:471px;
        border: 1px solid blue;
    }
`

export const PetsItemDeleteBtn = styled.button`
    position: absolute;
    right: ${p => p.theme.space[0]}px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: ${p => p.theme.colors.white};
    border-color: transparent;
    border-radius: ${p => p.theme.radii.round};
    width: ${p => p.theme.space[6]}px;
    height: ${p => p.theme.space[6]}px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        /* right: ${p => p.theme.space[6]}px; */
        top: ${p => p.theme.space[0]}px;
        width: 44px;
        height: 44px;
        background: ${p => p.theme.colors.background};
    }
`

export const DeleteIcon = styled(Delete)`
    width: ${p => p.theme.space[6]}px;
    height: ${p => p.theme.space[6]}px;

    @media screen and (min-width: 768px) {
        width: ${p => p.theme.space[7]}px;
        height: ${p => p.theme.space[7]}px;
    }
`

export const PetsItemDesc = styled.p`
    color: ${p => p.theme.colors.black};
    font-size: ${p => p.theme.fontSizes[1]};
    font-weight: ${p => p.theme.fontWeights.thin};
    line-height: ${p => p.theme.fontHeight.xl};
    letter-spacing: 0.04em;
    
    &:not(:last-child){
        margin-bottom: ${p => p.theme.space[4]}px;
    }

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[1]};
        line-height: ${p => p.theme.fontHeight.l};
    }

    
`

export const PetsItemSpan = styled.span`
    /* font-family: ${p => p.theme.fonts.body}; */
    color: ${p => p.theme.colors.black};
    font-weight: ${p => p.theme.fontWeights.normal};

    /* @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[1]};
    } */
 
`