import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';

import { EmpMaster } from '/imports/shiftMgmt/shiftRoster/empTemp/empMaster.js';

class EmpBasicInfo extends Component{
	constructor(props){
		super(props);
		var urlEmpId = FlowRouter.getParam("empid");
		if(urlEmpId){
			var action = "Update";
		}else{
			var action = "Submit";
		}


		this.state = {
			"empId" : urlEmpId,
			"action" : action,
			"firstName": "",
			"middleName": "",
			"lastName": "",
			"email": "",
			"phone": "",
			"dob": "",
		};		

	}

  componentWillReceiveProps(nextProps) {
  	if(!nextProps.loading){
      if(nextProps.oneEmpData){
		    this.setState({
		        "firstName" 	: nextProps.oneEmpData.firstName,	        
		        "middleName" 	: nextProps.oneEmpData.middleName,	        
		        "lastName" 		: nextProps.oneEmpData.lastName,	        
		        "email" 		: nextProps.oneEmpData.email,	        
		        "phone" 		: nextProps.oneEmpData.phone,	        
		        "dob" 			: nextProps.oneEmpData.dob,	        
		    });
		  }
		}
	}


	submitBasicInfo(event){
		event.preventDefault();
		var formValues = {
			firstName 		: this.refs.firstName.value,
			middleName 		: this.refs.middleName.value,
			lastName 		: this.refs.lastName.value,
			email 			: this.refs.email.value,
			phone 			: this.refs.phone.value,
			dob 			: this.refs.dob.value,		
		};

		if(this.state.action == "Submit"){
				Meteor.call("insertBasicInfo2",formValues,
											(error,result)=>{
												if(error){
													console.log("Something went wrong! Error = ", error);
												}else{
													swal("Congrats!","Your Information Submitted Successfully.","success");
													console.log("latest id = ",result);
													
												}
											});	
		}else{
			formValues._id = this.state.empId;
			Meteor.call("updateBasicInfo1",formValues,
										(error,result)=>{
											if(error){
												console.log("Something went wrong! Error = ", error);
											}else{
												swal("Congrats!","Employee Profile Updated Successfully.","success");
												console.log("latest id = ",result);
												
											}
										});	
		}

	}


	handleChange(event){
		event.preventDefault();
    this.setState({
        "firstName" 	: this.refs.firstName.value,	        
        "middleName" 	: this.refs.middleName.value,	        
        "lastName" 		: this.refs.lastName.value,	        
        "email" 		: this.refs.email.value,	        
        "phone" 		: this.refs.phone.value,	        
        "dob" 			: this.refs.dob.value,	        
    });

	}
    deleteEmpProfile(event){

    }

	render(){
		// console.log(this.props.oneEmpData[0]);
		var emp = this.props.oneEmpData[0];

		return (
			<div>
			<div className="row">

		    	<span className="col-lg-6 col-md-9 col-sm-9 col-xs-9"><h3>Employee Basic Info </h3></span>
	    		<div className="col-lg-6 col-md-3 col-sm-3 col-xs-3">
	    			<h3></h3>
		    		<a href={"/shiftAllot"} >
			    		<div id={""} className="actionIcon pull-right">
			    			<i className="fa fa-list"> </i>
			    		</div>
		    		</a>
		    		<h3></h3>
		    	</div>
		    	<hr/>
{/********************************************Input Fields Starts***********************************************/}


					<form className="col-lg-12">
						<div className="col-lg-12">	
					    	<div className="form-group col-lg-4 col-md-4 col-sm-6">
					    		<label>First Name</label>
					    		<div className="input-group">
						    		<span className="input-group-addon"><i className="fa fa-user"></i></span>
						    		<input type="text" value={this.state.firstName} ref="firstName" className="form-control" onChange={this.handleChange.bind(this)} />
						    	</div>
					    	</div>
					    	<div className="form-group col-lg-4 col-md-4 col-sm-6">
					    		<label>Middle Name</label>
					    		<div className="input-group">
						    		<span className="input-group-addon"><i className="fa fa-user"></i></span>
						    		<input type="text" value={this.state.middleName} ref="middleName" className="form-control" onChange={this.handleChange.bind(this)}  />
						    	</div>
					    	</div>
					    	<div className="form-group col-lg-4 col-md-4 col-sm-6">
					    		<label>Last Name</label>
					    		<div className="input-group">
						    		<span className="input-group-addon"><i className="fa fa-user"></i></span>
						    		<input type="text" value={this.state.lastName} ref="lastName" className="form-control"  onChange={this.handleChange.bind(this)} />
						    	</div>
					    	</div>
				    	</div>	

						<div className="col-lg-12">	
					    	<div className="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
					    		<label>Email</label>
					    		<div className="input-group">
						    		<span className="input-group-addon"><i className="fa fa-envelope"></i></span>
						    		<input type="email" value={this.state.email} ref="email" className="form-control"  onChange={this.handleChange.bind(this)} />
						    	</div>
					    	</div>
					    	<div className="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
					    		<label>Phone</label>
					    		<div className="input-group">
						    		<span className="input-group-addon"><i className="fa fa-phone"></i></span>
						    		<input type="phone" value={this.state.phone} ref="phone" className="form-control"  onChange={this.handleChange.bind(this)} />
						    	</div>
					    	</div>
					    	<div className="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
					    		<label>DoB</label>
					    		<div className="input-group">
						    		<span className="input-group-addon"><i className="fa fa-calendar"></i></span>
						    		<input type="Date" value={this.state.dob} ref="dob" className="form-control"  onChange={this.handleChange.bind(this)} />
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
						
				<div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
	    			<h3> Employee List </h3>
				</div>

				<table id="table-to-xls" className="table table-bordered table-hovered table-striped">
					<thead>
						<tr className="bg-primary"> 
							<th class="text-center"> Sr </th> 
							<th class="text-left"> Employee Name </th> 
							<th class="text-center"> Phone </th> 
							<th class="text-center"> Email </th> 
							<th class="text-center"> DOB</th>
							<th class="text-center"> DOB</th>
							<th class="text-center"> DOB</th>
						</tr>
					</thead>

					<tbody>
						{this.props.allEmp.map((emp,index)=>{
								return(
									<tr key={index}>
										<td> {index+1} </td>
										<td class="text-left"> {emp.firstName} {emp.middleName} {emp.lastName} </td>
										<td> {emp.phone} </td>
										<td> {emp.email} </td>
										<td> {emp.dob} </td>
										<td> {emp.dob} </td>
										<td> {emp.dob} </td>
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
	var empSub = Meteor.subscribe("allEmpData1");

	const oneEmpData = EmpMaster.find({}).fetch()||[];
	console.log("oneEmpData = ",oneEmpData);

	return {
		"loading" 		: !empSub.ready(),
		"oneEmpData" 	: oneEmpData,
		"allEmp" 		: oneEmpData,
	}

})(EmpBasicInfo);