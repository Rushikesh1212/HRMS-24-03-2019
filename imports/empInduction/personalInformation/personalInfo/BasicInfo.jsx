import React from 'react';

import './BasicInfo.css'
function BasicInfo(){


	return(

        <div className="row">
          <form className="col-lg-12">
          <div className=" col-md-12 col-sm-12 col-xs-12 ">
            <div className=" col-md-4 col-sm-6 col-xs-12 ">
              <img src="/images/profile.png" className="img-responsive img-circle imgProfile"/>
              <input type="file" placeholder="Upload profile photo" />
            </div>
          </div>

	         <h2>Personal Information</h2>
	           
                 <div className=" col-md-4 col-sm-6 col-xs-12 ">
                   <label> First Name</label>
                	<div className="form-group">
                	 <input type="text" name1="text" className="form-control" placeholder="" />
                  </div>
              </div>

         <div className=" col-md-4 col-sm-6 col-xs-12 ">
             <label>Middle Name</label>
               <div className="form-group">
                <input type="text" name1="text" className="form-control" placeholder="" />
              </div>
         </div>

         <div className=" col-md-4 col-sm-6 col-xs-12 ">
             <label>Last Name</label>
               <div className="form-group">
                <input type="text" name1="text" className="form-control" placeholder="" />
              </div>
         </div>


         <div className=" col-md-4 col-sm-6 col-xs-12 ">
             <label>Date Of Birth</label>
               <div className="form-group">
                <input type="date" name1="text" className="form-control" placeholder="" />
              </div>
         </div>


         <div className=" col-md-4 col-sm-6 col-xs-12 ">
             <label>Age</label>
               <div className="form-group">
                <input type="text" name1="text" className="form-control" placeholder="" />
              </div>
         </div>


         <div className=" col-md-4 col-sm-6 col-xs-12 ">
           <label>Gender</label>
             <div className="checkbox">
               <label className="checkbox-inline"><input type="checkbox" value=""/>Male</label>
				<label className="checkbox-inline"><input type="checkbox" value=""/>Female</label>
             </div>
         </div>


       <div className=" col-lg-12 col-sm-6 col-xs-12 ">
        <div className="row">
         <div className=" col-md-4 col-sm-6 col-xs-12 ">
             <label>Marital Status</label>
               <div className="form-group">
                 <select className="form-control">
              			<option>Married</option>
              			<option>Single</option>
              			<option>Divorced</option>
              			<option>Separated</option>
                </select>
             </div>
           </div>
         


        <div className=" col-md-4 col-sm-6 col-xs-12 ">
             <label>Anniversary Date</label>
               <div className="form-group">
                 <input type="text" name1="text" className="form-control" placeholder="" />
             </div>
         </div>

         
         <div className=" col-md-4 col-sm-6 col-xs-12 ">
           <label>Languages</label>

             <div className=" col-md-12 col-sm-6 col-xs-12 "> 
            <select className="mdb-select md-form colorful-select dropdown-primary" multiple searchable="Search here..">
				  <option value="" disabled > Select Languages</option>
				  <option value="1">Enlish</option>
				  <option value="2">Hindi</option>
				  <option value="3">Marathi</option>
				  
           </select>  
          </div>
         </div>

          <div className=" col-md-4 col-sm-6 col-xs-12 ">
             <label>Nationality</label>
               <div className="form-group">
                 <select className="form-control">
              			<option>Indian</option>
              			<option>Others</option>
                </select>
             </div>
           </div>


            <div className=" col-md-4 col-sm-6 col-xs-12 ">
             <label>Religion</label>
               <div className="form-group">
                 <select className="form-control">
              			<option>Hindu</option>
              			<option>5454</option>
                </select>
             </div>
           </div>       
           </div>
        </div>
	   


          
       <div className="col-lg-12" >
           <button className="submit  btn pull-right">Submit</button>
         </div>
       
	 </form>
  </div>
 
  )
}
export default BasicInfo