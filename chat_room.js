
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyC-OSNJa5oLpMCT2ndGZ5X1wdLlry8nM2w",
      authDomain: "classtest-6e9d5.firebaseapp.com",
      databaseURL: "https://classtest-6e9d5-default-rtdb.firebaseio.com",
      projectId: "classtest-6e9d5",
      storageBucket: "classtest-6e9d5.appspot.com",
      messagingSenderId: "252948900042",
      appId: "1:252948900042:web:275b77e9dba15721aeac33",
      measurementId: "G-5YSSK028M1"
    };
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(" Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "chat_page.html"

}

function redirectToRoomName(name)

{
  console.log(name);
  localStorage.setItem("room_name" , name);
   window.location = "chat_page.html"
}

