const swith = document.querySelector(".switch")


document.addEventListener("DOMContentLoaded", e=>{
    loadDarkModeFromLocalStorage()
    swith.addEventListener("click", toggleDarkMode);
})

function toggleDarkMode(){
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
    saveDarkModeInLocalStorage(swith.classList.contains("active"));
}

function saveDarkModeInLocalStorage(estado){
    localStorage.setItem("darkMode", estado)

}

function loadDarkModeFromLocalStorage(){
    const darkModeSaved = localStorage.getItem ("darkMode") == "true"; 
    if (darkModeSaved){
        swith.classList.add("active");
        document.body.classList.add("active");
    }
}