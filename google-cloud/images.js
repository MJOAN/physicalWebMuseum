/*
   Copyright 2016, Google, Inc.
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var url = require('url');

module.exports = function(config) {

var gcloud = require('google-cloud');

  var datastore = gcloud.datastore({
    projectId: config.projectId,
    keyFilename: config.keyFilename
  });

  function getAllImages(callback) {
    var error = null;
    var iamges = [
      { id: 12345, title: '', desctiption: '', imageURL: '', createdByOrDate: '' }
    ];
    callback(error, images);
  }

  function getUserImage(id, callback) {
    var query = datastore.createQuery(['images']).filter('userId', '=', userId);
        datastore.runQuery(query, callback);
    callback(new Error('image.getUserImage [Not Yet Implemented]'));
  }


  function addImage(id, title, description, imageURL, callback) {
      var entity = {
      key: datastore.key('Images'),
      data: {
        title: title,
        description: description,
      }
    };
  
    if (imageURL)
      return callback(new Error('image.addImage with image [Not Yet Implemented]'));

    return callback(new Error('image.addImage [Not Yet Implemented]'));
  }

  function uploadCoverImage(coverImageData, callback) {
    // Generate a unique filename for this image
    var filename = '' + new Date().getTime() + "-" + Math.random();
    var file = bucket.file(filename);
    var imageURL = 'https://' + config.bucketName + '.storage.googleapis.com/' + filename;
    var stream = file.createWriteStream();
    stream.on('error', callback);

    stream.on('finish', function() {
      // Set this file to be publicly readable
      file.makePublic(function(err) {

        if (err) return callback(err);
        callback(null, imageUrl);
      });
    });

    stream.end(coverImageData);
  }


  function deleteImage(id, callback) {
     var key = datastore.key(['Images', parseInt(id, 10)]);

      datastore.get(key, function(err, images) {
        if (err) return callback(err);

        if (images.data.imageURL) {

          var filename = url.parse(book.data.imageUrl).path.replace('/', '');
          var file = bucket.file(filename);
          file.delete(function(err) {
            if (err) return callback(err);
            datastore.delete(key, callback);
          });
        } else {
          datastore.delete(key, callback);
        }
      });
    }
    callback(new Error('image.deleteImage [Not Yet Implemented]'));
  }

  return {
    getAllImages: getAllImages,
    getUserImage: getUserImage,
    addImage: addImage,
    deleteImage: deleteImage
  };
};
