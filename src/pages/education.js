import React from "react";
import './personal.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import { Container } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";


function Education({formData,setFormData}){
  const val=[1,2,3,4,5,6,7,8,9]
  const [value,setVal]=useState(0);

  const [eduForm,setEduData]=useState([formData]);
  console.log(eduForm);

  const handleServiceAdd = () => {
    setVal((value) => value + 1) 
  
    if (value===0){
      setFormData({...formData, edu_school1: "",edu_from1: "",edu_to1: "",edu_city1:"",edu_qualification1: "",edu_maj1: "",edu_deg1:""})
      setEduData([...eduForm, { edu_school1: "",edu_from1: "",edu_to1: "",edu_city1:"",edu_qualification1: "",edu_maj1: "",edu_deg1:""}])
  
  
    }
    else if (value===1){
      setFormData({...formData, edu_school2: "",edu_from2: "",edu_to2: "",edu_city2:"",edu_qualification2: "",edu_maj2: "",edu_deg2:""})
      setEduData([...eduForm, { edu_school2: "",edu_from2: "",edu_to2: "",edu_city2:"",edu_qualification2: "",edu_maj2: "",edu_deg2:""}])
  
  
    }
    else if (value===2){
      setFormData({...formData, edu_school3: "",edu_from3: "",edu_to3: "",edu_city3:"",edu_qualification3: "",edu_maj3: "",edu_deg3:""})
      setEduData([...eduForm, { edu_school3: "",edu_from3: "",edu_to3: "",edu_city3:"",edu_qualification3: "",edu_maj3: "",edu_deg3:""}])
  
  
    }
  };

const handleChange=(e,i)=>{
  const {name,value}=e.target
  const onchangeVal = [...eduForm]
  onchangeVal[i][name]=value
  console.log("bruh",e.target.name)
  setFormData({...formData, [e.target.name]: e.target.value})
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

    return (

        <form className="row g-3">
          <h1 className="centering"> Education </h1> 

          {eduForm.map((val,index) => (

          <div>
        
        <div className="col-md-6">

        <label htmlfor="inputEmail" className="form-label">Institution</label>
        <input
            type="text"
            className="form-control"
            id="name"
            name={`edu_school${value}`}
            value={formData.edu_school}
            onChange={(e) => 
              handleChange(e,index)
            }
          />
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