/*==========================================================================================

	Module Name    : Leave Management System.
	Component Name : List of subordinates leaves ( Reporting Manager )
 	Developer Name : Priyanka Lewade
 	Date           : 22-03-2019

=============================================================================================*/

import React, {Component} from 'react';
import ReactTable from "react-table";
import swal from 'sweetalert';
import { withTracker } from 'meteor/react-meteor-data';

import 'react-table/react-table.css';
import "./ListOfSubordinatesLeaves.css";

import { LeaveApproval } from "/imports/leaveMgmt/leaveApproval/leaveapproval.js";
import ListOfRejectedLeaves from "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/ListOfRejectedLeaves/ListOfRejectedLeaves.jsx";
import ListOfSubordinatesLeavesForm from "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/ListOfSubordinatesLeavesForm/ListOfSubordinatesLeavesForm.jsx";

class ListOfSubordinatesLeaves extends Component
{
	constructor(props)
	{
		super(props);
		var recordId = FlowRouter.getParam("recordid");


		this.state = {
			"recordId"	 			: recordId,
			"rowId"					: "",
			"EmployeeId" 			: "",	
			"EmployeeName"			: "",	
			"Department"			: "",
			"Designation"			: "",
			"LeaveType"				: "",
			"WorkingDays"			: "",
			"From"					: "",
			"To"					: "",
			"ReasonForLeaveRemark"	: "",
    		"isHidden"				: false,
		};			
	}

