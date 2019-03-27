import { Mongo } from 'meteor/mongo';



export const AcademicsMaster = new Mongo.Collection('Academicdata');

 if(Meteor.isServer){
	/*Meteor.publish("empData",function(empid){
		var empprof = EmpMaster.find({"_id":empid});
		return empprof;
	});
*/
	Meteor.publish("Academicd",function(){
		var alldata = AcademicsMaster.find({});
		console.log("data",alldata);
		return alldata;
	});
}

Meteor.methods({
	"insertAcademicsinfo":function(formValues){
		console.log(formValues);

		var Academic_id=AcademicsMaster.insert({
	
		 "QualificationLevel" 	     : formValues.QualificationLevel,
		 "Qualification"      		 : formValues.Qualification,
         "Specialization"    	     : formValues.Specialization,
         "Mode"     			     : formValues.Mode,
         "Grade"                     : formValues.Grade, 
         "PassoutYear"     			 : formValues.PassoutYear,
         "CollegeName"               : formValues.CollegeName, 
         "UniversityName"     	     : formValues.UniversityName,
         "City"                      : formValues.City,        
         "State"     			     : formValues.State,
         "ImageProof"                : formValues.ImageProof, 
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

		return Academic_id;

	}

});