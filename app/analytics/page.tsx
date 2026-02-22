import CategoryBreakDown from "@/components/analytics/categoryBreakdown";
import { Navbar, type Navlink } from "@/components/dashboard/navbar";
import { Overview } from "@/components/dashboard/overview";


export default function AnalyticsPage(){
  const navlinks: Navlink[] = [
    {
      linkName: "Dashboard",
      href: "#",
      icon: "wallet",
    },
    {
      linkName: "Transactions",
      href: "#",
      icon: "creditCard"
    },
    {
      linkName: "Budget",
      href: "#",
      icon: "chartPie"
    }
  ]

  return (
  <div>
    <header>
      <Navbar navLinks={navlinks}/>
    </header>
    <main className="p-4">
      <Overview/>
      <CategoryBreakDown/>
    </main>
  </div>
  );
}