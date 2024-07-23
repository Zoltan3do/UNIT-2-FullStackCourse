const salva = document.getElementById("save");
const rimuovi = document.getElementById("remove");
const form = document.getElementsByTagName("form")[0];
document.getElementById("nomeAttuale").innerText = localStorage.getItem("nombre");

salva.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    if (!localStorage.getItem("nombre")) {
        console.log(nome);
        localStorage.setItem("nombre", nome);
    }
    else
        throw new Error("Esiste già un nome in memoria e mi scoccio di aggiungere la possibilità di sovrascrittura nel metodo! Quindi elimina quello precedente!!!")

    console.log(localStorage.getItem("nombre"));
    nomeAttuale.innerText = localStorage.getItem("nombre");
    form.reset();
});

rimuovi.addEventListener("click", function () {
    localStorage.removeItem("nombre");
    nomeAttuale.innerText = localStorage.getItem("nombre");
    form.reset();
});