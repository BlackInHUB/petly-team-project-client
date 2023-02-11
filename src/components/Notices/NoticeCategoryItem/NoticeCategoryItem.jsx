import { NoticeCard, HeartBtn, PetInfo, ButtonWrapper, HeartIcon, DeleteIcon } from "./NoticeCategoryItem.styled";
import Button from "../../baseComponents/Button/Button";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { noticesOperations } from "redux/notices";
import { authOperations } from "redux/auth";
import getAge from "./getAge";

export const NoticeCategoryItem = ({ notice, learnMore }) => {
    const { category, photoUrl, title, breed, location, price, birthday, _id, owner } = notice;
    const {user} = useAuth();
    const dispatch = useDispatch();
    const age = getAge(birthday);

    const isOwner = user._id === owner;
    const favorite = user.favorites?.includes(_id) ? 1 : 0;

    const handleDelete = () => {
        dispatch(noticesOperations.remove(_id))
    }

    const toggleFavorites = () => {
        dispatch(authOperations.favorites(_id))
    }

    return (
        <NoticeCard>
            <span className="category">{category}</span>
            {!isOwner
             && <HeartBtn className="heart"type="button" onClick={toggleFavorites}>{<HeartIcon favorite={favorite} />}</HeartBtn>}
            <img src={photoUrl} alt={title}/>
            <h3>{title}</h3>
            <PetInfo>
                <p><span className="pet-info-title">Breed:</span><span>{breed}</span></p>
                <p><span className="pet-info-title">Place:</span><span>{location}</span></p>
                <p><span className="pet-info-title">Age:</span><span>{age}</span></p>
                {price && <p><span className="pet-info-title">Price:</span><span>{price}</span></p>}
            </PetInfo>
            <ButtonWrapper>
                <Button type="button" loadMore buttonStyle="secondary" onClick={() => learnMore(_id)}>Learn more</Button>
                {isOwner
                 && <Button type="button" loadMore buttonStyle="secondary" onClick={handleDelete} >Delete <DeleteIcon /></Button> }
            </ButtonWrapper>
        </NoticeCard>
    )
}