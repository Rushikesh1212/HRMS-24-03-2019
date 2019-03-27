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
		console.log("Applied leave Data ::",leave);
		var leaveform = LeaveApproval.insert({

								"empName"			: "Jyoti Dasai",
								"empDepartment"		: "Development",
								"empDesignation"	: "Jr Developer",
								"leaveType"			: leave.leaveType,
						  		"fromDate" 			: leave.fromDate,
						  		"toDate"   			: leave.toDate,
						  		"numOfDays" 		: leave.numOfDays,
						  		"remark"  			: leave.remark,
						  		"status"			: "Pending"

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

		return leaveform;
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
						  		"status"			: "Pending",

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
						  		"status"			: "Pending",
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
