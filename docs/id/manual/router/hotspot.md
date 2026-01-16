# Manajemen Hotspot

Alat komprehensif untuk mengelola server Hotspot Mikrotik Anda, mulai dari pembuatan user hingga kontrol akses tingkat lanjut.

## <Icon name="Users" color="primary" /> User Hotspot {#users}

Halaman User (`/hotspot/users`) adalah database pusat untuk semua akun wifi Anda.
- **Pembuatan Manual**: Tambah user tunggal dengan username dan password spesifik.
- **Cetak Satuan**: Arahkan kursor ke user untuk melihat ikon cetak. Ini menggunakan template default yang ditetapkan pada profil mereka.
- **Cetak Massal**: Pilih beberapa user dan gunakan menu **Batch Actions** untuk mencetak semuanya sekaligus dalam satu halaman.
- **Monitor Status**: Lihat apakah user sedang login (Aktif) secara langsung di dalam daftar.

## <Icon name="Layers" color="info" /> Profil User {#profiles}

Profil User (`/hotspot/profiles`) menentukan aturan untuk setiap jenis voucher (contoh: 1 Jam, 1 Hari).
- **Rate Limit**: Kontrol kecepatan unggah dan unduh (contoh: `512k/1M`).
- **Shared Users**: Batasi berapa banyak perangkat yang dapat menggunakan akun yang sama secara bersamaan.
- **Validity**: Atur berapa lama akun tetap aktif setelah login pertama.
- **Harga**: Simpan harga jual untuk keperluan laporan.

## <Icon name="Ticket" color="success" /> Generator Voucher {#generate}

Generate ratusan voucher dalam hitungan detik (`/hotspot/generate`).
1. **Jumlah**: Pilih berapa banyak voucher yang akan dibuat.
2. **Server**: Pilih server hotspot mana yang dituju (biasanya `all`).
3. **User Mode**: Pilih antara `Username & Password` atau `Username = Password`.
4. **Prefix**: Tambahkan awalan (prefix) tetap pada setiap username yang dibuat.

## <Icon name="Zap" color="warning" /> Sesi Aktif & Cookies {#active}

Pantau dan kontrol koneksi saat ini (`/hotspot/active` dan `/hotspot/cookies`).
- **Kick User**: Putuskan sesi user yang sedang aktif secara paksa.
- **Cookies**: Kelola token 'remember me'. Menghapus cookie memaksa user untuk login kembali pada koneksi berikutnya.

## <Icon name="ShieldCheck" color="danger" /> Keamanan & Akses {#security}

Pengaturan lanjutan untuk akses jaringan tanpa persyaratan voucher biasa.
- **IP Bindings**: Lewati login hotspot untuk alamat MAC atau IP tertentu (contoh: untuk printer kantor atau server).
- **Walled Garden**: Izinkan akses ke situs web atau domain tertentu (contoh: portal bank Anda) bahkan sebelum user login.

