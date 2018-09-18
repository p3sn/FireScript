Hi, 

Thanks for your interest in FireScript. A Google Apps library for Firebase with nearly the same syntax as the NodeJS Admin SDK.

My draft article on Medium is available here:
https://medium.com/p/cbf8b2cef9c3/edit   
Please **do** comment on it ;-)

## If you are not familiar with Apps Script
Read the medium article and provide feedback.

## If you are familiar with Apps Script
* Load the following library / resource with this ID:
1i5ibIfXYojIR_o6vk7RCvub7AdlxdxJ6TE8j5mOOiwAeUnxXjgc1FLcU
* In the toolbar, select View > Show manifest file
* On the left side, a file named appsscript.json should be visible. In this file you have to add oauthScopes:
	```"oauthScopes": ["https://www.googleapis.com/auth/script.external_request", "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/firebase.database"]```
	
* Check out the example.gs file in this repository and copy/paste it in your Google Apps project
* Change the project id and you are ready to go!