import styled from 'styled-components';
import { device } from 'utils/device';
import { ReactComponent as Favorite } from 'assets/icons/favorite.svg';
import { ReactComponent as Delete } from 'assets/icons/delete.svg';
import { StyledButton } from 'components/Common/Button/Button.styled';

export const ItemNotice = styled.li`
  max-width: ${p => `${p.theme.space[8] + 24}px`};
  height: ${p => `${p.theme.space[9] + 94}px`};
  background: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  padding-bottom: 32px;

  ${p =>
    p.own && {
      paddingBottom: '12px',
    }}
  @media ${device.tablet} {
    max-width: ${p => `${p.theme.space[9] - 176}px`};
  }

  @media ${device.desktop} {
    max-width: ${p => `${p.theme.space[8] + 32}px`};
  }
`;

export const NoticeFavoriteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => `${p.theme.space[6] - 20}px`};
  height: ${p => `${p.theme.space[6] - 20}px`};
  border-radius: ${p => p.theme.radii.round};
  background: #ffffff99;
  border: none;
`;

//INFO як можна стилізувати в залежності від умови пропса

export const IconFavorite = styled(Favorite)`
  fill: ${p => p.theme.colors.whiteAlpha};

  ${p =>
    p.favorite === 'true' && {
      fill: p.theme.colors.accent,
    }}
`;

export const ImgNotice = styled.img`
  width: 100%;
  /* width: 280px; */
  height: 288px;

  @media ${device.tablet} {
    width: ${p => `${p.theme.space[9] - 176}px`};
  }

  @media ${device.desktop} {
    width: ${p => `${p.theme.space[8] + 32}px`};
  }
`;

export const NoticeTitle = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${p => p.theme.letterSpacing.xs};
  text-align: left;
  width: ${p => `${p.theme.space[8] - 26}px`};
  margin-top: ${p => `${p.theme.space[4] + 4}px`};
  /* height: 78px;   */

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* display: -webkit-box;
  -webkit-line-clamp: 2; // количество строк
  -webkit-box-orient: vertical;
  overflow: hidden; */
`;

export const NoticeListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: ${p => `${p.theme.space[4] + 4}px`};
  gap: ${p => `${p.theme.space[3]}px`};
  /* margin-bottom: ${p => `${p.theme.space[5] + 10}px`}; */
  /* 
  ${p =>
    p.category === 'sell' && {
      marginBottom: `${p.theme.space[5] - 4}px`,
    }} */
`;

export const NoticeItemInfo = styled.li`
  display: flex;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const NoticeItemInfoTitle = styled.span`
  width: ${p => `${p.theme.space[6] - 4}px`};
`;

export const NoticeItemInfoValue = styled.span``;

export const WrapNoticeCategory = styled.div`
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
export const NoticeCategory = styled.p`
  font-family: ${p => p.theme.fonts.formInput};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.title};
  text-align: center;
  padding-left: ${p => `${p.theme.space[4] + 4}px`};
`;

//INFO як можна стилізувати в залежності від умови пропса
export const BtnLearnMore = styled(StyledButton)`
  margin-top: 76px;
  margin-left: auto;
  margin-right: auto;
  ${p =>
    p.category === 'sell' && {
      marginTop: `${p.theme.space[5] + 12}px`,
    }}
  ${p =>
    p.own &&
    p.sell !== 'sell' && {
      marginTop: `${p.theme.space[5] + 18}px`,
      marginBottom: `${p.theme.space[4] - 4}px`,
    }}
  ${p =>
    p.own &&
    p.category === 'sell' && {
      marginTop: `${p.theme.space[4] + 4}px`,
      marginBottom: `${p.theme.space[4] - 4}px`,
    }}

  &:hover {
    color: ${p => p.theme.colors.hover};
    border-color: ${p => p.theme.colors.hover};
  }
`;
export const BtnDelOwn = styled(StyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  gap: 14px;
`;

export const BtnDelSvg = styled(Delete)`
  width: ${p => `${p.theme.space[4]}px`};
  height: ${p => `${p.theme.space[4]}px`};
  fill: currentColor;
`;
