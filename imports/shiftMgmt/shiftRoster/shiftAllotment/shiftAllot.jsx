import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';

import { EmpDataMaster } from '/imports/shiftMgmt/shiftRoster/empTemp/empDataMaster.js';
import { ShiftSetting } from '/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js';
import { ShiftAllocation } from '/imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllocation.js';
import './shiftAllot.css';

class ShiftAllot extends Component{
	constructor(props){
		super(props);
		var urlEmpId = FlowRouter.getParam("empid");
		if(urlEmpId){
			var action = "Update";
		}else{
			var action = "Submit";
		}

		this.state = {
			"empId" : urlEmpId,
			"action" : action,
			"shiftName": "",
			"startTime": "",
			"startTimeAmPm": "",
			"endTime": "",
			"endTimeAmPm": "",
			"effectiveFrom": "",
			"tillDate": "",
			"empID": "",
			"Year": "",
			"Month": "",
			"isChecked": false,
			"checked": false,
			"weekdays": "",			
			"year":"",
			"dates"  : [],
			"wDays" : [],
			"shifts" :[],
			"checkedIndex":"",
			"selectCheck":"checkmark1",
			"valOfShift":"",
			"curTarget":"",
			"fromDate": "",
			"toDate": "",
			"weeklyOff": "",
			"createdAt": new Date(),
			"createdBy": "",
			"shiftDetails": [],
		};
	}	

	componentWillReceiveProps(nextProps) {
  	if(!nextProps.loading){
      if(nextProps.oneShiftData){
		    this.setState({
		        "shiftName" 		: nextProps.oneShiftData.shiftName,	        
		        "startTime" 		: nextProps.oneShiftData.startTime,	        
		        "startTimeAmPm" 	: nextProps.oneShiftData.startTimeAmPm,	        
		        "endTime" 			: nextProps.oneShiftData.endTime,	        
		        "endTimeAmPm" 		: nextProps.oneShiftData.endTimeAmPm,	        
		        "effectiveFrom" 	: nextProps.oneShiftData.effectiveFrom,	   
		        "tillDate" 			: nextProps.oneShiftData.tillDate,	   
		             
		    });
		  }
		}
	}

	getDaysInMonth(month,year) {
	  return new Date(year, month, 0).getDate();
	};

	getDaysInWeek(week,year) {
	  return new Date(year, week, 0).getDay();
	};

	

	handleChange(event){
		event.preventDefault();
    this.setState({
        "shiftName" 		: this.refs.shiftName.value,	        
        "startTime" 		: this.refs.startTime.value,	        
        "startTimeAmPm" 	: this.refs.startTimeAmPm.value,	        
        "endTime" 			: this.refs.endTime.value,	        
        "endTimeAmPm" 		: this.refs.endTimeAmPm.value,	        
        "effectiveFrom" 	: this.refs.effectiveFrom.value,
        "tillDate"	        : this.refs.tillDate.value,
    	});

	}

	passDate(event){
		event.preventDefault();
		var date1 = this.refs.passDate.value;
		console.log("date1 =",date1);
		var year1 = date1.split('-');
		// console.log("Year=",year1[0]);
		// console.log("Month=",year1[1]);

		var empId1 = event.currentTarget.id;
		this.setState({
			Year:year1[0],
			Month:year1[1],
		},()=>{
			console.log("year="+this.state.Year)
			console.log("month="+this.state.Month)
		});

	}

	// autoWeekFetch(event){
	// 	event.preventDefault();
	// 	var today = moment().format("MM-DD-YYYY");
 //        var weeknumber = moment(today).week();
 //        if(weeknumber<=9){
 //          weeknumber="0"+weeknumber;
 //        }
 //        var yyyy = moment(today).format("YYYY");
 //        var weekValDefault = yyyy+"-W"+weeknumber;
 //        var weekVal = this.refs.dateFromWeek.value;

 //        this.setState({
	// 		weekVal:weekVal,
	// 		weekValDefault:weekValDefault
	// 	},()=>{
	// 		console.log("weekVal=============================="+this.state.weekVal)
	// 		console.log("weekValDefault=============================="+this.state.weekValDefault)
	// 	});
	// }

