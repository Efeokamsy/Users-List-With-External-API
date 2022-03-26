import axios from "axios";
import React, {useEffect, useState} from "react";
 const UserList = () => {
     const baseUrl = 'https://api.github.com/users/deekshasharma'

    const[listofuser, setlistofuser] = useState([])

  useEffect(()=>{
      axios.get(baseUrl)
      .then((response) => {
        setlistofuser(response.data)
      })
  }, [])
  if (!listofuser) return null
     return(
      <div className='row'>
      {listofuser.map((userData, key) =>
        <div user={user} key={key}>
          <h3>{userData.id}</h3>
          <h3>{userData.type}</h3>
          <h3>{userData.name}</h3>
          <h3>{userData.age}</h3>
          <h3>{userData.bio}</h3>
          <h3>{userData.login}</h3>
          <h3>{userData.age}</h3>
          <h3>{userData.following}</h3> 
        </div>
      )}
     </div>
     )
 }; export default UserList
