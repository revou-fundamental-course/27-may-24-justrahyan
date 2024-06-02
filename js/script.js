function displayResult() {
    // Mengambil nilai dari form
    const nama = document.getElementById('nama').value;
    const tglLahir = document.getElementById('tgl_lahir').value;
    let jkel = "";
    if (document.getElementById('laki-laki').checked) {
        jkel = document.getElementById('laki-laki').value;
    } else if (document.getElementById('perempuan').checked) {
        jkel = document.getElementById('perempuan').value;
    }
    const pesan = document.getElementById('pesan').value;

    const currentTime = new Date();
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();

    // Menggabungkan nilai ke dalam sebuah string
    const result = `Current Time: ${date} ${time}\n\nNama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jkel}\nPesan: ${pesan}`;

    // Menampilkan hasil di textarea
    document.getElementById('form-result').value = result;

    return false; // Mencegah form dari submit default
}

// Navbar
function toggleMenu() {
    const navMenu = document.querySelector('nav .nav-container ul');
    navMenu.classList.toggle('show');
}