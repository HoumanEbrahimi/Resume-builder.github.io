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
  
  const [eduForm,setEduData]=useState([{edu_school: "",edu_from: "",edu_to: "",edu_city:"",edu_qualification: "",edu_maj: "",edu_deg:""}]);

  //setFormData(eduForm)

const handleServiceAdd = () => {
  
  setEduData([...eduForm, { edu_school: "",edu_from: "",edu_to: "",edu_city:"",edu_qualification: "",edu_maj: "",edu_deg:""}])
  setFormData({...formData, edu_school: "",edu_from: "",edu_to: "",edu_city:"",edu_qualification: "",edu_maj: "",edu_deg:""})
  
};

const handleChange=(e,i)=>{
  const {name,value}=e.target
  const onchangeVal = [...eduForm]
  onchangeVal[i][name]=value
  setEduData(onchangeVal)
  setFormData({ ...formData,onchangeVal });
}

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
    let arr=Array.from(formData)
   // console.log("education",eduForm)
    return (

        <form className="row g-3">
          <h1 className="centering"> Education </h1> 

          {eduForm.map((val,index) => (

          <div>
        
        <div className="col-md-6">

        <label htmlfor="inputEmail" className="form-label">Institution</label>
        <input type="email" className="form-control" id="inputEmail"  name="edu_school" value={val.edu_school} 
        onChange={(e)=>handleChange(e,index)} ></input>
        
      </div>
      <div class="col-md-4">
    <label for="inputState" class="form-label" >Degree</label>
    <select id="inputState" class="form-select"  value={val.edu_deg}   name="edu_deg" onChange={(e)=>handleChange(e,index)}>
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
        <input type="text" className="form-control" id="inputAddress" style={{width: 1000}}  value={val.maj} placeholder="1234 Main St" 
        name="edu_maj" onChange={(e)=>handleChange(e,index)}/>
      </div>
  
      <div className="col-md-6">
        <label htmlfor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" style={{width: 250 }} id="inputCity" value={val.city} 
        name="edu_city"
        onChange={(e)=>handleChange(e,index)}
        />
        <br></br>
        <br></br>

      </div >

      <div  style={{display: 'flex', flexDirection: 'row'}}>
      <h3 style={{fontSize:20,}}> &nbsp;From&nbsp;&nbsp;&nbsp; </h3>
    <DatePicker
      selected={startDate}
      calendarContainer={MyContainer}
      name="edu_from"
      onChange={(date)=> handleChange({ target: { value: val.edu_form, name:"edu_from"} })}

    />
    
    <h3 style={{fontSize:20,paddingLeft:"px"}}> &nbsp;&nbsp;&nbsp;To&nbsp;&nbsp;&nbsp; </h3>
        <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
      name="edu_to"
      value={val.edu_to}
    /> 


  </div>

  <spacer>  <spacer>   <spacer></spacer> </spacer></spacer>
  <spacer>  <spacer>   <spacer></spacer> </spacer></spacer>
  <spacer>  <spacer>   <spacer></spacer> </spacer></spacer>
  &nbsp;&nbsp;&nbsp;

&nbsp;&nbsp;&nbsp;

      </div>
          ))}
            <div className="flex-parent jc-center ">

<button type="button" className="button2" style={{width: 250}} onClick={(e)=>handleServiceAdd(e)}>
  Add Section
</button>
</div>
&nbsp;&nbsp;&nbsp;

        </form>

    );
  

}

export default Education;