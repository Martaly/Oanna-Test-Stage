/*document.body.onload = addElement;

function addElement() {
    var newP = document.createElement("p");
    var newContent = document.createTextNode("dekton");
    newDiv.appendChild(newContent);
}

var currentDiv = document.getElementById("matiere")
document.body.insertBefore(newP, currentDiv);

function addElement(){
    document.getElementsByName(input).addEventListener("click", () => {
        var newP = document.createElement("p");
        document.createTextNode("dekton")
        });
        document.body.insertBefore(newP);

    };
    

 */


(() => {
    document.getElementById("reference1").addEventListener("click", () => {
        document.getElementById("matiere").innerHTML = (materiau[0].matiere);
        document.getElementById("coloris").innerHTML = (coloris[0].name);
        document.getElementById("epaisseur").innerHTML = (epaisseur[0].name);
        document.getElementById("dimensions").innerHTML = (plans[0].longeur + " X " + plans[0].largeur + "mm" );
        document.getElementById("surface").innerHTML = (plans[0].total + " m²");
        document.getElementById("longueur").innerHTML = (plans[0].chants + "MCT");
        document.getElementById("taque").innerHTML = (plans[0].taques);
        document.getElementById("evier").innerHTML = (plans[0].eviers);
        document.getElementById("prise").innerHTML = (plans[0].prises + "PC");
        document.getElementById("faconnage").innerHTML = (plans[0].façonnage);
        document.getElementById("dimensionC").innerHTML = (credence[0].longeur + " X " + plans[0].largeur + "mm" );
        document.getElementById("surfaceC").innerHTML = (credence[0].total + "m²");
        document.getElementById("longueurC").innerHTML = (credence[0].chants + "MCT");
        document.getElementById("decoupe").innerHTML = (credence[0].decoupe + "PC");
        document.getElementById("commentaire").innerHTML = (commentaire[0]);
    })
})


/*
var myData = JSON.parse(materiau);
console.log(myData[0].matiere);
console.log(myDate[0].epaisseur);
*/

