import styled from 'styled-components';
import {ReactComponent as Heart} from '../../../images/icons/heart2.svg'
import {ReactComponent as Delete} from '../../../images/icons/petsItem/delete.svg'
import {ReactComponent as Pencil} from '../../../images/icons/userData/pencil.svg';

export const NoticeCard = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.mainShadow};
  border-radius: ${p => p.theme.radii.none} ${p => p.theme.radii.none}
  ${p => p.theme.radii.big} ${p => p.theme.radii.big};
`;

export const Category = styled.span`
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
`

export const CardImg = styled.img`
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
`

export const ContentWrapper = styled.div`
height: 100%;
display: flex;
justify-content: space-between;
flex-direction: column;
padding-right: ${p => p.theme.space[5]}px;
padding-left: ${p => p.theme.space[5]}px;

@media (min-width: 768px) {
  padding-right: ${p => p.theme.space[6]}px;
  padding-left: ${p => p.theme.space[6]}px;
}
`

export const CardTextContainer = styled.div`

`

export const CardTitle = styled.h3`
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes[6]};
line-height: ${p => p.theme.fontHeight.l};
letter-spacing: -0.01em;
color: ${p => p.theme.colors.text};
margin-bottom: 20px;
text-overflow: ellipsis;
word-wrap: break-word;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
`

export const StringWrapper = styled.div`
display: flex;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes[2]};
line-height: ${p => p.theme.fontHeight.l};
color: ${p => p.theme.colors.text};

&:not(:last-child) {
  margin-bottom: ${p => p.theme.space[3]}px;
}
`

export const StringTitle = styled.span`
min-width: 50px;
`

export const StringText = styled.span`
  display: flex;
  margin-left: 36px;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical
`

export const HeartIcon = styled(Heart)`
  padding: 0;
  margin: 0;
  width: 24px;
  height: auto;
  fill: ${p => p.favorite === 1 ?  p.theme.colors.hoveredAccent : p => p.theme.colors.white};
  stroke: ${p => p.favorite === 1 ?  p.theme.colors.hoveredAccent : p => p.theme.colors.accent};
  transition: ${p => p.theme.transition.all};

  &:hover,
  :focus-visible {
    stroke: ${p => p.theme.colors.hoveredAccent};
    fill: ${p => p.theme.colors.hoveredAccent};
  }
`

export const HeartBtn = styled.button`
  outline: none;
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
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 88px;
  margin: 0 auto;
  margin-top: 20px;
  padding-bottom: ${p => p.theme.space[4]}px;
`

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 248px;
height: 38px;
border-radius: ${p => p.theme.radii.big};
border: ${p => p.theme.borders.normal + ' ' + p.theme.colors.accent};
outline: none;
background-color: ${p => p.theme.colors.white};
font-family: inherit;
font-size: ${p => p.theme.fontSizes[2]};
color: ${p => p.theme.colors.accent};
font-weight: ${p => p.theme.fontWeights.normal};
line-height: ${p => p.theme.fontHeight.l};
letter-spacing: 0.04em;
transition: ${p => p.theme.transition.all};
cursor: pointer;

&:not(:last-child) {
  margin-bottom: ${p => p.theme.space[4]}px;
}

&:hover,
:focus {
  border-color: ${p => p.theme.colors.hoveredAccent};
  color: ${p => p.theme.colors.hoveredAccent};
}
`

export const DeleteIcon = styled(Delete)`
  fill: ${p => p.theme.colors.accent};
  margin-left: 13px;
  fill-opacity: 1;
  transition: ${p => p.theme.transition.all};

  ${Button}:hover & {
    fill: ${p => p.theme.colors.hoveredAccent};
  };

  ${Button}:focus & {
    fill: ${p => p.theme.colors.hoveredAccent};
  };
`

export const UpdateBtn = styled.button`
  outline: none;
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
  };
`;

export const UpdateIcon = styled(Pencil)`
  width: 24px;
  height: auto;
  fill: ${p => p.theme.colors.accent};
  transition: ${p => p.theme.transition.all};

  ${UpdateBtn} &:hover {
    fill: ${p => p.theme.colors.hoveredAccent};
  };
`;