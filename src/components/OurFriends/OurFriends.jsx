

export const OurFriends = ({ items }) => {
    console.log(items);
    return (
        <div>
            <ul>
              {items && items.map(({ _id, title, url, addressUrl, imageUrl, address, workDays, phone, email }) =>
                <li key={_id}>
                    <a href={url} target="_blanck"><img width="100" src={`${imageUrl}`} alt="" /></a>
                    <h2>{title}</h2>
                    <p>Time:</p>  
                    <ul>
                        {workDays ? workDays.map(({ isOpen, from, to }) => from && <li>{from} - {to}</li>) : "-----------------------------------"}
                    </ul>
                      
                  <address>
                    <p>Address: </p>
                    {address ? <p><a href={addressUrl} target="_blanck" >{address}</a></p> : "-----------------------------------"}

                    <p>Email: </p>
                    {email ? <p><a href={email} target="_blanck" >{email}</a></p> : "-----------------------------------"}

                    <p>Phone: </p>
                    {phone ? <p><a href={phone} target="_blanck" >{phone}</a></p> : "-----------------------------------"}
                  </address>
                </li>)}
            </ul>
        </div>
    )
}

