"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { ArrowRight, Star, ChevronDown, Check, ChevronRight, Anchor, X } from "./icons";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { productsData } from "@/data/products"; // Import real data
// Custom styles handled via styled-jsx below

const products = productsData; // Use imported data



const coastalLocationData = [
    {
        "id": 1,
        "name": "Adana",
        "districts": ["Karataş", "Yumurtalık"]
    },
    {
        "id": 7,
        "name": "Antalya",
        "districts": ["Aksu", "Alanya", "Demre", "Döşemealtı", "Finike", "Gazipaşa", "Kaş", "Kemer", "Konyaaltı", "Kumluca", "Manavgat", "Muratpaşa", "Serik"]
    },
    {
        "id": 8,
        "name": "Artvin",
        "districts": ["Arhavi", "Hopa", "Kemalpaşa"]
    },
    {
        "id": 9,
        "name": "Aydın",
        "districts": ["Didim", "Kuşadası", "Söke"]
    },
    {
        "id": 10,
        "name": "Balıkesir",
        "districts": ["Ayvalık", "Bandırma", "Burhaniye", "Edremit", "Erdek", "Gömeç", "Marmara", "Gönen"]
    },
    {
        "id": 74,
        "name": "Bartın",
        "districts": ["Amasra", "Kurucaşile", "Merkez"]
    },
    {
        "id": 16,
        "name": "Bursa",
        "districts": ["Gemlik", "Karacabey", "Mudanya"]
    },
    {
        "id": 17,
        "name": "Çanakkale",
        "districts": ["Ayvacık", "Biga", "Bozcaada", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Merkez"]
    },
    {
        "id": 81,
        "name": "Düzce",
        "districts": ["Akçakoca"]
    },
    {
        "id": 22,
        "name": "Edirne",
        "districts": ["Enez", "Keşan"]
    },
    {
        "id": 28,
        "name": "Giresun",
        "districts": ["Bulancak", "Eynesil", "Görele", "Keşap", "Merkez", "Piraziz", "Tirebolu"]
    },
    {
        "id": 31,
        "name": "Hatay",
        "districts": ["Arsuz", "Dörtyol", "Erzin", "İskenderun", "Payas", "Samandağ", "Yayladağı"]
    },
    {
        "id": 34,
        "name": "İstanbul",
        "districts": ["Adalar", "Arnavutköy", "Avcılar", "Bakırköy", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Fatih", "Kadıköy", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sarıyer", "Silivri", "Şile", "Tuzla", "Üsküdar", "Zeytinburnu"]
    },
    {
        "id": 35,
        "name": "İzmir",
        "districts": ["Aliağa", "Balçova", "Çeşme", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karaburun", "Karşıyaka", "Konak", "Menderes", "Menemen", "Narlıdere", "Seferihisar", "Selçuk", "Urla"]
    },
    {
        "id": 37,
        "name": "Kastamonu",
        "districts": ["Abana", "Cide", "Çatalzeytin", "Doğanyurt", "İnebolu", "Bozkurt"]
    },
    {
        "id": 39,
        "name": "Kırklareli",
        "districts": ["Demirköy", "Vize"]
    },
    {
        "id": 41,
        "name": "Kocaeli",
        "districts": ["Başiskele", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Körfez"]
    },
    {
        "id": 33,
        "name": "Mersin",
        "districts": ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Erdemli", "Gülnar", "Mezitli", "Silifke", "Tarsus", "Toroslar", "Yenişehir"]
    },
    {
        "id": 48,
        "name": "Muğla",
        "districts": ["Bodrum", "Dalaman", "Datça", "Fethiye", "Köyceğiz", "Marmaris", "Milas", "Ortaca", "Seydikemer", "Ula"]
    },
    {
        "id": 52,
        "name": "Ordu",
        "districts": ["Altınordu", "Fatsa", "Gülyalı", "Perşembe", "Ünye"]
    },
    {
        "id": 53,
        "name": "Rize",
        "districts": ["Ardeşen", "Çayeli", "Fındıklı", "İyidere", "Merkez", "Pazar"]
    },
    {
        "id": 54,
        "name": "Sakarya",
        "districts": ["Karasu", "Kaynarca", "Kocaali"]
    },
    {
        "id": 55,
        "name": "Samsun",
        "districts": ["Alaçam", "Atakum", "Bafra", "Canik", "Çarşamba", "İlkadım", "Ondokuzmayıs", "Tekkeköy", "Terme", "Yakakent"]
    },
    {
        "id": 57,
        "name": "Sinop",
        "districts": ["Ayancık", "Dikmen", "Gerze", "Merkez", "Türkeli"]
    },
    {
        "id": 59,
        "name": "Tekirdağ",
        "districts": ["Marmaraereğlisi", "Süleymanpaşa", "Şarköy"]
    },
    {
        "id": 61,
        "name": "Trabzon",
        "districts": ["Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Of", "Ortahisar", "Sürmene", "Vakfıkebir", "Yomra"]
    },
    {
        "id": 77,
        "name": "Yalova",
        "districts": ["Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Merkez", "Termal"]
    },
    {
        "id": 67,
        "name": "Zonguldak",
        "districts": ["Alaplı", "Çaycuma", "Ereğli", "Kilimli", "Kozlu", "Merkez"]
    }
];

const PRIVACY_CONTENT = `
Gizlilik Politikası

Bu gizlilik politikası, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.

1. Veri Toplama:
- İsim, e-posta, telefon numarası ve yat bilgileri gibi kişisel verileriniz, size hizmet sunmak amacıyla toplanmaktadır.
- Web sitemizi ziyaret ettiğinizde çerezler aracılığıyla bazı teknik veriler toplanabilir.

2. Veri Kullanımı:
- Toplanan veriler, talep ettiğiniz teklifleri hazırlamak ve sizinle iletişime geçmek için kullanılır.
- Onay vermeniz durumunda, size kampanya ve duyurular gönderilebilir.

3. Veri Güvenliği:
- Verileriniz güvenli sunucularda saklanır ve yetkisiz erişime karşı korunur.
- Üçüncü taraflarla, yasal zorunluluklar dışında verileriniz paylaşılmaz.

4. Haklarınız:
- Kişisel verilerinize erişme, düzeltme veya silme hakkına sahipsiniz.
- Bizimle iletişime geçerek bu haklarınızı kullanabilirsiniz.

Son Güncelleme: 01.01.2024
`;

const KVKK_CONTENT = `
KVKK Aydınlatma Metni

6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu olarak kişisel verilerinizi aşağıda açıklanan kapsamda işlemekteyiz.

1. İşlenen Kişisel Veriler:
- Kimlik Bilgileri (Ad, Soyad)
- İletişim Bilgileri (E-posta, Telefon)
- Müşteri İşlem Bilgileri (Teklif detayları)

2. İşleme Amaçları:
- Ürün ve hizmetlerin sunulması
- İletişim faaliyetlerinin yürütülmesi
- Müşteri memnuniyetinin sağlanması

3. Aktarım:
- Verileriniz, yasal düzenlemelerin öngördüğü durumlarda yetkili kamu kurumlarına aktarılabilir.

4. KVKK Kapsamındaki Haklarınız:
- Veri işlenip işlenmediğini öğrenme
- İşlenen veriler hakkında bilgi talep etme
- Amaca uygun kullanılıp kullanılmadığını öğrenme
- Düzeltme, silme veya yok edilmesini isteme

Detaylı bilgi için KVKK Politikamızı inceleyebilirsiniz.
`;

const Modal = ({ isOpen, onClose, title, content }: { isOpen: boolean; onClose: () => void; title: string; content: string }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="bg-white dark:bg-slate-800 rounded-sm shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors">
                    <X size={24} />
                </button>
                <div className="p-8 border-b border-slate-100 dark:border-slate-700">
                    <h3 className="text-2xl font-serif dark:text-white">{title}</h3>
                </div>
                <div className="p-8 overflow-y-auto custom-scrollbar">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {content}
                    </pre>
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
                    <button onClick={onClose} className="px-6 py-2 bg-slate-900 dark:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity">
                        Kapat
                    </button>
                </div>
            </div>
        </div>
    );
};


const FormContent = () => {
    const { darkMode } = useTheme();
    const { t } = useLanguage();
    const searchParams = useSearchParams();
    const [step, setStep] = useState(1);
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [selectedProductDetails, setSelectedProductDetails] = useState<Record<string, Record<string, string>>>({}); // { productId: { optionLabel: value } }
    const [measurementMethod, setMeasurementMethod] = useState(""); // 'appointment' or 'manual'

    // ... form state same as before, but with added options handling
    const [formData, setFormData] = useState({
        measurements: "", // Kept for legacy/generic
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        yachtName: "",
        city: "",
        district: "",
        addressDetails: "",
        appointmentDate: null as Date | null,
        bulwarkThickness: "",
        bulwarkWidth: "",
        yachtHeight: "",
        note: "",
        kvkkParams: false,
        marketingConsent: false
    });
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [disabledDates, setDisabledDates] = useState<Date[]>([]);
    const [activeModal, setActiveModal] = useState<'privacy' | 'kvkk' | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const productParam = searchParams.get("product");
        if (productParam && products.some(p => p.id === productParam)) {
            setSelectedProducts(prev => {
                if (prev.includes(productParam)) return prev;
                return [...prev, productParam];
            });

            // Handle options from URL (e.g., Ebat=30x65 cm)
            const product = products.find(p => p.id === productParam);
            if (product && product.options) {
                const details: Record<string, string> = {};
                product.options.forEach(opt => {
                    const val = searchParams.get(opt.label);
                    if (val) details[opt.label] = val;
                });
                if (Object.keys(details).length > 0) {
                    setSelectedProductDetails(prev => ({
                        ...prev,
                        [productParam]: details
                    }));
                }
            }
        }

        // Generate random disabled dates for the next 60 days
        const dates: Date[] = [];
        const today = new Date();
        for (let i = 0; i < 5; i++) {
            const randomDays = Math.floor(Math.random() * 30) + 1; // Random day within next month
            const date = new Date(today);
            date.setDate(today.getDate() + randomDays);
            dates.push(date);
        }
        setDisabledDates(dates);

    }, [searchParams]);

    const handleNext = () => {
        if (step === 1 && selectedProducts.length === 0) return;
        if (step === 2 && !isStep2Valid) return;
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email) {
            setEmailError(""); // Required check handles empty
            return false;
        }
        if (!emailRegex.test(email)) {
            setEmailError(t('contact_email_error'));
            return false;
        }
        setEmailError("");
        return true;
    };

    const validatePhone = (phone: string) => {
        if (!phone || phone.length < 8) {
            setPhoneError(t('contact_phone_error'));
            return false;
        }
        setPhoneError("");
        return true;
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isEmailValid = validateEmail(formData.email);
        const isPhoneValid = validatePhone(formData.phone);

        if (!isEmailValid || !isPhoneValid) return;

        setIsSubmitting(true);

        // Enhance payload with selected options
        const extendedSelectedProducts = selectedProducts.map(id => {
            const product = products.find(p => p.id === id);
            const details = selectedProductDetails[id] || {};
            const detailsString = Object.entries(details).map(([k, v]) => `${k}: ${v}`).join(', ');
            return {
                id,
                name: product?.name,
                details: detailsString
            };
        });

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formData,
                    selectedProducts: extendedSelectedProducts, // Send rich object
                    measurementMethod
                })
            });

            if (!res.ok) {
                throw new Error('Form submission failed');
            }

            setStep(4);
        } catch (error) {
            console.error(error);
            alert(t('error_submission') || "Bir hata oluştu. Lütfen tekrar deneyiniz.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const isStep1Valid = selectedProducts.length > 0;
    const isStep2Valid = measurementMethod === 'appointment'
        ? true
        : (measurementMethod === 'manual' && formData.bulwarkThickness && formData.bulwarkWidth && formData.yachtHeight);

    const isStep3Valid = formData.firstName && formData.lastName && formData.email && !emailError && formData.phone && !phoneError && formData.kvkkParams && formData.city && formData.district;

    const inputBg = darkMode ? 'bg-brand-navy border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900';
    const labelClass = darkMode ? 'text-slate-300' : 'text-slate-700';

    const selectedProductsList = products.filter(p => selectedProducts.includes(p.id));
    const selectedCityObj = coastalLocationData.find(c => c.name === formData.city);

    // DatePicker filter for weekends
    const isWeekday = (date: Date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const productGroups = {
        [t('footer_col_hooks')]: products.filter(p => p.category === 'hook'),
        [t('cat_fenders')]: products.filter(p => p.category === 'fender'),
        [t('cat_fender_covers')]: products.filter(p => p.category === 'cover'),
        [t('cat_fender_lines')]: products.filter(p => p.category === 'line'),
        [t('footer_col_cleats')]: products.filter(p => p.category === 'cleat'),
        [t('footer_col_ladders')]: products.filter(p => p.category === 'ladder'),
        [t('cat_dinghy_hangers')]: products.filter(p => p.category === 'dinghy-hanger')
    };

    return (
        <div className="max-w-4xl mx-auto pt-10">
            <style jsx global>{`
                .react-datepicker-wrapper { width: 100%; display: block; }
                .react-datepicker {
                    font-family: inherit;
                    border: 1px solid #e2e8f0;
                    border-radius: 0.25rem;
                }
                ${darkMode ? `
                    .react-datepicker {
                        background-color: #0d1b2a; 
                        border-color: #334155;
                        color: white;
                    }
                    .react-datepicker__header {
                        background-color: #1a2c3f;
                        border-bottom-color: #334155;
                    }
                    .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
                        color: white;
                    }
                    .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
                        color: #cbd5e1;
                    }
                    .react-datepicker__day:hover {
                         background-color: #334155;
                    }
                    .react-datepicker__day--disabled {
                        color: #475569;
                    }
                    .react-datepicker__day--selected {
                        background-color: #aa8c56 !important;
                        color: white !important;
                    }
                ` : `
                    .react-datepicker__day--selected {
                        background-color: #aa8c56 !important;
                        color: white !important;
                    }
                `}
                /* Phone Input Custom Styles */
                .react-tel-input .form-control {
                    width: 100% !important;
                    height: 50px !important;
                    background-color: ${darkMode ? '#0d1b2a' : '#f8fafc'} !important;
                    border-color: ${phoneError ? '#ef4444' : (darkMode ? '#334155' : '#e2e8f0')} !important;
                    color: ${darkMode ? 'white' : '#0f172a'} !important;
                    border-radius: 0.125rem !important;
                    padding-left: 50px !important; /* Ensure text doesn't overlap with flag */
                }
                .react-tel-input .flag-dropdown {
                    background-color: ${darkMode ? '#0d1b2a' : '#f8fafc'} !important;
                    border-color: ${darkMode ? '#334155' : '#e2e8f0'} !important;
                    border-radius: 0.125rem 0 0 0.125rem !important;
                }
                 .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
                     background-color: ${darkMode ? '#1e293b' : '#f1f5f9'} !important;
                 }
                 .react-tel-input .country-list {
                    background-color: ${darkMode ? '#0d1b2a' : 'white'} !important;
                    color: ${darkMode ? 'white' : 'black'} !important;
                    width: 300px !important;
                 }
                 .react-tel-input .country-list .country:hover {
                    background-color: ${darkMode ? '#1e293b' : '#f1f5f9'} !important;
                 }
                 .react-tel-input .country-list .country.highlight {
                    background-color: ${darkMode ? '#334155' : '#f1f5f9'} !important;
                 }
            `}</style>

            {/* Progress Indicator */}
            <div className="flex justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 -translate-y-1/2 rounded-full"></div>
                <div className={`absolute top-1/2 left-0 h-1 bg-brand-gold -z-10 -translate-y-1/2 transition-all duration-500 rounded-full`} style={{ width: `${((step - 1) / 2) * 100}%` }}></div>

                {[1, 2, 3].map((s) => {
                    // Check if this step is reachable
                    let isReachable = false;
                    if (s < step) isReachable = true; // Always allow going back
                    if (s === step) isReachable = true;
                    if (s === step + 1) { // Can we advance to next?
                        if (step === 1 && isStep1Valid) isReachable = true;
                        if (step === 2 && isStep2Valid) isReachable = true;
                    }
                    if (s === 3 && step === 1) { // Can we skip from 1 to 3? Only if 1 AND 2 are valid (but 2 depends on choice? No, just validate)
                        // This is tricky. Step 2 requires input. So usually can't skip 2 unless it's valid.
                        if (isStep1Valid && isStep2Valid) isReachable = true;
                    }
                    // Simplified Reachability: 
                    // Step 1: Always reachable
                    // Step 2: Reachable if Step 1 is valid
                    // Step 3: Reachable if Step 1 AND Step 2 are valid

                    const canJumpTo = (target: number) => {
                        if (target === 1) return true;
                        if (target === 2) return isStep1Valid;
                        if (target === 3) return isStep1Valid && isStep2Valid;
                        return false;
                    };

                    const clickable = canJumpTo(s);

                    return (
                        <div
                            key={s}
                            onClick={() => clickable && setStep(s)}
                            className={`flex flex-col items-center gap-2 bg-transparent transition-all ${clickable ? 'cursor-pointer hover:opacity-80' : 'cursor-not-allowed opacity-100'}`}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-brand-gold text-white scale-110' : (darkMode ? 'bg-slate-800 text-slate-500' : 'bg-white text-slate-400 border border-slate-200')}`}>
                                {step > s ? '✓' : s}
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-wider ${step >= s ? 'text-brand-gold' : 'text-slate-400'}`}>
                                {s === 1 ? t('contact_step1') : s === 2 ? t('contact_step2') : t('contact_step3')}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Persistent Product Summary - Only show if step > 1 */}
            {selectedProductsList.length > 0 && step > 1 && (
                <div className={`mb-8 p-4 rounded-sm border flex items-center gap-4 transition-all ${darkMode ? 'bg-brand-navy border-slate-700' : 'bg-white border-brand-gold/20'}`}>
                    <div className="flex -space-x-4">
                        {selectedProductsList.map(p => (
                            <img key={p.id} src={p.image} alt={p.name} className="w-16 h-16 object-contain bg-white rounded-sm border border-brand-gold/20" />
                        ))}
                    </div>

                    <div>
                        <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">İLGİLENDİĞİNİZ ÜRÜNLER</span>
                        <h4 className={`text-xl font-serif ${darkMode ? 'text-white' : 'text-slate-900'}`}>{selectedProductsList.map(p => {
                            const details = selectedProductDetails[p.id];
                            const detailStr = details ? ` (${Object.values(details).join(', ')})` : '';
                            return p.name + detailStr;
                        }).join(", ")}</h4>
                    </div>
                    {step > 1 && (
                        <button onClick={() => setStep(1)} className="ml-auto text-xs underline opacity-50 hover:opacity-100">{t('contact_change')}</button>
                    )}
                </div>
            )}

            {/* Flex Container for Form & Sidebar */}
            <div className={`flex flex-col lg:flex-row items-start gap-8 ${step > 1 ? 'justify-center' : ''}`}>

                {/* Main Form Area */}
                <form
                    onSubmit={handleSubmit}
                    className={`
                        w-full rounded-sm border transition-colors relative
                        ${step === 1 ? 'flex-1' : 'max-w-4xl mx-auto'} 
                        ${darkMode ? 'bg-brand-navy/50 border-slate-700' : 'bg-white border-slate-200'}
                        p-8 md:p-12
                    `}
                >
                    {/* Step 1: Product Selection */}
                    {step === 1 && (
                        <div className="animate-fade-in-up">
                            <h3 className={`text-2xl font-serif mb-8 text-center lg:text-left ${darkMode ? 'text-white' : 'text-slate-900'}`}>İlgilendiğiniz Ürünler</h3>

                            <div className="space-y-12">
                                {Object.entries(productGroups).map(([category, items]) => items.length > 0 && (
                                    <div key={category}>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-4 border-b border-brand-gold/20 pb-2">{category}</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {items.map((p) => {
                                                const isSelected = selectedProducts.includes(p.id);
                                                const details = selectedProductDetails[p.id];

                                                return (
                                                    <div
                                                        key={p.id}
                                                        onClick={() => setSelectedProducts(prev => prev.includes(p.id) ? prev.filter(id => id !== p.id) : [...prev, p.id])}
                                                        className={`cursor-pointer rounded-sm overflow-hidden border-2 transition-all duration-300 relative group flex flex-col ${isSelected ? 'border-brand-gold ring-4 ring-brand-gold/20 scale-105' : (darkMode ? 'border-slate-700 hover:border-slate-500' : 'border-slate-100 hover:border-slate-300')}`}
                                                    >
                                                        <div className="aspect-square relative bg-white/5 p-4 flex items-center justify-center">
                                                            {/* Overlay removed as requested */}
                                                            <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                                                            {isSelected && (
                                                                <div className="absolute top-2 right-2 bg-brand-gold text-white p-1 rounded-full z-20 shadow-lg animate-bounce-short">
                                                                    <Check size={16} />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className={`p-4 text-center font-serif font-bold flex-1 flex flex-col justify-center ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-900'} ${isSelected ? '!text-slate-900 !bg-brand-gold' : ''}`}>
                                                            {p.name}
                                                            {isSelected && details && Object.keys(details).length > 0 && (
                                                                <div className="text-[10px] mt-2 opacity-80 bg-black/10 rounded px-2 py-1">
                                                                    {Object.entries(details).map(([k, v]) => `${k}: ${v}`).join(', ')}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Measurements */}
                    {step === 2 && (
                        <div className="animate-fade-in-up">
                            <h3 className={`text-2xl font-serif mb-8 text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('contact_step2')}</h3>

                            <div className="flex flex-col md:flex-row gap-6 mb-8">
                                <label className={`flex-1 p-6 border-2 rounded-sm cursor-pointer transition-all relative ${measurementMethod === 'appointment' ? 'border-brand-gold bg-brand-gold/10' : (darkMode ? 'border-slate-700 hover:border-slate-600' : 'border-slate-200 hover:border-slate-300')}`}>
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-[10px] tracking-wider px-3 py-1 rounded-full uppercase font-bold shadow-lg">
                                        {t('contact_recommended')}
                                    </div>
                                    <input type="radio" name="method" value="appointment" className="hidden" checked={measurementMethod === 'appointment'} onChange={() => setMeasurementMethod('appointment')} />
                                    <div className="text-center">
                                        <div className="text-brand-gold mb-3 flex justify-center"><Star size={32} /></div>
                                        <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('contact_appointment')}</h4>
                                        <p className={`text-sm opacity-80 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('contact_appointment_desc')}</p>
                                    </div>
                                </label>

                                <label className={`flex-1 p-6 border-2 rounded-sm cursor-pointer transition-all ${measurementMethod === 'manual' ? 'border-brand-gold bg-brand-gold/10' : (darkMode ? 'border-slate-700 hover:border-slate-600' : 'border-slate-200 hover:border-slate-300')}`}>
                                    <input type="radio" name="method" value="manual" className="hidden" checked={measurementMethod === 'manual'} onChange={() => setMeasurementMethod('manual')} />
                                    <div className="text-center">
                                        <div className="text-brand-gold mb-3 flex justify-center"><ChevronRight size={32} /></div>
                                        <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('contact_manual')}</h4>
                                        <p className={`text-sm opacity-80 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('contact_manual_desc')}</p>
                                    </div>
                                </label>
                            </div>

                            {measurementMethod === 'manual' && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
                                    <div>
                                        <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('measure_thickness')}</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg} pr-12`}
                                                value={formData.bulwarkThickness}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/[^0-9]/g, '');
                                                    setFormData({ ...formData, bulwarkThickness: val });
                                                }}
                                            />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold opacity-50">mm</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('measure_width')}</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg} pr-12`}
                                                value={formData.bulwarkWidth}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/[^0-9]/g, '');
                                                    setFormData({ ...formData, bulwarkWidth: val });
                                                }}
                                            />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold opacity-50">mm</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('measure_height')}</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg} pr-12`}
                                                value={formData.yachtHeight}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/[^0-9]/g, '');
                                                    setFormData({ ...formData, yachtHeight: val });
                                                }}
                                            />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold opacity-50">cm</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 3: Details */}
                    {step === 3 && (
                        <div className="animate-fade-in-up">
                            <h3 className={`text-2xl font-serif mb-8 text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('contact_step3')}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Name & Surname Split */}
                                <div>
                                    <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_firstname')}</label>
                                    <input type="text" required className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                </div>
                                <div>
                                    <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_lastname')}</label>
                                    <input type="text" required className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`} value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                </div>

                                {/* Email & Phone */}
                                <div>
                                    <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_email')}</label>
                                    <input
                                        type="email"
                                        required
                                        className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg} ${emailError ? 'border-red-500' : ''}`}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        onBlur={(e) => validateEmail(e.target.value)}
                                    />
                                    {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                                </div>
                                <div>
                                    <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_phone')}</label>
                                    <PhoneInput
                                        country={'tr'}
                                        value={formData.phone}
                                        onChange={(phone) => {
                                            setFormData({ ...formData, phone });
                                            if (phoneError) setPhoneError("");
                                        }}
                                        inputClass={`!w-full !pl-14 !pr-4 !py-3 !rounded-sm !border !outline-none !transition-all ${phoneError ? '!border-red-500' : ''}`}
                                        containerClass="!w-full"
                                        buttonClass="!border-r-0 !rounded-l-sm"
                                        placeholder={t('contact_phone')}
                                    />
                                    {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                                </div>

                                {/* Optional Yacht Name */}
                                <div>
                                    <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_yacht_optional')}</label>
                                    <input type="text" className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`} value={formData.yachtName} onChange={(e) => setFormData({ ...formData, yachtName: e.target.value })} />
                                </div>

                                {/* Coastal Location Selector - For BOTH Appointment and Manual */}
                                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
                                    <div>
                                        <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_city_label')}</label>
                                        <select
                                            className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all appearance-none cursor-pointer ${inputBg}`}
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value, district: "" })}
                                            required
                                        >
                                            <option value="">{t('contact_select')}</option>
                                            {coastalLocationData.map(city => (
                                                <option key={city.id} value={city.name}>{city.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_district_label')}</label>
                                        <select
                                            className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all appearance-none cursor-pointer ${inputBg}`}
                                            value={formData.district}
                                            onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                                            required
                                            disabled={!formData.city}
                                        >
                                            <option value="">{t('contact_select')}</option>
                                            {selectedCityObj && selectedCityObj.districts.map((dist) => (
                                                <option key={dist} value={dist}>{dist}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Optional Note */}
                                <div className="md:col-span-2">
                                    <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_note')}</label>
                                    <textarea rows={2} className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`} value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })}></textarea>
                                </div>

                                {/* Conditional Date Picker - Only for Appointment, after City/District filled */}
                                {measurementMethod === 'appointment' && (
                                    <div className={`md:col-span-2 transition-all duration-500 overflow-hidden ${formData.city && formData.district ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-50'}`}>
                                        <div className={`p-6 rounded-sm border border-brand-gold/30 bg-brand-gold/5 flex flex-col md:flex-row items-center gap-6`}>
                                            <div className="text-brand-gold hidden md:block"><Star size={24} /></div>
                                            <div className="flex-1 w-full">
                                                <label className={`block text-xs uppercase tracking-wider font-bold mb-4 ${labelClass}`}>{t('contact_date_label')}</label>
                                                <DatePicker
                                                    selected={formData.appointmentDate}
                                                    onChange={(date: Date | null) => setFormData({ ...formData, appointmentDate: date })}
                                                    minDate={new Date()}
                                                    filterDate={isWeekday}
                                                    excludeDates={disabledDates}
                                                    inline
                                                    calendarStartDay={1}
                                                    wrapperClassName="w-full flex justify-center"
                                                    calendarClassName="!shadow-none !border-0"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Legal Checkboxes */}
                                <div className="flex flex-col gap-4 mb-8">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 shrink-0 rounded-sm border flex items-center justify-center transition-all ${formData.kvkkParams ? 'bg-brand-gold border-brand-gold' : (darkMode ? 'border-slate-600' : 'border-slate-300')}`}>
                                            {formData.kvkkParams && <Check size={12} className="text-white" />}
                                        </div>
                                        <input type="checkbox" checked={formData.kvkkParams} onChange={(e) => setFormData({ ...formData, kvkkParams: e.target.checked })} className="hidden" />
                                        <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'} transition-colors`}>
                                            <span className="underline hover:text-brand-gold cursor-pointer" onClick={(e) => { e.preventDefault(); setActiveModal('privacy'); }}>Gizlilik Politikası</span> ve <span className="underline hover:text-brand-gold cursor-pointer" onClick={(e) => { e.preventDefault(); setActiveModal('kvkk'); }}>KVKK Aydınlatma Metnini</span> okudum.
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 shrink-0 rounded-sm border flex items-center justify-center transition-all ${formData.marketingConsent ? 'bg-brand-gold border-brand-gold' : (darkMode ? 'border-slate-600' : 'border-slate-300')}`}>
                                            {formData.marketingConsent && <Check size={12} className="text-white" />}
                                        </div>
                                        <input type="checkbox" checked={formData.marketingConsent} onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })} className="hidden" />
                                        <span className={`text-xs whitespace-nowrap ${darkMode ? 'text-slate-400' : 'text-slate-600'} transition-colors`}>{t('contact_marketing_consent')}</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    )}

                    {/* Buttons - Only show if Step < 4 */}
                    {step < 4 && (
                        <div className="flex justify-between mt-12 pt-6 border-t border-slate-200/20">
                            {step > 1 ? (
                                <button type="button" onClick={handleBack} className={`text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    ← {t('btn_back')}
                                </button>
                            ) : <div></div>}

                            {/* Standard Next Button - Hide in Step 1 if sidebar is present to rely on sidebar button? 
                                Actually let's keep it but maybe visually distinct or hidden if selections imply sidebar usage.
                                User asked for "Sonraki Adım" in SideBar. 
                                I will HIDE this bottom button in Step 1 if there are selected items, forcing use of sidebar?
                                No, simply keep it.
                            */}
                            {step < 3 ? (
                                <button type="button" onClick={handleNext} disabled={step === 1 ? !isStep1Valid : !isStep2Valid} className={`px-8 py-3 bg-brand-gold text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-all ${step === 1 ? (!isStep1Valid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-gold/80') : (!isStep2Valid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-gold/80')}`}>
                                    {t('btn_next')}
                                </button>
                            ) : (
                                <button type="submit" disabled={!isStep3Valid || isSubmitting} className={`px-10 py-3 bg-brand-gold text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-all animate-pulse ${(!isStep3Valid || isSubmitting) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-gold/80'}`}>
                                    {isSubmitting ? '...' : t('btn_submit')}
                                </button>
                            )}
                        </div>
                    )}

                    {/* Step 4: Success View */}
                    {step === 4 && (
                        <div className="text-center animate-fade-in-up py-12">
                            <div className="w-24 h-24 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-gold/30">
                                <Check size={48} />
                            </div>
                            <h3 className={`text-3xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('contact_success_title')}</h3>
                            <p className={`text-lg opacity-80 max-w-lg mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('contact_success_desc')}</p>
                            <button onClick={() => window.location.href = '/'} className="mt-8 px-8 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-colors rounded-sm uppercase font-bold tracking-widest text-sm">
                                {t('nav_home')}
                            </button>
                        </div>
                    )}
                </form>

                {/* Sidebar - Sticky - Selected Products - Outside Form */}
                {step === 1 && (
                    <div className="hidden lg:block w-80 sticky top-24 animate-fade-in-right z-30 shrink-0">
                        {selectedProducts.length > 0 ? (
                            <div className={`p-6 rounded-sm border shadow-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} transition-all`}>
                                <div className="flex items-center justify-between mb-4 border-b pb-2 border-slate-100 dark:border-slate-700">
                                    <h4 className={`font-serif font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Seçilenler ({selectedProducts.length})</h4>
                                    <button
                                        type="button"
                                        onClick={(e) => { e.stopPropagation(); setSelectedProducts([]); setSelectedProductDetails({}); }}
                                        className="text-xs text-red-500 hover:text-red-600 underline"
                                    >
                                        Temizle
                                    </button>
                                </div>

                                <div className="space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar mb-6 pr-1">
                                    {selectedProducts.map(id => {
                                        const p = products.find(prod => prod.id === id);
                                        if (!p) return null;
                                        const details = selectedProductDetails[id];
                                        return (
                                            <div key={id} className={`flex items-center gap-3 p-2 rounded-sm border ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                                                <img src={p.image} alt={p.name} className="w-10 h-10 object-contain bg-white rounded-sm border border-slate-200 shrink-0" />
                                                <div className="flex-1 min-w-0">
                                                    <div className={`text-xs font-bold truncate ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{p.name}</div>
                                                    {details && (
                                                        <div className="text-[10px] text-brand-gold truncate">{Object.values(details).join(', ')}</div>
                                                    )}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedProducts(prev => prev.filter(pid => pid !== id))}
                                                    className="text-slate-400 hover:text-red-500 transition-colors shrink-0"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>

                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="w-full py-3 bg-brand-gold text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-brand-gold/80 transition-colors flex items-center justify-center gap-2"
                                >
                                    {t('btn_next')} <ArrowRight size={16} />
                                </button>
                            </div>
                        ) : (
                            <div className={`p-6 rounded-sm border border-dashed ${darkMode ? 'border-slate-700 bg-slate-900/20' : 'border-slate-200 bg-slate-50/50'} text-center h-full flex items-center justify-center opacity-60`}>
                                <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                    Lütfen teklif almak ilgilendiğiniz ürünleri seçiniz.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <Modal isOpen={activeModal === 'privacy'} onClose={() => setActiveModal(null)} title="Gizlilik Politikası" content={PRIVACY_CONTENT} />
            <Modal isOpen={activeModal === 'kvkk'} onClose={() => setActiveModal(null)} title="KVKK Aydınlatma Metni" content={KVKK_CONTENT} />
        </div>
    );
};

export const MultiStepForm = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FormContent />
        </Suspense>
    );
};
