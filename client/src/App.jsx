import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getLeads, deleteLeads } from "./services/leads";
import { logOut, verifyUser } from "./services/users";
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";
import Login from "./components/login/Login";

const App = () => {
  const [leads, setLeads] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchLeads = async () => {
      const leads = await getLeads();
      setLeads(leads);
    };
    fetchLeads();
  }, [toggle, loggedIn]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await verifyUser();
      res ? setLoggedIn(true) : setLoggedIn(false);
    };
    fetchUser();
  }, []);

  const handleLeadDelete = async (id) => {
    await deleteLeads(id);
    setToggle((prev) => !prev);
  };

  const handleLogout = async () => {
    await logOut()
    setLoggedIn(false)
    navigate('/')
  }

  return (
    <div className="App">
      <Header handleLogout={handleLogout}/>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                leads={leads}
                handleLeadDelete={handleLeadDelete}
                setToggle={setToggle}
              />
            }
          />
          <Route path="/login/" element={<Login setLoggedIn={setLoggedIn} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
