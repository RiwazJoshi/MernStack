function darkMode (){
    var element = document.body;
    var content = document.getElementById ("darkmodetext");
    element.className = "DarkMode";
    content.innerText = "Dark Mode is on";
}
function lightmode (){
    var element = document.body;
    var content = document.getElementById ("darkmodetext");
    element.className = "lightMode";
    content.innerText = "Dark Mode is off";
}