import styled from 'styled-components';
import { device } from 'utils/device';
import CallTo from 'components/Common/CallTo';
import EmailTo from 'components/Common/EmailTo';
// import Button from 'components/Common/Button';
// import ButtonIcon from 'components/Common/ButtonIcon';
import { ReactComponent as IconClose } from 'assets/icons/icon-close.svg';
import { ReactComponent as Favorite } from 'assets/icons/favorite.svg';
import { ReactComponent as Delete } from 'assets/icons/delete.svg';
import { StyledButton } from 'components/Common/Button/Button.styled';

export const ButtonIconBox = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${device.tablet} {
    position: absolute;
    top: -20px;
    right: 0;
  }
`;
export const ButtonIcon = styled.button`
  width: 44px;
  height: 44px;
  background: #fdf7f2;
  border-radius: 50%;
  border: none;
`;

export const BoxModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 20px;
  }
`;
export const IconCloseModal = styled(IconClose)`
  width: 21px;
  height: 21px;
`;

export const ModalTitle = styled.h2`
  width: 240px;
  height: 66px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-bottom: 8px;
  color: #000000;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.tablet} {
    width: 321px;
    height: 76px;
    font-size: 28px;
    line-height: 38px;
  }
`;

export const ImageModal = styled.img`
  width: 240px;
  height: 240px;
  /* border: 0.5px solid;
  border-color: #f59256; */
  border-radius: 0px 0px 40px 40px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

  @media ${device.tablet} {
    width: 288px;
    height: 328px;
  }
`;

export const CategoryTittleBox = styled.div`
  position: absolute;
  width: ${p => `${p.theme.space[7] + 20}px`};
  height: ${p => `${p.theme.space[5] - 4}px`};
  left: ${p => `${p.theme.space[0]}px`};
  top: ${p => `${p.theme.space[4] + 4}px`};
  border-radius: 0 40px 40px 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
`;
export const CategoryTittle = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;
`;

export const ListInfo = styled.ul`
  margin-bottom: 28px;
`;

export const ItemInfo = styled.li`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  margin-top: 8px;
  color: #000000;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const TextInfoTitle = styled.span`
  width: ${p => `${p.theme.space[7] - 48}px`};

  @media ${device.tablet} {
    width: ${p => `${p.theme.space[7] - 8}px`};
  }
`;
export const TextInfo = styled.span``;

export const TextEmail = styled(EmailTo)``;

export const TextTel = styled(CallTo)``;

export const CommentsSpan = styled.span`
  font-weight: 700;
`;

export const Comment = styled.p`
  display: block;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  width: 240px;
  margin-bottom: 40px;
  /* overflow: hidden; */
  /* overflow: scroll; */
  @media ${device.tablet} {
    width: 660px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
  }
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: ${p => `${p.theme.space[4] - 4}px`};

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-end;
    margin-right: ${p => `${p.theme.space[4] + 4}px`};
  }
`;
export const AnimalsBtn = styled(StyledButton)`
  background-color: #f59256;
  color: white;
  width: 160px;
  height: 40px;
  /* margin-left: auto;
  margin-right: auto; */
`;
export const AnimalsBtnFavorite = styled(AnimalsBtn)`
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  &:hover {
    color: ${p => p.theme.colors.hover};
    border-color: ${p => p.theme.colors.hover};
  }
`;

export const AnimalsFavoriteSvg = styled(Favorite)`
  width: ${p => `${p.theme.space[4]}px`};
  height: ${p => `${p.theme.space[4]}px`};
  fill: currentColor;
`;

export const BtnTel = styled(CallTo)`
  color: white;
  &:hover,
  &:focus {
    color: white;
  }
`;

export const BtnDelOwn = styled(AnimalsBtnFavorite)``;

export const BtnDelSvg = styled(Delete)`
  width: ${p => `${p.theme.space[4]}px`};
  height: ${p => `${p.theme.space[4]}px`};
  fill: #f59256;
  /* fill: currentColor; */
`;
