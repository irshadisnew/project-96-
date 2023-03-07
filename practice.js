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
  

  
// ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}

