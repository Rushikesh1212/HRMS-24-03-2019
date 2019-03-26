import React, {Component} from 'react';
import ReactTable from "react-table";
import swal from 'sweetalert';
import { withTracker } from 'meteor/react-meteor-data';


import { LeaveMgmt } from "/imports/leaveMgmt/adminSettings/LeavePolicy/leavePolicySettings.js";

import 'react-table/react-table.css';
import "./LeavePolicySettings.css";

class LeavePolicySettings extends Component{
	constructor(props){
		super(props);
		var recordId = FlowRouter.getParam("recordid");
		if(recordId){
			var action = "Update";
		}else{
			var action = "Submit";
		}
		


		this.state = {
			"recordId" 							: recordId,
			"action" 							: action,
			"seletctedLocation" 				: "Mumbai",	
			"seletctedLeave" 					: "Privilege Leave",	
			"MaxLeavesPerYear"					: "",
			"NumOfTimesPerYear"					: "",
			"MaxLeavesataTime"					: "",
			"MinLeavesataTime"					: "",
			"LeavesDuringProbationPeriod"		: "",
			"seletctedLocationModal" 			: "Mumbai",	
			"seletctedLeaveModal" 				: "Privilege Leave",	
			"MaxLeavesPerYearModal"				: "",
			"NumOfTimesPerYearModal"			: "",
			"MaxLeavesataTimeModal"				: "",
			"MinLeavesataTimeModal"				: "",
			"LeavesDuringProbationPeriodModal"	: "",
			"isHidden"							: false,
			



		};
		console.log("seletctedLocationModal",this.state.seletctedLocationModal);
	}
	

// =========================================== Inserting Data On Submit ==============================================

	submitBasicInfo(event)
	{

		event.preventDefault();
		var formValues = {
			SelectedLocation				: this.state.seletctedLocation,
			SelectedLeave					: this.state.seletctedLeave,
			MaxLeavesPerYear 				: this.refs.MaxLeavesPerYear.value,
			NumOfTimesPerYear 				: this.refs.NumOfTimesPerYear.value,
			MaxLeavesataTime 				: this.refs.MaxLeavesataTime.value,
			MinLeavesataTime 				: this.refs.MinLeavesataTime.value,
			LeavesDuringProbationPeriod 	: this.refs.LeavesDuringProbationPeriod.value,	

		};
		if(formValues.MaxLeavesPerYear=="" || formValues.NumOfTimesPerYear=="" || formValues.MaxLeavesataTime=="" || formValues.MinLeavesataTime=="" || formValues.LeavesDuringProbationPeriod=="")
		{
			swal({
				  title: "No Field Should Be Empty......!",
				  text: "Add Values in Field",
				  icon: "warning",
				  buttons: true,
				  dangerMode: true,
			})

		}
		else
		{
		this.setState({									// Emptying Textfield Values
			"MaxLeavesPerYear" 				: '',
			"NumOfTimesPerYear" 			: '',
			"MaxLeavesataTime" 				: '',
			"MinLeavesataTime"				: '',
			"LeavesDuringProbationPeriod" 	: '',	
		});
	

			if(this.state.action == "Submit")
			{
			
			Meteor.call("insertBasicInfo1",formValues,
												(error,result)=>{
														if(error){
															console.log("Something went wrong! Error = ", error);
														}
														else{
															swal("Congrats!","Your Information Submitted Successfully.","success");
															console.log("latest id = ",result);
														}
													});
			}
		}
			
	}



// ========================================== Operations On Data ====================================================

	editModal(row)
	{
		var rowId = row._id;
		console.log("rowId",row);

		this.setState({	
			"recordIdModal"						: row._id,	
			"MaxLeavesPerYearModal" 			: row.MaxLeavesPerYear,
			"NumOfTimesPerYearModal" 			: row.NumOfTimesPerYear,
			"MaxLeavesataTimeModal" 			: row.MaxLeavesataTime,
			"MinLeavesataTimeModal"				: row.MinLeavesataTime,
			"LeavesDuringProbationPeriodModal" 	: row.LeavesDuringProbationPeriod,
		 });
	}


