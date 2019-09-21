var admin = require("firebase-admin");
var serviceAccount = require("../dbtesting/FirebaseCredentials");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://silken-champion-253618.firebaseio.com"
});

let db = admin.firestore();

let docRef = db.collection('districts').doc('Seattle');

docRef.update({
        population: "1"
}).then(function() { 
    console.log("success");
}).catch(function (error) { 
    console.log("error" + error);
});

