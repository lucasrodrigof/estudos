import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alignPropType } from "react-bootstrap/esm/types";
import "./LoginForm.css";
import api from "../../services/api";

export default function (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const logar = async (e) => {
    let body = {
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log(parseRes);
    } catch (error) {
      console.log(error)
    }
    // api
    //   .post("/login", dados)
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("token", res.data.token);
    //     window.location.href = "/";
    //   })
    //   .catch((e) => {
    //     console.log(e.response.data);
    //     alert(e.response.message);
    //   });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => logar()}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
