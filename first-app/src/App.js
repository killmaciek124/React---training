import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
// import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [userList, setUserList] = useState([]);
  const [addingState, setAddingState] = useState(false); // state ..
  // ... ktory zapobiega wyswietlaniu pustej listy przed dodaniem elementu
  const addUserHandler = (uName, uAge) => {
    setAddingState(true);
    setUserList((prevUsersList) => {
      // tutaj mamy dostep do ostatnich/niego elementow z listy

      return [{ name: uName, age: uAge, id: Math.random() }, ...prevUsersList];
    });
  };
  return (
    <React.Fragment>
      <AddUser
        users={userList}
        onAddUser={addUserHandler}
        onAddingState={setAddingState}
      />
      {addingState === true && <UsersList users={userList}></UsersList>}
    </React.Fragment>
  );
}

export default App;
