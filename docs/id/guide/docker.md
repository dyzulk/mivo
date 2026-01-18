---
title: Panduan Docker
---

# Panduan Docker

Image Docker ini dibangun di atas **Alpine Linux** dan **Nginx**, dioptimalkan untuk performa tinggi dan penggunaan sumber daya rendah.

## <Icon name="Zap" color="warning" /> Mulai Cepat

Jalankan MIVO dengan satu perintah:

```bash
docker run -d \
  --name mivo \
  -p 8080:80 \
  -e APP_KEY=base64:YOUR_GENERATED_KEY \
  -e APP_ENV=production \
  -v mivo_data:/var/www/html/app/Database \
  -v mivo_config:/var/www/html/.env \
  ghcr.io/mivodev/mivo:latest
```

Buka browser Anda dan navigasi ke `http://localhost:8080`.

**Pengaturan Awal:**
Jika ini adalah pertama kali dijalankan, Anda akan diarahkan ke **Web Installer**. Ikuti instruksi di layar untuk membuat database dan akun admin.

## <Icon name="Wrench" color="primary" /> Docker Compose

Untuk pengaturan yang lebih permanen, gunakan `docker-compose.yml`:

```yaml
services:
  mivo:
    image: ghcr.io/mivodev/mivo:latest
    container_name: mivo
    restart: unless-stopped
    ports:
      - "8080:80"
    environment:
      - APP_ENV=production
      - TZ=Asia/Jakarta
    volumes:
      - ./mivo-data:/var/www/html/app/Database
```

## <Icon name="Tags" color="info" /> Tags

- `latest`: Rilis stabil (direkomendasikan).
- `edge`: Build terbaru dari branch `main` (bleeding edge).
- `v1.x.x`: Versi rilis spesifik.

## <Icon name="Sliders" color="success" /> Variabel Lingkungan

| Variabel | Deskripsi | Default |
| :--- | :--- | :--- |
| `APP_ENV` | Lingkungan aplikasi (`production` atau `local`). | `production` |
| `APP_DEBUG` | Aktifkan mode debug (`true` atau `false`). | `false` |
| `APP_KEY` | String acak ca 32-karakter (base64). Dibuat otomatis saat install pertama kali jika kosong. | |
| `TZ` | Zona waktu untuk container. | `UTC` |

## <Icon name="Folder" color="primary" /> Volume

Persist data Anda dengan me-mount path ini:

- `/var/www/html/app/Database`: Menyimpan database SQLite dan file sesi. **(Penting)**
- `/var/www/html/public/assets/img/logos`: Menyimpan logo kustom yang diupload.

## <Icon name="Heart" color="danger" /> Dukung Proyek Ini

Jika Anda merasa MIVO bermanfaat, harap pertimbangkan untuk mendukung pengembangannya. Kontribusi Anda sangat berarti untuk kelangsungan proyek ini!

[![SociaBuzz Tribe](https://img.shields.io/badge/SociaBuzz-Tribe-green?style=for-the-badge&logo=sociabuzz&logoColor=white)](https://sociabuzz.com/dyzulkdev/tribe)

---
*Dibuat dengan <Icon name="Heart" color="danger" /> oleh MivoDev*
