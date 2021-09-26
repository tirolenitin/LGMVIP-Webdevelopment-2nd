import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [isDataFetch, setisDataFetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);

  const loadUsers = async () => {
    setisBtnClick(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const res = await response.json();
    setUsers(res.data);
    setInterval(() => {
      setisDataFetch(true);
    }, 1000);
  };
  return (
    <>
      <navbar className="navbar">
          <a className="title" href="public/index.html">
            {" "}
            TCS{" "}
          </a>
          <div className="nav-list">
          {" "}
          <button onClick={loadUsers} class="btn">
            {" "}
            Get Users{" "}
          </button>{" "}
        </div>{" "}
      </navbar>
      {isBtnClick ? (
        isDataFetch ? (
          <div className="box">
            {users.map(({ id, first_name, last_name, avatar, email }) => {
              return (
                <>
                  <div className="card" key={id}>
                    <img src={avatar} alt="" className="avatar" />
                    <div className="card-description">
                      <h2>
                        {" "}
                        {first_name} {last_name}{" "}
                      </h2>{" "}
                      <p> {email} </p>{" "}
                      <a className="btn-contact" href={"mailto:" + email}></a>{" "}
                    </div>{" "}
                  </div>
                </>
              );
            })}{" "}
          </div>
        ) : (
          <div className="loader"> </div>
        )
      ) : (
        <section className="home">
          <div className="content">
            <h3> TCS <br /> Building on Belief </h3> <p> Click on get users button to fetch users </p>{" "}
          </div>{" "}
        </section>
      )}
    </>
  );
};
export default App;
