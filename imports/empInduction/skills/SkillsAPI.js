import { Mongo } from 'meteor/mongo';



export const SkillMaster = new Mongo.Collection('Skilldata');

 if(Meteor.isServer){
	/*Meteor.publish("empData",function(empid){
		var empprof = EmpMaster.find({"_id":empid});
		return empprof;
	});
*/
	Meteor.publish("Skilld",function(){
		var allSkills = SkillMaster.find({});
		console.log("data",allSkills);
		return allSkills;
	});
}

Meteor.methods({
	"insertSkillinfo":function(skillValues){
		console.log(skillValues);

		var s_id=SkillMaster.insert({

			"Skills" 	    : skillValues.Skills,
			"Description" 	: skillValues.Description,
			
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