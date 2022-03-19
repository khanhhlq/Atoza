// Hi If Do You Use My Code, Please Add My Domain Into Your Site, Thanks !
var iframe = document.getElementById("iframe");
var button_go = document.getElementById("button_go");
var iframe_div = document.getElementById("iframe-div");
var root_base = document.getElementById("root-base");
var input_url = document.getElementById('input_url');
var input_password = document.getElementById('input_password');
var button_view = document.getElementById("button_view");
var question_viewer = document.getElementById("question-viewer");
var wating_box = document.getElementById("wating-box");
var form = document.getElementById("form");
var status_msg = document.getElementById("status-msg");

//WelcomeDialog
Swal.fire({
    title: 'Chàooo nhé! Đến lấy đề phải hông 😌',
    icon: 'info',
    html:
        'Atozaaaa!',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Ok',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
        '<i class="fa fa-thumbs-down"></i> Đúng rùiii 💡',
    cancelButtonAriaLabel: 'Thumbs down'
})

button_go.onclick = (e) => {
    if (canGo(getUrl(input_url))) {
        url = designUrl(getUrl(input_url));
        iframe_div.style.display = "block";
        root_base.style.display = "none"
        iframe.setAttribute("src", url)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Url không được để trống!',
            footer: '<p href="#">Atazo</p>'
        })
    }
}


function designUrl(url) {
    if (!url.includes("azota.vn")) {
        url = "https://azota.vn/de-thi/" + url;
    }

    return url;
}

function canGo(url) {
    if (url == "") {
        return false;
    }

    return true;
}

function getUrl(input_url) {
    return input_url.value;
}

function getPwd(input_pwd) {
    return input_pwd.value;
}

function go_back() {
    window.location.replace("#");
}

function getIdFromUrl(fullUrl = "") {
    return fullUrl.slice(fullUrl.indexOf("/", 23)).substring(1);
}

//disableF11
document.addEventListener("keydown", e => {
    if (e.key == "F11") e.preventDefault();
});