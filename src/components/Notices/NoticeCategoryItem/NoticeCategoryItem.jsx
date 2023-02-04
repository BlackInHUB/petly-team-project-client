export const NoticeCategoryItem = ({notice}) => {
    const {category, photoUrl, title, location, price, birthday} = notice;
    console.log(notice.title);
    return (
        <li>
            <span>{category}</span>
            <img src={photoUrl} alt={title}/>
            <h3>{title}</h3>
            <span>Place:</span><span>{location}</span>
            <span>Age:</span><span>{birthday}</span>
            {price !== '' && <><span>Price:</span><span>{price}</span></>}
            <button type="button">Learn more</button>
        </li>
    )
}