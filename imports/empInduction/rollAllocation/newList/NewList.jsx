import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';

import "/imports/empInduction/rollAllocation/newList/NewList.css";
import  { EmpMaster } from '/imports/empInduction/rollAllocation/roleDesignation/rollAllocationApi.js';

class NewList extends Component{
	constructor(props){
		super(props);
		this.state = {
			

			"firstName": "",
			"dateOfJoining": "",
			"mobileNumber": "",
			
		};		


	}





render(){
		var emp = this.props.new[0];
	
		
		console.log("empNew = ",emp);		

		return (
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tableTitle">
			    		<h3> Allocate Roles & Department to Following Employees </h3> 
			    	</div>
						

					<table id="empListTable" className="table table-striped">
						<thead>
							<tr > 
								<th> Sr </th> 
								<th> Employee Name </th> 
								<th> Joined On </th> 
								<th> Mobile Number </th> 
								<th> Role & Dept</th>
							
							</tr>
						</thead>
							<tbody>
							
										{	this.props.new.map( (emp,index)=>{
												return(
													<tr key={index}>
														<td> {index+1} </td>
														<td> {emp.firstName} </td>
														<td> {emp.dateOfJoining} </td>
														<td> {emp.mobileNumber} </td>
														<td>
															<a href={"/RoleDesignation/"+emp._id}>
																<u>Allocate</u>
															</a>
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
		"allEmpRoleNew" 			: EmpData,
		"new"				: New,
	}
})(NewList);

