 import React, {Component} from 'react';
 import "/imports/empInduction/workExp/WorkExp.css";
 import swal from 'sweetalert';
 import { WorkExpMaster } from "/imports/empInduction/workExp/WorkExpAPI.js";


// import { WorkExpMaster } from "/imports/empInduction/workExp/api/WorkExpAPI.js";
 

 // import "/imports/empInduction/workExp/WorkExp.css";

 

 export default class  WorkExp extends Component {

    constructor(){
    super();
    this.state = {
        fields: {},
        error: {},
        "CompanyName":"",
        "CompanyAddress":"",
        "CompanyCity":"",
        "CompanyState":"",
        "CompanyCountry":"",
        // "CompanyContactNumber":"",        
        // "Employee_id" :"",                
        // "Designation":"",                 
        // "Department": "",              
        // "fromDate":"",                   
        // "LastSalaryDrawn":"",             
        // "Duties&Responsibilities":"",     
        // "ReportingManager":"",            
        // "ReportingManagerDesignation":"", 
        // "ImageProof":"",                  
        // "ProofName" :"",                  

    }
  }


  loginPage(event){
    FlowRouter.go("/Submit/");
  }

  handleChange(event){
    event.preventDefault();
 
    this.setState({
        "CompanyName"                 : this.refs.CompanyName.value,          
        "CompanyAddress"              : this.refs.CompanyAddress.value,          
        "CompanyCity"                 : this.refs.CompanyCity.value,
        "CompanyState"                : this.refs.CompanyState.value, 
        "CompanyCountry"              : this.refs.CompanyCountry.value,
        "CompanyContactNumber"        : this.refs.CompanyContactNumber.value,
        "Employee_id"                 : this.refs.Employee_id.value,
        // "Designation"                 : this.refs.Designation.value,
        // "Department"                  : this.refs.Department.value,
        // "fromDate"                    : this.refs.fromDate.value,
        // "LastSalaryDrawn"             : this.refs.LastSalaryDrawn.value,
        // "Responsibilities"            : this.refs.Responsibilities.value,
        // "ReportingManager"            : this.refs.ReportingManager.value,
        // "ReportingManagerDesignation" : this.refs.ReportingManagerDesignation.value,
        // "ImageProof"                  : this.refs.ImageProof.value,
        // "ProofName"                   : this.refs.ProofName.value,

       


    });
  }

  Submit(event){
    event.preventDefault();
      var formValues={

        CompanyName               :this.refs.CompanyName.value,
        CompanyAddress            :this.refs.CompanyAddress.value,
        CompanyCity               : this.refs.CompanyCity.value,
        CompanyState              : this.refs.CompanyState.value,
        CompanyCountry            : this.refs.CompanyCountry.value,
        CompanyContactNumber      : this.refs.CompanyContactNumber.value,
        Employee_id               : this.refs.Employee_id.value,
        // Designation               : this.refs.Designation.value,
        // Department                : this.refs.Department.value,
        // fromDate                  : this.refs.fromDate.value,
        // LastSalaryDrawn           : this.refs.LastSalaryDrawn.value,
        // Responsibilities          : this.refs.Responsibilities.value,
        // ReportingManager          : this.refs.ReportingManager.value,
        // ReportingManagerDesignation: this.refs.ReportingManagerDesignation.value,
        // ImageProof                 : this.refs.ImageProof.value,
        // ProofName                 : this.refs.ProofName.value,

      };

   if(formValues.CompanyName[0]!="" && formValues.CompanyAddress[0]!="" && formValues.CompanyCity[0]!="" && formValues.CompanyState[0]!="" && formValues.CompanyCountry) 
        

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
         

         var ccname = document.getElementById('ccname').value;
         if(ccname==="")
         {
           document.getElementById('ccnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('ccnamemsg').innerHTML="";
         }



         var ename = document.getElementById('ename').value;
         if(ename==="")
         {
           document.getElementById('enamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('enamemsg').innerHTML="";
         }


         var dsname = document.getElementById('dsname').value;
         if(dsname==="")
         {
           document.getElementById('dsnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('dsnamemsg').innerHTML="";
         }


         var dpname = document.getElementById('dpname').value;
         if(dpname==="")
         {
           document.getElementById('dpnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('dpnamemsg').innerHTML="";
         }


         var fdname = document.getElementById('fdname').value;
         if(fdname==="")
         {
           document.getElementById('fdnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('fdnamemsg').innerHTML="";
         }

         var dtname = document.getElementById('dtname').value;
         if(dtname==="")
         {
           document.getElementById('dtnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('dtnamemsg').innerHTML="";
         }

         var slname = document.getElementById('slname').value;
         if(slname==="")
         {
           document.getElementById('slnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('slnamemsg').innerHTML="";
         }

         var rmname = document.getElementById('rmname').value;
         if(rmname==="")
         {
           document.getElementById('rmnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('rmnamemsg').innerHTML="";
         }


         var rname = document.getElementById('rname').value;
         if(rname==="")
         {
           document.getElementById('rnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('rnamemsg').innerHTML="";
         }

         var imname = document.getElementById('imname').value;
         if(imname==="")
         {
           document.getElementById('imnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('imnamemsg').innerHTML="";
         }


         var pname = document.getElementById('pname').value;
         if(pname==="")
         {
           document.getElementById('pnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('pnamemsg').innerHTML="";
         }
     }   




  render(){
    return(
      <form className="col-lg-12"onClick={this.validate.bind(this)}>
       <h3>Work Experience</h3>
        <div className="col-lg-12">
            <div className="col-md-4 col-sm-6 col-xs-12 ">
              <div className="form-group">
              <label> Company Name </label><span className="danger">*</span><span id="fnamemsg" className="danger"></span>
              <input type="text" name1="text"value={this.state.CompanyName} ref="CompanyName"id="fname" className="form-control" onChange={this.handleChange.bind(this)} />
             </div>
            </div> 

        
         <div className="col-md-4 col-sm-6 col-xs-12 ">
             <div className="form-group">
              <label>Company Address</label><span className="danger">*</span><span id="inamemsg" className="danger"></span>
              <input type="text" value={this.state.CompanyAddress} ref="CompanyAddress"name="text"id="iname"className="form-control" onChange={this.handleChange.bind(this)} />
             </div>
           
        </div>



         <div className="col-md-4 col-sm-6 col-xs-12 ">
             <div className="form-group">
              <label>Company City</label><span className="danger">*</span><span id="cnamemsg" className="danger"></span>
              <input type="text"  name="text"value={this.state.CompanyCity} ref="CompanyCity"id="cname"className="form-control" onChange={this.handleChange.bind(this)}/>
             </div>
        </div>
      </div>


      <div className="col-lg-12">
        <div className="col-md-4 col-sm-6 col-xs-12 ">
              <div className="form-group">
              <label> Company State </label><span className="danger">*</span><span id="vnamemsg" className="danger"></span>
              <input type="text" name1="text"value={this.state.CompanyState} ref="CompanyState"id="vname" className="form-control" onChange={this.handleChange.bind(this)}/>
             </div>
            </div> 

        
         <div className="col-md-4 col-sm-6 col-xs-12 ">
             <div className="form-group">
              <label>Company Country</label><span className="danger">*</span><span id="gnamemsg" className="danger"></span>
              <input type="text" name="text" className="form-control"value={this.state.CompanyCountry} ref="CompanyCountry"id="gname" onChange={this.handleChange.bind(this)}/>
             </div>
           
        </div>


         <div className="col-md-4 col-sm-6 col-xs-12 ">
             <div className="form-group">
              <label>CompanyContactNumber</label><span className="danger">*</span><span id="ccnamemsg" className="danger"></span>
              <input type="text" name="text" className="form-control" value={this.state.CompanyContactNumber} ref="CompanyContactNumber"id="ccname"onChange={this.handleChange.bind(this)}/>
             </div>
        </div>
        </div>



      <div className="col-lg-12">
        <div className="col-md-4 col-sm-6 col-xs-12 ">
              <div className="form-group">
              <label>Employee_id</label><span className="danger">*</span><span id="enamemsg" className="danger"></span>
              <input type="text" name1="text" className="form-control" value={this.state.Employee_id} ref="Employee_id"id="ename" onChange={this.handleChange.bind(this)}/>
             </div>
            </div>

      <div className="col-md-4 col-sm-6 col-xs-12 ">
             <div className="form-group">
              <label>Designation</label><span className="danger">*</span><span id="dsnamemsg" className="danger"></span>
              <input type="text" name="text" className="form-control" value={this.state.Designation} ref="Designation"id="dsname" onChange={this.handleChange.bind(this)}/>
             </div>
           
        </div>


      <div className="col-md-4 col-sm-6 col-xs-12 ">
             <div className="form-group">
              <label>Department</label><span className="danger">*</span><span id="dpnamemsg" className="danger"></span>
              <input type="text" name="text" className="form-control"value={this.state.Department} ref="Department"id="dpname"onChange={this.handleChange.bind(this)}/>
             </div>
        </div>
     </div>  

    
     <div className="col-lg-12">
       <div className="col-md-4 col-sm-6 col-xs-12 ">
              <div className="form-group">
              <label> fromDate</label><span className="danger">*</span><span id="fdnamemsg" className="danger"></span>
              <input type="date" name1="text" className="form-control" value={this.state.fromDate} ref="fromDate"id="fdname"onChange={this.handleChange.bind(this)} />
             </div>
            </div> 
     

     <div className="col-md-4 col-sm-6 col-xs-12 ">
             <div className="form-group">
              <label>toDate</label><span className="danger">*</span><span id="dtnamemsg" className="danger"></span>
              <input type="date" name="text" className="form-control" value={this.state.toDate} ref="toDate"id="dtname"onChange={this.handleChange.bind(this)}/>
             </div>
           
        </div>


      <div className="col-md-4 col-sm-6 col-xs-12 ">
             <div className="form-group">
              <label>Last Salary Drawn</label><span className="danger">*</span><span id="slnamemsg" className="danger"></span>
              <input type="text" name="text" className="form-control" value={this.state.LastSalaryDrawn} ref="LastSalaryDrawn"id="slname"onChange={this.handleChange.bind(this)}/>
             </div>
        </div>  
      </div>  
      
      <div className="col-lg-12">
        <div className="col-md-4 col-sm-6 col-xs-12 ">
              <div className="form-group">
              <label>Responsibilities </label><span className="danger">*</span><span id="dnamemsg" className="danger"></span>
              <input type="text" name1="text" className="form-control" value={this.state.Responsibilities} ref="Duties&Responsibilities"id="dname"onChange={this.handleChange.bind(this)}/>
             </div>
            </div> 

        
         <div className="col-md-4 col-sm-6 col-xs-12 ">
             <div className="form-group">
              <label>Reporting Manager</label><span className="danger">*</span><span id="rmnamemsg" className="danger"></span><span className="danger">*</span><span id="fnamemsg" className="danger"></span>
              <input type="text" name="text" className="form-control" value={this.state.ReportingManager} ref="ReportingManager"id="rmname" onChange={this.handleChange.bind(this)}/>
             </div>
           
        </div>



         <div className="col-md-4 col-sm-6 col-xs-12 ">
             <div className="form-group">
              <label>Reporting Manager Designation</label><span className="danger">*</span><span id="rnamemsg" className="danger"></span>
              <input type="text" name="text" className="form-control" value={this.state.ReportingManagerDesignation} ref="ReportingManagerDesignation"id="rname" onChange={this.handleChange.bind(this)}/>
             </div>
        </div>


        <div className="col-md-12 col-sm-6 col-xs-12 ">
         <div className=" col-md-4 col-sm-6 col-xs-12 ">
        <label>Image Proof</label><span className="danger">*</span><span id="imnamemsg" className="danger"></span>
              <img src="" className="img-responsive img-circle"/>
              <input type="file"value={this.state.ImageProof} ref="ImageProof"id="imname" placeholder="Upload profile photo" onChange={this.handleChange.bind(this)}/>
       </div>

        
     <div className="col-md-4 col-sm-6 col-xs-12 "> 
       <div className="form-group">
              <label>Proof Name</label><span className="danger">*</span><span id="pnamemsg" className="danger"></span>
                <select className="form-control"value={this.state.ProofName} ref="ProofName"id="pname" onChange={this.handleChange.bind(this)}>
                    <option>Experience Letter</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
              </select>
        </div>
    </div> 




        </div>
      



      </div>   




    



   <div className="col-lg-12 ">
    <div className="col-lg-1 col-lg-offset-11">
    <button className="btn btn_mt submit pull-right"onClick={this.Submit.bind(this)}>Submit</button>
    </div>
   </div>  
 </form>
  
    )
  }
}






