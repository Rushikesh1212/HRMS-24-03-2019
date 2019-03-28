import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import swal from 'sweetalert';
import "/imports/empInduction/rollAllocation/newList/NewList.css";
import  { EmpMasterRoll } from '/imports/empInduction/rollAllocation/roleDesignation/rollAllocationApi.js';


class RoleApprove extends Component{
	constructor(props){
		super(props);
		this.state = {


			"firstName": "",
			"dateOfJoining": "",
			"mobileNumber": "",
		};		


	}
		deleteEmpRoleProfile(event){
		event.preventDefault();
		var empId = event.currentTarget.id;



		swal({
		  title: "Are you sure you want to delete?",
		  text: "Once deleted, you will not be able to recover this record!",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
				Meteor.call("deleteEmpRoleProfile",empId,
										(error,result) => {
											if(error){
												swal("Something is Wrong","Contact Your System Administrator","error");
												console.log(error);
											}else{
												swal("Great!","Delete is Successful!","success");
												// FlowRouter.go("/empInfo");
												console.log("id",empId);
											}
										}
				);
		  } else {
		    swal("This record is safe!");
		  }
		});

	
	}


	render(){		

		return (
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tableTitle">
			    		<h3> Allocate Roles & Department to Following Employees </h3> 
			    	</div>
						

					<table id="empListTable" className="table  table-striped">
						<thead>
							<tr > 
								<th> Sr </th> 
								<th> Employee Name </th> 
								<th> Joined On </th> 
								<th> Mobile Number </th> 
								<th> Role & Dept</th>
								<th> Approval</th>
							
							</tr>
						</thead>
							<tbody>
									{	this.props.ApproveData.map( (emp,index)=>{
												return(

													<tr key={index}>
														<td> {index+1} </td>
														<td> {emp.firstName} </td>
														<td> {emp.dateOfJoining} </td>
														<td> {emp.mobileNumber} </td>
														<td>
															<img src="/images/check.png" className="checkImg " />
																Allocated	
														</td>
														<td>
																<button type="submit" className=" submit">Approve</button>
																<img id={emp._id} src="/images/cancel.png" className="checkImg" onClick={this.deleteEmpRoleProfile.bind(this)}/>	
														</td>
													
													
														
													</tr>	
												);
											})

											}
									
						</tbody>


					</table>
			  </div>	
		  </div>
		);
	};
}


  




export default withTracker(()=>{
	
	const empSubHandle = Meteor.subscribe("allEmpDataRole");
	const EmpData = EmpMasterRoll.find({}).fetch()||[{}];
	
	let data =EmpData;
	console.log("data", data);
	let ApproveData=[];
	console.log("ApproveData", ApproveData);

	for(var i=0;i<data.length;i++){
		console.log("i", i);
		
		if(data[i].status=="Allocate"){

				ApproveData.push(data[i])
				console.log("ApproveData",ApproveData);
			}
		
	}


	return {
		"allEmpRole" 			: EmpData,
		"ApproveData"		:ApproveData,
		

	}
})(RoleApprove);