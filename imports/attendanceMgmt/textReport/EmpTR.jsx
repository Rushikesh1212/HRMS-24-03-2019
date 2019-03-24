import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';


// import { Attendance } from '/imports/attendanceMgmt/fetchCSV/empMaster.js';
import { Attendance } from '/imports/attendanceMgmt/attendanceSystem/MonthlyCalendar/apiGraphical.js';


import "/imports/attendanceMgmt/textReport/dataCSV.css";
// import '/imports/attendanceMgmt/layouts/SubHeader/header.css';
import moment from 'moment';


// import Moment from 'react-moment';
// import 'moment-timezone';


// var empId1=0;

class EmpTR extends Component{
	

		constructor(props){
		super(props);
		var urlEmpId = FlowRouter.getParam("EmpId");
		// var allData = this.props.allEmp;
		// console.log("constructor data", allData);
		if(urlEmpId){
			var action = "Update";
		}else{
			var action = "Submit";
		}
		
	

		this.state = {
			"empId" : urlEmpId,
			"action" : action,
			"Name": "",
			"Date": "",
			"shift": "",
			"InTime": "",
			"OutTime": "",
			"Status": ""			
		};		

		
	}




  componentWillReceiveProps(nextProps) {
  	if(!nextProps.loading){
      if(nextProps.oneEmpData){
		    this.setState({
		    	"E_Code" 			: nextProps.oneEmpData.E_Code,
		    	"Name" 	 			: nextProps.oneEmpData.Name,
		    	"shift"  			: nextProps.oneEmpData.dailyAttendance.shift,	
		        "Date" 	 			: nextProps.oneEmpData.dailyAttendance.Date,               
		        "InTime" 			: nextProps.oneEmpData.dailyAttendance.InTime,	        
		        "OutTime" 			: nextProps.oneEmpData.dailyAttendance.OutTime,
		        "Status" 			: nextProps.oneEmpData.dailyAttendance.Status,	 
		        
		          
		    });
		  }
		}
	}

	

	




	render(){	
		

		 	
			

		

		  const data=this.props.oneEmp;	
		  console.log("data=",data);

		
		 let daily=this.props.dailyAttendance;	
		  console.log("data attendance adata=",daily);

			
	

		return (
			<div className="row form_text">

			
				

			


				<div className='col-lg-12'>
					
						<header className='timesFont'>
							<h3>Attendance Record for Employee</h3>
				
						</header>
						<hr />
		    		
		    	</div>

				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					
					
					<div className="row col-lg-12 upperpart">
						<div className="col-lg-6 pull-left">
							<p className="form_label pull-left">Employee Id :</p>
							
							<div className="col-lg-2 pull-left form_text">
								<div> dev_101 </div>
								
							</div>
						</div>
						<div className="col-lg-6 pull-left form_label">

							<p className="pull-left"> Calendar : </p> 
						
						<div className=" pull-left">

							 <div className="dropdown">
								  <button className="btn btn-primary dropdown-toggle form_text" type="button" data-toggle="dropdown">Monthly
								  <span className="caret"></span></button>
								  <ul className="dropdown-menu">
								    <li><a href="#" className="form_text">Jan</a></li>
								    <li><a href="#"  className="form_text">Feb</a></li>
								    <li><a href="#"  className="form_text">Mar</a></li>
								  </ul>
							</div> 
						</div>
						</div>

							
            				
					</div>	

				
				<div className="row col-lg-12">
				  
				  
				  <table className="table text-center">
				    <thead className="t_head">
				      <tr>
				        <th>Present</th>
				        <th>Leaves</th>
				        <th>Absentee</th>
				        <th>Public Holiday</th>
				        <th>Company Holiday</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td>21 Days</td>
				        <td>2 Days</td>
				        <td>3 Days</td>
				        <td>10 Days</td>
				        <td>5 Days</td>
				      </tr>
				     
				    </tbody>
				  </table>
				</div>


					
						
			    	<div className="row col-lg-12" >
					<table   className="table table-striped text-center col-lg-10 col-lg-offset-2">
						<thead className="t_head">
							<tr> 
								
								<th> Date </th>
								<th> Day</th>
								<th> InTime</th>
								<th> OutTime</th>
								<th> Hrs</th>
								<th> OT </th>
								<th> Status </th>
								
								

								
							</tr>
							
						</thead>

						<tbody>
							
										{ 
										 	this.props.dailyAttendance.map((daily,i) => {
		           						 	return(

		           						 		<tr key={i}>

		           						 		<td>{daily.Date}</td>
		           						 		<td>{moment(daily.Date).format('dddd')}</td>
		           						 		<td>{daily.InTime}</td>
		           						 		<td>{daily.OutTime}</td>
		           						 		<td>{daily.netHours}</td>
		           						 		<td>{daily.OT}</td>
		           						 		<td>{daily.Status}</td>

		           						 		</tr>
		            						
		            									
											
		            						);
            						
        	 					 			})
       						 			}	
											
												
												

												
												
											

											 

										

									
							
								
							
						</tbody>

					</table>
					  
					  

					</div>
			  </div>	


		




		
		</div>

		);
	};
}


// 		<td>{moment(emp.dailyAttendance.Date).format('dddd')}</td>

export default withTracker(()=>{
	const empSubHandle = Meteor.subscribe("oneEmpData");
	const oneEmpData = Attendance.find({}).fetch()||[{}];
	// const dailyAttendance = EmpMaster.find({});

	console.log("tracker data",oneEmpData);
	let data=oneEmpData;
	// console.log("here data",data[0].dailyAttendance);


			  
		let InTime=[];
		let newInTime=[];
		let mathIn=[];	  

		let OutTime=[];
		let newOutTime=[];
		let mathOut=[];

		let netHours= [];
		let attendance=[];

	let dailyAtt=[];

	
	

	for(var i = 0; i < data.length;i++){
		for(var j=0;j<data[i].dailyAttendance.length;j++){

			InTime[j]=data[i].dailyAttendance[j].InTime;
		  	  newInTime[j]=InTime[j].split(":");
		  	   mathIn[j] = newInTime[j].join(".");
		  	   // console.log("math in data",mathIn[j]);


		  	   OutTime[j]=data[i].dailyAttendance[j].OutTime;
		  	  newOutTime[j]=OutTime[j].split(":");
		  	  mathOut[j] = newOutTime[j].join(".");
		  	   // console.log("math out data",mathOut[j]);
			
			netHours[j]=mathOut[j]-mathIn[j];

			if (netHours[j]>9) {
				attendance[j] = netHours[j] - 9;
			}
			else{
				attendance[j] = 0;
			}

			let DailyRecord = 
			{
				Date: data[i].dailyAttendance[j].Date,
				shift: data[i].dailyAttendance[j].shift,
				InTime: data[i].dailyAttendance[j].InTime,
				OutTime : data[i].dailyAttendance[j].OutTime,
				Status: data[i].dailyAttendance[j].Status,
				netHours: Math.round(netHours[j]),
				OT: Math.round(attendance[j]),
				
			};

			console.log("date=",DailyRecord.Date);


			if(DailyRecord.InTime){
				dailyAtt.push(DailyRecord)
			}

			
		}

	}

	// console.log("here attendance data",dailyAtt);

	
		  
		
	return {
		"loading"			: !empSubHandle.ready(),
		"oneEmp" 			: oneEmpData,
		"dailyAttendance"	: dailyAtt,
		"netHours"			: netHours,
	
	}
})(EmpTR);


 