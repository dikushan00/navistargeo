import React from 'react'
import {Route} from "react-router-dom";
import Login from "./Login/Login";

export default function routes() {
    return <div>
        <Route path = "/login" render = {() => <Login />}/>
    </div>
}
