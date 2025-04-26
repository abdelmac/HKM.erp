import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-5xl">
        {/* Logo */}
        <Image
          className="dark:invert"
          src="/logo-hkm.svg" // Remplace par ton logo
          alt="ERP HKM Logo"
          width={200}
          height={60}
          priority
        />

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
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-10">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/facture/nouveau"
          >
            🧾 Créer une facture
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="/article/nouveau"
          >
            ➕ Ajouter un article
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/parametres"
        >
          ⚙️ Paramètres
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/utilisateurs"
        >
          👥 Utilisateurs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/support"
        >
          📩 Support
        </a>
      </footer>
    </div>
  );
}
