import React, {Component} from 'react';
import swal from 'sweetalert';
import { CertiMaster } from "/imports/empInduction/certificate/CertiAPI.js";


export default class  Certi extends Component{


  constructor(){
    super();
    this.state = {
      fields: {},
      error: {},
      "CertificationName":"",
      "IssuedBy":"",
      "CertifiedOn":"",
      "Validtill":"",
      "Grade":"",
    }
  }

  loginPage(event){
    FlowRouter.go("/Submit/");
  }

  handleChange(event){
    event.preventDefault();
 
    this.setState({
        "CertificationName"         : this.refs.Name.value,          
        "IssuedBy"     : this.refs.IssuedBy.value,          
        "CertifiedOn"  : this.refs.CertifiedOn.value,
        "Validtill"    : this.refs.Validtill.value, 
        "Grade"        : this.refs.Grade.value,
    });
  }

  Submit(event){
    event.preventDefault();
      var formValues={

        Name         :this.refs.Name.value,
        IssuedBy     :this.refs.IssuedBy.value,
        CertifiedOn  : this.refs.CertifiedOn.value,
        Validtill    : this.refs.Validtill.value,
        Grade        : this.refs.Grade.value,
      };

   if(formValues.Name[0]!="" && formValues.IssuedBy[0]!="" && formValues.CertifiedOn[0]!="" && formValues.Validtill[0]!="" && formValues.Grade) 
        

        Meteor.call("insertCertiinfo",formValues,
                      (error,result)=>{
                        if(error){
                          console.log("Something went wrong! Error = ", error);
                        }else{
                          swal("Congrats!","Your Information Submitted Successfully.","success");
                          console.log("latest id = ",result);
                          
                          // this.setState({"inputValue":""});
                        }
                      }); 
  
    else{
      swal({
        title:"Something went wrong!",
        text:"please fill all records!",
        icon:"warning",
      })
    }
  } 

  validate(event)
    {
       event.preventDefault();

         var fname = document.getElementById('fname').value;
         if(fname==="")
         {
           document.getElementById('fnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('fnamemsg').innerHTML="";
         }


      
         var iname = document.getElementById('iname').value;
         if(iname==="")
         {
           document.getElementById('inamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('inamemsg').innerHTML="";
         }
         

  
         var cname = document.getElementById('cname').value;
         if(cname==="")
         {
           document.getElementById('cnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('cnamemsg').innerHTML="";
         }



      
         var vname = document.getElementById('vname').value;
         if(vname==="")
         {
           document.getElementById('vnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('vnamemsg').innerHTML="";
         }



         var gname = document.getElementById('gname').value;
         if(gname==="")
         {
           document.getElementById('gnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('gnamemsg').innerHTML="";
         }




        

}


   


 render(){
  return(

      <div>

      {/*<div className="col-lg-12">
  
          <button className="submit  btn pull-right">Prev</button>
          <button className="submit btn pull-right">Next</button>
      </div>  
*/}
       <form className="col-lg-12" action="" onClick={this.validate.bind(this)}>
        <h1>Certification</h1>
        <div className="col-lg-12">
         <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div className="form-group">
               <label>Certification Name</label><span className="danger">*</span><span id="fnamemsg" className="danger"></span>
                <input type="text" value={this.state.CertificationName} ref="Name" id="fname" name1="text" className="form-control" onChange={this.handleChange.bind(this)} />
              </div>
            </div>


          <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div className="form-group">
               <label>Issued By</label><span className="danger">*</span><span id="inamemsg" className="danger"></span>
                <input type="text" value={this.state.IssuedBy} ref="IssuedBy" id="iname"name1="text" className="form-control" onChange={this.handleChange.bind(this)}  />
              </div>
            </div>

         <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div className="form-group">
               <label>Certified ON</label><span className="danger">*</span><span id="cnamemsg" className="danger"></span>
                <input type="text" ref="CertifiedOn" value={this.state.CertifiedOn}name1="text" className="form-control"onChange={this.handleChange.bind(this)}  />
              </div>
            </div>
      </div>




        <div className="col-lg-12">
          <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div className="form-group">
               <label>Valid till</label><span className="danger">*</span><span id="vnamemsg" className="danger"></span>
                <input type="Date" ref="Validtill"  name1="text"value={this.state.Validtill} className="form-control" onChange={this.handleChange.bind(this)}  />
              </div>
            </div>


          <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div className="form-group">
               <label>Grade/Percentage</label><span className="danger">*</span><span id="gnamemsg" className="danger"></span>
                <input type="text" ref="Grade" name1="text" value={this.state.Grade} className="form-control" onChange={this.handleChange.bind(this)}  />
              </div>
            </div>
          </div>
          

       <div className="col-lg-12 ">
        <div className="col-lg-1 col-lg-offset-11">
          <button className="btn submit pull-right"onClick={this.Submit.bind(this)}>Submit</button>
       </div>
      </div>   
    </form>
  </div>

      )
   }
}