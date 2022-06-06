
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("username").innerHTML = "Welcome " + username; 

    function add_room()
    {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
     purpose : "Adding room name"  
     });
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room names", Room_names);
       
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+" </div> <hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
    getData();

    function redirectToRoomName(name)
    {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
    }

    function logout()
    {
     localStorage.removeItem("room_name");
     localStorage.removeItem("username");
     window.location = "index.html";
    }