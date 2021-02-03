import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../common/input";
import { getUsers, saveUser } from "../../services/userService";
import "./SignUp.css";

function SignUp(props) {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function getAllUsers() {
  //     const result = await getUsers();
  //     setUsers(result.data);
  //   }
  //   getAllUsers();
  // });

  //----------------------------------------------------------//
  useEffect(() => {
    const source = axios.CancelToken.source();

    const getAllUsers = async () => {
      try {
        const result = await axios.get("http://localhost:5000/api/users", {
          cancelToken: source.token,
        });
        setUsers(result.data);
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          throw error;
        }
      }
    };

    getAllUsers();

    return () => {
      source.cancel();
    };
  });

  //----------------------------------------------------------//

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await saveUser(account);

    props.history.push("/");

    console.log("Submited");
  };

  return (
    <div>
      <div className="sign-up">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="from-area">
            <div className="username-area">
              <Input
                type="text"
                name="username"
                value={account.username}
                onChange={handleChange}
              />
            </div>
            <div className="password-area">
              <Input
                type="password"
                name="password"
                value={account.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn--primary">SignUp</button>
          </div>
        </form>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default SignUp;
