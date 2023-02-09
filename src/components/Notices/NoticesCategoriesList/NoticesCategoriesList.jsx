import useNotices from "hooks/useNotices";
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";
import {NoticesCategoriesListStyled, Plug} from "./NoticesCategoriesList.Styled"
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { noticesOperations } from "redux/notices";


const NoticesCategoriesList = () => {
   const {notices, favorites, own} = useNotices();
   const {handleInfoOpen, category} = useOutletContext();
   const {user} = useAuth();
   const dispatch = useDispatch();

   useEffect(() => {
      if(!category) {
        return;
      };

      dispatch(noticesOperations.setCategory(category));
  
      if(user) {
        dispatch(noticesOperations.getFavorites(user._id));
        dispatch(noticesOperations.getOwn(user._id));
      };
  
      dispatch(noticesOperations.getAll(category));
    }, [category, dispatch, user]);

   const toRender = category === 'my-favorites' ? favorites : category === 'my-notices' ? own : notices;

   return (
      <>
      {toRender.length === 0 && <Plug><h2>Your notice may be first in this category 😎</h2></Plug>}
      <NoticesCategoriesListStyled>
         {toRender.map(notice => <NoticeCategoryItem key={notice._id} notice={notice} learnMore={handleInfoOpen} />)}
      </NoticesCategoriesListStyled>
      </>
   )  
};

export default NoticesCategoriesList;