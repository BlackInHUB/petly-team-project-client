import useNotices from "hooks/useNotices";
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";

const NoticesCategoriesList = () => {
   const {notices} = useNotices();

   return (
      <ul>
         {notices.map(notice => <NoticeCategoryItem key={notice._id} notice={notice}/>)}
      </ul>
   )  
};

export default NoticesCategoriesList;