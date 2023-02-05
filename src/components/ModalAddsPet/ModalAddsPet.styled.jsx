import styled from "styled-components"
import { ReactComponent as Close } from '../../images/icons/modalAddsPet/close.svg'

export const ModalAddsPetWrapper = styled.div`
    position: absolute;
    max-width: 280px;
    background-color: ${p => p.theme.colors.white};
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
    padding-top: ${p => p.theme.space[10]}px;
    padding-bottom: ${p => p.theme.space[10]}px;
    border-radius: ${p => p.theme.radii.normal};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border: 1px solid red;
`

export const DeleteIcon = styled(Close)`
    width: ${p => p.theme.space[5]};
    height: ${p => p.theme.space[5]};
`

export const FirstPageAddsPetForm = styled.div`
    position: ${p => p.firstPageHide ? 'fixed' : 'static'};
    opacity: ${p => p.firstPageHide ? 0 : 1};
    width: ${p => p.firstPageHide ? p.theme.space[0] : '100%'};
`

export const SecondPageAddsPetForm = styled.div`
    position: ${p => p.firstPageHide ? 'fixed' : 'static'};
    opacity: ${p => p.firstPageHide ? 0 : 1};
    width: ${p => p.firstPageHide ? p.theme.space[0] : '100%'};
`
export const ModalAddsPetItputsWrapper = styled.div`
    margin-top: ${p => p.theme.space[8]}px;
    margin-bottom: ${p => p.theme.space[10]}px;
`

export const ModalAddsPetContainer = styled.div`
    &:not(:last-child){
        margin-bottom: ${p => p.theme.space[5]}px; 
    }
`

export const ModalAddsPetLabel = styled.label`
    display: block;
    font-size: ${p => p.theme.fontSizes[3]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: 1.44;
    margin-bottom: ${p => p.theme.space[3]}px;

    /* @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[3]};
        line-height: 1.8;
    } */
`

export const ModalAddsPetInput = styled.input`
    /* box-sizing:border-box; */
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[1]};
    font-weight: ${p => p.theme.fontWeights.thin};
    line-height: 1.35;
    width: 240px;
    height: 40px;
    padding: 11px 14px;
    border-radius: ${p => p.theme.radii.big};
    background-color: ${p => p.theme.colors.background};
    border: ${p => p.theme.borders.small};
    border-color: ${p => p.theme.colors.inputColor};

    &::placeholder {
        color: ${p => p.theme.colors.inputPlaceholder};
}

    :focus {
        outline-color: transparent;
    }

    /* @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[3]};
        line-height: 1.8;
        width: 216px;
        height: 32px;
        padding-left: ${p => p.theme.space[4]}px;
        padding-right: ${p => p.theme.space[4]}px;
    } */
`