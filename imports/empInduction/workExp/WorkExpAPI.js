import { Mongo } from 'meteor/mongo';
import swal from 'sweetalert';



export const WorkExpMaster = new Mongo.Collection('workexpdata');

 if(Meteor.isServer){
	/*Meteor.publish("empData",function(empid){
		var empprof = EmpMaster.find({"_id":empid});
		return empprof;
	});
*/
	Meteor.publish("workexpd",function(){
		var allEmp = WorkExpMaster.find({});
		console.log("data",allEmp);
		return allEmp;
	});
}

Meteor.methods({
	"insertworkexpinfo":function(formValues){
		console.log(formValues);

		var w_id=WorkExpMaster.insert({

		 "CompanyName" 	       : formValues.CompanyName,
		 "CompanyAddress" 	   : formValues.CompanyAddress,
		 "CompanyCity"         : formValues.CompanyCity,
         " CompanyState"       : formValues. CompanyState,
         "CompanyCountry"      : formValues.CompanyCountry,
         "CompanyContactNumber": formValues.CompanyContactNumber,
         "Employee_id"         : formValues.Employee_id,
         "Designation"         : formValues.Designation,
         "Department"          : formValues.Department,
         "fromDate"            : formValues.fromDate,
         "LastSalaryDrawn"     : formValues.LastSalaryDrawn,
         "Responsibilities"      : formValues.Responsibilities,
         "ReportingManager"      : formValues.ReportingManager,
         "ReportingManagerDesignation"      : formValues.ReportingManagerDesignation,
         "ImageProof"      : formValues.ImageProof,
         "ProofName"      : formValues.ProofName,

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

		return w_id;

	}

});