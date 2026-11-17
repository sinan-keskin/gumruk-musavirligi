/**
 * Quantum AI Gümrük Müşavirliği - Mock Database
 * Standalone GitHub Pages Demo Data
 */
window.GUMRUK_INITIAL_DATA = {
    "ayarlar": {
        "firma_adi": "Quantum AI Gümrük Müşavirliği",
        "telefon": "+90 (535) 835 61 77",
        "eposta": "info@sinankeskin.com.tr",
        "adres": "Sinan Keskin Danışmanlık ve Gümrükleme Hizmetleri, Kadıköy \/ İstanbul",
        "hero_baslik": "Lisanslı Gümrük Müşavirliği ve Dış Ticaret Danışmanlığı",
        "hakkimizda": "Türkiye genelindeki tüm gümrük müdürlükleri, liman ve havalimanlarında 7\/24 kesintisiz saha operasyonları, tarife (GTİP) tespiti, mevzuat ve dijital entegrasyon çözümleri sunuyoruz.",
        "banka_adi": "Ziraat Bankası A.Ş. - Kozyatağı Kurumsal Şube",
        "iban": "TR12 0001 0000 1234 5678 9012 34",
        "hesap_sahibi": "Quantum AI Gümrük Müşavirliği Ltd. Şti.",
        "gemini_api_key": "",
        "gemini_model": "gemini-2.5-flash",
        "ai_system_prompt": "",
        "smtp_aktif": 1,
        "smtp_host": "mail.sinankeskin.com.tr",
        "smtp_port": 587,
        "smtp_auth": 1,
        "smtp_user": "info@sinankeskin.com.tr",
        "smtp_pass": "TestSecretPass123",
        "smtp_secure": "tls",
        "smtp_from_name": "X Gümrük Müşavirliği",
        "smtp_from_email": "info@sinankeskin.com.tr"
    },
    "gtip_list": [
        {
            "gtip": "0901.11.00.00.00",
            "fasil": "09",
            "tanim": "Kahve (Kavrulmamış, kafeini alınmamış) (Ham yeşil kahve çekirdeği)",
            "birim": "kg",
            "gv": "%8 - %13",
            "kdv": "%1",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Tarım ve Orman Bakanlığı Bitki Sağlık Sertifikası ve Uygunluk Yazısı gereklidir."
        },
        {
            "gtip": "0901.21.00.00.00",
            "fasil": "09",
            "tanim": "Kahve (Kavrulmuş, kafeini alınmamış) (Filtre kahve, espresso çekirdek kahve, Türk kahvesi)",
            "birim": "kg",
            "gv": "%13",
            "kdv": "%10",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Gıda Güvenliği Denetimi, Tarım Bakanlığı İthalat Uygunluk Belgesi."
        },
        {
            "gtip": "0901.22.00.00.00",
            "fasil": "09",
            "tanim": "Kahve (Kavrulmuş, kafeini alınmış - dekafeine)",
            "birim": "kg",
            "gv": "%13",
            "kdv": "%10",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Gıda kodeksi analiz ve mikrobiyolojik uygunluk testi."
        },
        {
            "gtip": "0902.10.00.00.00",
            "fasil": "09",
            "tanim": "Yeşil Çay (Fermante edilmemiş, 3 kg veya daha az ambalajlarda)",
            "birim": "kg",
            "gv": "%145",
            "kdv": "%1",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Çay İthalatında Yüksek Gümrük Vergisi Koruması ve İhtisas Gümrüğü (Rize) uygulaması."
        },
        {
            "gtip": "0902.30.00.00.00",
            "fasil": "09",
            "tanim": "Siyah Çay (Fermente edilmiş, 3 kg veya daha az ambalajlarda poşet veya dökme çay)",
            "birim": "kg",
            "gv": "%145",
            "kdv": "%1",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Çay İhtisas Gümrükleri Yönetmeliği, Tarım Bakanlığı İthalat İzni."
        },
        {
            "gtip": "0808.10.10.00.00",
            "fasil": "08",
            "tanim": "Elma (Taze elma - sofralık veya sanayi tipi)",
            "birim": "kg",
            "gv": "%60.3",
            "kdv": "%1",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Bitki Karantinası Yönetmeliği, Zirai Karantina Kontrolü."
        },
        {
            "gtip": "0803.90.10.00.00",
            "fasil": "08",
            "tanim": "Muz (Taze muz)",
            "birim": "kg",
            "gv": "%145.8",
            "kdv": "%1",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Gözetim Belgesi Uygulaması (Birim Gümrük Kıymeti Koruması)."
        },
        {
            "gtip": "8703.21.10.00.00",
            "fasil": "87",
            "tanim": "Binek Otomobiller (Silindir hacmi 1000 cm3'ü geçmeyenler - Yeni)",
            "birim": "Adet",
            "gv": "%10 (AB \/ EFTA: %0)",
            "kdv": "%20",
            "otv": "%80",
            "igv": "%10 - %25",
            "mevzuat": "Sanayi ve Teknoloji Bakanlığı Tip Onay Belgesi (CoC) ve Garanti Muafiyet Belgesi."
        },
        {
            "gtip": "8703.23.19.00.00",
            "fasil": "87",
            "tanim": "Binek Otomobiller (Silindir hacmi 1500 cm3 - 1600 cm3 arası, Benzinli - Yeni)",
            "birim": "Adet",
            "gv": "%10 (AB \/ STA: %0)",
            "kdv": "%20",
            "otv": "%80 - %150",
            "igv": "-",
            "mevzuat": "TSE Araç İnceleme ve Uygunluk Belgesi, ÖTV Matrah Dilimi Beyanı."
        },
        {
            "gtip": "8703.80.10.00.00",
            "fasil": "87",
            "tanim": "Elektrikli Otomobiller (Yalnızca elektrik motorundan tahrik alan binek taşıtlar - EV)",
            "birim": "Adet",
            "gv": "%10 (Çin: İlave %40)",
            "kdv": "%20",
            "otv": "%10 - %60",
            "igv": "%40",
            "mevzuat": "Ticaret Bakanlığı 2023\/22 Tebliği (Yetkili Servis ve Çağrı Merkezi İzni Şartı)."
        },
        {
            "gtip": "8704.21.91.00.00",
            "fasil": "87",
            "tanim": "Eşya Taşımaya Mahsus Motorlu Taşıtlar (Kamyonet, Panelvan - Azami yüklü ağırlığı <= 5 ton)",
            "birim": "Adet",
            "gv": "%22 (AB: %0)",
            "kdv": "%20",
            "otv": "%4 - %15",
            "igv": "-",
            "mevzuat": "TSE İthalat Araç Uygunluk Belgesi, Tip Onayı."
        },
        {
            "gtip": "8708.29.90.00.00",
            "fasil": "87",
            "tanim": "Motorlu Taşıtların Karoseri Aksam ve Parçaları (Tampon, Çamurluk, Kaporta vb.)",
            "birim": "kg",
            "gv": "%3 - %4.5 (AB: %0)",
            "kdv": "%20",
            "otv": "-",
            "igv": "%10 - %20",
            "mevzuat": "TAREKS 2024\/9 Sayılı Tebliğ Kapsamı Güvenlik ve E-İşareti Kontrolü."
        },
        {
            "gtip": "8471.30.00.00.00",
            "fasil": "84",
            "tanim": "Taşınabilir Otomatik Bilgi İşlem Makineleri (Laptop, Notebook, Tablet PC <= 10 kg)",
            "birim": "Adet",
            "gv": "%0 (ITA Kapsamı Gümrük Vergisi Muafiyeti)",
            "kdv": "%20",
            "otv": "-",
            "igv": "-",
            "mevzuat": "CE İşareti Uygunluk Beyanı, TRT Bandrol Ücreti (%4)."
        },
        {
            "gtip": "8471.41.00.00.00",
            "fasil": "84",
            "tanim": "Masaüstü Bilgisayarlar (Desktop PC, İş İstasyonları, All-in-One PC)",
            "birim": "Adet",
            "gv": "%0 (ITA Kapsamı)",
            "kdv": "%20",
            "otv": "-",
            "igv": "-",
            "mevzuat": "TAREKS Elektromanyetik Uyumluluk (EMC) ve Alçak Gerilim (LVD) Tebliği."
        },
        {
            "gtip": "8471.50.00.00.00",
            "fasil": "84",
            "tanim": "Sunucular (Server) ve Veri Merkezi İşleme Birimleri",
            "birim": "Adet",
            "gv": "%0",
            "kdv": "%20",
            "otv": "-",
            "igv": "-",
            "mevzuat": "CE Uygunluk Denetimi, İkili Kullanım (Dual-Use) Kripto Kontrol Bildirimi."
        },
        {
            "gtip": "8415.10.90.00.00",
            "fasil": "84",
            "tanim": "Klimalar (Split Klima, Isı Pompası Sistemleri - Ev ve Ofis Tipi)",
            "birim": "Adet",
            "gv": "%2.5 - %2.7 (AB: %0)",
            "kdv": "%20",
            "otv": "%6.7",
            "igv": "%25",
            "mevzuat": "Çevre Bakanlığı F-Gaz (Florlu Sera Gazı) İthalat Kayıt Belgesi, TSE Enerji Verimliliği."
        },
        {
            "gtip": "8418.10.20.00.00",
            "fasil": "84",
            "tanim": "Kombine Buzdolapları ve Dondurucular (Ev tipi çift kapılı no-frost buzdolapları)",
            "birim": "Adet",
            "gv": "%1.9 - %2.5 (AB: %0)",
            "kdv": "%20",
            "otv": "%6.7",
            "igv": "%20",
            "mevzuat": "Eko-Tasarım ve Enerji Etiketlemesi Tebliği (TSE Denetimi)."
        },
        {
            "gtip": "8450.11.11.00.00",
            "fasil": "84",
            "tanim": "Çamaşır Yıkama Makineleri (Kuru çamaşır kapasitesi <= 10 kg, Tam otomatik)",
            "birim": "Adet",
            "gv": "%2.7 (AB: %0)",
            "kdv": "%20",
            "otv": "%6.7",
            "igv": "%20",
            "mevzuat": "TAREKS Güvenlik Testi ve Enerji Etiketi Kontrolü."
        },
        {
            "gtip": "8517.13.00.00.00",
            "fasil": "85",
            "tanim": "Akıllı Telefonlar (Smartphones - Hücresel ağlar için alıcısı vericisi olanlar)",
            "birim": "Adet",
            "gv": "%0 (ITA Kapsamı)",
            "kdv": "%20",
            "otv": "%25 - %50",
            "igv": "-",
            "mevzuat": "BTK IMEI Kayıt ve Onay Belgesi, Gözetim Belgesi (200 USD\/Adet Kıymet Koruması), TRT Bandrol Ücreti (%12)."
        },
        {
            "gtip": "8528.72.40.00.00",
            "fasil": "85",
            "tanim": "Renkli Televizyon Alıcıları (Smart TV, OLED, QLED, LCD Ekranlı Televizyonlar)",
            "birim": "Adet",
            "gv": "%14 (AB: %0)",
            "kdv": "%20",
            "otv": "%6.7",
            "igv": "%20",
            "mevzuat": "TRT Bandrolü (Ekran Boyutuna Göre Sabit Euro Ücreti), TAREKS LVD\/EMC Denetimi."
        },
        {
            "gtip": "8504.40.30.00.00",
            "fasil": "85",
            "tanim": "Statik Konvertörler (Hızlı Şarj Cihazları, Adaptörler, Güç Kaynakları - PSU)",
            "birim": "Adet",
            "gv": "%3.3 (AB: %0)",
            "kdv": "%20",
            "otv": "-",
            "igv": "%15 - %20",
            "mevzuat": "CE Uygunluğu ve LVD Güvenlik Test Raporları."
        },
        {
            "gtip": "8507.60.00.00.00",
            "fasil": "85",
            "tanim": "Lityum-İyon Akümülatörler (Li-Ion Bataryalar, Powerbank, Araç Batarya Hücreleri)",
            "birim": "Adet",
            "gv": "%2.7 (AB: %0)",
            "kdv": "%20",
            "otv": "-",
            "igv": "%20 - %30",
            "mevzuat": "Atık Pil ve Akümülatör İthalatçı Yetki Belgesi (Çevre Bakanlığı APAK Formu), BM Tehlikeli Madde Taşıma (UN 3480 \/ UN 3481 MSDS)."
        },
        {
            "gtip": "8541.43.00.00.00",
            "fasil": "85",
            "tanim": "Fotovoltaik Güneş Panelleri (Modül veya paneller halinde monte edilmiş güneş pilleri)",
            "birim": "kW",
            "gv": "%0 (AB: %0)",
            "kdv": "%20",
            "otv": "-",
            "igv": "%10 - %25",
            "mevzuat": "Ticaret Bakanlığı İthalatta Gözetim Uygulaması (kg başına taban kıymet denetimi)."
        },
        {
            "gtip": "3004.90.00.00.00",
            "fasil": "30",
            "tanim": "Tedavide veya Korunmada Kullanılmak Üzere Hazırlanan İlaçlar (Dozlandırılmış)",
            "birim": "kg",
            "gv": "%0 (AB \/ Üçüncü Ülkeler: %0)",
            "kdv": "%10",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Sağlık Bakanlığı TİTCK (Türkiye İlaç ve Tıbbi Cihaz Kurumu) Ruhsatı ve Kontrol Belgesi."
        },
        {
            "gtip": "3002.41.00.00.00",
            "fasil": "30",
            "tanim": "İnsan Sağlığında Kullanılan Aşılar",
            "birim": "Doz",
            "gv": "%0",
            "kdv": "%10",
            "otv": "-",
            "igv": "-",
            "mevzuat": "TİTCK Biyolojik Ürünler İthalat İzni, Soğuk Zincir Taşıma Denetimi."
        },
        {
            "gtip": "3303.00.10.00.00",
            "fasil": "33",
            "tanim": "Parfümler (Eau de Parfum, Esans İçeriği Yüksek Olanlar)",
            "birim": "Litre",
            "gv": "%0 (AB: %0, Üçüncü Ülke: %0)",
            "kdv": "%20",
            "otv": "%20",
            "igv": "%20 - %25",
            "mevzuat": "Sağlık Bakanlığı ÜTS (Ürün Takip Sistemi) Kozmetik Bildirimi, Güvenlik Değerlendirme Dosyası."
        },
        {
            "gtip": "3304.99.00.00.00",
            "fasil": "33",
            "tanim": "Cilt Bakım Müstahzarları (Güneş kremleri, nemlendiriciler, yaşlanma karşıtı serumlar)",
            "birim": "kg",
            "gv": "%0",
            "kdv": "%20",
            "otv": "%20",
            "igv": "%20",
            "mevzuat": "ÜTS Ürün Kayıt Bildirimi, Türkçe Etiket Zorunluluğu."
        },
        {
            "gtip": "3901.10.90.00.00",
            "fasil": "39",
            "tanim": "Alçak Yoğunluk Polietilen (LDPE - Özgül kütlesi < 0.94 olan primer formda plastik hammadde)",
            "birim": "kg",
            "gv": "%6.5 (AB: %0)",
            "kdv": "%20",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Sanayi Hammaddesi İthal Kayıt Belgesi (İKB)."
        },
        {
            "gtip": "3902.10.00.00.00",
            "fasil": "39",
            "tanim": "Polipropilen (İlk şekillerde homopolimer granül)",
            "birim": "kg",
            "gv": "%6.5 (AB: %0)",
            "kdv": "%20",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Dampinge Karşı Vergi (Anti-Dumping) Soruşturması Kontrolü."
        },
        {
            "gtip": "3923.30.10.00.00",
            "fasil": "39",
            "tanim": "Plastik Şişeler, Damacanalar, Flakonlar ve Benzeri Eşya",
            "birim": "Adet",
            "gv": "%6.5",
            "kdv": "%20",
            "otv": "-",
            "igv": "%20 - %25",
            "mevzuat": "Gıda ile Temas Eden Madde İthalat İzni (Tarım Bakanlığı)."
        },
        {
            "gtip": "6109.10.00.00.00",
            "fasil": "61",
            "tanim": "T-shirt, Fanila ve Diğer İç Giyim Eşyası (Pamuktan, örme)",
            "birim": "Adet",
            "gv": "%12 (AB \/ EFTA: %0)",
            "kdv": "%10",
            "otv": "-",
            "igv": "%30 - %40",
            "mevzuat": "Tekstil İthalatında Kayıt Belgesi (İTKİB), Azo Boyar ve Fitalat Test Raporu (TAREKS)."
        },
        {
            "gtip": "6203.42.31.00.00",
            "fasil": "62",
            "tanim": "Erkek Pantolonları ve Şortları (Pamuklu denim kumaştan kot pantolonlar)",
            "birim": "Adet",
            "gv": "%12 (AB: %0)",
            "kdv": "%10",
            "otv": "-",
            "igv": "%30 - %40",
            "mevzuat": "Kayıt Belgesi Uygulaması, Menşe İspat Belgesi (Menşe Şahadetnamesi \/ Form A)."
        },
        {
            "gtip": "6204.62.31.00.00",
            "fasil": "62",
            "tanim": "Kadın Pantolonları (Denim kot pantolon)",
            "birim": "Adet",
            "gv": "%12 (AB: %0)",
            "kdv": "%10",
            "otv": "-",
            "igv": "%30 - %40",
            "mevzuat": "Ekolojik Tekstil Kriterleri ve TAREKS Tüketici Güvenliği Denetimi."
        },
        {
            "gtip": "6404.11.00.00.00",
            "fasil": "64",
            "tanim": "Spor Ayakkabıları (Tenis, basketbol, jimnastik, antrenman ayakkabıları - kauçuk tabanlı)",
            "birim": "Çift",
            "gv": "%17 (AB: %0)",
            "kdv": "%10",
            "otv": "-",
            "igv": "%30 - %50",
            "mevzuat": "Ayakkabı İthalatında İlave Gümrük Vergisi (İGV) Koruması, TAREKS Fitalat\/Krom VI Analizi."
        },
        {
            "gtip": "6403.99.93.00.00",
            "fasil": "64",
            "tanim": "Deri Tabanlı ve Deri Yüzlü Klasik Şehir Ayakkabıları (Erkek\/Kadın)",
            "birim": "Çift",
            "gv": "%8 (AB: %0)",
            "kdv": "%10",
            "otv": "-",
            "igv": "%30 - %40",
            "mevzuat": "Gözetim Belgesi (Çift başına taban gümrük kıymeti uygulaması)."
        },
        {
            "gtip": "7208.39.00.00.00",
            "fasil": "72",
            "tanim": "Demir veya Alaşımsız Çelikten Yassı Hadde Mamulleri (Sıcak Haddelenmiş Rulo Saç - HRC)",
            "birim": "kg",
            "gv": "%9 - %15",
            "kdv": "%20",
            "otv": "-",
            "igv": "-",
            "mevzuat": "Dahilde İşleme Rejimi (DİR) İndirimi, Dampinge Karşı Kesin Önlem (Anti-Dumping)."
        },
        {
            "gtip": "7304.19.10.00.00",
            "fasil": "73",
            "tanim": "Demir veya Çelikten Dikişsiz Borular (Petrol ve Gaz Boru Hatları İçin)",
            "birim": "kg",
            "gv": "%0 (AB: %0)",
            "kdv": "%20",
            "otv": "-",
            "igv": "%15 - %20",
            "mevzuat": "Basınçlı Ekipmanlar Yönetmeliği (PED) ve CE Uygunluk Belgesi."
        },
        {
            "gtip": "9401.30.00.00.00",
            "fasil": "94",
            "tanim": "Yüksekliği Ayarlanabilen Döner Koltuklar (Ofis Çalışma Koltukları)",
            "birim": "Adet",
            "gv": "%0 (AB: %0)",
            "kdv": "%20",
            "otv": "-",
            "igv": "%20 - %25",
            "mevzuat": "TSE Büro Mobilyaları Güvenlik Standartları ve İGV Koruması."
        },
        {
            "gtip": "9403.20.80.00.00",
            "fasil": "94",
            "tanim": "Diğer Metal Mobilyalar (Arşiv dolapları, metal masalar, raflar)",
            "birim": "Adet",
            "gv": "%0 (AB: %0)",
            "kdv": "%20",
            "otv": "-",
            "igv": "%20 - %25",
            "mevzuat": "Gözetim Tebliği."
        },
        {
            "gtip": "9503.00.70.00.00",
            "fasil": "95",
            "tanim": "Diğer Oyuncaklar (Plastik setler, eğitici çocuk oyuncakları, arabalar, bebekler)",
            "birim": "Adet",
            "gv": "%0 - %4.7 (AB: %0)",
            "kdv": "%20",
            "otv": "-",
            "igv": "%20 - %30",
            "mevzuat": "TAREKS 2024\/10 Sayılı Oyuncak Güvenliği Tebliği, CE İşareti, Ağır Metal ve Fitalat Testi."
        }
    ],
    "gtip_fasillar": {
        "01": "Canlı Hayvanlar",
        "02": "Etler ve Yenilen Sakatat",
        "03": "Balıklar, Kabuklu Hayvanlar, Yumuşakçalar ve Diğer Sucul Omurgasızlar",
        "04": "Süt Ürünleri, Kuş Yumurtaları, Tabii Bal",
        "05": "Tarifenin Başka Yerinde Belirtilmeyen Hayvansal Menşeli Ürünler",
        "06": "Canlı Ağaçlar ve Diğer Bitkiler; Yumrular, Kökler; Kesme Çiçekler",
        "07": "Yenilen Sebzeler ve Bazı Kök ve Yumrular",
        "08": "Yenilen Meyveler ve Yenilen Sert Kabuklu Meyveler",
        "09": "Kahve, Çay, Paraguay Çayı ve Baharat",
        "10": "Hububat (Buğday, Mısır, Pirinç vb.)",
        "11": "Değirmencilik Ürünleri; Malt; Nişasta; İnülin; Buğday Glüteni",
        "12": "Yağlı Tohum ve Meyveler; Muhtelif Tane, Tohum ve Meyveler; Saman",
        "13": "Şellak; Sakızlar, Reçineler ve Diğer Bitkisel Özsu ve Hülasalar",
        "14": "Örülmeye Elverişli Bitkisel Maddeler ve Diğer Bitkisel Ürünler",
        "15": "Hayvansal veya Bitkisel Katı ve Sıvı Yağlar; Yenilen Katı Sıvı Yağlar",
        "16": "Et, Balık, Kabuklu Hayvan veya Yumuşakçalardan Müstahzarlar",
        "17": "Şeker ve Şeker Mamulleri",
        "18": "Kakao ve Kakao Müstahzarları (Çikolata)",
        "19": "Hububat, Un, Nişasta veya Süt Müstahzarları; Pastacılık Ürünleri",
        "20": "Sebzeler, Meyveler ve Diğer Bitki Parçalarından Elde Edilen Müstahzarlar",
        "21": "Çeşitli Yenilen Gıda Müstahzarları (Soslar, Mayalar, Çorbalar)",
        "22": "Meşrubat, Alkollü İçkiler ve Sirkeler",
        "23": "Gıda Sanayiinin Kalıntı ve Döküntüleri; Hayvan Yemleri",
        "24": "Tütün ve Tütün Yerine Geçen İşlenmiş Maddeler",
        "25": "Tuz; Kükürt; Topraklar ve Taşlar; Alçılar, Kireçler ve Çimento",
        "26": "Metal Cevherleri, Cüruf ve Küller",
        "27": "Mineral Yakıtlar, Mineral Yağlar, Petrol ve Damıtma Ürünleri; Mumlar",
        "28": "İnorganik Kimyasallar; Kıymetli Metallerin Organik\/İnorganik Bileşikleri",
        "29": "Organik Kimyasal Ürünler",
        "30": "Eczacılık Ürünleri (İlaçlar, Aşılar, Tıbbi Malzemeler)",
        "31": "Gübreler",
        "32": "Debagatte ve Boyacılıkta Kullanılan Hülasalar; Boyalar ve Vernikler; Macunlar",
        "33": "Uçucu Yağlar ve Rezinoitler; Parfümeri, Kozmetik veya Tuvalet Müstahzarları",
        "34": "Sabunlar, Yüzey Aktif Organik Maddeler, Yıkama Müstahzarları; Mumlar",
        "35": "Albüminoid Maddeler; Esası Tadil Edilmiş Nişastalar; Tutkallar; Enzimler",
        "36": "Barut ve Patlayıcı Maddeler; Piroteknik Mamulleri; Kibritler",
        "37": "Fotoğrafçılıkta veya Sinemacılıkta Kullanılan Eşya",
        "38": "Muhtelif Kimyasal Maddeler (Dezenfektanlar, Böcek İlaçları, Katalizörler)",
        "39": "Plastikler ve Mamulleri (Polimerler, Borular, Levhalar, Poşetler)",
        "40": "Kauçuk ve Kauçuktan Eşya (Lastikler, Hortumlar, Contalar)",
        "41": "Ham Postlar, Deriler (Kürkler Hariç) ve Köseleler",
        "42": "Deri Eşya; Saraciye Eşyası ve Eyer Takımları; Seyahat Eşyası, Çantalar",
        "43": "Kürkler ve Taklit Kürkler; Bunların Mamulleri",
        "44": "Ağaç ve Ahşap Eşya; Odun Kömürü (Kereste, Parke, Kontrplak)",
        "45": "Mantar ve Mantardan Eşya",
        "46": "Hasırdan, Sazdan veya Örülmeye Elverişli Diğer Maddelerden Mamuller",
        "47": "Odun veya Diğer Lifli Selülozik Maddelerin Hamurları; Atık Kağıtlar",
        "48": "Kağıt ve Karton; Kağıt Hamurundan, Kağıttan veya Kartondan Eşya",
        "49": "Basılı Kitaplar, Gazeteler, Resimler ve Diğer Baskı Sanayii Mamulleri",
        "50": "İpek",
        "51": "Yapağı ve Yün, İnce veya Kaba Hayvan Kılı; At Kılı İpliği ve Dokumaları",
        "52": "Pamuk (Pamuk İpliği ve Pamuklu Mensucat)",
        "53": "Diğer Dokumaya Elverişli Bitkisel Lifler; Kağıt İpliği ve Mensucatı",
        "54": "Sentetik ve Suni Filamentler; Şeritler ve Benzeri Dokumaya Elverişli Maddeler",
        "55": "Sentetik ve Suni Devamsız Lifler",
        "56": "Vatka, Keçe ve Dokunmamış Mensucat; Özel İplikler; Sicim, Kordon, Halat",
        "57": "Halılar ve Diğer Dokumaya Elverişli Maddelerden Yer Kaplamaları",
        "58": "Özel Dokunmuş Mensucat; Bukleli Kumaşlar; Dantela; Duvar Halıları; İşlemeler",
        "59": "Emdirilmiş, Sıvanmış, Kaplanmış Mensucat; Teknik Amaçlı Dokuma Eşyası",
        "60": "Örme Eşya (Örme Kumaşlar)",
        "61": "Örme Giyim Eşyası ve Aksesuarı (T-shirt, Kazak, Elbise, Çorap)",
        "62": "Örülmemiş Giyim Eşyası ve Aksesuarı (Takım Elbise, Pantolon, Ceket, Gömlek)",
        "63": "Diğer Hazır Eşya; Takımlar; Kullanılmış Giyim Eşyası ve Paçavralar",
        "64": "Ayakkabılar, Getrler ve Benzeri Eşya; Bunların Aksamı",
        "65": "Başlıklar ve Aksamı (Şapkalar, Bereler)",
        "66": "Şemsiyeler, Bastonlar, Kırbaçlar ve Bunların Aksamı",
        "67": "Hazırlanmış İnce ve Kalın Kuş Tüyleri; Yapma Çiçekler; İnsan Saçından Eşya",
        "68": "Taş, Alçı, Çimento, Asbest, Mika veya Benzeri Maddelerden Eşya",
        "69": "Seramik Mamulleri (Fayans, Karo, Porselen, Lavabo)",
        "70": "Cam ve Cam Eşya (Düz Cam, Şişe, Bardak, Laboratuvar Camı)",
        "71": "Kıymetli Taşlar, Kıymetli Metaller, Taklit Mücevherci Eşyası; Metal Paralar",
        "72": "Demir ve Çelik (Kütük, Rulo Saç, Profil, Filmaşin)",
        "73": "Demir veya Çelikten Eşya (Boru, Profil, İnşaat Demiri, Civata, Somun)",
        "74": "Bakır ve Bakırdan Eşya (Bakır Tel, Boru, Sac)",
        "75": "Nikel ve Nikelden Eşya",
        "76": "Alüminyum ve Alüminyumdan Eşya (Alüminyum Profil, Levha, Folyo)",
        "78": "Kurşun ve Kurşundan Eşya",
        "79": "Çinko ve Çinkodan Eşya",
        "80": "Kalay ve Kalaydan Eşya",
        "81": "Diğer Adi Metaller; Sermetler; Bunlardan Eşya (Titanyum, Tungsten)",
        "82": "Adi Metallerden Aletler, Bıçakçı Eşyası ve Sofra Takımları",
        "83": "Adi Metallerden Çeşitli Eşya (Kilitler, Menteşeler, Kasalar)",
        "84": "Nükleer Reaktörler, Kazanlar, Makinalar, Mekanik Cihazlar ve Aksamı (Bilgisayarlar, Motorlar, Pompalar, Klimalar)",
        "85": "Elektrikli Makina ve Cihazlar, Ses Kaydediciler, Televizyon, Telefonlar ve Elektronik Devreler",
        "86": "Demiryolu ve Benzeri Hatlara Ait Lokomotifler, Vagonlar ve Malzemeler",
        "87": "Motorlu Kara Taşıtları, Traktörler, Bisikletler ve Diğer Taşıtlar (Otomobiller, Kamyonlar, Parçalar)",
        "88": "Hava Taşıtları, Uzay Taşıtları ve Bunların Aksamı (Uçaklar, Helikopterler, İHA)",
        "89": "Gemiler, Yatlar, Tekneler ve Suda Yüzen Taşıt ve Araçlar",
        "90": "Optik, Fotoğraf, Sinema, Ölçü, Kontrol, Tıbbi veya Cerrahi Alet ve Cihazlar",
        "91": "Saatler ve Bunların Aksamı (Kol Saatleri, Duvar Saatleri)",
        "92": "Müzik Aletleri; Bunların Aksam, Parça ve Aksesuarları",
        "93": "Silahlar ve Mühimmat; Bunların Aksam ve Parçaları",
        "94": "Mobilyalar, Yatak Takımları, Aydınlatma Cihazları, Prefabrik Yapılar",
        "95": "Oyuncaklar, Oyun ve Spor Malzemeleri; Bunların Aksamı",
        "96": "Çeşitli Mamul Eşya (Kalemler, Çakmaklar, Fermuarlar, Düğmeler, Süpürgeler)",
        "97": "Sanat Eserleri, Koleksiyon Eşyası ve Antikalar"
    },
    "gtip_bolumler": [
        {
            "no": "I",
            "baslik": "Canlı Hayvanlar ve Hayvansal Ürünler",
            "fasillar": [
                "01",
                "02",
                "03",
                "04",
                "05"
            ]
        },
        {
            "no": "II",
            "baslik": "Bitkisel Ürünler",
            "fasillar": [
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14"
            ]
        },
        {
            "no": "III",
            "baslik": "Hayvansal ve Bitkisel Katı ve Sıvı Yağlar",
            "fasillar": [
                "15"
            ]
        },
        {
            "no": "IV",
            "baslik": "Gıda Sanayii Müstahzarları; Meşrubat, Alkollü İçkiler ve Sirkeler; Tütün",
            "fasillar": [
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24"
            ]
        },
        {
            "no": "V",
            "baslik": "Mineral Maddeler",
            "fasillar": [
                "25",
                "26",
                "27"
            ]
        },
        {
            "no": "VI",
            "baslik": "Kimya Sanayii ve Buna Bağlı Sanayi Ürünleri",
            "fasillar": [
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38"
            ]
        },
        {
            "no": "VII",
            "baslik": "Plastikler ve Mamulleri; Kauçuk ve Mamulleri",
            "fasillar": [
                "39",
                "40"
            ]
        },
        {
            "no": "VIII",
            "baslik": "Ham Postlar ve Deriler, Köseleler, Kürkler ve Bu Maddelerden Mamul Eşya",
            "fasillar": [
                "41",
                "42",
                "43"
            ]
        },
        {
            "no": "IX",
            "baslik": "Ağaç ve Ahşap Eşya; Odun Kömürü; Mantar ve Mantardan Eşya; Sepetçi ve Hasır Eşya",
            "fasillar": [
                "44",
                "45",
                "46"
            ]
        },
        {
            "no": "X",
            "baslik": "Odun veya Diğer Lifli Selülozik Maddelerin Hamurları; Kağıt veya Karton",
            "fasillar": [
                "47",
                "48",
                "49"
            ]
        },
        {
            "no": "XI",
            "baslik": "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya (Tekstil)",
            "fasillar": [
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "58",
                "59",
                "60",
                "61",
                "62",
                "63"
            ]
        },
        {
            "no": "XII",
            "baslik": "Ayakkabılar, Başlıklar, Şemsiyeler, Bastonlar; Hazırlanmış Tüyler",
            "fasillar": [
                "64",
                "65",
                "66",
                "67"
            ]
        },
        {
            "no": "XIII",
            "baslik": "Taş, Alçı, Çimento, Asbest, Mika veya Benzeri Maddelerden Eşya; Seramik; Cam",
            "fasillar": [
                "68",
                "69",
                "70"
            ]
        },
        {
            "no": "XIV",
            "baslik": "Tabii veya Kültür İnciler, Kıymetli Taşlar, Kıymetli Metaller ve Taklit Mücevher",
            "fasillar": [
                "71"
            ]
        },
        {
            "no": "XV",
            "baslik": "Adi Metaller ve Adi Metallerden Eşya (Demir-Çelik, Bakır, Alüminyum)",
            "fasillar": [
                "72",
                "73",
                "74",
                "75",
                "76",
                "77",
                "78",
                "79",
                "80",
                "81",
                "82",
                "83"
            ]
        },
        {
            "no": "XVI",
            "baslik": "Makinalar ve Mekanik Cihazlar; Elektrik Malzemeleri; Ses ve Görüntü Kaydediciler",
            "fasillar": [
                "84",
                "85"
            ]
        },
        {
            "no": "XVII",
            "baslik": "Nakil Vasıtaları (Kara, Hava, Deniz Taşıtları)",
            "fasillar": [
                "86",
                "87",
                "88",
                "89"
            ]
        },
        {
            "no": "XVIII",
            "baslik": "Optik, Fotoğraf, Sinema, Ölçü, Kontrol, Tıbbi veya Cerrahi Alet ve Cihazlar; Saatler; Müzik Aletleri",
            "fasillar": [
                "90",
                "91",
                "92"
            ]
        },
        {
            "no": "XIX",
            "baslik": "Silahlar ve Mühimmat; Bunların Aksam, Parça ve Aksesuarları",
            "fasillar": [
                "93"
            ]
        },
        {
            "no": "XX",
            "baslik": "Muhtelif Mamul Eşya (Mobilyalar, Aydınlatma, Oyuncaklar, Prefabrik Yapılar)",
            "fasillar": [
                "94",
                "95",
                "96"
            ]
        },
        {
            "no": "XXI",
            "baslik": "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar",
            "fasillar": [
                "97"
            ]
        }
    ],
    "idareler": [
        {
            "kod": "340100",
            "ad": "Muratbey Gümrük Müdürlüğü",
            "bolge": "İstanbul Gümrük ve Dış Ticaret Bölge Müdürlüğü",
            "sehir": "İstanbul (Avrupa)",
            "tip": "Kara & İthalat \/ İhracat",
            "ihtisas": "Genel Eşya, Tekstil, Otomotiv Yedek Parça",
            "telefon": "+90 (212) 867 15 00",
            "adres": "Muratbey Mah. Çatalca Yolu Cad. No:11 Çatalca \/ İstanbul"
        },
        {
            "kod": "340200",
            "ad": "Erenköy Gümrük Müdürlüğü",
            "bolge": "İstanbul Gümrük ve Dış Ticaret Bölge Müdürlüğü",
            "sehir": "İstanbul (Anadolu)",
            "tip": "Kara & İthalat \/ İhracat",
            "ihtisas": "Genel Eşya, Makine, Kimyevi Maddeler",
            "telefon": "+90 (216) 540 85 00",
            "adres": "Ferhatpaşa Mah. Samandıra Cad. Ataşehir \/ İstanbul"
        },
        {
            "kod": "340300",
            "ad": "Ambarlı Gümrük Müdürlüğü",
            "bolge": "İstanbul Gümrük ve Dış Ticaret Bölge Müdürlüğü",
            "sehir": "İstanbul (Avrupa)",
            "tip": "Deniz Limanı \/ Konteyner",
            "ihtisas": "Konteyner Taşımacılığı, Mermer, Demir-Çelik İhtisas",
            "telefon": "+90 (212) 875 27 00",
            "adres": "Marmara Mah. Liman Cad. Kumport \/ Marport Liman Sahası Beylikdüzü \/ İstanbul"
        },
        {
            "kod": "340400",
            "ad": "İstanbul Havalimanı Kargo Gümrük Md.",
            "bolge": "İstanbul Gümrük ve Dış Ticaret Bölge Müdürlüğü",
            "sehir": "İstanbul",
            "tip": "Hava Kargo & Express",
            "ihtisas": "Hızlı Kargo, Değerli Madenler, İlaç & Medikal, Canlı Hayvan",
            "telefon": "+90 (212) 463 30 00",
            "adres": "Tayakadın Mah. Terminal Cad. Kargo Şehri Arnavutköy \/ İstanbul"
        },
        {
            "kod": "340500",
            "ad": "Sabiha Gökçen Havalimanı Gümrük Md.",
            "bolge": "İstanbul Gümrük ve Dış Ticaret Bölge Müdürlüğü",
            "sehir": "İstanbul (Anadolu)",
            "tip": "Hava Kargo & Yolcu",
            "ihtisas": "Express Kurye, Genel Hava Kargo, Havacılık Parçaları",
            "telefon": "+90 (216) 588 88 00",
            "adres": "Sanayi Mah. Sabiha Gökçen Havalimanı Kargo Terminali Pendik \/ İstanbul"
        },
        {
            "kod": "220100",
            "ad": "Kapıkule Gümrük Müdürlüğü",
            "bolge": "Trakya Gümrük ve Dış Ticaret Bölge Müdürlüğü",
            "sehir": "Edirne",
            "tip": "Kara Hudut Kapısı \/ TIR & Yolcu",
            "ihtisas": "Uluslararası Karayolu Transit, TIR Karnesi, Genel İthalat\/İhracat",
            "telefon": "+90 (284) 238 24 00",
            "adres": "Kapıkule Sınır Kapısı Mülki İdare Binası Merkez \/ Edirne"
        },
        {
            "kod": "410100",
            "ad": "Dilovası Gümrük Müdürlüğü",
            "bolge": "Doğu Marmara Gümrük ve Dış Ticaret Bölge Md.",
            "sehir": "Kocaeli",
            "tip": "Deniz & Sanayi Limanı",
            "ihtisas": "Kimya İhtisas, Sıvı Yük, Otomotiv, Ağır Sanayi",
            "telefon": "+90 (262) 754 85 00",
            "adres": "Cumhuriyet Mah. Liman Cad. No:4 Dilovası \/ Kocaeli"
        },
        {
            "kod": "330100",
            "ad": "Mersin Gümrük Müdürlüğü",
            "bolge": "Orta Akdeniz Gümrük ve Dış Ticaret Bölge Md.",
            "sehir": "Mersin",
            "tip": "Uluslararası Deniz Konteyner Limanı",
            "ihtisas": "Narenciye, Bakliyat, Transit Ortadoğu Taşımaları, Serbest Bölge",
            "telefon": "+90 (324) 238 40 00",
            "adres": "İsmet İnönü Bulvarı Mersin Liman Sahası Akdeniz \/ Mersin"
        },
        {
            "kod": "350100",
            "ad": "İzmir Gümrük Müdürlüğü",
            "bolge": "Ege Gümrük ve Dış Ticaret Bölge Müdürlüğü",
            "sehir": "İzmir",
            "tip": "Deniz Limanı \/ Alsancak",
            "ihtisas": "Tarım Ürünleri, Kuru Meyve, Tekstil, Mermer",
            "telefon": "+90 (232) 463 80 00",
            "adres": "Atatürk Cad. No:388 Alsancak \/ İzmir"
        },
        {
            "kod": "160100",
            "ad": "Gemlik Gümrük Müdürlüğü",
            "bolge": "Uludağ Gümrük ve Dış Ticaret Bölge Müdürlüğü",
            "sehir": "Bursa",
            "tip": "Deniz Limanı & Otomotiv Hub",
            "ihtisas": "Otomotiv İhtisas, Maden, Çimento, RORO Taşımacılığı",
            "telefon": "+90 (224) 524 85 00",
            "adres": "Ata Mah. Liman Cad. No:20 Gemlik \/ Bursa"
        },
        {
            "kod": "060100",
            "ad": "Ankara Gümrük Müdürlüğü",
            "bolge": "Orta Anadolu Gümrük ve Dış Ticaret Bölge Md.",
            "sehir": "Ankara",
            "tip": "İç Gümrük & Lojistik Üs",
            "ihtisas": "Savunma Sanayii, Medikal, Kamu Kurum İthalatları",
            "telefon": "+90 (312) 815 48 00",
            "adres": "Kazan Ankara Lojistik Üssü F Blok Kahramankazan \/ Ankara"
        },
        {
            "kod": "220200",
            "ad": "Hamzabeyli Gümrük Müdürlüğü",
            "bolge": "Trakya Gümrük ve Dış Ticaret Bölge Müdürlüğü",
            "sehir": "Edirne",
            "tip": "Kara Hudut Kapısı \/ Bulgaristan",
            "ihtisas": "Karayolu TIR Transit & İhracat Taşımaları",
            "telefon": "+90 (284) 588 50 00",
            "adres": "Hamzabeyli Köyü Lalapaşa \/ Edirne"
        }
    ],
    "sozluk": [
        {
            "terim": "GÇB (Gümrük Çıkış Beyannamesi)",
            "kategori": "Beyanname & Rejim",
            "tanim": "İhraç edilecek eşyanın cinsi, miktarı, kıymeti ve gideceği ülkeyi belirten, gümrük idaresine tescil ettirilen resmî dış ticaret belgesidir.",
            "aciklama": "İhraç edilecek eşyanın cinsi, miktarı, kıymeti ve gideceği ülkeyi belirten, gümrük idaresine tescil ettirilen resmî dış ticaret belgesidir.",
            "ornek": ""
        },
        {
            "terim": "GİB \/ Gümrük Giriş Beyannamesi",
            "kategori": "Beyanname & Rejim",
            "tanim": "Serbest dolaşıma girecek ithal eşyasının vergilendirme unsurlarını ve tarife (GTİP) pozisyonunu gösteren yasal ithalat beyan evrakıdır.",
            "aciklama": "Serbest dolaşıma girecek ithal eşyasının vergilendirme unsurlarını ve tarife (GTİP) pozisyonunu gösteren yasal ithalat beyan evrakıdır.",
            "ornek": ""
        },
        {
            "terim": "VEDOP (Vergi Dairesi Otomasyonu)",
            "kategori": "Vergi & Teşvik",
            "tanim": "İhracat beyannamelerinin gümrükteki fiilî çıkış (intaç) tarihinin elektronik olarak Gelir İdaresi Başkanlığı sistemine aktarılması ve KDV iadesi hak ediş sürecidir.",
            "aciklama": "İhracat beyannamelerinin gümrükteki fiilî çıkış (intaç) tarihinin elektronik olarak Gelir İdaresi Başkanlığı sistemine aktarılması ve KDV iadesi hak ediş sürecidir.",
            "ornek": ""
        },
        {
            "terim": "İntaç Tarihi",
            "kategori": "İhracat Süreci",
            "tanim": "İhraç eşyasının Türkiye Gümrük Bölgesi sınırını fiilen terk ettiği veya serbest bölgeye girdiği kesinleşme tarihidir.",
            "aciklama": "İhraç eşyasının Türkiye Gümrük Bölgesi sınırını fiilen terk ettiği veya serbest bölgeye girdiği kesinleşme tarihidir.",
            "ornek": ""
        },
        {
            "terim": "GTİP (Gümrük Tarife İstatistik Pozisyonu)",
            "kategori": "Tarife & Mevzuat",
            "tanim": "Türkiye'de eşyaların sınıflandırılması ve gümrük vergilerinin tespiti için kullanılan 12 haneli standart uluslararası kod sistemidir.",
            "aciklama": "Türkiye'de eşyaların sınıflandırılması ve gümrük vergilerinin tespiti için kullanılan 12 haneli standart uluslararası kod sistemidir.",
            "ornek": ""
        },
        {
            "terim": "Kırmızı Hat (Fiziki Muayene)",
            "kategori": "Muayene Hatları",
            "tanim": "Eşyanın fiziki olarak muayene memuru ve eksper tarafından açılarak incelendiği ve belgeleriyle karşılaştırıldığı en kapsamlı gümrük kontrol hattıdır.",
            "aciklama": "Eşyanın fiziki olarak muayene memuru ve eksper tarafından açılarak incelendiği ve belgeleriyle karşılaştırıldığı en kapsamlı gümrük kontrol hattıdır.",
            "ornek": ""
        },
        {
            "terim": "Sarı Hat (Belge Kontrolü)",
            "kategori": "Muayene Hatları",
            "tanim": "Eşyanın fiziki muayenesine gerek duyulmaksızın, beyanname ve ekli belgelerin (fatura, konşimento, ATR) doğruluğunun incelendiği kontrol hattıdır.",
            "aciklama": "Eşyanın fiziki muayenesine gerek duyulmaksızın, beyanname ve ekli belgelerin (fatura, konşimento, ATR) doğruluğunun incelendiği kontrol hattıdır.",
            "ornek": ""
        },
        {
            "terim": "Mavi Hat (Sonradan Kontrol)",
            "kategori": "Muayene Hatları",
            "tanim": "Yetkilendirilmiş Yükümlü Statüsü (YYS) veya OKSB sahibi güvenilir firmaların eşyasının fiziki muayeneye tabi tutulmadan doğrudan teslim alındığı, denetimin sonradan firma kayıtlarında yapıldığı kolaylaştırılmış hattır.",
            "aciklama": "Yetkilendirilmiş Yükümlü Statüsü (YYS) veya OKSB sahibi güvenilir firmaların eşyasının fiziki muayeneye tabi tutulmadan doğrudan teslim alındığı, denetimin sonradan firma kayıtlarında yapıldığı kolaylaştırılmış hattır.",
            "ornek": ""
        },
        {
            "terim": "Yeşil Hat (Hatsız Geçiş)",
            "kategori": "Muayene Hatları",
            "tanim": "Eşyanın ne fiziki muayeneye ne de belge kontrolüne tabi tutulmadan doğrudan gümrükten çekilebildiği en hızlı işlem hattıdır.",
            "aciklama": "Eşyanın ne fiziki muayeneye ne de belge kontrolüne tabi tutulmadan doğrudan gümrükten çekilebildiği en hızlı işlem hattıdır.",
            "ornek": ""
        },
        {
            "terim": "YYS (Yetkilendirilmiş Yükümlü Statüsü)",
            "kategori": "Kolaylaştırma",
            "tanim": "Gümrük yükümlülüklerini eksiksiz yerine getiren, mali yeterliliği ve bilgi güvenliği tescilli firmalara yeşil hat, yerinde gümrükleme ve eksik belgeyle beyan hakkı tanıyan uluslararası geçerli AEO statüsüdür.",
            "aciklama": "Gümrük yükümlülüklerini eksiksiz yerine getiren, mali yeterliliği ve bilgi güvenliği tescilli firmalara yeşil hat, yerinde gümrükleme ve eksik belgeyle beyan hakkı tanıyan uluslararası geçerli AEO statüsüdür.",
            "ornek": ""
        },
        {
            "terim": "A.TR Dolaşım Belgesi",
            "kategori": "Menşe & Belgeler",
            "tanim": "Türkiye ile Avrupa Birliği arasındaki Gümrük Birliği kapsamında serbest dolaşımda bulunan sanayi ürünlerinin gümrük vergisinden muaf olarak ithal edilmesini sağlayan belgedir.",
            "aciklama": "Türkiye ile Avrupa Birliği arasındaki Gümrük Birliği kapsamında serbest dolaşımda bulunan sanayi ürünlerinin gümrük vergisinden muaf olarak ithal edilmesini sağlayan belgedir.",
            "ornek": ""
        },
        {
            "terim": "EUR.1 \/ EUR-MED Belgesi",
            "kategori": "Menşe & Belgeler",
            "tanim": "Serbest Ticaret Anlaşması (STA) imzalanmış ülkelerle yapılan ticarette tercihli menşe statüsünü kanıtlayarak indirimli veya sıfır gümrük vergisi sağlayan belgedir.",
            "aciklama": "Serbest Ticaret Anlaşması (STA) imzalanmış ülkelerle yapılan ticarette tercihli menşe statüsünü kanıtlayarak indirimli veya sıfır gümrük vergisi sağlayan belgedir.",
            "ornek": ""
        },
        {
            "terim": "Konşimento (Bill of Lading - B\/L)",
            "kategori": "Taşıma & Lojistik",
            "tanim": "Taşıyıcı tarafından düzenlenen, eşyanın teslim alındığını ve belirlenen varış limanında hak sahibine teslim edileceğini taahhüt eden kıymetli evrak niteliğindeki taşıma senedidir.",
            "aciklama": "Taşıyıcı tarafından düzenlenen, eşyanın teslim alındığını ve belirlenen varış limanında hak sahibine teslim edileceğini taahhüt eden kıymetli evrak niteliğindeki taşıma senedidir.",
            "ornek": ""
        },
        {
            "terim": "Ordino (Teslim Emri)",
            "kategori": "Taşıma & Lojistik",
            "tanim": "Gemi acentesi veya nakliyeci tarafından konşimento aslı karşılığında alıcıya verilen ve malın gümrüklü sahadan \/ antrepodan çekilmesine yetki veren teslim belgesidir.",
            "aciklama": "Gemi acentesi veya nakliyeci tarafından konşimento aslı karşılığında alıcıya verilen ve malın gümrüklü sahadan \/ antrepodan çekilmesine yetki veren teslim belgesidir.",
            "ornek": ""
        },
        {
            "terim": "KKDF (Kaynak Kullanımını Destekleme Fonu)",
            "kategori": "Vergi & Maliyet",
            "tanim": "Vadeli ithalat işlemlerinde (mal mukabili, kabul kredili, vadeli akreditif) ithalat tutarı üzerinden %6 oranında tahsil edilen fondur. Peşin ödemede muafiyet uygulanır.",
            "aciklama": "Vadeli ithalat işlemlerinde (mal mukabili, kabul kredili, vadeli akreditif) ithalat tutarı üzerinden %6 oranında tahsil edilen fondur. Peşin ödemede muafiyet uygulanır.",
            "ornek": ""
        },
        {
            "terim": "Süpanbar (Taşıt Üstü Muayene \/ Supalan)",
            "kategori": "Saha Operasyonu",
            "tanim": "Antrepoya boşaltılması zaman alıcı, hassas veya dökme eşyanın gümrük sahasında taşıt üzerindeyken muayene edilerek doğrudan serbest dolaşıma sokulması işlemidir.",
            "aciklama": "Antrepoya boşaltılması zaman alıcı, hassas veya dökme eşyanın gümrük sahasında taşıt üzerindeyken muayene edilerek doğrudan serbest dolaşıma sokulması işlemidir.",
            "ornek": ""
        },
        {
            "terim": "Küşat Hakkı",
            "kategori": "Hak & Usul",
            "tanim": "Beyanname tescil edilmeden önce ithalatçının veya yetkili gümrük müşavirinin gümrük gözetiminde eşyayı tartma, numune alma ve kontrol etme yasal hakkıdır.",
            "aciklama": "Beyanname tescil edilmeden önce ithalatçının veya yetkili gümrük müşavirinin gümrük gözetiminde eşyayı tartma, numune alma ve kontrol etme yasal hakkıdır.",
            "ornek": ""
        },
        {
            "terim": "TAREKS (Dış Ticarette Risk Esaslı Denetim)",
            "kategori": "Denetim & Standart",
            "tanim": "Ürün güvenliği, teknik düzenlemeler, CE işareti ve insan sağlığına uygunluğun Ticaret Bakanlığı tarafından elektronik ortamda denetlendiği sistemdir.",
            "aciklama": "Ürün güvenliği, teknik düzenlemeler, CE işareti ve insan sağlığına uygunluğun Ticaret Bakanlığı tarafından elektronik ortamda denetlendiği sistemdir.",
            "ornek": ""
        },
        {
            "terim": "Antrepo Rejimi (7100)",
            "kategori": "Beyanname & Rejim",
            "tanim": "İthal eşyasının gümrük vergileri ve ticaret politikası önlemlerine tabi tutulmaksızın gümrük gözetimi altındaki antrepolarda süresiz olarak depolanmasını sağlayan rejimdir.",
            "aciklama": "İthal eşyasının gümrük vergileri ve ticaret politikası önlemlerine tabi tutulmaksızın gümrük gözetimi altındaki antrepolarda süresiz olarak depolanmasını sağlayan rejimdir.",
            "ornek": ""
        },
        {
            "terim": "Dahilde İşleme Rejimi (DİR - 5100)",
            "kategori": "Teşvik & Üretim",
            "tanim": "İhraç edilecek ürünlerin üretiminde kullanılan hammadde ve yardımcı maddelerin gümrük vergisi ve KDV ödenmeksizin teminatla ithal edilmesini sağlayan ekonomik etkili rejimdir.",
            "aciklama": "İhraç edilecek ürünlerin üretiminde kullanılan hammadde ve yardımcı maddelerin gümrük vergisi ve KDV ödenmeksizin teminatla ithal edilmesini sağlayan ekonomik etkili rejimdir.",
            "ornek": ""
        }
    ],
    "sirkulerler": [
        {
            "id": "2",
            "baslik": "İhracatta Fiilî Çıkış (VEDOP) ve KDV İadesi Bildirim Süreçleri",
            "sayi_no": "2026\/02",
            "kategori": "İhracat & Vergi",
            "tarih": "28.01.2026",
            "ozet": "Gümrük beyannamelerinin kapanış (intaç) tarihi ile Vergi Daireleri Otomasyon Projesi (VEDOP) entegrasyonuna ilişkin kritik hatırlatmalar ve yasal takvim.",
            "icerik": "İhracatçı firmalarımızın KDV iade taleplerinde mağduriyet yaşamaması adına, fiilî ihraç tarihi BİLGE ve VEDOP üzerinden titizlikle sorgulanmalıdır.\n\nDikkat Edilmesi Gerekenler:\n- Beyannamenin tescil tarihi değil, gümrük müdürlüğünce onaylanan 'Kapanış (İntaç) Tarihi' vergilendirme dönemi için esas alınır.\n- Müşavirliğimizce her ayın 11'ine kadar teslim edilen VEDOP listeleri ile Gelir İdaresi Başkanlığı sistemi arasında birebir mutabakat sağlanması önerilmektedir.",
            "pdf_url": "",
            "created_at": "2026-11-17 13:17:30"
        },
        {
            "id": "6",
            "baslik": "Gümrük Tarife Cetveli İzahnamesi 84. ve 85. Fasıllar Açıklama Notları Değişikliği (Makine ve Elektronik)",
            "sayi_no": "2026\/06",
            "kategori": "İthalat & Tarife",
            "tarih": "22.03.2026",
            "ozet": "Endüstriyel robotlar, elektrikli araç bataryaları ve yapay zeka işlemcili donanımların GTİP sınıflandırma kriterleri ve bağlayıcı tarife bilgileri yenilendi.",
            "icerik": "Gümrük ve Dış Ticaret Bölge Müdürlüklerine gönderilen talimat ile ileri teknoloji ürünlerinin tarife tespiti yeniden düzenlenmiştir.\n\nÖnemli Noktalar:\n- Otonom robotik kollar ve sensörlü montaj makineleri 84.79 faslı altında ayrı alt açılımlarla izlenecektir.\n- Lityum-iyon batarya modülleri için teknik bülten ve üretici test sertifikası ibrazı zorunlu kılınmıştır.\n- İthalat işlemlerinde GTİP tereddüdü yaşanmaması adına Müşavirliğimiz Bağlayıcı Tarife Bilgisi (BTB) departmanından ön inceleme talep edilmesi tavsiye olunur.",
            "pdf_url": "",
            "created_at": "2026-11-17 14:57:21"
        },
        {
            "id": "8",
            "baslik": "YYS Sahibi Firmalar İçin İthalatta Yerinde Gümrükleme (İYG) Yetkisi Başvuru Kriterleri Tebliği",
            "sayi_no": "2026\/08",
            "kategori": "YYS & Kolaylaştırma",
            "tarih": "18.04.2026",
            "ozet": "Yetkilendirilmiş Yükümlü Statüsü (YYS) sahiplerinin eşyayı doğrudan fabrika sahasına sevk ederek gümrük işlemlerini tesislerinde tamamlama kolaylığı genişletildi.",
            "icerik": "İthalatta Yerinde Gümrükleme (İYG) yetkisi başvuru şartları kolaylaştırılmış olup, yıllık asgari dış ticaret hacmi ve güvenilirlik kriterleri revize edilmiştir.\n\nMüşavirliğimizce Sunulan Hizmet:\nYYS Danışmanlık Departmanımız, firmanızın tesis güvenlik standartlarını ve İYG izin dosyasını anahtar teslim hazırlamaktadır.",
            "pdf_url": "",
            "created_at": "2026-11-17 14:57:21"
        },
        {
            "id": "9",
            "baslik": "Avrupa Birliği Karbon Sınırda Düzenleme Mekanizması (CBAM \/ SKDM) Gümrük Beyan Zorunlulukları",
            "sayi_no": "2026\/09",
            "kategori": "İthalat & Tarife",
            "tarih": "17.11.2026",
            "ozet": "Demir-çelik, alüminyum, çimento ve gübre sektörlerinde AB ülkelerine yapılan ihracatta emisyon beyanı ve gümrük doğrulama süreçleri başladı.",
            "icerik": "Avrupa Birliği Yeşil Mutabakatı kapsamında sınırda karbon düzenlemesine tabi ürünlerin gümrük çıkış beyannamelerinde emisyon raporu referans numarasının beyan edilmesi zorunlu kılınmıştır.\n\nİhracatçılarımızın cezai yaptırımla karşılaşmaması adına, üretici tesis emisyon değerlerinin akredite kuruluşlarca onaylanmış olması gerekmektedir.",
            "pdf_url": "",
            "created_at": "2026-11-17 14:57:21"
        },
        {
            "id": "10",
            "baslik": "Gümrük Tarife ve Vergi Uygulamaları Güncelleme Tebliği (2026\/10)",
            "sayi_no": "2026\/10",
            "kategori": "İthalat & Tarife",
            "tarih": "17.11.2026",
            "ozet": "Resmî Gazete'de yayımlanan güncel ithalat rejimi ve tarife düzenlemesine ilişkin en son mevzuat değişiklikleri yürürlüğe girmiştir.",
            "icerik": "T.C. Ticaret Bakanlığı tarafından yayımlanan son karar ile ithalatta haksız rekabetin önlenmesi, gözetim ve menşe kurallarına ilişkin maddeler güncellenmiştir.\n\nMüşavirliğimiz operasyon ve mevzuat masası tarafından tüm ithalatçı ve ihracatçılarımız bilgilendirilmektedir.",
            "pdf_url": "",
            "created_at": "2026-11-17 14:57:22"
        },
        {
            "id": "5",
            "baslik": "İhracatta Menşe ve Dolaşım Belgelerinin (EUR.1 \/ MED \/ FORM A) Elektronik Onayına İlişkin Genelge",
            "sayi_no": "2026\/05",
            "kategori": "İhracat & Vergi",
            "tarih": "15.03.2026",
            "ozet": "Menşe Şahadetnameleri ve EUR.1\/EUR-MED dolaşım belgelerinin MEDOS üzerinden elektronik imzalı düzenlenmesi ve gümrük vize prosedürleri güncellendi.",
            "icerik": "T.C. Ticaret Bakanlığı Gümrükler Genel Müdürlüğü tarafından yayımlanan 2026\/05 sayılı genelge ile menşe ispat belgelerinin elektronik ortamda düzenlenmesi ve gümrük idarelerince vizelenmesi zorunlu hale getirilmiştir.\n\nÖnemli Değişiklikler:\n1. Islak imzalı ve fiziki mühürlü EUR.1 belgelerinin yerine karekodlu ve e-imzalı belgeler geçerli olacaktır.\n2. İhracatçı ve gümrük müşavirlerinin MEDOS sistemi üzerinden onay süreçlerini tam zamanlı takip etmesi gerekmektedir.\n3. Sonradan kontrol (INF.4) taleplerinde elektronik doğrulama kodu esas alınacaktır.",
            "pdf_url": "",
            "created_at": "2026-11-17 14:57:21"
        },
        {
            "id": "1",
            "baslik": "2026 İthalat Rejimi Kararı ve İlave Gümrük Vergileri (İGV) Güncellemesi",
            "sayi_no": "2026\/01",
            "kategori": "İthalat & Tarife",
            "tarih": "15.01.2026",
            "ozet": "Resmî Gazete mükerrer sayısında yayımlanan İthalat Rejimi Kararına Ek Karar ile sanayi ürünleri, tüketim malları ve tekstil hammaddelerinde İGV oranları yeniden düzenlenmiştir.",
            "icerik": "T.C. Ticaret Bakanlığı tarafından yayımlanan karar uyarınca, yerli üreticinin korunması amacıyla bazı sanayi ve elektronik fasıllarında İlave Gümrük Vergisi (İGV) oranları %5 ila %20 arasında revize edilmiştir.\n\nÖne Çıkan Hususlar:\n1. 84. ve 85. fasıllardaki belirli makine ve aksamlarında tercihli menşe ispat belgesi (EUR.1 \/ ATR) ibraz edilmediği takdirde İGV tahakkuk ettirilecektir.\n2. AB ve STA ülkeleri menşeli eşyalarda menşe kümülasyonu kurallarına dikkat edilmelidir.\n3. Muafiyet ve istisna kapsamındaki Dahilde İşleme İzin Belgesi (DİİB) sahipleri için teminat hesaplamaları güncellenmiştir.",
            "pdf_url": "",
            "created_at": "2026-11-17 13:17:30"
        },
        {
            "id": "3",
            "baslik": "Yetkilendirilmiş Yükümlü Statüsü (YYS) 2026 Yıllık Faaliyet Raporu Tebliği",
            "sayi_no": "2026\/03",
            "kategori": "YYS & Kolaylaştırma",
            "tarih": "10.02.2026",
            "ozet": "YYS belgesine sahip dış ticaret şirketlerinin yıllık faaliyet raporu hazırlama ve gümrük idaresine sunma takvimi yayımlandı.",
            "icerik": "Yetkilendirilmiş Yükümlü Statüsü (YYS) sahibi firmaların, güvenilirlik ve emniyet standartlarının devamlılığını belgelemek üzere hazırlamakla yükümlü olduğu Yıllık Faaliyet Raporları için son teslim tarihi yaklaşmaktadır.\n\nMüşavirliğimiz YYS Danışmanlık Departmanı, tesis güvenlik denetimleri ve raporlama sürecinde tam destek sunmaktadır.",
            "pdf_url": "",
            "created_at": "2026-11-17 13:17:30"
        },
        {
            "id": "7",
            "baslik": "Dahilde İşleme Rejimi (DİR) Kapsamında Döviz Kullanım Oranları ve İkincil İşlem Görmüş Ürün Bildirimleri",
            "sayi_no": "2026\/07",
            "kategori": "Kambiyo & Mevzuat",
            "tarih": "05.04.2026",
            "ozet": "DİİB sahibi imalatçı-ihracatçıların hammadde ithalatında uygulanan döviz kullanım oranları (%80) ve fire-ikincil ürün beyan esasları açıklandı.",
            "icerik": "Dahilde İşleme İzin Belgesi (DİİB) kapsamında gerçekleştirilen ithalat ve ihracat operasyonlarında kapatma müracaatlarının hızlandırılması amacıyla yeni kılavuz yürürlüğe girdi.\n\nUygulama Esasları:\n- Belge kapatma müracaatlarında fatura ve gümrük beyannamelerinin kapatma listesine aktarımı elektronik ortamda eşleştirilecektir.\n- İkincil işlem görmüş ürünlerin serbest dolaşıma giriş rejimine tabi tutulması halinde tecil-terkin işlemleri güncellenmiştir.",
            "pdf_url": "",
            "created_at": "2026-11-17 14:57:21"
        },
        {
            "id": "4",
            "baslik": "Kaynak Kullanımını Destekleme Fonu (KKDF) ve Vadeli İthalat Düzenlemeleri",
            "sayi_no": "2026\/04",
            "kategori": "Kambiyo & Mevzuat",
            "tarih": "02.03.2026",
            "ozet": "Vadeli ithalat işlemlerinde uygulanan %6 KKDF kesintisi ve peşin ödeme transfer bildirim formlarında dikkat edilecek kurallar.",
            "icerik": "Kabul kredili, vadeli akreditif ve mal mukabili ödeme şekillerinde gümrük beyannamesi tescil edilmeden önce transferin gerçekleştirildiğini kanıtlayan banka onaylı transfer bildirim formunun gümrük idaresine ibraz edilmesi zorunludur. Aksi halde CIF matrah üzerinden %6 oranında KKDF tahakkuku gerçekleşmektedir.",
            "pdf_url": "",
            "created_at": "2026-11-17 13:17:30"
        }
    ],
    "beyannameler": [
        {
            "id": 1,
            "tescil_no": "2634IM00482910",
            "gtip_kodu": "8471.30.00.00.00",
            "gumruk_mudurlugu": "Ambarlı Gümrük Müdürlüğü",
            "rejim": "İthalat (4000)",
            "tarih": "2026-03-14",
            "asama": "gumruk_vergisi_odendi",
            "hat": "Sarı Hat",
            "fatura_tutari": "142.500,00 USD",
            "vergi_tutari": "418.250,00 ₺",
            "firma_adi": "Demo Müşteri Ltd. Şti.",
            "esya_cinsi": "Taşınabilir Otomatik Bilgi İşlem Makinaları (Dizüstü Bilgisayar)",
            "kap_adedi": 120,
            "kilo": 480
        },
        {
            "id": 2,
            "tescil_no": "2634EX00112233",
            "gtip_kodu": "8418.10.20.00.00",
            "gumruk_mudurlugu": "Muratbey Gümrük Müdürlüğü",
            "rejim": "İhracat (1000)",
            "tarih": "2026-03-12",
            "asama": "kapandi",
            "hat": "Yeşil Hat",
            "fatura_tutari": "86.400,00 EUR",
            "vergi_tutari": "0,00 ₺",
            "firma_adi": "Demo Müşteri Ltd. Şti.",
            "esya_cinsi": "Kombine Soğutucu-Dondurucular",
            "kap_adedi": 64,
            "kilo": 5200
        },
        {
            "id": 3,
            "tescil_no": "2634IM00489955",
            "gtip_kodu": "0901.21.00.00.00",
            "gumruk_mudurlugu": "Erenköy Gümrük Müdürlüğü",
            "rejim": "İthalat (4000)",
            "tarih": "2026-03-16",
            "asama": "muayene_asamasinda",
            "hat": "Kırmızı Hat",
            "fatura_tutari": "32.000,00 USD",
            "vergi_tutari": "115.800,00 ₺",
            "firma_adi": "Borusan Lojistik & Dış Ticaret A.Ş.",
            "esya_cinsi": "Kavrulmuş Kahve Çekirdeği (Espresso Roast)",
            "kap_adedi": 200,
            "kilo": 4000
        },
        {
            "id": 4,
            "tescil_no": "2634IM00501122",
            "gtip_kodu": "8703.80.00.00.00",
            "gumruk_mudurlugu": "Derince Gümrük Müdürlüğü",
            "rejim": "İthalat (4000)",
            "tarih": "2026-03-17",
            "asama": "tescil_edildi",
            "hat": "Sarı Hat",
            "fatura_tutari": "280.000,00 EUR",
            "vergi_tutari": "1.450.000,00 ₺",
            "firma_adi": "Arçelik Global Tedarik A.Ş.",
            "esya_cinsi": "Sadece Elektrik Motorlu Binek Otomobiller (EV)",
            "kap_adedi": 8,
            "kilo": 16500
        }
    ],
    "musteriler": [
        {
            "id": 1,
            "firma_adi": "Demo Müşteri Ltd. Şti.",
            "vergi_no": "1234567890",
            "vergi_dairesi": "Kadıköy",
            "yetkili": "Ahmet Yılmaz",
            "telefon": "+90 (532) 111 22 33",
            "eposta": "musteri@demofirma.com",
            "durum": "Aktif",
            "bakiye": "0,00 ₺"
        },
        {
            "id": 2,
            "firma_adi": "Borusan Lojistik & Dış Ticaret A.Ş.",
            "vergi_no": "9876543210",
            "vergi_dairesi": "Marmara Kurumlar",
            "yetkili": "Mehmet Özkan",
            "telefon": "+90 (212) 393 00 00",
            "eposta": "gumruk@borusan.com",
            "durum": "Aktif",
            "bakiye": "14.250,00 ₺"
        },
        {
            "id": 3,
            "firma_adi": "Arçelik Global Tedarik A.Ş.",
            "vergi_no": "5544332211",
            "vergi_dairesi": "Boğaziçi",
            "yetkili": "Selin Kaya",
            "telefon": "+90 (216) 585 80 00",
            "eposta": "lojistik@arcelik.com",
            "durum": "Aktif",
            "bakiye": "0,00 ₺"
        },
        {
            "id": 4,
            "firma_adi": "Ekol Uluslararası Taşımacılık Ltd.",
            "vergi_no": "7788990011",
            "vergi_dairesi": "Kozyatağı",
            "yetkili": "Murat Şahin",
            "telefon": "+90 (216) 564 30 00",
            "eposta": "operasyon@ekol.com",
            "durum": "Aktif",
            "bakiye": "3.500,00 ₺"
        }
    ]
};
