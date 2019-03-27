import React, {Component} from "react";
import DatePicker from "react-datepicker";
import ReactTable from "react-table";


import "/client/form.css";
import "/imports/leaveMgmt/leaveApproval/leaveApproval.css";
import "react-datepicker/dist/react-datepicker.css";
import 'react-table/react-table.css'

import { LeaveApproval } from "/imports/leaveMgmt/leaveApproval/leaveapproval.js";
import LeaveBalTable from "/imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.jsx"
import  CurrentHolidays from "/imports/leaveMgmt/LocationWiseHolidays/CurrentHolidays/CurrentHolidays.jsx";

export default class LeaveApprovalForm extends Component
{
	constructor(props) {
    super(props);
    this.state = {

        "from"				: "",
        "leaveType"			: "",
  		"fromDate" 			: "",
  		"toDate"   			: "",
  		"numOfDays"			: "",
  		"remark"  			: "",
  		"seletctedLeave"	: "",
  		"outDoorDate"   	: "",
  		"outDoorIntime" 	: "",
  		"outDoorOuttime"  	: "",
  		"outDoorReason" 	: "",
  		"shortLeaveDate"	: "",
  		"shortLeaveIntime"	: "",
  		"shortLeaveReason"  : "",

    };
   }

  submitleaveapprovalform(event)
  {
  	event.preventDefault();
  	var leave = {

  		"leaveType" : this.refs.lt.value,
  		"fromDate" 	: this.refs.from.value,
  		"toDate"   	: this.refs.to.value,
  		"numOfDays"	: this.refs.nwd.value,
  		"remark"  	: this.refs.rsn.value,
  	};

  	this.setState({

        "leaveType"	: '',
  		"fromDate" 	: '',
  		"toDate"   	: '',
  		"numOfDays"	: '',
  		"remark"  	: '',

    });

  	Meteor.call("insertleaveform",leave, 
  		(error,result)=>
  		{
  			if(error)
  			{
  				console.log("something went wrong", error);
  			}else{
  				swal("Congrats!","Your Information Submitted Successfully.","success");
				console.log("latest id = ",result);
  			}
  		}
  	);
  
  }

  submitodpprovalform(event)
  {
  	event.preventDefault();
  	var outDoor = {

  		"outDoorDate"   	: this.refs.date.value,
  		"outDoorIntime" 	: this.refs.intime.value,
  		"outDoorOuttime"  	: this.refs.outtime.value,
  		"outDoorReason" 	: this.refs.rsn1.value,
  	};

  	this.setState(
  	{
  		"outDoorDate"   	: "",
  		"outDoorIntime" 	: "",
  		"outDoorOuttime"  	: "",
  		"outDoorReason" 	: "",
  	});

  	Meteor.call("insertodleaveform",outDoor, 
  		(error,result)=>{
  			if(error){
  				console.log("something went wrong", error);
  			}else{
  				swal("Congrats!","Your Information Submitted Successfully.","success");
				console.log("latest id = ",result);
  			}
  		}
  	);
  }

  submitslapprovalform(event)
  {
  	event.preventDefault();
  	var shortLeave = {

  		"shortLeaveDate"	: this.refs.date1.value,
  		"shortLeaveIntime"	: this.refs.intime1.value,
  		"shortLeaveReason"  : this.refs.rsn2.value,
  	};

	this.setState(
  	{
  		"shortLeaveDate"	: "",
  		"shortLeaveIntime"	: "",
  		"shortLeaveReason"  : "",
  	});

  	Meteor.call("insertslleaveform",shortLeave, 
  		(error,result)=>{
  			if(error){
  				console.log("something went wrong", error);
  			}else{
  				swal("Congrats!","Your Information Submitted Successfully.","success");
				console.log("latest id = ",result);
  			}
  		}
  	);

  }
  componenDidMount()
  {
  	$('#fromDate').datepicker({
      dateFormat:'mm/dd/yy',
      from : new Date(),
      clearBtn  : true,
    });
  }

  handleChange1(event)
  {
	event.preventDefault();
	this.setState(
	{
		"leaveType" 		: this.refs.lt.value,
		"fromDate" 			: this.refs.from.value,
		"toDate"   			: this.refs.to.value,
		"numOfDays"			: this.refs.nwd.value,
		"remark"  			: this.refs.rsn.value,
		"outDoorDate"   	: this.refs.date.value,
  		"outDoorIntime" 	: this.refs.intime.value,
  		"outDoorOuttime"  	: this.refs.outtime.value,
  		"outDoorReason" 	: this.refs.rsn1.value,
  		"shortLeaveDate"	: this.refs.date1.value,
  		"shortLeaveIntime"	: this.refs.intime1.value,
  		"shortLeaveReason"  : this.refs.rsn2.value,
	});
			
	}

