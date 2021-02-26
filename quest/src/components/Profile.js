import React, { useState, useEffect } from 'react'


function Profile(){

    const [profileState, setProfileState] = useState({
        loading: false,
        qns: null,
      });
    
      useEffect(() => {
        setProfileState({ loading: true });
    
        const apiUrl = "https://devquestapi.herokuapp.com/api/v1/auth/profile";
    
        fetch(apiUrl)
          .then((res) => res.json())
          .then((qns) => {
            setProfileState({ loading: false, qns: qns });
          })
          .catch((er) => console.log(er));
      }, [setProfileState]);

    return (
        <div></div>
    )
}

export default Profile;