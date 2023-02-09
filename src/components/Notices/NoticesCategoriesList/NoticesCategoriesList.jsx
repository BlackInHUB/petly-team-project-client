import useNotices from "hooks/useNotices";
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";
import {NoticesCategoriesListStyled} from "./NoticesCategoriesList.Styled"
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

   if (toRender.length === 0) {
      return (<h2>Sorry there is nothing to show</h2>);
   };

   return (
      <NoticesCategoriesListStyled>
         {!toRender && <h2>We have no notices in this category.</h2>}
         {toRender.map(notice => <NoticeCategoryItem key={notice._id} notice={notice} learnMore={handleInfoOpen} />)}
      </NoticesCategoriesListStyled>
   )  
};

export default NoticesCategoriesList;