import useNotices from "hooks/useNotices";
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";
import {NoticesCategoriesListStyled} from "./NoticesCategoriesList.Styled"
import { useParams, useOutletContext } from "react-router-dom";

const NoticesCategoriesList = () => {
   const {notices, favorites, own} = useNotices();
   const {categoryName} = useParams();
   const {handleInfoOpen} = useOutletContext();

   const toRender = categoryName === 'my-favorites' ? favorites : categoryName === 'my-notices' ? own : notices;

   if (toRender.length === 0) {
      return;
   };

   return (
      <NoticesCategoriesListStyled>
         {toRender.map(notice => <NoticeCategoryItem key={notice._id} notice={notice} learnMore={handleInfoOpen} />)}
      </NoticesCategoriesListStyled>
   )  
};

export default NoticesCategoriesList;