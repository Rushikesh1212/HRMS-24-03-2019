/*
	Module Name     - 	LocationWise Holidays
	Component Name  - 	Holidays Histort Table
	Developer Name  -   Rushikesh Dipak Salunkhe
	Date            -   26/03/2019
*/

import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import "/imports/leaveMgmt/LocationWiseHolidays/HolidayHistory/HolidayHistoryTable/HolidayHistoryTable.css";
import { LwhMaster } from '/imports/leaveMgmt/LocationWiseHolidays/lwhMaster.js';




class Holiday extends Component{
	constructor(props){
		
		super(props);
		this.state = {
		
				
		};		
	
	}


	getCityCount(){
		var city = this.props.location_without_duplicates;
		var count= city.length;
		var cityCount = [];
		for(let i=1;i<=count;i++){
			cityCount.push(i);
		}
		return cityCount;
	}


	//=========================================================================================================
	                                       // Check Holiday present for location
	// ========================================================================================================

	getHolidayExistData( holiday, location){
		console.log('yearValue: ',this.props.year);	
		console.log('holiday: ',holiday);	
		console.log('location: ',location);	
		
		var filterData = this.props.allyear.filter((data, index)=>{
			var holidayFound = data.holidays.filter((p, i)=>{
				return p.holidayName == holiday;
			});
			console.log('holidayFound: ',holidayFound);
			return data.location == location && data.year === this.props.year && holidayFound.length>0;
		});
		console.log('filterData: ',filterData);	
		console.log('-----------------------');
		return filterData.length > 0 ? true : false;
	}




	render(){
		return (
			<div>				
				<div className="tab-pane" id="tab2">
					<br/>
					<br/>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tabbable"> 
				
						<div className="tab-content">
							<div className="tab-pane active" id="tab3">
									
{/*=========================================================================================================
	                                      Location Wise Holidays table
	========================================================================================================*/}
								<table id="table-to-xls"  className="table  table-bordered table-hovered table-striped holiday-history-mt">
									<thead>

										<tr> 
											<th> LIST OF HOLIDAYS</th> 
											 { 
											 	this.props.location_without_duplicates.map((item,index) => {
			           						 	return(
			            							<th key={index} className="text-center">{item}</th>				
			            						);
			            						
			        	 					 })
			       						 }
										</tr>

									</thead>

									<tbody>
										 { 
											 	this.props.holiday_without_duplicates.map((item,index1) => {
			           						 	return(
			            							<tr key={index1}>
			            							<td key={index1}>{item}</td>	

													{this.props.location_without_duplicates.map((data,i)=>
													{

														return (<td key={i}> <div className="text-center"> {this.getHolidayExistData(item, data) ?  <i className="fa fa-check fa-1x "></i> : <i className="fa fa-minus fa-1x"></i>}   </div> </td>)}
													)}
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
	var year=props.year;
	const yearData = LwhMaster.find({"year":year}).fetch()||[{}];

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



//==================Holidays and Location WIthout Duplicates ==================================
		let holidayName=[];
		let location=[];

		for (var i = 0; i < listOfHolidays.length; i++) {
				 holidayName[i]=listOfHolidays[i].holidayDesc;
				 location[i]=listOfHolidays[i].location;
		}

		let holiday_without_duplicates = Array.from(new Set(holidayName));
		let location_without_duplicates = Array.from(new Set(location));


		// console.log("holidays without duplicates",holiday_without_duplicates);

	

//======================================================================
	
	var result =  {

		"loading"					  : !yearSubHandle.ready(),
		"allyear" 					  : allyearData,
		"holiday_without_duplicates"  : holiday_without_duplicates,
		"location_without_duplicates" : location_without_duplicates,

	};
	console.log('result:',result.allyear);
	return result;
})(Holiday);