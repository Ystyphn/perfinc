'use client'
import { Ellipsis } from "lucide-react";
import { useState, useEffect, useRef, RefObject, } from "react";

import '@/app/globals.css'


function BudgetCard({title, totalCash, amount, percentage, remainingCash, addExpense, subtractExpense}:{
  title: string;
  totalCash: number;
  amount?: number
  percentage: number;
  remainingCash: number;
  addExpense: (value: number) => void;
  subtractExpense: (value: number) => void;
}){
  const [_amount, setAmount] = useState<number>(amount ? amount : 0);
  const [_percentage, setPercentage] = useState<number>(percentage);
  const sliderValue = useRef<number>(0);
  const sliderRef = useRef<HTMLInputElement>(null); // Reference to the slider

  const changeSliderValue = (value: number) => { // Prevents value movement if there are no longer remaining cash to allocate
    const maxAllowed: number = remainingCash / totalCash * 100 + _percentage;
    //console.log("Line 24, budgetCardDivision");
    //console.log("Remaining cash: ", remainingCash);
    //console.log("Max allowed value: ", maxAllowed);
    //console.log("-----------------------------------------------");
    sliderValue.current = Math.max(0, Math.min(maxAllowed, value)); 
    subtractExpense(_amount); // Practically remove this value from the expenses first
    setAmount(sliderValue.current / 100 * totalCash);
    addExpense(sliderValue.current / 100 * totalCash);
    setPercentage(sliderValue.current)
    return;
  }

  useEffect(() => { // Initializes the slider
    if (sliderRef.current){
      sliderValue.current = percentage;
      subtractExpense(_amount); // Practically remove this value from the expenses first
      setAmount(sliderValue.current / 100 * totalCash);
      addExpense(sliderValue.current / 100 * totalCash);
      //console.log("Line 31, budgetCardDivision");
      //console.log("Virtually accurate amount: ", percentage / 100 * totalCash);
      //console.log("Realistic amount: ", _amount);
      //console.log("-----------------------------------------------");
    }
  }, [])// Only run this on start of the program

  return(
  <div
    className="min-h-[150px] p-4 border-b-2 border-cyan-300 rounded-2xl bg-linear-to-br from-cyan-300/25 to-black/25"
  >
    {/* Header section */}
    <div className="text-2xl mb-6 flex flex-row">
      {/* Title */}
      <div className="grow font-quantico text-white flex items-center">
        {title}
      </div>
      {/* Options */}
      <div className="size-fit p-1 border-1 border-cyan-300 rounded-lg bg-cyan-300/55">
        <button className="text-cyan-300 flex items-center  cursor-pointer">
          <Ellipsis />
        </button>
      </div>
    </div>

    {/* Allocated Amount */}
    <div className="mb-6">
      <h3 className="font-quantico text-4xl text-cyan-500">
        ${Math.round(_amount * 100) / 100}
      </h3>
      <p className="font-jersey-25 text-md text-offwhite/30">
        Allocated Amount
      </p>
    </div>

    {/* Percent settings */}
    <div className="flex flex-row items-center gap-2">
      <input // Slider
        ref={sliderRef}
        onChange={(e) => {
          changeSliderValue(Number(e.currentTarget.value));
        }}
        type="range" 
        min={0} 
        max={100}
        step={1}
        value={sliderValue.current.toString()}
        className="slider-1 grow-1"
      />
      <div className="font-quantico text-md font-cyan-500">
        {Math.round(sliderValue.current)}%
      </div>
    </div>
  </div>
  )
}


export function BudgetingDivision({totalCash, remainingCash, setTotalExpenses, ref}:{
  totalCash: number;
  remainingCash: RefObject<number>;
  setTotalExpenses: (value: number) => void; // Parent's update total expenses
  ref: RefObject<HTMLDivElement | null>;
}){
  const [_remainingCash, setLocalRemainingCash] = useState<number>(remainingCash.current); // Local copy of the remainingCash
  const totalExpenses = useRef<number>(0);

  const subtractExpense = (value: number) => { // Subtracts expenses. Automatically prevents subzero values
    totalExpenses.current -= value;
    totalExpenses.current = Math.max(totalExpenses.current, 0);
    setTotalExpenses(totalExpenses.current);
  };

  const addExpense = (value: number) => { // Adds expenses. 
    totalExpenses.current += value;
    setTotalExpenses(totalExpenses.current);
  }

  useEffect(() => { // Set's local remaining cash to commit local changes
    setLocalRemainingCash(remainingCash.current);
    // console.log("Line 91, Budget Card Division", _remainingCash);
  }, [remainingCash]); // Hopefully this will run everytime the remaining cash changes

  return(
  <div 
    ref={ref}
    className="w-full min-h-[200px] p-2 section-bg-1 grid grid-cols-3 max-md:grid-cols-1"
  >
    <BudgetCard 
      title="Groceries"
      totalCash={totalCash}
      percentage={50.00}
      addExpense={addExpense}
      subtractExpense={subtractExpense}
      remainingCash={remainingCash.current}
    />
    <BudgetCard 
      title="Water Bill"
      totalCash={totalCash}
      percentage={15.00}
      addExpense={addExpense}
      subtractExpense={subtractExpense}
      remainingCash={remainingCash.current}
    />
  </div>
  )
}