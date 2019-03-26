import React, {Component} from "react";
import DatePicker from "react-datepicker";
import LeaveBalTable from "/imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.jsx"

import "/client/form.css";
import "/imports/leaveMgmt/leaveApproval/leaveApproval.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactTable from "react-table";
import 'react-table/react-table.css'

import { LeaveApproval } from "/imports/leaveMgmt/leaveApproval/leaveapproval.js";

import  CurrentHolidays from "/imports/leaveMgmt/LocationWiseHolidays/CurrentHolidays/CurrentHolidays.jsx";

export default class LeaveApprovalForm extends Component{


	constructor(props) {
    super(props);
    this.state = {
      from: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }
 
  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }

  submitleaveapprovalform(event){
  	event.preventDefault();
  	var leave = {
  		"lt"   : this.refs.lt.value,
  		"from" : this.refs.from.value,
  		"to"   : this.refs.to.value,
  		"nwd"  : this.refs.nwd.value,
  		"rsn"  : this.refs.rsn.value,
  	};

  	Meteor.call("insertleaveform",leave, 
  		(error,result)=>{
  			if(error){
  				console.log("something went wrong", error);
  			}else{
  				console.log("congratulations", result);
  			}
  		}
  	);

  }

  submitodpprovalform(event){
  	event.preventDefault();
  	var leave1 = {
  		"date"   : this.refs.date.value,
  		"intime" : this.refs.intime.value,
  		"outtime"   : this.refs.outtime.value,
  		"rsn1"  : this.refs.rsn1.value,
  	};

  	Meteor.call("insertodleaveform",leave1, 
  		(error,result)=>{
  			if(error){
  				console.log("something went wrong", error);
  			}else{
  				console.log("congratulations", result);
  			}
  		}
  	);

  }

  submitslapprovalform(event){
  	event.preventDefault();
  	var leave2 = {
  		"date1"   : this.refs.date1.value,
  		"intime1" : this.refs.intime1.value,
  		"rsn2"  : this.refs.rsn2.value,
  	};

  	Meteor.call("insertslleaveform",leave2, 
  		(error,result)=>{
  			if(error){
  				console.log("something went wrong", error);
  			}else{
  				console.log("congratulations", result);
  			}
  		}
  	);

  }

  componenDidMount(){
  	$('#fromDate').datepicker({
      dateFormat:'mm/dd/yy',
      from : new Date(),
      // autoclose : true,
      clearBtn  : true,
    });
  }


