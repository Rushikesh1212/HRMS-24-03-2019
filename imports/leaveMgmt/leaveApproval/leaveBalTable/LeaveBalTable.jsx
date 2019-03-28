import React, {Component} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import "/imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.css";

export default class LeaveBalTable extends Component
{

	render()
	{
		const data = [
			{
			lt:'Total Leaves',
		    pl: 12,
		    sl: 3,
		    cl: 5,
		    ml: 90,
		    lwp: 10,
		  }, {
			lt:'Leaves Taken',
		    pl: 7,
		    sl: 0,
		    cl: 3,
		    ml: 0,
		    lwp: 2,
		  }, {
			lt:'Leave Balance',
		    pl: 5,
		    sl: 3,
		    cl: 2,
		    ml: 90,
		    lwp: 8,
		  }
		]
			 
		const columns = [
		  {
		    Header: 'Leave Type',
		    accessor: 'lt' // String-based value accessors!
		  }, {
		    Header: 'PL',
		    accessor: 'pl' // String-based value accessors!
		  }, {
		    Header: 'SL',
		    accessor: 'cl',
		    /*Cell: props => <span className='number'>{props.value}</span> // Custom cell components!*/
		  }, {
		    Header: 'CL',
		    accessor:'cl'  // Custom value accessors!
		  }, {
		    Header: 'ML', // Custom header components!
		    accessor: 'ml'
		  }, {
		    Header: 'LWP', // Custom header components!
		    accessor: 'lwp'
		  }
		]



		return(
			 <ReactTable className="text-center -striped -highlight lbt"
						   	showPagination={0}
						   	minRows={0}
						    data={data}
						    columns={columns}
						  />
		)

	}

}