	dateFromWeek(event){
		var today = moment().format("MM-DD-YYYY");
        var weeknumber = moment(today).week();
        if(weeknumber<=9){
          weeknumber="0"+weeknumber;
        }
        var yyyy = moment(today).format("YYYY");
        var weekValDefault = yyyy+"-W"+weeknumber;
        var weekVal = this.refs.dateFromWeek.value;
		var WeekFound = weekVal ? weekVal : weekValDefault

		console.log("WeekFound =",WeekFound);
		var weekSplit = WeekFound.split('');
		console.log("weekSplit",weekSplit)
		
		var startDateOfWeek = moment(weekSplit[0]+weekSplit[1]+weekSplit[2]+weekSplit[3]).add((weekSplit[6]+weekSplit[7])-2, 'weeks').startOf('isoweek');

		var endDateOfWeek = moment(weekSplit[0]+weekSplit[1]+weekSplit[2]+weekSplit[3]).add((weekSplit[6]+weekSplit[7])-2, 'weeks').endOf('isoweek');

		this.setState({
			startDateOfWeek:startDateOfWeek, 
			endDateOfWeek:endDateOfWeek,
		},()=>{
			console.log("DatesOfWeek="+this.state.startDateOfWeek+" "+this.state.endDateOfWeek)
			var week = ("DatesOfWeek="+this.state.startDateOfWeek+" "+this.state.endDateOfWeek)
			
			var week = this.state.week;
			var startOfWeek = this.state.startDateOfWeek;
			var endOfWeek   = this.state.endDateOfWeek;
			console.log("startOfWeek :",startOfWeek);
			console.log("endOfWeek :",endOfWeek);
			var dates = [];
		    var date = startOfWeek;


		  //   	for(let i=1;i<=count;i++){
				// 	tDates.push(i);
				// }
				while (date <= endOfWeek) {
				    dates.push(date.toDate());
				    console.log("dates",dates);
				    date = date.add(1, 'd');
				    console.log("date:",date.toDate());
				}
				this.setState({
					"dates" : dates,
				},()=>{
					console.log("dates :",this.state.dates)
				});
			});
		
    }

	displayEmpShiftHistory(event){
		event.preventDefault();
		var empId1 = event.currentTarget.id;
		this.setState({
			empID:empId1,
		},()=>{
			console.log("new empId"+this.state.empID)
		});
	}

	getDateHeader(){
		var MonthNum = this.state.Month ? this.state.Month : (new Date().getMonth())+1;
		var YearNum = this.state.Year ? this.state.Year : (new Date().getFullYear());
		var count = this.getDaysInMonth(MonthNum,YearNum);
		var tDates = [];
		for(let i=1;i<=count;i++){
			tDates.push(i);
		}
		return tDates;
		console.log("tDates",tDates)
	}
	
	getDayHeader(){
		var MonthNum = this.state.Month ? this.state.Month : (new Date().getMonth())+1;
		var YearNum = this.state.Year ? this.state.Year : (new Date().getFullYear());
		// console.log("M= "+ MonthNum)
		// console.log("Y= "+ YearNum)
		var count = this.getDaysInMonth(MonthNum,YearNum);
		var tDays = [];
		var weekday = new Array(7);
		weekday[0] = "S";
		weekday[1] = "M";
		weekday[2] = "T";
		weekday[3] = "W";
		weekday[4] = "T";
		weekday[5] = "F";
		weekday[6] = "S";

		for(let i=1;i<=count;i++){
			var day = new Date(YearNum,((MonthNum)-1),i).getDay();
			// console.log("day =",day);
			tDays.push(weekday[day]);
		}
		return tDays;
	}



	
	checkAll(event){
		var shiftCheck = event.target.getAttribute('data-index');

		

		console.log("className of sel cb=",this.state.checkedIndex);
		console.log("className of sel cb="+shiftCheck)
		if(event.target.checked){
			$("."+shiftCheck).prop("checked",true);
		}else{
			$("."+shiftCheck).prop("checked",false);
		}
	}

