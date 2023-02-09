import styled from 'styled-components';
import {ReactComponent as Heart} from '../../../images/icons/heart2.svg'
import {ReactComponent as Delete} from '../../../images/icons/petsItem/delete.svg'

export const NoticeCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
  background: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.mainShadow};
  border-radius: ${p => p.theme.radii.none} ${p => p.theme.radii.none}
    ${p => p.theme.radii.big} ${p => p.theme.radii.big};

  & span.category {
    position: absolute;
    left: 0;
    top: 20px;
    width: 158px;
    height: 28px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 6px 20px;

    font-style: ${p => p.theme.fontStyle.normal};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[0]};
    line-height: ${p => p.theme.fontHeight.l};
    letter-spacing: 0.04em;
    color: ${p => p.theme.colors.text};

    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);
    border-radius: ${p => p.theme.radii.none} ${p => p.theme.radii.big}
      ${p => p.theme.radii.big} ${p => p.theme.radii.none};
  }

  & img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    object-fit: cover;

    @media (max-width: 767px) {
      width: 280px;
      height: 280px;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
      width: 366px;
      height: 366px;
    }

    @media (min-width: 1280px) {
      width: 288px;
      height: 288px;
    }
  }

  & h3 {
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[6]};
    line-height: ${p => p.theme.fontHeight.l};
    letter-spacing: -0.01em;
    color: ${p => p.theme.colors.text};

    max-width: 232px;
    min-height: 76px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
`;

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 20px;

  & p {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    margin-left: 20px;
    min-width: 50px;
  }

  & span.pet-info-title {
    width: 50px;
  }

  & span {
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.text};
  }

  & span + span {
    margin-left: 36px;
  }
`;

export const DeleteIcon = styled(Delete)`
  fill: ${p => p.theme.colors.accent};
  margin-left: 13px;
  fill-opacity: 1;
`

export const HeartIcon = styled(Heart)`
  padding: 0;
  margin: 0;
  width: 24px;
  height: auto;
  fill: ${p => p.favorite ?  p.theme.colors.hoveredAccent : p => p.theme.colors.white};
  stroke: ${p => p.favorite ?  p.theme.colors.hoveredAccent : p => p.theme.colors.accent};
  transition: ${p => p.theme.transition.all};

  &:hover,
  :focus-visible {
    stroke: ${p => p.theme.colors.hoveredAccent};
    fill: ${p => p.theme.colors.hoveredAccent};
  }
`

export const HeartBtn = styled.button`
  display: flex;
  position: absolute;
  right: 12px;
  top: 12px;
  padding: 8px;
  font-size: ${p => p.theme.fontSizes[6]};
  color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal} transparent;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);

  &:hover,
  :focus-visible {
    fill: ${p => p.theme.colors.hoveredAccent};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 0 20px 0 20px;
  margin-top: auto;

  & button {
    margin-bottom: 12px;
  }
`;
