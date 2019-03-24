import { Mongo } from 'meteor/mongo';



export const BankMaster = new Mongo.Collection('Bankdata');

 if(Meteor.isServer){
	/*Meteor.publish("empData",function(empid){
		var empprof = EmpMaster.find({"_id":empid});
		return empprof;
	});
*/
	Meteor.publish("bankd",function(){
		var allEmp = BankMaster.find({});
		console.log("data",allEmp);
		return allEmp;
	});
}

Meteor.methods({
	"insertbankinfo":function(formValues){
		console.log(formValues);

		var b_id=BankMaster.insert({

			"BankName" 	    : formValues.BankName,
			"BranchName" 	: formValues.BranchName,
			"AccountNumber" : formValues.AccountNumber,
            "AccountType"   : formValues.AccountType,
            "IFSCCode"      : formValues.IFSCCode,
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

		return b_id;

	}

});