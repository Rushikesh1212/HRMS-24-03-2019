import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { withTracker } from 'meteor/react-meteor-data';

// import { EmpMaster } from '/imports/attendanceMgmt/attendance/fetchAbsent/empMaster.js';
import { Attendance } from '/imports/attendanceMgmt/employeeViewModule/graphicalReport/MonthlyCalendar/apiGraphical.js';

import "./dataAbsent.css";


class DataAbsent extends Component{
	constructor(props){
		super(props);
		var urlEmpId = FlowRouter.getParam("_id");
		if(urlEmpId){
			var action = "Update";
		}else{
			var action = "Submit";
		}

	this.state = {
			"empId" : urlEmpId,
			"action" : action,
			"firstName": "",
			"date": "",
			"day": "",
			"shift": "",
			"inTime": "",
			"outTime": "",
			"status": true,
			"name":"",
		};
	}	

	componentWillReceiveProps(nextProps) {
  	if(!nextProps.loading){
      if(nextProps.oneEmpData){
		    this.setState({
		        "_id" : nextProps.oneEmpData._id,
		        "date" 	: nextProps.oneEmpData.Date,	        
		        "day" 	: nextProps.oneEmpData.Day,	 
		        "status" 	: nextProps.oneEmpData.Status,

		        
		    });
		  }
		}
	}

	
	getUserName(event)
	{
		event.preventDefault();
		this.setState({name:this.refs.empName.value});
		console.log("name value",this.state.name)

	}


	render(){

		var emp = this.state.empID;
		
		const data = this.props.absentRecord;
		console.log("data=",data);


			return (

				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						
						
					</div>
			

							 <div className="col-lg-10 col-md-2 col-sm-2 col-xs-2 form-group">
      							
      							</div>
    						
    				




						
							
                        

						<table id="table-to-xls" className="col-lg-2  table m-table table-bordered table-condensed w-auto table-hovered table-striped absentDataTable">
							<thead>
								<tr className="bg-primary"> 
									  
									 <th className="col-lg-2 col-md-10 col-sm-2 col-xs-2 text-left" rowSpan="3"> Date </th>
									 <th className="col-lg-2 col-md-10 col-sm-2 col-xs-2 text-left" rowSpan="3"> Day </th>
									
									
									
								</tr>
							</thead>

							<tbody>
								{this.props.absentRecord.map( (emp,index)=>{
										
										
										return(
											<tr key={index}>
												
												{/* <td> {} </td>*/}
												<td> {emp.Date} </td>
												<td> {moment(emp.Date).format('dddd')} </td>
												
											</tr>
										);
									})
								}
							</tbody>

						</table>

				  	</div>

		  		
		);
	};
}


export default withTracker((name)=>{

	const empSubHandle = Meteor.subscribe("allAbEmpData");
	var allAbEmpData = Attendance.find().fetch();

// { $and:[{"Name":name.userName},{"Status":"A"}]}
	let data=allAbEmpData;
	let absentRecord=[];
	for(var i=0; i<data.length;i++){
		for (var j=0;j<data[i].dailyAttendance.length;j++) {
			if(data[i].dailyAttendance[j].Status=="A"){
					let record={
					Date: data[i].dailyAttendance[j].Date,
				};
					if(record.Date){
					absentRecord.push(record);
				}
			}
			
		}
	}
	console.log("absentRecord",absentRecord);
			

	return {
		"loading"		: !empSubHandle.ready(),
		"absentRecord"  : absentRecord

	}
})(DataAbsent);