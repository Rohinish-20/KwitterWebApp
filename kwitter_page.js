//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCLKVCtUhsGCEGaszfFClwwScIKPJX6dhs",
      authDomain: "kwitter-77752.firebaseapp.com",
      databaseURL: "https://kwitter-77752-default-rtdb.firebaseio.com",
      projectId: "kwitter-77752",
      storageBucket: "kwitter-77752.appspot.com",
      messagingSenderId: "445818454020",
      appId: "1:445818454020:web:995fcc7a4f154e02cd3551"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    username = localStorage.getItem("username"); 
    room_name= localStorage.getItem("room_name");

    function send()
    {
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
      name : username,
      message : msg,
      like : 0
     });

     document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);

 name = message_data["name"];
 message = message_data["message"];
 like = message_data["like"];
 
 blue_tick = "<h4> "+name+" <img class='user_tick' src='tick.png'> </h4>";
 message_text = "<h4 class='message_h4'>" +message+ "</h4>";
 like_number = "<button class='btn btn-primary' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
 thumbs_up = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

 row = blue_tick + message_text + like_number + thumbs_up;
 document.getElementById("output").innerHTML += row;

//End code
      }});  }); }
getData();

function update_like(message_id)
{
 console.log("clicked on like button - "+ message_id);
 button_id = message_id;
 likes = document.getElementById(button_id).value;
 updated_likes = Number(likes)+1;
 console.log(updated_likes);
 firebase.database().ref(room_name).child(message_id).update({
  like : updated_likes
 });
}

function logout()
{
 localStorage.removeItem("username");
 localStorage.removeItem("room_name");
 window.location.replace("index.html");
}