/*
	Module Name     - 	Location Wise Holidays
	Component Name  - 	Holiday Added Form , React Table Component, Calender Componet 
	Developer Name  -   Rushikesh Dipak Salunkhe
	Date            -   26/03/2019
*/

import React, {Component} from 'react';
import "/imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.css";
import { withTracker } from 'meteor/react-meteor-data';

import ReactTable from "react-table";
import 'react-table/react-table.css'
import swal from 'sweetalert';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { LwhMaster } from '/imports/leaveMgmt/LocationWiseHolidays/lwhMaster.js';
import Calender from '/imports/leaveMgmt/LocationWiseHolidays/Calender/Calender.jsx';



class LocationWiseHolidays extends Component{
	constructor(props){
	

		super(props);
		this.state = {
				fields:{},
				"lwhId" : "",
				year: "",
				location:"",
				holidays:[
							{date: "", holidayName: ""},
				],
				createdAt: new Date(),
				createdBy: "",
				empID:"",
				startDate: "",
				startDate1 : new Date(),
				myear 	  : "",
				mlocation  : "",
				mholidays  : [
					{mdate:"", mholidayName:""},
				],
				mcreatedAt :"",
				mcreatedBy : "",	
				mlwhId: "",
			};	

	    this.handleChangeModal = this.handleChangeModal.bind(this);
	    this.handleEdit = this.handleEdit.bind(this);
	}




componentDidMount() {

		$.validator.addMethod("regxholidayName", function(value, element, regexpr) {          
        	return regexpr.test(value);
	    }, "Please enter only characters");

	

	   
	    jQuery.validator.setDefaults({
	        debug: true,
	        success: "valid"
	    });
	    $("#holidaysMaster").validate({
	        rules: {
	          holidayName: {
	            required: true,
	            regxholidayName: /^[^-\s][a-zA-Z0-9_\s-]+$/,
	          },
	           
	           holidayDate: {
	            required: true,     
	          },
	          
	        },
	        errorPlacement: function(error, element) {
	        	
	        	if (element.attr("name") == "holidayName"){
                     error.insertAfter("#holidayName");
                }
                	
           			if (element.attr("name") == "holidayDate"){
                     error.insertAfter("#holidayDate");
                }
               }
	    });
	  	// this.getData();	
}



//Before Submit
		submitBasicInfo(event){
			event.preventDefault();
			console.log('valid', $("#holidaysMaster").valid());
			if($("#holidaysMaster").valid()){

				var year=this.refs.date.value;
				var newYear=year.split("-");
				var newYear1=parseInt(newYear[0],10);

				var formValues = {
					year 	  : newYear1,
					location  : this.refs.location.value.toUpperCase(),
					holidays  : [
									{
										date: this.refs.date.value, 
										holidayName: this.refs.holidayName.value.toUpperCase()
									},
								],
					createdAt : this.state.createdAt,
					createdBy : "Rushikesh Salunkhe",	
				};
					var holidays = {...this.state.holidays}
					holidays.date = "";
					holidays.holidayName = "";
					this.setState({holidays});
						Meteor.call("insertBasicInfo",formValues,
													(error,result)=>{
														if(error){

																swal("Something is Wrong","Record is already available","warning");


														}else{
															$("#holidaysMaster").validate().resetForm();
															swal("Congrats!","Your Information Submitted Successfully.","success");
															console.log("latest id = ",result);

														
														}
													});	
					
		
			}
			
		}


	//=========================================================================================================
	                                               // Update 
	// ========================================================================================================

	updateBasicInfo(event){

		event.preventDefault();
		var year=this.refs.mdate.value;
		var newYear=year.split("-");
		var newYear1=parseInt(newYear[0],10);
		var formValues = {
			myear 	  : newYear1,
			mlocation  : this.refs.mlocation.value.toUpperCase(),
			mholidays  : [
					{mdate: this.refs.mdate.value, mholidayName: this.refs.mholidayName.value.toUpperCase()},
				],
			mcreatedAt : this.state.createdAt,
			mcreatedBy : "Rushikesh Salunkhe",	
		};

			formValues._id = this.state.mlwhId;
			Meteor.call("updateBasicInfo",formValues,
										(error,result)=>{
											if(error){
												swal("Congrats!","Employee Profile Updated Successfully.","success");
											}else{
												swal("Congrats!","Employee Profile Updated Successfully.","success");
												console.log("latest id = ",result);
											}
										});	
		

	}
	

