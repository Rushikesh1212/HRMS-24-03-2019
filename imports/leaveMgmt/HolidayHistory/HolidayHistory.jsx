/*
	Module Name     - 	LocationWise Holidays
	Component Name  - 	Show Holidays year and location wise
	Developer Name  -   Rushikesh Dipak Salunkhe
	Date            -   26/03/2019
*/


import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { LwhMaster } from '/imports/leaveMgmt/LocationWiseHolidays/lwhMaster.js';
import Holiday from './HolidayHistoryTable/HolidayHistoryTable.jsx'
import "/imports/leaveMgmt/HolidayHistory/HolidayHistory.css";


class HolidayHistory extends Component{
	constructor(props){
		
		super(props);
	
		this.state = {
				yearValue:this.props.activeYear,				
		}	
		this.yearvalue=this.yearvalue.bind(this);	
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


componentWillReceiveProps(nextProps){
		if(!nextProps.loading){
      		if(nextProps.activeYear){
		       	this.setState({yearValue: nextProps.activeYear,});
		  }
  		}
	}

	//=========================================================================================================
	                                               // Get year value
	// ========================================================================================================

	yearvalue(event)
	{
		event.preventDefault();
		var yearvalue = event.currentTarget.value;
		
		this.setState({
			yearValue : yearvalue,
		},()=>{
		
		})
	}


	render(){

		
		return (
			<div>
	{/*=========================================================================================================
	                                             Years without duplicates
	========================================================================================================*/}
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
					<h3>Holidays History</h3>
				</div>
				<br/>
				<br/>
					
					<div className="tab-pane active" id="tab2">
						<br/>
						<br/>
						<div className="col-lg-12  col-md-12  col-sm-12  col-xs-12   tabbable"> 
							<ul className="nav nav-tabs">
							{ 
							 	this.props.year_without_duplicates.map((item,index) => 
							 	{
       						 		return(
       										<li key={index} ref="year" value={item} onClick={this.yearvalue.bind(this)}><a href="#tab" data-toggle="tab">{item}</a></li>		
        								  );
        					 	})
   						 	}
							</ul>
							<div className="tab-content">
								<div className="tab-pane active" id="tab">
									<Holiday year={this.state.yearValue}/>
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

//==================Year WIthout Duplicates ==================================
		var year=[];

		for (var i = 0; i < allyearData.length; i++) {
				 year[i]=allyearData[i].year;
		}	

		let year_without_duplicates1 = Array.from(new Set(year));
		let year_without_duplicates =year_without_duplicates1.sort((a, b) => (b - a));

		let activeYear =year_without_duplicates[0];
//======================================================================
	
	var result =  {

		"loading"					  : !yearSubHandle.ready(),
		"allyear" 					  : allyearData,
		"year_without_duplicates"	  : year_without_duplicates,
		"activeYear"						  : activeYear,
	};

	return result;
})(HolidayHistory);