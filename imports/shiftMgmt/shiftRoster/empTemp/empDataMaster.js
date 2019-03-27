import { Mongo } from 'meteor/mongo';

export const EmpDataMaster = new Mongo.Collection('empDataMaster');

if(Meteor.isServer){
	// Meteor.publish("empData",function(empid){
	// 	var empprof = EmpDataMaster.find({"_id":empid});
	// 	return empprof;
	// });

	Meteor.publish("allEmpDetails",function(){
		var allEmp = EmpDataMaster.find({});
		return allEmp;
	});
}

Meteor.methods({
	"insertBasicInfo2" : function(formValues){
		console.log(formValues);

		var emp_id = EmpDataMaster.insert({
										
									"firstName" 	: formValues.firstName,	        
							        "middleName" 	: formValues.middleName,	        
							        "lastName" 		: formValues.lastName,	        
							        "email" 		: formValues.email,	        
							        "phone" 		: formValues.phone,	        
							        "dob" 			: formValues.dob,					
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

	"updateBasicInfo1" : function(formValues){
		console.log(formValues);

		var emp_id = EmpDataMaster.update(
								{"_id": formValues._id},
								{$set : {
											"firstName" 	: formValues.firstName,	        
									        "middleName" 	: formValues.middleName,	        
									        "lastName" 		: formValues.lastName,	        
									        "email" 		: formValues.email,	        
									        "phone" 		: formValues.phone,	        
									        "dob" 			: formValues.dob,					
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

	"deleteAllotedShift1" : function(empid){
		EmpDataMaster.remove({"_id":empid}, (error,result)=>{
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