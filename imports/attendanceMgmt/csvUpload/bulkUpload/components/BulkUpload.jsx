import React, { Component } from 'react';

// import {ReadCsv} from '/imports/bulkUpload/api/ReadCsv.js';

export default class BulkUpload extends Component {
 inputFileChange(event){ 
    event.preventDefault();
    $(event.target).parent().siblings('.inputFiles').click();
  }
  uploadCSV(event){
    event.preventDefault();    

    if(event.currentTarget.files[0]){ 
      var file     = event.currentTarget.files[0];
      var fileName = file.name;
      var ext      = fileName.split('.').pop();
      
      if(ext == 'csv'){  
        Papa.parse(event.target.files[0], {
          header: true,
          complete( results, file ) {
            console.log('results data',results.data);
            // var finaldata[] = results.data; 
            Meteor.call("displayDataFromCSV",results.data,( error, result ) => {
            	if(error){
            		console.log('there is some error',error);
            	}else{
            		console.log('result for me',result);
            	}
            });
          }
        }); 
      }
    }
  }



    uploadCSV(event){
    event.preventDefault();    

    if(event.currentTarget.files[0]){ 
      var file     = event.currentTarget.files[0];
      var fileName = file.name;
      var ext      = fileName.split('.').pop();
      
      if(ext == 'csv'){  
        Papa.parse(event.target.files[0], {
          header: true,
          complete( results, file ) {
            console.log('results data',results.data);
            // var finaldata[] = results.data; 
            Meteor.call("displayDataFromCSV",results.data,( error, result ) => {
              if(error){
                console.log('there is some error',error);
              }else{
                console.log('result for me',result);
              }
            });
          }
        }); 
      }
    }
  }






  render() {
    return (
    	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
   
	        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bulkEmployeeFile">
	          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 text-right mt10">Upload File :</div>
	          <input type="file" className="btn btn-info" accept=".csv" onChange={this.uploadCSV.bind(this)} />
	        </div>
    	</div> 
    );
  }
}