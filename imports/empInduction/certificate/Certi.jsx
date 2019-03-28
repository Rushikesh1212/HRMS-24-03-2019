import React, {Component} from 'react';
import swal from 'sweetalert';
import { CertiMaster } from "/imports/empInduction/certificate/CertiAPI.js";
import { withTracker } from 'meteor/react-meteor-data';


 class  Certi extends Component{


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


  componentDidMount() {

    $.validator.addMethod("regxCertificationName", function(value, element, regexpr) {          
          return regexpr.test(value);
      }, "Please enter only characters");

  

     
      jQuery.validator.setDefaults({
          debug: true,
          success: "valid"
      });
      $("#certificate").validate({
          rules: {
            CertificationName: {
              required: true,
              regxCertificationName: /^[^-\s][a-zA-Z0-9_\s-]+$/,
            }
             
             
            
          },
          errorPlacement: function(error, element) {
            
            if (element.attr("name") == "CertificationName"){
                     error.insertAfter("#CertificationName");
                }
                  
               
               }
      });
      // this.getData();  
}


  loginPage(event){
    FlowRouter.go("/Submit/");
  }

  handleChange(event){
    event.preventDefault();
 
    this.setState({
        "CertificationName"         : this.refs.Name.value,          
        "IssuedBy"                  : this.refs.IssuedBy.value,          
        "CertifiedOn"               : this.refs.CertifiedOn.value,
        "Validtill"                 : this.refs.Validtill.value, 
        "Grade"                     : this.refs.Grade.value,
    });
  }

  Submit(event){
    event.preventDefault();

    if($("#certificate").valid()){
      var CertiValues={

        Name         :this.refs.Name.value,
        IssuedBy     :this.refs.IssuedBy.value,
        CertifiedOn  : this.refs.CertifiedOn.value,
        Validtill    : this.refs.Validtill.value,
        Grade        : this.refs.Grade.value,
      };

   // if(CertiValues.Name[0]!="" && CertiValues.IssuedBy[0]!="" && CertiValues.CertifiedOn[0]!="" && CertiValues.Validtill[0]!="" && CertiValues.Grade) 
        

        Meteor.call("insertCertiinfo",CertiValues,
                      (error,result)=>{
                        if(error){
                          console.log("Something went wrong! Error = ", error);
                        }else{
                          swal("Congrats!","Your Information Submitted Successfully.","success");
                          console.log("latest id = ",result); 
                        }
                      }); 

  


  
    }

     else{
     swal({
        title:"Something went wrong!",
        text:"please fill all records!",
        icon:"warning",
      })

    
      }

 } 



 render(){
  return(

      <div>
 
       <form className="col-lg-12" action="" id="certificate">
        <h1>Certification</h1>
        <div className="col-lg-12">
         <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div className="form-group">
               <label>Certification Name</label><span className="danger">*</span><span id="fnamemsg" className="danger"></span>
                <input type="text" value={this.state.CertificationName} title="please Enter certificate name"ref="Name" id="CertificationName" name="CertificationName" id="fname" name1="text" className="form-control" onChange={this.handleChange.bind(this)} required />
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
               <label>Grade</label><span className="danger">*</span><span id="gnamemsg" className="danger"></span>
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



     



       {this.props.allcerti.map((certi,index)=>{
         return(

        <div>
      <div className="col-lg-12">
         <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div>
               <label>Certification Name</label>
                <div type="text"  name1="text">{certi.CertificationName} </div>
              </div>
            </div>


          <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div>
               <label>Issued By</label>
                <div type="text" name1="text">{certi.IssuedBy}</div>
              </div>
            </div>

         <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div>
               <label>Certified ON</label>
                <div type="text" name1="text">{certi.CertifiedOn}</div>
              </div>
            </div>
      </div>
           


          <div className="col-lg-12">
          <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div>
               <label>Valid till</label>
                <div type="Date"  name1="text">{certi.Validtill}</div>
              </div>
            </div>


          <div className=" col-md-4 col-sm-6 col-xs-12  ">
              <div>
               <label>Grade/Percentage</label>
                <div type="text"  name1="text">{certi.Grade} </div>
              </div>
            </div>
          </div>
        </div>
          


                 );
                })
              }
  </div>

      )
   }
}



export default certiContainer= withTracker(()=>{
 
  
  var CertiData = Meteor.subscribe("Certid");

  const Certid = CertiMaster.find({}).fetch()||[];
  console.log("Certid ",Certid);


  return {
    "allcerti"    : Certid,
    "loading"     : !CertiData.ready(),
  
  }

})(Certi);