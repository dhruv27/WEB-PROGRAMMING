// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

// function Name () {
//   var name =
//    document.getElementById("name").value;
//    var message = "<h2>Hello " + name + "!</h2>";

//   // document
//   //   .getElementById("content")
//   //   .textContent = message;

//   document
//     .getElementById("content")
//     .innerHTML = message;
// function myFunction() {
//   if (name === "DHRUV") {
 
//     var x = document.getElementById("myTable").rows[0].cells.length;
   
//   }
// }
function myFunction() {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);

    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
}
