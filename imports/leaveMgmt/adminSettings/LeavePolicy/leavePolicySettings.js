import { Mongo } from 'meteor/mongo';

export const LeaveMgmt = new Mongo.Collection('leaveMgmt');


if(Meteor.isServer)
{
	Meteor.publish("settingsLeaveData",function(recordid)
	{
		var empprof = LeaveMgmt.find({"_id":recordid});
		return empprof;
	});
	Meteor.publish("maxLeaves",function()
	{
		var leaveBalance = LeaveMgmt.find({});
		return leaveBalance;
	});

	Meteor.publish("allLeaveData",function()
	{
		var allData = LeaveMgmt.find({});
		return allData;
	});
}

Meteor.methods(
{
	"insertBasicInfo1" : function(formValues)
	{
		var Count = LeaveMgmt.find({}).count({});
		Count++;
		var keyValues = Object.keys(formValues);
		var record_id = LeaveMgmt.insert({
									SelectedLocation				: formValues.SelectedLocation,
									SelectedLeave					: formValues.SelectedLeave,
									MaxLeavesPerYear 				: formValues.MaxLeavesPerYear,
									NumOfTimesPerYear 				: formValues.NumOfTimesPerYear,
									MaxLeavesataTime 				: formValues.MinLeavesataTime,
									MinLeavesataTime 				: formValues.currentMinLeavesataTime,
									LeavesDuringProbationPeriod 	: formValues.LeavesDuringProbationPeriod,
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

	"updateData" : function(formValues)
	{
		var record_id = LeaveMgmt.update(
								{"_id": formValues.recordIdModal},
								{$set : {
											SelectedLocation				: formValues.SelectedLocation,
											SelectedLeave					: formValues.SelectedLeave,
											MaxLeavesPerYear 				: formValues.MaxLeavesPerYear,
											NumOfTimesPerYear 				: formValues.NumOfTimesPerYear,
											MaxLeavesataTime 				: formValues.MaxLeavesataTime,
											MinLeavesataTime 				: formValues.MinLeavesataTime,
											LeavesDuringProbationPeriod 	: formValues.LeavesDuringProbationPeriod,				
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

	"deleteData" : function(recordid)
	{
		LeaveMgmt.remove({"_id":recordid}, (error,result)=>{
				if(error){
					return error;
					console.log(error);
				}else{
					return result;
				}
		});

		return;
	},
});