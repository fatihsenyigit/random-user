import React, { useState, useEffect } from "react";
import logo1 from "../assets/man.svg";
import logo2 from "../assets/mail.svg";
import logo3 from "../assets/growing-up-man.svg";
import logo4 from "../assets/map.svg";
import logo5 from "../assets/phone.svg";
import logo6 from "../assets/padlock.svg";
import logo7 from '../assets/woman.svg'
import logo8 from '../assets/growing-up-woman.svg'
import "../sass/main.scss";
import axios from "axios";

const Main = () => {
  const [user, setUser] = useState([]);
  const [info, setInfo] = useState("");
  const url = "https://randomuser.me/api/";

  const getUser = async () => {
    try {
      const response = await axios(url);
      console.log(response.data.results);
      setUser(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);

  useEffect(() => {
    getUser();
  }, []);

  const personName = (e) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My name is: <br />
        <h1>{e}</h1>
      </div>,
    );
  };
  const personEmail = (e) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My email is: <br />
        <h1>{e}</h1>
      </div>,
    );
  };
  const personAge = (e) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My age is: <br />
        <h1>{e}</h1>
      </div>,
    );
  };
  const personStreet = (e) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My street is: <br />
        <h1>{e}</h1>
      </div>,
    );
  };
  const personPhone = (e) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My phone is: <br />
        <h1>{e}</h1>
      </div>,
    );
  };
  const personPassword = (e) => {
    setInfo(
      <h4 style={{ textAlign: "center" }}>
        My password is: <br />
        <h1>{e}</h1>
      </h4>,
    );
  };
 
  return (
    <div className="main">
      {user.map((person) => (
        <div className="main-container">
          <div className="main-user">
            <img src={person.picture.large} alt="" width={"125px"} />
          </div>
          <div className="main-info">
            <h4>{info}</h4>
          </div>
          <div className="main-logos">
            <img
              width={"60px"}
              onMouseOver={() => personName(person.name.first)}
              src={person.gender === "male" ? logo1 : logo7}
              alt="logo"
            />
            <img
              width={"60px"}
              onMouseOver={() => personEmail(person.email)}
              src={logo2}
              alt="logo"
            />
            <img
              width={"60px"}
              onMouseOver={() => personAge(person.dob.age)}
              src={person.gender === "male" ? logo3 : logo8}
              alt="logo"
            />
            <img
              width={"60px"}
              onMouseOver={() => personStreet(person.location.street.name)}
              src={logo4}
              alt="logo"
            />
            <img
              width={"60px"}
              onMouseOver={() => personPhone(person.phone)}
              src={logo5}
              alt="logo"
            />
            <img
              width={"60px"}
              onMouseOver={() => personPassword(person.login.password)}
              src={logo6}
              alt="logo"
            />
          </div>
          <div className="main-buttons">
            <button onClick={getUser}>NEW USER</button>
            <button>ADD USER</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
