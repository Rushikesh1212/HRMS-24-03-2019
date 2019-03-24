import React, {Component} from 'react';
import swal from 'sweetalert';
import "/imports/empInduction/bankDetails/BankDetails.css";
// import '/imports/empInduction/valid/signupform.css';
import { BankMaster } from "/imports/empInduction/bankDetails/BankDetailsAPI.js";



export default class BankDetails extends Component{

  constructor(){
    super();
    this.state = {
      fields: {},
      error: {},
      "BankName":"",
      "BranchName":"",
      "AccountNumber":"",
      "AccountType":"",
      "IFSCCode":"",

    }


  }


  loginPage(event){
    FlowRouter.go("/Submit/");
  }


  handleChange(event){
    event.preventDefault();
    /*let fields = this.state.fields;
    fields[event.target.Branch] = event.target.value;*/
    this.setState({
      "BankName"   : this.refs.BankName.value,          
        "BranchName"   : this.refs.BranchName.value,          
        "AccountNumber"    : this.refs.AccountNumber.value,
        "AccountType"  : this.refs.AccountType.value, 
        "IFSCCode"  : this.refs.IFSCCode.value
      
    });
  }

  submitNewUser(event){
    event.preventDefault();
      var formValues={

        BankName:this.refs.BankName.value,
        BranchName:this.refs.BranchName.value,
        AccountNumber: this.refs.AccountNumber.value,
        AccountType: this.refs.AccountType.value,
        IFSCCode: this.refs.IFSCCode.value,
      };
    

      if(formValues.BankName[0]!="" && formValues.BranchName[0]!="" && formValues.AccountNumber[0]!="" && formValues.AccountType[0]!="" && formValues.IFSCCode) 
        

        Meteor.call("insertbankinfo",formValues,
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

        


         var brname = document.getElementById('brname').value;
         if(brname==="")
         {
           document.getElementById('brnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('brnamemsg').innerHTML="";
         }




        var acname = document.getElementById('acname').value;
         if(acname==="")
         {
           document.getElementById('acnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('acnamemsg').innerHTML="";
         }



         var tyname = document.getElementById('tyname').value;
         if(acname==="")
         {
           document.getElementById('tynamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('tynamemsg').innerHTML="";
         }




         var ifname = document.getElementById('ifname').value;
         if(acname==="")
         {
           document.getElementById('ifnamemsg').innerHTML="This field is required ";
         }
         else
         {
           document.getElementById('ifnamemsg').innerHTML="";
         }




     } 

    
    
  
  render(){
    return(

      <div>    

          <form className="col-lg-12" action="" onClick={this.validate.bind(this)}>
            <h1>Bank Details</h1>

           


             <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div className="form-group">
               <label >Bank Name</label><span className="danger">*</span><span id="fnamemsg" className="danger"></span>
                <input type="text" value={this.state.BankName} name1="text"   ref="BankName" id="fname" className="form-control" onChange={this.handleChange.bind(this)}/>
                <div className="errorMessage">{this.state.error.Name}</div>
              </div>
            </div>



            <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div className="form-group">
               <label >Branch Name</label><span className="danger">*</span><span id="brnamemsg" className="danger"></span>
                <input type="text" name1="text"  value={this.state.BranchName} ref="BranchName" id="brname"className="form-control" onChange={this.handleChange.bind(this)}/>
                 <div className="errorMessage"></div>
              </div>
            </div>


            <div className="col-md-4 col-sm-6 col-xs-12 ">
              <div className="form-group">
               <label>Account Number</label><span className="danger">*</span><span id="acnamemsg" className="danger"></span>
                <input type="text" name1="text"  value={this.state.AccountNumber}  ref="AccountNumber" id="acname" className="form-control" placeholder="" onChange={this.handleChange.bind(this)}/>
              </div>
            </div>


            <div className="col-md-4 col-sm-6 col-xs-12 ">
              <div className="form-group">
               <label>Account Type</label><span className="danger">*</span><span id="tynamemsg" className="danger"></span>
               <select className="form-control"value={this.state.AccountType}ref="AccountType" id="tyname">
              <option>Savings</option>
              <option>Current</option>
                </select>
              </div>
            </div>


            <div className="col-md-4 col-sm-6 col-xs-12 ">
              <div className="form-group">
               <label className="">IFSC Code</label><span className="danger">*</span><span id="ifnamemsg" className="danger"></span>
                <input type="text" name1="text" id="ifname"className="form-control" value={this.state.IFSCCode} ref="IFSCCode"onChange={this.handleChange.bind(this)}/>
              </div>
            </div>
        </form>
    

     <div className="col-lg-12 ">
        <div className="col-lg-1 col-lg-offset-11">
          <button className="btn submit pull-right" onClick={this.submitNewUser.bind(this)}>Submit</button>
          <div className="login" onClick={this.loginPage.bind(this)}></div>

          <div className="modal fade" id="pwmodal" tabIndex="-1" role="dialog" aria-labelledby="signUpFormCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered vertical-align" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Password Policy</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
       </div>

   </div>   
</div>
       
    )
  }

}
