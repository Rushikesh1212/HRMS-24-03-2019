import React, {Component} from 'react';
import ReactTable from "react-table";
import swal from 'sweetalert';
import { withTracker } from 'meteor/react-meteor-data';
import Table from 'react-bootstrap/Table'
import "./LeaveBal.css";
import 'react-table/react-table.css';

import { LeaveApproval } from "/imports/leaveMgmt/leaveApproval/leaveapproval.js";

import { LeaveMgmt } from "/imports/leaveMgmt/adminSettings/LeavePolicy/leavePolicySettings.js";


class LeaveBal extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {

			"rowId"						: "",
			"EmployeeId" 				: "",	
			"EmployeeName"				: "Unknown",	
			"Department"				: "Unknown",
			"Designation"				: "Unknown",
			"WorkingDays"				: "",
			"LeaveType"					: "",
			"From"						: "",
			"To"						: "",
			"LeaveTypeModal"			: "",
			"WorkingDaysModal"			: "",
			"FromModal"					: "",
			"ToModal"					: "",
			"ReasonForLeaveRemarkModal"	: "",
			"seletctedLeaveModal"		: "",
		};
				
	}

	updateBalData(event)
	{
		event.preventDefault();
		var formValues = {
			recordIdModal					: this.state.rowId,	
			LeaveTypeModal 					: this.state.seletctedLeaveModal,
			WorkingDaysModal				: this.refs.WorkingDaysModal.value,
			FromModal						: this.refs.FromModal.value,
			ToModal							: this.refs.ToModal.value,
			ReasonForLeaveRemarkModal 		: this.refs.ReasonForLeaveRemarkModal.value,
		};
		console.log("");

			Meteor.call("updateBalData",formValues,
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
		console.log("rowId",row.leaveType);

		this.setState({	
			"rowId"								: row._id,	
			"LeaveTypeModal" 					: row.leaveType,
			"WorkingDaysModal" 					: row.numOfDays,
			"FromModal" 						: row.fromDate,
			"ToModal"							: row.toDate,
			"ReasonForLeaveRemarkModal" 		: row.remark,
		 });
			console.log("LeaveTypeModal",this.state.LeaveTypeModal);

	}

	deleteBalData(row)
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
	
	handleChangeModal(event)
	{
		event.preventDefault();
		this.setState({	
			"recordIdModal"						: this.state.rowId,	
			"LeaveTypeModal" 					: this.state.seletctedLeaveModal,
			"WorkingDaysModal" 					: this.refs.WorkingDaysModal.value,
			"FromModal" 						: this.refs.FromModal.value,
			"ToModal"							: this.refs.ToModal.value,
			"ReasonForLeaveRemarkModal" 		: this.refs.ReasonForLeaveRemarkModal.value,
		 });
	
	}

	handleChangeModal1(event){
		event.preventDefault(); 
		var id = event.nativeEvent.target.selectedIndex;
		var valueOfID = event.nativeEvent.target[id].text;
		this.setState({seletctedLeaveModal : valueOfID });
			
	}



// ================================Rendering Data========================

	render(){
		
  		const data = this.props.allData;	// Getting all data in rows of table.
  		console.log("Data::",data);

  		const leavedata = this.props.maxLeaves;	// Getting all data in rows of table.
		var MaxLeavesPerYear = [];
		var LeavesTaken = ["10","10","6","6","0","0","5"];
		var LeavesBalance = [];

		for (var i = 0; i < leavedata.length; i++) 
		{
			MaxLeavesPerYear[i] = leavedata[i].MaxLeavesPerYear;
		}

		for (var i = 0; i < leavedata.length; i++) 
		{
			LeavesBalance[i] = MaxLeavesPerYear[i] - LeavesTaken[i];
		}	
		
		const balanceData = [
		   {
			lt:'Total Leaves',
		    pl: MaxLeavesPerYear[0],
		    sl: MaxLeavesPerYear[1],
		    cl: MaxLeavesPerYear[2],
		    ml: MaxLeavesPerYear[3],
		    el: MaxLeavesPerYear[4],
		    tl: MaxLeavesPerYear[5],
		    xl: MaxLeavesPerYear[6],
		    lw: MaxLeavesPerYear[1],
		  }, 
		  {
			lt:'Leaves Taken',
		    pl: LeavesTaken[0],
		    sl: LeavesTaken[1],
		    cl: LeavesTaken[2],
		    ml: LeavesTaken[3],
		    el: LeavesTaken[4],
		    tl: LeavesTaken[5],
		    xl: LeavesTaken[6],
		    lw: LeavesTaken[1],
		  }, 
		  {
			lt:'Leave Balance',
		    pl: LeavesBalance[0],
		    sl: LeavesBalance[1],
		    cl: LeavesBalance[2],
		    ml: LeavesBalance[3],
		    el: LeavesBalance[4],
		    tl: LeavesBalance[5],
		    xl: LeavesBalance[6],
		    lw: LeavesBalance[1],
		  }
		]
		const balanceColumns = [
		  {
		    Header: 'Leave Type',
		    accessor: 'lt', 
		  }, 
		  {
		    Header: 'PL',
		    accessor: 'pl', 
		  }, 
		  {
		    Header: 'SL',
		    accessor: 'cl',
		  }, 
		  {
		    Header: 'CL',
		    accessor:'cl', 
		  }, 
		  {
		    Header: 'ML', 
		    accessor: 'ml',
		  }, 
		  {
		    Header: 'EL', 
		    accessor: 'el',
		  },
		  {
		    Header: 'TL', 
		    accessor: 'tl',
		  },
		  {
		    Header: 'XL', 
		    accessor: 'xl',
		  },
		  {
		    Header: 'LW', 
		    accessor: 'lw',
		  }
		]
  		const columns = [
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
		  	Header: 'Remark',
		    accessor: 'remark', 
		  	},		  	
		  	{
		  	Header: 'Status',
		    accessor: 'status', 
		  	},
		  	{
		    Header: 'Action',
		    accessor: 'Action',
		    Cell: row => (
		    	<div className="actionDiv">
		          <div className="col-lg-4" onClick={() => this.deleteBalData(row.original)}>
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

		    		<div className="col-lg-12 tabs">
			    		<h3 className="centerText"> Leave Balance and History of Reporting Manager </h3> 
				  		<div className="tab-content">
				  			<div className="tab-pane fade in active" id="leaveTable">
				  				<div className="modal fade " id="myModal" role="dialog">
								    <div className="modal-dialog modal-lg">
								    	<div className="modal-content">
									        <div className="modal-header">
									          <button type="button" className="close" data-dismiss="modal">&times;</button>
							  				  <h3 className="centerText">Edit Leave</h3> 
									        </div> 
									        <div className="modal-body">
		         							 	<div className="tab-content">
												    <div id="home" className="tab-pane fade in active">
											
												    	<form className="col-lg-12 formcontainer">
												    		<div className="row">
																<div className=" col-lg-12">	
															    	<div className="form-group col-lg-12 col-md-4 col-sm-6">
															    		<label className="fz16">Select Leave Type</label>
															    		<div className="dropdown">
																		   <select className="selectLeave" ref="selectLeave" onChange={this.handleChangeModal1.bind(this)}>
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
															    	<div className="form-group col-lg-4 col-md-4 col-sm-6">
															    		<label className="fz16">From Date</label>
															    		<div className="input-group">
																    		<input type="text" value={this.state.FromModal} placeholder="Enter Here" ref="FromModal" className="form-control inputBox" onChange={this.handleChangeModal.bind(this)} />
																    	</div>
															    	</div>
															    	<div className="form-group col-lg-8 col-md-4 col-sm-6">
															    		<label className="fz16">To Date </label>
															    		<div className="input-group">
																    		<input type="text"  value={this.state.ToModal} placeholder="Enter Here"  ref="ToModal" className="form-control inputBox" onChange={this.handleChangeModal.bind(this)}/>
																    	</div>
															    	</div>
																	<div className="form-group col-lg-4 col-md-4 col-sm-6">
															    		<label className="fz16">Number Of Days</label>
															    		<div className="input-group">
																    		<input type="text" placeholder="Enter Here" value={this.state.WorkingDaysModal} ref="WorkingDaysModal" className="form-control  inputBox" onChange={this.handleChangeModal.bind(this)} />
																    	</div>
															    	</div>
															    	<div className="form-group col-lg-6 col-md-4 col-sm-6">
															    		<label className="fz16">Remark</label>
															    		<div className="input-group">
																    		<input type="text" placeholder="Enter Here" value={this.state.ReasonForLeaveRemarkModal}  ref="ReasonForLeaveRemarkModal" className="form-control inputBox"onChange={this.handleChangeModal.bind(this)} />
																    	</div>
															    	</div>
															    
																	<div className="col-lg-12 col-md-4 col-sm-6">	
																		
																		<button className="col-lg-2 col-md-4 col-sm-6 btn submitbtn btn-primary " onClick={this.updateBalData.bind(this)}>Update</button>
																	    <button type="button" className="btn btn-default col-lg-offset-1 col-lg-2 col-md-4 col-sm-6 " data-dismiss="modal">Close</button>

																	</div>
																</div>
															</div>		    	
														</form>	
													</div>
												</div>
		        							</div>
		        							<div className="modal-footer">
		      								</div>
								     	</div>	      
								    </div>
		  						</div>
					  			
								<div className="descTable col-lg-12">	
 									<ReactTable className="text-center -striped -highlight lbt"

									   	showPagination={0}
									   	minRows={0}
									    data={balanceData}
    									columns={balanceColumns}
    									
									 />
 								</div>
 								<div className="descTable tab-pane fade in active col-lg-12">
									
									<ReactTable
    									data={data}
    									columns={columns}
    									defaultPageSize={5}
    									filterable={false}
 									/>

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
	const allrecords = Meteor.subscribe("leaveData");
	const allLeaveData = LeaveApproval.find({}).fetch()||[{}];

	const maxLeavesS = Meteor.subscribe("maxLeaves");
	const maxLeaves = LeaveMgmt.find({}).fetch()||[{}];

	return {
		
		"allData" 		: allLeaveData,
		"maxLeaves"		: maxLeaves,
	}
})(LeaveBal);
