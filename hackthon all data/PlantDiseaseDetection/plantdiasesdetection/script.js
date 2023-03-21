const firebaseConfig = {
    apiKey: "AIzaSyBvr0TdYJ_Sz7IbSaKPZIxoxJh0zmYyME8",
    authDomain: "plantdiseasedetection-52be3.firebaseapp.com",
    databaseURL: "https://plantdiseasedetection-52be3-default-rtdb.firebaseio.com",
    projectId: "plantdiseasedetection-52be3",
    storageBucket: "plantdiseasedetection-52be3.appspot.com",
    messagingSenderId: "110482249896",
    appId: "1:110482249896:web:2eab2204db9782e2bd4a9d"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);  
  
  
  
  var rollV, genderV, addressV;
  
  function readFom() {
    rollV = document.getElementById("roll").value;
    genderV = document.getElementById("gender").value;
    addressV = document.getElementById("address").value;
    console.log(rollV, nameV, addressV, genderV);
  }
  
  document.getElementById("insert").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("student/" + rollV)
      .set({
        rollNo: rollV,
        gender: genderV,
        address: addressV,
      });
    alert("Data Inserted");
    document.getElementById("roll").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
  };
  
  document.getElementById("read").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("student/" + rollV)
      .on("value", function (snap) {
        document.getElementById("roll").value = snap.val().rollNo;
        document.getElementById("gender").value = snap.val().gender;
        document.getElementById("address").value = snap.val().address;
      });
  };
  
  document.getElementById("update").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("student/" + rollV)
      .update({
          rollNo: rollV,
        gender: genderV,
        address: addressV,
      });
    alert("Data Update");
    document.getElementById("roll").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
  };
  document.getElementById("delete").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("student/" + rollV)
      .remove();
    alert("Data Deleted");
    document.getElementById("roll").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
  };
  