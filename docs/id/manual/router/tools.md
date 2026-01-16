# Tools Sistem

Utilitas penting untuk memelihara, menjadwalkan, dan memantau fungsi inti router Mikrotik Anda.

## <Icon name="Network" color="info" /> DHCP Leases

Halaman DHCP Leases (`/network/dhcp`) memungkinkan Anda memantau semua perangkat yang terhubung ke jaringan LAN atau Hotspot Anda, bahkan sebelum mereka login.
- **Pelacakan Lease**: Lihat penetapan IP, alamat MAC, dan hostname dari perangkat yang terhubung.
- **Monitor Pra-Login**: Berguna untuk mengidentifikasi perangkat yang terhubung tetapi kesulitan mencapai halaman login hotspot.

## <Icon name="Clock" color="primary" /> Scheduler Router

MIVO menyediakan antarmuka lengkap (`/system/scheduler`) untuk mengelola script dan jadwal internal Mikrotik.
- **Daftar Tugas**: Lihat semua tugas terjadwal yang aktif dan dinonaktifkan di router Anda.
- **Kelola Tugas**: Tambah, ubah, atau hapus tugas langsung dari MIVO.
- **Otomatisasi**: Gunakan ini untuk eksekusi script berkala, seperti menghapus user yang kedaluwarsa atau menghasilkan laporan otomatis.

## <Icon name="Zap" color="warning" /> Tindakan Kritis

Picukan perintah tingkat sistem secara langsung dari antarmuka MIVO:
- **<Icon name="RefreshCw" color="info" /> Reboot**: Muat ulang perangkat keras Mikrotik Anda dengan aman.
- **<Icon name="Power" color="danger" /> Shutdown**: Matikan perangkat. Perhatikan bahwa Anda memerlukan akses fisik ke router untuk menghidupkannya kembali.

> [!WARNING]
> Tindakan ini segera dieksekusi pada router Mikrotik Anda. Pastikan tidak ada operasi kritis yang sedang berjalan sebelum melakukan reboot.

