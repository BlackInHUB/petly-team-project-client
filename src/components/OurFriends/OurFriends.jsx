import { ContainerItem, ContainerCard, Logo, TimeList, Title, ContainerText, ContainerAddr, ContainerLogo, AddrLink, Time, ContainerList } from './OurFriendsStyled';

export const OurFriends = ({ items }) => {
    return (
        <div>
            <ContainerList>
              {items && items.map(({ _id, title, url, addressUrl, imageUrl, address, workDays, phone, email }) =>
                <ContainerItem key={_id}>
                    <Title><a href={url}  rel="noreferrer" target="_blank">{title}</a></Title>
                    <ContainerCard>
                          
                        <ContainerLogo>
                              <Logo rel="noreferrer" href={url} target="_blank">
                                  <img src={`${imageUrl}`} alt="" />
                              </Logo>
                        </ContainerLogo>
                      
                        <ContainerText>                       
                            <Time>Time:</Time>  
                              <TimeList>
                                {workDays ? workDays.map(({ isOpen, from, to }, index) => isOpen && <li key={index}>{from} - {to}</li>) : "--------------------------------------"}
                            </TimeList>
                            
                            <ContainerAddr>
                                <p>Address: </p>
                                {address ? <AddrLink href={addressUrl}  rel="noreferrer" target="_blank" >{address}</AddrLink> : "--------------------------------------"}

                                <p>Email: </p>
                                {email ? <AddrLink href={`mailto:${email}`}  rel="noreferrer" target="_blank" >{email}</AddrLink> : "--------------------------------------"}

                                <p>Phone: </p>
                                {phone ? <AddrLink href={`tel:${phone}`}  rel="noreferrer" target="_blank" >{phone}</AddrLink> : "--------------------------------------"}
                            </ContainerAddr>
                        </ContainerText>
                    </ContainerCard>
                </ContainerItem>)}
            </ContainerList>
        </div>
    )
}

