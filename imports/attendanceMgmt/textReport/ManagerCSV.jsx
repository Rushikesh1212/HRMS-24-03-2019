import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';




// import { Attendance } from '/imports/attendanceMgmt/fetchCSV/empMaster.js';
import { Attendance } from '/imports/attendanceMgmt/attendanceSystem/MonthlyCalendar/apiGraphical.js';



import "/imports/attendanceMgmt/textReport/dataCSV.css";


// var empId1=0;

class ManagerCSV extends Component{
	

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

		 // this.deleteRecord = this.deleteRecord.bind(this);
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
		        
		            // console.log("setting value",this.state.InTime);
		    });
		  }
		}
	}

	

	




	render(){	
		

		 	
			

		

		  const data=this.props.allEmp;	
		  console.log("data=",data);



		  const columns = [{
				Header: ' Employee Name ',
				accessor: 'Name' // String-based value accessors!
				}, {
				Header: 'Employee ID',
				accessor: 'E_Code'
				
				}]


		return (
			<div className="row form_text">


				<div className='col-lg-12'>
					
						<header className='timesFont'>
							<h3>Attendance Record for Manager</h3>
				
						</header>
						<hr />
		    		
		    	</div>

				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				
			    	<div className="row col-lg-12" >

			   {/*}  	<ReactTable
						// 	data={data}
						// 	columns={columns}
						// 	sortable={true}
						// 	filterable={true}
						// />*/}


					<table   className="table table-striped text-center">
						<thead className="t_head">
							<tr> 
								<th> Employee Name </th>
								<th> Employee ID</th> 
								<th> Current Month Absentee</th>  
								<th> Current Year Absentee </th> 
								
							</tr>
						</thead>

						<tbody>
							{	this.props.AbsenteeAtt.map( (ab,index)=>{
									return(
										<tr key={index}>
											<td> {ab.Name} </td>
											<td> {ab.E_Code} </td>
											<td> {ab.count}</td>
											<td> {ab.yearCount}</td>
											
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


// 

export default withTracker(()=>{
	const empSubHandle = Meteor.subscribe("allEmpData");
	const allEmpData = Attendance.find({}).fetch()||[{}];

	console.log("all emp data",allEmpData);
	let data=allEmpData;

	let count=0;
	let AbsenteeAtt=[];
	let recDate=[];
	let sepDate=[];

	let yearCount=0;

	// let onlyYear;
	// let currentYear = new Date().getFullYear();
	// console.log("currentYear", currentYear);
	// let currentMonth = new Date().getMonth();
	// console.log("currentMonth", currentMonth);

	for(var i = 0; i < data.length;i++){

		for(var j=0;j<data[i].dailyAttendance.length;j++){

			if (data[i].dailyAttendance[j].Status == "A") {

				count++;
				 recDate = data[i].dailyAttendance[j].Date;
				  
				  // console.log(" date", recDate);
				  sepDate = recDate.split("-");

				console.log("only year", sepDate[2]);

				if(sepDate[2] == "2019")
				{
					yearCount++;
				}

			}
				
				  // console.log(" date", recDate);
				//   sepDate = recDate.split("-");

				// console.log("date", sepDate);

			
				
			
			
		}
		let IdAbsenteeRecord={
						Name:data[i].Name,
						E_Code:data[i].E_Code,
						count:count,
						yearCount:yearCount,
						// recDate:recDate,
					}

				// console.log("date of rec", recDate);

					if(IdAbsenteeRecord.Name){
						AbsenteeAtt.push(IdAbsenteeRecord);
					}
		count=0;
		yearCount=0;
	}

	console.log("absentee all data",AbsenteeAtt);

			
	return {
		"loading"		: !empSubHandle.ready(),
		"allEmp" 		: allEmpData,
		"AbsenteeAtt"	: AbsenteeAtt,
		
	}
})(ManagerCSV);


 