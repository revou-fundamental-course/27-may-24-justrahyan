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

    document.getElementById("error-msg").innerHTML = "";
    setSenderform(nama, tglLahir, jKel, pesan);

    return false;
}

// Menampilkan inputan pengguna
function setSenderform(nama, tglLahir, jKel, pesan){
    document.getElementById("user-nama").innerHTML = nama;
    document.getElementById("user-tgl-lahir").innerHTML = tglLahir;
    document.getElementById("user-jkel").innerHTML = jKel;
    document.getElementById("user-pesan").innerHTML = pesan;
}