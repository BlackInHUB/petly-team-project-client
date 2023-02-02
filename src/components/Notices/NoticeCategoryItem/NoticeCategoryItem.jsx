import { helpers } from 'utils/helpers';
import Box from 'components/Common/Box';
import {
  ItemNotice,
  ImgNotice,
  IconFavorite,
  NoticeFavoriteBtn,
  NoticeTitle,
  NoticeListInfo,
  NoticeItemInfo,
  BtnLearnMore,
  NoticeCategory,
  WrapNoticeCategory,
  NoticeItemInfoValue,
  NoticeItemInfoTitle,
  BtnDelSvg,
  BtnDelOwn,
} from './NoticeCategoryItem.styled';

function NoticeCategoryItem({
  _id,
  category,
  avatarURL,
  title,
  breed,
  location,
  birthday,
  price,
  favorite,
  own,
  getNotice,
}) {
  const noItem = '-------------';

  const handleClick = e => {
    e.preventDefault();
    const btnId = e.currentTarget.id;
    const btnType = e.currentTarget.dataset;
    getNotice(btnId, btnType, favorite);
  };

  return (
    <ItemNotice own={own}>
      <Box position="relative">
        <Box position="absolute" top="12px" right="12px">
          <NoticeFavoriteBtn
            type="button"
            id={_id}
            onClick={handleClick}
            data-favorite="favorite"
            aria-label="add to favorite"
          >
            <IconFavorite favorite={favorite.toString()} />
          </NoticeFavoriteBtn>
        </Box>

        <ImgNotice src={avatarURL} alt="Animal" loading="lazy" />
        <WrapNoticeCategory>
          <NoticeCategory>{category}</NoticeCategory>
        </WrapNoticeCategory>
      </Box>

      <Box pl={'20px'}>
        <NoticeTitle>{title || noItem}</NoticeTitle>

        <NoticeListInfo>
          <NoticeItemInfo>
            <NoticeItemInfoTitle>Breed:</NoticeItemInfoTitle>
            <NoticeItemInfoValue>{breed || noItem}</NoticeItemInfoValue>
          </NoticeItemInfo>
          <NoticeItemInfo>
            <NoticeItemInfoTitle>Place:</NoticeItemInfoTitle>
            <NoticeItemInfoValue>{location || noItem}</NoticeItemInfoValue>
          </NoticeItemInfo>
          <NoticeItemInfo>
            <NoticeItemInfoTitle> Age:</NoticeItemInfoTitle>
            <NoticeItemInfoValue>
              {/* {birthday || noItem} */}
              {helpers.getAge(birthday)}
            </NoticeItemInfoValue>
          </NoticeItemInfo>
          {category === 'sell' && (
            <NoticeItemInfo>
              <NoticeItemInfoTitle> Price:</NoticeItemInfoTitle>
              <NoticeItemInfoValue>{price || noItem} uah</NoticeItemInfoValue>
            </NoticeItemInfo>
          )}
        </NoticeListInfo>
      </Box>

      <BtnLearnMore
        type="button"
        id={_id}
        onClick={handleClick}
        data-modal="modal"
        own={own}
        category={category}
      >
        Learn more
      </BtnLearnMore>

      {own && (
        <BtnDelOwn
          type="button"
          id={_id}
          onClick={handleClick}
          data-delete="delete"
        >
          Delete <BtnDelSvg />
        </BtnDelOwn>
      )}
    </ItemNotice>
  );
}

export default NoticeCategoryItem;

//TODO прописати пропси.
