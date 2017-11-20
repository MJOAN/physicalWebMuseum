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

/* Require shared configuration variables, eg. our Google Project ID */
const config = require('./config');

/* Require "Images" service for querying, creating, and deleting Images */
const images = require('./images')(config);

/* Require "auth" service for authenticating users and getting profile info */
const auth = require('./auth')(config);

/* Require Express web framework and Express middleware */
const express = require('express');
const multer = require('multer')
const session = require('cookie-session');

/* Configure Express web application */
const app = express();
app.use(express.static('public'));
// app.set('view engine', 'jade');
app.enable('trust proxy');
app.use(multer({ inMemory: true }));
app.use(session({ signed: true, secret: config.cookieSecret }));


/* Fetch Images created by the currently logged in user and display them */
app.get('/', function(req, res, next) {

  if (! req.session.user) return res.redirect('/');
  images.getUserImages(req.session.user.id, function(err, images) {
    if (err) return next(err);
    var keyImages = images.map((images) => Object.assign(images, { id: images.id || images[key].path[1] }));
    res.render('index', { Images: keyImages, user: req.session.user });
  });
});




