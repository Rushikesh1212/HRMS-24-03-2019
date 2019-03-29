import { Mongo } from 'meteor/mongo';
export const LeaveApproval = new Mongo.Collection('leaveAprroval');
export const OutdoorDuty = new Mongo.Collection('outdoorDuty');
export const ShortLeave = new Mongo.Collection('shortLeave');


if(Meteor.isServer)
{
	Meteor.publish("leaveData",function()
	{
		var leaves = LeaveApproval.find({});
		return leaves;
	});

	Meteor.publish("odData",function()
	{
		var odLeaves = OutdoorDuty.find({});
		return odLeaves;
	});

	Meteor.publish("slData",function()
	{
		var sLeaves = ShortLeave.find({});
		return sLeaves;
	});


}

//===================================== Methods =====================================
Meteor.methods({

	"insertleaveform" : function(leave)					// Insertion in Leave Approval Collection
	{
		let leaveType = LeaveApproval.findOne({"leaveType":leave.leaveType});
		console.log("leaveType",leaveType);

		
		let leaveDates=parseInt(leave.numOfDays);
			// console.log("leaveDates=====11111=======",leaveDates);
		if(leaveType)
		{
				
			let noOfDays=parseInt(leaveType.numOfDays);
			console.log("noOfDays-------------",noOfDays);

			leaveDates+=noOfDays;
			console.log("leaveDates=====2222=======",leaveDates);

			LeaveApproval.update(
								{"_id": leaveType._id},
								{$set : {
									  		"numOfDays" : leaveDates,					
										}
								},
								(error,result)=>{
									if(error){
										console.log(error);
										return;
									}else{
										console.log(result);
										return;
									}
								}
							);
		}

		else{
		var leaveform = LeaveApproval.insert({

								"empName"			: "Jyoti Dasai",
								"empDepartment"		: "Development",
								"empDesignation"	: "Jr Developer",
								"leaveType"			: leave.leaveType,
						  		"fromDate" 			: leave.fromDate,
						  		"toDate"   			: leave.toDate,
						  		"numOfDays" 		: leave.numOfDays,
						  		"remark"  			: leave.remark,
						  		"status"			: "PENDING"

								}, 

								(error,result)=>{
									if(error){
										console.log(error);
										return;
									}else{
										console.log(result);
										return;
									}
								}
							);
	}

		return leaveform;
	},
	"updateBalData" : function(formValues){

		var record_id = LeaveApproval.update(
								{"_id": formValues.recordIdModal},
								{$set : 
									{
									leaveType 		: formValues.LeaveTypeModal,
									numOfDays		: formValues.WorkingDaysModal,
									fromDate		: formValues.FromModal,
									toDate			: formValues.ToModal,
									remark 			: formValues.ReasonForLeaveRemarkModal,										}
														
									},
								(error,result)=>{
									if(error){
										console.log(error);
										return;
									}else{
										console.log(result);
										return;
									}
								}
							);

		return record_id;
	},

	"updateStatusData" : function(formValues){

		var record_id = LeaveApproval.update(
								{"_id": formValues.row_id},
								{$set : {
											status 	: formValues.status,				
										}
								},
								(error,result)=>{
									if(error){
										console.log(error);
										return;
									}else{
										console.log(result);
										return;
									}
								}
							);

		return record_id;
	},


	"insertodleaveform" : function(outDoor)				// Insertion in Out Door Duty Collection
	{
		console.log("Data of od leave :: ",outDoor);
		var odForm = OutdoorDuty.insert({

								"empName"			: "Jyoti Dasai",
								"empDepartment"		: "Development",
								"empDesignation"	: "Jr Developer",
								"date"   			: outDoor.outDoorDate,
						  		"intime" 			: outDoor.outDoorIntime,
						  		"outtime"			: outDoor.outDoorOuttime,
						  		"reason"  			: outDoor.outDoorReason,
						  		"status"			: "PENDING",

								}, 

								(error,result)=>{
									if(error){
										console.log(error);
										return;
									}else{
										console.log(result);
										return;
									}
								}
							);

		return;
	},

	"insertslleaveform" : function(shortLeave)				// Insertion in Short Leave Collection
	{
		console.log("Short leave Data :: ",shortLeave);
		var slForm = ShortLeave.insert({

								"empName"			: "Priyanka Bhanvase",
								"empDepartment"		: "Development",
								"empDesignation"	: "Jr Developer",
								"date"  			: shortLeave.shortLeaveDate,
						  		"intime"			: shortLeave.shortLeaveIntime,
						  		"reason"   			: shortLeave.shortLeaveReason,
						  		"status"			: "PENDING",
								}, 

								(error,result)=>{
									if(error){
										console.log(error);
										return;
									}else{
										console.log(result);
										return;
									}
								}
							);

		return;
	},

	"deleteLeaveData" : function(recordid)	// Deletion of Data from Leave Approval Collection
	{
		LeaveApproval.remove( { "_id" : recordid }, (error,result)=>{
				if(error){
					return error;
					console.log(error);
				}else{
					return result;
				}
		});

		return;
	},	
})
