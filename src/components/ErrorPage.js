import React from 'react'
import { useRouteError } from 'react-router-dom'


function ErrorPage() {
    let error=useRouteError();
  return (
    <div className='text-center taxt-danger'>
        <h2>Ooops Page Not found </h2>
        <h2 >check the url </h2>
        <p className='lead'>{error.statusText}</p>
    </div>
  )
}


export default ErrorPage