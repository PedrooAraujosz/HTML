trocaTema = () => {
  // alert("Mudei o tema e você não viu. ")
  //   1 =  document.documentElement;

//   document.querySelector("body").style.background = "pink";  
// ESSE querySelector FAZ A MUDANÇA DAS MINHAS CORES

document.documentElement.classList.toggle("light");

const islight = document.documentElement.classList.contains("light");

const imagem = islight ? "./img/PD.png" : "./img/pedro.png";


document.querySelector("#perfil img").setAttribute("src",imagem);

const trocarAlt = islight ? "uma selfie com biquinho" : "uma selfie com biquinho";
document.querySelector("#perfil img").setAttribute("alt", trocarAlt)
};