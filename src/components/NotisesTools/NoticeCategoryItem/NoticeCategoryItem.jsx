import {
  Item,
  ImageWrapper,
  Image,
  CategoryName,
  CheckBoxAddToFavorite,
  DescriptionWrapper,
  Title,
  DescriptionInner,
  DescriptionTextContainer,
  DescriptioтText,
  Button
} from "./NoticeCategoryItem.styled";

const NoticesCategoryItem = ({ notice }) => {
  const {
    avatarURL,
    title,
  } = notice


  return (
    <Item>
      <ImageWrapper>
        <Image
          src={avatarURL}
          alt="Pet"
        />
      </ImageWrapper>
      <CategoryName />
      <CheckBoxAddToFavorite/>
      
      <DescriptionWrapper>
        <Title>
          {title}
        </Title>

        <DescriptionInner>
          <DescriptionTextContainer>
            <DescriptioтText>Breed:</DescriptioтText>
            <DescriptioтText>DescriptioтTextlace:</DescriptioтText>
            <DescriptioтText>Birth date:</DescriptioтText>
          </DescriptionTextContainer>
          <DescriptionTextContainer>
            <DescriptioтText>Breed:</DescriptioтText>
            <DescriptioтText>DescriptioтTextlace:</DescriptioтText>
            <DescriptioтText>Birth date:</DescriptioтText>
          </DescriptionTextContainer>
        </DescriptionInner>

        <Button>Learn more</Button>
      </DescriptionWrapper>
    </Item>
  );
};

export default NoticesCategoryItem;