import { Mongo } from 'meteor/mongo';

export const EmpMasterRoll = new Mongo.Collection('empMasterA');



if(Meteor.isServer){
	Meteor.publish("empData",function(empid){
		var empprof = EmpMasterRoll.find({"_id":empid});
		return empprof;
	});

		Meteor.publish("allEmpDataRole",function(){
		var allEmpRole = EmpMasterRoll.find({});
		console.log("data",allEmpRole);
		return allEmpRole;
	});
}



Meteor.methods({
	
"submitRoleDesignationInfo" : function(formValues){
		
		let idExists =EmpMasterRoll.findOne({"_id":formValues._id});
		
		if (!idExists) {
		var Role_id = EmpMasterRoll.insert({
									
									"employmentStartDate" 		: formValues.employmentStartDate,
									"allocateDepartment" 	    : formValues.allocateDepartment,
									"designation" 		        : formValues.designation,
									"reportingLocation" 	    : formValues.reportingLocation,
									"expectedRetirementDate" 	: formValues.expectedRetirementDate,
									"subDepartment" 			: formValues.subDepartment,
									"gradeBand" 				: formValues.gradeBand,
									"reportingManager" 			: formValues.reportingManager,
									"selectedEmploymentCategory": formValues.selectedEmploymentCategory,
									"selectedEmploymentType"	: formValues.selectedEmploymentType,

									"status" 					: formValues.status,
										
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
		EmpMasterRoll.update({"_id":formValues._id},{$set :
			
				{
									"employmentStartDate" 		: formValues.employmentStartDate,
									"allocateDepartment" 	    : formValues.allocateDepartment,
									"designation" 		        : formValues.designation,
									"reportingLocation" 	    : formValues.reportingLocation,
									"expectedRetirementDate" 	: formValues.expectedRetirementDate,
									"subDepartment" 			: formValues.subDepartment,
									"gradeBand" 				: formValues.gradeBand,
									"reportingManager" 			: formValues.reportingManager,
									"selectedEmploymentCategory": formValues.selectedEmploymentCategory,
									"selectedEmploymentType"	: formValues.selectedEmploymentType,
									"status" 					: formValues.status,
				}

			})
		}

		return Role_id;
	},


"deleteEmpRoleProfile" : function(empid){
		EmpMasterRoll.remove({"_id":empid}, (error,result)=>{
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
