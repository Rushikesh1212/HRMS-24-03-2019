import React,{Component} from 'react';

function Address(){

		return(
				<form>
					
         <div className=" col-md-12 col-sm-6 col-xs-12 ">
             <h2>Local Address</h2>
                <label> Address Line1</label>
                  <div className="form-group">
                	 <input type="text" name1="text" className="form-control" placeholder="" />
                  </div>
              </div>


         <div className=" col-md-12 col-sm-6 col-xs-12 ">
                <label> Address Line2</label>
                  <div className="form-group">
                	 <input type="text" name1="text" className="form-control" placeholder="" />
                  </div>
         </div>

          
          <div className=" col-md-12 col-sm-6 col-xs-12 ">
           <div className="row">
             <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label> District</label>
                  <div className="form-group">
                	 <input type="text" name1="text" className="form-control" placeholder="" />
                  </div>

              </div>

            <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label> Area/Suburb</label>
                  <div className="form-group">
                	 <input type="text" name1="text" className="form-control" placeholder="" />
                  </div>
              </div>


            <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label> State</label>
                  <div className="form-group">
                	 <input type="text" name1="text" className="form-control" placeholder="" />
                  </div>
              </div>


            <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label>Country</label>
                  <div className="form-group">
                	 <input type="text" name1="text" className="form-control" placeholder="" />
                  </div>
              </div>

            <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label>Pin Code</label>
                  <div className="form-group">
                	 <input type="text" name1="text" className="form-control" placeholder="" />
                  </div>
              </div>


            <div className=" col-md-4 col-sm-6 col-xs-12 ">
               <label>Resident Landline Number</label>
                  <div className="form-group">
                	 <input type="text" name1="text" className="form-control" placeholder="" />
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
export default Address