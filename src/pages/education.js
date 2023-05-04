import React from "react";
import './personal.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import "./education.css";
import { Container } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";


function Education({formData,setFormData}){
  
  const [eduForm,setEduData]=useState([{
    edu1_school: "",
    edu1_from: "",
    edu1_to: "",
    edu1_city:"",
    edu1_qualification: "",
    edu1_maj: "",
}]);

const handleServiceAdd = () => {
  setEduData([...eduForm, { eduschool: ""}]);
  console.log(eduForm);
};

  const [startDate, setStartDate] = useState(new Date());

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>

          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  }
    console.log(eduForm)

    return (

        <form className="row g-3">
          {[setEduData].map((singleService, index) => (

          <div>
            <h1 className="centering"> Education </h1> 
        
        <div className="col-md-6">

        <label htmlfor="inputEmail4" className="form-label">Institution</label>
        <input type="email" className="form-control" id="inputEmail4"  value={eduForm.edu1_school} onChange={(e) => {
              setEduData({ ...eduForm, edu1_school: e.target.value });
            }}/>
        
      </div>
      <div class="col-md-4">
    <label for="inputState" class="form-label" >Degree</label>
    <select id="inputState" class="form-select"  value={eduForm.edu1_qualification}>
      <option selected>Choose...</option>
        <option value="bachelor">Bachelor's</option>
        <option value="masters">Masters</option>
        <option value="hs diploma">High School Diploma</option>
        <option value="phd">PHD</option>
        <option></option>
    </select>
  </div>
      <div className="col-12">
        <label htmlfor="inputAddress" className="form-label">Major</label>
        <input type="text" className="form-control" id="inputAddress" style={{width: 1000}}  value={eduForm.maj} placeholder="1234 Main St"  onChange={(e) => {
              setEduData({ ...eduForm, edu1_maj: e.target.value })}}/>
      </div>
  
      <div className="col-md-6">
        <label htmlfor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" style={{width: 250 }} id="inputCity" value={eduForm.city} onChange={(e) => {
              setEduData({ ...eduForm, edu1_city: e.target.value })}} />
        <br></br>
        <br></br>

      </div >

      <div  style={{display: 'flex', flexDirection: 'row'}}>
      <h3 style={{fontSize:20,}}> &nbsp;From&nbsp;&nbsp;&nbsp; </h3>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
    />
    
    <h3 style={{fontSize:20,paddingLeft:"px"}}> &nbsp;&nbsp;&nbsp;To&nbsp;&nbsp;&nbsp; </h3>
        <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
    /> 


  </div>

  <spacer>  <spacer>   <spacer></spacer> </spacer></spacer>
  <spacer>  <spacer>   <spacer></spacer> </spacer></spacer>
  <spacer>  <spacer>   <spacer></spacer> </spacer></spacer>

  <div className="flex-parent jc-center ">

<button className="button2" style={{width: 250}} onClick={()=>handleServiceAdd()}>
  Add Section
</button>
</div>
      </div>
          ))}
        </form>

    );
  

}

export default Education;
