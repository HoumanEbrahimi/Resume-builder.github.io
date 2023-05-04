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

      if (count==2){
        setFormData({...formData,"exp_org2": "","exp_pos2": "","exp_des2": "","exp_dur2": ""}) 

      }
      else if (count==3){
        setFormData({...formData,"exp_org3": "","exp_pos3": "","exp_des3": "","exp_dur3": ""}) 

      }
      else if (count==4){
        setFormData({...formData,"exp_org4": "","exp_pos4": "","exp_des4": "","exp_dur4": ""}) 
      }

      if(count<=4){
        setCount(count+1)

      }


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

        </div>
  )

}
export default Experience;