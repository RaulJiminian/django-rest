import "./App.css";
import { useState, useEffect } from "react";
import { getLeads, deleteLeads } from "./services/leads";
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";
import React from "react";

const App = () => {
  const [leads, setLeads] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchLeads = async () => {
      const leads = await getLeads();
      setLeads(leads);
    };
    fetchLeads();
  }, [toggle]);


  const handleLeadDelete = async (id) => {
    await deleteLeads(id)
    setToggle(prev => !prev)
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Dashboard leads={leads} handleLeadDelete={handleLeadDelete} setToggle={setToggle}/>
      </div>
    </div>
  );
};

export default App;
