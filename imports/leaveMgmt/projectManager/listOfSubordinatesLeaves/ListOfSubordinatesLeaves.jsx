import React, {Component} from 'react';
import ReactTable from "react-table";
import swal from 'sweetalert';
import { withTracker } from 'meteor/react-meteor-data';


import 'react-table/react-table.css';
import "./ListOfSubordinatesLeaves.css";

import { ListOfLeave } from "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/listOfSubordinatesLeaves.js";
import ListOfRejectedLeaves from "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/ListOfRejectedLeaves/ListOfRejectedLeaves.jsx";
import ListOfSubordinatesLeavesForm from "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/ListOfSubordinatesLeavesForm/ListOfSubordinatesLeavesForm.jsx";


class ListOfSubordinatesLeaves extends Component{
	constructor(props){
		super(props);
		var recordId = FlowRouter.getParam("recordid");


		this.state = {
			"recordId"	 			: recordId,
			"rowId"					: "",
			"EmployeeId" 			: "",	
			"EmployeeName"			: "Unknown",	
			"Department"			: "Unknown",
			"Designation"			: "Unknown",
			"LeaveType"				: "",
			"WorkingDays"			: "",
			"From":"",
			"To":"",
			"ReasonForLeaveRemark"	: "",
    		"isHidden"				: false,
		};			
	}

	deleteSubordinateData(row)
	{
		var checkId = this.state.rowId;
		var rowId = row._id;
		if(checkId==rowId)
		{
			swal({
			  title: "Can't Delete Open Record....",
			  icon: "warning",
			  dangerMode: true,
			})
			
		}	
		else{
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
	}
	
	toggleHidden (row) 
	{
	    this.setState({
	    "rowId"	: row._id,
	      isHidden: true

	    })
  	}	
// ================================Rendering Data========================

	render(){
		
  		const data = this.props.allData;	// Getting all data in rows of table.
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
		  	Header: 'Status',
		    accessor: 'status', 
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
		    Cell: row => 
		    (
	    	<div className="actionDiv">
	          <div className="" onClick={() => this.deleteSubordinateData(row.original)}>
				<i className="fa fa-trash"> </i>
	          </div>
	        </div>
		    )
        	}]
        	
		return (

			<div className="col-lg-12">
				<div className="row">

		    		<div className="col-lg-12 tabs">
			    		<ul className="nav nav-tabs">
					    	<li className="active"><a data-toggle="tab" href="#leaveTable">List Of Leave</a></li>
					    	<li><a data-toggle="tab" href="#rejectedLeaves">List Of Rejected Leaves</a></li>
					  	</ul>
				  	
				  		<div className="tab-content">
				  			<div className="tab-pane fade in active" id="leaveTable">
								<div className="descTable tab-pane fade in active col-lg-12">	
									<ReactTable
    									data={data}
    									columns={columns}
    									defaultPageSize={5}
    									showPagination={true}
 									/>
 								</div>
 								<div className="col-lg-12">
 								    { this.state.isHidden  ? <ListOfSubordinatesLeavesForm props={this.state.rowId}/> : null }
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
export default withTracker(()=>{
	

	const empSubHandle = Meteor.subscribe("allRecordData");
	const allEmpData = ListOfLeave.find({}).fetch()||[{}];
	console.log(allEmpData);
	return {
		"allData" 		: allEmpData,
	}
})(ListOfSubordinatesLeaves);
