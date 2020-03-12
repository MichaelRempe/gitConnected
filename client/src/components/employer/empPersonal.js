import React, { useEffect, useState } from "react";

import { Link, Route } from "react-router-dom"
import EmpCreateAccount from "../pages/EmpCreateAccount"
import API from "../../utils/API";
function EmpPersonal(props) {
    const [userState, setUserState]=useState({
       companyName: "",
       email: "",
       phone: "",
       location: "",
       about: ""
    })
    // useEffect(()=>{
    //     loadCompany()
    // })

    // function loadCompany(){
    //     // API.getEmployer(id)
    //     .then(data=>{
    //         setUserState(data.data)
    //     }).catch(err=> console.log (err))
    // }
    return (
        <div className="card" style={{ height: "100%", width: "100%", margin: "5%", position: "relative" }}>
            <div className="card-body">
                <div className="card-headers">
                    <h2>{userState.companyName}</h2>
                </div>
                <p>{userState.about}</p>
                <h3>Contact Us</h3>
                <ul>
                    <li>{userState.location}
                    </li>
                    <li>{userState.phone}</li>
                    <li>{userState.email}</li>
                </ul>
                <br />
               
            </div>
            <div className="card" style={{ position: "relative", bottom: "5px" }}>


                <Link to="/emp-create-account" role="button" className="btn btn-secondary btn-block" style={{       position: "absolute", bottom: "5px" }}>
                    Update Profile
                    </Link>
                <Route exact path="/emp-create-account" component={EmpCreateAccount} />
                <br />
                <button type="button" class="btn btn-secondary btn-block" style={{ marginTop: "0", position: "absolute", bottom: "50px" }}>View Posted Jobs</button>
            </div>
            {/* <button type="button" class="btn btn-primary" style={{position: "absolute", bottom: "5px"}}>Update Profile</button> */}
        </div>

    )
}
export default EmpPersonal;