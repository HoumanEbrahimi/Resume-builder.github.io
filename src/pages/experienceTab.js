import React from "react";
import './personal.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpTab = ({formData, setFormData}) =>{
  const [startDate, setStartDate] = useState(new Date());
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "1px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>

          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
      
    );
  }
  
    console.log(formData)
    return(

    <form className="row g-3">

      <div className="col-md-6">
      <label htmlfor="inputEmail4" className="form-label">Company</label>
      <input type="email" className="form-control" id="inputEmail4" value={formData.edu1_school} onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value });
            }}/>
    </div>
    <div className="col-md-6">
      <label htmlfor="inputPassword4" className="form-label centering">Job Title</label>
      <input type="password" className="form-control" style={{width:1000}} id="inputPassword4"/>
    </div>
    <div className="col-12">
      <label htmlfor="inputAddress" className="form-label">Location</label>
      <input type="text" className="form-control" style={{width:1000}} id="inputAddress" placeholder="1234 Main St"/>
    </div>

    <div className="col-md-6">
      <label htmlfor="inputCity" className="form-label">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div >
    <div  style={{display: 'flex', flexDirection: 'row'}}>
      <h2 style={{fontSize:20}}>&nbsp;&nbsp;&nbsp;From&nbsp;&nbsp;&nbsp;</h2>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
    />
    <h2 style={{fontSize:20}}>&nbsp;&nbsp;&nbsp;To&nbsp;&nbsp;&nbsp;</h2>
    
        <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
    />
    </div>
    &nbsp;&nbsp;&nbsp;

    </form>


    )
}

export default ExpTab;