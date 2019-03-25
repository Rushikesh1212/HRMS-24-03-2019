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

	
	"insertShiftDetails" : function(shiftDetails){
		console.log("shiftDetails=",shiftDetails);

		var emp_id = ShiftAllocation.insert({

    								"shiftCheck"     : shiftDetails.shiftCheck,									
									"allocatedShift" : shiftDetails.allocatedShift,
									// "fromDate"   	 : shiftDetails.fromDate,
									// "toDate" 		 : shiftDetails.toDate,
									// "weeklyOff" 	 : shiftDetails.weeklyOff,
									"createdAt" 	 : shiftDetails.createdAt,
									"createdBy" 	 : shiftDetails.createdBy,
									
								
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

	// "updateShiftDetails" : function(shiftDetails){
	// 	console.log(shiftDetails);

	// 	var emp_id = ShiftAllocation.update(
	// 							{"_id": formValues._id},
	// 							{$set : {
 //    								// 			"shiftCheck"     : shiftDetails.shiftCheck,
	// 											// "allocatedShift" : shiftDetails.allocatedShift,
	// 											"fromDate"   	 : shiftDetails.fromDate,
	// 											"toDate" 		 : shiftDetails.toDate,
	// 											"weeklyOff" 	 : shiftDetails.weeklyOff,
	// 											"createdAt" 	 : shiftDetails.createdAt,
	// 											"createdBy" 	 : shiftDetails.createdBy,			
	// 									}
	// 							},
	// 							(error,result)=>{
	// 								if(error){
	// 									console.log(error);
	// 									return;
	// 								}else{
	// 									console.log(result);
	// 									return;
	// 								}
	// 							}
	// 						);

	// 	return emp_id;
	// },

	// "deleteAllotedShift2" : function(empid){
	// 	ShiftAllocation.remove({"_id":empid}, (error,result)=>{
	// 			if(error){
	// 				return error;
	// 				console.log(error);
	// 			}else{
	// 				return result;
	// 			}
	// 	});

	// 	return;
	// }

});





