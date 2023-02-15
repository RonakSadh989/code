var firebaseConfig = {
			apiKey: "AIzaSyAjUhw6EhCvplhnmAxQFge32crhUlyQXNo",
			authDomain: "timing-4dec6.firebaseapp.com",
			databaseURL: "https://timing-4dec6-default-rtdb.firebaseio.com/",
			projectId: "timing-4dec6",
			storageBucket: "timing-4dec6.appspot.com",
			messagingSenderId: "194854342433",
			appId: "1:194854342433:web:5e7662abf4278cb6293860"
		};
		firebase.initializeApp(firebaseConfig);

		var database = firebase.database();
        let container = document.getElementById("p33")
        var dbRef = firebase.database().ref("Timing").child('hello');
dbRef.on('value', snap => container.innerText = snap.val());

// dbRef.on('value', snapshot => {
//   console.log(snapshot.val());
// });
// console.log()
// function addLead() {
//     var clientName = document.getElementById('name').value;
//     // var clientMobile = document.getElementById('mobile').value;
//     // var clientEmail = document.getElementById('email').value;

//     var newClientKey = database.ref().child('Timing').push().key;
//     database.ref('Timing/'+newClientKey+'9').set(clientName);
//     // database.ref('leads/'+newClientKey+'/mobile').set(clientMobile);
//     // database.ref('leads/'+newClientKey+'/email').set(clientEmail);
// }



var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error:");
});

