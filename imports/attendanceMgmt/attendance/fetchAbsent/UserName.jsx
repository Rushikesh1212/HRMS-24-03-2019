import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { withTracker } from 'meteor/react-meteor-data';

// import { EmpMaster } from '/imports/attendanceMgmt/attendance/fetchAbsent/empMaster.js';
import DataAbsent from  '/imports/attendanceMgmt/attendance/fetchAbsent/DataAbsent.jsx';

import { Attendance } from '/imports/attendanceMgmt/attendanceSystem/MonthlyCalendar/apiGraphical.js';

import "./dataAbsent.css";


export default class UserName extends Component{
	constructor(props){
		super(props);
		var urlEmpId = FlowRouter.getParam("_id");
		if(urlEmpId){
			var action = "Update";
		}else{
			var action = "Submit";
		}

	this.state = {
			"empId" : urlEmpId,
			"action" : action,
			"firstName": "",
			"date": "",
			"day": "",
			"shift": "",
			"inTime": "",
			"outTime": "",
			"status": true,
			"userName":"",
		};
	}	
	getUserName(event)
	{
		event.preventDefault();
		this.setState({userName:this.refs.empName.value});
			

	}


	render(){

		

			return (

				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-primary text-center header">
				    		<h3> Absentee Attendance Record For Manager For Specific Employee </h3>
						</div>
					</div>
			

							 <div className="col-lg-10 col-md-2 col-sm-2 col-xs-2 form-group">
      							<p>Employee Name
      							<input type="employee" className="form-control" id="employee" ref="empName" placeholder="Xxxxx xxxx" name="employeename" onChange={this.getUserName.bind(this)}>
   								</input></p>
   									<DataAbsent  userName={this.state.userName}/>
      							</div>
    						
    				




						
				  	</div>

		  		
		);
	};
}


