import { Navigate, useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectAccessToken } from 'redux/auth/authSelectors';
// import useMatchMedia from 'hooks/useMatchMedia';
import { categoryButtons, allowCategory } from './category';
import Box from 'components/Common/Box';
import AddNoticeButton from 'components/Notices/AddNoticeButton';

import {
  CategoryList,
  CategoryListItem,
  CategoryPage,
  CategoryPageBox,
} from './NoticesCategoriesNav.styled';
// import { selectAccessToken } from 'redux/auth/authSelectors';

function NoticesCategoriesNav({ getBtnInfo, token, isLogin }) {
  // const { isDesktop } = useMatchMedia();

  const handleClick = e => {
    e.preventDefault();
    const btnId = e.currentTarget.id;
    const btnType = e.currentTarget.dataset;
    getNotice(btnId, btnType);
  };

  const getNotice = (btnId, btnType) => {
    getBtnInfo(btnId, btnType);
  };

  // let publicRoute = [];
  // if (isDesktop) {
  //   publicRoute = [...categoryButtons.publicRoute.reverse()];
  // } else {
  //   publicRoute = [...categoryButtons.publicRoute];
  // }

  const { category } = useParams();
  // const token = useSelector(selectAccessToken);
  return (
    <>
      {!Boolean(allowCategory.find(item => item === category)) ? (
        <Navigate to={'/'} />
      ) : (
        <>
          <CategoryPageBox>
            <Box>
              <CategoryList>
                {categoryButtons.publicRoute.map(({ pageTitle, link }) => (
                  <CategoryListItem key={pageTitle}>
                    <CategoryPage to={`/notices/${link}`}>
                      {pageTitle}
                    </CategoryPage>
                  </CategoryListItem>
                ))}

                {Boolean(token) &&
                  Boolean(isLogin) &&
                  categoryButtons.privateRoute.map(({ pageTitle, link }) => (
                    <CategoryListItem key={pageTitle}>
                      <CategoryPage to={`/notices/${link}`}>
                        {pageTitle}
                      </CategoryPage>
                    </CategoryListItem>
                  ))}
              </CategoryList>
            </Box>
            <Box>
              <AddNoticeButton handleClick={handleClick} />
            </Box>
          </CategoryPageBox>
        </>
      )}
    </>
  );
}

export default NoticesCategoriesNav;