	deselectCheckbox(event){
    	var shiftCheck = event.target.getAttribute('data-index');
    	if (shiftCheck) {
          var splitval  = shiftCheck.split(' ');
          if (splitval) {

	    	console.log("event.target.checked",event.target.checked);
	    	console.log("splitval",splitval);

	    	console.log("shiftCheck",shiftCheck);
	    	this.setState({
	    		checkedIndex:shiftCheck,
	    		curTarget:event.target.checked,
	    	},()=>{
	    		// console.log("curTarget====",this.state.curTarget);
	    	});

		 	
		 	if(this.state.curTarget){
		 		$("#"+splitval[0]).prop("checked",false);
		 		$("#"+splitval[1]).prop("checked",false);
		 	
		 	}else{
		 		$("#"+splitval[0]).prop("checked",false);
		 		$("#"+splitval[1]).prop("checked",false)
		 		
		 	}


          }
    	}

	}
	datefromcheckbox(event){
		var MonthNum = this.state.Month;
		var YearNum = this.state.Year;
		console.log("M= "+ MonthNum);
		console.log("Y= "+ YearNum);

    	var curCheckbox = event.target.getAttribute('data-index');
	    console.log("curCheckbox",curCheckbox);
    	if (curCheckbox) {
          var splitval  = curCheckbox.split(' ');
          var dateFromCurTarget = splitval[1].split(' ');

	    	console.log("splitval",splitval);
	    	console.log("dateFromCurTarget",dateFromCurTarget);
			

          }

    	}

	


	getShiftValue(){
		var getSvalue = event.target.getAttribute('data-index');
		console.log("shiftValue="+getSvalue)
		this.setState({
				"shift" : getSvalue,
			},()=>{
				// console.log("getSvalue :",this.state.getSvalue)
			});
	}

	submitShiftValue(event){
		
		event.preventDefault();
		
		var shiftDetails = {
			
    		shiftCheck      : this.state.checkedIndex,
			allocatedShift  : this.state.shift,

			// fromDate     : this.refs.fromDate.value,
			// toDate       : this.refs.toDate.value,
			// weeklyOff    : this.refs.weeklyOff.value,
			createdAt      	: this.state.createdAt,
			// createdBy    	: this.state.createdBy,
		
		};
		// var empShift = shiftCheck.concat(shift);
		// console.log("empShift = ",empShift);


		if(this.state.action == "Submit"){
			if( shiftDetails.shiftCheck!=="" && shiftDetails.allocatedShift!=="" && shiftDetails.fromDate!=="" && shiftDetails.toDate!=="" && shiftDetails.weeklyOff!=="" && shiftDetails.createdAt!=="" && shiftDetails.createdBy!=="")
			{
				Meteor.call("insertShiftDetails",shiftDetails,
											(error,result)=>{
												if(error){
												

													console.log("Something went wrong! Error = ", error);
												}else{
													
													swal("Congrats!","Your Shift allocated successfully.","success");
													console.log("latest id = ",result);
													$(".modal-backdrop").remove();
												}
											});
			}else{
				swal("No Field should be empty...!","Please fill the all fields carefully","warning");
			}
		}else{
			shiftDetails._id = this.state.empId;
			Meteor.call("updateShiftDetails",shiftDetails,
										(error,result)=>{
											if(error){
												console.log("Something went wrong! Error = ", error);
											}else{
												swal("Congrats!","Employee Profile Updated Successfully.","success");
												console.log("latest id = ",result);
											}
										});	
		}

	}
	

