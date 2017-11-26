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

const format = require('util').format;
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const jws = require('jws');  // is this useful? gtoken errors are from JWS

const app = express();
const storage = require('@google-cloud/storage')


// auth is automatic inside gcloud engine so i am trying that
var gcloud = require('google-cloud')({
  projectId: 'my-nodejs-codelab-186407',
  keyFilename: './keyfile.json'
});


const PORT = process.env.PORT || 8080;

const gcs = storage({   // here we instantiate credentials for client
  projectId: 'my-nodejs-codelab-186407',
  keyFilename: './keyfile.json'
});

app.enable('trust proxy');
app.use(bodyParser.json());

const bucket = gcs.bucket('physicalweb-one');
const image = './images/starry.jpg';


bucket.upload('./images/starry.jpg', function(err, file) {
  if (!err) {
  }
  console.log("works");
});

/*storage
  .bucket(bucket)
  .upload(image)
  .then(() => {
    console.log(`${image} uploaded to ${bucket}.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
*/


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});






/*
// gsutil cp desktop/UCLA/physicalWebMuseum/google-cloud/images/starry.jpg gs://physicalweb-one
// x-goog-project-id: 148765837178

// const process = require('process'); // Required to mock environment variables
const config = require('./config');
const images = require('./images')(config);





// Fetch Images created by the currently logged in user and display them
app.get('/', function(req, res, next) {
  images.storeImage(function(err, images) {  
    if (err) return next(err);
    res.render('index', { images: image});
  });
}); 

// Download a file from your bucket.
bucket.file('starry-rhone.jpg').download({
  destination: '/photos/starry.jpg'
}, function(err) {});
*/
