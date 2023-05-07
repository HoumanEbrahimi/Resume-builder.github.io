import logo from './logo.svg';
import './App.css';
import Education from './pages/education';
import Exp from './pages/experienceTab'
import Personal from './pages/personal';
import Experience from './pages/experience';
import Projects from './pages/Projects';
import { saveAs } from "file-saver";


import axios from "axios";

import {useState, useEffect } from 'react';

function App() {
  const [page,setPage]=useState(0);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",


    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_maj: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_maj: "",

    extra_1: "",
    extra_2: "",
  });

    const createAndDownloadPDF = () => {
      axios
      .post("http://localhost:4000/create-pdf", formData)
      .then(() =>
        axios.get("http://localhost:4000/fetch-pdf", {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], {
          type: "application/pdf",
        });
        setSuccess(true && res.status === 200);
        saveAs(pdfBlob, "Resume.pdf");
      });


  };
  const pages =()=>{
    if (page === 0) {
      return <Personal formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>;
    } else if (page === 2) {
      return <Exp formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>;
    } 
    else{
      return <Projects formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>;

    }
  }

  return (
    <div> 
      {pages()}
      <div className="flex-parent jc-center ">

        <button className="button2" style={{width: 250}}  onClick={() => {
            setPage((currPage) => currPage + 1);
          }}>Next Step</button>
      </div>
      &nbsp;&nbsp;&nbsp;
      <div className="flex-parent jc-center ">

          <button className="button2" style={{width: 250}} disabled={page===0}  onClick={() => {
          setPage((currPage) => currPage - 1) 
          }}>Prev </button>
</div>
&nbsp;&nbsp;&nbsp;
  <div className="flex-parent jc-center ">
      
    <button className="button3" style={{width: 250}} disabled={page<3}            onClick={() => {createAndDownloadPDF()}}>
    Download PDF </button>
  </div>



    </div>
  );
}

export default App;
