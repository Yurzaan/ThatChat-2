var firebaseConfig = {
      apiKey: "AIzaSyBFjZirMagJY_ypLLg0HLwnVlO9PmhhEF4",
      authDomain: "pushpali.firebaseapp.com",
      databaseURL: "https://pushpali.firebaseio.com",
      projectId: "pushpali",
      storageBucket: "pushpali.appspot.com",
      messagingSenderId: "384756082835",
      appId: "1:384756082835:web:14b804867acb47c3ecc566",
      measurementId: "G-000F2Q8097"
    };
    firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("name");

document.getElementById("welcome").innerHTML = "Welcome " + user_name;

function add_room() {
      room_name = document.getElementById("Room_input").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "ThatChat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}