# Cetak Cepat (Quick Print)

Quick Print adalah modul khusus untuk penjualan voucher kecepatan tinggi. Fitur ini memungkinkan Anda untuk menampilkan paket tertentu yang ingin dijual dan mencetaknya dengan satu klik.

## <Icon name="BarChart2" color="primary" /> Dashboard Penjualan

Halaman utama (`/quick-print`) menampilkan "Paket" Anda dalam bentuk kartu besar yang dapat diklik.
- **Generate Instan**: Mengklik paket akan langsung memerintahkan router untuk membuat user baru.
- **Cetak Otomatis**: Setelah user dibuat, dialog cetak untuk voucher tersebut akan terbuka secara otomatis.

## <Icon name="Library" color="info" /> Manajemen Paket

Akses bagian **Kelola** (`/quick-print/manage`) untuk mempersonalisasi dashboard penjualan Anda.

### <Icon name="PlusCircle" color="success" /> Menambah Paket
- **Profil**: Pilih profil user Mikrotik.
- **Harga**: Tentukan harga tampilan (bisa berbeda dengan komentar di Mikrotik).
- **Template**: Tetapkan template voucher khusus untuk paket ini.

### <Icon name="Trash2" color="danger" /> Menghapus Paket
Menghapus paket di sini hanya menghapusnya dari dashboard Quick Print; **tidak** menghapus profil dari router Mikrotik Anda.

## <Icon name="Printer" color="warning" /> Alur Kerja
1. **Admin** memilih paket dari dashboard.
2. **MIVO** membuat akun username/password acak di Mikrotik.
3. **MIVO** mengambil template yang ditentukan dan mengirimkannya ke engine cetak browser.

