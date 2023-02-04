// import { Box } from "components/Box";
import { useState, useEffect } from "react";
import friendsApi from '../../services/petly-api';
import  {OurFriends}  from '../../components/OurFriends/OurFriends';


export default function OurFriendsPage() {
  const [ourFriends, setOurFriends] = useState('');

    useEffect(() => {
        friendsApi.fetchFriends()
            .then(setOurFriends)
    }, []);

    return (
      <div >
        <h1>Our friends</h1>
        {ourFriends && <OurFriends items={ourFriends} />}
          
      </div>
        
    )
}
