
//CONFIG
var FIREBASEURL = "https://<project_id>.firebaseio.com/";
var TOKEN = ScriptApp.getOAuthToken();
var db = new FireScriptalpha.admin(FIREBASEURL).oauth(TOKEN);

function runTest() {
  writeExamples(); 
  readExamples();
}
function writeExamples() {
  
  //clear everything in path
  var ref = db.ref("firescript"); 
  ref.set(null);
  
  //set object
  var ref = db.ref("firescript/set");  
  ref.set({
    alanisawesome: {
      date_of_birth: "June 23, 1912",
      full_name: "Alan Turing"
    },
    gracehop: {
      date_of_birth: "December 9, 1906",
      full_name: "Grace Hopper"
    }
  });
 
  //set with using .child
  var ref = db.ref("firescript/child/set"); 
  ref.child("alanisawesome").set({
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  });
  ref.child("gracehop").set({
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  });
  
  //update with .child
  var ref = db.ref("firescript/child/update");
  var hopperRef = ref.child("gracehop");
  hopperRef.update({
    "nickname": "Amazing Grace"
  });
  
  //update with path in object keys
  var ref = db.ref("firescript/update/path");
  ref.update({
    "alanisawesome/nickname": "Alan The Machine",
    "gracehop/nickname": "Amazing Grace"
  });
  
  //update with object
  var ref = db.ref("firescript/update");
  ref.update({
    "alanisawesome": {
      "nickname": "Alan The Machine"
    },
    "gracehop": {
      "nickname": "Amazing Grace"
    }
  });
}

function readExamples() {
  var ref = db.ref("firescript/update/alanisawesome/nickname"); 
  var snapshot = ref.once("value");
  var data = snapshot.val();
  if(!data || data !== "Alan The Machine") throw 'value is not what it should be according the test';
  Logger.log(data);
  
  var ref = db.ref("firescript/update/alanisawesome/nickname"); 
  var data = ref.once("value").val();
  if(!data || data !== "Alan The Machine") throw 'value is not what it should be according the test';
  Logger.log(data);
  
  var ref = db.ref("firescript/update/alanisawesome/nickname"); 
  var snapshot = ref.once("value");
  var data = snapshot.val();
  if(!data || data !== "Alan The Machine") throw 'value is not what it should be according the test';
  Logger.log(data);
  
}

