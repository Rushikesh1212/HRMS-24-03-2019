import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';

import { ShiftSetting } from '/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js';
import './shiftSetting.css';

class shiftSetting extends Component{
	constructor(props){
		super(props);
		var urlEmpId = FlowRouter.getParam("empid");
		if(urlEmpId){
			var action = "Update";
		}else{
			var action = "Submit";
		}


		this.state = {
			"empId"    		: urlEmpId,
			"action" 		: action,
			"shiftName"		: "", 
			"startTime"		: "",
			"startTimeAmPm"	: "",
			"endTime"  		: "",
			"endTimeAmPm"	: "",
			"effectiveFrom"	: "",
			"tillDate"  	: "",
		};		

	}

  	componentWillReceiveProps(nextProps) {
	  	if(!nextProps.loading){
	        if(nextProps.oneShiftData){
			    this.setState({
			        "shiftName" 		: nextProps.oneShiftData.shiftName,	        
			        "startTime" 		: nextProps.oneShiftData.startTime,	        
			        "startTimeAmPm" 	: nextProps.oneShiftData.startTimeAmPm,	        
			        "endTime" 			: nextProps.oneShiftData.endTime,	        
			        "endTimeAmPm" 		: nextProps.oneShiftData.endTimeAmPm,	        
			        "effectiveFrom" 	: nextProps.oneShiftData.effectiveFrom,	   
			        "tillDate" 			: nextProps.oneShiftData.tillDate,	        
			    });
			  }
			}
	}
	
	submitBasicInfo(event){
		event.preventDefault();
		var formValues = {
			shiftName 		: this.refs.shiftName.value,
			startTime 		: this.refs.startTime.value,
			startTimeAmPm 	: this.refs.startTimeAmPm.value,
			endTime 		: this.refs.endTime.value,
			endTimeAmPm 	: this.refs.endTimeAmPm.value,
			effectiveFrom 	: this.refs.effectiveFrom.value,
			tillDate	 	: this.refs.tillDate.value,		
		};

		if(this.state.action == "Submit"){

			if( formValues.shiftName!=="" && formValues.startime!=="" && formValues.startTimeAmPm!=="" && formValues.endTime!=="" && formValues.endTimeAmPm!=="" && formValues.effectiveFrom!=="" && formValues.tillDate!=="")
				{ Meteor.call("insertBasicInfo4",formValues,
								(error,result)=>{
									if(error){
										console.log("Something went wrong! Error = ", error);
									}else{
										swal("Congrats!",
											 "Your Information Submitted Successfully.",
											 "success");
										console.log("latest id = ",result);
									}
								});	
				}
				else{
						swal("No Field should be empty...!",
							 "Please fill the all fields carefully",
							 "warning");
					}
		}else{
			formValues._id = this.state.empId;
			Meteor.call("updateBasicInfo",formValues,
										(error,result)=>{
											if(error){
												console.log("Something went wrong! Error = ", error);
											}else{
												swal("Congrats!","Employee Profile Updated Successfully.","success");
												console.log("latest id = ",result);
												FlowRouter.go("/empProfile/"+this.state.empId);
											}
										});	
		}

	}

		
	
	displayEmpProfile(){

	}


