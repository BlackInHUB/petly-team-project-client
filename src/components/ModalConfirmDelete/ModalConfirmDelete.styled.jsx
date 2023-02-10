import styled from "styled-components"
import { ReactComponent as Close} from '../../images/icons/modalAddsPet/close.svg'

export const ModalWrapper = styled.div`
    position: absolute;
    /* width: 90%; */
    background-color: ${p => p.theme.colors.white};
    padding-left: ${p => p.theme.space[10]}px;
    padding-right: ${p => p.theme.space[10]}px;
    padding-top: ${p => p.theme.space[10]}px;
    padding-bottom: ${p => p.theme.space[10]}px;
    border-radius: ${p => p.theme.radii.normal};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 768px) {
        /* max-width: 60%; */
    }

    @media (min-width: 1280px) {
        /* max-width: 40%; */
    }
`

export const CloseBtnWrapper = styled.div`
    position: relative;
`

export const ModalCloseBtn = styled.button`
    position: absolute;
    right: ${p => p.theme.space[0]}px;
    top: -30px;
    right: -30px;
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
    transform: ${p => p.theme.transition.all};
    
    :hover svg{
        fill: ${p => p.theme.colors.hoveredAccent}
    }

    @media screen and (min-width: 768px) {
        width: 44px;
        height: 44px;
        right: -30px;
    }
`

export const CloseIcon = styled(Close)`
    width: ${p => p.theme.space[5]};
    height: ${p => p.theme.space[5]};
    fill: ${p => p.theme.colors.black};
    transform: ${p => p.theme.transition.all};

    &:hover,
    :focus {
        fill: ${p => p.theme.colors.hoveredAccent}
    }

    @media screen and (min-width: 768px) {
        width: ${p => p.theme.space[6]};
        height: ${p => p.theme.space[6]};
    }
`

export const ModalDescription = styled.p`
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[2]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    text-align: center;
    margin-bottom: ${p => p.theme.space[8]}px;
    padding-left: ${p => p.theme.space[7]}px;
    padding-right: ${p => p.theme.space[7]}px;

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[4]};
        line-height: ${p => p.theme.fontHeight.s};
        letter-spacing: -0.01em;
    }
`
export const ModalButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const ModalButton = styled.button`
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${p => p.theme.radii.big};
    letter-spacing: 0.04em;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: ${p => p.theme.fontSizes[2]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.white};
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.accent};
    cursor: pointer;
    transform: ${p => p.theme.transition.all};

    &:hover, :focus {
        background: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.white};
    }

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[4]};
    }
`