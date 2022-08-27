import React from 'react'
import { useState } from 'react';


type UserData = {
  name: string;
  email: string;
}


const StatefulComponent = () => {

  const [data, setData] = useState({} as UserData);

  const logIn = () => setData({name: 'username', email: 'useremail'});
  const logOut = () => setData({name: '', email: ''});

  return (
    <div className="component">
      <button onClick={logIn}>{'Log In'}</button>
      <button onClick={logOut}>{'Log Out'}</button>
      <p>User information - Name: {data.name}, email: {data.email} </p>
    </div>
  )
}

export default StatefulComponent