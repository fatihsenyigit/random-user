import React, { useState, useEffect } from "react";
import logo1 from "../assets/man.svg";
import logo2 from "../assets/mail.svg";
import logo3 from "../assets/growing-up-man.svg";
import logo4 from "../assets/map.svg";
import logo5 from "../assets/phone.svg";
import logo6 from "../assets/padlock.svg";
import logo7 from "../assets/woman.svg";
import logo8 from "../assets/growing-up-woman.svg";
import "../sass/main.scss";

const Main = ({ user, getUser, userInfoTable, setUserInfoTable }) => {
  const [info, setInfo] = useState("");
  const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    personName();
  }, [user]);

  const addUser = () => {
    const userObject = {
      userName: `${user[0].name.first} ${user[0].name.last}`,
      userMail: `${user[0].email}`,
      userPhone: `${user[0].phone}`,
      userAge: `${user[0].dob.age}`,
    };

    setNewArray([...newArray, user[0].phone]);
    console.log(newArray);
    if (!newArray.includes(user[0].phone)) {
      setUserInfoTable([...userInfoTable, userObject]);
    } else {
      alert("this user already is added");
    }
  };

  const personName = () => {
    const names = Object.values(user[0]?.name);
    const fullName = names.join(" ");
    setInfo(
      <div style={{ textAlign: "center" }}>
        My name is: <br />
        <h1>{fullName}</h1>
      </div>,
    );
  };
  const personEmail = () => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My email is: <br />
        <h1>{user[0]?.email}</h1>
      </div>,
    );
  };
  const personAge = () => {
    const age = Object.values(user[0]?.dob);
    setInfo(
      <div style={{ textAlign: "center" }}>
        My age is: <br />
        <h1>{age[1]}</h1>
      </div>,
    );
  };
  const personStreet = () => {
    const street = Object.values(user[0]?.location.street);
    setInfo(
      <div style={{ textAlign: "center" }}>
        My street is: <br />
        <h1>{street}</h1>
      </div>,
    );
  };
  const personPhone = () => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My phone is: <br />
        <h1>{user[0]?.phone}</h1>
      </div>,
    );
  };
  const personPassword = () => {
    const password = Object.values(user[0].login)[2];
    setInfo(
      <h4 style={{ textAlign: "center" }}>
        My password is: <br />
        <h1>{password}</h1>
      </h4>,
    );
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-user">
          <img src={user[0]?.picture.large} alt="" width={"125px"} />
        </div>
        <div className="main-info">
          <h4>{info}</h4>
        </div>
        <div className="main-logos">
          <img
            width={"60px"}
            onMouseOver={() => personName()}
            src={user[0]?.gender === "male" ? logo1 : logo7}
            alt="logo"
          />
          <img
            width={"60px"}
            onMouseOver={() => personEmail()}
            src={logo2}
            alt="logo"
          />
          <img
            width={"60px"}
            onMouseOver={() => personAge()}
            src={user[0]?.gender === "male" ? logo3 : logo8}
            alt="logo"
          />
          <img
            width={"60px"}
            onMouseOver={() => personStreet()}
            src={logo4}
            alt="logo"
          />
          <img
            width={"60px"}
            onMouseOver={() => personPhone()}
            src={logo5}
            alt="logo"
          />
          <img
            width={"60px"}
            onMouseOver={() => personPassword()}
            src={logo6}
            alt="logo"
          />
        </div>
        <div className="main-buttons">
          <button onClick={getUser}>NEW USER</button>
          <button onClick={addUser}>ADD USER</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
