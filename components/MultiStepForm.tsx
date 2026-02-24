"use client";

import React, { useState, useEffect, Suspense, useRef } from 'react';
import { useSearchParams } from "next/navigation";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { useQuote } from "./QuoteContext";
import { ArrowRight, Check, X } from "./icons";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { productsData } from "@/data/products"; // Import real data
// Custom styles handled via styled-jsx below

const products = productsData; // Use imported data





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


    // Replace local state with Global Context
    const {
        selectedProducts,
        setSelectedProducts,
        selectedProductDetails,
        setSelectedProductDetails,
        formData,
        setFormData,
        currentStep, // Get currentStep
        setCurrentStep // Get setCurrentStep
    } = useQuote();

    // Map global step to local variable names to minimize refactoring
    const step = currentStep;
    const setStep = setCurrentStep;

    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [activeModal, setActiveModal] = useState<'privacy' | 'kvkk' | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isSubmittingRef = useRef(false);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    const handleNext = () => {
        if (step === 1 && selectedProducts.length === 0) return;
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

        // Prevent double submission
        if (isSubmittingRef.current) return;

        const isEmailValid = validateEmail(formData.email);
        const isPhoneValid = validatePhone(formData.phone);

        if (!isEmailValid || !isPhoneValid) return;

        setIsSubmitting(true);
        isSubmittingRef.current = true;

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
                    selectedProducts: extendedSelectedProducts
                })
            });

            if (!res.ok) {
                throw new Error('Form submission failed');
            }

            setStep(3);
        } catch (error) {
            console.error(error);
            alert(t('error_submission') || "Bir hata oluştu. Lütfen tekrar deneyiniz.");
            isSubmittingRef.current = false; // Release lock on error
        } finally {
            setIsSubmitting(false);
            // Don't release lock on success to prevent re-submission while looking at success screen
            if (step !== 3) isSubmittingRef.current = false;
        }
    };

    const isStep1Valid = selectedProducts.length > 0;
    const isStep2Valid = formData.firstName && formData.lastName && formData.email && !emailError && formData.phone && !phoneError && formData.kvkkParams;

    const inputBg = darkMode ? 'bg-brand-navy border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900';
    const labelClass = darkMode ? 'text-slate-300' : 'text-slate-700';

    const selectedProductsList = products.filter(p => selectedProducts.includes(p.id));

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
                    const canJumpTo = (target: number) => {
                        if (target === 1) return true;
                        if (target === 2) return isStep1Valid;
                        if (target === 3) return isStep1Valid && isStep2Valid; // Step 2 is now contact
                        return false;
                    };

                    const clickable = canJumpTo(s);
                    const label = s === 1 ? t('contact_step1') : s === 2 ? t('contact_step3') : t('contact_success_title');

                    // If we only have 2 steps + success, maybe we should just show 2 steps or 3? 
                    // Let's treat it as: 1. Products, 2. Contact, 3. Success (or just 2 steps in bar?)
                    // The UI had 3 circles. Let's keep 3 for visual balance: 1. Products, 2. Contact, 3. Finish

                    return (
                        <div
                            key={s}
                            onClick={() => clickable && s < 3 && setStep(s)} // Don't click to success
                            className={`flex flex-col items-center gap-2 bg-transparent transition-all ${clickable && s < 3 ? 'cursor-pointer hover:opacity-80' : 'cursor-not-allowed opacity-100'}`}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-brand-gold text-white scale-110' : (darkMode ? 'bg-slate-800 text-slate-500' : 'bg-white text-slate-400 border border-slate-200')}`}>
                                {step > s ? '✓' : s}
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-wider ${step >= s ? 'text-brand-gold' : 'text-slate-400'}`}>
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Persistent Product Summary - Only show if step > 1 */}
            {selectedProductsList.length > 0 && step > 1 && (
                <div className={`mb-8 rounded-sm border overflow-hidden transition-all ${darkMode ? 'bg-brand-navy border-slate-700' : 'bg-white border-brand-gold/20'}`}>
                    <div className={`p-4 border-b flex items-center justify-between ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-brand-gold/10 bg-brand-gold/5'}`}>
                        <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">SEÇİLEN ÜRÜNLER ({selectedProductsList.length})</span>
                        {step > 1 && step < 3 && (
                            <button onClick={() => setStep(1)} className="text-xs underline opacity-50 hover:opacity-100 transition-opacity">
                                {t('contact_change')}
                            </button>
                        )}
                    </div>

                    <div className="p-4 flex flex-col gap-3">
                        {selectedProductsList.map(p => {
                            const details = selectedProductDetails[p.id];
                            return (
                                <div key={p.id} className={`flex items-start gap-4 p-3 rounded-sm border ${darkMode ? 'border-slate-700 bg-slate-900/50' : 'border-slate-100 bg-slate-50'}`}>
                                    <img src={p.image} alt={p.name} className="w-12 h-12 object-contain bg-white rounded-sm border border-slate-200 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <div className={`font-serif font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{p.name}</div>
                                        {details && Object.keys(details).length > 0 && (
                                            <div className="text-xs text-brand-gold mt-1">
                                                {Object.values(details).join(', ')}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
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

                    {/* Step 2: Contact Details (Formerly Step 3) */}
                    {step === 2 && (
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

                                {/* Yacht / Firm Name (Optional) */}
                                <div className="md:col-span-2">
                                    <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_yacht_company_optional') || "Yat / Firma Adı (Opsiyonel)"}</label>
                                    <input type="text" className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`} value={formData.yachtName} onChange={(e) => setFormData({ ...formData, yachtName: e.target.value })} />
                                </div>

                                {/* Yacht / Firm City (Optional) */}
                                <div className="md:col-span-2">
                                    <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_city_company_optional') || "Yat / Firma'nın Bulunduğu Şehir (Opsiyonel)"}</label>
                                    <input type="text" className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`} value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                                </div>

                                {/* Optional Note */}
                                <div className="md:col-span-2">
                                    <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_note')}</label>
                                    <textarea rows={2} className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`} value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })}></textarea>
                                </div>

                                {/* Legal Checkboxes */}
                                <div className="flex flex-col gap-4 mb-8 md:col-span-2">
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

                    {/* Buttons - Only show if Step < 3 */}
                    {step < 3 && (
                        <div className="flex justify-between mt-12 pt-6 border-t border-slate-200/20">
                            {step > 1 ? (
                                <button type="button" onClick={handleBack} className={`text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    ← {t('btn_back')}
                                </button>
                            ) : <div></div>}

                            {step < 2 ? (
                                <button type="button" onClick={handleNext} disabled={step === 1 ? !isStep1Valid : !isStep2Valid} className={`px-8 py-3 bg-brand-gold text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-all ${step === 1 ? (!isStep1Valid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-gold/80') : (!isStep2Valid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-gold/80')}`}>
                                    {t('btn_next')}
                                </button>
                            ) : (
                                <button type="submit" disabled={!isStep2Valid || isSubmitting} className={`px-10 py-3 bg-brand-gold text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-all animate-pulse ${(!isStep2Valid || isSubmitting) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-gold/80'}`}>
                                    {isSubmitting ? '...' : t('btn_submit')}
                                </button>
                            )}
                        </div>
                    )}

                    {/* Step 3: Success View (Formerly Step 4) */}
                    {step === 3 && (
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
