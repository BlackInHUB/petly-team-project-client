import styled from "styled-components"
import { ReactComponent as Close } from '../../../images/icons/modalAddsPet/close.svg'

export const ModalAddsPetWrapper = styled.div`
    position: relative;
`

export const ModalAddsPetCloseBtn = styled.button`
    position: absolute;
    right: ${p => p.theme.space[0]}px;
    top: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: ${p => p.theme.colors.background};
    border-color: transparent;
    border-radius: ${p => p.theme.radii.round};
    width: 34px;
    height: 34px;
    cursor: pointer;

    :hover svg{
        fill: ${p => p.theme.colors.hoveredAccent}
    }

    @media screen and (min-width: 768px) {
        width: 44px;
        height: 44px;
        right: -55px;
    }
`

export const CloseIcon = styled(Close)`
    width: ${p => p.theme.space[5]};
    height: ${p => p.theme.space[5]};
    fill: ${p => p.theme.colors.black};
    transition: ${p => p.theme.transition.all};

    &:hover,
    :focus {
        fill: ${p => p.theme.colors.hoveredAccent}
    }

    @media screen and (min-width: 768px) {
        width: ${p => p.theme.space[6]};
        height: ${p => p.theme.space[6]};
    }
`

export const ModalAddsPetTitle = styled.h2`
    color:${p => p.theme.colors.black};
    font-size: ${p => p.theme.fontSizes[5]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    text-align: center;
    letter-spacing: 0.04em;
    /* margin-left: auto;
    margin-right: auto; */

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[8]};
        letter-spacing: 0;
    }
`