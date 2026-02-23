'use client'
import { TrendingUp, Wallet } from "lucide-react";
import { FinanceOverviewCard } from "../subcomponents/cardCollection"
import { IncomeExpenseChart } from "../subcomponents/incomeExpenseChart";
import { BudgetingPieChart } from "../subcomponents/pieChart";


export function Overview({user}:{
  user: string;
}){
  return (
  <div className="w-full py-4 pb-6 flex flex-col gap-4">
    {/* Heading */}
    <div className="w-full flex flex-col">
      <h1 className="text-4xl font-jersey-25"><span className="gradient-1">Welcome back</span>, {user}</h1>
      <p className="font-quantico text-offwhite">Here's your financial overview for Month Year</p>
    </div>

    {/* Quick overview */}
    <div className="w-full flex max-md:flex-col gap-3">
      <FinanceOverviewCard 
        icon={<Wallet/>}
        header="Total Balance"
        content="$4,000"
        growth="+10%"
      />

      <FinanceOverviewCard 
        icon={<TrendingUp/>}
        header="Income"
        content="$500"
        growth="+2%"
      />

      <FinanceOverviewCard 
        icon={<Wallet/>}
        header="Expenses"
        content="$2,000"
        growth="-3%"
      />

      <FinanceOverviewCard 
        icon={<Wallet/>}
        header="Savings"
        content="$800"
        growth="+1%"
      />
    </div>

    {/* Charts */}
    <div id="chart-container" className="w-full min-h-[500] grid grid-cols-2 gap-3 max-md:grid-cols-1">
      <div // Income-expenses chart
        className="section-bg-1"
      >
        <IncomeExpenseChart />
      </div>

      <div // Budgeting Pie Chart
        className="section-bg-1 flex flex-col items-center"
      >
        <BudgetingPieChart />
        {/* Pie Chart Legends */}
        <div className="w-full p-4">
          <p className="text-md font-quantico">Legends</p>
        </div>
      </div>
    </div>
  </div>
  );
}