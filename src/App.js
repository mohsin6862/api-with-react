import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <LoadUser></LoadUser>
     
    </div>
  );
}
const LoadUser = () =>{

  const [users,setUser]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUser(data))
  },[])


  return(
    <div>
      <h1>User:</h1>
      {
        users.map(user => <User name={user.name} username={user.username} email={user.email} company={user.company.name} phone={user.phone}></User>)
      }
    </div>
  )

}

function User (props){
  return(
    <div className='user'>
      <h2>Name: {props.name}</h2>
      <h4>Username: {props.username}</h4>
      <h4>Email: {props.email}</h4>
      <h3>Company Name: {props.company}</h3>
      <h4>Phone: {props.phone}</h4>
    </div>
  )
}
export default App;
