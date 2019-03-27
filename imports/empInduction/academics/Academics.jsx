import React,{Component} from 'react';

import "/imports/empInduction/academics/Academics.css"

import { AcademicsMaster } from "/imports/empInduction/academics/academicsApi.js";


export default class Academics extends Component{

  constructor(){
    super();
    this.state = {
      "QualificationLevel":"",
      "Qualification":"",
      "Specialization":"",
      "Mode":"",
      "Grade":"",
      "PassoutYear":"",
      "CollegeName":"",
      "UniversityName":"",
      "City":"",
      "State":"",
      "ImageProof":"",
    }
   }

    loginPage(event){
    FlowRouter.go("/Submit/");
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
      // "QualificationLevel"   : this.refs.QualificationLevel.value,          
      "Qualification"        : this.refs.Qualification.value,          
      "Specialization"       : this.refs.Specialization.value,
      "Mode"                 : this.refs.Mode.value, 
      "Grade"                : this.refs.Grade.value,
      "PassoutYear"          : this.refs.PassoutYear.value,
      "UniversityName"       : this.refs.UniversityName.value,
      "City"                 : this.refs.City.value,
      "CollegeName"         : this.refs.CollegeName.value,
      "State"                : this.refs.State.value,
      "ImageProof"           : this.refs.ImageProof.value,
    });
  }

 submitNewUser(event){
    event.preventDefault();
      var formValues={
     

      QualificationLevel   : this.refs.QualificationLevel.value,          
      Qualification        : this.refs.Qualification.value,          
      Specialization       : this.refs.Specialization.value,
      Mode                 : this.refs.Mode.value, 
      Grade                : this.refs.Grade.value,
      PassoutYear          : this.refs.PassoutYear.value,
      UniversityName       : this.refs.UniversityName.value,
      City                 : this.refs.City.value,
      State                : this.refs.State.value,
      CollegeName          : this.refs.CollegeName.value,
      ImageProof           : this.refs.ImageProof.value,
      };
       

        Meteor.call("insertAcademicsinfo",formValues,
                      (error,result)=>{
                        if(error){
                          console.log("Something went wrong! Error = ", error);
                        }else{
                          swal("Congrats!","Your Information Submitted Successfully.","success");
                          console.log("latest id = ",result);
                          
                          // this.setState({"inputValue":""});
                        }
                      }); 
      }
  


     render()
     {
       return(

         <form className="col-lg-12" > 
          <h3 className="second">Educational Qualification</h3>  
           <div className="col-lg-12 second">
            <div className=" col-md-4 col-sm-6 col-xs-12  ">
             <label>Qualification Level</label>
               <select className="form-control" ref="QualificationLevel">
                    <option >Post Graduate</option>
                    <option >Under Graduate</option>
                    <option >10+2</option>
                    <option >10th</option>
                  
                </select>
           </div>



                     <div className=" col-md-4 col-sm-6 col-xs-12  ">
                        <label>Qualification</label>
                         <input type="text"ref="Qualification" value={this.state.Qualification} name1="text" className="form-control"onChange={this.handleChange.bind(this)}/>
                     </div>


                     <div className=" col-md-4 col-sm-6 col-xs-12  ">
                        <label>Specialization</label>
                         <input type="text" name1="text"ref="Specialization"value={this.state.Specialization} className="form-control"onChange={this.handleChange.bind(this)}onChange={this.handleChange.bind(this)}/>
                     </div>
                   </div>



                   <div className="col-lg-12 second">
                     <div className=" col-md-4 col-sm-6 col-xs-12  ">
                        <label>Grade</label>
                         <input type="text" name1="text"ref="Grade"value={this.state.Grade} className="form-control" onChange={this.handleChange.bind(this)} />
                     </div>



                     <div className=" col-md-4 col-sm-6 col-xs-12  ">
                        <label>Mode {/*Of Academics*/}</label>
                          <select className="form-control" ref="Mode"onChange={this.handleChange.bind(this)}>
                              <option >Full Time</option>
                              <option >Part Time</option>
                            <option >Distance</option>
                     
                          </select>
                         
                     </div>


                     <div className=" col-md-4 col-sm-6 col-xs-12  ">
                        <label>Passout Year</label>
                         <input type="text" name1="text"ref="PassoutYear"value={this.state.PassoutYear} className="form-control" onChange={this.handleChange.bind(this)} />
                     </div>

                     </div>


                  <div className="col-lg-12 second">
                     
                     <div className=" col-md-4 col-sm-6 col-xs-12  ">
                        <label>College Name</label>
                         <input type="text" name1="text"ref="CollegeName" value={this.state.CollegeName}className="form-control" onChange={this.handleChange.bind(this)} />
                     </div>

                     <div className=" col-md-4 col-sm-6 col-xs-12 second ">
                        <label>University Name</label>
                         <input type="text" name1="text" ref="UniversityName"value={this.state.UniversityName} className="form-control"onChange={this.handleChange.bind(this)}/>
                     </div>

                     <div className=" col-md-4 col-sm-6 col-xs-12 second ">
                        <label>City</label>
                         <input type="text" name1="text"ref="City" value={this.state.City}className="form-control" placeholder="" onChange={this.handleChange.bind(this)} />
                     </div>
                  </div>

                <div className="col-lg-12">
                    <div className=" col-md-4 col-sm-6 col-xs-12 second ">
                        <label>State</label>
                         <input type="text" name1="text" ref="State" value={this.state.State}className="form-control" onChange={this.handleChange.bind(this)} />
                        
                         </div>
                 <div className=" col-md-4 col-sm-6 col-xs-12 second ">
                    <label>Image Proof</label>
                       
                          <input type="file"  ref="ImageProof" value={this.state.ImageProof} placeholder="Upload profile photo" onChange={this.handleChange.bind(this)} />
                   </div>
                    
                   
              </div>
                  

                   <div className="col-lg-12  ">
                  
                      <div className="col-lg-1 col-lg-offset-11">
               
                        <button className="btn submit pull-right"onClick={this.submitNewUser.bind(this)}>Submit</button>
                      </div>
                   
                   </div>

                  </form>

                )
             }
        }
