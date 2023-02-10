import useNotices from "hooks/useNotices";
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";
import {NoticesCategoriesListStyled, Plug} from "./NoticesCategoriesList.Styled"
import { useLocation, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { noticesOperations } from "redux/notices";


const NoticesCategoriesList = () => {
   const location = useLocation();
   console.log(location)
   const {notices, favorites, own} = useNotices();
   const {handleInfoOpen, category} = useOutletContext();
   const {user} = useAuth();
   const dispatch = useDispatch();

   console.log(category)

   useEffect(() => {
      if(!category) {
        return;
      };

      dispatch(noticesOperations.setCategory(category));
      
      switch (category) {
         case 'favorites':
            dispatch(noticesOperations.getFavorites(user._id));
            break
         case 'own':
            dispatch(noticesOperations.getOwn(user._id));
            break
         default:
            dispatch(noticesOperations.getAll(category));
      }
    }, [category, dispatch, user]);

   const toRender = category === 'favorites' ? favorites : category === 'own' ? own : notices;

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