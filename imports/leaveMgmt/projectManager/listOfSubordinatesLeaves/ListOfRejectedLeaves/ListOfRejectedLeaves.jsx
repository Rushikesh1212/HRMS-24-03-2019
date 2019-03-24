import React, {Component} from 'react';
import ReactTable from "react-table";
import swal from 'sweetalert';
import { withTracker } from 'meteor/react-meteor-data';


import 'react-table/react-table.css';
import "./ListOfRejectedLeaves.css";

import ListOfRejectedLeavesForm from "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/ListOfRejectedLeaves/ListOfRejectedLeavesForm/ListOfRejectedLeavesForm.jsx";
import { ListOfLeave } from "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/listOfSubordinatesLeaves.js";

class ListOfRejectedLeaves extends Component{
	constructor(props){
		super(props);
		this.state = {

			"recordIdModal" 		: "",
			"EmployeeId" 			: "",	
			"EmployeeName" 			: "Unknown",	
			"Department"			: "Unknown",
			"Designation"			: "Unknown",
			"LeaveType"				: "",
			"WorkingDays"			: "",
			"From"					: "",
			"To"					: "",
			"ReasonForLeaveRemark"	: "",
			"rowId"					: "",
			"isHidden"				: false,
			"status"				: "",
		};
				
	}

	deleteRejectedData(row)
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

	toggleHidden (row) 
	{
	    this.setState({
	    "rowId"	: row._id,
	      isHidden: true

	    })
  	}
  	getStatus(event)
  	{
		event.preventDefault();
		var row_id = this.state.recordIdModal;
		this.setState({	
			"status" 		: "Accepted",
		 });
		console.log("row_id::::",row_id);
		console.log("row_id::::",this.state.status);
		Meteor.call("updateStatusData",row_id,
										(error,result)=>{
											if(error){
												console.log("Something went wrong! Error = ", error);
											}else{
												swal("Congrats!","Settings Updated Successfully.","success");
											}
										});	

		
  	}
  	editModal(row){
		var rowId = row._id;
		console.log("rowId",row);

		this.setState({	
			"recordIdModal"				: row._id,	
			"EmployeeId" 				: row.empId,
			"EmployeeName" 				: row.leaveType,
			"Department" 				: row.remark,
			"Designation"				: row.remark,
			"LeaveType" 				: row.remark,
			"WorkingDays" 				: row.remark,
			"From" 						: row.fromDate,
			"To" 						: row.toDate,
			"ReasonForLeaveRemark" 		: row.remark,
		 });
	}

	// ================================Rendering Data========================

	render(){
		
  		const data = this.props.allRejectedData;	// Getting all data in rows of table.
  		console.log("Data::",data);

  		const columns = [

		  	{
		    Header: 'Emp ID',
		    accessor: 'empId',
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
		  	Header: 'Reason For Rejection',
		    accessor: ' ', 
		  	},
		  	{
		  	Header: 'View',
			Cell: row => 
			(
	    	<div className="actionDiv">
	          <div className="" onClick={() => this.toggleHidden(row.original)}>
				<i className="fa fa-eye"> </i>
	          </div>
	        </div>
		    )
		  	},
		  	{
		    Header: 'Action',
		    accessor: 'Action',
		    Cell: row => (
		    	<div className="actionDiv">
		          <div className="col-lg-6" onClick={() => this.deleteRejectedData(row.original)}>
 				    <i className="fa fa-trash"> </i>
		          </div>
		          <div className="col-lg-4" onClick={() => this.editModal(row.original)}>
				    <a href="#myModal" data-toggle="modal"><i className="fa fa-pencil"> </i></a>
		          </div>
		        </div>
		        )
        	}]
        	
		return (

			<div className="col-lg-12">			  			
				<div className="row">
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
					<ReactTable
						data={data}
						columns={columns}
						defaultPageSize={5}
						showPagination={true}
					/>
				</div>
				<div className="col-lg-12">
 				   { this.state.isHidden  ? <ListOfRejectedLeavesForm props={this.state.rowId}/> : null }
				</div>
			</div>

		);
	};


}
export default withTracker(()=>{
	

	const empSubHandle = Meteor.subscribe("allRejectedLeaves");
	const allRejectedLeaves = ListOfLeave.find({ $or: [ { status : "Rejected" }, { status : "rejected" } ] }).fetch({});

	console.log(allRejectedLeaves);
	return {
		"allRejectedData" 		: allRejectedLeaves,
	}
})(ListOfRejectedLeaves);
