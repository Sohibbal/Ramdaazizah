const domain = "https://ramdaazizah.site"; // Ganti dengan domain kamu

const guestData = [
  { no: 1, nama: 'Ridwan', tanggal: '08-04-2025' },
  { no: 2, nama: 'Siti Aminah', tanggal: '09-04-2025' }
];

const tableBody = document.getElementById('guestTable');

guestData.forEach((guest) => {
  // Hilangkan spasi atau karakter non-alfanumerik dari nama
  const namaSlug = guest.nama.replace(/\s+/g, '');
  // Bisa juga: .replace(/\s+/g, '-').toLowerCase(); → jika mau lowercase dengan dash

  const link = `${domain}?n=${namaSlug}`;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${guest.no}</td>
    <td>${guest.nama}</td>
    <td>${guest.tanggal}</td>
    <td><a href="${link}" target="_blank">${link}</a></td>
  `;
  tableBody.appendChild(row);
});
