import { Mongo } from 'meteor/mongo';

export const Attendance = new Mongo.Collection('Attendance');

if(Meteor.isServer){
	

	Meteor.publish("att",function(){
		var attendance = Attendance.find({});
		return attendance;	
	});

// data for text report
	Meteor.publish("allEmpData",function(e){
		var allEmp = Attendance.find({"dailyAttendance.Status":"A"});
		return allEmp;
		console.log("here is data",allEmp);
	});

	Meteor.publish("oneEmpData",function(i){
		var oneEmp = Attendance.find({E_Code:"101"});
		return oneEmp;
		console.log("here is data",oneEmp);
	});

// data for perticular emp absentee 
	
	Meteor.publish("allAbEmpData",function(){
		var allAbEmp = Attendance.find({});
		return allAbEmp;
		// console.log(allEmp);
	});

}

Meteor.methods({
	
});