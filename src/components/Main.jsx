import React, { useEffect, useState } from "react";
import logo1 from "../assets/man.svg";
import logo2 from "../assets/mail.svg";
import logo3 from "../assets/growing-up-man.svg";
import logo4 from "../assets/map.svg";
import logo5 from "../assets/phone.svg";
import logo6 from "../assets/padlock.svg";
import "../sass/main.scss";
import axios from 'axios'

const Main = () => {
  const url = "https://randomuser.me/api/";
  const [user, setUser] = useState([])

  const getUser = async () => {
    try {
      const response = await axios (url) 
      console.log(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  
  }, [])
  

  return (
    <div>
      {user.map((person) => (
        <div className="main">
          <div className="main-user">
            <img src={person.picture} alt="" width={"70px"} />
          </div>
          <div className="main-info">
            <p>
              My name is <br /> Lorem, ipsum dolor.
            </p>
          </div>
          <div className="main-logos">
            <img width={"30px"} src={logo1} alt="" />
            <img width={"30px"} src={logo2} alt="" />
            <img width={"30px"} src={logo3} alt="" />
            <img width={"30px"} src={logo4} alt="" />
            <img width={"30px"} src={logo5} alt="" />
            <img width={"30px"} src={logo6} alt="" />
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
