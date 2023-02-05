import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { noticesOperations } from "redux/notices";
import useNotices from "hooks/useNotices";
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";
import {NoticesCategoriesListStyled} from "./NoticesCategoriesList.Styled"

const NoticesCategoriesList = () => {
   const {categoryName} = useParams();
   const dispath = useDispatch();

   useEffect(() => {
      if(categoryName === '') {
         return;
      }
      dispath(noticesOperations.getAll(categoryName));
   }, [categoryName, dispath]);

   const {notices} = useNotices();

   console.log(notices);

   return (
      <NoticesCategoriesListStyled>
         {notices.map(notice => <NoticeCategoryItem key={notice._id} notice={notice}/>)}
      </NoticesCategoriesListStyled>
   )  
};

export default NoticesCategoriesList;