import styled from "styled-components";
import {ReactComponent as deleteIcon} from '../../images/icons/petsItem/delete.svg'
import {IoMailUnreadOutline} from 'react-icons/io5'
import {FaArrowAltCircleUp, FaArrowAltCircleDown} from 'react-icons/fa';
import {BsReply} from 'react-icons/bs'

export const List = styled.ul`
margin-top: ${p => p.theme.space[5]}px;
width: 100%;
display: flex;
flex-direction: column;
`

export const ListItem = styled.li`
position: relative;
padding: ${p => p.theme.space[3]}px;
background-color: ${p => p.theme.colors.white};
border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.borders.small} ${p => p.isOpen ? p.theme.colors.accent : p.theme.colors.transparent};
box-shadow: ${p => p.theme.shadows.mainShadow};
transition: ${p => p.theme.transition.all};

@media (min-width: 768px) {
    padding: ${p => p.theme.space[4]}px;
}

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
flex-direction: column;
margin-bottom: ${p => p.theme.space[4]}px;
cursor: pointer;

@media (min-width: 400px){
    flex-direction: row;
    align-items: center;
}
`

export const ItemInfoSender = styled.span`
display: flex;
align-items: center;    
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[2]}px;

@media (min-width: 400px) {
    font-size: ${p => p.theme.fontSizes[3]};
    margin-bottom: 0;
}
`

export const ItemInfoTime = styled.span`
    font-size: ${p => p.theme.fontSizes[0]};

    @media (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[2]};
    }
`

export const ItemTitle = styled.p`
font-weight: ${p => p.theme.fontWeights.bold};

`

export const Details = styled.div`
margin-top: ${p => p.theme.space[5]}px;
position: relative;
`

export const ItemText = styled.p`
    width: 80%;
`

export const BtnsWrapper = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
bottom: 0;
right: 0;

@media (min-width: 768px) {
    flex-direction: row;
}
`

export const ItemDeleteBtn = styled.button`
    padding: ${p => p.theme.space[1]}px;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: ${p => p.theme.transition.all};

    &:hover,
    :focus {
        fill: ${p => p.theme.colors.hoveredAccent};
        fill-opacity: 1;
    }
`

export const DeleteIcon = styled(deleteIcon)`
    fill-opacity: 0.6;
`

export const Unreaded = styled(IoMailUnreadOutline)`
    position: absolute;
    top: -13px;
    left: -15px;
    width: 20px;
    height: auto;
    fill: ${p => p.theme.colors.accent};
    stroke: ${p => p.theme.colors.accent};

    @media (min-width: 768px) {
    top: -17px;
    left: -19px;
    width: 25px;
    }
`

export const ReplyBtn = styled.button`
padding: ${p => p.theme.space[1]}px;
outline: none;
border: none;
background-color: transparent;
margin-bottom: ${p => p.theme.space[3]}px;
cursor: pointer;

@media (min-width: 768px) {
    margin-right: ${p => p.theme.space[6]}px;
    margin-bottom: 0px;
}

& :hover {
        fill: ${p => p.theme.colors.hoveredAccent};
    }
`

export const ReplyIcon = styled(BsReply)`
    fill: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.transition.all};
`

export const OutIcon = styled(FaArrowAltCircleUp)`
    fill: green;
    margin-right: ${p => p.theme.space[3]}px;
`

export const InIcon = styled(FaArrowAltCircleDown)`
    fill: blue;
    margin-right: ${p => p.theme.space[3]}px;
`