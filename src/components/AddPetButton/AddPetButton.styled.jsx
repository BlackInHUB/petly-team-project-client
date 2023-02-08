import styled from "styled-components"
import { ReactComponent as Plus} from '../../images/icons/addPetBtn/plus.svg'

export const AddPetWrapper = styled.div`
    display: flex;
    align-items: center;

@media (max-width: 767px) {
    position: fixed;
    top: 75vh;
    right: 5vh;
    background: ${p => p.theme.colors.accent};
    width: 80px;
    height: 80px;
    border-radius: ${p => p.theme.radii.big};
    z-index: 10;
    flex-direction: column-reverse;
    justify-content: center;
    box-shadow: ${p => p.theme.shadows.userDataShadow};    
}
`

export const AddPetDesc = styled.p`
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[4]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    margin-right: ${p => p.theme.space[4]}px;

@media (max-width: 767px) {
    /* position: absolute; */
    font-size: ${p => p.theme.fontSizes[0]};
    color: ${p => p.theme.colors.white};
    margin: 0;
}
`

export const AddPetBtn = styled.button`
    display: flex;
    background-color: transparent;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    padding: ${p => p.theme.space[3]}px;
    background: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.big};
    cursor: pointer;

@media (max-width: 767px) {
    padding-bottom: 0;
}
`

export const PlusIcon = styled(Plus)`
width: 24px;
stroke: ${p => p.theme.colors.white};

@media (max-width: 767px) {
    width: 32px;
    height: auto;
}
`