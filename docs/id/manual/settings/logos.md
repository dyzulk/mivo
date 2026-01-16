# Logo Brand

Manajemen Logo memungkinkan Anda untuk mengelola galeri aset brand yang digunakan untuk kustomisasi voucher Hotspot Mikrotik dan antarmuka aplikasi.

## <Icon name="Image" color="primary" /> Tujuan

Dengan mengunggah logo bisnis Anda di sini, Anda dapat menciptakan pengalaman brand yang profesional bagi pelanggan Anda. Logo-logo ini disimpan terpusat dan dapat dipanggil secara dinamis di berbagai bagian MIVO.

## <Icon name="UploadCloud" color="success" /> Proses Mengunggah

1.  Buka **Pengaturan** > **Logo**.
2.  **Drag & Drop** atau klik area unggah untuk memilih file Anda.
3.  **Format yang Didukung**: PNG, JPG, SVG, dan GIF didukung. Disarankan menggunakan PNG transparan atau SVG untuk tampilan terbaik di voucher.

## <Icon name="Hash" color="info" /> Logo ID & Fitur Copy

Setiap logo yang Anda unggah akan diberikan **Short ID** yang unik (contoh: `lg01`, `logo_wifi`).

### <Icon name="Copy" color="primary" /> Cara Menggunakan Copy ID
Di galeri logo, arahkan kursor ke logo apapun untuk memunculkan tombol **Copy ID**.
- **Fungsi**: Mengklik tombol ini akan menyalin ID unik tersebut ke clipboard Anda.
- **Integrasi**: Gunakan ID ini di dalam **Voucher Template Editor** (contoh: `&#123;&#123;logo:lg01&#125;&#125;`) untuk menampilkan logo spesifik tersebut pada voucher yang dicetak.

## <Icon name="Trash2" color="danger" /> Manajemen

Anda dapat menghapus logo yang tidak digunakan kapan saja.
> [!WARNING]
> Menghapus logo akan menyebabkan template voucher yang mereferensikan ID-nya menampilkan gambar yang rusak (placeholder).

