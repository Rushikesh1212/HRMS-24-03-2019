import React,{Component} from 'react';

function Contact(){

	return(

        <form className=" col-md-12 col-sm-6 col-xs-12 ">
          <h2>Contact Details</h2>
             <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label>Mobile *</label>
             <div className="form-group">
               <input type="text" name1="text" className="form-control" placeholder="" />
             </div>
           </div>

       <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label>Alternate Private Number *</label>
             <div className="form-group">
               <input type="text" name1="text" className="form-control" placeholder="" />
             </div>
           </div>


       <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label>Fax Number</label>
             <div className="form-group">
               <input type="text" name1="text" className="form-control" placeholder="" />
             </div>
        </div>



        <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label>Office Desk Direct Number</label>
             <div className="form-group">
               <input type="text" name1="text" className="form-control" placeholder="" />
             </div>
        </div>


        <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label>Office Desk Extension</label>
             <div className="form-group">
               <input type="text" name1="text" className="form-control" placeholder="" />
             </div>
        </div>


         <div className=" col-md-12 col-sm-6 col-xs-12 ">
            <div className="row">
              <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label>Official Mail ID</label>
                 <div className="form-group">
                  <input type="text" name1="text" className="form-control" placeholder="" />
             </div>
            </div>
          


            <div className="row">
              <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label>Official Mail ID</label>
                 <div className="form-group">
                  <input type="text" name1="text" className="form-control" placeholder="" />
             </div>
            </div>
          </div>

             </div>
            </div> 
              <div className="col-lg-12" >
           <button className="submit  btn pull-right">Submit</button>
         </div>
           </form>
			)
}
export default Contact