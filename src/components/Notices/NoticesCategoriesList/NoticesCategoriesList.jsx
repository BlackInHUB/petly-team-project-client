import useNotices from "hooks/useNotices";
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";
import {NoticesCategoriesListStyled} from "./NoticesCategoriesList.Styled"
import { useParams } from "react-router-dom";

const NoticesCategoriesList = () => {
   const {notices, favorites, own} = useNotices();
   const {categoryName} = useParams();

   const toRender = categoryName === 'my-favorites' ? favorites : categoryName === 'my-notices' ? own : notices;

   if (toRender.length === 0) {
      return;
   };

   return (
      <NoticesCategoriesListStyled>
         {toRender.map(notice => <NoticeCategoryItem key={notice._id} notice={notice}/>)}
      </NoticesCategoriesListStyled>
   )  
};

export default NoticesCategoriesList;