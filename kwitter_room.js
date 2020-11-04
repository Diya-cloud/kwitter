
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCYMPxZaorW4hax2zb1HTpnSU0NKb22Cto",
      authDomain: "kwitter-817e4.firebaseapp.com",
      databaseURL: "https://kwitter-817e4.firebaseio.com",
      projectId: "kwitter-817e4",
      storageBucket: "kwitter-817e4.appspot.com",
      messagingSenderId: "135341035233",
      appId: "1:135341035233:web:805dd72f8ec160e13871a0",
      measurementId: "G-VQ44TJNGY9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)>#"+Room_names+"</div><hr>"
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
      Room_name=document.getElementById("Room_names").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose="adding room name"
      });
      localStorage.setItem("room_name",Room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}