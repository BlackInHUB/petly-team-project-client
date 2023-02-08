// import styled from "styled-components"
// import { ReactComponent as Plus} from '../../images/icons/addPetBtn/plus.svg'

// export const AddPetWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     flex-direction: row-reverse;
//     min-width: 130px;

//     & button.add-button:hover ~ p.add-text {
//     translate: 110px;
//     color: ${p => p.theme.colors.white};
// }
// `

// export const AddPetDesc = styled.p`
//     font-size: ${p => p.theme.fontSizes[4]};
//     font-weight: ${p => p.theme.fontWeights.normal};
//     line-height: ${p => p.theme.fontHeight.l};
//     margin-right: 15px;
// `

// export const AddPetBtn = styled.button`
//     display: flex;
//     align-items: center;
//     background: ${p => p.theme.colors.accent};
//     border: none;
//     border-radius: ${p => p.theme.radii.big};
//     padding: ${p => p.theme.space[3]}px;
//     cursor: pointer;
// /* 
//     &:hover {
//     transition: margin-left 3s;
//     border-radius: 40px;
//     width: 120px;
        
//         & svg {
//             opacity: 0;
//         }
//     } */
// `

// export const PlusIcon = styled(Plus)`
//     fill: ${p => p.theme.colors.black};
//     transition: ${p => p.theme.transition.all};

//     &:hover,
//     :focus {
//         fill: ${p => p.theme.colors.hoveredAccent}
//     }
// `

import styled from 'styled-components';

export const AddPetDesc = styled.p`
  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.fontHeight.l};
  overflow: hidden;
  white-space: nowrap;

  pointer-events: none;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[4]};
    color: ${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
  }
`;

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
  position: absolute;
  right: 0;

  width: 80px;
  height: 80px;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.accent};
  border: none;
  border-radius: ${p => p.theme.radii.round};

  cursor: pointer;

  transition: width 0.5s linear;
  :hover {
    box-shadow: ${p => p.theme.shadows.mainShadow};
  }
  @media (min-width: 768px) {
    position: relative;
    flex-direction: row;
    gap: 12px;
    background: transparent;
    border-radius: ${p => p.theme.radii.big};
    width: 130px;
    height: 44px;
  }

  :hover p {
    @media (min-width: 768px) {
      position: absolute;
      color: ${p => p.theme.colors.white};
    }
  }

  :hover div {
    @media (min-width: 768px) {
      border-radius: ${p => p.theme.radii.big};
      width: 100%;
    }
  }

  :hover svg {
    @media (min-width: 768px) {
      opacity: 0;
    }
  }
`;
