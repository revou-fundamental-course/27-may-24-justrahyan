// Mengambil nama user baru (awal buka website)
let name = prompt("Selamat datang di Great Hotel, masukkan nama anda disini!", "");
document.getElementById("new-user").innerHTML = name;

// Validation form
function displayResult() {
    // Mengambil nilai dari form
    const nama = document.forms["form-input"]["nama"].value;
    const tglLahir = document.forms["form-input"]["tgl_lahir"].value;
    const jKel = document.forms["form-input"]["jkel"].value;
    const pesan = document.forms["form-input"]["pesan"].value;

    if (nama == '' || tglLahir == '' || jKel == '' || pesan == ''){
        document.getElementById("error-msg").innerHTML = "Data tidak boleh kosong!";
        // alert("Tidak boleh ada data yang kosong!");
        return false;
    }

    setSenderform(nama, tglLahir, jKel, pesan);

    return false;
}

function setSenderform(nama, tglLahir, jKel, pesan){
    document.getElementById("user-nama").innerHTML = nama;
    document.getElementById("user-tgl-lahir").innerHTML = tglLahir;
    document.getElementById("user-jkel").innerHTML = jKel;
    document.getElementById("user-pesan").innerHTML = pesan;
}

    // const currentTime = new Date();
    // const date = currentTime.toLocaleDateString();
    // const time = currentTime.toLocaleTimeString();

    // Menggabungkan nilai ke dalam sebuah string
//     const result = `Nama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jkel}\nPesan: ${pesan}`;

    // Menampilkan hasil di textarea
//     document.getElementById('form-result').value = result;

//     return false; // Mencegah form dari submit default
// }

// Navbar
function toggleMenu() {
    const navMenu = document.querySelector('nav .nav-container ul');
    navMenu.classList.toggle('show');
}
