import { Outlet } from 'react-router-dom';
// import FilterNoticesButton from 'components/NotisesTools/FilterNoticesButton/FilterNoticesButton';
// import NoticesCategoryList from 'components/NotisesTools/NoticesCategoriesList/NoticesCategoriesList';
import { SearchBar } from 'components/NotisesTools/NoticesSearchBar/SearchBar';
import { Box, BigBox, Title, Wrapper } from './NoticesPage.styled';

const NoticesPage = () => {

  return (
    <BigBox>
      <Wrapper>
        <Box>
          <Title>Find your favorite pet</Title>
          <SearchBar
          />
          {/* <FilterNoticesButton />  */}
        </Box>
        {/* <NoticesCategoryList /> */}
      </Wrapper>
      <Outlet />
    </BigBox>
  );
};

export default NoticesPage;