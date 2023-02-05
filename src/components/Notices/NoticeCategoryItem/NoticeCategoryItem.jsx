import {NoticeCard, HeartBtn} from "./NoticeCategoryItem.styled"
import {HiOutlineHeart} from "react-icons/hi"

export const NoticeCategoryItem = ({ notice }) => {
    const {category, photoUrl, title, location, price, birthday} = notice;
    console.log(notice.title);
    return (
        <NoticeCard>
            <span className="category">{category}</span>
            <HeartBtn className="heart" type="button">{<HiOutlineHeart width="28" height="28"/>}</HeartBtn>
            <img src={photoUrl} alt={title}/>
            <h3>{title}</h3>
            <span>Place:</span><span>{location}</span>
            <span>Age:</span><span>{birthday}</span>
            {price !== '' && <><span>Price:</span><span>{price}</span></>}
            <button type="button">Learn more</button>
        </NoticeCard>
    )
}