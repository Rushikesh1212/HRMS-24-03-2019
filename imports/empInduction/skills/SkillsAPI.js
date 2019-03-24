import { Mongo } from 'meteor/mongo';



export const SkillMaster = new Mongo.Collection('Skilldata');

 if(Meteor.isServer){
	/*Meteor.publish("empData",function(empid){
		var empprof = EmpMaster.find({"_id":empid});
		return empprof;
	});
*/
	Meteor.publish("Skilld",function(){
		var allEmp = SkillMaster.find({});
		console.log("data",allEmp);
		return allEmp;
	});
}

Meteor.methods({
	"insertSkillinfo":function(formValues){
		console.log(formValues);

		var s_id=BankMaster.insert({

			"Skills" 	    : formValues.Skills,
			"Description" 	: formValues.Description,
			
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

		return s_id;

	}

});