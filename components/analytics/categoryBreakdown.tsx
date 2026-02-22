import { BudgetCategoryCard } from "../subcomponents/cardCollection";


export default function CategoryBreakDown(){
  return(
  <div
    className="w-full min-h-[100px] px-8 py-12 section-bg-1 "
  >
    <h1
      className="text-4xl font-audiowide mb-6"
    >
      <span className="gradient-1">
        Budget Breakdown
      </span>
    </h1>
    <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
      <BudgetCategoryCard
        title="Shopping"
        price="$100"
        percentage={10}
      />
      <BudgetCategoryCard
        title="Supplies"
        price="$400"
        percentage={40}
      />
      <BudgetCategoryCard
        title="Investment"
        price="$250"
        percentage={25}
      />
      <BudgetCategoryCard
        title="Savings"
        price="$250"
        percentage={25}
      />
    </div>
  </div>
  )
}