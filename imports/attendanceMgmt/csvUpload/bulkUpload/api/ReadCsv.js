import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Match } from 'meteor/check';

export const Attendance = new Mongo.Collection('attendance');


SimpleSchema.defineValidationErrorTransform(error => {
  const ddpError = new Meteor.Error(error.message);
  ddpError.error = 'validation-error';
  ddpError.details = error.details;
  return ddpError;
});


Meteor.methods({
	'checkCSVHeader' : function(csvObject){
		if(Match.test(csvObject, Array)){
			if(csvObject[0][0] != 'Emp_id' || 
				csvObject[0][1] != 'Emp_name' || 
				csvObject[0][2] != 'Shift' || 
				csvObject[0][3] != 'inTime'||
				csvObject[0][4] != 'outTime'||
				csvObject[0][5] != 'workdur'||
				csvObject[0][6] != 'Status'){
					console.log('wrong header');
					return 'Data is not in appropriate Format'; 
			}else{
				console.log('proper header');
				var data = Meteor.call('displayDataFromCSV',csvObject);
				if(data){
					return data;
				}
			}				
		}else{
			return 'Data is not in appropriate Format.2';
		}
	},

	"displayDataFromCSV" : function(csvObject){
		console.log("here function data",csvObject);

		
		for ( var i =0; i<= csvObject.length;i++) 
					{
						
						Attendance.insert({
									"Emp_id" 	: csvObject[i].Emp_id,
									"Emp_name" 	: csvObject[i].Emp_name,
									"Shift" 	: csvObject[i].Shift,
									"inTime" 	: csvObject[i].inTime,
									"outTime" 	: csvObject[i].outTime,					
									"workdur" 	: csvObject[i].workdur,					
									"Status" 	: csvObject[i].Status,					
								}, 
								(error,result)=>{
									if(error){
										console.log(error);
										return;
									}else{
										console.log(result);
										return ;
									}
								}
							);
					}


		return ;

		
	}

	
});

var fs = Npm.require('fs');
// Assume that the csv file is in yourApp/public/data folder
var data = fs.readFileSync(process.env.PWD + '/public/ak3.csv', 'utf8');
var usersData = Papa.parse(data, {header: true});



