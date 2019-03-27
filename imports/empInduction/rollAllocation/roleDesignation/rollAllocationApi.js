import { Mongo } from 'meteor/mongo';

export const EmpMaster = new Mongo.Collection('empMasterA');



if(Meteor.isServer){
	Meteor.publish("empData",function(empid){
		var empprof = EmpMaster.find({"_id":empid});
		return empprof;
	});

		Meteor.publish("allEmpData",function(){
		var allEmpRole = EmpMaster.find({});
		console.log("data",allEmpRole);
		return allEmpRole;
	});
}



Meteor.methods({
	
"submitRoleDesignationInfo" : function(formValues){
		
		let idExists =EmpMaster.findOne({"_id":formValues._id});
		
		if (!idExists) {
		var Role_id = EmpMaster.insert({
									
									"employmentStartDate" 		: formValues.employmentStartDate,
									"allocateDepartment" 	    : formValues.allocateDepartment,
									"designation" 		        : formValues.designation,
									"reportingLocation" 	    : formValues.reportingLocation,
									"expectedRetirementDate" 	: formValues.expectedRetirementDate,
									"subDepartment" 			: formValues.subDepartment,

									"gradeBand" 				: formValues.gradeBand,
									"reportingManager" 			: formValues.reportingManager,
									"regular" 					: formValues.regular,
									"contract" 					: formValues.contract,
									"fullTime" 					: formValues.fullTime,
									"partTime" 					: formValues.partTime,

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
		EmpMaster.update({"_id":formValues._id},{$set :
			
				{
									"employmentStartDate" 		: formValues.employmentStartDate,
									"allocateDepartment" 	    : formValues.allocateDepartment,
									"designation" 		        : formValues.designation,
									"reportingLocation" 	    : formValues.reportingLocation,
									"expectedRetirementDate" 	: formValues.expectedRetirementDate,
									"subDepartment" 			: formValues.subDepartment,
									"gradeBand" 				: formValues.gradeBand,
									"reportingManager" 			: formValues.reportingManager,
									"regular" 					: formValues.regular,
									"contract" 					: formValues.contract,
									"fullTime" 					: formValues.fullTime,
									"partTime" 					: formValues.partTime,
									"status" 					: formValues.status,
				}

			})
		}

		return Role_id;
	},


"deleteEmpRoleProfile" : function(empid){
		EmpMaster.remove({"_id":empid}, (error,result)=>{
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
