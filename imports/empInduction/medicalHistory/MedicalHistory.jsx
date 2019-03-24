import React from 'react';
import "/imports/empInduction/medicalHistory/MedicalHistory.css";

function MedicalHistory(){


	return(

	    <div >
      

	         <h2>Medical History</h2>
	           <form className="col-lg-12">
                 <div className=" col-md-3 col-sm-6 col-xs-12 ">
                   <label> Height</label>
                	<div className="form-group">
                	 <input type="text" name1="text" className="form-control" placeholder="" />
                  </div>
              </div>

         <div className=" col-md-3 col-sm-6 col-xs-12 ">
             <label>Weight</label>
               <div className="form-group">
                <input type="text" name1="text" className="form-control" placeholder="" />
              </div>
         </div>

         <div className=" col-md-3 col-sm-6 col-xs-12 ">
             <label>Complexion</label>
               <div className="form-group">
                <input type="text" name1="text" className="form-control" placeholder="" />
              </div>
         </div>

         

         <div className=" col-md-3 col-sm-6 col-xs-12 ">
             <label>Blood Group</label>
               <div className="form-group">
                 <select className="form-control">
              			<option>O+</option>
              			<option>O-</option>
              			<option>B_</option>
                </select>
             </div>
         </div>

	     </form>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12 data">
	       <label>Please list and date any major illness,injury,surery,and/or hospitalization</label>
	     </div>

	    <div className="col-md-6 col-sm-6 col-xs-12 data">
	     <input type="text" name1="text" className="form-control line " placeholder="" />

	    </div>
	  </div>
    <div className="col-lg-12" >
           <button className="submit  btn pull-right">Submit</button>
         </div>
	 </div>

	 



		)
} 
export default MedicalHistory