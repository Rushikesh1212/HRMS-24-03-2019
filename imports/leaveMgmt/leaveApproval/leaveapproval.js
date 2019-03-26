import { Mongo } from 'meteor/mongo';
export const LeaveApproval = new Mongo.Collection('leaveAprroval');


if(Meteor.isServer){
	Meteor.publish("leaveData",function(){
		var leaves = LeaveApproval.find({});
		return leaves;
	});
}


Meteor.methods({
	"insertleaveform" : function(leave){
		console.log("=============",leave);

		var leaveform = LeaveApproval.insert({
								
								"leaveType" : leave.leaveType,
						  		"fromDate" 	: leave.fromDate,
						  		"toDate"   	: leave.toDate,
						  		"numOfDays" : leave.numOfDays,
						  		"remark"  	: leave.remark,
						  		"status"	: "Pending"

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


	"insertodleaveform" : function(leave1){
		console.log("=============",leave1);

		LeaveApproval.insert({
								"date"   : leave1.date,
						  		"intime" : leave1.intime,
						  		"outitme": leave1.outtime,
						  		"rsn1"   : leave1.rsn1,
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

	"insertslleaveform" : function(leave2){
		console.log("=============",leave2);

		LeaveApproval.insert({
								"date1"   : leave2.date1,
						  		"intime1" : leave2.intime1,
						  		"rsn2"   : leave2.rsn2,
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
	"deleteLeaveData" : function(recordid){
		LeaveApproval.remove({"_id":recordid}, (error,result)=>{
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
