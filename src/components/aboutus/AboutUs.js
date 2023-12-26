import React from 'react'
import './AboutUs.css'
import s1 from '../images/s1.jpeg'
import s2 from '../images/s2.jpeg'
import s3 from '../images/s3.jpeg'
import s4 from '../images/s4.jpeg'
import s5 from '../images/s5.jpeg'
import s6 from '../images/s6.jpeg'
import s7 from '../images/s7.jpeg'
import s8 from '../images/s8.jpeg';
function AboutUs() {
  return (
    <div>
      <h2 className='text-success text-center m-5'>Some of our contributions are......</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4 m-5">
  <div className="col">
    <div className="card">
      <img src={s1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Medication supply</h5>
        <p className="card-text">supplied the medicines to a large no of people in the country costs around 35 lakhs</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={s2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Food supply</h5>
        <p className="card-text">Food is the basic requirement to all the living entities.we supplied food to a large no of population costa around 25 lakhs</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={s3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Food supply</h5>
        <p className="card-text">Food is the basic requirement to all the living entities.we supplied food to a large no of population costa around 25 lakhs</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={s4} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Phyisical support</h5>
        <p className="card-text">Phyisically supporting the people . we distributed many equipments to overcome their mental disabilities</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={s5} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Phyisical support</h5>
        <p className="card-text">Phyisically supporting the people . we distributed many equipments to overcome their mental disabilities</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={s6} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Phyisical support</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={s7} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Tribal seva</h5>
        <p className="card-text">helpng the tribal people by serving them by suppling their requirement</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={s8} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Gas Stove Distribution</h5>
        <p className="card-text">Gas stoves are distributed to the required people</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AboutUs