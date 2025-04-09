const domain = "https://ramdaazizah.site";

// Ambil data dari localStorage atau array kosong
let guestData = JSON.parse(localStorage.getItem('dataTamu')) || [];

// Cek apakah elemen form atau tabel tersedia
const tableBody = document.getElementById('guestTable');
const guestForm = document.getElementById('guestForm');

// Fungsi render tabel (khusus halaman datatamu.html)
function renderTable() {
  if (!tableBody) return;

  tableBody.innerHTML = '';
  guestData.forEach((guest, index) => {
    const namaSlug = guest.nama.replace(/\s+/g, '');
    const link = `${domain}?n=${namaSlug}`;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${guest.nama}</td>
      <td>${guest.tanggal}</td>
      <td><a href="${link}" target="_blank">${link}</a></td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="deleteGuest(${index})">Hapus</i>
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Fungsi hapus tamu
function deleteGuest(index) {
  if (confirm('Yakin ingin menghapus tamu ini?')) {
    guestData.splice(index, 1);
    localStorage.setItem('dataTamu', JSON.stringify(guestData));
    renderTable();
  }
}

// Fungsi tambah tamu (khusus halaman tambah tamu)
if (guestForm) {
  guestForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nama = document.getElementById('namaTamu').value.trim();
    const tanggal = new Date().toLocaleDateString('id-ID');

    if (nama) {
      guestData.push({ nama, tanggal });
      localStorage.setItem('dataTamu', JSON.stringify(guestData));
      guestForm.reset();

      // Redirect ke halaman data tamu setelah berhasil tambah
      window.location.href = "datatamu.html";
    }
  });
}

// Render tabel hanya jika di halaman datatamu.html
renderTable();
