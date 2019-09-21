var admin = require("firebase-admin");
var serviceAccount = require("FirebaseCredentials");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://silken-champion-253618.firebaseio.com"
});

let db = admin.firestore();

// See Google Firebase docs
// Test code to change data inside Google Firebase
let docRef = db.collection('districts').doc('Seattle');
docRef.update({
        population: "1"
}).then(function() { 
    console.log("success");
}).catch(function (error) { 
    console.log("error" + error);
});

