const opciones = document.getElementById("opciones");

opciones.addEventListener("change", function() {
    const selectedOption = opciones.value;
    const portadaImg = document.getElementById("portada");
    switch (selectedOption) {
        case "Scott McCall":
            portadaImg.src = "img/scott.webp"; 
            break;
        case "Lydia Martin":
            portadaImg.src = "img/Lydia.webp"; 
            break;
        case "Stiles Stilinski":
            portadaImg.src = "img/styles.jpg"; 
            break;
        case "Allison Argent":
            portadaImg.src = "img/allison.webp"; 
            break;
        case "Derek Hale":
            portadaImg.src = "img/derek.webp"; 
            break;
        case "Jackson Whittemore":
            portadaImg.src = "img/Jackson.webp"; 
            break;
        case "Malia Tate":
            portadaImg.src = "img/malia.jpg"; 
            break;
        case "Kira Yukimura":
            portadaImg.src = "img/kira.webp"; 
            break;
        case "Liam Dunbar":
            portadaImg.src = "img/liam.jpg"; 
            break;
        case "Sheriff Noah Stilinski":
            portadaImg.src = "img/noa.webp"; 
            break;
        default:
            portadaImg.src = "portada.jpeg"; 
            break;
    }
});