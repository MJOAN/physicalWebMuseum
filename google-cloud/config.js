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

module.exports = {
  projectId: 'my-nodejs-codelab-186407',
  keyFilename: './key.json',
  bucketName: 'images-bucket-project2',
  cookieSecret: '[cookie signing key]',
  oauth2: {
    clientId: '[Client ID for web application credentials]',
    clientSecret: '[Client Secret for web application credentials]',
    redirectUrl: process.env.REDIRECT_URL || 'http://localhost:8080/oauth2callback'
  }
};












/* Redirect user to OAuth 2.0 login URL 
app.get('/login', function(req, res) {
  var authenticationUrl = auth.getAuthenticationUrl();
  res.redirect(authenticationUrl);
});

/* Use OAuth 2.0 authorization code to fetch user's profile 
app.get('/oauth2callback', function(req, res, next) {
  auth.getUser(req.query.code, function(err, user) {
    if (err) return next(err);
    req.session.user = user;
    res.redirect('/');
  });
});

Clear the session 
app.get('/logout', function(req, res) {
  req.session = null;
  res.redirect('/');
}); */