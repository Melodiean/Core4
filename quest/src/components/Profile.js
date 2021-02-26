import React, { useState, useEffect } from 'react'


function Profile(){

    const [profileState, setProfileState] = useState({
        isLogged: false,
        userI: null,
      });
    
      useEffect(() => {
        setProfileState({ isLogged: true });
    
        const apiUrl = "https://devquestapi.herokuapp.com/api/v1/auth/profile";
    
        fetch(apiUrl)
          .then((res) => res.json())
          .then((doc) => {
            setProfileState({ isLogged: false, userI: doc });
          })
          .catch((er) => console.log(er));
      }, [setProfileState]);

    return (
        <div isLogged={profileState.loading} userI={profileState.userI}></div>
    )
}

export default Profile;