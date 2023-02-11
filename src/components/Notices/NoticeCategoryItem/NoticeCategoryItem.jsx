import { 
    NoticeCard,
    HeartBtn,
    ButtonWrapper,
    HeartIcon,
    DeleteIcon,
    Category,
    CardImg,
    CardTitle,
    CardTextContainer,
    StringWrapper,
    StringTitle,
    StringText,
    Button,
    ContentWrapper } from "./NoticeCategoryItem.styled";
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
            <Category>{category}</Category>
            {!isOwner
             && <HeartBtn className="heart"type="button" onClick={toggleFavorites}>{<HeartIcon favorite={favorite} />}</HeartBtn>}
            <CardImg src={photoUrl} alt={title}/>
            <ContentWrapper>
                <CardTextContainer>
                    <CardTitle>{title}</CardTitle>
                    <StringWrapper>
                        <StringTitle>Breed:</StringTitle>
                        <StringText>{breed}</StringText>
                    </StringWrapper>
                    <StringWrapper>
                        <StringTitle>Place:</StringTitle>
                        <StringText>{location}</StringText>
                    </StringWrapper>
                    <StringWrapper>
                        <StringTitle>Age:</StringTitle>
                        <StringText>{age}</StringText>
                    </StringWrapper>
                    {price && <StringWrapper>
                        <StringTitle>Price:</StringTitle>
                        <StringText>{price}</StringText>
                    </StringWrapper>}
                </CardTextContainer>
                <ButtonWrapper>
                        <Button type="button" onClick={() => learnMore(_id)}>Learn more</Button>
                        {isOwner
                        && <Button type="button" onClick={handleDelete}>Delete<DeleteIcon /></Button> }
                </ButtonWrapper>
            </ContentWrapper>
        </NoticeCard>
    )
}