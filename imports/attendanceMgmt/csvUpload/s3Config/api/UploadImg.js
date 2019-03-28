import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const UploadImgs = new Mongo.Collection("uploadimgs");
export const TempUploadImg = new Mongo.Collection("tempuploadimg");
import {UploadImg} from '/imports/s3Config/uploadToServer/UploadImgToServer.js';
if (Meteor.isServer) {

  
  Meteor.publish('uploadedimgs',()=>{
        return UploadImgs.find({});
    }); 
Meteor.methods({
	//add image to TempUploadImg
      "addNewTemporaryImage": function (id) {
        var data = UploadImg.findOne({"_id" : id});
        data.link();
        var imageLink = 'https://s3.ap-south-1.amazonaws.com/iassureit-training/'+data.path;
          TempUploadImg.insert({
          "userId"    : 1,
          "imageLink" : imageLink,
          "fileName"  : data.name,
          "fileExt"   : data.ext,
          "createdAt" : new Date(),
          },(error, result)=>{
            if(error){
              console.log('error ',error);
            }else{
              Meteor.call('saveImgToDb');
            }
          });
      },
     'saveImgToDb':function(){
        var getImage              = TempUploadImg.findOne({"userId":1}, {sort: {createdAt: -1, limit: 1}});
        if(getImage){
          var image               = getImage.imageLink;
          var fileName            = getImage.fileName;
          var fileExt             = getImage.fileExt;
        }else{
          var image               = "https://s3.ap-south-1.amazonaws.com/assureidportal/backofficeImages/noImage.png";
          var fileName            = 'noImage';
          var fileExt             = 'png';
        }
        UploadImgs.insert({
            'image'                 : image,
            'fileName'              : fileName,
            'fileExt'               : fileExt,
            'createdAt'             : new Date()
        }); 
        // TempUploadImg.remove({});
        Meteor.call('removeTempImage',getImage._id);
      },
      // remove temp service image
      "removeTempImage": function(id){
        TempUploadImg.remove({"_id" : id});
      }
});
}