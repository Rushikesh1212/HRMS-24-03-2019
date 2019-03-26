import React, {Component} from 'react';
import "/imports/leaveMgmt/leaveApproval/leaveView/LeaveView.css";

export default class LeaveView extends Component{
	constructor(props){
		super(props);
		this.state = {
		};		
	}


	render(){
		return (<div>
			<div className="row col-lg-10 col-lg-offset-1 col-md-10 col-sm-10 col-xs-12">

					<table class="table table-bordered table-hover table-striped">
						<thead>
							<tr>
								<th>Employee Id</th>
								<th>Leave Type</th>
								<th>From Date</th>
								<th>To Date</th>
								<th>No. of Days</th>
								<th>Remark</th>
								<th>Status</th>
								<th>View details</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>536180</td>
								<td>Sick</td>
								<td>01/01/2019</td>
								<td>05/01/2019</td>
								<td>5</td>
								<td>Aprooved</td>
								<td>Ongoing</td>
								<td>View</td>
								<td>Na</td>
								<td>Na</td>
							</tr>
							<tr>
								<td>536181</td>
								<td>Sick</td>
								<td>01/01/2019</td>
								<td>05/01/2019</td>
								<td>5</td>
								<td>Aprooved</td>
								<td>Ongoing</td>
								<td>View</td>
								<td>Na</td>
								<td>Na</td>
							</tr>
							<tr>
								<td>536183</td>
								<td>Sick</td>
								<td>01/01/2019</td>
								<td>05/01/2019</td>
								<td>5</td>
								<td>Aprooved</td>
								<td>Ongoing</td>
								<td>View</td>
								<td>Na</td>
								<td>Na</td>
							</tr>
						</tbody>
					</table>
    		</div>

    		<div>
    			<div className="row col-lg-8 col-lg-offset-1 col-md-10 col-sm-10 col-xs-12">
					<h3>Leave Request</h3> 
					<table class="table table-bordered table-hover">
					
							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml20">Employee Id :  E001</div>
							</div>

							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div>Employee Name :  Amar</div>
							</div>
							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml20">Department :  Web Development</div>
							</div>
							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div>Designation :  Web Developer</div>
							</div>
							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml20">Leave Type :  Priveldged Leave </div>
							</div>
							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div>Working Days :  3</div>
							</div>
							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml20">From :  6-JUL-2019</div>
							</div>
							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div>To :  6-JUL-2019</div>
							</div>
							<div className="row col-lg-12  col-md-12 col-sm-12 col-xs-12 mt20">
							<div className="ml20">Reason for leave/Remark : <hr className="amhr"/>
							<hr className="amhr1"/>
							</div>
							</div>

							<div className="row col-lg-12  col-md-12 col-sm-12 col-xs-12 ml5">
							<input type="text" placeholder="Give reason if you reject the leave" />
							</div>
							<button className="btn btn1 bg-danger "> Reject</button>
							<button className="btn btn2 bg-success"> Approve</button>
						
					</table>
    		</div>
    			<div className="row col-lg-1 col-lg-offset-1 col-md-2 col-sm-2 col-xs-2 mt100 amcir">
					
						<div className="amatext">4/10</div>
					
    		</div>
    		</div>

    		</div>
		);
	};
}