	render(){

		console.log("this.state.from = ",this.state.from);		


		return(

			<div>
				<h3>Leave Forms</h3>
			  <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nav nav-tabs">
			    {/*<li className="active"><a href="#">Home</a></li>*/}
			    <li className="col-lg-4 text-center fz14 fontF"><a data-toggle="tab" href="#leaveForm">Leave Form</a></li>
			    <li className="col-lg-4 text-center fz14 fontF"><a data-toggle="tab" href="#ODForm">Outdoor Duty Form</a></li>
			    <li className="col-lg-4 text-center fz14 fontF"><a data-toggle="tab" href="#SLForm">Short Leave Form</a></li>
			  </ul>

			  <div className="tab-content col-lg-9 col-md-9 col-sm-12 col-xs-12">
{/*------------------------------------------------------------------------------------
																			Leave Approval Form
---------------------------------------------------------------------------------------*/}
			  
			  	<form id="leaveForm" className="tab-pane fade in active col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30">
				  	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					  	<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 form-group">
							  <label for="sel1" className="fz16 fontF">Select Leave Type</label>
							  <select className="h40 inputBox form-control" ref="lt" id="sel1">
							    <option>Privelge Leave</option>
							    <option>Sick Leave</option>
							    <option>Casual Leave</option>
							    <option>Maternity Leave</option>
							    <option>Leave Without Pay</option>
							  </select>
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">From Date</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" ref="from" type="date" className="h40 br97 form-control"/>
				           </div>
				        </div>
							</div>
							
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">To Date</label>
				          <div className="input-group datetime6picker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="toDate" ref="to" className="h40 br97 form-control" type="date"/>
				           </div>
				        </div>								
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
								<label for="usr" className="fz16 fontF">Number of woking days</label>
	  							<input type="text" className="h40 br97 form-control" ref="nwd" id="usr" />
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="form-group">
								  <label for="comment" className="fz16 fontF">Reason</label>
								  <textarea className="inputBox form-control" ref="rsn" rows="5" id="comment"></textarea>
								</div>								
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<button type="submit" className="submitCss col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right" onClick={this.submitleaveapprovalform.bind(this)}>Submit</button>							
							</div>
						</div>

					</form>

{/*------------------------------------------------------------------------------------
																			Outdoor Duty Form
---------------------------------------------------------------------------------------*/}

					<form id="ODForm" className="tab-pane fade in col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30">
				  	{/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">*/}
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">Date</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" ref="date" id="idInput" className="h40 br97 form-control" type="date"/>
				           </div>
				        </div>
							</div>
							
						{/*<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz14 fontF">To</label>
				          <div className="input-group datetimepicker">
				             <span className="br97 brn input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="inputBox set-due-date form-control" type="text"/>
				           </div>
				        </div>								
							</div>
						</div>*/}


						{/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">*/}
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">In Time</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-clock-o"></i></span>
				             <input name="idInput" ref="intime" id="idInput" className="h40 inputBox set-due-date form-control" type="time"/>
				           </div>
								</div>	
							</div>	
							{/*</div>*/}
							
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">						
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">Out Time</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-clock-o"></i></span>
				             <input name="idInput" ref="outtime" id="idInput" className="h40 inputBox set-due-date form-control" type="time"/>
				           </div>
				        </div>								
							</div>
						{/*</div>*/}

							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="form-group">
								  <label for="comment" className="fz16 fontF">Reason</label>
								  <textarea className="inputBox form-control" rows="5" ref="rsn1" id="comment"></textarea>
								</div>								
							</div>

							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<button type="submit" className="submitCss col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right" onClick={this.submitodpprovalform.bind(this)}>Submit</button>							
							</div>
					

					</form>
{/*------------------------------------------------------------------------------------
																			Sick Leave Form
---------------------------------------------------------------------------------------*/}
					<form id="SLForm" className="tab-pane fade in col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30">

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">Date</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" ref="date1" id="idInput" className="h40 br97 form-control" type="date"/>
				           </div>
				        </div>
							</div>

				  	{/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">*/}
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">In Time</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-clock-o"></i></span>
				             <input name="idInput" ref="intime1" id="idInput" className="h40 inputBox set-due-date form-control" type="time"/>
				           </div>
				        </div>
							</div>
							
							{/*<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz14 fontF">Out Time</label>
				          <div className="input-group datetimepicker">
				             <span className="br97 brn input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="inputBox set-due-date form-control" type="text"/>
				           </div>
				        </div>								
							</div>*/}
						</div>


						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="form-group">
								  <label for="comment" className="fz16 fontF">Reason</label>
								  <textarea className="inputBox form-control" ref="rsn2" rows="5" id="comment"></textarea>
								</div>								
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<button type="submit" className="submitCss col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right" onClick={this.submitslapprovalform.bind(this)}>Submit</button>							
								</div>		
						</div>
					</form>
			  </div>

{/*-------------------------------------------------------------------------------------
																	Company Holiday Block
---------------------------------------------------------------------------------------*/}			  
			  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			  <div className="row">
			
			  		<CurrentHolidays/>
			  	</div>
			 	</div>

{/*-------------------------------------------------------------------------------------
																	Leave Table
---------------------------------------------------------------------------------------*/}			  
			  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb30 mt30">
					   
			  		<h4>Leave Balance Table</h4>
					   <LeaveBalTable />
					
			  </div>
			</div>


			);
			


	};

}