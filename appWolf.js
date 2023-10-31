const opciones = document.getElementById("opciones");

opciones.addEventListener("change", function() {
    const selectedOption = opciones.value;
    const portadaImg = document.getElementById("portada");
    const des = document.getElementById("detalles")
    const nombre = document.getElementById("nombrePersonaje")
    switch (selectedOption) {
        case "Scott McCall":
            nombre.innerHTML = "Scott McCall"
            portadaImg.src = "img/scott.webp"
            des.href = "detalles/ScottMcCall.html"
            break;
        case "Lydia Martin":
            nombre.innerHTML = "Lydia Martin"
            portadaImg.src = "img/Lydia.webp";
            des.href = "detalles/Lydia Martin.html" 
            break;
        case "Stiles Stilinski":
            nombre.innerHTML = "Stiles Stilinski"
            portadaImg.src = "img/styles.jpg"; 
            des.href = "detalles/Stiles Stilinski.html"
            break;
        case "Allison Argent":
            nombre.innerHTML = "Allison Argent"
            portadaImg.src = "img/allison.webp"; 
            des.href = "detalles/Allison Argent.html"
            break;
        case "Derek Hale":
            nombre.innerHTML = "Derek Hale"
            portadaImg.src = "img/derek.webp";
            des.href = "detalles/Derek Hale.html" 
            break;
        case "Jackson Whittemore":
            nombre.innerHTML = "Jackson Whittemore"
            portadaImg.src = "img/Jackson.webp"; 
            des.href = "detalles/Jackson Whittemore.html"
            break;
        case "Malia Tate":
            nombre.innerHTML = "Malia Tate"
            portadaImg.src = "img/malia.jpg";
            des.href = "detalles/Malia Tate.html" 
            break;
        case "Kira Yukimura":
            nombre.innerHTML = "Kira Yukimura"
            portadaImg.src = "img/kira.webp";
            des.href = "detalles/Kira Yukimura.html" 
            break;
        case "Liam Dunbar":
            nombre.innerHTML = "Liam Dunbar"
            portadaImg.src = "img/liam.jpg"; 
            des.href = "detalles/Liam Dunbar.html"
            break;
        case "Sheriff Noah Stilinski":
            nombre.innerHTML = "Sheriff Noah Stilinski"
            portadaImg.src = "img/noa.webp";
            des.href = "detalles/Sheriff.html" 
            break;
        default:
            nombre.innerHTML = ""
            portadaImg.src = "logo.jpg"; 
            break;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var personajes = {
        "Scott McCall": ["","Beta", "True Alpha"],
        "Lydia Martin": ["","Banshee"],
        "Stiles Stilinski": ["","Humano", "Nogitsune"],
        "Allison Argent" : ["","Cazador"],
        "Derek Hale" : ["","Beta", "Alpha"],
        "Jackson Whittemore" : ["","Beta", "kanima"],
        "Malia Tate" : ["","Mujer coyote"],
        "Kira Yukimura" : ["","kitsune del trueno"],
        "Liam Dunbar" : ["","Beta"],
        "Sheriff Noah Stilinski" : ["","Sheriff"],
    };

    var opciones = document.getElementById('opciones');
    var estado = document.getElementById('estado');
    var poderesImg = document.getElementById('poderes');
    const portadaImg = document.getElementById("portada");

    opciones.addEventListener('change', function() {
        estado.innerHTML = '';
        var personajeSeleccionado = this.value;
        var atributos = personajes[personajeSeleccionado];

        for (var i = 0; i < atributos.length; i++) {
            var opcion = document.createElement('option');
            opcion.value = atributos[i];
            opcion.textContent = atributos[i];
            estado.appendChild(opcion);
        }
    });

    estado.addEventListener('change', function() {
        var estadoSeleccionado = this.value;
        var rutaPoderes = obtenerRutaPoderes(opciones.value, estadoSeleccionado);
        portadaImg.src = rutaPoderes;
    });

    function obtenerRutaPoderes(personaje, estado) {
        switch (`${personaje}:${estado}`) {
            case 'Scott McCall:Beta':
                console.log('entre al 1')
                return 'img/scottBeta.jpg';
            case 'Scott McCall:True Alpha':
                return 'img/scottAlfa.jpg';
            case 'Lydia Martin:Banshee':
                return 'img/banshee.webp';
            case 'Stiles Stilinski:Humano':
                return 'img/styles.jpg';
            case 'Stiles Stilinski:Nogitsune':
                return 'img/nogi.webp';
            case 'Allison Argent:Cazador':
                return 'img/caza.jpeg';
            case 'Derek Hale:Beta':
                return 'img/deBeta.jpg';
            case 'Derek Hale:Alpha':
                return 'img/deAlfa.jpg';
            case 'Jackson Whittemore:Beta':
                return 'img/jackBeta.webp';
            case 'Jackson Whittemore:kanima':
                return 'img/kanima.webp';
            case 'Malia Tate:Mujer coyote':
                return 'img/tate.jpg';
            case 'Kira Yukimura:kitsune del trueno':
                return 'img/kit.webp';
            case 'Liam Dunbar:Beta':
                return 'img/betaLiam.webp';
            case 'Sheriff Noah Stilinski:Sheriff':
                return 'img/sheriff.webp';
            default:
                console.log('adssafdas')
                return 'logo.jpg';
        }
    }



});