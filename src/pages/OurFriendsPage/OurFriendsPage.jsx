// import { Box } from "components/Box";
import { useState, useEffect } from "react";
import friendsApi from '../../services/friends';
import  {OurFriends}  from '../../components/OurFriends/OurFriends';
import { Title } from "components/baseComponents/Title/Title";
import PaddingWrapper from "components/baseComponents/PaddingWrapper/PaddingWrapper";


export default function OurFriendsPage() {
  const [ourFriends, setOurFriends] = useState('');

    useEffect(() => {
        friendsApi.fetchFriends()
            .then(setOurFriends)
    }, []);

    return (
      <PaddingWrapper >
        <Title value={'Our friends'} />
        {ourFriends ? <OurFriends items={ourFriends} /> : <Title>{"No friends added yet :("}</Title> }
          
      </PaddingWrapper>
        
    )
}
