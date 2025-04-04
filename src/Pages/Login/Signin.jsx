import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Signin = () => {
  const navigate = useNavigate();
  const { btnLoading, registerUser } = UserData(); // Fixed typo here
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate); // Fixed typo here
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light px-3">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-3">Sign In</h2>
        <form onSubmit={SubmitHandler}>
          {/* name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              required
            />
          </div>
          {/* email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
            />
          </div>
          {/* password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
            />
          </div>
          {/* button */}
          <button
            type="submit"
            disabled={btnLoading}
            className="btn primary-btn w-100"
          >
            {btnLoading ? "Please Wait" : "Sign In"}
          </button>
        </form>
        <p className="text-center mt-3">
          Don't Have an Account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
