import { NoticeCard, HeartBtn, PetInfo, ButtonWrapper } from "./NoticeCategoryItem.styled";
import { HiOutlineHeart, HiTrash } from "react-icons/hi";
import Button from "../../baseComponents/Button/Button";
import { useAuth } from 'hooks/useAuth';

export const NoticeCategoryItem = ({ notice }) => {
    const { category, photoUrl, title, breed, location, price, birthday } = notice;
    const { isLoggedIn, getFavorites } = useAuth();

    return (
        <NoticeCard>
            <span className="category">{category}</span>
            <HeartBtn className="heart" type="button" addFavorite={true}>{<HiOutlineHeart width="28" height="28"/>}</HeartBtn>
            <img src={photoUrl} alt={title}/>
            <h3>{title}</h3>
            <PetInfo>
                <p><span className="pet-info-title">Breed:</span><span>{breed}</span></p>
                <p><span className="pet-info-title">Place:</span><span>{location}</span></p>
                <p><span className="pet-info-title">Age:</span><span>{birthday}</span></p>
                {price !== '' && <p><span className="pet-info-title">Price:</span><span>{price}</span></p>}
            </PetInfo>
            <ButtonWrapper>
                <Button type="button" buttonStyle="secondary" loadMore={true}>Learn more</Button>
                {isLoggedIn && getFavorites && <Button type="button" buttonStyle="secondary" loadMore={true}>Delete <HiTrash width="28px" height="28px" /></Button> }
            </ButtonWrapper>
        </NoticeCard>
    )
}


/* getFavorite нужно прописать условие добавления по кнопке */