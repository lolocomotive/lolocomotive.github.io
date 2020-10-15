function translatePage(lang) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "lang/" + lang + ".json", false);
    xhr.send();
    if (xhr.status == 200) {
        var translation = JSON.parse(xhr.responseText);
        var elementsToTranslate = document.getElementsByClassName(
            "translatable"
        );
        var i;
        for (i = 0; i < elementsToTranslate.length; i++) {
            elementsToTranslate[i].innerHTML = translation.translation[i];
        }
    }
}
