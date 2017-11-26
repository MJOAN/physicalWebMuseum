
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;


const Storage = require('@google-cloud/storage');
const storage = new Storage();

var bucketName = 'physicalweb-museum';
var filename = './images/starry.jpg';

storage
    .bucket(bucketName)
    .upload(filename)
    .then(() => {
        console.log(`${filename} uploaded to ${bucketName}.`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });






app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
