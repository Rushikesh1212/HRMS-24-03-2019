import { Mongo } from 'meteor/mongo';


export const ShiftAllocation = new Mongo.Collection('shiftAllocation');

if(Meteor.isServer){

	Meteor.publish("allShiftsData",function(){
		var allShifts = ShiftAllocation.find({});
		console.log("allShifts",allShifts);
		return allShifts;
	});
}

Meteor.methods({
	"insertBasicInfo3" : function(formValues){
		console.log(formValues);

		var emp_id = ShiftAllocation.insert({
										
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

	"updateBasicInfo2" : function(formValues){
		console.log(formValues);

		var emp_id = ShiftAllocation.update(
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

	"deleteAllotedShift2" : function(empid){
		ShiftAllocation.remove({"_id":empid}, (error,result)=>{
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