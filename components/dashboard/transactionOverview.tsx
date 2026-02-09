'use client'
import { BanknoteArrowDownIcon, BanknoteArrowUpIcon } from "lucide-react";
import { useState, useEffect } from "react";


function HistoryStrip({title, briefDescription = "", type, price, transactionDate}: {
  title: string;
  briefDescription?: string;
  type: "income" | "expense"; // Determines whether a transaction is an income or an expense
  price: string
  transactionDate?: Date
}){
  const [fontColor, setFontColor] = useState<string>("white");
  const [icon, setIcon] = useState<React.ReactElement>(<></>);

  useEffect(() => { // Sets up fonts on first use
    if (type === "income") {
      setFontColor("lime-300");
      setIcon(<div className="size-fit p-2 bg-lime-500/50 rounded-lg border-1 border-lime-500"><BanknoteArrowUpIcon/></div>);
    } else if (type === "expense") { // Red themed icon for expenses, 'cause... why not?
      setFontColor("red-300");
      setIcon(<div className="size-fit p-2 bg-red-500/50 rounded-lg border-1 border-red-500"><BanknoteArrowDownIcon/></div>)
    } else { // Hoping it will that the program won't reach this part
      alert("History Transaction Edit Error! (Invalid Type output). Expecting income or expense only. Got " + type + " instead");
      return
    }
  }, []) // Only run this useEffect once

  return(
  <div className="p-3 section-bg-1 border-gray-600 transition-[border-color] duration-700 hover:border-cyan-300 flex gap-2">
    {icon}
    <div className="grow-1 flex flex-col">
      <h5 className={`font-quantico text-lg text-${fontColor} leading-none`}>{title}</h5>
      {briefDescription.trim().length > 0 && 
        <p className="font-jersey-25 text-offwhite">{briefDescription}</p>
      }
    </div>
    <div className={`p-2 text-${fontColor} font-quantico flex flex-col leading-none`}>
      {price}
      {transactionDate !== undefined && // Only put this in place only if the transactionDate was provided.
        <p className="text-sm text-offwhite font-jersey-25">{transactionDate.getMonth()}/{transactionDate.getMonth()}/{transactionDate.getFullYear()}</p>
      }
    </div>
  </div>
  );
}


export default function TransactionHistoryOverview() {
  const testDate: Date = new Date(); // Just for testing purposes only
  testDate.setDate(8)
  testDate.setMonth(2)
  testDate.setFullYear(2026)

  return (
  <div className="p-4 w-full min-h-[500px] section-bg-1 flex flex-col gap-4">
    <HistoryStrip
      title={"Investment Return"}
      briefDescription="Forex EURUSD income"
      transactionDate={testDate}
      type="income"
      price="$5,000.00"
    />
    <HistoryStrip
      title={"Groceries"}
      type="expense"
      price="$3,000.00"
    />
    <HistoryStrip
      title={"Salary"}
      type="income"
      price="$3,000.00"
    />
  </div>
  );
}