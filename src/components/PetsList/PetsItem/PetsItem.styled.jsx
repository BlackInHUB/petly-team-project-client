import styled from "styled-components"

export const PetsItemWrapper= styled.li`
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.userDataShadow};
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[10]}px;

    &:not(:last-child){
        margin-bottom: ${p => p.theme.space[6]}px;
    }
`

export const PetsItemInfoBlock = styled.div`
    position: relative;
    border-color: ${p => p.theme.colors.accent};
`

export const PetsItemImg = styled.img`
    width:240;
    height: 240px;
    border-radius: ${p => p.theme.radii.normal};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${p => p.theme.space[6]}px;



    object-fit: cover;
`
export const PetsItemDeleteBtn = styled.button`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    background: ${p => p.theme.colors.white};
    border: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const PetsItemDesc = styled.p`
    /* font-family: ${p => p.theme.fonts.body}; */
    color: ${p => p.theme.colors.black};
    font-size: ${p => p.theme.fontSizes[1]};
    font-weight: ${p => p.theme.fontWeights.thin};
    line-height: ${p => p.theme.fontHeight.xl};
    letter-spacing: 0.04em;
    
    &:not(:last-child){
        margin-bottom: ${p => p.theme.space[4]}px;
    }
`

export const PetsItemSpan = styled.span`
    /* font-family: ${p => p.theme.fonts.body}; */
    color: ${p => p.theme.colors.black};
    font-weight: ${p => p.theme.fontWeights.normal};
 
`