import React from 'react'
import { useContext } from 'react'
import { loginContext } from '../../contexts/loginContext'

import './UserProfile.css'
import axios from 'axios';
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { Modal, Button } from 'react-bootstrap';

import EnlargableImage from '../EnlargableImage';



function UserProfile() {

  // for form
  let { register, handleSubmit, formState: { errors } } = useForm();

  // for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // from login contex
  let [loggedInUser] = useContext(loginContext);


  const active = {
    color: "#BA4CFC",
    fontWeiht: "bold"

  }
  const inactive = {
    color: "#EF0278",
    fontWeiht: "light"
  }

  let [selectedFiles, setSelectedFiles] = useState();

  const onFileSelect = (e) => {

    setSelectedFiles(e.target.files[0]);
  }


  // code for authenticated req:
  // let submitForm = () => {
  //   let token = localStorage.getItem("token");

  //   axios
  //     .get("http://localhost:8500/user-api/test", { headers: { "Authorization": "Bearer" + token } })
  //     .then((res) => {
  //       setData(res.data.message);
  //       console.log(res.data.message);
  //     })
  //     .catch((err) => {
  //       setErr(err.message);
  //       console.log(err.message)
  //     })

  // }



  // code for health credentials
  // let submitform2=(healthdata)=>{
  //   axios
  //   .put("http://localhost:8500/user-api/user-change",healthdata)
  //   .then((res)=>{
  //     setHealth(res.data.message);
  //   })
  //   .catch((err)=>{
  //     setMyErr(err.message);
  //   })
  // }
  let [data, setData] = useState("");
  let [error, setError] = useState("");

  // code for file upload
  let submitform = () => {

    const formdata = new FormData();

    formdata.append("selectedFiles", selectedFiles);


    axios
      .put(`http://localhost:8500/user-api/user-upload/${loggedInUser.userName}`, formdata)
      .then((res) => {


        if (res.status === 201) {

          console.log("uploaded successfully", res.data.message);
          setData(res.data.message);
        } else {
          console.log("upload failed", res.data.message);
          setError(res.data.message);
        }

      })
      .catch((err) => {
        console.log("error occured while uploading please check it=>", err.message);
        setError(err.message);

      })

  }

  let [healthErr, setHealthErr] = useState("")
  let [healthDatas, setHealthDatas] = useState("");

  let submitform2 = (userObject) => {
    axios
      .put(`http://localhost:8500/user-api/user-healthUpdate/${loggedInUser.userName}`, userObject)
      .then((res) => {
        setHealthDatas(res.data.message);
      })
      .catch((err) => {
        setHealthErr(err.message);
      })

  }








  return (
    <div>
      <h2 className='display-2 text-center text-success mt-5'>Welcome {loggedInUser.userName}</h2>
      <img src={loggedInUser.image} alt='image not found' width="100px" className='loggedinuserImage' />
      <h2 className='dispaly-3 text-center text-secondary'>{loggedInUser.email}</h2>




      {/* <ul>
        {loggedInUser.healthData.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
      {/* the actual modal */}
      <Button variant="warning" className="mt-2 text-center modall" onClick={handleShow} >
        Show more
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{loggedInUser.userName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={loggedInUser.image} alt="" className="w-100" />
          <h2>DOB: {loggedInUser.dateOfBirth}</h2>
          <h2>{loggedInUser.gender}</h2>
          <h2>Address: {loggedInUser.state}</h2>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='m-5 text-lead '>

        <div className='m-5' >
          <h2 className='text-secondary'>recently uploaded documents:</h2>
          <EnlargableImage
            src={loggedInUser.uploads}
            alt="no documents uploaded" />
        </div>




        <div className='container m-5'>
          <h2 className='text-secondary '>Please upload the health document</h2>
          {error.length !== 0 && (<p className='text-danger text-center lead'>{error} </p>)}
          {data.length !== 0 && (<p className='text-danger text-center lead'>{data} </p>)}
          <form onSubmit={handleSubmit(submitform)}>
            <input type="file" className="form-control m-3" placeholder="select a file"
              {...register("doc", { required: true })} onInput={onFileSelect} />
            {errors.doc?.type === "required" && <p className='text-danger'>* doc is required</p>}
            <button className="btn btn-danger" type="submit">
              upload
            </button>
          </form>
        </div>


        <div className='m-5'>
          <h2 className=''>health parameters:</h2>
          <h2 className='text-secondary'>Blood pleasure : {JSON.stringify(loggedInUser.healthData.bp)}</h2>
          <h2 className='text-secondary'>Heart Beat : {JSON.stringify(loggedInUser.healthData.heartbeat)}</h2>
          <h2 className='text-secondary'>Body temperature : {JSON.stringify(loggedInUser.healthData.bodytemperature)}</h2>
          <h2 className='text-secondary'>Sugar levels(%) : {JSON.stringify(loggedInUser.healthData.sugarlevels)}</h2>
        </div>


        <div className='m-5'>
          <h2>medication prescription:</h2>
          <h2 className='text-secondary'>1)paracetomaol:{JSON.stringify(loggedInUser.medication.paracetomaol)}</h2>
          <h2 className='text-secondary'>2)Dolo-650:{JSON.stringify(loggedInUser.medication.dolo)}</h2>
          <h2 className='text-secondary'>3)vomit+:{JSON.stringify(loggedInUser.medication.vomit)}</h2>
        </div>
      </div>
      {/* form for taking the medical parameters */}

      {/* <form onSubmit={handleSubmit(submitform2)}>
        <h2>please enter the updated health parameters</h2>
        {/* {healthErr.length !== 0 && (<p className='text-danger text-center lead'>{healthErr} </p>)}
        {healthDatas.length !== 0 && (<p className='text-danger text-center lead'>{healthDatas} </p>)} */}


      {/* <input type="number" placeholder="bp" className="form-control mb-3"
          {...register("bp", { required: true })} />
        {errors.bp?.type === "required" && <p className='text-danger'>* bp is required</p>}

        <input type="number" placeholder="sugarLevels" className="form-control mb-3"
          {...register("sugarLevels", { required: true })} />
        {errors.sugarLevels?.type === "required" && <p className='text-danger'>* sugarLevels is required</p>}

        <input type="number" placeholder="heart beat" className="form-control mb-3"
          {...register("heartbeat", { required: true })} />
        {errors.heartbeat?.type === "required" && <p className='text-danger'>* heart beat is required</p>}

        <input type="date" placeholder="modified" className="form-control mb-3"
          {...register("date", { required: true })} />
        {errors.bp?.type === "required" && <p className='text-danger'>* date is required</p>}

        <button className="btn btn-danger " type="submit">
          update
        </button>
      </form>  */}







    </div>
  )
}

