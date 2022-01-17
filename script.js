var typ;
var price;
var select1;
var option1;
var select2;
var option2;

function ajouter()
{
    const newLine = document.createElement('tr');
    const type = document.createElement("td");
    const couleur = document.createElement("td");
    const taille = document.createElement("td");
    const prix = document.createElement("td");

    type.textContent=typ;
    couleur.textContent=option1;
    taille.textContent=option2;
    prix.textContent=price;

    newLine.append(type, couleur, taille, prix);
    let tab = document.querySelector("table.datatable tbody");
    tab.appendChild(newLine);
}
function recupererJH1()
{
     typ=document.getElementById("typeJH1").textContent;
     price = document.getElementById('prixJH1').textContent;
     select1 = document.JH1.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.JH1.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererJH2()
{
     typ=document.getElementById("typeJH2").textContent;
     price = document.getElementById('prixJH2').textContent;
     select1 = document.JH2.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.JH2.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererJH3()
{
     typ=document.getElementById("typeJH3").textContent;
     price = document.getElementById('prixJH3').textContent;
     select1 = document.JH3.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.JH3.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererJH4()
{
     typ=document.getElementById("typeJH4").textContent;
     price = document.getElementById('prixJH4').textContent;
     select1 = document.JH4.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.JH4.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererJH5()
{
     typ=document.getElementById("typeJH5").textContent;
     price = document.getElementById('prixJH5').textContent;
     select1 = document.JH5.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.JH5.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}

function recupererPH1()
{
     typ=document.getElementById("typePH1").textContent;
     price = document.getElementById('prixPH1').textContent;
     select1 = document.PH1.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.PH1.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererPH2()
{
     typ=document.getElementById("typePH2").textContent;
     price = document.getElementById('prixPH2').textContent;
     select1 = document.PH2.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.PH2.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererPH3()
{
     typ=document.getElementById("typePH3").textContent;
     price = document.getElementById('prixPH3').textContent;
     select1 = document.PH3.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.PH3.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererPH4()
{
     typ=document.getElementById("typePH4").textContent;
     price = document.getElementById('prixPH4').textContent;
     select1 = document.PH4.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.PH4.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererPH5()
{
     typ=document.getElementById("typePH5").textContent;
     price = document.getElementById('prixPH5').textContent;
     select1 = document.PH5.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.PH5.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererTH1()
{
     typ=document.getElementById("typeTH1").textContent;
     price = document.getElementById('prixTH1').textContent;
     select1 = document.TH1.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.TH1.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererTH2()
{
     typ=document.getElementById("typeTH2").textContent;
     price = document.getElementById('prixTH2').textContent;
     select1 = document.TH2.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.TH2.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererTH3()
{
     typ=document.getElementById("typeTH3").textContent;
     price = document.getElementById('prixTH3').textContent;
     select1 = document.TH1.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.TH1.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererTH4()
{
     typ=document.getElementById("typeTH4").textContent;
     price = document.getElementById('prixTH4').textContent;
     select1 = document.TH4.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.TH4.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererTH5()
{
     typ=document.getElementById("typeTH5").textContent;
     price = document.getElementById('prixTH5').textContent;
     select1 = document.TH5.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.TH5.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}

function recupererJF1()
{
     typ=document.getElementById("typeJF1").textContent;
     price = document.getElementById('prixJF1').textContent;
     select1 = document.JF1.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.JF1.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererJF2()
{
     typ=document.getElementById("typeJF2").textContent;
     price = document.getElementById('prixJF2').textContent;
     select1 = document.JF2.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.JF2.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererJF3()
{
     typ=document.getElementById("typeJF3").textContent;
     price = document.getElementById('prixJF3').textContent;
     select1 = document.JF3.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.JF3.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererJF4()
{
     typ=document.getElementById("typeJF4").textContent;
     price = document.getElementById('prixJF4').textContent;
     select1 = document.JF4.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.JF4.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererJF5()
{
     typ=document.getElementById("typeJF5").textContent;
     price = document.getElementById('prixJF5').textContent;
     select1 = document.JF5.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.JF5.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}

function recupererPF1()
{
     typ=document.getElementById("typePF1").textContent;
     price = document.getElementById('prixPF1').textContent;
     select1 = document.PF1.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.PF1.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererPF2()
{
     typ=document.getElementById("typePF2").textContent;
     price = document.getElementById('prixPF2').textContent;
     select1 = document.PF2.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.PF2.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererPF3()
{
     typ=document.getElementById("typePF3").textContent;
     price = document.getElementById('prixPF3').textContent;
     select1 = document.PF3.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.PF3.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererPF4()
{
     typ=document.getElementById("typePF4").textContent;
     price = document.getElementById('prixPF4').textContent;
     select1 = document.PF4.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.PF4.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererPF5()
{
     typ=document.getElementById("typePF5").textContent;
     price = document.getElementById('prixPF5').textContent;
     select1 = document.PF5.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.PF5.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererTF1()
{
     typ=document.getElementById("typeTF1").textContent;
     price = document.getElementById('prixTF1').textContent;
     select1 = document.TF1.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.TF1.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererTF2()
{
     typ=document.getElementById("typeTF2").textContent;
     price = document.getElementById('prixTF2').textContent;
     select1 = document.TF2.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.TF2.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererTF3()
{
     typ=document.getElementById("typeTF3").textContent;
     price = document.getElementById('prixTF3').textContent;
     select1 = document.TF3.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.TF3.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererTF4()
{
     typ=document.getElementById("typeTF4").textContent;
     price = document.getElementById('prixTF4').textContent;
     select1 = document.TF4.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.TF4.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}
function recupererTF5()
{
     typ=document.getElementById("typeTF5").textContent;
     price = document.getElementById('prixTF5').textContent;
     select1 = document.TF5.couleur;
     option1 = select1.options[select1.selectedIndex].value;
     select2 = document.TF5.taille;
     option2 = select2.options[select2.selectedIndex].value;  

    ajouter();
}



/*function getAlbum()
{
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos?_start=")
    .then((response) => response.json())
    .then(function (data)
    {
        data=>console.log(data);
    })
}

window.onload=getAlbum;

function createAlbum()
{
    const newLine = document.createElement("tr");
    const type = document.createElement("td");
    const couleur = document.createElement("td");
    const taille = document.createElement("td");
    const prix = document.createElement("td");

    newLine.append(type, couleur, taille, prix);
    const tab = document.querySelector(".datatable tbody");
    tab.appendChild(newLine);
}*/
