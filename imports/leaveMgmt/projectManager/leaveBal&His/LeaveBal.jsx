import React, {Component} from 'react';
import ReactTable from "react-table";
import swal from 'sweetalert';
import 'react-table/react-table.css';

export default class LeaveBal extends Component{
	constructor(props){
		super(props);
				
	}


// ================================Rendering Data========================

	render(){
		
		const data =[
		{
    		LeaveType: '',
    		FromDate: 20,
    		ToDate: 4,
    		NoOfDays: 2,
    		Remark: 3,
    		Status: '-',
    		Action:"E"

  		},
  		]
  		const detailsData =[
		{
    		LeaveType: 'PL',
    		MaxLeavesPerYear: 20,
    		MaxLeavesataTime: 4,
    		MinLeavesPerYear: 2,
    		NumOfTimesPerYear: 3,
    		LeavesDuringProbationPeriod: '-',
    		Action:"E"

  		},
  		]
  		const columns = [
		  	{
		    Header: 'Leave Type',
		    accessor: 'LeaveType',
		  	},
		  	{
		  	Header: 'From Date',
		    accessor: 'MaxLeavesPerYear', 
		  	},
		  	{
		  	Header: 'To Date',
		    accessor: 'MaxLeavesataTime', 
		  	},
		  	{
		  	Header: 'Remark',
		    accessor: 'MinLeavesPerYear', 
		  	},		  	
		  	{
		  	Header: 'Status',
		    accessor: 'NumOfTimesPerYear', 
		  	},
		  	{
		    Header: 'Action',
		    accessor: 'Action',
		    Cell: row => (
		    	<div className="actionDiv">
		          <button className="col-lg-4">
 				    <i className="fa fa-trash"> </i>
		          </button>
		          <button className="col-lg-4">
				    <i className="fa fa-pencil"> </i>
		          </button>
		        </div>
		        )
        	}]
        	const detailsColumns = [
  			{
		    Header: 'Leave Type',
		    accessor: 'LeaveType',
		  	},
		  	{
		  	Header: 'PL',
		    accessor: 'MaxLeavesPerYear', 
		  	},
		  	{
		  	Header: 'SL',
		    accessor: 'MaxLeavesataTime', 
		  	},
		  	{
		  	Header: 'CL',
		    accessor: 'MinLeavesPerYear', 
		  	},		  	
		  	{
		  	Header: 'ML',
		    accessor: 'NumOfTimesPerYear', 
		  	},
		  	{		
		  	Header: 'EL',
		    accessor: 'LeavesDuringProbationPeriod', 
		  	},
		  	{		
		  	Header: 'TL',
		    accessor: 'LeavesDuringProbationPeriod', 
		  	},
		  	{		
		  	Header: 'XL',
		    accessor: 'LeavesDuringProbationPeriod', 
		  	},
		  	{		
		  	Header: 'LW',
		    accessor: 'LeavesDuringProbationPeriod', 
		  	},
		  	]
        	

        	
		return (

			<div className="col-lg-12 ">
				<div className="row">

		    		<div className="col-lg-12 tabs">
			    		<ul className="nav nav-tabs">
					    	<li className="active"><a data-toggle="tab" href="#leaveTable">Leave Policy Settings</a></li>
					  	</ul>
					  	
					  		<div className="tab-content">
					  			<div className="tab-pane fade in active" id="leaveTable">

						  			
									<div className="descTable tab-pane fade in active col-lg-12">
										
										<ReactTable
	    									data={detailsData}
	    									columns={detailsColumns}
	    									defaultPageSize={3}
	    									showPagination={false}

	 									/>
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
