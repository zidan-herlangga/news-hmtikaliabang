const mail_hmti = "hmti.kaliabang@gmail.com";

function send() {
  const nameField = document.getElementById("name-field").value;
  const merkField = document.getElementById("merk-field").value;
  const messageField = document.getElementById("message-field").value;

  if (nameField === "" || merkField === "" || merkField === "") {
    alert("Mohon isi kolom tersebut!");
    return;
  }
  window.open(
    "mailto:" +
      mail_hmti +
      "?subject=BENGKEL IT&body=Nama Saya: " +
      nameField +
      "%0AMerk Laptop: " +
      merkField +
      "%0AKeluhan: " +
      messageField,
    "_blank"
  );
}
