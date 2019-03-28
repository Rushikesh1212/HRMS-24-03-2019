import { Mongo } from 'meteor/mongo';

export const ListOfLeave = new Mongo.Collection('listOfLeaves');

if(Meteor.isServer){


	Meteor.publish("allRecordData",function(){
		var allData = ListOfLeave.find({});
		return allData;
	});
	Meteor.publish("allRejectedLeaves",function(){
		var allData = ListOfLeave.find({});
		return allData;
	});
}


Meteor.methods({


	"deleteRejectedData" : function(recordid){
		ListOfLeave.remove({"_id":recordid}, (error,result)=>{
				if(error){
					return error;
					console.log(error);
				}else{
					return result;
				}
		});

		return;
	},

	
	
	

});