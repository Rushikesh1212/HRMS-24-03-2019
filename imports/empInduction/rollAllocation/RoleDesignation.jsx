import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';

import  { EmpMaster } from '/imports/empInduction/academics/academicsApi.js';
import "/imports/empInduction/rollAllocation/NewList.css";

class RoleDesignation extends Component{
	constructor(props){
		super(props);
		var empId = FlowRouter.getParam("empid");
		var empidFromUrl = this.props.empid;
		console.log("   a",empidFromUrl);

		var urlEmpId = FlowRouter.getParam("empid");
		if(urlEmpId){
			var action = "Submit";
		}
		this.state = {
			"action" : action,
			"empId"	: empId, 
			"empidFromUrl":empidFromUrl,

			"firstName": "",
			"dateOfJoining": "",
			"mobileNumber": "",

			"employmentStartDate" 		: "",
			"allocateDepartment" 		: "",
			"designation" 				: "",
			"reportingLocation" 		: "",
			"expectedRetirementDate" 	: "",
			"subDepartment" 			: "",
			"gradeBand" 				: "",
			"reportingManager" 			: "",
			
			"regular" 					: "",
			"contract" 					: "",
			"fullTime" 					: "",
			"partTime" 					: "",
		};		


	}



		submitBasicInfo(event){
		event.preventDefault();
		var formValues = {
			_id						: this.state.empidFromUrl,
			employmentStartDate 	: this.refs.employmentStartDate.value,
			allocateDepartment 		: this.refs.allocateDepartment.value,
			designation 			: this.refs.designation.value,
			reportingLocation 		: this.refs.reportingLocation.value,
			expectedRetirementDate 	: this.refs.expectedRetirementDate.value,
			subDepartment 			: this.refs.subDepartment.value,
			gradeBand 				: this.refs.gradeBand.value,
			reportingManager 		: this.refs.reportingManager.value,
			regular 				: this.refs.regular.value,
			contract 				: this.refs.contract.value,
			fullTime 				: this.refs.fullTime.value,
			partTime 				: this.refs.partTime.value,
			status					: "Allocate",


				
		};

		
				Meteor.call("submitRoleDesignationInfo",formValues,
											(error,result)=>{
												if(error){
													console.log("Something went wrong! Error = ", error);
												}else{
													swal("Congrats!","Your Information Submitted Successfully.","success");
													console.log("latest id = ",result);
													FlowRouter.go("/RoleApprove/");
													
													// this.setState({"inputValue":""});
												}
											});	
	

	}


	handleChange(event){
		event.preventDefault();
    	this.setState({
       		"employmentStartDate" 		: this.refs.employmentStartDate.value,
			"allocateDepartment" 		: this.refs.allocateDepartment.value,
			"designation" 				: this.refs.designation.value,
			"reportingLocation" 		: this.refs.reportingLocation.value,
			"expectedRetirementDate" 	: this.refs.expectedRetirementDate.value,
			"subDepartment" 			: this.refs.subDepartment.value,
			"gradeBand" 				: this.refs.gradeBand.value,
			"reportingManager" 			: this.refs.reportingManager.value,
			
			"regular" 					: this.refs.regular.value,
			"contract" 					: this.refs.contract.value,
			"fullTime" 					: this.refs.fullTime.value,
			"partTime" 					: this.refs.partTime.value,
    	});

	}



