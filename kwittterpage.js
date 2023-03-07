//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyA23omhxWFXchYhr10YRiVkeRhcEjdjuK4",
    authDomain: "kwitter-b6f3d.firebaseapp.com",
    databaseURL: "https://kwitter-b6f3d-default-rtdb.firebaseio.com",
    projectId: "kwitter-b6f3d",
    storageBucket: "kwitter-b6f3d.appspot.com",
    messagingSenderId: "371104674339",
    appId: "1:371104674339:web:f426b1927b68d93bdab796"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name :user_name , 
          message : msg , 
          like : 0 
          
    });
    document.getElementById("msg").value = "";
 }
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
function logout() {

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
  //  //
      window.location = "index.html";
  }
//End code
    } });  }); }
getData();
