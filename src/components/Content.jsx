import React from 'react'
import {Route} from "react-router-dom";
import AdminPage from "./AdminPage";

export default function Content() {
    return <div>
        <Route path = "/admin" render = {() => <AdminPage />}/>
    </div>
}
