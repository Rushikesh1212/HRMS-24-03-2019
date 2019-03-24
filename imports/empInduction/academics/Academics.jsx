import React,{Component} from 'react';

import "/imports/empInduction/academics/Academics.css"

function Academics(){

		

	return(
 
       <form className="col-lg-12">
      
        
       	<h3 className="second">Educational Qualification</h3>  
         <div className="col-lg-12 second">
        	<div className=" col-md-4 col-sm-6 col-xs-12  ">
        	 <label>Qualification Level</label>
	           <select className="form-control" >
	              	<option>Post Graduate</option>
	              	<option>Under Graduate</option>
	             	<option>10+2</option>
	              	<option>10th</option>
	            </select>
         </div>



         <div className=" col-md-4 col-sm-6 col-xs-12  ">
            <label>Qualification</label>
             <input type="text" name1="text" className="form-control" placeholder="" />
         </div>


         <div className=" col-md-4 col-sm-6 col-xs-12  ">
            <label>Specialization</label>
             <input type="text" name1="text" className="form-control" placeholder="" />
         </div>
       </div>



       <div className="col-lg-12 second">
         <div className=" col-md-4 col-sm-6 col-xs-12  ">
            <label>Grade/Percentage</label>
             <input type="text" name1="text" className="form-control" placeholder="" />
         </div>



         <div className=" col-md-4 col-sm-6 col-xs-12  ">
            <label>Mode Of Academics</label>
              <select className="form-control" >
	              	<option>Full Time</option>
	              	<option>Part Time</option>
	             	<option>Distance</option>
	       
	            </select>
             
         </div>


         <div className=" col-md-4 col-sm-6 col-xs-12  ">
            <label>Passout Year</label>
             <input type="text" name1="text" className="form-control" placeholder="" />
         </div>

         </div>


      <div className="col-lg-12 second">
         
         <div className=" col-md-4 col-sm-6 col-xs-12  ">
            <label>College Name</label>
             <input type="text" name1="text" className="form-control" placeholder="" />
         </div>

         <div className=" col-md-4 col-sm-6 col-xs-12 second ">
            <label>University Name</label>
             <input type="text" name1="text" className="form-control" placeholder="" />
         </div>

         <div className=" col-md-4 col-sm-6 col-xs-12 second ">
            <label>City</label>
             <input type="text" name1="text" className="form-control" placeholder="" />
         </div>
      </div>

      <div className="col-lg-12">
        <div className=" col-md-4 col-sm-6 col-xs-12 second ">
            <label>State</label>
             <input type="text" name1="text" className="form-control" placeholder="" />
         </div>



       <div className=" col-md-4 col-sm-6 col-xs-12 second ">
        <label>Image Proof</label>
           
              <input type="file" placeholder="Upload profile photo" />
       </div>
        

       </div>

       <div className="col-lg-12  ">
      
          <div className="col-lg-1 col-lg-offset-11">
   
            <button className="btn submit pull-right">Submit</button>
          </div>
       
       </div>

      </form>


   )
}

	export default Academics
