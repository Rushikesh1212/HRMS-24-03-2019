import React, {Component} from 'react';


import Academics from "/imports/empInduction/academics/Academics.jsx";
import BankDetails from "/imports/empInduction/bankDetails/BankDetails.jsx";
import WorkExp from "/imports/empInduction/workExp/WorkExp.jsx";
import MedicalHistory from "/imports/empInduction/medicalHistory/MedicalHistory.jsx";
import BasicInfo from "/imports/empInduction/personalInformation/personalInfo/BasicInfo.jsx";
import Skills from "/imports/empInduction/skills/Skills.jsx";
import Certi from "/imports/empInduction/certificate/Certi.jsx";
import "/imports/empInduction/formIndex/FormIndex.css";


function FormIndex(){


	return(

      <div className="row">
      	 <div >
              
               <a className="" href="#myCarousel" data-slide="next">
                <button className="submit  btn pull-right">Next</button>
                  
          </a>
          <a className="" href="#myCarousel" data-slide="prev">
             <button className="submit  btn pull-right">prev</button>
            
            </a>
      	  

            <div className=" col-md-2 col-sm-2 col-xs-2 size">

                    <div className="tab" role="tabpanel">
                        
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active"><a href="#" className="tablinks" aria-controls="home" role="tab" data-toggle="tab" data-target="#myCarousel" data-slide-to="0">Basic Info</a></li>
                            
                            <li role="presentation"><a href="#"  aria-controls="profile" role="tab" data-toggle="tab" data-target="#myCarousel" data-slide-to="1">Academics</a></li>

                            <li role="presentation"><a href="#"  aria-controls="messages" role="tab" data-toggle="tab" data-target="#myCarousel" data-slide-to="2">Skills</a></li>
                            
                            <li role="presentation"><a href="#"  aria-controls="messages" role="tab" data-toggle="tab" data-target="#myCarousel" data-slide-to="3">Work Experience</a></li>
                            
                            <li role="presentation"><a href="#"  aria-controls="messages" role="tab" data-toggle="tab" data-target="#myCarousel" data-slide-to="4">Medical History</a></li>
                            
                            <li role="presentation"><a href="#"  aria-controls="messages" role="tab" data-toggle="tab" data-target="#myCarousel" data-slide-to="5">Certificates</a></li>
                            
                            <li role="presentation"><a href="#"  aria-controls="messages" role="tab" data-toggle="tab" data-target="#myCarousel" data-slide-to="6">Bank Details</a></li>
                        </ul>
                       
                
            </div>
        
   

              {/* <button  data-target="#myCarousel" data-slide-to="0" >Basic Info</button>
              <div>
              <img src="/images/down-arrow1.png"className="link"/>
              </div>
              <button className="tablinks" data-target="#myCarousel" data-slide-to="1">Academics</button>
              <div>
              <img src="/images/down-arrow1.png"className="link"/>
              </div>
              <button className="tablinks" data-target="#myCarousel" data-slide-to="2" >Skills</button>
              <div>
              <img src="/images/down-arrow1.png"className="link"/>
              </div>
            <button className="tablinks"data-target="#myCarousel" data-slide-to="3">Work Experience</button>
              <div>
              <img src="/images/down-arrow1.png"className="link"/>
              </div>
            <button className="tablinks"data-target="#myCarousel" data-slide-to="4">Medical History</button>
              <div>
              <img src="/images/down-arrow1.png"className="link"/>
              </div>
            <button className="tablinks" data-target="#myCarousel" data-slide-to="5">Certificates</button>
              <div>
              <img src="/images/down-arrow1.png"className="link"/>
              </div>
            <button className="tablinks" data-target="#myCarousel" data-slide-to="6">Bank Details</button>
            */}
            </div>
            <div className=" col-md-10 col-sm-10 col-xs-10">
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
 
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" ></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
      <li data-target="#myCarousel" data-slide-to="5"></li>
      <li data-target="#myCarousel" data-slide-to="6"></li>
     
      
    </ol>

 
    <div className="carousel-inner">
      <div className="item active">
        <BasicInfo />
      </div>

      <div className="item" id="c2">
        <Academics />
      </div>
    
      <div className="item">
        <Skills />
      </div>

      <div className="item">
        <WorkExp />
      </div>

      <div className="item">
        <MedicalHistory />
      </div>

      <div className="item">
        <Certi />
      </div>

      <div className="item">
        <BankDetails />
      </div>

      
    </div> 
    </div>
   </div>    
  </div>
 </div>

       
		)
}
export default FormIndex
