import React from "react";
import './personal.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";


const ExpTab = () =>{
  const [startDate, setStartDate] = useState(new Date());
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>

          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

    return(

        <form className="row g-3">

      <div className="col-md-6">
      <label htmlfor="inputEmail4" className="form-label">Company</label>
      <input type="email" className="form-control" id="inputEmail4"/>
    </div>
    <div className="col-md-6">
      <label htmlfor="inputPassword4" className="form-label">Job Title</label>
      <input type="password" className="form-control" id="inputPassword4"/>
    </div>
    <div className="col-12">
      <label htmlfor="inputAddress" className="form-label">Location</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>

    <div className="col-md-6">
      <label htmlfor="inputCity" className="form-label">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div >
    <div  style={{display: 'flex', flexDirection: 'row'}}>
      <h3> From </h3>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
    />
    <h3> To </h3>
        <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
    />
    </div>
    


    </form>


    )
}

export default ExpTab;