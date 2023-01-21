import React from "react";
import './personal.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useState, useEffect } from 'react';
import Experiences from './experienceTab'


const Experience = () =>{
    let forms=[];

    const clicker = () =>{
      forms.push(<Experiences/>);
    }
  return (
  <div className="centering">
  <h1> Experience</h1>
  <br></br>

    <h2 > Job 1</h2>
  <Experiences/>
  <br></br>

    <br></br>
  <h2 > Job 2</h2>


  <div className="col-12">
    <button type="submit" className="btn btn-primary" onClick={clicker}>Add Section </button>

  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
        </div>
  )

}
export default Experience;