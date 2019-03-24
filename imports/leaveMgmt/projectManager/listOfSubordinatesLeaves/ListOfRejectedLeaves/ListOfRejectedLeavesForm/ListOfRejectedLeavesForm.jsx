import React, {Component} from 'react';
import ReactTable from "react-table";
import swal from 'sweetalert';
import { withTracker } from 'meteor/react-meteor-data';


import 'react-table/react-table.css';
import "./ListOfRejectedLeavesForm.css";

import { ListOfLeave } from "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/listOfSubordinatesLeaves.js";


class ListOfRejectedLeavesForm extends Component{
	constructor(props){
		super(props);
		var recordId = FlowRouter.getParam("recordid");


		this.state = {
			"recordId" : recordId,
			"EmployeeId" : "",	
			"EmployeeName" : "Unknown",	
			"Department":"Unknown",
			"Designation":"Unknown",
			"LeaveType":"",
			"WorkingDays":"",
			"From":"",
			"To":"",
			"ReasonForLeaveRemark":"",
			"showReply"				:false,




		};

				
	}

	deleteSubordinateData(row)
	{
		console.log("Record To Delete:",row._id);	
		var rowId = row._id;

		swal({
		  title: "Are you sure you want to delete this Record?",
		  text: "Once deleted, you will not be able to recover this record!",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
				Meteor.call("deleteRejectedData",rowId,
										(error,result)=>{
											if(error){
												console.log("Something went wrong! Error = ", error);
											}else{
												swal("Congrats!","Settings Deleted Successfully.","success");
												console.log("latest id = ",result);
											
											}
										});

		  } 
		});			
	}
	updateData(row)
	{
		const data = this.props.allData;	// Getting all data in rows of table.

		var rowId = data._id;

		console.log("rowId",rowId);

		this.setState({	
			"EmployeeId"			: row.empId,	
			"EmployeeName" 			: row.leaveType,
			"Department"			: row.leaveType,
			"Designation"			: row.leaveType,
			"WorkingDays"			: row.numOfDays,
			"LeaveType"				: row.leaveType,
			"From"					: row.fromDate,
			"To"					: row.toDate,
			"ReasonForLeaveRemark" 	: row.remark,	

		 });

	}

// ================================Rendering Data========================

	render(){
		
  		const data = this.props.allData;	// Getting all data in rows of table.		
		return (

			<div className="col-lg-12">
				<div className="row">
					<div className="col-lg-12 viewOfLeave ">
						<div className="row">
							<h3 className="col-lg-12">Leave Request</h3>
							<form className="col-lg-10  formcontainer1 descTable">
								<div className="form-group col-lg-5 col-md-4 col-sm-6 ">
						    		<label className="fz16 col-lg-6 headLabel">Employee ID :: </label>
						    		<label className="fz16 col-lg-6">{data[0].empId} </label>

						    	</div>
						    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
						    		<label className="fz16 headLabel col-lg-6">Employee Name :: </label>
						    		<label className="fz16 col-lg-6">{data[0].EmployeeName}</label>
						    		
						    	</div>
								<div className="form-group col-lg-5 col-md-4 col-sm-6">
						    		<label className="fz16 headLabel col-lg-6">Department :: </label>
						    		<label className="fz16 col-lg-6">{data[0].Department} </label>
						    		
						    	</div>
						    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
						    		<label className="fz16 headLabel col-lg-6">Designation :: </label>
						    		<label className="fz16 col-lg-6">{data[0].Designation}</label>
						    		
						    	</div>
						    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
						    		<label className="fz16 headLabel col-lg-6">Leave Type :: </label>
						    		<label className="fz16 col-lg-6">{data[0].leaveType}</label>
						    		
						    	</div>
						    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
						    		<label className="fz16 headLabel col-lg-6">Working Days :: </label>
						    		<label className="fz16 col-lg-6">{data[0].numOfDays} </label>
						    		
						    	</div>
						    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
						    		<label className="fz16 headLabel col-lg-6">From :: </label>
						    		<label className="fz16 col-lg-6">{data[0].fromDate}</label>
						    	</div>
						    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
						    		<label className="fz16 headLabel col-lg-6">To :: </label>
						    		<label className="fz16 col-lg-6">{data[0].toDate} </label>
						    	</div>
						    	<div className="form-group col-lg-12 col-md-4 col-sm-6">
						    		<label className="fz16 headLabel col-lg-6">Reason for Leave/ Remark :: </label>
						    		<label className="fz16 col-lg-6">{data[0].remark} </label>
						    	</div>
							</form>
						</div>
 					</div>	
				</div>
			</div>		
		);
	};
}
export default withTracker((event)=>{
	
	var getData = event.props;
	const empSubHandle = Meteor.subscribe("allRecordData");
	const allEmpData = ListOfLeave.find({"_id" : getData}).fetch()||[{}];
	return {
		"allData" 		: allEmpData,
	}
})(ListOfRejectedLeavesForm);
