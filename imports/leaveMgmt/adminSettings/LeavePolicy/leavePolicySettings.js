import { Mongo } from 'meteor/mongo';

export const LeaveMgmt = new Mongo.Collection('leaveMgmt');

if(Meteor.isServer){
	Meteor.publish("settingsLeaveData",function(recordid){
		var empprof = LeaveMgmt.find({"_id":recordid});
		return empprof;
	});

	Meteor.publish("allLeaveData",function(){
		var allData = LeaveMgmt.find({});
		return allData;
	});
}

Meteor.methods({
	"insertBasicInfo1" : function(formValues){
		var Count = LeaveMgmt.find({}).count({});

		Count++;
		var currentMaxLeavesPerYear="";
		var keyValues = Object.keys(formValues);

			currentMaxLeavesPerYear				 = formValues.MaxLeavesPerYear;
			currentNumOfTimesPerYear			 = formValues.NumOfTimesPerYear;
			currentMaxLeavesataTime 			 = formValues.MaxLeavesataTime;
			currentMinLeavesataTime 		 	 = formValues.MinLeavesataTime;
			currentLeavesDuringProbationPeriod	 = formValues.LeavesDuringProbationPeriod;

		

		var record_id = LeaveMgmt.insert({
									SrNo							: Count,
									SelectedLocation				: formValues.SelectedLocation,
									SelectedLeave					: formValues.SelectedLeave,
									MaxLeavesPerYear 				: currentMaxLeavesPerYear,
									NumOfTimesPerYear 				: currentNumOfTimesPerYear,
									MaxLeavesataTime 				: currentMaxLeavesataTime,
									MinLeavesataTime 				: currentMinLeavesataTime,
									LeavesDuringProbationPeriod 	: currentLeavesDuringProbationPeriod,
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


	"updateData" : function(formValues){

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

	"deleteData" : function(recordid){
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




	// "validateUser" : function(formValues){
		
	// 	const data = EmpMaster.find({"email": formValues.userName,"password": formValues.password}).fetch();
	// 		if(data!=""){
	// 			// var Empid=data._id;
	// 			// console.log("empid=",data);
	// 			return data;

	// 		}else{
	// 			return false;
	// 		}
	// }

});