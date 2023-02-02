// import react from 'react';

import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import { ListNotices } from './NoticesCategoriesList.styled';

function NoticesCategoriesList({ notices = [], getBtnInfo }) {
  const getNotice = (btnId, btnType, favorite) => {
    getBtnInfo(btnId, btnType, favorite);
  };
  return (
    <>
      <ListNotices>
        {notices.map(({ ...item }) => (
          <NoticeCategoryItem key={item._id} {...item} getNotice={getNotice} />
        ))}
      </ListNotices>
    </>
  );
}

export default NoticesCategoriesList;

//TODO прописати пропси.
