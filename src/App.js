import './App.css'
import {Route} from "react-router-dom";
import Login from "./components/Login/Login";
import React from "react";
import Admin from "./components/Admin";

const App = () => {
    return <div className="App">
        <Route path="/login" render={() => <Login/>}/>
        <Route exact path="/admin" render={() => <Admin/>}/>
        <Route exact path="/" render={() => <Admin/>}/>
    </div>
}

export default App;
