import { Mongo } from 'meteor/mongo';
export const LeaveApproval = new Mongo.Collection('leaveAprroval');
export const OutdoorDuty = new Mongo.Collection('outdoorDuty');
export const ShortLeave = new Mongo.Collection('shortLeave');


if(Meteor.isServer){
	Meteor.publish("leaveData",function(){
		var leaves = LeaveApproval.find({});
		return leaves;
	});

		Meteor.publish("odData",function(){
		var odLeaves = OutdoorDuty.find({});
		return odLeaves;
	});


		Meteor.publish("slData",function(){
		var sLeaves = ShortLeave.find({});
		return sLeaves;
	});

}


Meteor.methods({
	"insertleaveform" : function(leave){
		console.log("=============",leave);

		var leaveform = LeaveApproval.insert({
									"lt"   : leave.lt,
						  		"from" : leave.from,
						  		"to"   : leave.to,
						  		"nwd"  : leave.nwd,
						  		"rsn"  : leave.rsn,
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

		var odForm = OutdoorDuty.insert({
								"date"   : leave1.date,
						  		"intime" : leave1.intime,
						  		"outtime": leave1.outtime,
						  		"reason"   : leave1.rsn1,
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

		var slForm = ShortLeave.insert({
								"date"   : leave2.date1,
						  		"intime" : leave2.intime1,
						  		"reason"   : leave2.rsn2,
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
	}	
})
