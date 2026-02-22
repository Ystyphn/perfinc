import { TrendingUp, Wallet } from "lucide-react";


function ProgressBar({percentage}: {percentage: number}){
  const translateX: number = 100 - percentage;

  return(
  <div className="flex flex-col gap-2">
    {/* Progress bar + percentage indicator */}
    <div className="flex flex-row gap-2 items-center">
      {/* Actual Progressbar */}
      <div className="h-[10px] grow-1 bg-gray-500 rounded-xl border-transparent overflow-hidden">
        <div 
          className="size-full rounded-lg bg-linear-to-r from-cyan-300 to-lime-300"
          style={{transform: `translateX(-${translateX}%)`}}
        />
      </div>
      {/* Progress number */}
      <div className="text-sm font-quantico text-offwhite/75">
        {percentage.toString()}% / 100%
      </div>
    </div>
    
    {/* Unallocated indicator */}
    {Math.round(translateX * 100) / 100 > 0 && <div className="text-md font-quantico text-lime-500 flex gap-2">
      <TrendingUp />
      {Math.round(translateX * 100) / 100}% Unallocated
    </div>}
  </div>
  );
}


export function TotalCashDivision({cashAmount, allocatedPercent, remainingCash}:
  {
    cashAmount: number;
    allocatedPercent: number;
    remainingCash: number;
  }
){

  return(
  <div className="w-full min-h-[200px] p-5 border-1 rounded-2xl border-cyan-300 bg-linear-to-br from-cyan-950/40 to-black/25">
    {/* Header */}
    <div className="size-fit mb-3 py-1 flex gap-2 items-center">
      <div className="size-fit p-2 text-cyan-200 bg-cyan-300/25 border-1 border-cyan-300 rounded-xl">
        <Wallet />
      </div>
      <h1 className="font-quantico text-lg text-offwhite/75">
        Total Cash
      </h1>
    </div>
    {/* Content */}
    <div className="mb-4 font-quantico text-4xl flex flex-col gap-2">
      <span className="gradient-2">
        ${cashAmount}
      </span>
      {/* Remaining Cash */}
      <div className="text-sm font-jersey-25 text-offwhite/45">
        {remainingCash}
      </div>
    </div>
    {/* Progress Bar */}
    <ProgressBar 
      percentage={allocatedPercent}
    />
  </div>
  );
}
