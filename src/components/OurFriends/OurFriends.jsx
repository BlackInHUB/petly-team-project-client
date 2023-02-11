
import { ContainerItem, ContainerCard, Logo, Title, ContainerText, ContainerAddr, ContainerLogo, AddrLink, ContainerList } from './OurFriendsStyled';
import { TimeContainer } from './TimeContainer';

export const OurFriends = ({ items }) => {
    return (
        <div>
            <ContainerList>
              {items && items.map(({ _id, title, url, addressUrl, imageUrl, address, workDays, phone, email }) =>
                <ContainerItem key={_id}>
                    <Title href={url}  rel="noreferrer" target="_blank"><a href={url}  rel="noreferrer" target="_blank">{title}</a></Title>
                    <ContainerCard>
                          
                        <ContainerLogo>
                              <Logo rel="noreferrer" href={url} target="_blank">
                                  <img src={`${imageUrl}`} alt="" />
                              </Logo>
                        </ContainerLogo>
                      
                          <ContainerText>
                              
                            <TimeContainer work={workDays} />
                              
                            <ContainerAddr>
                                <p>Address: </p>
                                {address ? <AddrLink href={addressUrl}  rel="noreferrer" target="_blank" >{address}</AddrLink> : <AddrLink>{"We don't know, yet"}</AddrLink>}

                                <p>Email: </p>
                                {email ? <AddrLink href={`mailto:${email}`}  rel="noreferrer" target="_blank" >{email}</AddrLink> : <AddrLink>{"We don't know, yet"}</AddrLink>}

                                <p>Phone: </p>
                                {phone ? <AddrLink href={`tel:${phone}`}  rel="noreferrer" target="_blank" >{phone}</AddrLink> : <AddrLink>{"We don't know, yet"}</AddrLink>}
                            </ContainerAddr>
                        </ContainerText>
                    </ContainerCard>
                </ContainerItem>)}
            </ContainerList>
        </div>
    )
}

