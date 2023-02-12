import { NoticeCategoryItem } from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem';
import { NoticesCategoriesListStyled, Plug } from './style.js';

const NoticeList = ({ notices, learnMore }) => {
  return (
    <>
      {notices.length === 0 && (
        <Plug>
          <h2>Your notice may be first in this category 😎</h2>
        </Plug>
      )}
      <NoticesCategoriesListStyled>
        {notices.map(notice => (
          <NoticeCategoryItem
            key={notice._id}
            notice={notice}
            learnMore={learnMore}
          />
        ))}
      </NoticesCategoriesListStyled>
    </>
  );
};

export default NoticeList;
