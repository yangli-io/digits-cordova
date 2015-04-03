//-- Required Plugins --
//cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git

//-- Optional Plugins --
//cordova plugin add com.simonmacdonald.telephonenumber
//cordova plugin add com.rjfun.cordova.sms

(function(window){

	//Country data
	var regionCodes = {
	  "+1": "US",
	  "+93": "AF",
	  "+358": "AX",
	  "+355": "AL",
	  "+213": "DZ",
	  "+376": "AD",
	  "+244": "AO",
	  "+54": "AR",
	  "+374": "AM",
	  "+297": "AW",
	  "+247": "AC",
	  "+61": "AU",
	  "+43": "AT",
	  "+994": "AZ",
	  "+973": "BH",
	  "+880": "BD",
	  "+375": "BY",
	  "+32": "BE",
	  "+501": "BZ",
	  "+229": "BJ",
	  "+975": "BT",
	  "+591": "BO",
	  "+387": "BA",
	  "+267": "BW",
	  "+55": "BR",
	  "+246": "IO",
	  "+673": "BN",
	  "+359": "BG",
	  "+226": "BF",
	  "+257": "BI",
	  "+855": "KH",
	  "+237": "CM",
	  "+238": "CV",
	  "+599": "BQ",
	  "+236": "CF",
	  "+235": "TD",
	  "+56": "CL",
	  "+86": "CN",
	  "+57": "CO",
	  "+269": "KM",
	  "+243": "CD",
	  "+242": "CG",
	  "+682": "CK",
	  "+506": "CR",
	  "+225": "CI",
	  "+385": "HR",
	  "+53": "CU",
	  "+357": "CY",
	  "+420": "CZ",
	  "+45": "DK",
	  "+253": "DJ",
	  "+670": "TL",
	  "+593": "EC",
	  "+20": "EG",
	  "+503": "SV",
	  "+240": "GQ",
	  "+291": "ER",
	  "+372": "EE",
	  "+251": "ET",
	  "+500": "FK",
	  "+298": "FO",
	  "+679": "FJ",
	  "+33": "FR",
	  "+594": "GF",
	  "+689": "PF",
	  "+241": "GA",
	  "+220": "GM",
	  "+995": "GE",
	  "+49": "DE",
	  "+233": "GH",
	  "+350": "GI",
	  "+30": "GR",
	  "+299": "GL",
	  "+590": "GP",
	  "+502": "GT",
	  "+44": "GG",
	  "+224": "GN",
	  "+245": "GW",
	  "+592": "GY",
	  "+509": "HT",
	  "+672": "HM",
	  "+504": "HN",
	  "+852": "HK",
	  "+36": "HU",
	  "+354": "IS",
	  "+91": "IN",
	  "+62": "ID",
	  "+98": "IR",
	  "+964": "IQ",
	  "+353": "IE",
	  "+972": "IL",
	  "+39": "IT",
	  "+81": "JP",
	  "+962": "JO",
	  "+7": "KZ",
	  "+254": "KE",
	  "+686": "KI",
	  "+377": "XK",
	  "+381": "XK",
	  "+386": "XK",
	  "+965": "KW",
	  "+996": "KG",
	  "+856": "LA",
	  "+371": "LV",
	  "+961": "LB",
	  "+266": "LS",
	  "+231": "LR",
	  "+218": "LY",
	  "+423": "LI",
	  "+370": "LT",
	  "+352": "LU",
	  "+853": "MO",
	  "+389": "MK",
	  "+261": "MG",
	  "+265": "MW",
	  "+60": "MY",
	  "+960": "MV",
	  "+223": "ML",
	  "+356": "MT",
	  "+692": "MH",
	  "+596": "MQ",
	  "+222": "MR",
	  "+230": "MU",
	  "+262": "YT",
	  "+52": "MX",
	  "+691": "FM",
	  "+373": "MD",
	  "+976": "MN",
	  "+382": "ME",
	  "+212": "MA",
	  "+258": "MZ",
	  "+95": "MM",
	  "+264": "NA",
	  "+674": "NR",
	  "+977": "NP",
	  "+31": "NL",
	  "+687": "NC",
	  "+64": "NZ",
	  "+505": "NI",
	  "+227": "NE",
	  "+234": "NG",
	  "+683": "NU",
	  "+850": "KP",
	  "+47": "NO",
	  "+968": "OM",
	  "+92": "PK",
	  "+680": "PW",
	  "+970": "PS",
	  "+507": "PA",
	  "+675": "PG",
	  "+595": "PY",
	  "+51": "PE",
	  "+63": "PH",
	  "+48": "PL",
	  "+351": "PT",
	  "+974": "QA",
	  "+40": "RO",
	  "+250": "RW",
	  "+290": "SH",
	  "+508": "PM",
	  "+685": "WS",
	  "+378": "SM",
	  "+239": "ST",
	  "+966": "SA",
	  "+221": "SN",
	  "+248": "SC",
	  "+232": "SL",
	  "+65": "SG",
	  "+421": "SK",
	  "+677": "SB",
	  "+252": "SO",
	  "+27": "ZA",
	  "+82": "KR",
	  "+211": "SS",
	  "+34": "ES",
	  "+94": "LK",
	  "+249": "SD",
	  "+597": "SR",
	  "+268": "SZ",
	  "+46": "SE",
	  "+41": "CH",
	  "+963": "SY",
	  "+886": "TW",
	  "+992": "TJ",
	  "+255": "TZ",
	  "+66": "TH",
	  "+228": "TG",
	  "+690": "TK",
	  "+676": "TO",
	  "+216": "TN",
	  "+90": "TR",
	  "+993": "TM",
	  "+688": "TV",
	  "+256": "UG",
	  "+380": "UA",
	  "+971": "AE",
	  "+598": "UY",
	  "+998": "UZ",
	  "+678": "VU",
	  "+379": "VA",
	  "+58": "VE",
	  "+84": "VN",
	  "+681": "WF",
	  "+967": "YE",
	  "+260": "ZM",
	  "+263": "ZW"
	}	

	function findRegion(number){
		number = "" + number; //Make number to string
		var code = '';
		var search = '';
		for (var i = 0; i < number.length; i++){
			search += number[i];
			if (regionCodes[search]) code = regionCodes[search];
		}
		return code;
	}

	
	var phone = {
		number: '',
		region: '',
	};
	
	var smsInterceptor = function(){ return {turnOff: function(){}}};
	document.addEventListener("deviceready", function(){
		/*
		 * Will try to get device's phone number in order to auto populate digits form
		 * This requires the com.simonmacdonald.telephonenumber cordova plugin
		 */
		var telephoneNumber = cordova.require("cordova/plugin/telephonenumber");
	    telephoneNumber.get(function(num) {
	      	phone.number = num;
      		phone.region = findRegion(num);
	    });

	    /*
		 * The below piece of code sets up sms intercept
		 * When the user gets the sms confirmation it will automatically fill it in for them
		 */

		 if (SMS){
	      smsInterceptor = function(cb){
	        SMS.startWatch();

	        document.addEventListener('onSMSArrive', function(e){
	          var sms = e.data.body;
	          var code = sms.split("code:")[1].split(".")[0].trim();
	          cb(code)
	        });

	        var turnOff = function(){
	          SMS.stopWatch();
	          removeEventListener('onSMSArrive');
	        };

	        return {
	          turnOff: turnOff
	        }
	      };
	    }
	}, false);

	


	/*
	 * @param {string|number} consumerKey
	 * @param {object} [options] - {autofill: true, smsIntercept: true}
	 */
	window.DigitsCordova = function DigitsCordova(consumerKey, options){

		var _this = this;

		var defaultOptions = {
			autoFill: true,
			smsIntercept: true,
			autoProceed: true
		}

		if (typeof options === 'object'){
			options.autoFill = options.autoFill || defaultOptions.autoFill;
			options.smsIntercept = options.smsIntercept || defaultOptions.smsIntercept;
			options.autoProceed = options.autoProceed || defaultOptions.autoProceed;
		} else {
			options = defaultOptions;
		}

		this.consumerKey = consumerKey;

		var successCallback = function(){}; //When digits successfully receives an oAuth response
		var failCallback = function(){}; //When user is able to open digits but does not authenticate properly
		var errorCallback = function(){}; //If we something breaks in digits

		var openWindow; //Variable for storing the new window

		var callbacks = {
			successCallback: function(cb){
				if (typeof cb === 'function'){
	            	successCallback = cb;
	          	} else {
	            	throw('successCallback(param) - param is expecting a function');
	          	}
	          	return this;
			},
			failCallback: function(cb){
				if (typeof cb === 'function'){
	            	failCallback = cb;
	          	} else {
	            	throw('failCallback(param) - param is expecting a function');
	          	}
	          	return this;
			},
			errorCallback: function(cb){
				if (typeof cb === 'function'){
	            	errorCallback = cb;
	          	} else {
	            	throw('errorCallback(param) - param is expecting a function');
	          	}
	          	return this;
			}
		}

		/*
		 * Opens the inAppBrowser with digits
		 *
		 * @return {object} - callbacks
		 */
		this.open = function(){
			document.addEventListener("deviceready", function(){
				var succeed = false; //means if we have successfully got a response
				var smsIntercepting;
				//The code below is for mobile only

				if (cordova.InAppBrowser){
					//Open inAppBrowser to the twitter digits site
					
					var openWindow = cordova.InAppBrowser.open('https://www.digits.com/login?consumer_key=' + _this.consumerKey + '&host=' + location.href, "_blank");
					//listen to loadstart event which fires off whenever the inAppBrowser starts loading any site
					openWindow.addEventListener('loadstart', function(event){
						var url = event.url;
						if (url.search('specialsauce=') > -1){
							var param = decodeURIComponent(url.split('&specialsauce=')[1]);
			              	if (param && !succeed) {
			                	succeed = true;
			                	openWindow.close();
			                	successCallback(JSON.parse(param).result);
			              	}
						}

						//Long poll the inAppBrowser for a response
						setInterval(function(){
			              	openWindow.executeScript({
			                  	code : "var res = document.querySelector(\"script[id='callback-data']\").textContent.trim(); if (res) {location.href = (location.href + '&specialsauce=' + res)};"
			              	});
			            });
					});

					openWindow.addEventListener('exit', function(event) {

						//If we unsuccessfully got a response, this will call the failed Callback
			            if (!succeed){
			              	failCallback('failed');
			            }
			        });

			        openWindow.addEventListener('loaderror', function(event){

			        	//If something did not load properly
			            errorCallback("Could not load page")
			        });

			        openWindow.addEventListener('loadstop', function(event) {
			        	if (options.autoFill){
				        	if (options.smsIntercept){
				        		smsIntercepting = smsInterceptor(function(result){
					              var autoFillCode = "document.getElementsByName('login_verification_challenge_response')[0].value='" + result + "';";
					              var autoProceedCode = "document.getElementsByTagName('form')[0].submit()";
					              openWindow.executeScript({
	                	  			code : autoFillCode
					              });

					              	if (options.autoProceed){
					                	openWindow.executeScript({
					                  		code : autoProceedCode
					                	});
					            	}
					            })
				        	}
				        	//When inAppBrowser stops loading
				        	if (phone.number){
				        		var autoFillCode = "document.getElementsByName('x_auth_country_code')[0].value='" + phone.region + "';";
					            autoFillCode += "document.getElementsByName('x_auth_phone_number')[0].value=" + phone.number + ";";
					            openWindow.executeScript({
					              code : autoFillCode
					            });
				        	}
				        }
			    	});
				} else {
					errorCallback('An error with inAppBrowser has occured, is this plugin installed?');
				}
			}, false);	

			return callbacks;
		}
	}
})(window);





