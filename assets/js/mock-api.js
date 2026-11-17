/**
 * Quantum AI Gümrük Müşavirliği - Standalone Mock API Engine
 * Runs completely in-browser via localStorage without any server or database.
 * Author: Sinan Keskin (https://sinankeskin.com.tr)
 */

(function () {
    'use strict';

    // 1. Türkçe Karakter Normalizasyonu
    function trNormalize(str) {
        if (!str) return '';
        return str
            .toString()
            .replace(/İ/g, 'i')
            .replace(/I/g, 'i')
            .replace(/ı/g, 'i')
            .replace(/ğ/g, 'g')
            .replace(/Ğ/g, 'g')
            .replace(/ü/g, 'u')
            .replace(/Ü/g, 'u')
            .replace(/ş/g, 's')
            .replace(/Ş/g, 's')
            .replace(/ö/g, 'o')
            .replace(/Ö/g, 'o')
            .replace(/ç/g, 'c')
            .replace(/Ç/g, 'c')
            .toLowerCase()
            .trim();
    }

    // 2. LocalStorage Veri Yöneticisi
    const STORAGE_PREFIX = 'gumruk_demo_';

    function initStorage() {
        const initData = window.GUMRUK_INITIAL_DATA || {};

        if (!localStorage.getItem(STORAGE_PREFIX + 'initialized')) {
            localStorage.setItem(STORAGE_PREFIX + 'ayarlar', JSON.stringify(initData.ayarlar || {}));
            localStorage.setItem(STORAGE_PREFIX + 'gtip_list', JSON.stringify(initData.gtip_list || []));
            localStorage.setItem(STORAGE_PREFIX + 'gtip_fasillar', JSON.stringify(initData.gtip_fasillar || {}));
            localStorage.setItem(STORAGE_PREFIX + 'gtip_bolumler', JSON.stringify(initData.gtip_bolumler || []));
            localStorage.setItem(STORAGE_PREFIX + 'idareler', JSON.stringify(initData.idareler || []));
            localStorage.setItem(STORAGE_PREFIX + 'sozluk', JSON.stringify(initData.sozluk || []));
            localStorage.setItem(STORAGE_PREFIX + 'sirkulerler', JSON.stringify(initData.sirkulerler || []));
            localStorage.setItem(STORAGE_PREFIX + 'beyannameler', JSON.stringify(initData.beyannameler || []));
            localStorage.setItem(STORAGE_PREFIX + 'musteriler', JSON.stringify(initData.musteriler || []));
            localStorage.setItem(STORAGE_PREFIX + 'mesajlar', JSON.stringify([]));
            localStorage.setItem(STORAGE_PREFIX + 'teklifler', JSON.stringify([]));
            localStorage.setItem(STORAGE_PREFIX + 'odemeler', JSON.stringify([]));
            localStorage.setItem(STORAGE_PREFIX + 'initialized', 'true');
        }
    }

    function getData(key, fallback = []) {
        try {
            const val = localStorage.getItem(STORAGE_PREFIX + key);
            return val ? JSON.parse(val) : fallback;
        } catch (e) {
            return fallback;
        }
    }

    function setData(key, data) {
        try {
            localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data));
        } catch (e) {
            console.error('Storage write error for key ' + key, e);
        }
    }

    initStorage();

    // 3. Mock API Arayüzü
    window.gumrukApi = {
        trNormalize: trNormalize,

        getAyarlar: function () {
            return getData('ayarlar', {});
        },

        saveAyarlar: function (newAyarlar) {
            const current = getData('ayarlar', {});
            const updated = Object.assign({}, current, newAyarlar);
            setData('ayarlar', updated);
            return { success: true, ayarlar: updated };
        },

        // GTİP Tarife Arama
        searchGtip: function (sorgu = '', aramaTipi = 'kelime', fasilFiltre = '') {
            const list = getData('gtip_list', []);
            const fasillar = getData('gtip_fasillar', {});
            const q = trNormalize(sorgu);
            const qClean = q.replace(/[\.\s\-\/]/g, '');

            let sonuclar = [];

            for (let i = 0; i < list.length; i++) {
                const item = list[i];
                if (fasilFiltre && item.fasil !== fasilFiltre) {
                    continue;
                }

                const itemGtip = item.gtip || '';
                const itemGtipClean = itemGtip.replace(/[\.\s\-\/]/g, '');
                const itemTanim = trNormalize(item.tanim || '');
                const fasilAdi = fasillar[item.fasil] || ('Fasıl ' + item.fasil);
                const fasilTanim = trNormalize(fasilAdi);

                if (!q) {
                    sonuclar.push(Object.assign({}, item, { fasil_adi: fasilAdi, skor: 10 }));
                    continue;
                }

                let eslesme = false;
                let skor = 0;

                if (aramaTipi === 'gtip' || /^\d+$/.test(qClean)) {
                    if (itemGtipClean.indexOf(qClean) === 0) {
                        eslesme = true;
                        skor = 100;
                    } else if (itemGtipClean.indexOf(qClean) !== -1) {
                        eslesme = true;
                        skor = 80;
                    } else if (item.fasil === qClean) {
                        eslesme = true;
                        skor = 60;
                    }
                }

                if (!eslesme) {
                    const words = q.split(/\s+/).filter(Boolean);
                    let matchedWords = 0;

                    for (let w = 0; w < words.length; w++) {
                        const word = words[w];
                        if (itemTanim.indexOf(word) !== -1) {
                            matchedWords += 1;
                        } else if (fasilTanim.indexOf(word) !== -1) {
                            matchedWords += 0.5;
                        } else if (itemGtipClean.indexOf(word) !== -1) {
                            matchedWords += 0.8;
                        }
                    }

                    if (matchedWords > 0) {
                        eslesme = true;
                        skor = matchedWords * 20;
                    }
                }

                if (eslesme) {
                    sonuclar.push(Object.assign({}, item, { fasil_adi: fasilAdi, skor: skor }));
                }
            }

            sonuclar.sort((a, b) => b.skor - a.skor);
            return sonuclar;
        },

        // Gümrük İdareleri
        getIdareler: function (query = '', region = 'tumu') {
            const list = getData('idareler', []);
            const q = trNormalize(query);
            const reg = (region || 'tumu').toLowerCase();

            return list.filter(item => {
                const itemAd = trNormalize(item.ad);
                const itemSehir = trNormalize(item.sehir);
                const itemBolge = trNormalize(item.bolge);
                const itemKod = trNormalize(item.kod);
                const itemIhtisas = trNormalize(item.ihtisas);
                const itemTip = trNormalize(item.tip);

                const matchesQuery = !q || itemAd.includes(q) || itemSehir.includes(q) || itemBolge.includes(q) || itemKod.includes(q) || itemIhtisas.includes(q);

                let matchesRegion = true;
                if (reg === 'istanbul') {
                    matchesRegion = itemSehir.includes('istanbul') || itemAd.includes('istanbul') || itemBolge.includes('istanbul');
                } else if (reg === 'deniz') {
                    matchesRegion = itemTip.includes('deniz') || itemIhtisas.includes('liman') || itemIhtisas.includes('konteyner') || itemAd.includes('ambarli') || itemAd.includes('alsancak') || itemAd.includes('mersin') || itemAd.includes('gemlik');
                } else if (reg === 'kara') {
                    matchesRegion = itemTip.includes('kara') || itemTip.includes('hudut') || itemTip.includes('tir') || itemAd.includes('kapikule') || itemAd.includes('sarp') || itemAd.includes('habur') || itemAd.includes('hamzabeyli');
                }

                return matchesQuery && matchesRegion;
            });
        },

        // Sözlük
        getSozluk: function (query = '') {
            const list = getData('sozluk', []);
            const q = trNormalize(query);

            return list.filter(item => {
                const terim = trNormalize(item.terim);
                const tanim = trNormalize(item.tanim || item.aciklama);
                const kat = trNormalize(item.kategori);
                return !q || terim.includes(q) || tanim.includes(q) || kat.includes(q);
            });
        },

        // Sirkülerler
        getSirkulerler: function (category = 'tumu') {
            const list = getData('sirkulerler', []);
            const cat = (category || 'tumu').toLowerCase();

            return list.filter(s => {
                if (cat === 'tumu') return true;
                const sKat = trNormalize(s.kategori);
                if (cat === 'ithalat') return sKat.includes('ithalat') || sKat.includes('tarife');
                if (cat === 'ihracat') return sKat.includes('ihracat') || sKat.includes('vergi');
                if (cat === 'yys') return sKat.includes('yys') || sKat.includes('kolaylastirma');
                if (cat === 'kambiyo') return sKat.includes('kambiyo') || sKat.includes('mevzuat');
                return true;
            });
        },

        addSirkuler: function (sirkuler) {
            const list = getData('sirkulerler', []);
            const newSirkuler = {
                id: Date.now(),
                sayi: sirkuler.sayi || '2026/' + (list.length + 1),
                baslik: sirkuler.baslik || 'Yeni Mevzuat Sirküleri',
                ozet: sirkuler.ozet || '',
                icerik: sirkuler.icerik || sirkuler.ozet || '',
                kategori: sirkuler.kategori || 'Genel Mevzuat',
                tarih: sirkuler.tarih || new Date().toISOString().substring(0, 10)
            };
            list.unshift(newSirkuler);
            setData('sirkulerler', list);
            return { success: true, sirkuler: newSirkuler };
        },

        deleteSirkuler: function (id) {
            let list = getData('sirkulerler', []);
            list = list.filter(s => s.id !== id);
            setData('sirkulerler', list);
            return { success: true };
        },

        // Beyannameler
        getBeyannameler: function () {
            const raw = getData('beyannameler', []);
            function getHatEtiket(hat) {
                const h = (hat || '').toLowerCase();
                if (h.includes('kirmizi')) {
                    return { kod: 'kirmizi', baslik: 'Kırmızı Hat', aciklama: 'Fiziki Muayene', bg_class: 'bg-red-500/10 text-red-500 border border-red-500/30', badge: 'bg-red-600 text-white' };
                }
                if (h.includes('sari')) {
                    return { kod: 'sari', baslik: 'Sarı Hat', aciklama: 'Belge Kontrolü', bg_class: 'bg-amber-500/10 text-amber-600 border border-amber-500/30', badge: 'bg-amber-500 text-slate-900' };
                }
                if (h.includes('yesil')) {
                    return { kod: 'yesil', baslik: 'Yeşil Hat', aciklama: 'Hatsız Geçiş', bg_class: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30', badge: 'bg-emerald-600 text-white' };
                }
                if (h.includes('mavi')) {
                    return { kod: 'mavi', baslik: 'Mavi Hat', aciklama: 'Sonradan Kontrol', bg_class: 'bg-blue-500/10 text-blue-600 border border-blue-500/30', badge: 'bg-blue-600 text-white' };
                }
                return { kod: 'sari', baslik: 'Sarı Hat', aciklama: 'Belge Kontrolü', bg_class: 'bg-amber-500/10 text-amber-600 border border-amber-500/30', badge: 'bg-amber-500 text-slate-900' };
            }
            function getAsamaEtiket(asama) {
                const a = (asama || '').toLowerCase();
                if (a.includes('tescil')) {
                    return { kod: 'tescilde', baslik: 'Tescil Edildi', bg_class: 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/30', step: 2 };
                }
                if (a.includes('muayene')) {
                    return { kod: 'muayenede', baslik: 'Muayenede', bg_class: 'bg-amber-500/10 text-amber-600 border border-amber-500/30', step: 3 };
                }
                if (a.includes('vergi') || a.includes('odendi')) {
                    return { kod: 'vergi_odendi', baslik: 'Gümrük Vergisi Ödendi', bg_class: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30', step: 4 };
                }
                if (a.includes('kapan')) {
                    return { kod: 'kapandi', baslik: 'İşlem Kapandı / İntaç', bg_class: 'bg-teal-500/10 text-teal-600 border border-teal-500/30', step: 5 };
                }
                return { kod: 'tescilde', baslik: 'İşlemde', bg_class: 'bg-slate-500/10 text-slate-600 border border-slate-500/30', step: 1 };
            }
            return raw.map(b => {
                const h = b.hat_durumu || (b.hat ? (b.hat.toLowerCase().includes('kirmizi') ? 'kirmizi' : (b.hat.toLowerCase().includes('yesil') ? 'yesil' : 'sari')) : 'sari');
                return Object.assign({}, b, {
                    hat_durumu: h,
                    hat_etiket: b.hat_etiket || getHatEtiket(b.hat || h),
                    asama_etiket: b.asama_etiket || getAsamaEtiket(b.asama)
                });
            });
        },

        saveBeyanname: function (beyanname) {
            const list = getData('beyannameler', []);
            if (beyanname.id) {
                const idx = list.findIndex(b => b.id === beyanname.id);
                if (idx !== -1) {
                    list[idx] = Object.assign({}, list[idx], beyanname);
                } else {
                    list.push(beyanname);
                }
            } else {
                beyanname.id = Date.now();
                list.unshift(beyanname);
            }
            setData('beyannameler', list);
            return { success: true, data: beyanname };
        },

        updateBeyannameStage: function (tescilNo, yeniAsama) {
            const list = getData('beyannameler', []);
            let found = false;
            for (let i = 0; i < list.length; i++) {
                if (list[i].tescil_no === tescilNo) {
                    list[i].asama = yeniAsama;
                    found = true;
                    break;
                }
            }
            if (found) {
                setData('beyannameler', list);
            }
            return { success: found };
        },

        deleteBeyanname: function (id) {
            let list = getData('beyannameler', []);
            list = list.filter(b => b.id !== id);
            setData('beyannameler', list);
            return { success: true };
        },

        // Müşteriler
        getMusteriler: function () {
            return getData('musteriler', []);
        },

        saveMusteri: function (musteri) {
            const list = getData('musteriler', []);
            if (musteri.id) {
                const idx = list.findIndex(m => m.id === musteri.id);
                if (idx !== -1) {
                    list[idx] = Object.assign({}, list[idx], musteri);
                } else {
                    list.push(musteri);
                }
            } else {
                musteri.id = Date.now();
                list.unshift(musteri);
            }
            setData('musteriler', list);
            return { success: true, musteri: musteri, data: musteri };
        },

        deleteMusteri: function (id) {
            let list = getData('musteriler', []);
            list = list.filter(m => m.id !== id);
            setData('musteriler', list);
            return { success: true };
        },

        // Teklif ve İletişim Gönderimi
        submitTeklif: function (formData) {
            const mesajlar = getData('mesajlar', []);
            const yeniMesaj = {
                id: Date.now(),
                tarih: new Date().toISOString(),
                ...formData
            };
            mesajlar.unshift(yeniMesaj);
            setData('mesajlar', mesajlar);
            return { success: true, message: 'Talebiniz başarıyla alınmıştır. Müşavirimiz en kısa sürede sizinle iletişime geçecektir.' };
        },

        // Kimlik Doğrulama / Giriş / Çıkış
        getUser: function () {
            try {
                const u = localStorage.getItem(STORAGE_PREFIX + 'current_user');
                return u ? JSON.parse(u) : null;
            } catch (e) {
                return null;
            }
        },

        login: function (username, password) {
            const u = (username || '').trim().toLowerCase();
            const p = (password || '').trim();

            if (u === 'musteri' || u === 'demo' || u === 'demo_musteri' || u.includes('musteri') || u === 'musteri@demofirma.com') {
                const userData = {
                    role: 'musteri',
                    username: 'musteri',
                    name: 'Ahmet Yılmaz',
                    company: 'Demo Müşteri Ltd. Şti.',
                    taxNo: '1234567890'
                };
                localStorage.setItem(STORAGE_PREFIX + 'current_user', JSON.stringify(userData));
                return { success: true, role: 'musteri', redirect: 'portal.html', redirect_to: 'portal.html', user: userData };
            }

            if (u === 'admin' || u === 'musavir' || u === 'demo_musavir' || u.includes('musavir') || u === 'sinan.keskin' || u === 'info@sinankeskin.com.tr') {
                const userData = {
                    role: 'musavir',
                    username: 'sinan.keskin',
                    name: 'Sinan Keskin',
                    company: 'Quantum AI Gümrük Müşavirliği',
                    taxNo: '3456789012'
                };
                localStorage.setItem(STORAGE_PREFIX + 'current_user', JSON.stringify(userData));
                return { success: true, role: 'musavir', redirect: 'yonetim.html', redirect_to: 'yonetim.html', user: userData };
            }

            return {
                success: false,
                message: 'Kullanıcı adı veya şifre hatalı! Hızlı demo için "Hızlı Demo Müşteri" veya "Hızlı Demo Müşavir" butonlarını kullanabilirsiniz.'
            };
        },

        logout: function () {
            localStorage.removeItem(STORAGE_PREFIX + 'current_user');
            window.location.href = 'giris.html';
        },

        // Müşavir AI Chat Simülatörü
        askAi: function (userQuestion) {
            const q = trNormalize(userQuestion);
            if (q.includes('kahve') || q.includes('0901')) {
                return "0901.21.00.00.00 pozisyonundaki kavrulmuş kahve için Gümrük Vergisi %13, KDV oranı %10'dur. Tarım ve Orman Bakanlığı İthalat Uygunluk Belgesi ve bitki sağlık sertifikası gerekmektedir.";
            } else if (q.includes('bilgisayar') || q.includes('laptop') || q.includes('8471')) {
                return "8471.30.00.00.00 taşınabilir dizüstü bilgisayarlar (Laptop) için Dünya Ticaret Örgütü Bilgi Teknolojileri Anlaşması (ITA) uyarınca Gümrük Vergisi %0, KDV oranı %20 ve bandrol ücreti uygulanmaktadır.";
            } else if (q.includes('yys') || q.includes('yetkilendirilmis')) {
                return "YYS (Yetkilendirilmiş Yükümlü Statüsü), gümrük işlemlerinde Yeşil Hat (fiziki muayenesiz geçiş), eksik belgeyle beyan ve yerinde gümrükleme hakları tanır. En az 3 yıl faal dış ticaret firmaları başvurabilir.";
            } else if (q.includes('kkdf') || q.includes('vadeli')) {
                return "Mal mukabili ve kabul kredili vadeli ithalatlarda tescil öncesinde transfer yapılmadığı takdirde CIF kıymet üzerinden %6 oranında Kaynak Kullanımını Destekleme Fonu (KKDF) kesintisi tahakkuk eder.";
            } else {
                return "Gümrük Müşavirliği Yapay Zeka Asistanı: Eşyanızın 12 haneli GTİP tespiti, gümrük vergisi simülasyonu, Tareks/TSE uygunluk şartları ve YYS süreçleri hakkında sorularınızı 7/24 yanıtlamaya hazırım.";
            }
        }
    };

    // 4. Monkey-Patch window.fetch (Tüm API çağrılarını şeffafça yakala)
    const nativeFetch = window.fetch;
    window.fetch = function (url, options = {}) {
        const urlStr = (typeof url === 'string') ? url : (url.url || '');

        if (urlStr.includes('gumruk/v1/') || urlStr.includes('gumruk-api') || urlStr.includes('/api/') || urlStr.startsWith('/wp-json/')) {
            const cleanUrl = urlStr.split('?')[0];
            const queryString = urlStr.includes('?') ? urlStr.split('?')[1] : '';
            const searchParams = new URLSearchParams(queryString);
            const method = (options.method || 'GET').toUpperCase();

            let requestBody = {};
            if (options.body) {
                try {
                    requestBody = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
                } catch (e) {
                    // form data fallback
                }
            }

            function jsonResp(data, status = 200) {
                return Promise.resolve(new Response(JSON.stringify(data), {
                    status: status,
                    headers: { 'Content-Type': 'application/json' }
                }));
            }

            // A) Temel Modüller
            if (cleanUrl.endsWith('gtip-bolumler')) {
                const bolumler = getData('gtip_bolumler', []);
                const fasillar = getData('gtip_fasillar', {});
                return jsonResp({ success: true, data: bolumler, bolumler: bolumler, fasillar: fasillar });
            }

            if (cleanUrl.endsWith('gtip-ara')) {
                const q = searchParams.get('q') || searchParams.get('sorgu') || requestBody.q || '';
                const tip = searchParams.get('arama_tipi') || 'kelime';
                const fasil = searchParams.get('fasil') || '';
                const sonuclar = window.gumrukApi.searchGtip(q, tip, fasil);
                return jsonResp({ success: true, toplam: sonuclar.length, data: sonuclar });
            }

            if (cleanUrl.endsWith('idareler')) {
                const q = searchParams.get('q') || '';
                const reg = searchParams.get('bolge') || searchParams.get('region') || 'tumu';
                const sonuclar = window.gumrukApi.getIdareler(q, reg);
                return jsonResp({ success: true, data: sonuclar });
            }

            if (cleanUrl.endsWith('sozluk')) {
                const q = searchParams.get('q') || '';
                const sonuclar = window.gumrukApi.getSozluk(q);
                return jsonResp({ success: true, data: sonuclar });
            }

            if (cleanUrl.endsWith('sirkulerler') || cleanUrl.endsWith('yonetim/sirkulerler')) {
                const kat = searchParams.get('kategori') || 'tumu';
                const sonuclar = window.gumrukApi.getSirkulerler(kat);
                return jsonResp({ success: true, data: sonuclar, sirkulerler: sonuclar });
            }

            if (cleanUrl.endsWith('yonetim/sirkuler-ekle')) {
                const res = window.gumrukApi.addSirkuler(requestBody);
                return jsonResp({ success: true, message: 'Sirküler başarıyla kaydedildi.', data: res.sirkuler });
            }

            if (cleanUrl.endsWith('yonetim/sirkuler-sil')) {
                window.gumrukApi.deleteSirkuler(requestBody.id);
                return jsonResp({ success: true, message: 'Sirküler silindi.' });
            }

            if (cleanUrl.endsWith('yonetim/sirkuler-otomatik-sync')) {
                // Simüle edilmiş canlı senkronizasyon
                const today = new Date().toISOString().substring(0, 10);
                window.gumrukApi.addSirkuler({
                    sayi: '2026/05',
                    baslik: 'Resmî Gazete: İthalat Tebliği 2026/8 Yürürlüğe Girdi',
                    ozet: 'Elektronik eşya ve yarı iletken ithalatında CE ve TAREKS kontrolleri dijital onay sistemine bağlanmıştır.',
                    kategori: 'İthalat & Tarife',
                    tarih: today
                });
                return jsonResp({ success: true, message: 'Mevzuat sirkülerleri Resmî Gazete ile başarıyla senkronize edildi (1 yeni sirkü eklendi).' });
            }

            if (cleanUrl.endsWith('auth/login')) {
                const res = window.gumrukApi.login(requestBody.username || requestBody.log, requestBody.password || requestBody.pwd);
                return jsonResp(res, res.success ? 200 : 401);
            }

            if (cleanUrl.endsWith('teklif-gonder') || cleanUrl.endsWith('iletisim')) {
                const res = window.gumrukApi.submitTeklif(requestBody);
                return jsonResp(res);
            }

            // B) Portal & Dosya Uç Noktaları
            if (cleanUrl.endsWith('musteri-dosyalari') || cleanUrl.endsWith('beyannameler') || cleanUrl.endsWith('yonetim/dosyalar')) {
                const list = window.gumrukApi.getBeyannameler();
                return jsonResp({ success: true, data: list, dosyalar: list });
            }

            if (cleanUrl.endsWith('yonetim/dosya-ekle') || cleanUrl.endsWith('yonetim/dosya-duzenle')) {
                const res = window.gumrukApi.saveBeyanname(requestBody);
                return jsonResp({ success: true, message: 'Beyanname başarıyla güncellendi.', data: res.data });
            }

            if (cleanUrl.endsWith('yonetim/dosya-sil')) {
                window.gumrukApi.deleteBeyanname(requestBody.id);
                return jsonResp({ success: true, message: 'Beyanname kaydı silindi.' });
            }

            if (cleanUrl.endsWith('portal/cari-ozet')) {
                return jsonResp({
                    success: true,
                    data: {
                        bakiye: '0,00 ₺',
                        bekleyen_avans: '14.250,00 ₺',
                        tahakkuk_eden_vergi: '534.050,00 ₺',
                        son_hareketler: [
                            { tarih: '2026-03-14', aciklama: '2634IM00482910 Gümrük Vergisi Tahakkuku', tutar: '418.250,00 ₺', tip: 'borc' },
                            { tarih: '2026-03-12', aciklama: 'Müşavirlik Hizmet Bedeli & Ordino', tutar: '14.250,00 ₺', tip: 'borc' }
                        ]
                    }
                });
            }

            if (cleanUrl.endsWith('portal/destek-talebi')) {
                return jsonResp({ success: true, message: 'Destek talebiniz operasyon masamıza iletilmiştir.' });
            }

            if (cleanUrl.endsWith('portal/evrak-yukle')) {
                return jsonResp({ success: true, message: 'Evrak güvenli gümrük sunucularına yüklendi ve beyannameye eklendi.' });
            }

            if (cleanUrl.endsWith('odeme-bildir') || cleanUrl.endsWith('yonetim/odeme-islem')) {
                return jsonResp({ success: true, message: 'Dekont bildirimi başarıyla alındı ve onaylandı.' });
            }

            // C) Yönetim Konsolu Uç Noktaları
            if (cleanUrl.endsWith('site-ayarlari')) {
                if (method === 'POST') {
                    const res = window.gumrukApi.saveAyarlar(requestBody);
                    return jsonResp({ success: true, message: 'Site ayarları güncellendi.', data: res.ayarlar });
                }
                return jsonResp({ success: true, data: window.gumrukApi.getAyarlar() });
            }

            if (cleanUrl.endsWith('musteriler') || cleanUrl.endsWith('yonetim/musteriler')) {
                const list = window.gumrukApi.getMusteriler();
                return jsonResp({ success: true, data: list, musteriler: list });
            }

            if (cleanUrl.endsWith('yonetim/musteri-kaydet')) {
                const res = window.gumrukApi.saveMusteri(requestBody);
                return jsonResp({ success: true, message: 'Müşteri başarıyla kaydedildi.', data: res.data });
            }

            if (cleanUrl.endsWith('yonetim/musteri-sil')) {
                window.gumrukApi.deleteMusteri(requestBody.id);
                return jsonResp({ success: true, message: 'Müşteri başarıyla silindi.' });
            }

            if (cleanUrl.endsWith('yonetim/teklifler')) {
                return jsonResp({ success: true, data: getData('mesajlar', []) });
            }

            if (cleanUrl.endsWith('yonetim/odemeler')) {
                return jsonResp({
                    success: true,
                    data: [
                        { id: 1, firma: 'Demo Müşteri Ltd. Şti.', tutar: '418.250,00 ₺', tarih: '2026-03-14', durum: 'Onaylandı', banka: 'Ziraat Bankası' }
                    ]
                });
            }

            if (cleanUrl.endsWith('yonetim/mesajlar')) {
                return jsonResp({ success: true, data: getData('mesajlar', []) });
            }

            if (cleanUrl.endsWith('yonetim/bulten-aboneler')) {
                return jsonResp({ success: true, data: [{ id: 1, email: 'musteri@demofirma.com', tarih: '2026-03-10' }] });
            }

            if (cleanUrl.endsWith('yonetim/smtp-test')) {
                return jsonResp({ success: true, message: 'SMTP Test E-postası başarıyla gönderildi.' });
            }

            // D) Chat Uç Noktaları
            if (cleanUrl.endsWith('chat/gecmis') || cleanUrl.endsWith('yonetim/chat/mesajlar')) {
                return jsonResp({ success: true, data: [], mesajlar: [] });
            }

            if (cleanUrl.endsWith('chat/mesaj') || cleanUrl.endsWith('chat/mesaj-gonder') || cleanUrl.endsWith('chat/sor') || cleanUrl.endsWith('yonetim/chat/yanit-ver')) {
                const q = requestBody.mesaj || requestBody.soru || '';
                const aiCevap = window.gumrukApi.askAi(q);
                return jsonResp({
                    success: true,
                    cevap: aiCevap,
                    yanit: aiCevap,
                    mesaj: { rol: 'asistan', icerik: aiCevap, tarih: new Date().toISOString() }
                });
            }

            if (cleanUrl.endsWith('yonetim/chat/oturumlar')) {
                return jsonResp({
                    success: true,
                    data: [
                        { session_id: 'demo_session_1', baslik: 'Demo Müşteri (GTİP Sorgusu)', tarih: '2026-03-17 14:30', durum: 'aktif' }
                    ]
                });
            }
        }

        return nativeFetch.apply(this, arguments);
    };

    console.log('%c Quantum AI Gümrük Müşavirliği - Mock API Hazır 🚀 ', 'background:#1e40af;color:#fff;font-weight:bold;padding:4px 8px;border-radius:4px;');
})();
