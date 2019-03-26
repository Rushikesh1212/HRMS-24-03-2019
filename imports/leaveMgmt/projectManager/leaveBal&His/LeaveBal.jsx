import React, {Component} from 'react';
import ReactTable from "react-table";
import swal from 'sweetalert';
import { withTracker } from 'meteor/react-meteor-data';
import Table from 'react-bootstrap/Table'
import "./LeaveBal.css";
import 'react-table/react-table.css';

import { ListOfLeave } from "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/listOfSubordinatesLeaves.js";


class LeaveBal extends Component{
	constructor(props){
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
		console.log("rowId",row);

		this.setState({	
			"rowId"								: row._id,	
			"LeaveTypeModal" 					: row.leaveType,
			"WorkingDaysModal" 					: row.numOfDays,
			"FromModal" 						: row.fromDate,
			"ToModal"							: row.toDate,
			"ReasonForLeaveRemarkModal" 		: row.remark,
		 });
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

  		console.log("fetchedData",data);

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
			    		<ul className="nav nav-tabs">
					    	<li className="active"><a data-toggle="tab" href="#leaveTable">LeaveBalance</a></li>
					  	</ul>
					  	
					  		<div className="tab-content">
					  			<div className="tab-pane fade in active" id="leaveTable">
					  				<div className="modal fade " id="myModal" role="dialog">
									    <div className="modal-dialog modal-lg">
									    	<div className="modal-content">
										        <div className="modal-header">
										          <button type="button" className="close" data-dismiss="modal">&times;</button>
								  				  <h3 className="centerText"> Edit Leave </h3> 
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
						  			
									<div className="descTable tab-pane fade in active col-lg-12">
										
										<Table bordered hover responsive="lg" responsive="md" responsive="sm" className="pad10" size="lg">
										  <thead>
										    <tr>
										      <th>Leave Type</th>
										      <th>PL</th>
										      <th>SL</th>
										      <th>CL</th>
										      <th>ML</th>
										      <th>EL</th>
										      <th>TL</th>
										      <th>XL</th>
										      <th>LW</th>
										    </tr>
										  </thead>
										  <tbody>
										    <tr>
										      <td>Max Leaves</td>
										      <td>24</td>
										      <td>07</td>
										      <td>07</td>
										      <td>07</td>
										      <td>07</td>
										      <td>07</td>
										      <td>07</td>
										      <td>07</td>
										    </tr>
										    <tr>
										      <td>Taken Leaves</td>
										      <td>10</td>
										      <td>02</td>
										      <td>02</td>
										      <td>02</td>
										      <td>02</td>
										      <td>02</td>
										      <td>02</td>
										      <td>02</td>
										    </tr>
										    <tr>
										      <td>Leave Balance</td>
										      <td>14</td>
										      <td>05</td>
										      <td>05</td>
										      <td>05</td>
										      <td>05</td>
										      <td>05</td>
										      <td>05</td>
										      <td>05</td>
										    </tr>
										  </tbody>
										</Table>
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
export default withTracker(()=>{
	

	const empSubHandle = Meteor.subscribe("allRecordData");
	const allEmpData = ListOfLeave.find({}).fetch()||[{}];
	console.log(allEmpData);
	return {
		"allData" 		: allEmpData,
	}
})(LeaveBal);
