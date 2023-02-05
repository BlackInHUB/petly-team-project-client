import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { noticesOperations } from "redux/notices";
import useNotices from "hooks/useNotices";
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";

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

   return (
      <ul>
         {notices.map(notice => <NoticeCategoryItem key={notice._id} notice={notice}/>)}
      </ul>
   )  
};

export default NoticesCategoriesList;