	render()
	{
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
{/*--------------------------------------------------------------------------------------------------------------------------------
																			Leave Approval Form
-----------------------------------------------------------------------------------------------------------------------------------*/}
			  
			  	<form id="leaveForm" className="tab-pane fade in active col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30">
				  	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					  	<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 form-group">

							<label for="sel1" className="fz16 fontF">Select Leave Type</label>

							<select className="h40 inputBox form-control" ref="lt" id="sel1" onChange={this.handleChange1.bind(this)}>
							  	<option value="Privilege Leave">Privilege Leave</option>
								<option value="Sick Leave">Sick Leave</option>
								<option value="Casual Leave">Casual Leave</option>
								<option value="Maternity Leave">Maternity Leave</option>
								<option value="Expat Leave">Expat Leave</option>
								<option value="Transfer Leave">Transfer Leave</option>
								<option value="Special Leave">Special Leave</option>
							</select>


							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">From Date</label>
				          <div className="input-group datetimepicker h40">

				             <span className="br97 brn input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" ref="from"  value={this.state.fromDate} type="date" className="h40 br97 form-control" onChange={this.handleChange1.bind(this)}/>

				           </div>
				        </div>
							</div>
							
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">To Date</label>
				          <div className="input-group datetime6picker h40">

				             <span className="br97 brn input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="toDate" ref="to" value={this.state.toDate} className="h40 br97 form-control" type="date" onChange={this.handleChange1.bind(this)}/>

				           </div>
				        </div>								
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
								<label for="usr" className="fz16 fontF">Number of woking days</label>
	  							<input type="text" className="h40 br97 form-control" ref="nwd"  value={this.state.numOfDays} id="usr" onChange={this.handleChange1.bind(this)}/>
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="form-group">
								  <label for="comment" className="fz16 fontF">Reason</label>
								  <textarea className="inputBox form-control" ref="rsn" value={this.state.remark} rows="5" id="comment" onChange={this.handleChange1.bind(this)}></textarea>
								</div>								
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<button type="submit" className="submitCss col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right" onClick={this.submitleaveapprovalform.bind(this)}>Submit</button>							
							</div>
						</div>

					</form>

{/*-------------------------------------------------------------------------------------------------------------------------------------
																			Outdoor Duty Form
--------------------------------------------------------------------------------------------------------------------------------------*/}

					<form id="ODForm" className="tab-pane fade in col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30">
				  	{/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">*/}
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">Date</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" ref="date" value={this.state.outDoorDate} id="idInput" className="h40 br97 form-control" type="date" onChange={this.handleChange1.bind(this)}/>
				           </div>
				        </div>
							</div>

							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">In Time</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-clock-o"></i></span>
				             <input name="idInput" ref="intime" value={this.state.outDoorIntime} id="idInput" className="h40 inputBox set-due-date form-control" type="time" onChange={this.handleChange1.bind(this)}/>
				           </div>
								</div>	
							</div>	
							{/*</div>*/}
							
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">						
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">Out Time</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-clock-o"></i></span>
				             <input name="idInput" ref="outtime" value={this.state.outDoorOuttime} id="idInput" className="h40 inputBox set-due-date form-control" type="time" onChange={this.handleChange1.bind(this)}/>
				           </div>
				        </div>								
							</div>
						{/*</div>*/}

							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="form-group">
								  <label for="comment" className="fz16 fontF">Reason</label>
								  <textarea className="inputBox form-control" rows="5" ref="rsn1" value={this.state.outDoorReason} id="comment" onChange={this.handleChange1.bind(this)}></textarea>
								</div>								
							</div>

							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<button type="submit" className="submitCss col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right" onClick={this.submitodpprovalform.bind(this)}>Submit</button>							
							</div>
					

					</form>
{/*---------------------------------------------------------------------------------------------------------------------------------
																			Sick Leave Form
----------------------------------------------------------------------------------------------------------------------------------*/}
					<form id="SLForm" className="tab-pane fade in col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30">

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">Date</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" ref="date1" value={this.state.shortLeaveDate} id="idInput" className="h40 br97 form-control" type="date" onChange={this.handleChange1.bind(this)}/>
				           </div>
				        </div>
							</div>

			
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput" className="fz16 fontF">In Time</label>
				          <div className="input-group datetimepicker h40">
				             <span className="br97 brn input-group-addon"><i className="fa fa-clock-o"></i></span>
				             <input name="idInput" ref="intime1" value={this.state.shortLeaveIntime} id="idInput" className="h40 inputBox set-due-date form-control" type="time" onChange={this.handleChange1.bind(this)}/>
				           </div>
				        </div>
							</div>

						</div>


						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="form-group">
								  <label for="comment" className="fz16 fontF">Reason</label>
								  <textarea className="inputBox form-control" ref="rsn2" value={this.state.shortLeaveReason} rows="5" id="comment" onChange={this.handleChange1.bind(this)}></textarea>
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

{/*------------------------------------------------------------------------------------------------------------------
																	Company Holiday Block
---------------------------------------------------------------------------------------------------------------------*/}			  
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