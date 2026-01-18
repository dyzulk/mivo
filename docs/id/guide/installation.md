---
title: Panduan Instalasi
---

# Panduan Instalasi

Panduan ini mencakup instalasi di berbagai platform. MIVO dirancang agar ringan dan berjalan di hampir semua server yang mendukung PHP.

## <Icon name="ClipboardList" color="primary" /> Persyaratan Umum {#persyaratan}
*   **PHP**: 8.0 atau lebih tinggi
*   **Ekstensi**: `sqlite3`, `openssl`, `mbstring`, `json`
*   **Database**: SQLite (Berbasis file, tidak perlu server database)

---

## <Icon name="Container" color="info" /> Docker (Direkomendasikan) {#docker}
Cara termudah untuk menjalankan MIVO.

1.  **Build & Run**
    ```bash
    docker-compose up -d --build
    ```
    Buka `http://localhost:8080`
    
2.  **Manual Pull (Alternatif)**
    Jika Anda lebih suka menarik image secara manual:
    ```bash
    docker pull ghcr.io/mivodev/mivo:latest  # Stable
    docker pull ghcr.io/mivodev/mivo:v1.0.0  # Versi Spesifik
    docker pull ghcr.io/mivodev/mivo:edge    # Bleeding Edge
    ```

*Catatan: Database disimpan secara permanen di `app/Database` melalui volume.*

---

## <Icon name="Server" color="success" /> Web Server {#web-server}

### Nginx
Nginx tidak membaca `.htaccess`. Gunakan blok konfigurasi ini di blok `server` Anda:

```nginx
server {
    listen 80;
    server_name domain-anda.com;
    root /path/to/mivo/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.2-fpm.sock; # Sesuaikan versi
    }

    location ~ /\.ht {
        deny all;
    }
}
```

---

## <Icon name="Smartphone" color="warning" /> Mobile / STB {#mobile-stb}

### Awebserver
1.  Salin file MIVO ke folder `/htdocs`.
2.  Arahkan document root ke `public` jika didukung, atau akses via `http://localhost:8080/public`.
3.  Pastikan versi PHP kompatibel.

### Termux
1.  Install PHP: `pkg install php`
2.  Masuk ke direktori MIVO: `cd mivo`
3.  Gunakan built-in server:
    ```bash
    php mivo serve --host=0.0.0.0 --port=8080
    ```
4.  Akses melalui browser.

---

## <Icon name="Globe" color="info" /> Shared Hosting {#shared-hosting}
Kebanyakan shared hosting menggunakan Apache atau OpenLiteSpeed, yang didukung penuh.

1.  **Upload File**: Upload file MIVO ke `public_html/mivo` (atau folder subdomain).
2.  **Arahkan Domain**:
    *   **Direkomendasikan**: Pergi ke "Domains" atau "Subdomains" di cPanel dan set **Document Root** agar menunjuk langsung ke folder `public/` (contoh: `public_html/mivo/public`).
    *   **Alternatif**: Jika tidak bisa mengubah Document Root, Anda bisa memindahkan isi `public/` ke root `public_html` dan memindahkan `app/`, `routes/`, dll satu level ke atas (tidak disarankan untuk keamanan).
3.  **Versi PHP**: Pilih PHP 8.0+ di menu "Select PHP Version".
4.  **Ekstensi**: Pastikan `sqlite3` dan `fileinfo` dicentang.

---

## <Icon name="Cloud" color="primary" /> VPS & Cloud {#vps-cloud}

### aaPanel
1.  **Buat Website**: Tambah situs -> PHP-8.x.
2.  **Direktori Situs**:
    *   Set **Running Directory** ke `/public`.
    *   Hapus centang "Anti-XSS" (terkadang memblokir penyimpanan konfigurasi).
3.  **URL Rewrite**: Pilih template `thinkphp` atau `laravel` yang kompatibel.
4.  **Izin File**: Chown user `www` ke direktori situs.

### PaaS Cloud (Railway / Render / Heroku)
> [!WARNING]
> MIVO menggunakan SQLite. Kebanyakan PaaS Cloud menggunakan **Ephemeral Filesytem** (Data hilang saat restart).
> Anda WAJIB menggunakan **Persistent Volume/Disk**.

---

## <Icon name="Settings" color="success" /> Pasca-Instalasi {#pasca-instalasi}
Setelah menyiapkan server:
1.  Salin `.env.example` ke `.env` (jika belum dilakukan).
2.  **Install Aplikasi**
    *   **Opsi A: CLI**
        Jalankan `php mivo install` di terminal Anda.
    *   **Opsi B: Web Installer**
        Buka `http://domain-anda.com/install` di browser.

