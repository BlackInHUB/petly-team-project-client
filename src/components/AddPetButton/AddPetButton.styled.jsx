import styled from "styled-components"
import { ReactComponent as Plus} from '../../images/icons/addPetBtn/plus.svg'

export const AddPetWrapper = styled.div`
    @media (max-width: 767px) {
    position: fixed;
    top: 80vh;
    right: 10vw;
    background: ${p => p.theme.colors.accent};
    width: 80px;
    height: 80px;
    border-radius: ${p => p.theme.radii.big};
    z-index: 10;
    flex-direction: column-reverse;
    justify-content: center;
    box-shadow: ${p => p.theme.shadows.userDataShadow};    
}
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
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
`

export const PlusContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.colors.accent};
  transition: ${p => p.theme.transition.all};
  border-radius: ${p => p.theme.radii.big};
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
export const AddPetBtn = styled.button`
@media (max-width: 767px) {
    padding-bottom: 0;
}

    display: flex;
    background-color: transparent;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    padding: ${p => p.theme.space[3]}px;
    background: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.big};
    cursor: pointer;
`

export const PlusIcon = styled(Plus)`
@media (max-width: 767px) {
    width: 32px;
    height: auto;
}

width: 24px;
stroke: ${p => p.theme.colors.white};
`