	deleteSubordinateData(row)
	{
		var checkId = this.state.rowId;
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
				Meteor.call("deleteLeaveData",rowId,
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
		
  	getStatus(event)
  	{
		event.preventDefault();
		var row_id = this.state.recordIdModal;
		this.setState(
		{	
			"status" 		: "ACCEPTED",
		});

		var formValues = 
		{
			status 	: 	this.state.status,
			row_id 	: 	this.state.recordIdModal,
  		
  		};
		Meteor.call("updateStatusData",formValues,
										(error,result)=>{
											if(error){
												console.log("Something went wrong! Error = ", error);
											}else{
												swal("Congrats!","Settings Updated Successfully.","success");
											}
										});	

		
  	}
  	getRejectStatus(event)
  	{
		event.preventDefault();
		var row_id = this.state.recordIdModal;
		this.setState({	
			"status" 		: "REJECTED",
		 });
		var formValues = 
		{
			status 	: 	this.state.status,
			row_id 	: 	this.state.recordIdModal,
  		
  		};
		Meteor.call("updateStatusData",formValues,
										(error,result)=>{
											if(error){
												console.log("Something went wrong! Error = ", error);
											}else{
												swal("Congrats!","Settings Updated Successfully.","success");
											}
										});	

		
  	}
  	editModal(row)
  	{
		var rowId = row._id;
		console.log("rowId",row);

		this.setState(
		{	
			"recordIdModal"				: row._id,	
			"EmployeeId" 				: row.empId,
			"EmployeeName" 				: row.empName,
			"Department" 				: row.empDepartment,
			"Designation"				: row.empDesignation,
			"LeaveType" 				: row.leaveType,
			"WorkingDays" 				: row.numOfDays,
			"From" 						: row.fromDate,
			"To" 						: row.toDate,
			"ReasonForLeaveRemark" 		: row.remark,
		});
	}


// ================================Rendering Data========================

	render()
	{
  		const data = this.props.allData;	// Getting all data in rows of table.
  		const columns = [
		  	{
		    Header: 'Emp ID',
		    accessor: '101',
		  	},
		  	{
		    Header: 'Emp Name',
		    accessor: 'empName',
		  	},
		  	{
		    Header: 'Leave Type',
		    accessor: 'leaveType',
		  	},
		  	{
		  	Header: 'From Date',
		    accessor: 'fromDate', 
		  	},
		  	{
		  	Header: 'To Date',
		    accessor: 'toDate', 
		  	},
		  	{
		  	Header: 'No. of Days',
		    accessor: 'numOfDays', 
		  	},		  	
		  	{
		  	Header: 'Remark',
		    accessor: 'remark', 
		  	},		  	
		  	{
		  	Header: 'Status',
		    accessor: 'status', 
		  	},
		  	{
		  	Header: 'Action',
			Cell: row => 
			(
	    	<div className="actionDiv col-lg-12">
  	          <div className="col-lg-6" onClick={() => this.editModal(row.original)}>
				    <a href="#myModal" data-toggle="modal"><i className="fa fa-pencil"> </i></a>
	          </div>
	          <div className="col-lg-6" onClick={() => this.deleteSubordinateData(row.original)}>
				<i className="fa fa-trash"> </i>
	          </div>
	        </div>
		    )		  	
		    },
        ]
        	
		return (
		
			<div className="col-lg-12">
				<div className="row">

		    		<div className="col-lg-12 tabs">
			    		<ul className="nav nav-tabs">
					    	<li className="active"><a data-toggle="tab" href="#leaveTable">List Of Leave</a></li>
					    	<li><a data-toggle="tab" href="#rejectedLeaves">List Of Rejected Leaves</a></li>
					  	</ul>

					  	<div className="col-lg-12 modalContainer">
						<div className="modal fade " id="myModal" role="dialog">
						    <div className="modal-dialog heightBig modal-lg">
						    	<div className="modal-content heightBig">
							        <div className="modal-header">
							          <button type="button" className="close" data-dismiss="modal">&times;</button>
							          <h3 className="col-lg-12">Leave Request</h3>
							          <div className="col-lg-12 formHead">
								    		<div className="row">
												<form className="col-lg-12  formcontainer1 descTable">
													<div className="form-group col-lg-5 col-md-4 col-sm-6 ">
											    		<label className="fz14 col-lg-6 headLabel">Employee ID :: </label>
											    		<label className="fz14 col-lg-6">{this.state.EmployeeId} </label>

											    	</div>
											    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
											    		<label className="fz14 headLabel col-lg-6">Employee Name :: </label>
											    		<label className="fz14 col-lg-6">{this.state.EmployeeName}</label>
											    		
											    	</div>
													<div className="form-group col-lg-5 col-md-4 col-sm-6">
											    		<label className="fz14 headLabel col-lg-6">Department :: </label>
											    		<label className="fz14 col-lg-6"> {this.state.Department}</label>
											    		
											    	</div>
											    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
											    		<label className="fz14 headLabel col-lg-6">Designation :: </label>
											    		<label className="fz14 col-lg-6">{this.state.Designation}</label>
											    		
											    	</div>
											    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
											    		<label className="fz14 headLabel col-lg-6">Leave Type :: </label>
											    		<label className="fz14 col-lg-6">{this.state.LeaveType}</label>
											    		
											    	</div>
											    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
											    		<label className="fz14 headLabel col-lg-6">Working Days :: </label>
											    		<label className="fz14 col-lg-6">{this.state.WorkingDays}</label>
											    		
											    	</div>
											    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
											    		<label className="fz14 headLabel col-lg-6">From :: </label>
											    		<label className="fz14 col-lg-6">{this.state.From}</label>
											    	</div>
											    	<div className="form-group col-lg-5 col-md-4 col-sm-6">
											    		<label className="fz14 headLabel col-lg-6">To :: </label>
											    		<label className="fz14 col-lg-6"> {this.state.To}</label>
											    	</div>
											    	<div className="form-group col-lg-12 col-md-4 col-sm-6">
											    		<label className="fz14 headLabel col-lg-6">Reason for Leave/ Remark :: </label>
											    		<label className="fz14 col-lg-6">{this.state.ReasonForLeaveRemark}</label>
											    	</div>
											    	<div className="form-group col-lg-12 col-md-4 col-sm-6">
														
														<button className="col-lg-2 col-md-4 col-sm-6 btn submitbtn btn-primary" onClick={this.getStatus.bind(this)}>Accept</button>
														<button className="col-lg-2 col-md-4  col-lg-offset-1 col-sm-6 btn submitbtn btn-primary" onClick={this.getRejectStatus.bind(this)}>Reject</button>
											    		<button type="button" className="btn btn-default col-lg-2  col-lg-offset-1 col-md-4 col-sm-6 " data-dismiss="modal">Close</button>

											    	</div>
												</form>
								    		</div>
								    	</div>

							        </div> 
							        <div className="modal-body">
							        	
         							</div>
        							<div className="modal-footer">
      								</div>
						      </div>
						      
						    </div>
  						</div>
					</div>
				  	
				  		<div className="tab-content">
				  			<div className="tab-pane fade in active" id="leaveTable">
				  				<h3 className="centerText"> List of Leaves Applied by sub-ordinates </h3> 

								<div className="descTable tab-pane fade in active col-lg-12">	
									<ReactTable
    									data={data}
    									columns={columns}
    									defaultPageSize={5}
    									showPagination={true}
 									/>
 								</div>
 							</div>		

							<div className="tab-pane fade in" id="rejectedLeaves">
								<div className="descTable tab-pane fade in col-lg-12">
									
									<ListOfRejectedLeaves  />

 								</div>
							</div>
						</div>
					</div>		
				</div>
			</div>		
		);
	};
}
export default withTracker(()=>
{	
	const empSubHandle = Meteor.subscribe("leaveData");
	const allEmpData = LeaveApproval.find({}).fetch()||[{}];
	console.log(allEmpData);
	return {

		"allData" 		: allEmpData,
	}
})(ListOfSubordinatesLeaves);