	handleChange1(field,e){
		field.preventDefault();
		var year=this.refs.date.value;
		var newYear=year.split("-");
		var newYear1=parseInt(newYear[0],10);

    	this.setState({
			year 	  : newYear1,
			location  : this.refs.location.value,
			holidays  : [
							{
								date: this.refs.date.value, 
								holidayName: this.refs.holidayName.value
							},
						],
			createdAt : this.state.createdAt,
			createdBy : "Rushikesh Salunkhe",	        
    });
	}



	//=========================================================================================================
	                                               // Delete
	// ========================================================================================================
	handleDelete(row){
		var lwhId = row._id;

		swal({
		  title: "Are you sure you want to delete?",
		  text: "Once deleted, you will not be able to recover this record!",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
				Meteor.call("deleteLwh",lwhId,
										(error,result) => {
											if(error){
												swal("Something is Wrong","Contact Your System Administrator","warning");
												console.log(error);
											}else{
												swal("Great!","Delete is Successful!","success");
												// FlowRouter.go("/empInfo");
											}
										}
				);
		  } else {
		    swal("This record is safe!");
		  }
		});		
	}

	//=========================================================================================================
	                                               // Edit Function
	// ========================================================================================================

	handleEdit(row){
		    this.setState({
		    mlwhId: row._id,
			myear 	  : row.year,
			mlocation  : row.location,
			mdate: row.holidays[0].date, 
			mholidayName: row.holidays[0].holidayName,
			mcreatedAt : row.createdAt,
			mcreatedBy : row.createdBy,	
			  })
       
	}


	handleChangeModal(event){
		event.preventDefault();

		var mlocation = this.refs.mlocation.value;
		var mholidayName = this.refs.mholidayName.value;
		var mdate=this.refs.mdate.value;

		this.setState({"mlocation" : mlocation});
		this.setState({"mholidayName" : mholidayName});
		this.setState({"mdate" : mdate});	
	}



	//=========================================================================================================
	                                               // validation
	// ========================================================================================================


	 isTextKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
    console.log("Charcode",charCode);
         if (charCode > 32 && (charCode < 65 || charCode > 90) )
         {
         	evt.preventDefault();
            return false;
          }
          else{
          	return true;
          }   
      }



