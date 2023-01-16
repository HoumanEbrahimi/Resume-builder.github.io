import React from "react";
import './personal.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useState, useEffect } from 'react';

const expTab = () =>{

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
    <div className="col-12">
      <label htmlfor="inputAddress2" className="form-label">Address 2</label>
      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
    </div>
    <div className="col-md-6">
      <label htmlfor="inputCity" className="form-label">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="col-md-4">
      <label htmlfor="inputState" className="form-label">State</label>
      <select id="inputState" className="form-select">
        <option selected>Choose...</option>
        <option>Ontario</option>
        <option>Quebec</option>
        <option>British Colombia</option>
        <option>Nova Scotia</option>
        <option></option>
  
      </select>
    </div>
    <div className="col-md-2">
      <label htmlfor="inputZip" className="form-label">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
    </form>


    )
}

export default expTab;