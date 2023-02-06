import styled from "styled-components"
import { ReactComponent as Close } from '../../images/icons/modalAddsPet/close.svg'
import { ReactComponent as Plus} from '../../images/icons/modalAddsPet/plus.svg'

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

export const ModalAddsPetDescription = styled.p`
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[2]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    text-align: center;
    margin-bottom: ${p => p.theme.space[6]}px;
    margin-top: ${p => p.theme.space[6]}px;
`

export const ModalAddsPetPlusWrapper = styled.div`
    position: relative;
    background-color: ${p => p.theme.colors.background};
    margin-right: auto;
    margin-left: auto;
    margin-bottom: ${p => p.theme.space[6]}px;
    width: 208px;
    height: 208px;
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.none}
`

export const ModalAddsPetPlusInput = styled.input`
    padding-bottom: 25px;
    opacity: 0;
    position: absolute;
    /* z-index: -1; */
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`

export const PlusStyled = styled(Plus)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const ModalAddsPetTextarea = styled.textarea`
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[1]};
    font-weight: ${p => p.theme.fontWeights.thin};
    line-height: 1.35;
    width: 240px;
    min-height: 100px;
    padding-top: ${p => p.theme.space[4]}px;
    padding-left: 14px;
    border-radius: ${p => p.theme.radii.big};
    background-color: ${p => p.theme.colors.background};
    border: ${p => p.theme.borders.small};
    border-radius: ${p => p.theme.radii.normal};
    border-color: ${p => p.theme.colors.inputColor};
    margin-bottom: ${p => p.theme.space[10]}px;

    &::placeholder {
        color: ${p => p.theme.colors.inputPlaceholder};
}
`