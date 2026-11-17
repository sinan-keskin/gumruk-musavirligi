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

        // Müşavir AI Çekirdek Yapay Zeka Motoru & Canlı API Köprüsü
        askAi: async function (userQuestion) {
            const rawQ = (userQuestion || '').trim();
            const q = trNormalize(rawQ);

            // 1. Canlı LLM API Entegrasyonu (Google Gemini 1.5/2.0 Flash)
            const apiKey = localStorage.getItem('gumruk_ai_api_key') || window.GUMRUK_AI_API_KEY || '';
            if (apiKey && apiKey.trim().length > 15) {
                try {
                    const sysPrompt = "Sen Quantum AI Gümrük Müşavirliği'nin 25 yıllık Baş Gümrük Müşaviri ve Dış Ticaret Uzmanı AI asistanısın. Kullanıcı sorularına Türk Gümrük Mevzuatı (4458 sayılı Kanun), BİLGE sistemi, GTİP tespiti, ithalat/ihracat vergileri (Gümrük Vergisi, KDV, ÖTV, İGV), menşe kuralları, antrepo ve YYS çerçevesinde son derece profesyonel, anlaşılır, güven veren ve maddeler halinde Türkçe yanıt ver. Cevaplarında nazik ve saygın bir iş dili kullan.";
                    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey.trim())}`;
                    
                    const apiRes = await nativeFetch(endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{ text: sysPrompt + "\n\nKullanıcı Sorusu: " + rawQ }]
                            }],
                            generationConfig: {
                                temperature: 0.35,
                                maxOutputTokens: 950
                            }
                        })
                    });

                    if (apiRes.ok) {
                        const data = await apiRes.json();
                        const answer = data.candidates?.[0]?.content?.parts?.[0]?.text;
                        if (answer && answer.trim()) {
                            return answer.trim();
                        }
                    }
                } catch (err) {
                    console.warn('Canlı Gemini API bağlantısı kurulamadı, Akıllı Gümrük Motoru devreye alındı:', err);
                }
            }

            // 2. Akıllı Yerleşik Gümrük Müşaviri Çekirdek Bilgi Motoru (Offline & Demo Garantili)
            // Doğal hissettiren düşünme simülasyonu
            await new Promise(r => setTimeout(r, 650));

            // A) Belirli GTİP ve Ürün Sorgulamaları
            if (q.includes('kahve') || q.includes('0901')) {
                return "☕ **0901.21.00.00.00 - Kavrulmuş Kahve Gümrük Analizi:**\n\n" +
                       "• **Gümrük Vergisi (GV):** %13 (AB ve tercihli ülkelerde özel indirimler uygulanabilir)\n" +
                       "• **KDV Oranı:** %10 (Gıda maddeleri indirimi)\n" +
                       "• **Gerekli İzinler:** Tarım ve Orman Bakanlığı İthalat Kontrol Belgesi ve Bitki Sağlık Sertifikası (Phytosanitary Certificate) zorunludur.\n" +
                       "• **Laboratuvar:** Numune alımı ile mikotoksin/pestisit analizi yapılabilir.\n\n" +
                       "📌 *Detaylı tescil ve ithalat işlemleri için GTİP masamızdan destek alabilirsiniz.*";
            } 
            
            if (q.includes('bilgisayar') || q.includes('laptop') || q.includes('dizustu') || q.includes('8471')) {
                return "💻 **8471.30.00.00.00 - Taşınabilir Bilgisayar (Laptop) Mevzuat Raporu:**\n\n" +
                       "• **Gümrük Vergisi (GV):** %0 (Dünya Ticaret Örgütü Bilgi Teknolojileri Anlaşması - ITA kapsamında sıfırdır)\n" +
                       "• **KDV Oranı:** %20\n" +
                       "• **TRT Bandrolü:** %2 (Dahili wifi/alıcı özelliği nedeniyle)\n" +
                       "• **Uygunluk Denetimi:** Ticaret Bakanlığı TAREKS CE Uygunluk Belgesi gereklidir (LVD / EMC direktifleri).\n\n" +
                       "📌 *Toplu kurumsal ithalatlarda gümrükleme süremiz ortalama 1 iş günüdür.*";
            }

            if (q.includes('telefon') || q.includes('cep') || q.includes('akilli telefon') || q.includes('8517')) {
                return "📱 **8517.13.00.00.00 - Akıllı Cep Telefonu İthalat Şartları:**\n\n" +
                       "• **Gümrük Vergisi (GV):** %0 (ITA Anlaşması)\n" +
                       "• **Özel Tüketim Vergisi (ÖTV):** Matraha bağlı olarak %25 - %50\n" +
                       "• **KDV Oranı:** %20\n" +
                       "• **TRT Bandrol Ücreti:** %12\n" +
                       "• **Gözetim & İzin:** Birim adet kıymetinde İthalat Gözetim Tebliği uygulanır. BTK (Bilgi Teknolojileri ve İletişim Kurumu) IMEI kayıt izni zorunludur.\n\n" +
                       "📌 *Ticari ithalat yetki belgeleri ve kayıt onayları müşavirliğimizce takip edilmektedir.*";
            }

            if (q.includes('otomobil') || q.includes('araba') || q.includes('arac') || q.includes('elektrikli') || q.includes('8703')) {
                return "🚗 **8703 - Binek Otomobil & Elektrikli Taşıt İthalat Rejimi:**\n\n" +
                       "• **Gümrük Vergisi:** AB Menşelilerde A.TR belgesiyle %0, 3. ülkelerde %10 (Elektrikli Çin menşelilerde %40 ek vergi ve Yetkili Servis Şartı tebliği geçerlidir)\n" +
                       "• **ÖTV:** Motor hacmi, batarya gücü ve matrahına bağlı olarak %10 ile %220 arasındadır\n" +
                       "• **KDV:** %20\n" +
                       "• **Gerekli Evraklar:** CoC (Uygunluk Belgesi), Garanti Muafiyet Belgesi / TSE Uygunluk Kontrolü ve Sanayi Bakanlığı İthalat İzni.\n\n" +
                       "📌 *Otomotiv ithalatında özel izin süreçlerinizi hızlandırmak için dosyanızı inceleyebiliriz.*";
            }

            if (q.includes('tekstil') || q.includes('tisort') || q.includes('kumas') || q.includes('konfeksiyon') || q.includes('6109')) {
                return "👕 **6109 / 6204 - Tekstil ve Konfeksiyon Ürünleri İthalat Rejimi:**\n\n" +
                       "• **Gümrük Vergisi:** Ortalama %12\n" +
                       "• **İlave Gümrük Vergisi (İGV):** Menşe ülkeye bağlı olarak %20 - %30\n" +
                       "• **KDV:** %10 (Giyim eşyası indirimi)\n" +
                       "• **Zorunlu Belgeler:** İhracatçı Kayıt Formu (İKDF), Ekoteks / Azo Boyar Madde ve Fitalat laboratuvar test raporu.\n" +
                       "• **Menşe:** AB'den ithalatta A.TR belgesi GV'yi sıfırlar, ancak İGV için Menşe İspat Belgesi şarttır.";
            }

            // B) Vergi Hesaplama ve CIF Formülü
            if (q.includes('vergi') || q.includes('kdv') || q.includes('otv') || q.includes('igv') || q.includes('maliyet') || q.includes('hesap') || q.includes('kkdf')) {
                return "📊 **Gümrük Vergisi & İthalat Maliyeti Hesaplama Formülü:**\n\n" +
                       "İthalat vergileri **CIF Kıymeti** üzerinden kademeli olarak hesaplanır:\n\n" +
                       "1. **CIF Kıymeti:** `Mal Bedeli (FOB) + Navlun (Taşıma) + Nakliyat Sigortası`\n" +
                       "2. **Gümrük Vergisi (GV):** `CIF Kıymeti × GTİP Gümrük Vergisi Oranı`\n" +
                       "3. **İlave Gümrük Vergisi (İGV):** Varsa `CIF Kıymeti × İGV Oranı`\n" +
                       "4. **ÖTV:** Varsa `(CIF + GV + İGV) × ÖTV Oranı`\n" +
                       "5. **KKDF:** Vadeli (mal mukabili/kabul kredili) ödemelerde `%6` fon kesintisi\n" +
                       "6. **KDV Matrahı:** `CIF + GV + İGV + ÖTV + KKDF + Yurtiçi Gümrük Masrafları`\n" +
                       "7. **Ödenecek KDV:** `KDV Matrahı × (%10 veya %20)`\n\n" +
                       "💡 *Örnek:* 10.000$ CIF bedelli %10 GV ve %20 KDV'li bir üründe toplam vergi yaklaşık 3.200$ seviyesinde oluşur. Ana sayfamızdaki **Canlı Gümrük Simülatörü** ile anında hesaplayabilirsiniz.";
            }

            // C) İthalat Adımları
            if (q.includes('ithalat') || q.includes('ithal') || q.includes('getirmek') || q.includes('yurt disindan')) {
                return "🚢 **5 Aşamalı İthalat Gümrükleme Yol Haritası:**\n\n" +
                       "1. **Ön Hazırlık & GTİP Tespiti:** Proforma fatura ve ürünün teknik spektleri incelenerek 12 haneli GTİP kodu tespit edilir.\n" +
                       "2. **Ön İzinler & Standartlar:** Eşyanın TAREKS, TSE, CE, Tarım veya Sağlık Bakanlığı izinleri kontrol edilir.\n" +
                       "3. **Lojistik & Varış:** Eşya Türkiye gümrük sahasına ulaştığında özet beyan verilir ve ordino/konşimento teslim alınır.\n" +
                       "4. **BİLGE Sistemi Tescili:** Müşavirliğimizce detaylı gümrük beyannamesi açılır; sistem muayene hattını belirler (Yeşil/Sarı/Kırmızı).\n" +
                       "5. **Vergi Ödemesi & Çekim:** Tahakkuk eden gümrük vergileri ödenir, fiziki muayene tamamlanır ve eşya serbest dolaşıma girer.\n\n" +
                       "🎯 *İlk ithalatınızda şirketinizin gümrük kaydı ve E-Birlik tescili tarafımızdan 1 saat içinde tamamlanır.*";
            }

            // D) İhracat ve Dolaşım Belgeleri
            if (q.includes('ihracat') || q.includes('ihrac') || q.includes('atr') || q.includes('a.tr') || q.includes('eur.1') || q.includes('mense') || q.includes('menşe')) {
                return "🌍 **İhracat Prosedürü ve Uluslararası Dolaşım Belgeleri:**\n\n" +
                       "• **A.TR Dolaşım Belgesi:** Türkiye ile AB arasındaki Gümrük Birliği kapsamında sanayi ürünlerinin AB ülkelerine **gümrüksüz (%0 vergiyle)** girmesini sağlar.\n" +
                       "• **EUR.1 / EUR-MED:** Türkiye'nin Serbest Ticaret Anlaşması (STA) imzaladığı ülkelere (İngiltere, İsviçre, EFTA, Güney Kore vb.) tercihli tarifeden yararlanmak için düzenlenir.\n" +
                       "• **Menşe Şahadetnamesi (Certificate of Origin):** Eşyanın üretildiği ülkeyi resmi olarak ispatlar.\n" +
                       "• **İntaç & KDV İadesi:** Gümrük Çıkış Beyannamesi (GCB) fiili ihracatla kapandıktan sonra mali müşavirinize sunulacak KDV iade dosyası anında hazırlanır.\n\n" +
                       "📄 *Tüm dolaşım belgeleri MEDOS sistemi üzerinden elektronik olarak onaylanmaktadır.*";
            }

            // E) Muayene Hatları (Kırmızı, Sarı, Mavi, Yeşil)
            if (q.includes('hat') || q.includes('kirmizi') || q.includes('sari') || q.includes('yesil') || q.includes('mavi') || q.includes('muayene')) {
                return "🚦 **T.C. Ticaret Bakanlığı BİLGE Muayene Hatları Rehberi:**\n\n" +
                       "• 🔴 **Kırmızı Hat:** Eşyanın fiziki olarak konteyner açılarak muayene edilmesi ve evrakların tam tetkikidir.\n" +
                       "• 🟡 **Sarı Hat:** Eşya fiziki olarak açılmaz; beyanname ve ekindeki belgelerin doğruluğu incelenir.\n" +
                       "• 🟢 **Mavi Hat:** YYS (Yetkilendirilmiş Yükümlü) sertifikasına sahip firmaların eşyayı doğrudan fabrikasına çekip sonradan kontrol edilmesidir.\n" +
                       "• 🟢 **Yeşil Hat:** Eşyanın ne fiziki ne de belge kontrolüne tabi tutulmaksızın gümrükten doğrudan ve anında geçişidir.\n\n" +
                       "💡 *Doğru GTİP tespiti ve eksiksiz evrak yönetimi ile kırmızı hat riskini en aza indiriyoruz.*";
            }

            // F) Yetkilendirilmiş Yükümlü Statüsü (YYS)
            if (q.includes('yys') || q.includes('yetkilendirilmis') || q.includes('oksb') || q.includes('onaylanmis')) {
                return "🎖️ **YYS (Yetkilendirilmiş Yükümlü Statüsü) Avantajları:**\n\n" +
                       "Uluslararası standartlarda güvenilirliğini kanıtlamış firmalara Ticaret Bakanlığı tarafından verilir:\n\n" +
                       "1. **Yeşil Hat Ayricalığı:** İthalatta ve ihracatta muayenesiz doğrudan geçiş.\n" +
                       "2. **Yerinde Gümrükleme:** Eşyayı gümrüğe getirmeden kendi deponuzdan doğrudan ihraç etme veya ithal etme imkanı.\n" +
                       "3. **Kısmi Teminat:** İthalat vergilerinde %10 ve %1 gibi düşük götürü teminat avantajı.\n" +
                       "4. **Eksik Belgeyle Beyan:** Bazı belgeleri tescil anında değil, sonradan tamamlama esnekliği.\n\n" +
                       "📌 *YYS başvuru dosyanız, ISO 27001/9001 denetimleriniz ve Bakanlık süreciniz ekibimizce uçtan uca yönetilir.*";
            }

            // G) Antrepo ve Transit
            if (q.includes('antrepo') || q.includes('transit') || q.includes('ncts') || q.includes('t1') || q.includes('t2') || q.includes('serbest bolge')) {
                return "🏢 **Antrepo ve Uluslararası Transit Rejimleri:**\n\n" +
                       "• **Gümrük Antreposu:** Henüz vergileri ödenmemiş ithal eşyanın gümrük gözetiminde süresiz kalabildiği güvenli depolardır. Eşyayı ihtiyaç duydukça parti parti millileştirerek nakit akışı avantajı sağlar.\n" +
                       "• **NCTS / T1 Transit:** Bir gümrük idaresinden başka bir iç gümrüğe veya yabancı ülkeye eşyanın teminat altında taşınmasıdır.\n" +
                       "• **Elleçleme:** Antrepoda etiketleme, ambalajlama ve ayrıştırma işlemleri yapılabilir.\n\n" +
                       "📌 *Anlaşmalı A-Tipi Genel Antrepolarımızda uygun depolama ve teminat çözümleri sunuyoruz.*";
            }

            // H) Tareks, TSE ve Standart Denetimleri
            if (q.includes('tareks') || q.includes('tse') || q.includes('ce') || q.includes('uygunluk') || q.includes('denetim')) {
                return "🔍 **TAREKS & TSE İthalat Denetim Rehberi:**\n\n" +
                       "Dış Ticarette Risk Esaslı Denetim Sistemi (TAREKS), ithal edilen sanayi, oyuncak, kişisel koruyucu, telsiz ve elektrikli ürünlerin standartlara uygunluğunu denetler:\n\n" +
                       "• **Süreç:** Beyanname öncesi TAREKS başvurusu yapılır. Sistem risk analizine göre 'Doğrudan Denetleme' veya 'Kapsam Dışı' kararı verir.\n" +
                       "• **TSE Heyeti:** Fiziki numune alınması durumunda TSE uzmanları eşyayı test merkezine gönderir.\n" +
                       "• **Gerekli Evraklar:** CE Uygunluk Beyanı (DoC), Akredite Test Raporları ve Türkçe Kullanım Kılavuzu.";
            }

            // I) Dosya Sorgulama ve Müşteri Masası
            if (q.includes('dosya') || q.includes('tescil') || q.includes('beyanname') || q.includes('durum') || q.includes('sorgula') || q.includes('nerede')) {
                return "📂 **Canlı Dosya & Beyanname Takip Masası:**\n\n" +
                       "Gümrük dosyalarınız **BİLGE Sistemi** ile 7/24 entegre çalışmaktadır. Sayfamızın üst menüsündeki **Müşteri Portalı** (`portal.html`) üzerinden:\n\n" +
                       "• 26340000IM tescilli dosyalarınızın anlık muayene hattını,\n" +
                       "• Vergi tahakkuk ve bloke dekontlarını,\n" +
                       "• E-Fatura ve orjinal konşimento durumunu anında görebilirsiniz.\n\n" +
                       "İncelemek istediğiniz tescil numarasını iletirseniz arşiv durumunu kontrol edebilirim.";
            }

            // J) Selamlama / Ne Yapabilirsiniz?
            if (q.includes('merhaba') || q.includes('selam') || q.includes('gunaydin') || q.includes('iyi gunler') || q.includes('kimsin') || q.includes('tanit') || q.includes('nasilsin')) {
                return "👋 **Merhaba! Ben Quantum AI Gümrük Müşavirliği Baş Danışmanıyım.**\n\n" +
                       "Türk Gümrük Mevzuatı (4458 sayılı Kanun), BİLGE sistemi ve uluslararası dış ticaret operasyonlarınız için 7/24 yanınızdayım. Size şu konularda anında yardımcı olabilirim:\n\n" +
                       "1. **GTİP Tespiti & Tarife Yorumlama** (Eşyanızın 12 haneli gümrük kodu)\n" +
                       "2. **Vergi & Maliyet Hesaplama** (Gümrük Vergisi, KDV, ÖTV, İGV, KKDF)\n" +
                       "3. **İthalat & İhracat Yol Haritası** (Gerekli evraklar, A.TR, EUR.1)\n" +
                       "4. **TAREKS, TSE & CE İzinleri**\n" +
                       "5. **YYS & Yeşil Hat Danışmanlığı**\n\n" +
                       "💬 *Nasıl bir işlem planlıyorsunuz? Eşyanızın adını veya sormak istediğiniz konuyu yazmanız yeterlidir.*";
            }

            // K) Akıllı Genel Gümrük Yanıtı (Fallback)
            return "📌 **Gümrük Müşavirliği Değerlendirmesi:**\n\n" +
                   "İlettiğiniz **\"" + rawQ + "\"** konusu, 4458 sayılı Gümrük Kanunu ve güncel İthalat/İhracat Rejim Kararları kapsamında titizlikle değerlendirilmelidir:\n\n" +
                   "• **Önemli Adım:** Eşyanın teknik tanımı, menşe ülkesi ve teslim şekli (Incoterms 2020: FOB, CIF, DAP) belirlenmelidir.\n" +
                   "• **Mevzuat Şartı:** GTİP pozisyonuna göre İthalat Tebliğleri, Gözetim, Korunma Önlemleri ve Bakanlık uygunluk şartları aranabilir.\n" +
                   "• **Öneri:** Hatalı beyan ve ek vergi cezalarıyla (G.K. 234. Md) karşılaşmamak adına proforma faturanızı ve teknik dökümanınızı incelememiz faydalı olacaktır.\n\n" +
                   "📞 *Doğrudan operasyon merkezimize bağlanmak veya dosyanızı başlatmak için iletişim hattımızdan bize ulaşabilirsiniz: **+90 (535) 835 61 77***";
        }
    };

    // 4. Monkey-Patch window.fetch (Tüm API çağrılarını şeffafça yakala)
    const nativeFetch = window.fetch;
    window.fetch = async function (url, options = {}) {
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
                const aiCevap = await window.gumrukApi.askAi(q);
                return jsonResp({
                    success: true,
                    ai_yanit: aiCevap,
                    cevap: aiCevap,
                    yanit: aiCevap,
                    durum: 'ai_aktif',
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
