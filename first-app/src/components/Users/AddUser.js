import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ReactDOM from "react-dom";
//SWEETALERT:
const Swal = require("sweetalert2");

const PortalTest = (props) => {
  return <div className="portalowiec">PORTAL TEST</div>;
};

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  // const [addingState, setAddingState] = useState(false);

  const changeAgeHandler = (event) => {
    setUserAge(event.target.value);
    // tutaj na biezaco sie zmienia w trakcie wpisywania
  };

  const changeNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // zapobiega refreshowi strony
    console.log("actual states" + userAge + userName);

    //HELPER DO CASE'A!
    let age = false;
    if (userAge > 0) {
      age = true;
      console.log("wiek dobry");
    }
    let name = false;
    if (userName.length > 0) {
      // dodaj .trim() (usuwa blank spaces)
      name = true;
      console.log("dobry name");
    }
    // tego switcha case'a mozna przeniesc do componenta z warningami (clean code)
    switch (true) {
      case age === false && name === false:
        Swal.fire({
          title: "Error!",
          text: "Zly wiek i zly name",
          icon: "error",
          confirmButtonText: "Cool",
        });
        // console.log("zly wiek i pusty name");
        break;
      case age === false && name === true:
        // console.log("zly wiek");
        Swal.fire({
          title: "Error!",
          text: "Zly wiek",
          icon: "error",
          confirmButtonText: "Cool",
        });

        break;
      case age === true && name === false:
        // console.log("zly name");
        Swal.fire({
          title: "Error!",
          text: "Zly name",
          icon: "error",
          confirmButtonText: "Cool",
        });
        break;
      default: // dodajemy do listy userow
        // useless narazie
        // console.log("Wszystko git!");
        props.onAddUser(userName, userAge);
        setUserAge("");
        setUserName("");

        Swal.fire({
          title: "Dodano!",
          confirmButtonText: "Cool",
        });
    }
  };
  return (
    <React.Fragment>
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input
            value={userName}
            type="text"
            onChange={changeNameHandler}
          ></input>
          <label>Age</label>
          <input
            value={userAge}
            type="number"
            onChange={changeAgeHandler}
          ></input>
          <Button type="submit" />
          {/* PRZYKLAD PORTALA  */}
          {ReactDOM.createPortal(
            <PortalTest />,
            document.getElementById("portal-test-root")
          )}
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
