import './App.css'
import React, { useEffect} from "react";
import Login from "./components/Login";

function App() {

    useEffect(() => {
        fetch("http://localhost:8080/api")
            .then(res => res.json())
            .then(data => console.log(data))
    });

    return (
        <div className={"App"}>
            Test
            <Login/>
        </div>
  );
}

export default App;
