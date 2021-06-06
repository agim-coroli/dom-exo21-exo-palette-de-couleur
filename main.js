// selecteur de couleur et border
let gris = document.querySelector("button")
let rouge = document.querySelectorAll("button")[1]
let vert = document.querySelectorAll("button")[2]
let bleu = document.querySelectorAll("button")[3]
let solid = document.querySelectorAll("button")[4]
let dotted = document.querySelectorAll("button")[5]
let fin = document.querySelectorAll("button")[6]
let btn1 = document.querySelectorAll("button")[7]
let btn2 = document.querySelectorAll("button")[8]
let btn3 = document.querySelectorAll("button")[9]

// input pour lépaisseur des border
let inp1 = document.querySelectorAll("input")[1]
let inp2 = document.querySelectorAll("input")[2]
let inp3 = document.querySelectorAll("input")[3]
let inp4 = document.querySelectorAll("input")[4]
let inp5 = document.querySelectorAll("input")[5]

// input pour le radius des border
let radius = Array.from(document.querySelector(".radius").children)

// palette de couleur
let palette = document.querySelector("input")

// resultat du grand carré
let grandCarre = document.getElementsByClassName("grandCarre")[0]

// fonction a condition qui regroupe les couleur et les bordure, je l'ai fait de deux maniere, une avec des ciblage individuel(ligne 31 a 64) et une avec un tableau (ligne 65 a 73) ( pour montrer que l'on maitrise les deux !)
let couleurEtBorder = (e) => {
    if (e.target.classList == "gris") {
        grandCarre.style.backgroundColor = "gray";
    } else if (e.target.classList == "rouge") {
        grandCarre.style.backgroundColor = "red";
    } else if (e.target.classList == "vert") {
        grandCarre.style.backgroundColor = "green";
    } else if (e.target.classList == "bleu") {
        grandCarre.style.backgroundColor = "blue";
    } else if (e.target.classList == "bleu") {
        grandCarre.style.backgroundColor = "blue";
    } else if (e.target.classList == "solid") {
        grandCarre.style.border = "3px solid black";
    } else if (e.target.classList == "dotted") {
        grandCarre.style.border = "3px dotted black";
    } else if (e.target.classList == "fin") {
        grandCarre.style.border = "1px solid black";
    } else if (e.target.classList == "btnTop1") {
        grandCarre.style.borderTop = "1px solid red";
    } else if (e.target.classList == "btnTop2") {
        grandCarre.style.borderTop = "3px solid red";
    } else if (e.target.classList == "btnTop3") {
        grandCarre.style.borderTop = "5px solid red";
    } else if (e.target == palette) {
        grandCarre.style.backgroundColor = e.target.value;
    } else if (e.target == inp1) {
        grandCarre.style.border = `${e.target.value}px solid black`;
    } else if (e.target == inp2) {
        grandCarre.style.borderTop = `${e.target.value}px solid black`;
    } else if (e.target == inp3) {
        grandCarre.style.borderRight = `${e.target.value}px solid black`;
    } else if (e.target == inp4) {
        grandCarre.style.borderBottom = `${e.target.value}px solid black`;
    } else if (e.target == inp5) {
        grandCarre.style.borderLeft = `${e.target.value}px solid black`;
    } else if (e.target == radius[0]) {
        grandCarre.style.borderRadius = `${e.target.value}%`;
    } else if (e.target == radius[1]) {
        grandCarre.style.borderTopLeftRadius = `${e.target.value}%`;
    } else if (e.target == radius[2]) {
        grandCarre.style.borderTopRightRadius = `${e.target.value}%`;
    } else if (e.target == radius[3]) {
        grandCarre.style.borderBottomRightRadius = `${e.target.value}%`;
    } else if (e.target == radius[4]) {
        grandCarre.style.borderBottomLeftRadius = `${e.target.value}%`;
    }
}

// avec des fonction anonyme et au click
gris.addEventListener("click", (e) => {
    couleurEtBorder(e)
})
rouge.addEventListener("click", (e) => {
    couleurEtBorder(e)
})

vert.addEventListener("click", (e) => {
    couleurEtBorder(e)
})

bleu.addEventListener("click", (e) => {
    couleurEtBorder(e)
})

solid.addEventListener("click", (e) => {
    couleur(e)
})

dotted.addEventListener("click", (e) => {
    couleurEtBorder(e)
})

fin.addEventListener("click", (e) => {
    couleurEtBorder(e)
})

btn1.addEventListener("click", (e) => {
    couleurEtBorder(e)
})

btn2.addEventListener("click", (e) => {
    couleurEtBorder(e)
})

btn3.addEventListener("click", (e) => {
    couleurEtBorder(e)
})

// voir ligne 29 (addEventListener individuelle)
palette.addEventListener("input", couleurEtBorder);

inp1.addEventListener("input", couleurEtBorder)
inp2.addEventListener("input", couleurEtBorder)
inp3.addEventListener("input", couleurEtBorder)
inp4.addEventListener("input", couleurEtBorder)
inp5.addEventListener("input", couleurEtBorder)

// voir ligne 29 (addEventListener en tableau)
radius[0].addEventListener("input" , couleurEtBorder)
radius[1].addEventListener("input" , couleurEtBorder)
radius[2].addEventListener("input" , couleurEtBorder)
radius[3].addEventListener("input" , couleurEtBorder)
radius[4].addEventListener("input" , couleurEtBorder)