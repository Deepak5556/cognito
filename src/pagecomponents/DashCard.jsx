import React from "react";
import "../style/Dashboard.css";
import Button from "./Button";
import learn from "../assets/img/DashBoard/learn.svg";
import { UserData } from "../context/UserContext";

const DashCard = () => {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  const { user } = UserData();

  return (
    <div className="dash-card primary-bg rounded-24 ">
      <div className="card-content px-5">
        {" "}
        <div className="row">
          <div className="col-9">
            <h1 className="text-white fw-bold  mt-2 fs-50">
              Welcome Back {user.name}
              {/* Unlock More Courses */}
            </h1>
            {/* <h1 className="text-white fw-bold  mt-0 fs-30 mt-2">
              Unlock More Courses
            </h1> */}
            <p className="text-white fs-30">
              Just For Your Journey Now - Find, Learn, Grow!
            </p>
            <div className="button">
              <Button
                onClick={handleClick}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                  borderRadius: "6px",
                  padding: "10px 20px",
                  marginBottom: "10px",
                }}
              >
                Get Premium
              </Button>
            </div>
          </div>
          <div className="col-md-3 col-12 text-center">
            {" "}
            <img
              src={learn}
              alt="Learning Illustration"
              className="img-fluid"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashCard;
