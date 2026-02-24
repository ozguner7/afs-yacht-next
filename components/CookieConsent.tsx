"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { X, ChevronDown, Check, Shield } from './icons';

type CookiePreferences = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
};

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true, // Always true and disabled
        analytics: true,
        marketing: true
    });

    const { darkMode } = useTheme();

    useEffect(() => {
        // Changed key to v2 to force re-consent for enhanced version
        const consent = localStorage.getItem('cookie_consent_v2');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500); // Slight delay for animation
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        const allTrue = { necessary: true, analytics: true, marketing: true };
        saveConsent(allTrue);
    };

    const handleSavePreferences = () => {
        saveConsent(preferences);
    };

    const saveConsent = (prefs: CookiePreferences) => {
        localStorage.setItem('cookie_consent_v2', JSON.stringify(prefs));
        setIsVisible(false);
        // Here you would trigger GTM or other scripts based on prefs
    };

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === 'necessary') return; // Cannot toggle necessary
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-0 left-0 w-full z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-500 animate-slide-up ${darkMode ? 'bg-brand-navy border-t border-brand-gold/20 text-slate-200' : 'bg-white border-t border-brand-gold/20 text-slate-700'}`}>

            {/* Main Bar */}
            <div className={`max-w-7xl mx-auto p-4 md:p-6 ${showDetails ? 'border-b border-slate-200/10' : ''}`}>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Shield size={18} className="text-brand-gold" />
                            <h3 className="font-bold text-sm uppercase tracking-wide">Çerez Tercihleri</h3>
                        </div>
                        <p className="text-sm opacity-80 leading-relaxed max-w-3xl">
                            Size daha iyi bir alışveriş deneyimi sunabilmek, teklif formunda kaldığınız yeri hatırlamak ve sitemizi geliştirmek için çerezler kullanıyoruz.
                            Detaylı bilgi için <a href="#" className="underline decoration-brand-gold underline-offset-2 hover:text-brand-gold transition-colors">Çerez Politikamızı</a> inceleyebilirsiniz.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className={`text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm border transition-colors w-full sm:w-auto flex items-center justify-center gap-2 ${darkMode ? 'border-slate-600 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-50'}`}
                        >
                            {showDetails ? 'Gizle' : 'Ayarlar'} <ChevronDown size={14} className={`transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="text-xs font-bold uppercase tracking-wider px-6 py-2.5 bg-brand-gold text-white rounded-sm hover:bg-brand-gold/90 transition-colors w-full sm:w-auto shadow-md"
                        >
                            Tümünü Kabul Et
                        </button>
                    </div>
                </div>
            </div>

            {/* Detailed Settings (Expandable) */}
            {showDetails && (
                <div className={`max-w-7xl mx-auto p-4 md:p-6 animate-fade-in ${darkMode ? 'bg-slate-900/50' : 'bg-slate-50/50'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Necessary */}
                        <div className={`p-4 rounded-sm border ${darkMode ? 'bg-brand-navy border-slate-700' : 'bg-white border-slate-200'}`}>
                            <div className="flex items-center justify-between mb-2">
                                <div className="font-bold text-sm flex items-center gap-2">
                                    Zorunlu Çerezler
                                    <span className="text-[10px] bg-brand-gold/20 text-brand-gold px-1.5 py-0.5 rounded">Her Zaman Açık</span>
                                </div>
                                <div className={`w-10 h-5 rounded-full relative bg-brand-gold opacity-50 cursor-not-allowed`}>
                                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
                                </div>
                            </div>
                            <p className="text-xs opacity-70">
                                Sitenin temel işlevleri (sepet, teklif formu hafızası vb.) için gereklidir. Bu çerezler kapatılamaz.
                            </p>
                        </div>

                        {/* Analytics */}
                        <div className={`p-4 rounded-sm border transition-colors ${darkMode ? 'bg-brand-navy border-slate-700' : 'bg-white border-slate-200'}`}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-sm">Analiz ve Performans</span>
                                <button
                                    onClick={() => togglePreference('analytics')}
                                    className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${preferences.analytics ? 'bg-brand-gold' : 'bg-slate-300 dark:bg-slate-600'}`}
                                >
                                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-300 ${preferences.analytics ? 'right-1' : 'left-1'}`} />
                                </button>
                            </div>
                            <p className="text-xs opacity-70">
                                Sitemizi nasıl kullandığınızı analiz ederek kullanıcı deneyimini iyileştirmemize yardımcı olur.
                            </p>
                        </div>

                        {/* Marketing */}
                        <div className={`p-4 rounded-sm border transition-colors ${darkMode ? 'bg-brand-navy border-slate-700' : 'bg-white border-slate-200'}`}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-sm">Pazarlama</span>
                                <button
                                    onClick={() => togglePreference('marketing')}
                                    className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${preferences.marketing ? 'bg-brand-gold' : 'bg-slate-300 dark:bg-slate-600'}`}
                                >
                                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-300 ${preferences.marketing ? 'right-1' : 'left-1'}`} />
                                </button>
                            </div>
                            <p className="text-xs opacity-70">
                                Size özel kampanyalar ve içerikler sunmamızı sağlar.
                            </p>
                        </div>

                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleSavePreferences}
                            className={`text-xs font-bold uppercase tracking-wider px-8 py-2.5 rounded-sm transition-colors border ${darkMode ? 'border-brand-gold text-brand-gold hover:bg-brand-gold/10' : 'border-brand-gold text-brand-gold hover:bg-brand-gold/5'}`}
                        >
                            Seçimlerimi Kaydet
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
