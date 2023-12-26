import React from 'react'
import './Login.css'
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginContext } from '../../contexts/loginContext';
import { useEffect } from 'react';

function Login() {
  // console.log(useContext(loginContext));




  let [loggedInUser,loginError,loginStatus,loginUSer]=useContext(loginContext);
  let {register,handleSubmit,formState:{errors}}=useForm();
  // let [loginError,setLoginError]=useState("");
  const navigate=useNavigate();


  //this function exeutes when there is change in the state for ex when user logged in successfully login status
  // turn to true 
  useEffect(()=>{
    if(loginStatus===true)
    navigate("/user-profile");

  },[loginStatus])



  let submitForm=(userobj)=>{
    loginUSer(userobj);
  //    console.log(userobj)
   }
  
  return (
    <div className="container1 body">
        <h1 className="text-success mb-3 mt-5 m1 text-center">Login</h1>
        {loginError.length !==0 && (<p className='lead text-center text-danger'>{loginError}</p>)}
        <div className="row">
            <div className="col-11 col-sm-8 col-md-6 mx-auto">
                <form onSubmit={handleSubmit(submitForm)}>
                  <input type="text"  placeholder="userName" className="form-control mb-3"
                   {...register("userName",{required:true, minLength:"4", maxLength:"10"})}/>

                   {errors.userName?.type==="required" && <p className='text-danger'>* username is required</p>}

                    {errors.userName?.type==="minLength"&&<p className='text-danger'>* min length is 4</p>}
                    {errors.userName?.type==="maxLength"  &&<p className='text-danger'>* min length is 10</p>}


                    <input type="password" className="form-control mb-3" placeholder="password"
                   {...register("password" ,{required:true})}>
                  </input>
                  {errors.password?.type==="required" && <p className='text-danger'>* password is mandatory</p>}
                  





                  
        
                  <button className="btn btn-success " type="submit">
                    login
                  </button>

                </form>

            </div>

        </div>
        </div>
  )
}

export default Login;