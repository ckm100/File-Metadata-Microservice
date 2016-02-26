var submit = document.getElementById("submit"),
    file = document.getElementById("file"),
    xhr = new XMLHttpRequest(),
    fileSize = document.getElementById("filesize"),
    data = new FormData();

file.addEventListener("change", function (evt) {

    if (evt.target.value !== "") {

        submit.disabled = false;

    } else {

        submit.disabled = true;

    }

}, false);

submit.addEventListener("click", function () {

    submit.disabled = true;

    submit.value = "Uploading file...";

    data.append("file", file.files[0]);

    xhr.open("POST", "/getsize");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {

            fileSize.innerHTML = xhr.responseText;

            submit.disabled = false;

            submit.value = "Get File Size";

        }

    }

    xhr.send(data);

}, false);
