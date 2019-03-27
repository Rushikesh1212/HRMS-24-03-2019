import React, {Component} from 'react';

import "/imports/empInduction/skills/skills.css";
import { CertiMaster } from "/imports/empInduction/skills/SkillsAPI.js";

class Skills extends Component{

   constructor(){
    super();
    this.state = {
      "Skills":"",
      "Description":"",
   
    }
   }
  
  loginPage(event){
    FlowRouter.go("/Submit/");
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
              
      "Skills"        : this.refs.Skills.value,          
      "Description"       : this.refs.Description.value,
     
  });
  }


  submitNewUser(event){
    event.preventDefault();
      var formValues={
     

      Skills             : this.refs.Skills.value,          
      Description        : this.refs.Description.value,          
      
      };
       

        Meteor.call("insertSkillinfo",formValues,
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
                     

  



  render(){   

    return (
      <div className="row">
      
      <form>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2>  Skills</h2>
            
      
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 mtop">

              <div className="form-group">
                    <label >Skills</label>
                    <input type="text"ref="Skills"value={this.state.Skills}className="form-control"onChange={this.handleChange.bind(this)} id=""/>
                    <br/>
                   {/* <input type="text"ref="Skills"value={this.state.Skills}className="form-control"onChange={this.handleChange.bind(this)} id=""/>*/}
                </div>

            </div>
            <div className="col-lg-7 col-md-7 col-sm-4 col-xs-12 mtop">

              <div className="form-group">
                    <label >Description</label>
                    <input type="text"ref="Description"value={this.state.Description} className="form-control"onChange={this.handleChange.bind(this)} id=""/>
                    <br/>
                    {/*<input type="text"ref="Description"value={this.state.Description} className="form-control" onChange={this.handleChange.bind(this)}id=""/>*/}
                </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 mtop">
              <label >How Do you Rate yourself?</label>
              <div>
                    
                 <div className="col-lg-1">
                      <i className="fa fa-star"></i>
                 </div>

                                  <div className="col-lg-1">
                                         <i className="fa fa-star"></i>
                                   </div>


                                  <div className="col-lg-1">
                                         <i className="fa fa-star"></i>
                                   </div>
                                        


                                  <div className="col-lg-1">
                                         <i className="fa fa-star"></i>
                                   </div>
                                        


                                  <div className="col-lg-1">
                                         <i className="fa fa-star"></i>
                                   </div>
                                        
                                        

                      
               </div>
              <br/>
             </div>

        
            </div>
            
        </form> 

         <div className="col-lg-12">
              <button className="submit btn pull-right"onClick={this.submitNewUser.bind(this)}>Submit</button>
             </div>
      </div>
    );
  };
}


export default Skills