	handleChangeModal(event){
		event.preventDefault();
		this.setState({	
			"recordIdModal"						: this.state.recordIdModal,	
			"MaxLeavesPerYearModal" 			: this.refs.MaxLeavesPerYearModal.value,
			"NumOfTimesPerYearModal" 			: this.refs.NumOfTimesPerYearModal.value,
			"MaxLeavesataTimeModal" 			: this.refs.MaxLeavesataTimeModal.value,
			"MinLeavesataTimeModal"				: this.refs.MinLeavesataTimeModal.value,
			"LeavesDuringProbationPeriodModal" 	: this.refs.LeavesDuringProbationPeriodModal.value,
		 });
	
	}
	updateData(event)
	{
		event.preventDefault();
		var formValues = {
			recordIdModal 					: this.state.recordIdModal,
			SelectedLocation				: this.state.seletctedLocationModal,
			SelectedLeave					: this.state.seletctedLeaveModal,
			MaxLeavesPerYear 				: this.refs.MaxLeavesPerYearModal.value,
			NumOfTimesPerYear 				: this.refs.NumOfTimesPerYearModal.value,
			MaxLeavesataTime 				: this.refs.MaxLeavesataTimeModal.value,
			MinLeavesataTime 				: this.refs.MinLeavesataTimeModal.value,
			LeavesDuringProbationPeriod 	: this.refs.LeavesDuringProbationPeriodModal.value,	

		};

			Meteor.call("updateData",formValues,
										(error,result)=>{
											if(error){
												console.log("Something went wrong! Error = ", error);
											}else{
												swal("Congrats!","Settings Updated Successfully.","success");
											}
										});	
	}
	deleteData(row)
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
				Meteor.call("deleteData",rowId,
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

// ====================================== Getting Data From the Form =====================================================

	handleChange(event){
		event.preventDefault();
		var id = event.nativeEvent.target.selectedIndex;
		var valueOfID = event.nativeEvent.target[id].text;
		this.setState({seletctedLeave : valueOfID });
			
	}

	handleSelectionModal(event){
		event.preventDefault();
		var id = event.nativeEvent.target.selectedIndex;
		var valueOfID = event.nativeEvent.target[id].text;
		this.setState({seletctedLocationModal : valueOfID });
		console.log("Location in modal ::",this.state.seletctedLocationModal);
		console.log("valueOfID",valueOfID);
	}
	handleChangeModal1(event){
		event.preventDefault(); 
		var id = event.nativeEvent.target.selectedIndex;
		var valueOfID = event.nativeEvent.target[id].text;
		this.setState({seletctedLeaveModal : valueOfID });
			
	}
	handleSelection(event){
		event.preventDefault();
		var id = event.nativeEvent.target.selectedIndex;
		var valueOfID = event.nativeEvent.target[id].text;
		this.setState({seletctedLocation : valueOfID });
		console.log("Location in modal ::",this.state.seletctedLocation);

	}
	handleChange1(event)
	{
		this.setState({
			"MaxLeavesPerYear" 				: this.refs.MaxLeavesPerYear.value,
			"NumOfTimesPerYear" 			: this.refs.NumOfTimesPerYear.value,
			"MaxLeavesataTime" 				: this.refs.MaxLeavesataTime.value,
			"MinLeavesataTime"				: this.refs.MinLeavesataTime.value,
			"LeavesDuringProbationPeriod" 	: this.refs.LeavesDuringProbationPeriod.value,	
			 });
			
	}
	

// ================================ Rendering Data ========================

	render(){
 		const data = this.props.allData;	// Getting all data in rows of table.
		if(data){
			if(data.MaxLeavesPerYear==""){
				data.MaxLeavesPerYear = " - ";
			}
		}
  		const columns = [ 
		  	{
		    Header: 'Leave Type',
		    accessor: 'SelectedLeave',
		  	},
		  	{
		  	Header: 'Max Leaves / Year',
		    accessor: 'MaxLeavesPerYear', 
		  	},
		  	{
		  	Header: 'Max Leaves at a Time',
		    accessor: 'MaxLeavesataTime', 
		  	},
		  	{
		  	Header: 'Min Leaves / year',
		    accessor: 'MinLeavesataTime', 
		  	},		  	
		  	{
		  	Header: 'Num. of Times / year',
		    accessor: 'NumOfTimesPerYear', 
		  	},
		  	{		
		  	Header: 'Leaves during Probation Period',
		    accessor: 'LeavesDuringProbationPeriod', 
		  	},
		  	{
		    Header: 'Action',
		    accessor: 'Action',
		    Cell: row => 
		  	  (
		    	<div className="actionDiv">
		          <div className="col-lg-4" onClick={() => this.deleteData(row.original)}>
 				    <i className="fa fa-trash"> </i>
		          </div>
		          <div className="col-lg-4" onClick={() => this.editModal(row.original)}>
				    <a href="#myModal" data-toggle="modal"><i className="fa fa-pencil"> </i></a>
		          </div>
		        </div>
		        )
        		
       		}
        ]

		return (

			<div className="col-lg-12  mainForm">
				<div className="row">
					<div className="col-lg-12 modalContainer">
						<div className="modal fade " id="myModal" role="dialog">
						    <div className="modal-dialog modal-lg">
						    	<div className="modal-content">
							        <div className="modal-header">
							          <button type="button" className="close" data-dismiss="modal">&times;</button>
					  				  <h3 className="centerText"> Leave Policy Settings </h3> 
							        </div> 
							        <div className="modal-body">
         							 	<div className="tab-content">
										    <div id="home" className="tab-pane fade in active">
										    	<div className="col-lg-12 formHead">
										    		<div className="row">
											    		<div className="formHeadContent col-lg-12">
													    	<label className="fz16">Select Location</label>
													    	<div className="dropdown">
															   <select className="selectLocation" onChange={this.handleSelectionModal.bind(this)}>
																  <option value="Mumbai">Mumbai</option>
																  <option value="Pune">Pune</option>
																  <option value="Nashik">Nashik</option>
																</select>
				  											</div>
											    		</div>
										    		</div>
										    	</div>

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
													    		<label className="fz16">Max Leaves Allowed / Year</label>
													    		<div className="input-group">
														    		<input type="text" value={this.state.MaxLeavesPerYearModal} placeholder="Enter Here" ref="MaxLeavesPerYearModal" className="form-control inputBox" onChange={this.handleChangeModal.bind(this)} />
														    	</div>
													    	</div>
													    	<div className="form-group col-lg-8 col-md-4 col-sm-6">
													    		<label className="fz16">How Many Times this leave can be taken in the year </label>
													    		<div className="input-group">
														    		<input type="text"  value={this.state.NumOfTimesPerYearModal} placeholder="Enter Here"  ref="NumOfTimesPerYearModal" className="form-control inputBox" onChange={this.handleChangeModal.bind(this)}/>
														    	</div>
													    	</div>
															<div className="form-group col-lg-4 col-md-4 col-sm-6">
													    		<label className="fz16">Max Leaves at a time</label>
													    		<div className="input-group">
														    		<input type="text" placeholder="Enter Here" value={this.state.MaxLeavesataTimeModal} ref="MaxLeavesataTimeModal" className="form-control  inputBox" onChange={this.handleChangeModal.bind(this)} />
														    	</div>
													    	</div>
													    	<div className="form-group col-lg-6 col-md-4 col-sm-6">
													    		<label className="fz16">Min Leaves at a time</label>
													    		<div className="input-group">
														    		<input type="text" placeholder="Enter Here" value={this.state.MinLeavesataTimeModal}  ref="MinLeavesataTimeModal" className="form-control inputBox"onChange={this.handleChangeModal.bind(this)} />
														    	</div>
													    	</div>
													    	<div className="form-group col-lg-6 col-md-4 col-sm-6">
													    		<label className="fz16">Leaves During Probation period</label>
													    		<div className="input-group">
														    		<input type="text" placeholder="Enter Here" value={this.state.LeavesDuringProbationPeriodModal} ref="LeavesDuringProbationPeriodModal" className="form-control" onChange={this.handleChangeModal.bind(this)} />
														    	</div>
													    	</div>
													    	
															<div className="col-lg-12 col-md-4 col-sm-6">	
																
																<button className="col-lg-2 col-md-4 col-sm-6 btn submitbtn btn-primary " onClick={this.updateData.bind(this)}>Update</button>
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
					</div>				
		    		<div className="col-lg-12 tabs">
			    		<ul className="nav nav-tabs">
					    	<li className="active"><a data-toggle="tab" href="#home">Leave Policy Settings</a></li>
					  	</ul>
					  	
					  	<div className="tab-content">
					  		<h3 className="centerText"> Leave Policy Settings </h3> 
						    <div id="home" className="tab-pane fade in active">
						    	<div className="col-lg-12 formHead">
						    		<div className="row">
							    		<div className="formHeadContent col-lg-12">
									    	<label className="fz16">Select Location</label>
									    	<div className="dropdown">
											   <select className="selectLocation" onChange={this.handleSelection.bind(this)}>
												  <option value="Mumbai">Mumbai</option>
												  <option value="Pune">Pune</option>
												  <option value="Nashik">Nashik</option>
												</select>
  											</div>
							    		</div>
						    		</div>
						    	</div>

						    	<form className="col-lg-12 formcontainer">
						    		<div className="row">
										<div className=" col-lg-12">	
									    	<div className="form-group col-lg-12 col-md-4 col-sm-6">
									    		<label className="fz16">Select Leave Type</label>
									    		<div className="dropdown">
												   <select className="selectLeave" ref="selectLeave" onChange={this.handleChange.bind(this)}>
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
									    		<label className="fz16">Max Leaves Allowed / Year</label>
									    		<div className="input-group">
										    		<input type="text" value={this.state.MaxLeavesPerYear} placeholder="Enter Here" ref="MaxLeavesPerYear" className="form-control inputBox" onChange={this.handleChange1.bind(this)} />
										    	</div>
									    	</div>
									    	<div className="form-group col-lg-8 col-md-4 col-sm-6">
									    		<label className="fz16">How Many Times this leave can be taken in the year </label>
									    		<div className="input-group">
										    		<input type="text"  value={this.state.NumOfTimesPerYear} placeholder="Enter Here"  ref="NumOfTimesPerYear" className="form-control inputBox" onChange={this.handleChange1.bind(this)}/>
										    	</div>
									    	</div>
											<div className="form-group col-lg-4 col-md-4 col-sm-6">
									    		<label className="fz16">Max Leaves at a time</label>
									    		<div className="input-group">
										    		<input type="text" placeholder="Enter Here" value={this.state.MaxLeavesataTime} ref="MaxLeavesataTime" className="form-control  inputBox" onChange={this.handleChange1.bind(this)} />
										    	</div>
									    	</div>
									    	<div className="form-group col-lg-6 col-md-4 col-sm-6">
									    		<label className="fz16">Min Leaves at a time</label>
									    		<div className="input-group">
										    		<input type="text" placeholder="Enter Here" value={this.state.MinLeavesataTime}  ref="MinLeavesataTime" className="form-control inputBox"onChange={this.handleChange1.bind(this)} />
										    	</div>
									    	</div>
									    	<div className="form-group col-lg-6 col-md-4 col-sm-6">
									    		<label className="fz16">Leaves During Probation period</label>
									    		<div className="input-group">
										    		<input type="text" placeholder="Enter Here" value={this.state.LeavesDuringProbationPeriod} ref="LeavesDuringProbationPeriod" className="form-control" onChange={this.handleChange1.bind(this)} />
										    	</div>
									    	</div>
									    	
											<div className="col-lg-12 col-md-4 col-sm-6">	
												<button className="col-lg-2 col-md-4 col-sm-6 btn btn-primary " onClick={this.submitBasicInfo.bind(this)}>Submit</button>
											</div>
										</div>
									</div>		    	
								</form>	
								<div className="descTable col-lg-12" >
									
									<ReactTable className="table"
    									data={data}
									    columns={columns}
									    sortable={true}
										filterable={true}
										defaultPageSize={5}
		  								minRows={3}
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
	

	const empSubHandle = Meteor.subscribe("allLeaveData");
	const allLeaveData = LeaveMgmt.find({}).fetch()||[{}];
	console.log(allLeaveData);
	return {
		"allData" 		: allLeaveData,
	}
})(LeavePolicySettings);