import React from "react";
import './personal.css'
import './education.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useState, useEffect } from 'react';
import Experiences from './experienceTab'


const Experience = ({formData, setFormData},page) =>{
    let forms=[];
    const [count, setCount] = useState(2);

    const addComponent =()=>{

      console.log(count)
    }

  return (
  <div>
  <h1> Experience</h1>
  <br></br>

    <h2 > Job 1</h2>
  <Experiences formData={formData} setFormData={setFormData}/>
  <br></br>

    <br></br>


  <div className="flex-parent jc-center ">
    <button  className="button2" style={{width: 250}} onClick={addComponent}>Add Section </button>
  </div>
  &nbsp;&nbsp;&nbsp;

        </div>
  )

}
export default Experience;