render(){


	//=========================================================================================================
	                                               // React table fields 
	// ========================================================================================================
const data=this.props.allLwh;	

const columns = [{
	Header: 'Year',
	accessor: 'year'
	
	},{
	Header: 'Location',
	accessor: 'location'
	
	}, {
	Header: 'Holiday date',
	accessor: 'holidays[0].date'
	}, {
	Header: 'Holiday for',
	accessor:'holidays[0].holidayName'	

	},{
	
	Header: 'Action',
    
   Cell: row => (
       <div className="text-center">
           <i  className="actionIcon fa fa-pencil" data-toggle="modal" data-target="#myModal" onClick={() => this.handleEdit(row.original)}></i>
           <i  className="actionIcon fa fa-trash"  onClick={() => this.handleDelete(row.original)}></i>
       </div>)
					        
			         
	}]


return (
	//=========================================================================================================
	                                               // Holiday Form
	// ========================================================================================================
	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
			<h3>Location Wise Holidays</h3>
			
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lws-btn-mb">
							<div className="row">
							    <div className="box col-lg-6 col-md-6 col-sm-12 col-xs-12 lws-btn-mb ">
							    <form id="holidaysMaster">
					    			<div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
								      	<label htmlFor="sel1" className="formLable">Select Location</label>
								      	<div className="input-group" >
									    	 <span className="input-group-addon inputIcon"><i className="fa fa-map-pin"></i></span>
								    	 	<select value={this.state.location} ref="location" className="form-control inputBox" onChange={this.handleChange1.bind(this)} name="holidayLoc"  >
										        <option>MUMBAI</option>
										        <option>PUNE</option>
										        <option>DELHI</option>
										        <option>BANGLORE</option>
										     </select>
									    </div>
					    			</div>
		

							    	<div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
							    	 	<label className="formLable">Holiday Date</label>
								    	 <div className="input-group " id="holidayDate">
								    		<span className="input-group-addon inputIcon" ><i className="fa fa-calendar"></i></span>
								    		<input type="date"  value={this.state.holidays.date} ref="date" className="form-control inputBox" onChange={this.handleChange1.bind(this)} name="holidayDate" required/>
								    	</div>
									</div>

							    	<div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12" >
					    	 			<label className="formLable">Holiday Name</label>
							    		<div className="input-group" id="holidayName" >
								    		<span className="input-group-addon inputIcon"><i className="fa fa-user"></i></span>
								    		<input type="text" value={this.state.holidays.holidayName}  placeholder="Enter Holiday Name" ref="holidayName" className="form-control inputBox"  onChange={this.handleChange1.bind(this)} onKeyDown={this.isTextKey.bind(this)} name="holidayName" required/>
								    	</div>
								    </div>

								    <div className="row">
									    <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 "> 	
											<button className="col-lg-3 col-md-3 col-sm-3 col-xs-3 pull-right btn submit lws-btn-mb "id="submit" value="Submit" onClick={this.submitBasicInfo.bind(this)}> Submit</button>
										</div>
									</div>	
								</form>
							 </div>

{/*	=========================================================================================================
	                                               Calender Component
	========================================================================================================*/}
						<div className="row"> 
						  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  text-center">
						   		<Calender/>
							</div>
						</div>	
					</div>
					<br/>
				</div>
			  		


{/*=========================================================================================================
	                                               // React Table fetching all data
 ========================================================================================================*/}
				 <br/>
				 <br/>
				 <h3>Recently Added Holidays</h3>
			  		<ReactTable
					    data={data}
					    columns={columns}
					    sortable={true}
						filterable={true}
						defaultFiltering={[{placeholder:'Search for age'}]}
						defaultPageSize={10}
							minRows={3}
							className={"-striped -highlight"}
					  />



	{/*=========================================================================================================
	                                                Edit Modal
	========================================================================================================*/}

				  	<div className="modal fade" id="myModal" role="dialog">
				    	<div className="modal-dialog modal-lg" >
				      		<div className="modal-content">
				        		<div className="modal-header bg-primary">
				          			<button type="button" className="close" data-dismiss="modal">&times;</button>
				          			<h4 className="modal-title text-center ">Location Wise Holidays</h4>
				        		</div>
				    
				        		<form className="modal-body" data-toggle="validator" role="form">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lws-btn-mb">
										<div className="row">
											<div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
									    		<div className="form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
									     	    <label htmlFor="sel1" className="formLable">Select Location</label>
												    <div className="input-group">
													 <span className="input-group-addon inputIcon"><i className="fa fa-map-pin"></i></span>
											    	 	<select value={this.state.mlocation} ref="mlocation" className="form-control inputBox" onChange={this.handleChangeModal.bind(this)} >
													            <option>MUMBAI</option>
														        <option>PUNE</option>
														        <option>DELHI</option>
														        <option>BANGLORE</option>
													     </select>
													</div>  
												    <br/>
									    		</div>
									    	</div>
									    </div>
									    
									    <div className="box col-lg-12 col-md-12 col-sm-12 col-xs-12 lws-btn-mb text-center">
										    	<div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
										    	 	<label className="formLable">Holiday date</label>
											    	 <div className="input-group">
											    		<span className="input-group-addon inputIcon"><i className="fa fa-table"></i></span>
														<input type="date" value={this.state.mdate} ref="mdate" className="form-control inputBox" onChange={this.handleChangeModal.bind(this)}/>

											    	</div>
												</div>

										    	<div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
								    	 			<label className="formLable ">Holiday for</label>
										    		<div className="input-group ">
											    		<span className="input-group-addon inputIcon "><i className="fa fa-user"></i></span>
											    		<input type="text" value={this.state.mholidayName}  ref="mholidayName" className="form-control inputBox"  onChange={this.handleChangeModal.bind(this)}/>
											    	</div>
										    </div>
									    </div>
									</div>						      
							        <div className="modal-footer">
							            <button type="button" className="btn btn-default clear" data-dismiss="modal">Close</button>
							            <button className="col-lg-2 btn submit pull-right"   data-dismiss="modal" value="Validate Form" onClick={this.updateBasicInfo.bind(this)}>Update</button>
							        </div>
	          					</form>
	      					</div>
	    				</div>
	  				</div>
			</div>
		);
	};
}

export default withTracker((props)=>{
	const empSubHandle = Meteor.subscribe("allLwhData");
	const allLwhData1 = LwhMaster.find({}).fetch()||[{}];
	const allLwhData=allLwhData1.sort((a, b) => (b.createdAt - a.createdAt));
	return {
		"loading"		: !empSubHandle.ready(),
		"allLwh" 		: allLwhData,		
	}
})(LocationWiseHolidays);