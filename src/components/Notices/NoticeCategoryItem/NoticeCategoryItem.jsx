import { NoticeCard, HeartBtn, PetInfo, ButtonWrapper, HeartIcon } from "./NoticeCategoryItem.styled";
import { HiTrash } from "react-icons/hi";
import Button from "../../baseComponents/Button/Button";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { noticesOperations } from "redux/notices";
import { authOperations } from "redux/auth";

export const NoticeCategoryItem = ({ notice, learnMore }) => {
    const { category, photoUrl, title, breed, location, price, birthday } = notice;
    const {user} = useAuth();
    const favorite = user.favorites.includes(notice._id) ? true : false;
    const owner = user._id === notice.owner ? true : false;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(noticesOperations.remove(notice._id))
    }

    const toggleFavorites = () => {
        dispatch(authOperations.favorites(notice._id))
    }

    return (
        <NoticeCard>
            <span className="category">{category}</span>
            {!owner && <HeartBtn className="heart"type="button" onClick={toggleFavorites}>{<HeartIcon favorite={favorite} />}</HeartBtn>}
            <img src={photoUrl} alt={title}/>
            <h3>{title}</h3>
            <PetInfo>
                <p><span className="pet-info-title">Breed:</span><span>{breed}</span></p>
                <p><span className="pet-info-title">Place:</span><span>{location}</span></p>
                <p><span className="pet-info-title">Age:</span><span>{birthday}</span></p>
                {price !== '' && <p><span className="pet-info-title">Price:</span><span>{price}</span></p>}
            </PetInfo>
            <ButtonWrapper>
                <Button type="button" loadMore buttonStyle="secondary" onClick={() => learnMore(notice._id)}>Learn more</Button>
                {owner && <Button type="button" loadMore buttonStyle="secondary" onClick={handleDelete} >Delete <HiTrash width="28px" height="28px" /></Button> }
            </ButtonWrapper>
        </NoticeCard>
    )
}