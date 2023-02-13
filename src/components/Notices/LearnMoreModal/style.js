import styled from 'styled-components';
import { ReactComponent as Heart } from 'images/icons/heart2.svg';
import { ImProfile } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';

export const PetPhotoAndInfoContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const PetPhotoAndInfoAndCommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const PetPhotoContainer = styled.div`
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @media (min-width: 768px) {
    width: 288px;
  }
`;

export const PetPhoto = styled.img`
  display: inline;
  object-fit: cover;
  width: 240px;
  height: 240px;
  border-radius: 0 0 40px 40px;

  @media (min-width: 768px) {
    width: 288px;
    height: 328px;
  }
`;

export const FavoritIcon = styled(Heart)`
  stroke: ${p => p.theme.colors.hoveredAccent};
  fill: ${p => p.theme.colors.hoveredAccent};
`;

export const FavoritIconContainer = styled.div`
  display: flex;
  position: absolute;
  right: 12px;
  top: 12px;
  padding: 8px;
  font-size: ${p => p.theme.fontSizes[6]};
  color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal} transparent;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const PetCategory = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;

  width: 158px;
  height: 28px;
  border-radius: 0 40px 40px 0;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.paleWhite};
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.fontHeight.l};
`;

export const PetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: start;
  width: 100%;
  @media (min-width: 768px) {
    width: 310px;
  }
`;

export const PetTitle = styled.div`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: -1%;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[6]};
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const ContactButtonsContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
  @media (min-width: 768px) {
    gap: 12px;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  min-width: 240px;
  @media (min-width: 768px) {
    width: 380px;
    flex-direction: row-reverse;
  }
`;

export const CallIcon = styled(AiFillPhone)`
  color: ${p => p.theme.colors.accent};
`;

export const ProfileIcon = styled(ImProfile)`
  color: ${p => p.theme.colors.accent};
`;
