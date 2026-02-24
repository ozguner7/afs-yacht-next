"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from './QuoteContext';
import { useTheme } from './ThemeContext';
import { X, ArrowRight, Trash, ChevronDown } from './icons';
import { useTabTitle } from '../hooks/useTabTitle';
import { productsData } from '@/data/products';

export const FloatingBasket = () => {
    const { selectedProducts, selectedProductDetails, removeProduct, clearBasket } = useQuote();
    const { darkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    // Activate the tab title effect
    useTabTitle();

    if (selectedProducts.length === 0) return null;

    return (
        <div className="fixed bottom-8 right-8 z-[90] flex flex-col items-end gap-0">

            {/* Popover */}
            <div
                className={`
                    w-80 transition-all duration-300 origin-bottom 
                    ${isOpen ? 'opacity-100 scale-100 mb-0' : 'opacity-0 scale-95 mb-4 pointer-events-none h-0 overflow-hidden'} 
                    rounded-t-xl shadow-2xl overflow-hidden
                    ${darkMode ? 'bg-brand-navy border border-slate-700' : 'bg-white border border-slate-200'}
                `}
            >
                {/* Header */}
                <div className={`p-4 border-b flex items-center justify-between relative ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-100 bg-slate-50'}`}>
                    <h4 className={`font-serif font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Seçilenler ({selectedProducts.length})
                    </h4>

                    <button
                        onClick={() => {
                            clearBasket();
                            setIsOpen(false);
                        }}
                        className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
                        title="Tümünü Temizle"
                    >
                        <Trash size={14} /> Temizle
                    </button>
                </div>

                {/* List */}
                <div className="max-h-[50vh] overflow-y-auto custom-scrollbar p-2 space-y-2 bg-opacity-50">
                    {selectedProducts.map(id => {
                        const product = productsData.find(p => p.id === id);
                        if (!product) return null;
                        const details = selectedProductDetails[id];

                        return (
                            <div key={id} className={`flex items-start gap-3 p-2 rounded-sm border ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                                <div className="w-10 h-10 bg-white rounded-sm border border-slate-200 shrink-0 relative overflow-hidden">
                                    <Image src={product.image} alt={product.name} fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className={`text-xs font-bold leading-tight ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{product.name}</div>
                                    {details && (
                                        <div className="text-[10px] text-brand-gold mt-0.5 truncate">
                                            {Object.values(details).join(', ')}
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeProduct(id);
                                        if (selectedProducts.length <= 1) setIsOpen(false);
                                    }}
                                    className="text-slate-400 hover:text-red-500 p-1"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        )
                    })}
                </div>

                {/* Footer Action */}
                <div className={`p-3 border-t ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
                    <Link
                        href="/teklif"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-brand-gold text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-brand-gold/90 transition-colors"
                    >
                        Teklifi Tamamla <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-80 h-16 rounded-xl shadow-2xl transition-all duration-300
                    flex items-center justify-between px-6
                    ${isOpen ? 'rounded-b-xl rounded-t-none' : 'rounded-xl'}
                    ${darkMode ? 'bg-brand-gold text-brand-navy' : 'bg-brand-navy text-white'}
                `}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 relative flex items-center justify-center">
                        <Image src="/logo.png" alt="AFS" width={32} height={32} className="object-contain" />
                    </div>
                    <div className="flex flex-col items-start gap-0.5">
                        <span className="text-sm font-bold leading-none">İlgilendiğiniz Ürünler</span>
                    </div>
                </div>

                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                </div>
            </button>
        </div>
    );
};
