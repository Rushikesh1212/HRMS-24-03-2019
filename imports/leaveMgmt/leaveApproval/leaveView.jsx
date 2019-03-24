import React, {Component} from "react";
import DatePicker from "react-datepicker";
import LeaveBalTable from "/imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.jsx"

export default class LeaveView extends Component{


	render(){

		return(
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<h1>Coming Soon Leave Details</h1>	
			</div>

			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<LeaveBalTable />
			</div>

			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
				</div>

				<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
				</div>

				<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
				</div>
			</div>
		)
	}
}