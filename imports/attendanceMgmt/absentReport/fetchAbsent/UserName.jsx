import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { withTracker } from 'meteor/react-meteor-data';


import DataAbsent from  '/imports/attendanceMgmt/absentReport/fetchAbsent/DataAbsent.jsx';

import { Attendance } from '/imports/attendanceMgmt/employeeViewModule/graphicalReport/MonthlyCalendar/apiGraphical.js';

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
						
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-primary text-center m-header">
				    		<h3> Absentee Attendance Record For Manager For Specific Employee </h3>
						</div>
					</div>
			

							 <div className="col-lg-10 col-md-2 col-sm-2 col-xs-2 m-form-group m-form-group">
      							<p>Employee Name
      							<input type="employee" className="m-form-control form-control" id="employee" ref="empName" placeholder="Xxxxx xxxx" name="employeename" onChange={this.getUserName.bind(this)}>
   								</input></p>
   									<DataAbsent  userName={this.state.userName}/>
      							</div>
    						
    				




						
				  	</div>

		  		
		);
	};
}


