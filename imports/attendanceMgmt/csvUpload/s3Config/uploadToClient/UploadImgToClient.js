import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

export const UploadImg = new FilesCollection({
    collectionName: 'UploadImg',
    allowClientCode: false,
    chunkSize: 1024 * 1024
}); 
  