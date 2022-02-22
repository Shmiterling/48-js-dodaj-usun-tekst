let dodaj = document.getElementById('dodaj');
dodaj.onclick = function() {
  document.getElementById('tekst').innerText = "Przykładowy nowy tekst";
}

let usun = document.getElementById('usun');
usun.onclick = function() {
  document.getElementById('tekst').innerText = "";
}