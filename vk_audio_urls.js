[].forEach.call(document.getElementsByClassName("audio"), function (i) {
    i.addEventListener("click", function myFunction() {
        console.log(document.getElementById('audio_info' + i['id'].match(/[_0-9]+/)[0]).value)
    });
})
