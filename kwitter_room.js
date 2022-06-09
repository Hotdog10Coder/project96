
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAfF-8S_Vk1IIO_nbWKDMIQA5NEbVgtI00",
      authDomain: "chat-app-1-fe75e.firebaseapp.com",
      databaseURL: "https://chat-app-1-fe75e-default-rtdb.firebaseio.com",
      projectId: "chat-app-1-fe75e",
      storageBucket: "chat-app-1-fe75e.appspot.com",
      messagingSenderId: "839072056240",
      appId: "1:839072056240:web:8b768972dbdbf17c460c75",
      measurementId: "G-REZ8T7K8S9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" !";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name" 

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

      
}

function redirectToRoomName(name){ 
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

