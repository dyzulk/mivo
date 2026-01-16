# Laporan & Log

Analisis performa bisnis Anda dan pantau aktivitas sistem melalui alat pelaporan yang mendetail.

## <Icon name="BarChart" color="success" /> Laporan Penjualan {#selling}

Halaman Laporan Penjualan (`/reports/selling`) memberikan rincian pendapatan Anda secara mendetail.
- **Garis Waktu**: Lihat penjualan berdasarkan hari, bulan, atau rentang tanggal khusus.
- **Detail**: Lihat profil mana yang terjual, stempel waktu (timestamp), dan harganya.
- **Ekspor**: (Jika tersedia) Ekspor data Anda untuk keperluan akuntansi offline.

## <Icon name="BarChart2" color="primary" /> Resume Penjualan {#resume}

Halaman Resume (`/reports/resume`) menawarkan pandangan tingkat tinggi yang disederhanakan tentang pertumbuhan bisnis Anda.
- **Total Pendapatan**: Gabungan pendapatan dari seluruh penjualan voucher.
- **Jumlah Voucher**: Total voucher yang terjual vs yang dibuat (generated).
- **Perbandingan Sesi**: Bandingkan performa di berbagai sesi router yang berbeda.

## <Icon name="ClipboardList" color="info" /> Log Sistem {#logs}

Pantau peristiwa real-time dari router Mikrotik Anda (`/reports/user-log`).
- **Peristiwa**: Lacak login user, logout, eksekusi script, dan error sistem.
- **Pemecahan Masalah**: Gunakan log ini untuk mengidentifikasi mengapa user tidak dapat terhubung atau kapan sesi terputus.
- **Live Stream**: Log diperbarui secara otomatis saat peristiwa terjadi di router.

> [!NOTE]
> MIVO mengambil log ini langsung dari circular buffer Mikrotik. Bersihkan log Anda pada terminal Mikrotik jika buffer menjadi terlalu besar.

