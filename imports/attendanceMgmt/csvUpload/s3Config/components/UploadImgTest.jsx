import React, { Component } from 'react';
import { UploadImgs } from '/imports/s3Config/api/UploadImg.js';
import { withTracker } from 'meteor/react-meteor-data';
class UploadImgTest extends Component {
 inputFileChange(event){ 
    event.preventDefault();
    $(event.target).parent().siblings('.inputFiles').click();
  }
  handleUpload(event){
    event.preventDefault();
    let self = this;
    Session.set("uploadImgTest","");
      if (event.currentTarget.files && event.currentTarget.files[0]) { 
        var dataImg  = event.currentTarget.files[0]; 
        var fileSize = dataImg.size; 
        var size     = 1073741824;
         if(dataImg.type == "image/jpeg" || dataImg.type == "image/png"){      
           var reader    = new FileReader();        
           reader.readAsDataURL(event.currentTarget.files[0]);      
           var file = event.currentTarget.files[0];      
            if (file) { 
              if (fileSize < size) {
                addUploadImgsToS3(file,self);  
              }else{
                swal("File not uploaded!","error");
              }     
            }   
         } else { 
          swal({    
             position: 'top-right',     
             type: 'error',    
             title: 'Please select image',       
             showConfirmButton: false,      
             timer: 1500      
           });   
        }
      }
  }
  getUploadImagePercentage(){
    var uploadProgressPercent = Session.get("uploadImgTest");
    if(uploadProgressPercent){
        var percentVal = parseInt(uploadProgressPercent);
        if(percentVal){
            
            var styleC = {
                width:percentVal + "%",
                display:"block",
            }
            var styleCBar = {
                display:"block",
                marginTop:5,
            }
        }
        if(!percentVal){
            var percentVal = 0;

            var styleC = {
                width:0 + "%",
                display:"none",
            }
            var styleCBar = {
                display:"none",
                marginTop:5,
            }
        }
        if(parseInt(percentVal)==100){
            setTimeout(()=>{ 
                Session.set("uploadImgTest",0); 
            }, 5000);
        }
        return (
          <div className="progress"  style= {styleCBar}>
            <div className="progress-bar progress-bar-striped active" role="progressbar"
            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style= {styleC}>
              {percentVal} %
            </div>
          </div>
        );
    }
  }
  render() {
    return (
    	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bulkEmployeeContent">
	          
	        </div>
	        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bulkEmployeeFile">
	          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 text-right">Upload File :</div>
	          <input type="file" className="btn btn-info" onChange={this.handleUpload.bind(this)} />
	        </div>
          {this.getUploadImagePercentage()}
          {!this.props.loading ?
            this.props.uploadImg ?
               <div className="col-lg-3 col-lg-offset-6">
                <img src={this.props.uploadImg.image} />
              </div>
            :
            ""
            :
            ""
          }
    	</div> 
    );
  }
}
UploadImgTestContainer = withTracker(({props}) => {
    const postHandle = Meteor.subscribe('uploadedimgs');
    // var editServices   = this.props.params.id;
    // console.log("Param" +editServices);
    const uploadImg  = UploadImgs.findOne({},{sort: {createdAt: -1, limit: 1}});
    const loading    = !postHandle.ready();
    
      return {
          loading,
          uploadImg
      };
})(UploadImgTest);

export default UploadImgTestContainer;