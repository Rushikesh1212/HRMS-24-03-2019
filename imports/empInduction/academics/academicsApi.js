import { Mongo } from 'meteor/mongo';

export const EmpMaster = new Mongo.Collection('empMasterA');



if(Meteor.isServer){
	Meteor.publish("empData1",function(empid){
		var empprof = EmpMaster.find({"_id":empid});
		return empprof;
	});

		Meteor.publish("allEmpData1",function(){
		var allEmp = EmpMaster.find({});
		console.log("data",allEmp);
		return allEmp;
	});
}



Meteor.methods({
	"insertAcademicsInfo" : function(formValues){
		console.log(formValues);

		var emp_id = EmpMaster.insert({
									"ssc":[{
									"institute" 	: formValues.institute,
									"passOut" 	: formValues.passOut,
									"percentage" 		: formValues.percentage,
										}],	
										"hsc":[{
									"instituteHsc" 	: formValues.instituteHsc,
									"passOutHsc" 	: formValues.passOutHsc,
									"percentageHsc" 		: formValues.percentageHsc,
										}]	
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

"submitRoleDesignationInfo" : function(formValues){
		console.log("formValues",formValues);
		let idExists =EmpMaster.findOne({"_id":formValues._id});
		console.log("idExists",idExists);
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
		EmpMaster.insert({
		
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
		)
	}

		return Role_id;
	},


"deleteEmpProfile" : function(empid){
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
