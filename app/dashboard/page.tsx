import { Navbar } from "@/components/dashboard/navbar"
import { Overview } from "@/components/dashboard/overview"
import type { Navlink } from "@/components/dashboard/navbar"
import TransactionHistoryOverview from "@/components/dashboard/transactionOverview"


export default function Dashboard() {
  const navlinks: Navlink[] = [
    {
      icon: "wallet",
      linkName: "Dashboard",
      href: "#",
    },
    {
      icon: "trendingUp", 
      linkName: "Analytics",
      href: "#",
    },
    {
      icon: "creditCard",
      linkName: "Transactions",
      href: "#",
    },
    {
      icon: "chartPie",
      linkName: "Budget",
      href: "#",
    },
  ]

  return (
  <div className="w-full min-h-full overflow-hidden">
    <header>
      <Navbar 
        navLinks={navlinks}
      />
    </header>
    <main className="w-full min-h-screen px-6 py-4">
      <Overview />
      <TransactionHistoryOverview />
    </main>
  </div>
  )
}