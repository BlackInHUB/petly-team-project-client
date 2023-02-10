import styled from "styled-components"
import { ReactComponent as Plus} from '../../images/icons/addPetBtn/plus.svg'

export const AddPetWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const AddPetBtn = styled.button`
@media (max-width: 767px) {
    padding: 10px;
}

    display: flex;
    background-color: transparent;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    padding: 10px;
    background: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.big};
    cursor: pointer;
    transition: ${p => p.theme.transition.all};

    &:hover,
    :focus {
        background: ${p => p.theme.colors.hoveredAccent};
        border-color: ${p => p.theme.colors.hoveredAccent};
    }
`

export const AddPetDesc = styled.p`
@media (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes[0]};
    color: ${p => p.theme.colors.white};
    margin: 0;
}
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[4]};
    color: ${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    margin-right: ${p => p.theme.space[4]}px;
    transform: translateX(-100%);
    opacity: 0;
    transition: ${p => p.theme.transition.all};

    ${AddPetWrapper}:hover & {
        opacity: 1;
        transform: translateX(0);
    }
`

export const PlusIcon = styled(Plus)`
width: 24px;
stroke: ${p => p.theme.colors.white};
`
