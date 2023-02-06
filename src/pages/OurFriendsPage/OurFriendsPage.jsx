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
        <Title>Our friends</Title>
        {ourFriends ? <OurFriends items={ourFriends} /> : "No friends added yet :(" }
          
      </div>
        
    )
}
