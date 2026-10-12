// ==========================================================
// script.js - logika website
// ==========================================================

// ----- 1. EFEK KETIK (halaman Home) -----
// Teks yang diketik di bawah "Hi, I'm Abidd!". Ganti isinya kalau mau.
const textKetik = "CREATIVE DEVELOPER";
let idx = 0;

function ketik() {
  const el = document.getElementById('typed'); // elemen id="typed" ada di index.html
  if (el && idx < textKetik.length) {
    el.textContent += textKetik.charAt(idx++); // tambah 1 huruf
    setTimeout(ketik, 80);                     // jeda 80 ms tiap huruf
  }
}
document.addEventListener('DOMContentLoaded', ketik);

// ----- 2. TUTUP MENU HP OTOMATIS -----
// Setelah salah satu menu diklik, menu burger menutup sendiri.
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    const m = document.getElementById('menuNav'); // id sama dengan di navbar
    if (m.classList.contains('show')) {
      (bootstrap.Collapse.getInstance(m) || new bootstrap.Collapse(m, { toggle: false })).hide();
    }
  });
});

// ----- 3. KIRIM PESAN KE WHATSAPP (halaman Contact) -----
const waForm = document.getElementById('waForm');
if (waForm) {
  waForm.addEventListener('submit', e => {
    e.preventDefault(); // cegah halaman reload

    // >>> GANTI NOMOR WA DI SINI <<<
    const nomorWA = "6283161997826";

    // Ambil isi form
    const nama   = document.getElementById('waName').value;
    const email  = document.getElementById('waEmail').value;
    const subjek = document.getElementById('waSubject').value;
    const pesan  = document.getElementById('waMessage').value;

    // Susun pesan lalu buka WhatsApp
    const text = `Halo Zainal,\n*Nama:* ${nama}\n*Email:* ${email}\n*Subjek:* ${subjek}\n*Pesan:* ${pesan}`;
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`, '_blank');
  });
}

// ----- 4. KIRIM PESAN KE EMAIL (halaman Contact) -----
// Dipanggil oleh tombol "Kirim Email" (onclick="kirimEmail()").
function kirimEmail() {
  const nama   = document.getElementById('waName').value || "-";
  const email  = document.getElementById('waEmail').value || "-";
  const subjek = document.getElementById('waSubject').value || "Kontak";
  const pesan  = document.getElementById('waMessage').value || "-";

  // Email tujuan
  const tujuan = "zainalabidinbasri@gmail.com";

  const body = `Nama: ${nama}\nEmail: ${email}\n\n${pesan}`;
  window.location.href = `mailto:${tujuan}?subject=${encodeURIComponent(subjek + ' dari ' + nama)}&body=${encodeURIComponent(body)}`;
}
