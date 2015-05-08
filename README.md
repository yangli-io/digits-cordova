# digits-cordova
Integrating digits with cordova
Additionally, this package can autofill phone number and even intercept SMS

## Installation
```
  bower install digits-cordova
  cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
  
  /* Optional cordova plugins */
  cordova plugin add com.simonmacdonald.telephonenumber
  cordova plugin add com.rjfun.cordova.sms
```

In your index.html page

```html
  <script type="text/javascript" src="cordova.js"></script>
  
  <!-- optional -->
  <script type="text/javascript" src="bower_components/telephonenumber.js"></script>
  <script type="text/javascript" src="bower_components/SMS.js"></script>
  
  <!-- required -->
  <script type="text/javascript" src="bower_components/inappbrowser.js"></script>
  <script type="text/javascript" src="bower_components/digitsCordova.js"></script>
```

##Usage

```html
  <button onClick="openDigits()">Sign up with digits</button>
```

```javascript
  function openDigits(){
    var digits = new DigitsCordova('gmoaaZhEG88hMQUdpWHnF1IAz'); //Replace with your own consumerKey
      digits.open()
          .successCallback(function(loginResponse){
              var oAuthHeaders = loginResponse.oauth_echo_headers;
              var verifyData = {
                  authHeader: oAuthHeaders['X-Verify-Credentials-Authorization'],
                  apiUrl: oAuthHeaders['X-Auth-Service-Provider']
              };
             
              $.post('/verify', verifyData)
                  .done(function(){ window.reload(); });
          }).failCallback(function(error){
              //error
          }).errorCallback(function(error){
              //error
          })
  }
```

##API
```javascript
new DigitsCordova('consumerKey', options)
  .successCallback(loginCallback)  //When user successfully logs in
  .failCallback(failedLoginCallback) //When user failed to login
  .errorCallback(errorOccurredCallback) //If digits was not rendered properly
```  
  
###Options include
####autoFill {boolean}(default: true)
  By setting this true, and if com.simonmacdonald.telephonenumber is installed properly then the app will automatically fill the phone number and country code
  
####smsIntercept {boolean}(default: true)
  By setting this true, and if com.rjfun.cordova.sms is installed properly the app will intercept sms after user has requested for one.  This will turn itself off when digits is closed.
  
####autoProceed {boolean}(default: true)
  By setting this true and if sms is being intercepted then it will automatically confirm and close digits when the sms is intercepted properly.
  
*Additionally, if you don't include the phonenumber and sms cordova packages, these will not work.

```javascript
new DigitsCordova('consumerKey', {autoFill: false, smsIntercept: false, autoProceed: false})
  .successCallback(loginCallback)  //When user successfully logs in
  .failCallback(failedLoginCallback) //When user failed to login
  .errorCallback(errorOccurredCallback) //If digits was not rendered properly
```  
##License
The MIT License (MIT)

Copyright (c) 2015 Yang Li

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