	render(){

		var emp = this.state.empID;
		// var userData = ShiftSetting.find({"_id":emp}).fetch();
		var userData = EmpDataMaster.find({"_id":emp}).fetch();
		var empHead = this.props.allEmp[0];
		if(emp){
			if(emp.effectiveFrom==""){
				emp.effectiveFrom = "-- NA --";
			}
		}

		const data = this.props.allEmp;
		// console.log("data",data)
			return (

				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						
						<div className="container-fluid bg-warning">
				    		<h3><center><b>Shift Timing Setting</b></center></h3>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row customMargin">
				    		
			    			<ul className="col-lg-4 col-md-6 col-sm-12 col-xs-12 nav nav-tabs pull-right">
				    			<li className="col-lg-6 text-center fz14 fontF active"><a data-toggle="tab" href="#MonthTable" aria-expanded="false">Month</a></li>
				    			<li className="col-lg-6 text-center fz14 fontF"><a data-toggle="tab" href="#WeekTable" aria-expanded="true">Week</a></li>
			    			</ul>
							
						</div>

						<div className="tab-content col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
							<div id="MonthTable" className="tab-pane fade in active">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row customMargin">
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 row">
						    			<p className="col-lg-4 col-md-3 col-sm-4 col-xs-4 row customMargin5"><b>Shift Planning for</b></p>
							    		<div className="col-lg-3 col-md-1 col-sm-1 col-xs-4 input-group">
								    		<span className="input-group-addon"><i className="fa fa-calendar"></i></span>
								    		<input className="form-control" type="Month" ref="passDate" onChange={this.passDate.bind(this)}/>
							    		</div>
						    		</div>
						    	</div>
								<table className="table table-bordered table-hovered">					    	
									<thead>
										<tr className="bg-primary"> 
											<th className="text-center valign" rowSpan="3"> Sr </th> 
											<th className="text-center valign" rowSpan="3"> Employee Name </th> 
											<th className="text-center valign" rowSpan="3"> SA </th> 
											{this.getDateHeader().map(
												(i, index)=>{return (<th key={index} className="text-center"> {i} </th>)}
											)}
										</tr>
										<tr className="bg-primary"> 
											{this.getDayHeader().map(
												(i, index)=>{return (<th key={index} className="text-center"> {i} </th>)}
											)}
										</tr>
										<tr className="bg-primary"> 
											{this.getDateHeader().map(
												(i,index)=>{return (<th key={index} className="text-center"> <input type="checkbox" id={"D"+i} data-index={"D"+i} onChange={this.checkAll.bind(this)} /><span className=" text-center"></span> </th>)}
											)}
										</tr>
									</thead>

									<tbody>
										{this.props.allEmp.map((emp,index)=>{
												function empid(){return index+1} ;

												return(
													<tr key={index}>
														<td> {index+1} </td>
														<td className="text-left" data-toggle="modal" data-target="#empShiftHistory"  data-index={"E"+(index+1)} onClick={this.displayEmpShiftHistory.bind(this)} > {emp.firstName} {emp.middleName} {emp.lastName} </td>
														<td className="checkboxContainer"> <input type="checkbox" id={"E"+(index+1)} data-index={"E"+(index+1)} onChange={this.checkAll.bind(this)} /><span className="checkmark1 text-center"></span> </td>
															{this.getDateHeader().map(
																(index,dt)=>{return (<th key={dt} className="checkboxContainer text-center"> <input type="checkbox" className={"E"+empid()+" D"+(dt+1)} align="center" name="check" data-index={"E"+empid()+" D"+(dt+1)} data-toggle="modal" data-target="#shiftChangeModal"  onChange={this.deselectCheckbox.bind(this)}/><span className={this.state.selectCheck}>{this.state.valOfShift}</span></th>)}
															
															)}
													</tr>
												);
											})
										}
									</tbody>
								</table>
							</div>


							<div id="WeekTable" className="tab-pane fade in">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row customMargin">
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 row">
						    			<p className="col-lg-4 col-md-3 col-sm-4 col-xs-4 row customMargin5"><b>Shift Planning for</b></p>
							    		<div className="col-lg-3 col-md-1 col-sm-1 col-xs-4 input-group">
								    		<span className="input-group-addon"><i className="fa fa-calendar"></i></span>
								    		<input className="form-control" type="week" ref="dateFromWeek" onChange={this.dateFromWeek.bind(this)}/>
							    		</div>
						    		</div>
						    	</div>
								<table className ="table table-bordered table-hovered table-condensed">
									<thead>
										<tr className = "bg-primary"> 
											<th className="text-center valign" rowSpan="3"> Sr </th> 
											<th className="text-center valign" rowSpan="3"> Employee Name </th> 
											<th className="text-center valign" rowSpan="3"> SA </th> 
											{this.state.dates.map(
												(date,i) => {return (<th key={i} className="text-center"> {moment(date).format('DD')} </th>)}
											)}									
										</tr>
										<tr className="bg-primary"> 								
												{this.state.dates.map(							
												(date,i)=>{return (<th key={i} className="text-center"> {moment(date).format('dd') } </th>)}

											)}
											
										</tr>
										<tr className="bg-primary"> 
											{this.state.dates.map(
												(date,i)=>{return (<th key={i} className="text-center"> <input type="checkbox" id={"D"+i} data-index={"D"+i} onChange={this.checkAll.bind(this)} /><span className="checkmark1 text-center"></span> </th>)}
											)}
											
										</tr>
									</thead>

									<tbody>
										{this.props.allEmp.map((emp,index)=>{
												function empid(){return index+1} ;

												return(
													<tr key={index}>
														<td> {index+1} </td>
														<td className="text-left" data-toggle="modal" data-target="#empShiftHistory" onClick={this.displayEmpShiftHistory.bind(this)} > {emp.firstName} {emp.middleName} {emp.lastName} </td>
														<td className="checkboxContainer"> <input type="checkbox" id={"E"+(index+1)} data-index={"E"+(index+1)} onChange={this.checkAll.bind(this)} /><span className="checkmark1 text-center"></span> </td>
															{this.state.dates.map(
																(date,dt)=>{return (<th key={dt} className="checkboxContainer text-center"> <input type="checkbox" className={"E"+empid()+" D"+(dt)} align="center" name="check" data-index={"E"+empid()+" D"+(dt+1)} data-toggle="modal" data-target="#shiftChangeModal"  onChange={this.deselectCheckbox.bind(this)}/><span className="checkmark1 text-center"></span></th>)}
															
															)}
													</tr>
												);
											})
										}
									</tbody>
								</table>
							</div>

						</div>





						<div className="col-lg-12 row shiftText"><b>Change Shift</b><span className="mandatoryField">*</span></div>
						
							<div className="col-lg-12 customMargin5 customPadding15">

								{this.props.allShift.map( (emp,index)=>{

								return(
									<div key={index} className="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 row customWidthTab customMargin25Right newBorder">									    		
								    	<div className="input-group">
										
											<label className="radioContainer text-left">Shift {emp.shiftName}
												<input type="radio" name="radio" data-index = {emp.shiftName} value={emp.shiftName} onChange={this.getShiftValue.bind(this)}/>
												<span className="checkmark"></span>
											</label>
										</div>
								    </div>
										);
									})
								}	
							
								<button className="col-lg-2 btn btn-primary customWidthBtn customBottomMargin30 customMargin15 pull-right" onClick={this.submitShiftValue.bind(this)}> {this.state.action} </button>
							</div>
				  	</div>
{/********************************************shift Change Modal Start***********************************************

					

						<div className="modal fade" id="shiftChangeModal" role="dialog">
					    	<div className="modal-dialog">
						      	<div className="modal-content">
							        
							        <div className="modal-header">
								        <button type="button" className="close" data-dismiss="modal">&times;</button>
								        <h3 className="modal-title"><b><center>Employee Shift Change</center></b></h3>
								    </div>
 						         
								        <div className="col-lg-12 customPadding15">	
									    	<div className="form-group col-lg-6 col-md-6 col-sm-6">									    		
										    	
										    	<div className="nameEmp">{empHead ? empHead.shiftName :'Alexander Piercy'}</div>
										    		
									    	</div>
									    	
									    	<div className="form-group col-lg-6 col-md-6 col-sm-6">									    	
									    		<div className="input-group">										    		
										    		<input type="date" ref="date" className="form-control" value={(this.state.Year)} onChange={this.handleChange.bind(this)} />
										    	</div>
									    	</div>
									    </div>
									
						        	<div className="col-lg-6 shiftText"><b>Change Shift</b><span className="mandatoryField">*</span></div>
									<div className="col-lg-12">

										{this.props.allShift.map( (emp,index)=>{

										return(
											<div className="form-group col-lg-6 col-md-6 col-sm-6 customSideMargin newBorder" key={index}>									    		
										    	<div className="input-group">
												
													<label className="radioContainer text-left">Shift {emp.shiftName}
														<input type="radio" name="radio" value={emp.shiftName}/>
														<span className="checkmark"></span>
													</label>
												</div>
										    </div>
												);
											})
										}	
									</div>
									

							        <div className="modal-footer">
										
										<button type="button" data-dismiss="modal" className="col-lg-2 btn btn-primary pull-right" onClick={this.submitBasicInfo.bind(this)}> {this.state.action} </button>
									</div>		    	
											
		    					</div>
		    				</div>
		    			</div>
		    		

{/********************************************Shift Change Modal End*******************************************
{/********************************************Shift History Start*******************************************
		    		
		    		<div className="radioContainer">

						<div className="modal fade" id="empShiftHistory" role="dialog">
					    	<div className="modal-dialog">
						      	<div className="modal-content">
						      	<div className="modal-header">
							        <button type="button" className="close" data-dismiss="modal">&times;</button>
							        <h3 className="modal-title"><b><center>Employee Shift History</center></b></h3>
								</div>
							        <div className="modal-body">
							        	
							        	<div className="col-lg-12">	
									    	<div className="form-group col-lg-3 col-md-3 col-sm-3">
									    	</div>	
									    	<div className="form-group col-lg-9 col-md-9 col-sm-9">	
										    	<div className="form-group col-lg-9 col-md-9 col-sm-9">	
											    	<div className="nameEmp">(Emp Name)</div>
											    	<div className="nameEmp">(Employee Id)</div>
										    	</div>
										    	<div className="col-lg-3 col-md-3 col-sm-3">
										    		<img src="/images/male.png" className="userImg pull-right" />
									    		</div>
								    		</div>
								    	</div>

								        <section className="modal-body">
											<table id="table-to-xls" className="table table-bordered table-hovered table-striped">
												<thead>
													<tr className="bg-primary"> 
														
														<th className="text-center"> Date </th> 
														<th className="text-center"> Shift Name </th> 												
													</tr>
												</thead>

												<tbody>
													{this.props.allShift.map( (emp,index)=>{
															return(
																<tr key={index} >
																	<td className="text-center"> {index+1} </td>
																	<td id={emp._id} className="text-center"  data-toggle="modal" data-target="#empShiftHistory" onClick={this.displayEmpShiftHistory.bind(this)}> {emp.shiftName} {emp.startTime} {emp.startTimeAmPm} </td>
																</tr>
															);
														})
													}
												</tbody>

											</table>
												    	
										
									        <div className="modal-footer">
												<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
												
											</div>		    	
												
			    						</section>
			    					</div>
		    					</div>
		    				</div>
		    			</div>
		    		</div>

{/********************************************Shift History End*******************************************/}

		  		</div>
		);
	};
}

 
export default ShiftAllotContainer = withTracker(()=>{

	
	const shiftSubHandle2 = Meteor.subscribe("allEmpDetails");
	const allEmpDetails = EmpDataMaster.find({}).fetch()||[{}];

	const shiftSubHandle1 = Meteor.subscribe("allShiftData");
	const allShiftData = ShiftSetting.find({}).fetch()||[];

	const shiftSubHandle = Meteor.subscribe("allShiftsData");
	const allShiftsData = ShiftAllocation.find({}).fetch()||[];

      console.log("allEmpDetails :",allEmpDetails);
      console.log("allShiftData :",allShiftData);
      console.log("allShiftsData :",allShiftsData);
	return {
		"loading2"		: !shiftSubHandle2.ready(),
		"loading1"		: !shiftSubHandle1.ready(),
		"loading"		: !shiftSubHandle.ready(),
		"allEmp" 		: allEmpDetails,
		"allShift" 		: allShiftData,
		"allShifts" 	: allShiftsData,
		
		
	}

})(ShiftAllot);




