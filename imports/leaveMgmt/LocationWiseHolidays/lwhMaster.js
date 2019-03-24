import { Mongo } from 'meteor/mongo';

export const LwhMaster = new Mongo.Collection('lwhMaster');

if(Meteor.isServer){
	Meteor.publish("allLwhData",function(){
		var allLwh = LwhMaster.find({});
		return allLwh;
	});
}


	//=========================================================================================================
	                                       // Insert Method
	// ========================================================================================================
Meteor.methods({
	"insertBasicInfo" : function(formValues){
		console.log(formValues);
	
		let exists = LwhMaster.findOne({"location":formValues.location, 
										"holidays"  :  [
														{"date": formValues.holidays[0].date, 
														"holidayName": formValues.holidays[0].holidayName},
														],
										});

		console.log("exists=",exists);
		if(!exists){
			var lwh_id = LwhMaster.insert({
									"year" 	    : formValues.year,
									"location" 	: formValues.location,
									"holidays"  :  [
														{"date": formValues.holidays[0].date, "holidayName": formValues.holidays[0].holidayName},
													],
									"createdAt" : formValues.createdAt,
									"createdBy" : formValues.createdBy,					
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
		}else{
			(error)=>{
								
						console.log(error);
						return;
								
					}	
		}
		
	return lwh_id;
	},	



	//=========================================================================================================
	                                       // Update Method
	// ========================================================================================================

	"updateBasicInfo" : function(formValues){
		console.log("t=============",formValues);

		var  lwh_id = LwhMaster.update(
								{"_id": formValues._id},
								{$set : {
											"year" 	    : formValues.myear,
											"location" 	: formValues.mlocation,
											"holidays"  : [{"date": formValues.mholidays[0].mdate, "holidayName":formValues.mholidays[0].mholidayName},],
											"createdAt" : formValues.mcreatedAt,
											"createdBy" : formValues.mcreatedBy,					
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

		return lwh_id;
	},


	//=========================================================================================================
	                                       // Delete Method
	// ========================================================================================================
	"deleteLwh" : function(empid){
		LwhMaster.remove({"_id":empid}, (error,result)=>{
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