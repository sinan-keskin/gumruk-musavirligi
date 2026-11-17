# Quantum AI Gümrük Müşavirliği - GitHub Pages Demo Portalı

Bu klasör, hiçbir PHP veya MySQL sunucusuna ihtiyaç duymadan doğrudan **GitHub Pages** üzerinde `gumruk.sinankeskin.com.tr` alan adı ile yayına alınabilecek, 100% bağımsız ve tüm etkileşimleri çalışan statik demo sürümüdür.

---

## 🚀 1. Hızlı Kurulum & GitHub'a Yükleme

Bu klasörü (`github-pages-demo`) yeni bir GitHub reposu olarak yüklemek için terminalde aşağıdaki komutları çalıştırmanız yeterlidir:

```bash
cd c:\xampp\htdocs\gumruk\github-pages-demo

# 1. Git deposu başlatın
git init -b main

# 2. Tüm dosyaları ekleyin ve commit yapın
git add .
git commit -m "Quantum AI Gümrük Müşavirliği - GitHub Pages Standalone Demo"

# 3. Kendi GitHub reponuzu ekleyin (Örnek: gumruk-demo)
git remote add origin https://github.com/KULLANICI_ADINIZ/gumruk-demo.git

# 4. Repoya gönderin
git push -u origin main
```

---

## 🌐 2. GitHub Pages ve Özel Alan Adı (Custom Domain)

1. GitHub deponuzda **Settings** > **Pages** menüsüne gidin.
2. **Branch**: `main` ve folder olarak `/(root)` seçip **Save** butonuna tıklayın.
3. Klasörde hazır bulunan `CNAME` dosyası otomatik olarak `gumruk.sinankeskin.com.tr` adresini tanımlayacaktır.
4. **Enforce HTTPS** kutucuğunu işaretleyin.

### DNS Ayarı (Cloudflare veya Domain Paneliniz):
`sinankeskin.com.tr` DNS yönetim panelinize (Cloudflare, cPanel vb.) bir adet **CNAME** kaydı ekleyin:
- **Tür:** `CNAME`
- **Ad (Name):** `gumruk`
- **Hedef (Target):** `KULLANICI_ADINIZ.github.io`
- **Proxy:** DNS Only veya Cloudflare Proxy (Otomatik SSL için)

---

## ✨ 3. Demo Özellikleri & Çalışan Modüller

- **Scrollytelling Hero Canvas:** 640 karelik yüksek kaliteli WebP animasyonu (`uploads/ana_akis_frames/`).
- **Canlı GTİP Tarife Sorgulama:** 12 haneli TGTC kodları (Kahve `0901`, Laptop `8471.30`, Otomobil `8703` vb.) ve gümrük vergisi / KDV / ÖTV / İGV hesaplama simülatörü.
- **Gümrük İdareleri ve Sınır Kapıları Rehberi:** İstanbul (Muratbey, Erenköy, Ambarlı, İGA vb.), Deniz Limanları ve Kara Hudut filtreli idare masası.
- **Gümrük & Dış Ticaret Sözlüğü:** 20+ resmi terim, açıklamalar ve saha örnekleri.
- **Mevzuat Sirkülerleri & Resmî Gazete Bülteni:** Otomatik senkronizasyon simülasyonu ve tek tıkla müşavirlik teklif modalı.
- **Açık Tema Özel Giriş Portalı (`giris.html`):**
  - **Hızlı Demo Müşteri:** Müşteri paneline (`portal.html`) tek tıkla giriş.
  - **Hızlı Demo Müşavir:** Yönetim paneline (`yonetim.html`) tek tıkla giriş.
- **Müşteri Portalı (`portal.html`):** Beyanname süreç takip hatları (Sarı, Kırmızı, Yeşil Hat), aşama bildirimleri, cari özet, dekont bildirimi ve Müşavir AI Sohbet Asistanı.
- **Yönetim Konsolu (`yonetim.html`):** Müşteri ekleme/silme/düzenleme (CRUD), beyanname hat/aşama güncelleme, yeni sirküler yayınlama ve canlı mesaj kutusu.
- **Kod Koruma Kalkanı (`anti-theft.min.js`):** `*.sinankeskin.com.tr`, `*.github.io` ve `localhost` için optimize edilmiştir. Lisanslı `sinan.keskin` kullanıcısı dışındakilerde kaynak kodu kopyalama ve inceleme kısıtlamalıdır.
