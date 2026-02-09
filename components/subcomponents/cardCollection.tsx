import '@/app/globals.css'


interface FinanceCardProps{
  icon?: React.ReactElement;
  header: string;
  content: string;
  growth: string;
}


export function FinanceOverviewCard({icon, header, content, growth}: FinanceCardProps){
  const growthBannerClass: string = `size-fit px-2 py-1 text-xs font-quantico rounded-xl ${parseFloat(growth) >= 0.0 ? "bg-lime-700/50 text-lime-300" : "bg-red-700/50 text-red-300"}`;

  return(
  <div 
    className="w-1/4 h-[180px] max-md:w-full p-4 border-teal-600 border-[0.5] rounded-lg flex flex-col gap-2"
  >
    {icon}
    <h4 className="text-xs text-offwhite font-jersey-25">{header}</h4>
    <h2 className="text-4xl py-2 font-quantico"><span className="gradient-2">{content}</span></h2>
    <div 
      className={growthBannerClass}
    >
      {growth}
    </div>
  </div>
  );
}