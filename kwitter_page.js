//YOUR FIREBASE LINKS

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

    user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }
      

      