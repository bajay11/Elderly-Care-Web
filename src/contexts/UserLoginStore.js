import {  useState } from "react";

import axios from 'axios';
import { loginContext } from "./loginContext";
function UserLoginStore({children}){
    // maintains the data  of the logged in user
    let [loggedInUser, setLoggedInUser]=useState({});

    //maintains the data of erros
    let [loginError,setLoginError]=useState("");

    //maintains the data of login status
    let [loginStatus,setLoginStatus]=useState(false);

    const loginUSer=(userCredentialsObj)=>{
        axios
        .post("http://localhost:8500/user-api/user-login",userCredentialsObj)
        .then((res)=>{
            // console.log(res);
            if(res.data.message==="success"){
            console.log("navigated successfully");
            setLoggedInUser({...res.data.user});
            setLoginStatus(true);
            setLoginError("");

            // is used  to store the data in the local storage
            localStorage.setItem("token",res.data.token);
            }
        else{
            // console.log("the user failed to login",err)
            setLoginError(res.data.message);
        }

        })
        .catch((err)=>{
            
            console.log("the user issues",err)
            setLoginError(err.message);
            
        })

    }

    const logout=()=>{
        localStorage.clear();
        setLoginStatus(false);
    }
    return(
        <loginContext.Provider value={[loggedInUser,loginError,loginStatus,loginUSer,logout]}>
            {children}
        </loginContext.Provider>
    )

}
export default UserLoginStore;