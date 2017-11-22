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

const process = require('process'); // Required to mock environment variables
const format = require('util').format;
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const Storage = require('@google-cloud/storage');

const storage = Storage();
const app = express();

const PORT = process.env.PORT || 8080;

const config = require('./config');
const images = require('./images')(config);

app.enable('trust proxy');
app.use(bodyParser.json());

var gcs = Storage({
  projectId: 'my-nodejs-codelab-186407',
  keyFilename: './keyfile.json'
});

const bucket = gcs.bucket('physicalweb-one');

// Upload a local file to a new file to be created in your bucket.
bucket.upload('../images/starry.jpg', function(err, file) {
  if (!err) {
  }
});

var remoteReadStream = bucket.file('starry.jpg').createReadStream();
var localWriteStream = fs.createWriteStream('../images/starry.jpg');
remoteReadStream.pipe(localWriteStream);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});






/*var localReadStream = fs.createReadStream('/photos/zoo/zebra.jpg');
var remoteWriteStream = bucket.file('starry.jpg').createWriteStream();
localReadStream.pipe(remoteWriteStream);
*/

/*Fetch Images created by the currently logged in user and display them
app.get('/', function(req, res, next) {
  images.storeImage(function(err, images) {  
    if (err) return next(err);
    res.render('index', { images: image});
  });
}); */


/*// Download a file from your bucket.
bucket.file('starry-rhone.jpg').download({
  destination: '/photos/starry.jpg'
}, function(err) {});*/
