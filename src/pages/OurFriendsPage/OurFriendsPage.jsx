// import { Box } from "components/Box";
import { useState, useEffect } from "react";
import friendsApi from '../../services/petly-api';
import  {OurFriends}  from '../../components/OurFriends/OurFriends';
import { Title } from "components/baseComponents/Title/Title";


export default function OurFriendsPage() {
  const [ourFriends, setOurFriends] = useState('');

    useEffect(() => {
        friendsApi.fetchFriends()
            .then(setOurFriends)
    }, []);

    return (
      <div >
        <Title value={'Our friends'} />
        {ourFriends ? <OurFriends items={ourFriends} /> : <Title>{"No friends added yet :("}</Title> }
          
      </div>
        
    )
}
