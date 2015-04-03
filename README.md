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
new DigitsCordova('consumerKEy', options)
  .successCallback(loginCallback)  //When user successfully logs in
  .failCallback(failedLoginCallback) //When user failed to login
  .errorCallback(errorOccurredCallback) //If digits was not rendered properly
  
###Options include
####autoFill {boolean}(default: true)
  By setting this true, and if com.simonmacdonald.telephonenumber is installed properly then the app will automatically fill the phone number and country code
  
####smsIntercept {boolean}(default: true)
  By setting this true, and if com.rjfun.cordova.sms is installed properly the app will intercept sms after user has requested for one.  This will turn itself off when digits is closed.
  
####autoProceed {boolean}(default: true)
  By setting this true and if sms is being intercepted then it will automatically confirm and close digits when the sms is intercepted properly.


