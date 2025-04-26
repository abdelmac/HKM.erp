"use client";

import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  const [language, setLanguage] = useState("fr");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Ici tu peux aussi changer la langue avec i18next ou autre
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      
      {/* Sidebar */}
      <aside className="w-64 hidden sm:flex flex-col bg-white dark:bg-[#111] border-r border-black/[.08] dark:border-white/[.145] p-6">
        <div className="flex items-center gap-2 mb-10">
          <Image src="/logo-hkm.svg" alt="ERP HKM" width={40} height={40} />
          <span className="text-lg font-bold">ERP HKM</span>
        </div>

        <nav className="flex flex-col gap-4">
          <a className="hover:underline" href="/">🏠 Dashboard</a>
          <a className="hover:underline" href="/factures">🧾 Factures</a>
          <a className="hover:underline" href="/articles">📦 Articles</a>
          <a className="hover:underline" href="/clients">👥 Clients</a>
          <a className="hover:underline" href="/comptabilite">📊 Comptabilité</a>
          <a className="hover:underline" href="/parametres">⚙️ Paramètres</a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        
        {/* Navbar */}
        <header className="flex justify-between items-center p-6 border-b border-black/[.08] dark:border-white/[.145] bg-white dark:bg-[#111]">
          <div className="sm:hidden flex items-center gap-2">
            <Image src="/logo-hkm.svg" alt="ERP HKM" width={30} height={30} />
            <span className="text-base font-bold">ERP HKM</span>
          </div>

          {/* Language Selector */}
          <div className="flex gap-2 items-center">
            {["fr", "ar", "de", "tr", "en"].map((lang) => (
              <button
                key={lang}
                className={`px-2 py-1 rounded ${language === lang ? "bg-black text-white dark:bg-white dark:text-black" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => handleLanguageChange(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-8 flex flex-col items-center sm:items-start gap-10">
          
          {/* Statistiques principales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 shadow-md bg-white dark:bg-[#111] flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Stock total</span>
              <span className="text-2xl font-semibold mt-2">15 432</span>
            </div>
            <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 shadow-md bg-white dark:bg-[#111] flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Factures à relancer</span>
              <span className="text-2xl font-semibold mt-2">8</span>
            </div>
            <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 shadow-md bg-white dark:bg-[#111] flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Alertes DLC</span>
              <span className="text-2xl font-semibold mt-2">3</span>
            </div>
            <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 shadow-md bg-white dark:bg-[#111] flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Bénéfice global (€)</span>
              <span className="text-2xl font-semibold mt-2">72 580</span>
            </div>
          </div>

          {/* Actions rapides */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white dark:bg-white dark:text-black gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="/facture/nouveau"
            >
              ➕ Créer une facture
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
              href="/article/nouveau"
            >
              ➕ Ajouter un article
            </a>
          </div>

        </main>
      </div>
    </div>
  );
}
