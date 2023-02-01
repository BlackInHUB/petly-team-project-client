

export const OurFriends = ({ items }) => {
    console.log(items);
    return (
        <div>
            <ul>
              {items && items.map(({ _id, title, url, addressUrl, imageUrl, address, workDays, phone, email }) =>
                <li key={_id}>
                    <a rel="noreferrer" href={url} target="_blank"><img width="100" src={`${imageUrl}`} alt="" /></a>
                    <h2>{title}</h2>
                    <p>Time:</p>  
                    <ul>
                        {workDays ? workDays.map(({ isOpen, from, to }, index) => from && <li key={index}>{from} - {to}</li>) : "-----------------------------------"}
                    </ul>
                      
                  <address>
                    <p>Address: </p>
                    {address ? <p><a href={addressUrl}  rel="noreferrer" target="_blank" >{address}</a></p> : "-----------------------------------"}

                    <p>Email: </p>
                    {email ? <p><a href={`mailto:${email}`}  rel="noreferrer" target="_blank" >{email}</a></p> : "-----------------------------------"}

                    <p>Phone: </p>
                    {phone ? <p><a href={`tel:${phone}`}  rel="noreferrer" target="_blank" >{phone}</a></p> : "-----------------------------------"}
                  </address>
                </li>)}
            </ul>
        </div>
    )
}

