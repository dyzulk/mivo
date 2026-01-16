# Manajemen Router

Untuk mulai mengelola Mikrotik Anda, pertama-tama Anda perlu menghubungkannya ke MIVO.

## <Icon name="PlusCircle" color="success" /> Menghubungkan Router

1.  Buka **Pengaturan** > **Router**.
2.  Klik **Tambah Router**.
3.  Isi detailnya:
    - **Nama Sesi**: Identitas unik untuk koneksi ini.
    - **Alamat IP**: IP Mikrotik atau nama DNS Anda.
    - **Username/Password**: Akun API Mikrotik Anda.
    - **Port**: Biasanya 8728 (API).

## <Icon name="Activity" color="info" /> Status Koneksi

MIVO akan mencoba terhubung ke router secara real-time. Jika status berwarna hijau, Anda siap memulai pengelolaan!

## <Icon name="Database" color="warning" /> Backup & Restore

Lindungi konfigurasi Anda dengan membuat cadangan (backup) database MIVO Anda.

- **Backup**: Membuat file JSON yang berisi semua sesi router dan pengaturan global.
- **Restore**: Unggah file cadangan MIVO yang telah disimpan sebelumnya untuk memulihkan data Anda.

> [!CAUTION]
> Melakukan restore akan menimpa pengaturan dan sesi Anda yang ada saat ini.

