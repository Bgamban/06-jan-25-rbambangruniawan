// Ini Halaman Javascript
// slideshow
let myImage = document.getElementById("myImage");

function changeImage() {
  myImage.src = "img/marcus-loke-xXJ6utyoSw0-unsplash.jpg";
}
setInterval(changeImage, 1500);
let images = ["img/marcus-loke-xXJ6utyoSw0-unsplash.jpg", "img/micheile-henderson-FpPcoOAk5PI-unsplash.jpg", "img/thom-bradley-mwa_nzFpnJw-unsplash.jpg"];
let currentImage = 0;

function changeImage() {
  myImage.src = images[currentImage];
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
}
// validation
const form = document.getElementById("message-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("sender-full-name").value;
  const birthDate = document.getElementById("sender-birth-date").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const messages = document.getElementById("sender-messages").value;

  if (name === "" || birthDate === "" || !gender || messages === "") {
    alert("Formulir yang anda isi kurang lengkap.");
    return;
  }
});

// Form Value
function submitForm() {
  // Ambil nilai dari form
  let nama = document.getElementById("sender-full-name").value;
  let tglLahir = document.getElementById("sender-birth-date").value;
  let gender = document.getElementById("laki-laki").checked ? "laki-laki" : "perempuan";
  let pesan = document.getElementById("sender-messages").value;

  // Buat baris baru dalam tabel
  let table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
  let newRow = table.insertRow();

  // Isi sel-sel baris baru
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);

  cell1.innerHTML = nama;
  cell2.innerHTML = tglLahir;
  cell3.innerHTML = gender;
  cell4.innerHTML = pesan;

  // greetings
  const welcome = document.getElementById("welcome");
  welcome.textContent = `Welcome to Our Store ${nama}`;
}
