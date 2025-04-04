// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home"
import AllTasks from "./pages/AllTasks";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import Navbar1 from "./components/Navbar"
import Error404 from "./pages/Error404";
import { AuthProvider } from "./context/AuthContext";

function App() {
  

  return (
    <>
      <Router>
        <AuthProvider>

          <Navbar1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<AllTasks />} />
            <Route path="/new" element={<NewTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </AuthProvider>
       
      </Router>
    </>
  );
}

export default App;
