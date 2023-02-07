import {NoticeCard, HeartBtn, PetInfo} from "./NoticeCategoryItem.styled"
import { HiOutlineHeart } from "react-icons/hi"
import Button from "../../baseComponents/Button/Button"

export const NoticeCategoryItem = ({ notice }) => {
    const {category, photoUrl, title, breed, location, price, birthday} = notice;

    return (
        <NoticeCard>
            <span className="category">{category}</span>
            <HeartBtn className="heart" type="button">{<HiOutlineHeart width="28" height="28"/>}</HeartBtn>
            <img src={photoUrl} alt={title}/>
            <h3>{title}</h3>
            <PetInfo>
                <p><span className="pet-info-title">Breed:</span><span>{breed} Pomeranian</span></p>
                <p><span className="pet-info-title">Place:</span><span>{location}Lviv</span></p>
                <p><span className="pet-info-title">Age:</span><span>{birthday} one year</span></p>
                {price !== '' && <p><span className="pet-info-title">Price:</span><span>{price}50$</span></p>}
            </PetInfo>
            <Button type="button">Learn more</Button>
        </NoticeCard>
    )
}