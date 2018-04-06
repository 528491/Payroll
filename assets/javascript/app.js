// Initialize Firebase
var config = {
    apiKey: "AIzaSyC9TJ7p552af5SCdKb5CIy8uLnw8aMP-r8",
    authDomain: "payroll-d1c66.firebaseapp.com",
    databaseURL: "https://payroll-d1c66.firebaseio.com",
    projectId: "payroll-d1c66",
    storageBucket: "",
    messagingSenderId: "568190409778"
  };
  firebase.initializeApp(config);

  var employeeRef = firebase.database().ref('Employee');

 function saveData(empName, Role, startDate, monthlyRate) {
  var newEmployeeRef = employeeRef.push();
  newEmployeeRef.set({
      employeeName: empName,
      role: Role,
      startDate: startDate,
      monthlyRate: monthlyRate
  });
 }

 //Retrieve user inputs
 $("#inputForm").on('click', '.btn-submit', function (e) {
    e.preventDefault();
    var empName = $("#employeeName").val().trim();
    var Role = $("#role").val().trim();
    var startDate = $("#startDate").val().trim();
    var monthlyRate = $("#monthlyRate").val().trim();

    saveData(empName, Role, startDate, monthlyRate);
 });