	handleChange(event){
		event.preventDefault();
    this.setState({
        "shiftName" 		: this.refs.shiftName.value,	        
        "startTime" 		: this.refs.startTime.value,	        
        "startTimeAmPm" 	: this.refs.startTimeAmPm.value,	        
        "endTime" 			: this.refs.endTime.value,	        
        "endTimeAmPm" 		: this.refs.endTimeAmPm.value,	        
        "effectiveFrom" 	: this.refs.effectiveFrom.value,
        "tillDate"	        : this.refs.tillDate.value,	        
    });

	}
    deleteAllotedShift(event){
		event.preventDefault();
		var empId = event.currentTarget.id;
		
		console.log("dd = ",empId);
		swal({
		  title     : "Are you sure you want to delete?",
		  text      : "Once deleted, you will not be able to recover this record!",
		  icon      : "warning",
		  buttons   : true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
			Meteor.call("deleteAllotedShift",empId,
								(error,result) => {
									if(error){
										swal("Something is Wrong","Contact Your System Administrator","error");
										console.log(error);
									}else{
										swal("Great!","Delete is Successful!","success");
										// FlowRouter.go("/empInfo");
									}
								}
						);
		}else {
		    swal("This record is safe!");
		  }
		});
	}

	render(){
		// console.log(this.props.oneShiftData[0]);
		var emp = this.props.oneShiftData[0];

		return (
			<div>
			<div className="row">

		    	<span className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3><center><b>Shift Timing Setting</b></center></h3></span>
	    		<div className="col-lg-6 col-md-3 col-sm-3 col-xs-3">
	    			<h3></h3>
		    	
		    		<h3></h3>
		    	</div>
		    	<hr/>
{/********************************************Input Fields Starts***********************************************/}

					<form className="col-lg-12">
							<div className="labelTextBox col-lg-12">
								<div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
									<div className="col-lg-12 col-md-6 col-sm-6 col-xs-12"> 
										<div className="form-group">
									      <label htmlFor="usr">Shift Name</label>
									      <input type="text" value={this.state.shiftName} ref="shiftName" className="form-control" onChange={this.handleChange.bind(this)} />
									    </div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 row">		
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 row"> 
										<div className="form-group">
									      <label htmlFor="usr">Start Time</label>
									      
										  <div className="form-group">
										      <select id="sel1" value={this.state.startTime} ref="startTime" className="form-control" onChange={this.handleChange.bind(this)}>
										        <option>Select</option>
										        <option>08:00</option>
										        <option>09:00</option>
										        <option>10:00</option>
										        <option>11:00</option>
										      </select>
									      </div>


									    </div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"> 
										<div className="form-group">
									      <label htmlFor="usr">AM/PM</label>
									      
										  <div className="form-group">
										      <select id="sel1" value={this.state.startTimeAmPm} ref="startTimeAmPm" className="form-control"  onChange={this.handleChange.bind(this)}>
										        <option>AM</option>
										        <option>PM</option>
										      </select>
										  </div>

									    </div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 row">
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 row"> 
										<div className="form-group">
									      <label htmlFor="usr">End Time</label>

									      <div className="form-group">
										      <select id="sel1" value={this.state.endTime} ref="endTime" className="form-control"  onChange={this.handleChange.bind(this)}>
										        <option>Select</option>
										        <option>05:00</option>
										        <option>06:00</option>
										        <option>07:00</option>
										        <option>08:00</option>
										      </select>
									      </div>
									    </div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"> 
										<div className="form-group">
									      <label htmlFor="usr">AM/PM</label>
									      <div className="form-group">
										      <select id="sel1" value={this.state.endTimeAmPm} ref="endTimeAmPm" className="form-control"  onChange={this.handleChange.bind(this)} >
										        <option>AM</option>
										        <option>PM</option>
										      </select>
										  </div>	
									    </div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 row">
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 row"> 
										<div className="form-group">
									      <label htmlFor="usr">Effective From</label>
									      <input type="date" id="usr" value={this.state.effectiveFrom} ref="effectiveFrom" className="form-control"  onChange={this.handleChange.bind(this)} />
									    </div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"> 
										<div className="form-group">
									      <label htmlFor="usr">Till Date</label>
									      <input type="date" id="usr" value={this.state.tillDate} ref="tillDate" className="form-control"  onChange={this.handleChange.bind(this)} />
									    </div>
									</div>
								</div>
							</div>

						<div className="col-lg-12">
							<button className="col-lg-2 btn btn-primary pull-right" onClick={this.submitBasicInfo.bind(this)}> {this.state.action} </button>
						</div>	
							
					</form>
{/********************************************Input Fields Ends***********************************************/}

			</div>

{/********************************************Generate Table Starts***********************************************/}

			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						
				<div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 row">
	    			<h3> Shift Details </h3>
				</div>

				<table id="table-to-xls" className="table table-bordered table-hovered table-striped">
					<thead>
						<tr className="bg-primary"> 
							<th className="text-center"> Sr # </th> 
							<th className="text-center"> Shift Name </th> 
							<th className="text-left"> Start Time AM/PM</th>
							<th className="text-center"> End Time AM/PM</th>
							<th className="text-center"> Effective From </th>
							<th className="text-center"> Till Date </th>
							<th className="text-center"> Action </th>
						</tr>
					</thead>

					<tbody>
						{this.props.allShift.map((emp,index)=>{
								return(
									<tr key={index}>
										<td> {index+1} </td>
										<td> {emp.shiftName} </td>
										<td> {emp.startTime} {emp.startTimeAmPm} </td>
										<td> {emp.endTime} {emp.endTimeAmPm} </td>
										<td> {emp.effectiveFrom} </td>
										<td> {emp.tillDate} </td>
										<td>
											<i id={emp._id} className="actionIcon fa fa-trash" onClick={this.deleteAllotedShift.bind(this)}></i>
										</td>
									</tr>
								);
							})
						}
					</tbody>

				</table>
								

			</div>
{/********************************************Generate Table Ends***********************************************/}
		    </div>
		    

		);
	};
}




export default withTracker(()=>{
	if(FlowRouter.getParam("empid")){
		var urlEmpId = FlowRouter.getParam("empid");
	}else{
		var urlEmpId = 0;
	}
	
	var shiftSub = Meteor.subscribe("allShiftData");

	const oneShiftData = ShiftSetting.find({}).fetch()||[];
	// console.log("oneShiftData = ",oneShiftData);

	return {
		"allShift" 		: oneShiftData,
		"loading" 		: !shiftSub.ready(),
		"oneShiftData" 	: oneShiftData,
	}

})(shiftSetting);