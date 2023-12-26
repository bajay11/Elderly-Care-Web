import React from 'react'
import './Register.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



function Register() {
  let [error,setError]=useState("");
  const navigate=useNavigate();
  let [selectedFile,setSelectedFile]=useState();
  // function handleChange(e){
  //     setSelectedFile(URL.createObjectURL(e.target.files[0]));
  // }

  let {register,handleSubmit,formState:{errors}}=useForm();

  const onFileSelect=(e)=>{
    
      setSelectedFile(e.target.files[0]);
  }



  // we have to send both user and his photo club them into an object and send 
 
  let submitForm=(userobj)=>{
    let fd=new FormData();
    // appending user
    fd.append("user",JSON.stringify(userobj))
    // appending the selected file
    
    fd.append("selectedFile",selectedFile)

     
    axios
    .post("http://localhost:8500/user-api/user-reg", fd)
    .then((res)=>{
     
      if(res.status === 201){
      
        navigate('/login')
      }
      if(res.status !== 201){
        setError(res.data.message)
      }
     
    })
    .catch((err)=>{
      if(err.res)
      setError(err.message);
      else if(err.req)
      setError(err.message);
      else
      setError(err.message);

    })
    
  }
  
  return (
    
    // <div  style={{ backgroundImage:
    //   'url("https://img.freepik.com/free-photo/grunge-gray-concrete-textured-background_53876-102595.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703030400&semt=ais")',backgroundRepeat:"no-repeat",width:"100vw",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className='m-5'>
        <h1 className="text-success mb-3 mt-5 m1 text-center">Form</h1>
        <h2 className='text-center text-info '>please fill the details and register</h2>
        {error.length !== 0 && (<p className='text-danger text-center lead'>{error} </p>)}
        <div className="row">
            <div className="col-11 col-sm-8 col-md-6 mx-auto">
                <form onSubmit={handleSubmit(submitForm)}>


                <input type="text"  placeholder="name" className="form-control mb-3"
                   {...register("Name",{required:true, minLength:"2", maxLength:"20"})}/>

                   {errors.Name?.type==="required" && <p className='text-danger'>* name is required</p>}

                    {errors.Name?.type==="minLength"&&<p className='text-danger'>* min length is 4</p>}
                    {errors.Name?.type==="maxLength"  &&<p className='text-danger'>* min length is 10</p>}



                  <input type="text"  placeholder="create username" className="form-control mb-3"
                   {...register("userName",{required:true, minLength:"2", maxLength:"20"})}/>

                   {errors.userName?.type==="required" && <p className='text-danger'>* username is required</p>}

                    {errors.userName?.type==="minLength"&&<p className='text-danger'>* min length is 4</p>}
                    {errors.userName?.type==="maxLength"  &&<p className='text-danger'>* min length is 10</p>}







                 


                  <input type="text" className="form-control mb-3" placeholder="email"
                   {...register("email" ,{required:true})}>
                  </input>
                  {errors.email?.type==="required" && <p className='text-danger'>* email is required</p>}
                  

                  <input type="password" className="form-control mb-3" placeholder="create a password"
                   {...register("password" ,{required:true})}>
                  </input>
                  {errors.password?.type==="required" && <p className='text-danger'>* password is mandatory</p>}
                  


                  <input type="date"  className="form-control mb-3"
                   {...register("dateOfBirth" ,{required:true})}/>
                   {errors.dateOfBirth?.type==="required" && <p className='text-danger'>* date is required</p>}
                  



                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="male"  value="male"
                    {...register("gender")}/>
                    
                    <label htmlFor="male" className="form-check-label">male</label>
                    
                  </div>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="female" value="female" {...register("gender")}>
                    </input>
                    <label htmlFor="female" className="form-check-label">female</label>
                    
                  </div>

                  <select {...register("state")} className="form-select mb-3" type="select" defaultValue={"default"}>
                    <option value="default" disabled>choose the state</option>
                    <option value={"telangana"}>Telangana</option>
                    <option value={"Andra pradesh"}>Andrapradesh</option>
                    <option value={"Delhi"}>Delhi</option>
                    <option value={"Karnataka"}>Karnataka</option>
                    <option value={"Tamil Nadu"}>Tami lNadu</option>
                    <option value={"Kerela"}>Kerela</option>
                    <option value={"Bengal"}>Bengal</option>
                    <option value={"Odisha"}>Odisha</option>
                  </select>

                  <input type="file" className="form-control mb-3" placeholder="Select a file"
                   {...register("image" ,{required:true})} onInput={onFileSelect} />
                 
                  {errors.image?.type==="required" && <p className='text-danger'>* imageURL is required</p>}
                  

                  {/* <textarea className="form-control mb-3" placeholder="feedback " {...register("feedback")}/> */}
        
                  <button className="btn btn-danger " type="submit">
                    register
                  </button>

                </form>

            </div>
            </div>

        </div>
    
  )
}

export default Register