export default UserProfile

// nav bar code:
{/* <ul className='nav text-center'>
      <li className="nav-item">
          <NavLink className='nav-link' 
          to="products" 
          style={({isActive})=>{return isActive?active:inactive;}} >
          Product List</NavLink>
      </li>
          <li className="nav-item">
          <NavLink className='nav-link' 
          to="cart" 
          style={({isActive})=>{return isActive?active:inactive;}} >
          
            Cart List</NavLink>
          </li>
      </ul>
      <Outlet/> */}


// code for different modal

{/* <button className="btn btn-warning mt-5" data-bs-toggle="modal" data-bs-target=".content">Show more</button>
      <div className="modal fade content" >
        <div className="modal-dialog modal-dialog-centered modal-md" >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="display">{loggedInUser.name}</h3>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src={loggedInUser.image} alt="" className="w-100" />
              <h2 className=''>DOB:{loggedInUser.dateOfBirth}</h2>
              <h2>address:{loggedInUser.state}</h2>


            </div>


          </div>
        </div>
      </div> */}

{/* <button className="btn btn-warning mt-5" data-bs-toggle="modal" data-bs-target=".content">Show more</button>
      <div className="modal fade content" >
        <div className="modal-dialog modal-dialog-centered modal-md" >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="display">{loggedInUser.name}</h3>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src={loggedInUser.image} alt="" className="w-100" />
              <h2 className=''>DOB:{loggedInUser.dateOfBirth}</h2>
              <h2>address:{loggedInUser.state}</h2>


            </div>


          </div>
        </div>
      </div> */}


{/* <button className="btn btn-warning mt-5" data-bs-toggle="modal" data-bs-target=".content">Show more</button>

<div className="modal fade content">
  <div className="modal-dialog modal-dialog-centered modal-md">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="display">{loggedInUser.name}</h3>
        <button className="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div className="modal-body">
        <img src={loggedInUser.image} alt="" className="w-100" />
        <h2>DOB: {loggedInUser.dateOfBirth}</h2>
        <h2>Address: {loggedInUser.state}</h2>
      </div>
    </div>
  </div>
</div> */}


{/* <div className="modal" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
{/* <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div> */}

{/* <form onSubmit={handleSubmit(submitForm)}>

       <button className='btn btn-danger ' type="submit">
          getProtectedData
        </button>

      </form> */}
{/* 
      <form onSubmit={handleSubmit(submitform2)}>
        <h2>{loggedInUser.userName}'s health parameters</h2>
        <p>{health}</p>
        <p>{myerr}</p>
        <input type="number" placeholder="bp" className="form-control mb-3"
          {...register("bp", { required: true })} />
        {errors.bp?.type === "required" && <p className='text-danger'>* bp is required</p>}

        <input type="number" placeholder="sugarLevels" className="form-control mb-3"
          {...register("sugarLevels", { required: true })} />
        {errors.sugarLevels?.type === "required" && <p className='text-danger'>* sugarLevels is required</p>}

        <input type="number" placeholder="heart beat" className="form-control mb-3"
          {...register("heartbeat", { required: true })} />
        {errors.heartbeat?.type === "required" && <p className='text-danger'>* heart beat is required</p>}

        <input type="date" placeholder="modified" className="form-control mb-3"
          {...register("date", { required: true })} />
        {errors.bp?.type === "required" && <p className='text-danger'>* date is required</p>}

        <button className="btn btn-danger " type="submit">
          modify
        </button>
      </form> */}
