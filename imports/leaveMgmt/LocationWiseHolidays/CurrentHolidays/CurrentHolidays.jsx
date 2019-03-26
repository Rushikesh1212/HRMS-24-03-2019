import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { LwhMaster } from '/imports/leaveMgmt/LocationWiseHolidays/lwhMaster.js';




class CurrentHolidays extends Component{
	constructor(props){
		
		super(props);
		this.state = {	
		};		
	
	}






	render(){

		return (
			<div>				
				<div className="tab-pane" id="tab2">
					
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tabbable"> 
				
						<div className="tab-content">
							<div className="tab-pane active" id="tab3">
							  <h4> Holidays </h4>
									
{/*=========================================================================================================
	                                      Location Wise Holidays table
	========================================================================================================*/}
					<table id="table-to-xls"  className="table  table-bordered table-hovered table-striped holiday-history-mt">
									<thead>

										<tr> 
											<th> Holiday Date </th>
											<th> Holiday Name </th>
										</tr>

									</thead>

									<tbody>
										 { 
											 	this.props.listOfHolidays.map((item,index1) => {
			           						 	return(
			            							<tr key={index1}>
			            								<td >{item.holidayDate}</td>
			            								<td >{item.holidayDesc}</td>		
													</tr>

			            						);
			            						
			        	 					 })
			       						 }
									</tbody>
								</table>
							</div>
						</div>
					</div>	
				</div>	
			</div>
		);
	};
}


export default withTracker((props)=>{
	const yearSubHandle = Meteor.subscribe("allLwhData");
	const allyearData = LwhMaster.find({}).fetch()||[{}];

	//===================Fetech Year wise Data======================
	var CurrentDate=new Date();
	var year=CurrentDate.getFullYear();

	const yearData = LwhMaster.find({"year":year , "location":"MUMBAI"}).fetch()||[{}];
	console.log("yearData",yearData);
	//=========================================================================================================
	                                       // Create dummy array
	// ========================================================================================================
	var listOfHolidays= [];
	for(var i = 0; i < yearData.length;i++){
		for(var j=0;j<yearData[i].holidays.length;j++){
			let holiday = 
			{
				_id: yearData[i]._id,
				year : yearData[i].year,
				location : yearData[i].location,
				holidayDate : yearData[i].holidays[j].date,
				holidayDesc : yearData[i].holidays[j].holidayName,
			};
			if(holiday.holidayDate){
				listOfHolidays.push(holiday)
			}

		}

	}
	

//======================================================================
	
	var result =  {

		"loading"					  : !yearSubHandle.ready(),
		"allyear" 					  : allyearData,
		"listOfHolidays"			  : listOfHolidays,

	};
	return result;
})(CurrentHolidays);