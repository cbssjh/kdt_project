import './App.css'
import React, { useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {

    useEffect(() => {
        fetch("http://localhost:8080/api")
            .then(res => res.json())
            .then(data => console.log(data))
    });

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </Router>
        //<div className={"App"}>
        //    Test
        //    <Login/>
        //</div>
  );
}

export default App;
