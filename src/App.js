import {useState} from 'react';
import UserInput from "./userinputcard";
import UsersList from './userlist';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [userIndex, setUserIndex] = useState();

  function onSubmit(newUser){
    setUsersData([...usersData, newUser])
  };

  function editUser(correctedUserData){
    usersData[userIndex] = correctedUserData;
    setUsersData([...usersData]);
    setUserIndex(undefined);
  };


  return (
    <div>
      {
        userIndex == undefined ? <UserInput key='1' onSubmit={onSubmit}/> : <UserInput onSubmit={editUser} defaultUser={usersData[userIndex]} buttonText='Update' />
      }

      <br />
      <UsersList usersData={usersData} setUsersData={setUsersData} setUserIndex={setUserIndex}/>
    </div>
    
  );
}

export default App;
