document.getElementById("icone_pesquisa").addEventListener("click", function() {
    let barra_pesquisa = document.getElementById("barra_pesquisa");
    if(barra_pesquisa.style.display === "none") {
        barra_pesquisa.style.display = "block";
    } else {
        barra_pesquisa.style.display = "none";
    }
});

document.getElementById("icone_menu").addEventListener("click", function(){
    let menu = document.getElementById("menu_nav");
    if(menu.style.display === "none"){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

document.getElementById("home_botao").addEventListener("click", () => window.location.href = "./museu.html");