	render(){

		var emp = this.props.new;
		console.log("emp = ",emp);
		
		console.log("empidFromUrl = ",this.state.empidFromUrl);
		var specificEmployee;
		const data = this.props.new;
		console.log("data",data);
		for(var i=0;i<data.length;i++){
			if(data[i]._id==this.state.empidFromUrl){
				specificEmployee=data[i]
			}
		}
		console.log("specificEmployee=",specificEmployee);


			

		return (
			<div className="row">

				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<form>
					
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Title">
			    			<h3> Allocate Role/Designation & Department </h3> 
			    				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 profileImgInfo ">

			    					<div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 ">
			    						<img src="/images/profile1.png" className="profileImg"/>

			    					</div>
			    					<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12  personalInfo">
										<div>

						    				<h4> Name          : {specificEmployee ? specificEmployee.firstName : <img src='/images/check.png' />}</h4>
						    				<h4> Joining Date  : {specificEmployee ? specificEmployee.dateOfJoining : <img src='/images/check.png' />}</h4>
						    				<h4> Mobile Number : {specificEmployee ? specificEmployee.mobileNumber : <img src='/images/check.png' />}</h4>
    									</div>
			    					</div>

			    				</div>


		    				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		    		
		    					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 info1">
		  								<div className="form-group">
										    <label >Employment Start Date:</label>
										    <input type="date" className="form-control" id=""  ref="employmentStartDate" value={this.state.employmentStartDate} onChange={this.handleChange.bind(this)}/>
										</div>
									<div className="form-group">
								    	<label >Allocate Department</label>
								   
										  <select className="custom-select form-control" id="inputGroupSelect01" ref="allocateDepartment">
										    <option selected value={this.state.allocateDepartment} onChange={this.handleChange.bind(this)}> Choose...</option>
										    <option value="1">One</option>
										    <option value="2">Two</option>
										    <option value="3">Three</option>
										  </select>
									
									</div>

									<div className="form-group">
									    <label >Designation</label>
									     <select className="custom-select form-control" id="inputGroupSelect01"  ref="designation">
										    <option selected value={this.state.designation} onChange={this.handleChange.bind(this)}>Choose...</option>
										    <option value="1">One</option>
										    <option value="2">Two</option>
										    <option value="3">Three</option>
										  </select>
									</div>

									<div className="form-group">
									    <label >Reporting Location</label>
									     <select className="custom-select form-control" id="inputGroupSelect01"  ref="reportingLocation">
										    <option selected value={this.state.reportingLocation} onChange={this.handleChange.bind(this)}>Choose...</option>
										    <option value="1">One</option>
										    <option value="2">Two</option>
										    <option value="3">Three</option>
										  </select>
									</div>
		    					</div>
			    				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 info2">
			    			
									  <div className="form-group">
									    <label >Expected Retirement Date</label>
									    <input type="date" className="form-control" id="" ref="expectedRetirementDate"/>
									  </div>
									   <div className="form-group">
									    <label >Sub-Department</label>
									     <select className="custom-select form-control" id="inputGroupSelect01"  ref="subDepartment">
										    <option selected value={this.state.subDepartment} onChange={this.handleChange.bind(this)}>Choose...</option>
										    <option value="1">One</option>
										    <option value="2">Two</option>
										    <option value="3">Three</option>
										  </select>
									  </div>
									   <div className="form-group">
									    <label >Grade / Band</label>
									     <select className="custom-select form-control" id="inputGroupSelect01"  ref="gradeBand">
										    <option selected value={this.state.gradeBand} onChange={this.handleChange.bind(this)}>Choose...</option>
										    <option value="1">One</option>
										    <option value="2">Two</option>
										    <option value="3">Three</option>
										  </select>
									  </div>
									   <div className="form-group">
									    <label >Reporting Manager</label>
									     <select className="custom-select form-control" id="inputGroupSelect01"  ref="reportingManager">
										    <option selected value={this.state.reportingManager} onChange={this.handleChange.bind(this)}>Choose...</option>
										    <option value="1">One</option>
										    <option value="2">Two</option>
										    <option value="3">Three</option>
										  </select>
									  </div>
			    				</div>
			    				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 info1">

			    					<div className="form-group">
			    						<label >Employment Category</label>
			    						<div>
			    							<label className="radio-inline">
									        <input type="radio" name="optradio"  value={this.state.regular} onChange={this.handleChange.bind(this)} ref="regular"/>Regular
									    	</label>
									   
									    	<label className="radio-inline">
									        <input type="radio" name="optradio" value={this.state.contract} ref="contract" onChange={this.handleChange.bind(this)}/>Contract
									    	</label>
									    </div>
									    <br/>

									     <label >Full Time / Part time</label>
									     <div>
			    							<label className="radio-inline">
									        <input type="radio" name="optradio1" value={this.state.fullTime} ref="fullTime" onChange={this.handleChange.bind(this)}/>Full Time
									    	</label>
									   
									    	<label className="radio-inline">
									        <input type="radio" name="optradio1" value={this.state.partTime} ref="partTime" onChange={this.handleChange.bind(this)}/>Part Time
									    	</label>
									    </div>
			    					</div>
			    				</div>
		    				</div>

		    			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		    			<button className="btn submit btn-primary pull-right"  onClick={this.submitBasicInfo.bind(this)} >Submit</button>
		    			</div>



			    	</div>
						

				</form>	
			  </div>	
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
	var empSub = Meteor.subscribe("empData",urlEmpId);

	var empIdCont = FlowRouter.getParam("empid");
	Meteor.subscribe("empData",empIdCont);

	
	const empSubHandle = Meteor.subscribe("allEmpData");
	const EmpData = EmpMaster.find({}).fetch()||[{}];
	


	let data =EmpData;
	
	let New=[];

	for(var i=0;i<data.length;i++){
		
		if(data[i].status=="new"){
				New.push(data[i])
				
			}
		
	}
	console.log("new",New);


	return {
		"allEmp" 			: EmpData,
		"new"				: New,
		"empid"				: empIdCont,
	}
	

	
})(RoleDesignation);
