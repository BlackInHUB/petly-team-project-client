import useNotices from "hooks/useNotices";
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";
import {NoticesCategoriesListStyled} from "./NoticesCategoriesList.Styled"

const NoticesCategoriesList = () => {
   const {notices} = useNotices();

   return (
      <NoticesCategoriesListStyled>
         {notices.map(notice => <NoticeCategoryItem key={notice._id} notice={notice}/>)}
      </NoticesCategoriesListStyled>
   )  
};

export default NoticesCategoriesList;