import { Route, Routes } from "react-router-dom";
import "./App.css";
import OnBoarding from "./Pages/OnBoarding";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Signin from "./Pages/Login/Signin";
import Verify from "./Pages/Login/Verify";
import Account from "./Pages/Account/Account";
import { UserData } from "./context/UserContext";
import Loading from "./Pages/Loading/Loading";

function App() {
  const { loading } = UserData();

  // When the app is loading, show a loading spinner or message
  if (loading) {
    return (
      <>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }} // Ensures full viewport height
        >
          <Loading />
        </div>
      </>
    );

    // You can replace this with a more sophisticated loader component
  }

  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/Home/*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signin />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
