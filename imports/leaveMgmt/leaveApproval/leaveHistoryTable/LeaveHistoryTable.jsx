import React, {Component} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { withTracker } from 'meteor/react-meteor-data';
import { LeaveApproval } from "/imports/leaveMgmt/leaveApproval/leaveapproval.js";


class LeaveHistoryTable extends Component{

  



  render(){
	// const data = [{
	// 								emp_id:'01',
	// 						    lt: 'CL',
	// 						    fd: '23/11/2019',
	// 						    td: '27/11/2019',
	// 						    nd: 5,
	// 						    rem:'',
	// 						    st: 'Granted',
	// 						    edit: 45,
	// 						    dlt: 75,
	// 						  }, {
	// 								emp_id:'02',
	// 						    lt: 'SL',
	// 						    fd: '23/11/2019',
	// 						    td: '27/11/2019',
	// 						    nd: 5,
	// 						    rem:'',
	// 						    st: 'Pending',
	// 						    edit: 45,
	// 						    dlt: 75,
	// 						  }, {
	// 								emp_id:'03',
	// 						    lt: 'PL',
	// 						    fd: '23/11/2019',
	// 						    td: '27/11/2019',
	// 						    nd: 5,
	// 						    st: 'Rejected',
	// 						    edit: 45,
	// 						    dlt: 75,
	// 						  }]
								const data = this.props.leaveData;

								if(data){
								console.log("data", data);
							 }
							  const columns = [
							  
							    // Header: 'Employee ID',
							    // accessor: 'emp_id' // String-based value accessors!
							  {
							    Header: 'Leave Type',
							    accessor: 'lt' // String-based value accessors!
							  }, {
							    Header: 'From Date',
							    accessor: 'from'
							    /*Cell: props => <span className='number'>{props.value}</span> // Custom cell components!*/
							  }, {
							    Header: 'To Date',
							    accessor:'to'  // Custom value accessors!
							  }, {
							    Header: 'No. of Days', // Custom header components!
							    accessor: 'nwd'
							  }, {
							    Header: 'Reason', // Custom header components!
							    accessor: 'rsn'
							  // }, {
							  // 	Header: 'Status',
							  // 	accessor: 'st' 
							  // },{
							  // 	Header: 'Edit',
							  // 	accessor:'edit'
							  // },{
							  // 	Header:'Delete',
							  // 	accessor:'dlt'
							  }]

			return(
				<ReactTable className="text-center -striped -highlight"
					   	showPagination={0}
					   	minRows={0}
					    data={data}
					    columns={columns}
					  />
			)		
}

}

export default withTracker(()=>{
	const leaveSubHandle = Meteor.subscribe("leaveData");
	const leaveData = LeaveApproval.find({}).fetch()||[{}];

	return{
		// loading : leaveSubHandle.ready();
		"leaveData" : leaveData,
	}
})(LeaveHistoryTable);