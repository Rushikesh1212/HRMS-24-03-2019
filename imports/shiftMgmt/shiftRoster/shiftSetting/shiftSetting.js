import { Mongo } from 'meteor/mongo';

export const ShiftSetting = new Mongo.Collection('shiftSetting');

if(Meteor.isServer){

	Meteor.publish("allShiftData",function(){
		var allShift = ShiftSetting.find({});
		console.log("allShift",allShift);
		return allShift;
	});
}

Meteor.methods({
	"insertBasicInfo4" : function(formValues){
		console.log(formValues);

		var emp_id = ShiftSetting.insert({
										
									"shiftName" 		: formValues.shiftName,	        
							        "startTime" 		: formValues.startTime,	        
							        "startTimeAmPm" 	: formValues.startTimeAmPm,	        
							        "endTime" 			: formValues.endTime,	        
							        "endTimeAmPm" 		: formValues.endTimeAmPm,	        
							        "effectiveFrom" 	: formValues.effectiveFrom,	   
							        "tillDate" 			: formValues.tillDate,					
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

		return emp_id;
	},	

	"updateBasicInfo4" : function(formValues){
		console.log(formValues);

		var emp_id = ShiftSetting.update(
								{"_id": formValues._id},
								{$set : {
													"shiftName" 		: formValues.shiftName,	        
											        "startTime" 		: formValues.startTime,	        
											        "startTimeAmPm" 	: formValues.startTimeAmPm,	        
											        "endTime" 			: formValues.endTime,	        
											        "endTimeAmPm" 		: formValues.endTimeAmPm,	        
											        "effectiveFrom" 	: formValues.effectiveFrom,	   
											        "tillDate" 			: formValues.tillDate,					
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

		return emp_id;
	},

	"deleteAllotedShift" : function(empid){
		ShiftSetting.remove({"_id":empid}, (error,result)=>{
				if(error){
					return error;
					console.log(error);
				}else{
					return result;
				}
		});

		return;
	}

});