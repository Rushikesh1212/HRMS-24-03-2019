import React, {Component} from 'react';
import "/imports/leaveMgmt/leaveApproval/leaveView/LeaveView.css";

export default class LeaveView extends Component{
	constructor(props){
		super(props);
		this.state = {
		};		
	}


	render(){
		return (<div >
			<div className="row col-lg-10 col-lg-offset-1 col-md-10 col-sm-10 col-xs-12">

					<table className="table table-bordered table-hover">
						<h4 className="text-center bold"><b/> IPCA Laboratories Ltd.</h4>
							<h6 className="text-center"> Kandevali [W] Mumbai-102312</h6>
					
							<div className="row col-lg-10  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml20 bold">Leave Application No. :  123456</div>
							</div>

							<div className="row col-lg-2  col-md-10 col-sm-10 col-xs-12 pull-right mt20">
							<div>Date :  1-1-2019</div>
							</div>

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

					</table>
    		</div>


    			<div className="row col-lg-10 col-lg-offset-1 col-md-10 col-sm-10 col-xs-12">

					<table className="table table-bordered table-hover">
						
					
							<div className="row col-lg-10  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml20 bold">Leave Type :  XXXXXXXXX</div>
							</div>


						
							<div className="row col-lg-4  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml20 bold">From :  6-JUL-2019</div>
							</div>
							<div className="row col-lg-4  col-md-10 col-sm-10 col-xs-12 mt20 bold">
							<div>To :  6-JUL-2019</div>
							</div>

							<div className="row col-lg-4  col-md-10 col-sm-10 col-xs-12 mt20 bold">
							<div>Working Days :  3</div>
								</div>

									<div className="row col-lg-12  col-md-12 col-sm-12 col-xs-12 mt20">
							<div className="ml20 bold">Remark :  XXXXX  XXXXXXX  XXXXXXX  XXXXXXX  XXXXXX  XXXXXXXXX 
							
							</div>
							</div>

							
					</table>
					<div className="row">
			<div className=" col-lg-12  col-md-10 col-sm-10 col-xs-12">
				<table class="table table-bordered table-hover">
						<thead>
							<tr className="table table-hover" >
								<th>Leave Type</th>
								<th>PL</th>
								<th>SL</th>
								<th>CL</th>
								<th>ML</th>
								<th>EL</th>
								<th>TL</th>
								<th>XL</th>
								<th>LW</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Max Leaves</td>
								<td>24</td>
								<td>07</td>
								<td>07</td>
								<td>07</td>
								<td>07</td>
								<td>07</td>
								<td>07</td>
								<td>07</td>
							</tr>
							<tr>
								<td>Taken Leaves</td>
								<td>24</td>
								<td>02</td>
								<td>02</td>
								<td>02</td>
								<td>02</td>
								<td>02</td>
								<td>02</td>
								<td>02</td>
							</tr>
							<tr>
								<td>Leave Balance</td>
								<td>14</td>
								<td>05</td>
								<td>05</td>
								<td>05</td>
								<td>05</td>
								<td>05</td>
								<td>05</td>
								<td>05</td>
							</tr>
						</tbody>
					</table>
			</div>
			</div>
			<div className="row">
				<div className=" col-lg-12  col-md-10 col-sm-10 col-xs-12">
					<h4 className="mart10 bold bg-primary">Approval Section</h4>
				</div>
    		</div>
    		<div className="">
    		<div className="col-lg-12  col-md-10 col-sm-10 col-xs-12">
    	
    				<div className="col-lg-6  col-md-10 col-sm-10 col-xs-12 row">
    					<div className="border1">
	    					<div className="col-lg-12  col-md-10 col-sm-10 col-xs-12">
	    						<h5 className="bold">HR Aprooval</h5>
			    			</div>
				    		<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
									<div className="ml21">Name : XXXXX XXXXX </div>
							</div>
							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
										<div className="ml22">(Emp ID:123456)</div>
							</div>
							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
									<div className="ml21">Date: 05/04/1993</div>
							</div>
							<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
									<div className="ml22 ">Status:<span className="bold text-primary pdl">Approved</span>
									</div>
							</div>
					</div>
				</div>

				<div className="col-lg-6  col-md-10 col-sm-10 col-xs-12 row ">
				<div className="border2">
    					<div className="col-lg-12  col-md-10 col-sm-10 col-xs-12">
    						<h5 className="bold">Other Aprooval</h5>
		    			</div>
		    		<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml21">Name : XXXXX XXXXX </div>
							</div>
					<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml22">(Emp ID:123456)</div>
					</div>
					<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml21">Date: 05/04/1993</div>
					</div>
					<div className="row col-lg-6  col-md-10 col-sm-10 col-xs-12 mt20">
							<div className="ml22 ">Status:<span className="bold text-primary pdl">Approved</span>
							</div>
					</div>

				</div>	
				</div>
  
    	</div>
    	</div>
    	</div>
    	
    </div>
   
		);
	};
}


