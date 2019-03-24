import { Mongo } from 'meteor/mongo';



export const CertiMaster = new Mongo.Collection('Certidata');

 if(Meteor.isServer){
	/*Meteor.publish("empData",function(empid){
		var empprof = EmpMaster.find({"_id":empid});
		return empprof;
	});
*/
	Meteor.publish("Certid",function(){
		var allEmp = CertiMaster.find({});
		console.log("data",allEmp);
		return allEmp;
	});
}

Meteor.methods({
	"insertCertiinfo":function(formValues){
		console.log(formValues);

		var c_id=CertiMaster.insert({
	
		 "CertificationName" 	     : formValues.Name,
		 "IssuedBy"      : formValues.IssuedBy,
         "CertifiedOn"   : formValues.CertifiedOn,
         "Validtill"     : formValues.Validtill,
         "Grade"         : formValues.Grade,        
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

		return c_id;

	}

});