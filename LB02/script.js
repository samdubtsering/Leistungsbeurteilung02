class Person {
    constructor(name, vorname, alter) {
      this.name = name;
      this.vorname = vorname;
      this.alter = alter;
    }
}
function init  ()
{
    const personen = [
        [
            "Meier",
            "Yanic",
            18
        ],
        [
            "Langmeier",
            "Zoe",
            15
        ],
        [
            "Tea",
            "Ray",
            18
        ]
    ];
    personen.forEach(person => {
        person_Zur_Tabelle(person[0], person[2], person[1]);
    });

}

function person_Hinzufuegen ()
{
var name=document.getElementById("fname").value; 
var vorname=document.getElementById("lname").value;
var alter=document.getElementById("age").value;
console.log ("yolo");
if (name && vorname  && alter) {
console.log ("ume");    
 person_Zur_Tabelle(name, vorname, alter);
} else {
    
}

}

function person_Zur_Tabelle (name, vorname, alter) {

    var table = document.getElementById("personenTabelle");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = vorname;
    cell3.innerHTML = alter;
}


let xchange = true;
function changePicture() {
  let current = document.getElementById("bilder_lernende");

  if(xchange) {
    current.src = "images/bild_yanic.png"
    xchange = false;
  }
  else {
   current.src = "images/bild_samdub.jpg"
   xchange = true;
  }
}
