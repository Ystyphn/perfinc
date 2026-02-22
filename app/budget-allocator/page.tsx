'use client'
import { BudgetingDivision } from "@/components/budget-allocator/budgetCardDivision";
import { TotalCashDivision } from "@/components/budget-allocator/totalCashDivision";
import { Navbar, type Navlink } from "@/components/dashboard/navbar";
import { useRef, useState } from "react";


export default function BudgetAllocatorPage(){
  const navLinks: Navlink[] = [
    {
      linkName: "Dashboard",
      href: "#",
      icon: "wallet",
    },
    {
      linkName: "Analytics",
      href: "#",
      icon: "trendingUp"
    },
    {
      linkName: "Transactions",
      href: "#",
      icon: "chartPie",
    }
  ]
  const totalCash: number = 10000; // This is just a mock property
  const remainingCash = useRef<number>(totalCash);
  const totalExpenses = useRef<number>(0);
  const [remainingCashState, setRemainingCashState] = useState<number>(totalCash);
  const budgetDivisionRef = useRef<HTMLDivElement | null>(null);

  const changeTotalExpenses = (value: number) => { // Wraps the setter of totalExpenses state
    totalExpenses.current = value;
    setRemainingCashState(totalCash - totalExpenses.current);
    remainingCash.current = totalCash - totalExpenses.current;
    //console.log("Line 34, Budget Allocator Page");
    //console.log("Total expenses was: " + value.toString());
    //console.log("-----------------------------------------------");
  }

  return (
  <div className="w-full min-h-screen">
    <header className="w-full">
      <Navbar
        navLinks={navLinks}      
      />
    </header>

    <main className="w-full p-4 flex flex-col gap-4">
      <h1 className="text-6xl font-audiowide mb-4">
        <span className="gradient-1">Budget</span> Allocator
      </h1>
      <TotalCashDivision 
        cashAmount={totalCash}
        allocatedPercent={100}
        remainingCash={remainingCashState} // Uses the remainingCashState since change in remaining cash must trigger rerender here
      />
      <BudgetingDivision 
        totalCash={totalCash}
        remainingCash={remainingCash} // Uses remainingCash refObject because only needed here for calculation
        setTotalExpenses={changeTotalExpenses}
        ref={budgetDivisionRef}
      />
    </main>
  </div>
  )
}