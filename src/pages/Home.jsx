import Main from "../components/Main";
import Header from "../components/Header";
import Footer from '../components/Footer';
import UserTable from "../components/UserTable";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInfoTable, setUserInfoTable] = useState([])

  const url = "https://randomuser.me/api/";
  const getUser = async () => {
    try {
      setLoading(true);
      const response = await axios(url);
      setUser(response?.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);


  return (
    <div className="home-container">
      <Header></Header>
      {loading ? (
        <h1 className="loading">Loading....</h1>
      ) : (
        <>
          <Main
            user={user}
            getUser={getUser}
            userInfoTable={userInfoTable}
            setUserInfoTable={setUserInfoTable}
          ></Main>
          <UserTable
            userInfoTable={userInfoTable}
            setUserInfoTable={setUserInfoTable}
          ></UserTable>
        </>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Home;
