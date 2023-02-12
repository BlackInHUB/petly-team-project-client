import styled from "styled-components";
import {ReactComponent as deleteIcon} from '../../images/icons/petsItem/delete.svg'
import {IoMailUnreadOutline} from 'react-icons/io5'

export const List = styled.ul`
width: 50%;
padding: ${p => p.theme.space[6]}px;
margin: 0 auto;
display: flex;
flex-direction: column;
`

export const ListItem = styled.li`
position: relative;
padding: ${p => p.theme.space[4]}px;
background-color: ${p => p.theme.colors.white};
border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.borders.small} ${p => p.isOpen ? p.theme.colors.accent : p.theme.colors.transparent};
box-shadow: ${p => p.theme.shadows.mainShadow};
transition: ${p => p.theme.transition.all};

&:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
}

&:hover,
:focus {
    border: ${p => p.theme.borders.small} ${p => p.theme.colors.accent};
}
`

export const ItemInfo = styled.p`
display: flex;
justify-content: space-between;
margin-bottom: ${p => p.theme.space[4]}px;
cursor: pointer;
`

export const ItemInfoSender = styled.span`
font-weight: ${p => p.theme.fontWeights.bold};
`

export const ItemInfoTime = styled.span`

`

export const ItemTitle = styled.p`
font-weight: ${p => p.theme.fontWeights.bold};

`

export const Details = styled.div`
margin-top: ${p => p.theme.space[5]}px;
position: relative;
`

export const ItemText = styled.p`

`

export const ItemDeleteBtn = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: ${p => p.theme.space[1]}px;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: ${p => p.theme.transition.all};

    &:hover,
    :focus {
        fill: ${p => p.theme.colors.hoveredAccent};
    }
`

export const DeleteIcon = styled(deleteIcon)`
    /* transition: ${p => p.theme.transition.all};
    
    ${ItemDeleteBtn} & :hover {
        fill: ${p => p.theme.colors.hoveredAccent};
    }; */
`

export const Unreaded = styled(IoMailUnreadOutline)`
    position: absolute;
    top: -20px;
    left: -22px;
    width: 30px;
    height: auto;
    fill: ${p => p.theme.colors.accent};
    stroke: ${p => p.theme.colors.accent};
`