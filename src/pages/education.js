import React from "react";
import './personal.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";

const Education = ({formData,setFormData}) =>{
    return (
        
        <form className="row g-3">
            <h1 className="centering"> Education </h1>    
        <div className="col-md-6">
        <label htmlfor="inputEmail4" className="form-label">Institution</label>
        <input type="email" className="form-control" id="inputEmail4"/>
      </div>
      <div class="col-md-4">
    <label for="inputState" class="form-label">Degree</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
        <option>Bachelor's</option>
        <option>Masters</option>
        <option>High School Diploma</option>
        <option>Nova Scotia</option>
        <option></option>
    </select>
  </div>
      <div className="col-12">
        <label htmlfor="inputAddress" className="form-label">Major</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
      </div>
  
      <div className="col-md-6">
        <label htmlfor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity"/>
      </div >

      
  
  
      </form>
          

    );
  

}

export default Education;
