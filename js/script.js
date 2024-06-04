// Navbar Responsive
function toggleMenu() {
    const navMenu = document.querySelector('nav .nav-container ul');
    navMenu.classList.toggle('show');
}

// Mengambil nama user baru (awal buka website)
window.addEventListener("load", function(){
    setTimeout(function(){
        document.querySelector(".welcome-popup").style.display = "block";
        document.querySelector(".overlay-blur").style.display = "block";
    }, 0);

    document.querySelector("#submit-user").addEventListener("click", function(event){
        event.preventDefault();
        const namaPengguna = document.querySelector("#user").value;
        document.querySelector("#new-user").innerHTML = namaPengguna;
        document.querySelector(".welcome-popup").style.display = "none";
        document.querySelector(".overlay-blur").style.display = "none";
    });
});

// Slide image
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs((slideIndex += n));
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i=0; i < imgList.length; i++){
        imgList[i].style.display = "none"
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 5000);

// Validation form
function displayResult() {
    // Mengambil nilai dari form
    const nama = document.forms["form-input"]["nama"].value;
    const tglLahir = document.forms["form-input"]["tgl_lahir"].value;
    const jKel = document.forms["form-input"]["jkel"].value;
    const pesan = document.forms["form-input"]["pesan"].value;

    if (nama == '' || tglLahir == '' || jKel == '' || pesan == ''){
        document.getElementById("error-msg").innerHTML = 'Data tidak boleh kosong <i class="fa-solid fa-circle-exclamation"></i>';
        return false;
    }

    const currentTime = new Date();
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();

    document.getElementById("error-msg").innerHTML = "";
    setSenderform(nama, tglLahir, jKel, pesan, date, time);

    return false;
}

// Menampilkan inputan pengguna
function setSenderform(nama, tglLahir, jKel, pesan, date, time){
    document.getElementById("current-date").innerHTML = date;
    document.getElementById("current-time").innerHTML = time;
    document.getElementById("user-nama").innerHTML = nama;
    document.getElementById("user-tgl-lahir").innerHTML = tglLahir;
    document.getElementById("user-jkel").innerHTML = jKel;
    document.getElementById("user-pesan").innerHTML = pesan;
}