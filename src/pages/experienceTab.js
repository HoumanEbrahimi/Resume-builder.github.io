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
  const [expForm,setExpData]=useState([{exp_org: "",exp_pos: "",exp_loc:"",exp_desc: "",exp_dur: ""}]);

  //setFormData(expForm)
  const handleServiceAdd = () => {
    setExpData([...expForm, {exp_org: "",exp_pos: "",exp_loc:"",exp_desc: "",exp_dur: ""}])
    setFormData({...formData,exp_org: "",exp_pos: "",exp_loc:"",exp_desc: "",exp_dur: ""})

  };

  
  const handleChange=(e,i)=>{
    const {name,value}=e.target
    const onchangeVal2 = [...expForm]
    onchangeVal2[i][name]=value
    setExpData(onchangeVal2)
    setFormData({ ...formData,onchangeVal2 });

  
  }

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
    //console.log("exp",formData);

    return (

        <form className="row g-3">
                      <h1 className="centering"> Experience </h1> 

          {expForm.map((val,index) => (

          <div>
        
        <div className="col-md-6">

        <label htmlfor="inputEmail" className="form-label">Company</label>
        <input type="email" className="form-control" id="inputEmail"  name="exp_org" value={val.exp_org} onChange={(e)=>handleChange(e,index)}/>
        
      </div>

      <div className="col-12">
        <label htmlfor="inputAddress" className="form-label">Title</label>
        <input type="text" className="form-control" id="inputAddress" style={{width: 1000}}  value={val.exp_pos} placeholder="1234 Main St" name="exp_pos" onChange={(e)=>handleChange(e,index)}/>
      </div>
  
      <div className="col-md-6">
        <label htmlfor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" style={{width: 250 }} id="inputCity" value={val.exp_loc} 
        name="exp_loc"
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

export default ExpTab;