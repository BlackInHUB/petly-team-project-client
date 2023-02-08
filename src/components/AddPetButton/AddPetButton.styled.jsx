import styled from "styled-components"
import { ReactComponent as Plus} from '../../images/icons/addPetBtn/plus.svg'

export const AddPetWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 130px;
    position: relative;

    @media (min-width: 768px) {
        & button:hover ~ p {
        translate: 20px;
        color: ${p => p.theme.colors.white};
        word-break: normal;
        }
    }
    

  @media (max-width: 767px) {
    position: fixed;
    top: 420px;
    right: 20px;
    width: 80px;
    height: 80px;
    background: #f59256;
    border-radius: 50%;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;

    & p {
        position: relative;
        margin-right: 0;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }

    & button {
        margin-bottom: 5px;
    }
}
`

export const AddPetDesc = styled.p`
    font-size: ${p => p.theme.fontSizes[4]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    margin-right: 45px;
    position: absolute;
`

export const AddPetBtn = styled.button`
    display: flex;
    align-items: center;
    background: ${p => p.theme.colors.accent};
    border: none;
    border-radius: ${p => p.theme.radii.big};
    padding: ${p => p.theme.space[3]}px;
    cursor: pointer;

    @media (min-width: 768px) {
        &:hover {
        transition: margin-left 3s;
        border-radius: 44px;
        width: 120px;
            
            & svg {
                opacity: 0;
            }
        }
    }   
`

export const PlusIcon = styled(Plus)`
    fill: ${p => p.theme.colors.black};
    transition: ${p => p.theme.transition.all};

    &:hover,
    :focus {
        fill: ${p => p.theme.colors.hoveredAccent}
    }
`