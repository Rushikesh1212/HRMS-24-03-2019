import { Mongo } from 'meteor/mongo';



export const CertiMaster = new Mongo.Collection('Certidata');

 if(Meteor.isServer){
	Meteor.publish("Certid",function(){
		var allcerti = CertiMaster.find({});
		console.log("data",allcerti);
		return allcerti;
	});
}

Meteor.methods({
	"insertCertiinfo":function(CertiValues){
		console.log(CertiValues);

		var c_id=CertiMaster.insert({
	
		 "CertificationName" : CertiValues.Name,
		 "IssuedBy"          : CertiValues.IssuedBy,
         "CertifiedOn"       : CertiValues.CertifiedOn,
         "Validtill"         : CertiValues.Validtill,
         "Grade"             : CertiValues.Grade,        
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