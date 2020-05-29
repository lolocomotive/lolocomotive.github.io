/* 
    Created on : 02.05.2020, 12:13:23
    Author     : loicEzt
*/
function gotoEl(el){
    document.getElementsByClassName("pos1").item(0).classList.add("pos2");
    document.getElementsByClassName("pos1").item(0).classList.remove("pos1");
    document.getElementById(el).classList.add("pos1");
    document.getElementById(el).classList.remove("pos2");
    document.getElementById("nav").classList.remove("main");
    document.getElementById("nav").classList.remove("vid");
    document.getElementById("nav").classList.remove("prog");
    document.getElementById("nav").classList.remove("mc");
    document.getElementById("nav").classList.add(el);
    document.getElementById("bg-thing-1").classList.remove("main");
    document.getElementById("bg-thing-1").classList.remove("vid");
    document.getElementById("bg-thing-1").classList.remove("prog");
    document.getElementById("bg-thing-1").classList.remove("mc");
    document.getElementById("bg-thing-1").classList.add(el);
}